<script setup>
import { aboutUs } from "../utils/common.js";
import { storeToRefs } from "pinia";
import { useFirstComing } from "@/store/scalerate_store.js";
import { watch } from "vue";

const { aboutUs: aboutUsFirstComing } = storeToRefs(useFirstComing());
const refsMap = {};

watch(aboutUsFirstComing, () => {
  if (aboutUsFirstComing.value) {
    Object.keys(refsMap).forEach((i) => {
      refsMap[i].play();
    });
  }
});

const theFormat = (number) => {
  return number > 1000 ? "1000+" : Math.round(number);
};

const setRefMap = (el, item) => {
  if (el) {
    refsMap[`${item.num}Ref`] = el;
  }
};
</script>

<template>
  <div v-for="item in aboutUs" class="about-wrapper">
    <div class="number">
      <span class="big-font">
        <number
          :ref="(el) => setRefMap(el, item)"
          :from="0"
          :to="item.num"
          :format="theFormat"
          :duration="2"
          easing="Power1.easeOut"
          :animationPaused="true"
        />
      </span>
      <span class="add-info">
        {{ item.add }}
      </span>
    </div>
    <div class="num-comment">
      {{ item.info }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url(@/assets/font.scss);

.about-wrapper {
  > .number {
    display: flex;
    align-items: center;
    justify-content: center;

    > .big-font {
      font-family: Oblique;
      font-size: 50px;
      color: rgba(252, 18, 18, 1);
      font-style: italic;
      font-weight: bold;
    }

    > .add-info {
      color: gray;
      margin-left: 15px;
    }
  }

  > .num-comment {
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    width: 50%;
    margin-bottom: 30px;
    > .number {
      > .big-font {
        font-family: Oblique;
        font-size: 50px;
        color: rgba(252, 18, 18, 1);
        font-style: italic;
        font-weight: bold;
      }

      > .add-info {
        color: gray;
        margin-left: 15px;
      }
    }

    > .num-comment {
      text-align: center;
      margin-top: 10px;
      font-size: 18px;
    }
  }
}
</style>
