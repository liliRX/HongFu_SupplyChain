<script setup>
import hongFu_logo from "@/assets/img/hongfulogo.png";
import { onMounted, onUnmounted, ref } from "vue";
import { routeMap } from "@/utils/common.js";
import {
  usePositionStore,
  useScaleStore,
  useFirstComing
} from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";
import { setRate } from "@/utils/utils.js";

const store = useScaleStore();
const positionStore = usePositionStore();
const firstComing = useFirstComing();
const { rate, isMobile } = storeToRefs(store);
const { positionMap } = storeToRefs(positionStore);
const { aboutUs } = storeToRefs(firstComing);
const { setFirst } = firstComing;
const activeLi = ref("home");
const headerRef = ref(null);
const emit = defineEmits(["setHeaderActive"]);

const move = () => {
  const positions = positionMap.value;
  const scrollY = window.scrollY;
  if (
    positions["aboutUs"] - 200 < scrollY &&
    scrollY < positions["centerServices"] - 200 &&
    !aboutUs.value
  ) {
    setFirst("aboutUs");
  }
  emit("setHeaderActive", scrollY > positions["aboutUs"] - 100);
  const position = Object.keys(positions);
  for (let i = 0; i < position.length; i++) {
    if (positions[position[i]] - scrollY + 100 >= 0) {
      activeLi.value = position[i];
      break;
    }
  }
};

const goModule = (id) => {
  if (id !== "http") {
    window.scroll({ top: positionMap.value[id], behavior: "smooth" });
  } else {
    // goNewPage("https://www.cnnice.com/");
  }
};

// 悬浮上触发
const onHover = () => {
  headerRef.value.classList.add("hoverHeader");
  setTimeout(() => {
    setRate();
  }, 100);
};

const onLeave = () => {
  headerRef.value.classList.remove("hoverHeader");
  setTimeout(() => {
    setRate();
  }, 100);
};

onMounted(() => {
  setTimeout(() => {
    move();
  }, 300);
  window.addEventListener("scroll", move);
});

onUnmounted(() => {
  window.removeEventListener("scroll", move);
});
</script>

<template>
  <div class="header" ref="headerRef">
    <img class="hf-logo" :src="hongFu_logo" alt="" />
    <ol class="nav">
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
          <li class="childLi" v-for="child in li.children">
            {{ child.title }}
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.hoverHeader {
  height: 120px !important;

  .child {
    display: block !important;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  height: 90px;
  width: 1300px;
  margin: auto;
  transition: all 80ms linear;

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
      display: none;
      margin-top: 3px;
      padding: 15px 0 20px;
      width: 100%;
      text-align: center;

      .childLi {
        font-size: 18px;
      }
    }

    .active {
      border-bottom: 3px solid red;
    }

    > li {
      border: 3px solid transparent;
      position: relative;
      padding-bottom: 3px;
      font-size: 21px;
      cursor: pointer;
      margin-right: 80px;

      &:hover {
        border-bottom: 3px solid red;
      }
    }
  }
}
</style>
