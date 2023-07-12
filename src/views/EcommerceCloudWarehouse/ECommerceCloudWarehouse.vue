<template>
  <div id="ECommerceCloudWarehouse">
    <div class="header_img">
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
              <img
                src="@/assets/ecommerce_cloud_warehouse/ecommerceStore.png"
                alt="电商仓储"
              />
              <div class="title">电商仓储</div>
            </div>
          </div>
          <div class="right">
            <div v-for="image in images" :key="image.id" class="image-item">
              <div class="image-container">
                <img class="right_img" :src="image.src" alt="" />
                <div class="title">{{ image.title }}</div>
                <div class="overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="intro_video">
        <p class="subtitle">仓储视频位置</p>
        123131
      </div>
    </div>
  </div>
</template>

<script setup>
import { images } from "@/utils/common.js";
</script>

<style lang="scss" scoped>
@import "@/assets/media_container.scss";

$sectionImgHeight: 400px;

#ECommerceCloudWarehouse {
  .header_img {
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
        font-size: 46px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      > .p2 {
        font-size: 24px;
        font-weight: 500;
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

  .subtitle {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 5px;
    margin-bottom: 30px;
  }

  .intro {
    width: 1320px;
    margin: 50px auto 0;

    .intro_img {
      > img {
        width: 100%;
        height: 300px;
      }

      > .grid-container {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        grid-gap: 10px;

        .left {
          width: 100%;
          height: $sectionImgHeight;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;

          .image-container {
            position: relative;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .right {
          width: 100%;
          height: 400px;
          display: grid;
          grid-template-areas:
            "top-right top-left"
            "bottom-right bottom-left";
          grid-gap: 20px;

          .image-item {
            overflow: hidden;
            position: relative;

            .right_img {
              width: 100%;
              height: 100%;
            }
          }
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

        .title {
          position: absolute;
          left: 10px;
          bottom: 10px;
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 5px;
          z-index: 10;
        }
      }
    }

    .intro_video {
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 768px) {
  #ECommerceCloudWarehouse {
    .header_img {
      height: 500px;

      > .p1 {
        font-size: 36px !important;
      }

      > .p2 {
        font-size: 24px !important;
        letter-spacing: 5px !important;
      }
    }
  }

  .intro {
    width: 100vw !important;

    .subtitle {
      margin-bottom: 10px !important;
      font-size: 22px !important;
    }

    .intro_img {
      > img {
        height: 200px !important;
      }
      > .grid-container {
        margin-top: 20px !important;
        flex-direction: column !important;

        .left {
          height: 300px !important;
        }

        .right {
          height: 320px !important;
          grid-gap: 10px !important;
        }
      }
    }
  }
}

@media (max-width: 410px) {
  .header_img {
    height: 350px !important;

    > .p1 {
      font-size: 30px !important;
    }

    > .p2 {
      font-size: 20px !important;
    }
  }
  .intro {
    > .intro_img {
      > .grid-container {
        margin-top: 10px !important;

        .left {
          height: 250px !important;
        }

        .right {
          height: 280px !important;
          grid-gap: 5px !important;
        }
      }
    }
  }
}
</style>
