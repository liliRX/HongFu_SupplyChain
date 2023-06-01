<template>
  <div class="layout">
    <Map />
    <!--    <SwiperSlide />-->
    <!--    <div class="media_container">-->
    <!--      <AboutUsView />-->
    <!--      <ServiceView />-->
    <!--      <AdvantageView />-->
    <!--    </div>-->
    <!--    <FooterView />-->
  </div>
</template>

<script setup>
import SwiperSlide from "@/views/SwiperSlide.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AdvantageView from "@/views/AdvantageView.vue";
import FooterView from "@/views/FooterView.vue";
import Map from "@/components/Map.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";
</style>
