<template>
  <div id="home">
    <swiper
      ref="homeSwiper"
      :slidesPerView="1"
      :loop="true"
      :centeredSlides="true"
      :effect="'fade'"
      :fadeEffect="{
        crossFade: true
      }"
      :pagination="{
        clickable: true,
        renderBullet
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :navigation="false"
      :modules="modules"
      @init="init"
      @slideChange="slideChange"
      class="mySwiper"
    >
      <swiper-slide
        :key="`src_${index}`"
        v-for="(slide, index) in swiperSlides"
      >
        <img class="slide_img" :src="slide.src" alt="" />
        <div class="swiper_title">
          <div>发展源于<span>创造价值</span></div>
          <div>为客户降本增效是公司发展的驱动力</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import service_slide1 from "@/assets/img/swiper_pic01.jpg";
import service_slide2 from "@/assets/img/swiper_pic02.jpg";
import service_slide3 from "@/assets/img/swiper-pic03.jpg";
import { ref } from "vue";

const homeSwiper = ref(null);

const modules = [Autoplay, Pagination, Navigation, A11y, EffectFade];

const swiperSlides = [
  { src: service_slide1 },
  { src: service_slide2 },
  { src: service_slide3 }
];

const init = function () {
  setTimeout(function () {
    $(".swiper-pagination .swiper-pagination-bullet:eq(0)").addClass("active");
  }, 0);
};

const slideChange = function (swiper) {
  $(".swiper-pagination .swiper-pagination-bullet").removeClass("active");
  $(
    ".swiper-pagination .swiper-pagination-bullet:eq(" + swiper.realIndex + ")"
  ).addClass("active");
};

const renderBullet = function (index, className) {
  return (
    '<span class="' +
    className +
    '"><b class="num">0' +
    (index + 1) +
    '</b><i class="line"></i></span>'
  );
};
</script>

<style lang="scss">
$color: rgb(43, 121, 237);

#home {
  .mySwiper {
    height: 760px;

    .slide_img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      transform: rotateY(180deg);
    }

    .swiper-slide {
      position: relative;

      .swiper_title {
        margin-left: 50px;
        font-family: douyuFont;
        position: absolute;
        z-index: 10;
        top: 50%;
        transform: translateY(calc(-50%));
        left: 0;
        color: white;
        font-size: 40px;

        span {
          color: rgba(245, 7, 7, 1);
        }
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(235, 236, 237, 0.3);
      }
    }
  }

  .swiper-pagination {
    right: 4.323%;
    text-align: center;
    width: auto;
    bottom: 50%;
    left: auto;
    -webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0);
  }

  .swiper-pagination .swiper-pagination-bullet {
    margin: 0 0 3em;
    width: auto;
    height: auto;
    background-color: transparent;
    display: block;
    opacity: 1;
    position: relative;
    -webkit-transition: padding 0.5s linear;
    transition: padding 0.5s linear;
  }

  .swiper-pagination .swiper-pagination-bullet:last-child {
    margin: 0;
  }

  .swiper-pagination .swiper-pagination-bullet.active {
    padding: 0 0 16.25em;
  }

  .swiper-pagination .swiper-pagination-bullet:last-child.active {
    padding: 16.25em 0 0;
  }

  .swiper-pagination .swiper-pagination-bullet .num {
    font-size: 1.125em;
    color: #fff;
    font-family: Arial;
    font-weight: bold;
  }

  .swiper-pagination .swiper-pagination-bullet .line {
    /* content: ""; */
    width: 2px;
    height: 0;
    background-color: rgba(255, 255, 255, 0.3);
    display: block;
    -webkit-transition: height 0.5s linear;
    transition: height 0.5s linear;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    bottom: 0;
  }

  .swiper-pagination .swiper-pagination-bullet:last-child .line {
    bottom: auto;
    top: 0;
  }

  .swiper-pagination .swiper-pagination-bullet.active .line {
    height: 14.25em;
  }

  .swiper-pagination .swiper-pagination-bullet .line::after {
    content: "";
    background-color: #fff;
    width: 100%;
    height: 0;
    display: block;
    -webkit-transition: height 2.5s linear 0.5s;
    transition: height 2.5s linear 0.5s;
    position: absolute;
    top: 0;
  }

  .swiper-pagination .swiper-pagination-bullet:last-child .line::after {
    bottom: 0;
    top: auto;
  }

  .swiper-pagination .swiper-pagination-bullet.active .line::after {
    height: 100%;
  }
}
</style>
