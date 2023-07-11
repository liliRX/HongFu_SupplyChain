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
        :key="li.route"
        v-for="li in routeMap"
        :class="`nav_li ${childLi === li.title ? 'active' : ''}`"
      >
        <div>
          {{ li.title }}
          <span
            v-if="li.children"
            @click="
              (e) => {
                e.stopPropagation();
                childLi = childLi === null ? li.title : null;
              }
            "
            >{{ childLi === li.title ? "-" : "+" }}</span
          >
        </div>
        <ol class="child" v-show="li.children && childLi === li.title">
          <li
            @click="
              (e) => {
                e.stopPropagation();
                goModule(child.route);
              }
            "
            v-for="child in li.children"
          >
            {{ child.title }}
          </li>
        </ol>
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
const childLi = ref(null);
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
  padding: 16px 20px 8px;
  z-index: -1;
  width: 100%;

  > div {
    display: none;
  }

  .active {
    > div {
      color: red;
    }
  }

  .nav_li {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 27px;
    transition: all linear 0.4s;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span {
      width: 50%;
      text-align: end;
      font-size: 24px;
    }

    .child {
      margin-top: 10px;

      > li {
        margin-left: 20px;
        font-size: 16px;
      }
    }
  }
}

.ul_close {
  -webkit-box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
  -moz-box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
  box-shadow: 0 1px 2px 0 rgba(30, 30, 30, 0.59);
  top: 64px;

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
