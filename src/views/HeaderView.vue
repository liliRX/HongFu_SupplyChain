<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { routeMap } from "@/utils/common.js";
import {
  usePositionStore,
  useScaleStore,
  useFirstComing
} from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";
import { goPage, setRate } from "@/utils/utils.js";
import { source_url } from "@/utils/common.js";
import ScaleWrapper from "@/components/ScaleWrapper.vue";
import HeaderHumbergerButton from "@/components/HeaderHumbergerButton.vue";

const pathname = window.location.pathname.substring(1);
const store = useScaleStore();
const positionStore = usePositionStore();
const firstComing = useFirstComing();
const { rate, isMobile } = storeToRefs(store);
const { positionMap } = storeToRefs(positionStore);
const { aboutUs } = storeToRefs(firstComing);
const { setFirst } = firstComing;
const activeLi = ref(pathname ? pathname : "home");
const headerRef = ref(null);
const emit = defineEmits(["setHeaderActive"]);

const move = () => {
  const positions = positionMap.value;
  if (positions) {
    const scrollY = window.scrollY;
    emit(
      "setHeaderActive",
      scrollY > 0 || pathname === "eCommerceCloudWarehouse"
    );
    if (
      positions["aboutUs"] - 100 < scrollY &&
      scrollY < positions["centerServices"] - 100 &&
      !aboutUs.value
    ) {
      setFirst("aboutUs");
    }
    if (!isMobile.value) {
      const position = Object.keys(positions);
      for (let i = 0; i < position.length; i++) {
        if (positions[position[i]] - scrollY + 100 >= 0) {
          activeLi.value = position[i];
          break;
        }
      }
    }
  }
};

// 点击link
const goModule = (id) => {
  if (id !== "eCommerceCloudWarehouse") {
    if (window.location.origin + "/" !== window.location.href) {
      goPage(window.location.origin);
    } else {
      // console.log(100 * rate.value);
      console.log(1312);
      let top = positionMap.value[id] - 100 * rate.value;
      window.scroll({ top, behavior: "smooth" });
    }
  } else {
    const url =
      window.location.href.indexOf(id) > 0
        ? window.location.href
        : window.location.href + id;
    goPage(url);
  }
};

// 悬浮上触发
const onHover = () => {
  headerRef.value.classList.add("hoverHeader");
  setTimeout(() => {
    setRate(1);
  }, 80);
};

const onLeave = () => {
  headerRef.value.classList.remove("hoverHeader");
  setTimeout(() => {
    setRate(2);
  }, 80);
};

onMounted(() => {
  setTimeout(() => {
    move();
  }, 50);
  document.addEventListener(isMobile.value ? "touchmove" : "scroll", move);
});

onUnmounted(() => {
  document.removeEventListener(isMobile.value ? "touchmove" : "scroll", move);
});
</script>

<template>
  <ScaleWrapper>
    <div :class="`${isMobile ? 'headerMobile' : 'header'}`" ref="headerRef">
      <img class="hf-logo" :src="`${source_url}/img/hongfulogo.png`" alt="" />
      <ol class="nav" v-if="!isMobile">
        <li
          @mouseenter="li.children && onHover()"
          @mouseleave="li.children && onLeave()"
          @click="() => goModule(li.route)"
          :class="`${activeLi === li.route ? 'active' : ''}`"
          :key="li.route"
          v-for="li in routeMap"
        >
          {{ li.title }}
          <ol class="child" v-if="li.children">
            <li
              :class="`childLi ${activeLi === child.route ? 'active' : ''}`"
              @click="
                (e) => {
                  e.stopPropagation();
                  goModule(child.route);
                }
              "
              v-for="child in li.children"
            >
              {{ child.title }}
            </li>
          </ol>
        </li>
      </ol>
      <HeaderHumbergerButton v-else />
    </div>
  </ScaleWrapper>
</template>

<style lang="scss" scoped>
.hoverHeader {
  height: 120px !important;

  .child {
    opacity: 100 !important;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  height: 90px;
  width: 1300px;
  margin: auto;

  .hf-logo {
    display: flex;
    width: 260px;
    height: 70px;
  }

  .nav {
    display: flex;
    height: 70px;
    align-items: center;

    .child {
      position: absolute;
      margin-top: 3px;
      padding: 15px 0 20px;
      width: 100%;
      text-align: center;
      opacity: 0;
      transition: all 0.4s linear;

      .childLi {
        font-size: 16px;
      }
    }

    .active {
      border-bottom: 3px solid red;
    }

    > li {
      border-bottom: 3px solid transparent;
      position: relative;
      padding-bottom: 3px;
      font-size: 20px;
      cursor: pointer;
      margin-left: 34px;
      transition: all 0.4s linear;

      &:hover {
        border-bottom: 3px solid red;
      }
    }
  }
}

.headerMobile {
  background-color: #fff;
  width: 100%;
  z-index: 10;
  top: 0;
  position: fixed;
  padding: 10px 10px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hf-logo {
    width: 180px;
    height: 50px;
  }
}
</style>
