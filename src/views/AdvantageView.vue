<script setup>
import { advantages } from "../utils/common.js";
import SecondTitle from "../components/SecondTitle.vue";
</script>

<template>
  <div class="adv-wrapper" id="Advantage">
    <div></div>
    <main>
      <SecondTitle chinese-title="我们的优势" english-title="Advantage" />
      <section class="adv-img">
        <div class="img_container" v-for="item in advantages" :key="item.url">
          <img :src="item.url" :alt="item.description" />
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.adv-wrapper {
  margin: 0 0 60px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 230px 1fr;
  background-image: url("@/assets/img/advantage_bg.png");
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;

  .adv-img {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .img_container {
    height: 360px;
    border-radius: 10px;
    margin-left: 15px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

    > img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>
