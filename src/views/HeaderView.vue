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

const store = useScaleStore();
const positionStore = usePositionStore();
const firstComing = useFirstComing();
const { rate, isMobile } = storeToRefs(store);
const { positionMap } = storeToRefs(positionStore);
const { aboutUs } = storeToRefs(firstComing);
const { setFirst } = firstComing;
const activeLi = ref("home");
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
    if (positions[position[i]] - scrollY >= 0) {
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
  <div class="header">
    <img class="hf-logo" :src="hongFu_logo" alt="" />
    <ol class="nav">
      <li
        @click="() => goModule(li.route)"
        :class="`${activeLi === li.route ? 'active' : ''}`"
        :key="li.route"
        v-for="li in routeMap"
      >
        {{ li.title }}
        <div class="child" v-if="li.children">1231</div>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.active {
  border-bottom: 3px solid red;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  min-height: 90px;
  width: 1300px;
  margin: auto;

  .hf-logo {
    display: flex;
    width: 260px;
  }

  .nav {
    display: flex;

    > li {
      padding-bottom: 3px;
      font-size: 21px;
      cursor: pointer;
      margin-left: 80px;
      position: relative;

      .child {
        position: absolute;
        border: 1px solid red;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
