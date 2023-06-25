<script setup>
import { aboutUs } from "../utils/common.js";

const theFormat = (number) => {
  return number > 1000 ? "1000+" : Math.round(number);
};
</script>

<template>
  <div v-for="item in aboutUs" class="about-wrapper">
    <div
      class="number animate__animated animate__headShake animate__delay-1s animate__slow animate__repeat-2"
    >
      <span class="big-font">
        <number
          ref="number1"
          :from="0"
          :to="item.num"
          :format="theFormat"
          :duration="2"
          easing="Power1.easeOut"
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
      color: #0b83db;
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
</style>
