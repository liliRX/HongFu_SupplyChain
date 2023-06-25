<script setup>
import AboutDetail from "../components/AboutDetail.vue";
</script>

<template>
  <div class="about-container">
    <h2 class="title">关于我们</h2>
    <div class="about_us">
      <img src="../assets/img/swiper_pic02.jpg" alt="" />
      <p class="text">
        物流公司有多台面包车、大小货车可门对门服务，在成都，广州、上海，苏州，北京，武汉全国各地都有网点。拥有先进的仓储
        管理系统，规范的进出仓库流程，保证您的货物能够安全到达，依托鸿福可为您提供快速准。
      </p>
    </div>
    <div class="animate">
      <AboutDetail />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  margin-top: 80px;

  .title {
    margin-bottom: 30px;

    &::after {
      display: block;
      content: "";
      width: 36px;
      height: 3px;
      background-color: rgba(0, 153, 255, 1);
    }
  }

  > .about_us {
    display: grid;
    grid-template-columns: 500px 1fr;

    > img {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }

    > .text {
      padding: 20px 0;
      font-size: 18px;
      margin-left: 40px;
      text-indent: 2em;
      line-height: 40px;
      letter-spacing: 4px;
    }
  }

  > .animate {
    padding: 90px 0 60px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-image: url("@/assets/img/about_num_bg.png");
    background-position: right 37%;
    background-repeat: no-repeat;
    background-size: 38%;
  }
}
</style>
