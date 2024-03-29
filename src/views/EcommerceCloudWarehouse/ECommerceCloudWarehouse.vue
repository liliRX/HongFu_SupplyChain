<template>
  <div
    id="ECommerceCloudWarehouse"
    :class="`ECommerceCloudWarehouse ${
      isMobile ? 'ECommerceCloudWarehouseMobile' : ''
    }`"
  >
    <ScaleWrapper>
      <div class="header">
        <img class="img" :src="`${source_url}/img/ecommerce-bg.jpg`" alt="" />
        <div class="img_text">
          <p class="p1">电商云仓</p>
          <p class="p2">一站式电商仓配</p>
        </div>
      </div>
      <div class="intro">
        <div class="intro_img">
          <p class="subtitle">仓配一体化服务</p>
          <div class="img_contianer">
            <img :src="`${source_url}/img/process.png`" alt="仓配流程图" />
          </div>
        </div>
        <div class="grid-container">
          <div class="left">
            <div class="image-container">
              <img
                :src="`${source_url}/ecommerce_cloud_warehouse/ecommerceStore.png`"
                alt="电商仓储"
              />
              <div class="title">电商仓储</div>
            </div>
          </div>
          <div class="right">
            <div v-for="image in images" :key="image.id" class="image-item">
              <div class="image-container">
                <img class="right_img" :src="image.src" />
                <div class="title">{{ image.title }}</div>
                <div class="overlay" />
              </div>
            </div>
          </div>
        </div>
        <div class="intro_video">
          <!--          <p class="subtitle">仓储视频位置</p>-->
        </div>
      </div>
    </ScaleWrapper>
    <div class="video_container" v-if="!isMobile">
      <div class="video">
        <videoPlay v-bind="options" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { images } from "@/utils/common.js";
import "vue3-video-play/dist/style.css";
import { videoPlay } from "vue3-video-play";
import { onMounted, onUpdated, reactive, watch } from "vue";
import ScaleWrapper from "@/components/ScaleWrapper.vue";
import { useScaleStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";
import { source_url } from "@/utils/common.js";

const store = useScaleStore();
const { isMobile, rate } = storeToRefs(store);

// 设置视频的宽高比
const setVideo = () => {
  if (!isMobile) {
    const video = document.querySelector(".video");
    video.style.height = 500 * rate.value + "px";
    video.style.width = 1320 * rate.value + "px";
    window.scrollTo(0, 0);
  }
};

onMounted(() => {
  setVideo();
});

watch(
  () => rate.value,
  () => {
    setVideo();
  }
);

const options = reactive({
  width: `100%`, //播放器宽度
  height: `100%`, //播放器高度
  color: "red", //主题色
  title: "", //视频名称
  src: `${source_url}/video/store_video.mp4`, //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: true, //自动播放
  loop: true, //循环播放
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    // "setting",
    "volume"
    // "pip",
    // "pageFullScreen",
    // "fullScreen"
  ] //显示所有按钮,
});
</script>

<style lang="scss">
@import "@/assets/media_container.scss";

$sectionImgHeight: 400px;

.ECommerceCloudWarehouse {
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

  .subtitle {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 30px;
  }

  .intro {
    width: 1320px;
    margin: 50px auto 0;

    .intro_img {
      img {
        width: 100%;
        height: 300px;
      }
    }

    .grid-container {
      margin-top: 80px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

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

  .intro_video {
    margin-top: 30px;
    overflow: hidden;
  }
}

.video_container {
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}

.ECommerceCloudWarehouseMobile {
  .header {
    height: 100vh;

    > .p1 {
      font-size: 36px;
    }

    > .p2 {
      font-size: 24px;
      letter-spacing: 5px;
    }
  }

  .intro {
    width: 100vw;

    .subtitle {
      margin-bottom: 10px;
      font-size: 22px;
    }

    .intro_img {
      .img_contianer {
        width: 95%;
        margin: 20px auto 0;
        overflow: scroll;

        img {
          height: 150px;
          width: 100%;
          max-width: initial;
        }
      }
    }

    .grid-container {
      margin-top: 40px;
      display: flex;
      flex-direction: column;

      .left {
        height: 200px;

        .image-container {
          width: 100%;
          height: 100%;
        }
      }

      .right {
        height: inherit;
        grid-gap: 10px;

        .image-item {
          height: 120px;
        }
      }
    }
  }
}
</style>
