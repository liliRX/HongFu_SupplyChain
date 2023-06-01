<template>
  <div id="mapContainer"></div>
</template>

<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted } from "vue";

const location = [120.208157, 30.189879];

onMounted(() => {
  initMap();
});

const initMap = () => {
  AMapLoader.load({
    key: "72045cb0d7c9acf4a4117098a984208e", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [] //插件列表
  })
    .then((AMap) => {
      const map = new AMap.Map("mapContainer", {
        viewMode: "2D", // 默认使用 2D 模式
        zoom: 11, //初始化地图层级
        center: location //初始化地图中心点
      });

      new AMap.Marker({
        position: location, // 标记点的位置坐标
        map // 地图实例对象
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>

<style lang="scss" scoped>
#mapContainer {
  width: 500px;
  height: 500px;
}
</style>
