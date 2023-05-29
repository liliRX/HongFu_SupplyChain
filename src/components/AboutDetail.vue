<script setup>
import {aboutUs} from '../common.js';
// 动画 animate.css
import animate from "animate.css";
</script>

<template>
    <div v-for="item in aboutUs" class="about-wrapper">
        <div class="number animate__animated animate__headShake
                    animate__delay-1s animate__slow animate__repeat-2">
            <span class="big-font">
                {{ item.num }}
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
.about-wrapper {
  padding: 60px 10px 0 10px;

  > .number {
    display: flex;
    align-self: flex-start;
    justify-content: center;

    > .big-font {
      font-size: 40px;
      color: #0B83DB;
      font-style: italic;
      font-weight: 500;
    }

    > .add-info {
      color: gray;
      margin-left: 5px;
    }
  }

  > .num-comment {
    text-align: center;
    margin-top: 10px;
  }
}
</style>