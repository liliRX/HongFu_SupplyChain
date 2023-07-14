<template>
  <div v-if="!isMobile" class="out-body">
    <div class="body">
      <slot />
    </div>
  </div>
  <template v-else>
    <slot />
  </template>
</template>

<script setup>
import { routeMap } from "@/utils/common.js";
import { setRate, sumBeforeIndex } from "@/utils/utils.js";
import { inject, onMounted } from "vue";
import { useScaleStore, usePositionStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";

const store = useScaleStore();
const { rate } = storeToRefs(store);
const positionStore = usePositionStore();
const { setScaleRate } = store;
const { setPosition } = positionStore;
const isMobile = inject("isMobile");

// 计算位置
const calculatePosition = () => {
  if (window.location.pathname === "/") {
    const heightMap = routeMap.reduce((pre, i) => {
      let height = document
        .querySelector(`#${i.route}`)
        .getBoundingClientRect().height;
      height = height + (isMobile.value ? 40 : rate.value * 100);
      pre.push(Math.round(height));
      return pre;
    }, []);
    const positionMap = routeMap.reduce((pre, i, currentIndex) => {
      pre[i.route] = sumBeforeIndex(heightMap, currentIndex);
      return pre;
    }, {});
    setPosition(positionMap);
  }
};

// 设置缩放比
const setScale = () => {
  const newRate = document.body.clientWidth / 1584;
  setScaleRate(newRate);
  setRate();
  calculatePosition();
};

onMounted(() => {
  setScale();

  window.addEventListener("resize", function () {
    setScale();
  });
});
</script>

<style lang="scss" scoped>
.body {
  width: 1584px;
  transform-origin: top left;
}

.out-body {
  overflow-y: hidden;
  overflow-x: hidden;
  transition: all 0.2s linear;
}
</style>
