import { createApp } from "vue";
import "./assets/iconfont/iconfont.css";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import VueNumber from "vue-number-animation";

const pinia = createPinia();

createApp(App).use(pinia).use(VueNumber).mount("#app");
