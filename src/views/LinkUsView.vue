<template>
  <div
    :class="`link_container ${isMobile ? 'link_containerMobile' : ''}`"
    id="linkUs"
  >
    <MyMap :location="location" />
    <div class="flex-box">
      <h2>联系我们</h2>
      <div
        :class="`info_li ${
          activeMap.title === info.title ? 'info_li_active' : ''
        }`"
        v-for="info in linkUsInfo"
        :key="info.title"
      >
        <header @click="() => (activeMap = info)">
          <span>{{ info.title }}</span>
          <span class="info_li_show">{{
            activeMap.title === info.title ? "+" : "-"
          }}</span>
        </header>
        <section class="info_li_container">
          <div v-for="infoLi in info.info">
            <span class="info_li_title">{{ infoLi.title }}:</span>
            {{ infoLi.value }}
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// 跳转到对应的地图
import { goNewPage } from "@/utils/utils.js";
import { linkUsInfo } from "@/utils/common.js";
import MyMap from "@/components/MyMap.vue";
import { inject, onUpdated, ref, watch } from "vue";

const isMobile = inject("isMobile");

const activeMap = ref(linkUsInfo[0]);

const location = ref(activeMap.value.location);

// 监视 activeMap 的变化，并相应更新 location
watch(activeMap, (newActiveMap) => {
  location.value = newActiveMap.location;
});

const goMap = () => {
  goNewPage(
    "https://map.baidu.com/search/%E7%BA%B3%E7%88%B1%E6%96%AF%E9%9B%86%E5%9B%A2/@13382334.69519193,3506954.2200398105,18.38z?querytype=s&da_src=shareurl&wd=%E7%BA%B3%E7%88%B1%E6%96%AF%E9%9B%86%E5%9B%A2&c=179&src=0&wd2=%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%BB%A8%E6%B1%9F%E5%8C%BA&pn=0&sug=1&l=12&b=(13341719.691775372,3503734.6670553014;13418705.601388173,3547627.328022044)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=6b659b95c5d6838ebbbd6371&device_ratio=2"
  );
};
</script>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";

$color: white;

.link_container {
  position: relative;
  //background-image: url("src/assets/img/airplane.jpg");
  //background-size: cover;
  //background-repeat: no-repeat;
  //background-position: center 50%;
  margin-top: 80px;
  //padding: 50px 0 40px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(56, 56, 56, 0.21); /* 半透明黑色蒙层 */
  }

  .flex-box {
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: white;
    position: absolute;
    padding: 20px 0;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;

    h2 {
      color: red;
      margin-bottom: 20px;
      padding: 0 20px;
    }

    .info_li_active {
      background-color: rgba(255, 0, 0, 0.68);

      .info_li_container {
        height: 140px !important;
      }
    }

    .info_li {
      padding: 0 20px;
      font-size: 18px;
      transition: 0.4s linear all;

      .info_li_show {
        font-size: 20px;
        color: #bcbc04;
      }

      .info_li_container {
        color: white;
        transition: 0.4s linear all;
        height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;

        > div {
          line-height: 34px;
        }
      }

      > header {
        border-bottom: 1px solid grey;
        display: flex;
        justify-content: space-between;
        min-width: 220px;
        padding: 17px 10px;
        cursor: pointer;
      }
    }
  }
}

.link_containerMobile {
  margin-top: 40px;

  .flex-box {
    right: 50%;
    transform: translate(50%, -50%);
    width: 90%;
  }
}
</style>
