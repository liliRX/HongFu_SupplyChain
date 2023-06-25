<script setup>
import hongFu_logo from "@/assets/img/hongfulogo.png";
</script>

<template>
  <header class="header">
    <div class="out-body">
      <div class="body">
        <div class="header_container">
          <img class="hf-logo" :src="hongFu_logo" alt="" />
          <ol class="nav">
            <li>首页</li>
            <li>关于我们</li>
            <li>核心服务</li>
            <li>我们的优势</li>
            <li>联系我们</li>
          </ol>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 10;
  background-color: white;
  width: 100%;
  top: 0;

  .body {
    width: 1584px;
    transform-origin: top left;
  }

  .out-body {
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 1300px;
    margin: auto;

    .hf-logo {
      display: flex;
      width: 260px;
    }

    .nav {
      display: flex;
      margin-right: 80px;

      > li {
        font-size: 21px;
        cursor: pointer;
        margin-left: 80px;
      }
    }
  }
}
</style>
