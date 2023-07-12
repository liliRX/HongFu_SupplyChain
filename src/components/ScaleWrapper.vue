<template>
  <div class="out-body">
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.body {
  width: 1584px;
  transform-origin: top left;
}

.out-body {
  overflow-y: hidden;
  overflow-x: hidden;
  transition: all 0.2s linear;
}
</style>
