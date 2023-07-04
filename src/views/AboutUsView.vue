<script setup>
import AboutDetail from "../components/AboutDetail.vue";
</script>

<template>
  <div :class="`about-container media_container`" id="aboutUs">
    <h2 class="title">关于我们</h2>
    <div class="about_us">
      <img src="../assets/img/swiper_pic02.jpg" alt="" />
      <p class="text">
        鸿福物流成立于2014年，公司总部位于浙江丽水，目前已在河南、山东开设分公司。公司始终坚持客户至上的服务理念，是一家现代化综合型物流企业，拥有自营车辆近百辆，自成立之初便与国内日化龙头企业纳爱斯集团建立了重要战略合作关系。同时社会各知名品牌物流公司诸如德邦、跨越、安能等均有战略合作，可调动社会物流资源丰富。
      </p>
    </div>
    <div class="animate">
      <AboutDetail />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";

.about-container {
  margin-top: 100px;

  .title {
    margin-bottom: 30px;

    &::after {
      display: block;
      content: "";
      width: 36px;
      height: 3px;
      background-color: rgba(252, 18, 18, 1);
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
