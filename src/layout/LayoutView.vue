<template>
  <template v-if="pathname === '/'">
    <HomeSwiper />
    <AboutUsView />
    <DevelopHistory />
    <ServiceView />
    <AdvantageView />
    <Customer />
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
import Customer from "@/views/Customer.vue";

const pathname = window.location.pathname;
</script>

<style lang="scss" scoped></style>
