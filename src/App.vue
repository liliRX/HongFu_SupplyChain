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
  <div class="app" v-else>
    <HeaderView />
    <Layout />
  </div>
</template>

<script setup>
import Layout from "@/layout/LayoutView.vue";
import { onBeforeMount, onMounted, ref } from "vue";
import { setRate, sumBeforeIndex } from "@/utils/utils.js";
import { useScaleStore, usePositionStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";
import HeaderView from "@/views/HeaderView.vue";
import { routeMap } from "@/utils/common.js";

const store = useScaleStore();
const positionStore = usePositionStore();
const { isMobile, rate } = storeToRefs(store);
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
  setScaleRate(document.body.clientWidth / 1584);
  setRate();
  calculatePosition();
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
  width: 100%;
  top: 0;
  transition: all 0.2s linear;
  color: black;
}

.header_active {
  color: black;
  background-color: white;
  -webkit-box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
  -moz-box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
  box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
}

.body {
  width: 1584px;
  transform-origin: top left;
}

.out-body {
  overflow-y: hidden;
  overflow-x: hidden;
  transition: all 0.2s linear;
}

.app {
  overflow: hidden;
}
</style>
