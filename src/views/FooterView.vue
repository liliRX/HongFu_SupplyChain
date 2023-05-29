<template>
  <LinkUsView />
  <footer>
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
  font-size: 0.8rem;

  > div {
    margin-right: 20px;
  }
}
</style>
<script>
import LinkUsView from "@/views/LinkUsView.vue";

export default {
  components: { LinkUsView }
};
</script>
