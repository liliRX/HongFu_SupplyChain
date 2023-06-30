import { defineStore } from "pinia";

export const useScaleStore = defineStore("scaleRate", {
  state: () => ({ rate: 1, isMobile: false }),
  actions: {
    setScaleRate(e) {
      this.rate = e;
    },
    setIsMobile(e) {
      this.isMobile = e;
    }
  }
});

export const usePositionStore = defineStore("idPosition", {
  state: () => ({ positionMap: {} }),
  actions: {
    setPosition(e) {
      this.positionMap = e;
    }
  }
});

export const useFirstComing = defineStore("firstComing", {
  state: () => ({ aboutUs: false }),
  actions: {
    setFirst(e) {
      this[e] = true;
    }
  }
});
