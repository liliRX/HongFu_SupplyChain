<template>
  <div :class="`wrapper ${route ? 'clickAble' : ''}`" @click="serveClick">
    <img :src="data.url" alt="" />
    <div>
      <span>{{ data.type }}</span>
    </div>
  </div>
</template>

<script setup>
import { goPage } from "@/utils/utils.js";

const { data, route } = defineProps(["data", "route"]);

// serveiceClick
const serveClick = () => {
  if (route) {
    goPage(window.location.href + route);
  }
};
</script>

<style lang="scss">
@import "@/assets/font.scss";

$bgColor: rgba(255, 79, 79, 0.16);

.clickAble {
  cursor: pointer;
}

.wrapper {
  height: 380px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  > div {
    > span {
      opacity: 1;
    }

    background-image: repeating-linear-gradient(
      60deg,
      $bgColor,
      $bgColor 10px,
      transparent 0,
      transparent 40px
    );
    font-family: Alibaba;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    font-size: 38px;
    letter-spacing: 10px;
    color: white;
    background-color: rgb(246, 63, 63, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
