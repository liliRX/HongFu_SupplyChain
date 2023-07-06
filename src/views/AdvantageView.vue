<script setup>
import { advantages } from "../utils/common.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import swiperBg from "@/assets/img/about_num_bg.png";
import { ref } from "vue";
import SecondTitle from "@/components/SecondTitle.vue";

const modules = [Pagination, Navigation, A11y];
const activeLi = ref("战略合作");
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
      :pagination="{ type: 'progressbar' }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :modules="modules"
      class="mySwiper media_container"
    >
      <swiper-slide
        :key="`history_swiper_${index}`"
        v-for="(slide, index) in advantages"
      >
        <div
          :class="`adv_container ${
            activeLi === slide.title ? 'adv_container_active' : ''
          }`"
          @mouseenter="() => (activeLi = slide.title)"
        >
          <img :src="swiperBg" class="adv_img" />
          <div>
            <p class="description">{{ slide.description }}</p>
            <p class="title">{{ slide.title }}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev">
        <i :class="`iconfont icon-jiantou_xiangzuo`"></i>
      </div>
      <div class="swiper-button-next">
        <i :class="`iconfont icon-jiantou_xiangyou`"></i>
      </div>
    </swiper>
  </div>
</template>

<style lang="scss">
@import "@/assets/media_container.scss";
@import "@/assets/font.scss";

#Advantage {
  margin-top: 100px;
  padding-bottom: 40px;

  .adv_header {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .mySwiper {
    margin-top: 40px;
    padding-bottom: 80px;
    overflow: visible !important;
  }

  .adv_container_active {
    background-color: rgba(252, 18, 18, 0.6) !important;

    .adv_img {
      opacity: 40% !important;
    }

    .title {
      color: white !important;
    }

    .description {
      color: white !important;
    }
  }

  .adv_container {
    height: 320px;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    overflow: hidden;
    position: relative;
    user-select: none;
    cursor: pointer;
    z-index: 1;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-transform: scale(1);
    transform: scale(1);

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
      font-size: 22px;
      letter-spacing: 3px;
      line-height: 34px;
    }
  }

  .swiper-pagination-progressbar {
    bottom: 20px;
    left: initial;
    right: 0;
    top: initial;
    width: 86%;
    background-color: rgba(239, 123, 123, 0.4);
  }

  .swiper-pagination-progressbar-fill {
    background-color: red;
  }

  .swiper-button-prev {
    left: 0;
    bottom: 0;
    top: initial;
    color: grey;

    i {
      font-size: 30px;
    }

    &::after {
      display: none;
    }
  }

  .swiper-button-next {
    left: 50px;
    bottom: 0;
    top: initial;
    color: grey;

    i {
      font-size: 30px;
    }

    &::after {
      display: none;
    }
  }
}
</style>
