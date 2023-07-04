<template>
  <!--  <Map />-->
  <template v-if="pathname === '/'">
    <HomeSwiper />
    <AboutUsView />
    <ServiceView />
    <DevelopHistory />
    <AdvantageView />
    <FooterView />
  </template>
  <template v-else>
    <ECommerceCloudWarehouse />
  </template>
</template>

<script setup>
import AboutUsView from "@/views/AboutUsView.vue";
import ServiceView from "@/views/ServiceView.vue";
import AdvantageView from "@/views/AdvantageView.vue";
import FooterView from "@/views/FooterView.vue";
import HomeSwiper from "@/views/HomeSwiper.vue";
import DevelopHistory from "@/views/DevelopHistory.vue";
import ECommerceCloudWarehouse from "@/views/EcommerceCloudWarehouse/ECommerceCloudWarehouse.vue";

const pathname = window.location.pathname;
</script>

<style lang="scss" scoped></style>
