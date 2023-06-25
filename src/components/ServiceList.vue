<template>
  <div class="wrapper">
    <img :src="data.url" alt="" />
    <div>{{ data.type }}</div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
</script>

<style lang="scss">
@import "@/assets/font.scss";

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
    font-family: Alibaba;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 140px;
    font-size: 38px;
    letter-spacing: 10px;
    color: white;
    background-color: rgb(8, 147, 240);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
