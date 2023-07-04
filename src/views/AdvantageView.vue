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
          <header><img :src="item.url" alt="" /></header>
          <p class="title">{{ item.title }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.adv-wrapper {
  margin-top: 100px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 230px 1fr;

  .adv-img {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .img_container {
    height: 400px;
    border-radius: 10px;
    margin-left: 15px;
    padding: 15px 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    background-image: url("@/assets/img/advantage_section_bg.png");
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 60%;

    &:hover {
      background-color: red;
      background-image: url("@/assets/img/about_num_bg.png");
      background-size: 55%;

      .title {
        display: none;
      }

      .description {
        color: white;
        display: initial;
      }
    }

    cursor: pointer;
    z-index: 1;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    -webkit-transform: scale(1);
    transform: scale(1);

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      > img {
        width: 40px;
        height: 40px;
      }
    }

    .title {
      display: initial;
    }

    .description {
      display: none;
    }

    p {
      font-weight: bold;
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
