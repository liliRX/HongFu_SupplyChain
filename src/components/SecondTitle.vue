<script setup>
const { englishTitle, chineseTitle } = defineProps([
  "englishTitle",
  "chineseTitle"
]);
</script>

<template>
  <div class="sub-title">
    <h2>{{ chineseTitle }}</h2>
    <p>
      —— <span>{{ englishTitle }}</span> ——
    </p>
  </div>
</template>

<style scoped lang="scss">
.sub-title {
  text-align: center;
  margin-bottom: 20px;

  > p {
    color: rgba(150, 38, 64, 1);
    font-size: 20px;

    span {
      color: rgba(252, 18, 18, 1);
    }
  }
}
</style>
