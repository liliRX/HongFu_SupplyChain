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
