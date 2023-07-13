import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 Pinia 相关模块放入单独的代码块
          pinia: ["pinia"],
          swiper: ["swiper"],
          vue3VideoPlay: ["vue3-video-play"]
        }
      }
    }
  },
  plugins: [vue()],
  server: {
    open: true,
    port: 5173,
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets")
    }
  }
});
