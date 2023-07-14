<template>
  <div :class="isMobile ? 'app' : ''">
    <header :class="`header_container ${headerActive ? 'header_active' : ''}`">
      <HeaderView @setHeaderActive="judgeIsTop" />
    </header>
    <Layout />
  </div>
</template>

<script setup>
import Layout from "@/layout/LayoutView.vue";
import HeaderView from "@/views/HeaderView.vue";
import { onBeforeMount, provide, ref } from "vue";
import { useScaleStore, usePositionStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";

const store = useScaleStore();
const { isMobile } = storeToRefs(store);
const { setIsMobile } = store;
provide("isMobile", isMobile);
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
  } else {
    setIsMobile(false);
  }
};

// 判断是否偏离了顶部
const judgeIsTop = (value) => {
  headerActive.value = value;
};
</script>

<style lang="scss" scoped>
.header_container {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  transition: all 0.2s linear;
  color: black;
  background-color: #fff;
}

.header_active {
  color: black;
  background-color: white;
  -webkit-box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
  -moz-box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
  box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
}

.app {
  overflow: hidden;
}
</style>
