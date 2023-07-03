<template>
  <!--  <Map />-->
  <HomeSwiper />
  <div class="media_container">
    <AboutUsView />
    <ServiceView />
    <DevelopHistory />
    <AdvantageView />
  </div>
  <FooterView />
</template>

<script setup>
import AboutUsView from "@/views/AboutUsView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AdvantageView from "@/views/AdvantageView.vue";
import FooterView from "@/views/FooterView.vue";
import HomeSwiper from "@/views/HomeSwiper.vue";
import DevelopHistory from "@/views/DevelopHistory.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";
</style>
