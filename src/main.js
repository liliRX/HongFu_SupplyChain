import { createApp } from "vue";
import "./assets/iconfont/iconfont.css";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
