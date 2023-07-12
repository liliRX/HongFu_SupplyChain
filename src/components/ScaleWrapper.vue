<template>
  <div v-if="!isMobile" class="out-body">
    <div class="body">
      <slot />
    </div>
  </div>
  <template v-else>
    <slot />
  </template>
</template>

<script setup>
import { useScaleStore } from "@/store/scalerate_store.js";
import { storeToRefs } from "pinia";

const store = useScaleStore();
const { isMobile } = storeToRefs(store);
</script>

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
