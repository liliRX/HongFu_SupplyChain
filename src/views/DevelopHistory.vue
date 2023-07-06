<template>
  <div id="history" class="media_container">
    <SecondTitle chinese-title="发展历程" english-title="Development" />
    <div class="swiperBG">
      <div class="swiperContainer">
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
              <img :src="slide.url" alt="" v-if="!isMobile" />
              <div class="history_description">
                <h1>{{ slide.title }}</h1>
                <p>{{ slide.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiperAside"></div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { historySwiper } from "@/utils/common.js";
import SecondTitle from "@/components/SecondTitle.vue";
import { storeToRefs } from "pinia";
import { useScaleStore } from "@/store/scalerate_store.js";

const modules = [Autoplay, Pagination, Navigation, A11y];
const store = useScaleStore();
const { isMobile } = storeToRefs(store);

const renderBullet = function (index, className) {
  return `<span class="${className}"><b>${historySwiper[index].time}</b></span>`;
};
</script>

<style lang="scss">
@import "@/assets/media_container.scss";

$deActive: grey;
$active: rgb(252, 18, 18);
$paginationHeight: 140px;
$paginationPadding: 150px;
$swiperImgHeight: 240px;
$paginationMobilePadding: 60px;
$paginationMobileHeight: 80px;

#history {
  margin-top: 100px;

  > header {
    font-size: 30px;
    font-weight: bold;
    text-align: end;
    margin-bottom: 40px;
  }

  .swiperBG {
    background-color: rgb(235, 235, 235);
    position: relative;
  }

  .swiperContainer {
    background-color: white;
    transform: translate(30px, -14px);
    border: 2px solid grey;
    scale: 95%;
    height: $paginationHeight + $swiperImgHeight + 40px;
    position: relative;
    z-index: 1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .swiperAside {
    width: 100%;
    position: absolute;
    border: 2px solid grey;
    scale: 95%;
    z-index: 0;
    height: $paginationHeight + $swiperImgHeight + 40px;
    bottom: 0;
  }

  .mySwiper {
    padding: 10px 0 30px;

    .historyLi {
      img {
        width: 100%;
        height: $swiperImgHeight;
      }

      .history_description {
        margin-left: 30px;

        h1 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 30px;
          color: rgb(252, 18, 18);
        }

        p {
          font-size: 22px;
          text-align: justify;
        }
      }

      padding: $paginationHeight $paginationPadding 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .swiper-button-prev {
      color: $deActive;
      left: 30px;
    }

    .swiper-button-next {
      color: $active;
      right: 30px;
    }

    .swiper-pagination {
      top: 0;
      text-align: center;
      width: calc(100% - $paginationPadding * 2);
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

  @media (max-width: 767px) {
    margin-top: 40px;
    .swiperBG {
      background-color: white;
      position: relative;
    }

    .swiperContainer {
      background-color: white;
      transform: none;
      border: none;
      scale: 95%;
      height: initial;
      position: relative;
      padding: 20px 0;
      z-index: 1;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .swiperAside {
      display: none;
    }

    .mySwiper {
      padding: 0;

      .historyLi {
        height: 100%;

        .history_description {
          margin-left: 0;

          h1 {
            margin-bottom: 10px;
            font-size: 25px;
          }

          p {
            font-size: 20px;
            line-height: 34px;
          }
        }

        padding: calc($paginationMobileHeight / 2 + 30px)
          $paginationMobilePadding 0;
        display: block;
      }

      .swiper-button-prev {
        left: 10px;

        &::after {
          font-size: 32px;
        }
      }

      .swiper-button-next {
        right: 10px;

        &::after {
          font-size: 32px;
        }
      }

      .swiper-pagination {
        width: 100%;
        height: $paginationMobileHeight;

        .swiper-pagination-bullet {
          width: 20px;
          height: 20px;

          > b {
            top: -25px;
            font-size: 14px;
          }
        }

        &::after {
          background-image: radial-gradient(
            circle,
            $active 15%,
            transparent 15%
          );
        }
      }
    }
  }
}
</style>
