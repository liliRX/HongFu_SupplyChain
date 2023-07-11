<template>
  <div id="Customer" class="media_container">
    <SecondTitle chinese-title="我们的客户" english-title="Customer" />
    <div class="brand_container">
      <div
        class="brandIcon"
        v-for="(icon, index) in brandIcons"
        :key="`${index}-brandIcon`"
        :style="{
          'background-color': icon.bgc
        }"
      >
        <img
          :style="{
            scale: icon.scale
          }"
          :src="icon.src"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import SecondTitle from "@/components/SecondTitle.vue";
import { brandIcons } from "@/utils/common.js";
</script>

<style lang="scss" scoped>
@import "src/assets/media_container";

#Customer {
  margin-top: 100px;

  .brand_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .brandIcon {
      border: 1px solid rgba(193, 192, 192, 0.6);
      width: 32%;
      margin-bottom: 20px;
      height: 160px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        scale: 65%;
      }
    }
  }
}

@media (max-width: 767px) {
  #Customer {
    margin-top: 40px;
    padding: 0 20px;

    .brand_container {
      .brandIcon {
        margin-bottom: 0;
        width: 33.33%;
        height: 64px;
      }
    }
  }
}
</style>
