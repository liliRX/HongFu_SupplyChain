<template>
  <div class="swiper-container">
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
      <swiper-slide
        ><img class="swiper-pic" src="../assets/img/swiper_pic01.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/img/swiper_pic02.jpg" alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
const modules = [Autoplay, Pagination, Navigation, A11y];
</script>

<style lang="scss">
$color: rgb(43, 121, 237);

.swiper-container {
  width: 100%;
  height: 100%;

  > .swiper-slide {
    text-align: center;
    font-size: 16px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    > .swiper-pic {
      transform: scaleY(180deg);
    }
  }
}

//修改分页器圆点颜色
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: $color;
}

//修改分页器圆点大小
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
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
