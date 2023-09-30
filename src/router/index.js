import Index from "@/pages/frontend/index.vue";
import Login from "@/pages/admin/login.vue";
import AdminIndex from "@/pages/admin/index.vue";
import Admin from "@/layouts/admin/admin.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// 统一声明所有路由
const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "weblog 首页",
    },
  },

  // 登陆页
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登陆页",
    },
  },

  // 后台首页
  {
    path: "/admin",
    component: Admin,
    // 使用到 admin.vue 布局的，都需要放置在其子路由下面
    children: [
      {
        path: "/admin/index",
        component: AdminIndex, // 主内容区域，具体需要渲染的页面
        meta: {
          title: "Admin 后台首页",
        },
      },
    ],
  },
];

// 创建路由
const router = createRouter({
  // 指定路由的历史管理方式，hash 模式指的是 URL 的路径是通过 hash 符号（#）进行标识
  history: createWebHashHistory(),
  // routes: routes 的缩写
  routes,
});

// 导出
export default router;
