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
          <header>{{ item.title }}</header>
          <p>{{ item.description }}</p>
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
    height: 400px;
    border-radius: 10px;
    margin-left: 15px;
    padding: 15px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    background-image: url("@/assets/img/advantage_section_bg.png");
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 60%;

    header {
      font-size: 18px;
      color: red;
      width: 200px;
      margin: 0 auto 20px;
      font-weight: bold;
      text-align: center;
      height: 40px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }

    //> img {
    //  width: 100%;
    //  height: 100%;
    //  border-radius: 10px;
    //}
  }
}
</style>
