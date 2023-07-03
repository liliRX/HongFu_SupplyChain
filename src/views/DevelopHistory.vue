<template>
  <div id="history">
    <SecondTitle chinese-title="发展历史" english-title="History" />
    <swiper
      ref="homeSwiper"
      :slidesPerView="1"
      :speed="500"
      :loop="true"
      :pagination="{
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

<style lang="scss" scoped>
#history {
  margin: 0 0 80px;

  .mySwiper {
    height: 300px;

    .swiper-pagination {
      border: 1px solid red;
      top: 4.323%;
      text-align: center;
      width: auto;
      bottom: 50%;
      left: auto;
      -webkit-transform: translate3d(0, 50%, 0);
      transform: translate3d(0, 50%, 0);
    }
  }
}
</style>
