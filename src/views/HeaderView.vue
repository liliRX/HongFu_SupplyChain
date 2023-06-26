<script setup>
import hongFu_logo from "@/assets/img/hongfulogo.png";
import { onMounted, onUnmounted, ref } from "vue";
import { debounce, goNewPage } from "@/utils/utils.js";
import { routeMap } from "@/utils/common.js";
import { usePositionStore, useScaleStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";

const store = useScaleStore();
const positionStore = usePositionStore();
const { rate, isMobile } = storeToRefs(store);
const { positionMap } = storeToRefs(positionStore);
const activeLi = ref("home");

const move = debounce(() => {
  const scrollY = window.scrollY;
  const position = Object.keys(positionMap.value);
  for (let i = 0; i < position.length; i++) {
    console.log(100 * rate.value);
    if (positionMap.value[position[i]] - scrollY >= 0) {
      activeLi.value = position[i];
      break;
    }
  }
}, 100);

const goModule = (id) => {
  if (id !== "http") {
    window.scroll({ top: positionMap.value[id], behavior: "smooth" });
  } else {
    // goNewPage("https://www.cnnice.com/");
  }
};

onMounted(() => {
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
        :class="activeLi === li.route ? 'active' : ''"
        :key="li.route"
        v-for="li in routeMap"
      >
        {{ li.title }}
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
    }
  }
}
</style>
