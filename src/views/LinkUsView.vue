<template>
  <div class="link_container" id="linkUs">
    <div class="flex-box media_container">
      <div class="text">
        <h2>联系我们</h2>
        <div class="info_li" v-for="info in linkUsInfo" :key="info.title">
          <i :class="`iconfont ${info.icon}`"></i>
          <span>{{ info.title }}：{{ info.value }}</span>
        </div>
      </div>
      <img
        class="map"
        @click="goMap"
        src="@/assets/img/nice-map.png"
        alt="点击跳转地图"
      />
    </div>
  </div>
</template>

<script setup>
// 跳转到对应的地图
import { goNewPage } from "@/utils/utils.js";

const goMap = () => {
  goNewPage(
    "https://map.baidu.com/search/%E7%BA%B3%E7%88%B1%E6%96%AF%E9%9B%86%E5%9B%A2/@13382334.69519193,3506954.2200398105,18.38z?querytype=s&da_src=shareurl&wd=%E7%BA%B3%E7%88%B1%E6%96%AF%E9%9B%86%E5%9B%A2&c=179&src=0&wd2=%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%BB%A8%E6%B1%9F%E5%8C%BA&pn=0&sug=1&l=12&b=(13341719.691775372,3503734.6670553014;13418705.601388173,3547627.328022044)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=6b659b95c5d6838ebbbd6371&device_ratio=2"
  );
};

const linkUsInfo = [
  { icon: "icon-post", title: "邮箱", value: "1321" },
  {
    icon: "icon-map",
    title: "公司地址",
    value: "1321"
  },
  { icon: "icon-tel", title: "联系电话", value: "1321" }
];
</script>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";

$color: white;

.link_container {
  position: relative;
  background-image: url("src/assets/img/airplane.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 50%;
  color: $color;
  margin-top: 80px;
  padding: 50px 0 40px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(56, 56, 56, 0.58); /* 半透明黑色蒙层 */
  }

  .flex-box {
    position: relative;
    height: 280px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
      padding: 10px 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .info_li {
        display: flex;
        align-items: center;
        font-size: 18px;

        i {
          font-size: 30px;
          margin-right: 8px;
        }
      }
    }

    > h2 {
      color: $color;
    }

    .map {
      cursor: pointer;
      width: 44%;
      height: 100%;
    }
  }
}
</style>
