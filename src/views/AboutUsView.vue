<script setup>
import AboutDetail from "../components/AboutDetail.vue";
</script>

<template>
  <div :class="`about-container media_container`" id="aboutUs">
    <h2 class="title">关于我们</h2>
    <div class="about_us">
      <img src="../assets/img/swiper_pic02.jpg" alt="" />
      <p class="text">
        鸿福供应链是一家致力于为客户提供端到端数智化供应链解决方案的物流科技企业，通过建立端到端全链路数智化的物流运营迭代能力，为客户提供从原料至成品的生产精益物流，线上线下一盘货，Tob/C一体化，仓干配一体化及送装一体化服务的系统解决方案，协助企业推动渠道变革与供应链效率优化，提升竞争优势，助力客户实现可持续性发展。
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

  @media (max-width: 767px) {
    margin-top: 40px;
    .title {
      text-align: center;
      margin-bottom: 30px;

      &::after {
        display: none;
      }
    }

    > .about_us {
      display: flex;
      flex-direction: column;

      > .text {
        margin: 20px 15px;
        line-height: 35px;
        letter-spacing: 2px;
      }
    }
    > .animate {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 20px 0;
      background-image: url("@/assets/img/about_num_bg.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 80%;
    }
  }
}
</style>
