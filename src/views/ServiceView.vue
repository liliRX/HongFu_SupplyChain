<script setup>
import ServiceList from "../components/ServiceList.vue";
import { services } from "../utils/common.js";
import SecondTitle from "../components/SecondTitle.vue";
import { inject } from "vue";

const isMobile = inject("isMobile");
</script>

<template>
  <div
    :class="`service-container ${
      isMobile ? 'centerServicesMobile' : 'media_container'
    }`"
    id="centerServices"
  >
    <SecondTitle chinese-title="核心服务" english-title="Service" />
    <div class="service-list">
      <ServiceList
        v-for="item in services"
        :route="item.route"
        :key="item.url"
        :data="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";

.service-container {
  padding: 0 50px;
  margin-top: 100px;

  > .text {
    text-align: center;

    > p {
      color: #0b83db;
    }
  }

  > .service-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 20px;
  }
}

.centerServicesMobile {
  padding: 0 10px;
  margin-top: 40px;

  > .service-list {
    display: flex;
    flex-direction: column;
  }
}
</style>
