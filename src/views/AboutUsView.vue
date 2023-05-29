<script setup>
import SecondTitle from "../components/SecondTitle.vue";
</script>

<template>
  <div class="about-container">
    <SecondTitle chinese-title="关于我们" english-title="About us" />
    <div class="about_us">
      <img src="../assets/img/swiper_pic02.jpg" alt="" />
      <p class="text">
        物流公司有多台面包车、大小货车可门对门服务，在成都，广州、上海，苏州，北京，武汉全国各地都有网点。拥有先进的仓储
        管理系统，规范的进出仓库流程，保证您的货物能够安全到达，依托鸿福可为您提供快速准。
      </p>
    </div>
    <div class="animate">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  margin-top: 60px;
  > .about_us {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
      width: 50%;
    }
    > .text {
      margin-left: 40px;
      text-indent: 2em;
      line-height: 4rem;
      letter-spacing: 2px;
    }
  }
  > .about-data {
    width: 100%;
    height: 200px;
    background-color: yellow;
  }
}
</style>
