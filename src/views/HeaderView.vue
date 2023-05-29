<script setup></script>

<template>
  <header>
    <div class="hf-logo">
      <span><img src="/hongfu.png" alt="" /></span>
      <div>
        <h1>鸿福供应链</h1>
        <p>HONGFU SUPPLY CHAIN</p>
      </div>
    </div>
    <ol class="nav">
      <li>首页</li>
      <li>
        关于我们
        <ul>
          <li>干线运输</li>
          <li>电商云仓</li>
          <li>城市配送</li>
          <li>仓储物流</li>
        </ul>
      </li>
      <li>核心服务</li>
      <li>我们的优势</li>
      <li>联系我们</li>
    </ol>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px 0 30px;
  .hf-logo {
    display: flex;
  }
  .nav {
    display: flex;
    > li {
      margin-left: 20px;

      > ul {
        display: none;
      }

      &:hover > ul {
        display: block;
      }
    }
  }
}
</style>
