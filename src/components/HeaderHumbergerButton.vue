<template>
  <button :class="`hamburger-btn ${close ? 'close' : ''}`" @click="dragMenu">
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
  </button>
  <ul :class="`nav ${close ? 'ul_close' : ''}`">
    <div>
      <li
        @click="() => goModule(li.route)"
        :class="`${activeLi === li.route ? 'active' : ''}`"
        :key="li.route"
        v-for="li in routeMap"
      >
        {{ li.title }}
      </li>
    </div>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { routeMap } from "@/utils/common.js";
import { goPage } from "@/utils/utils.js";
import { storeToRefs } from "pinia";
import { usePositionStore } from "@/store/scalerate_store.js";

const close = ref(false);
const activeLi = ref("");
const positionStore = usePositionStore();
const { positionMap } = storeToRefs(positionStore);

const dragMenu = () => {
  close.value = !close.value;
};

// 点击link
const goModule = (id) => {
  if (id !== "eCommerceCloudWarehouse") {
    if (window.location.origin + "/" !== window.location.href) {
      goPage(window.location.origin);
    } else {
      let top = positionMap.value[id];
      window.scroll({ top, behavior: "smooth" });
      close.value = false;
    }
  } else {
    goPage(window.location.href + id);
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: -100px;
  right: 0;
  background-color: #fff;
  transition: all 0.3s linear;
  padding: 4px 20px 8px;
  z-index: -1;
  width: 100%;

  > div {
    display: none;
  }

  li {
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px;
  }
}

.ul_close {
  top: 70px;

  > div {
    display: initial;
  }
}

.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 22px;
  height: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.hamburger-line {
  width: 100%;
  height: 1px;
  background-color: red;
  transition: all 0.3s ease;
}

.hamburger-btn.close .hamburger-line:nth-child(1) {
  transform: rotate(-45deg) translate(-7px, 7px);
}

.hamburger-btn.close .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.close .hamburger-line:nth-child(3) {
  transform: rotate(45deg) translate(-6px, -6px);
}
</style>
