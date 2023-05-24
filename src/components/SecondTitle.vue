<script setup>
const {englishTitle, chineseTitle} = defineProps([
    "englishTitle",
    "chineseTitle"
]);
</script>

<template>
    <div class="sub-title">
        <h2> {{ chineseTitle }} </h2>
        <p>—— {{ englishTitle }} ——</p>
    </div>
</template>

<style scoped lang="scss">
.sub-title {
  text-align: center;
  margin-bottom: 20px;

  > p {
    color: #0B83DB;
    font-size: 20px;
  }
}
</style>