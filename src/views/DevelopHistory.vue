<template>
  <div id="history">
    <SecondTitle chinese-title="发展历史" english-title="History" />
    <swiper
      :slidesPerView="1"
      :speed="500"
      :loop="true"
      :pagination="{
        // el: '#history .swiper-pagination',
        clickable: true,
        renderBullet
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :navigation="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        :key="`history_swiper_${index}`"
        v-for="(slide, index) in historySwiper"
      >
        <div class="historyLi">
          <img :src="slide.url" alt="" />
          <div class="history_description">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import SecondTitle from "@/components/SecondTitle.vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { historySwiper } from "@/utils/common.js";

const modules = [Autoplay, Pagination, Navigation, A11y];

const renderBullet = function (index, className) {
  return `<span class="${className}"><b class="num">${historySwiper[index].time}</b></span>`;
};
</script>

<style lang="scss">
$deActive: grey;
$active: rgb(252, 18, 18);
$paginationHeight: 140px;

#history {
  margin-top: 100px;

  .mySwiper {
    .historyLi {
      img {
        width: 100%;
        height: 340px;
      }

      .history_description {
        margin-left: 30px;

        h1 {
          text-align: center;
          margin: 20px 0;
          font-size: 30px;
          color: rgb(252, 18, 18);
        }

        p {
          font-size: 22px;
          text-align: justify;
        }
      }

      padding: $paginationHeight 100px 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .swiper-button-prev {
      color: $deActive;
    }

    .swiper-button-next {
      color: $active;
    }

    .swiper-pagination {
      top: 0;
      text-align: center;
      width: calc(100% - 200px);
      height: $paginationHeight;
      left: 50%;
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
      display: flex;
      justify-content: space-around;
      align-items: center;

      .swiper-pagination-bullet-active {
        background-color: $active !important;

        > b {
          color: $active !important;
        }
      }

      .swiper-pagination-bullet {
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        position: relative;
        opacity: 1;
        background-color: #b3b3b3;

        > b {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: #b3b3b3;
        }
      }

      &::after {
        position: absolute;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        content: "";
        width: 100%;
        height: 20px;
        background-color: transparent;
        background-image: radial-gradient(circle, $active 25%, transparent 26%);
        background-size: 20px 20px;
      }
    }
  }
}
</style>
