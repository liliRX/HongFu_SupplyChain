<template>
  <template v-if="!isMobile">
    <HeaderView />
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
import { setRate } from "@/utils/utils.js";
import { useScaleStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";
import HeaderView from "@/views/HeaderView.vue";

const store = useScaleStore();
const { isMobile } = storeToRefs(store);
const { setScaleRate, setIsMobile } = store;

const regularSetTimer = ref(null);

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

onMounted(() => {
  setScaleRate(document.body.clientWidth / 1584);

  regularSetTimer.value = setInterval(function () {
    setRate();
  }, 300);

  window.addEventListener("resize", function () {
    searchEquipment();
    setScaleRate(document.body.clientWidth / 1584);
  });
});

onUnmounted(() => {
  clearInterval(regularSetTimer.value);
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
}
</style>
