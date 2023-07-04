<script setup>
import { advantages } from "../utils/common.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import SecondTitle from "../components/SecondTitle.vue";
import swiperBg from "@/assets/img/about_num_bg.png";

const modules = [Pagination, Navigation, A11y];
</script>

<template>
  <div id="Advantage">
    <SecondTitle chinese-title="我们的优势" english-title="Advantage" />
    <swiper
      :spaceBetween="40"
      :slides-per-view="2"
      :slides-offset="50"
      :space-between="40"
      :speed="500"
      :pagination="{
        // el: '#history .swiper-pagination',
        clickable: true,
        renderBullet
      }"
      :navigation="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper media_container"
    >
      <swiper-slide
        :key="`history_swiper_${index}`"
        v-for="(slide, index) in advantages"
      >
        <div class="adv_container">
          <img :src="swiperBg" class="adv_img" />
          <div>
            <p class="description">{{ slide.description }}</p>
            <p class="title">{{ slide.title }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
@import "@/assets/media_container.scss";
@import "@/assets/font.scss";

#Advantage {
  margin-top: 100px;
  padding-bottom: 40px;

  .mySwiper {
    margin-top: 40px;
    overflow: visible !important;
  }

  .adv_container {
    height: 320px;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    overflow: hidden;
    position: relative;

    > div {
      height: 100%;
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
    }

    .adv_img {
      position: absolute;
      left: -10%;
      bottom: -20%;
      z-index: 0;
      width: 300px;
      transform: rotateZ(45deg);
    }

    &:hover {
      background-color: rgba(252, 18, 18, 0.6);

      .adv_img {
        opacity: 40%;
      }

      .title {
        color: white;
      }

      .description {
        color: white;
      }
    }

    cursor: pointer;
    z-index: 1;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
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
      font-size: 44px;
      font-family: PangMen;
      color: rgba(252, 18, 18, 1);
    }

    p {
      font-weight: bold;
      font-size: 24px;
      line-height: 34px;
    }

    //> img {
    //  width: 100%;
    //  height: 100%;
    //  border-radius: 10px;
    //}
  }
}
</style>
