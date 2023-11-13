import "@/assets/main.css";
import "animate.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
// 导入路由
import router from "@/router";
import "@/permission";
// 导入 Element Plus 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
const pinia = createPinia();

// 应用路由
app.use(router);
// use必须单独
app.use(pinia);

// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
