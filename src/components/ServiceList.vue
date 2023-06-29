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

$bgColor: #fb3434;

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
    height: 130px;
    font-size: 38px;
    letter-spacing: 10px;
    color: white;
    background-color: rgb(252, 18, 18);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
