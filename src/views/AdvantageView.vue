<script setup>
import { advantages } from "../utils/common.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import SecondTitle from "../components/SecondTitle.vue";

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
        <div class="img_container">
          <p class="title">{{ slide.title }}</p>
          <p class="description">{{ slide.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
@import "@/assets/media_container.scss";

#Advantage {
  margin-top: 100px;
  padding-bottom: 40px;

  .mySwiper {
    overflow: visible !important;
  }

  .img_container {
    height: 340px;
    border-radius: 10px;
    margin-left: 15px;
    padding: 15px 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff;

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
