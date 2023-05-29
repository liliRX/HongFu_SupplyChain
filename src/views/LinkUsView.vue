<template>
  <div class="link_container">
    <div class="flex-box media_container">
      <div class="text">
        <h2>联系我们</h2>
        <ol>
          <li>
            <i class="iconfont icon-post"></i>
            <span>邮箱：</span>
          </li>
          <li>
            <i class="iconfont icon-map"></i>
            <span>公司地址：</span>
          </li>
          <li>
            <i class="iconfont icon-tel"></i>
            <span>联系电话：</span>
          </li>
        </ol>
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
</script>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";

$color: white;

.link_container {
  background: url("src/assets/img/airplane-blur.jpg") no-repeat center;
  background-size: 100% 100%;
  color: $color;
  padding: 40px 0;

  > div.flex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
      color: $color;
    }

    .map {
      cursor: pointer;
      width: 50%;
      height: 280px;
    }

    ol {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-self: center;

      li {
        > i.iconfont {
          font-size: 30px;
          vertical-align: middle;
          margin-right: 5px;
        }

        > span {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
