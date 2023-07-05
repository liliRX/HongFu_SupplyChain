<template>
  <div class="header">
    <img class="img" src="@/assets/img/ecommerce-bg.jpg" alt="" />
    <div class="img_text">
      <p class="p1">电商云仓</p>
      <p class="p2">一站式电商仓配</p>
    </div>
  </div>
  <div class="intro">
    <div class="intro_img">
      <p class="subtitle">仓配一体化服务</p>
      <img src="@/assets/img/process.png" alt="仓配流程图" />
      <div class="grid-container">
        <div class="left">
          <div class="image-container">
            <img src="@/assets/img/service-pic02.png" alt="电商仓储" />
            <div class="title">电商仓储</div>
          </div>
        </div>
        <div class="right">
          <div v-for="image in images" :key="image.id" class="image-item">
            <div class="image-container">
              <img :src="image.src" :alt="image.alt" />
              <div class="title">{{ image.title }}</div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro_video">
      <p class="subtitle">仓储视频位置</p>
    </div>
  </div>
</template>

<script setup>
const images = [
  {
    id: 2,
    src: "@/assets/img/service-pic02.png",
    alt: "冷链仓配一体化",
    title: "冷链仓配一体化"
  },
  {
    id: 3,
    src: "@/assets/img/service-pic02.png",
    alt: "一件代发",
    title: "一件代发"
  },
  {
    id: 4,
    src: "@/assets/img/service-pic02.png",
    alt: "增值服务",
    title: "增值服务"
  },
  {
    id: 5,
    src: "@/assets/img/service-pic02.png",
    alt: "系统对接",
    title: "系统对接"
  }
];
</script>

<style lang="scss" scoped>
.header {
  height: 760px;
  position: relative;

  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  > .img_text {
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    left: 13%;
    color: white;

    > .p1 {
      font-size: 45px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    > .p2 {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 10px;
    }
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 20, 0.3);
  }
}

.intro {
  margin-top: 50px;
  border: red 3px solid;

  .subtitle {
    text-align: center;
    font-size: 20px;
    letter-spacing: 3px;
  }

  .intro_img {
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      > .image-container {
        position: relative;
      }

      > img {
        width: 100%;
        height: auto;
      }
    }

    .right {
      display: grid;
      grid-template-areas:
        "top-right top-left"
        "bottom-right bottom-left";
      grid-gap: 20px;

      .image-item {
        position: relative;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .title {
    position: absolute;
    left: 10px;
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px;
  }

  .overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}

> .intro_video {
}

//}
</style>
