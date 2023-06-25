<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :centeredSlides="true"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide :key="`src_${index}`" v-for="(slide, index) in swiperSlides">
      <img class="slide_img" :src="slide.src" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import service_slide1 from "@/assets/img/service-pic01.png";
import service_slide2 from "@/assets/img/service-pic02.png";
import service_slide3 from "@/assets/img/service-pic03.png";

const modules = [Autoplay, Pagination, Navigation, A11y];

const swiperSlides = [
  { src: service_slide1 },
  { src: service_slide2 },
  { src: service_slide3 }
];
</script>

<style lang="scss">
$color: rgb(43, 121, 237);

.mySwiper {
  height: 760px;

  .slide_img {
    object-position: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(41, 128, 227, 0.5);
    }
  }
}

.swiper-pagination {
  bottom: 40px !important;
}

//修改分页器圆点大小
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  margin: 0 13px !important;
  background-color: #fff;
}

//修改分页器圆点之间的距离
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 8px;
}

//修改上下页箭头样式
.swiper-button-prev,
.swiper-button-next {
  color: $color;
}
</style>
