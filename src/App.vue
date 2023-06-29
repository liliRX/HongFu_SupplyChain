<template>
  <template v-if="!isMobile">
    <header :class="`header_container ${headerActive ? 'header_active' : ''}`">
      <div class="out-body">
        <div class="body">
          <HeaderView @setHeaderActive="judgeIsTop" />
        </div>
      </div>
    </header>
    <div class="out-body">
      <div class="body">
        <Layout />
      </div>
    </div>
  </template>
  <template class="app" v-else>
    <HeaderView />
    <Layout />
  </template>
</template>

<script setup>
import Layout from "@/layout/LayoutView.vue";
import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";
import { setRate, sumBeforeIndex } from "@/utils/utils.js";
import { useScaleStore, usePositionStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";
import HeaderView from "@/views/HeaderView.vue";
import { routeMap } from "@/utils/common.js";

const store = useScaleStore();
const positionStore = usePositionStore();
const { isMobile } = storeToRefs(store);
const { setScaleRate, setIsMobile } = store;
const { setPosition } = positionStore;
const headerActive = ref(false);

onBeforeMount(() => {
  searchEquipment();
});

const searchEquipment = () => {
  if (
    navigator.userAgent.match(/Mobi/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    // 当前设备是移动设备
    setIsMobile(true);
  }
};

// 判断是否偏离了顶部
const judgeIsTop = (value) => {
  headerActive.value = value;
};

// 计算位置
const calculatePosition = () => {
  const heightMap = routeMap.reduce((pre, i) => {
    let height = document
      .querySelector(`#${i.route}`)
      .getBoundingClientRect().height;
    pre.push(Math.round(height));
    return pre;
  }, []);
  const positionMap = routeMap.reduce((pre, i, currentIndex) => {
    pre[i.route] = sumBeforeIndex(heightMap, currentIndex);
    return pre;
  }, {});
  setPosition(positionMap);
};

// 设置缩放比
const setScale = () => {
  setScaleRate(document.body.clientWidth / 1584);
  setTimeout(() => {
    setRate();
    calculatePosition();
  }, 200);
};

onMounted(() => {
  setScale();

  window.addEventListener("resize", function () {
    searchEquipment();
    setScale();
  });
});
</script>

<style lang="scss" scoped>
.header_container {
  position: fixed;
  z-index: 10;
  background-color: white;
  width: 100%;
  top: 0;
  transition: all 0.2s linear;
}

.header_active {
  -webkit-box-shadow: 0px 1px 2px 0px rgba(30, 30, 30, 0.59);
  -moz-box-shadow: 0px 1px 2px 0px rgba(30, 30, 30, 0.59);
  box-shadow: 0px 1px 2px 0px rgba(30, 30, 30, 0.59);
}

.body {
  width: 1584px;
  transform-origin: top left;
}

.out-body {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
