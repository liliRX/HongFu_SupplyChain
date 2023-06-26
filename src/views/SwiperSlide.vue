<template>
  <div id="home">
    <swiper
      :slidesPerView="1"
      :loop="true"
      :centeredSlides="true"
      :pagination="{
        clickable: true
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :navigation="false"
      :modules="modules"
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
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import service_slide1 from "@/assets/img/swiper_pic01.jpg";
import service_slide2 from "@/assets/img/swiper_pic02.jpg";
import service_slide3 from "@/assets/img/swiper-pic03.jpg";

const modules = [Autoplay, Pagination, Navigation, A11y];

const swiperSlides = [
  { src: service_slide1 },
  { src: service_slide2 },
  { src: service_slide3 }
];
</script>

<style lang="scss">
$color: rgb(43, 121, 237);
$marginTop: 90px;

.mySwiper {
  padding-top: $marginTop;
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
      transform: translateY(calc(-50% - $marginTop / 2));
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
  bottom: 50px !important;
}

//修改分页器圆点大小
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  margin: 0 13px !important;
  background-color: white;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: rgba(252, 18, 18, 1);
}

//修改分页器圆点之间的距离
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 8px;
}
</style>
