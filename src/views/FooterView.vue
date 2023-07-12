<template>
  <LinkUsView />
  <footer :class="`${isMobile ? 'footerMobile' : ''}`">
    <div>版权所有©️ 物流管理公司</div>
    <div>备案号： 浙ICP备********号</div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: black;
  color: white;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  font-size: 16px;

  > div {
    margin-right: 20px;
  }
}

.footerMobile {
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  > div {
    margin-right: 0;
    margin-bottom: 10px;
    font-size: 14px !important;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
<script setup>
import LinkUsView from "@/views/LinkUsView.vue";
import { inject } from "vue";

const isMobile = inject("isMobile");
</script>
