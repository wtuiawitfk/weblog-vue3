import Index from "@/pages/frontend/index.vue";
import Login from "@/pages/admin/login.vue";
import AdminIndex from "@/pages/admin/index.vue";
import AdminArticleList from "@/pages/admin/article-list.vue";
import AdminCategoryList from "@/pages/admin/category-list.vue";
import AdminTagList from "@/pages/admin/tag-list.vue";
import AdminBlogSetting from "@/pages/admin/blog-setting.vue";
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

  {
    path: "/admin", // 后台首页
    component: Admin,
    // 使用到 admin.vue 布局的，都需要放置在其子路由下面
    children: [
      {
        path: "/admin/index",
        component: AdminIndex,
        meta: {
          title: "仪表盘",
        },
      },
      {
        path: "/admin/article/list",
        component: AdminArticleList,
        meta: {
          title: "文章管理",
        },
      },
      {
        path: "/admin/category/list",
        component: AdminCategoryList,
        meta: {
          title: "分类管理",
        },
      },
      {
        path: "/admin/tag/list",
        component: AdminTagList,
        meta: {
          title: "标签管理",
        },
      },
      {
        path: "/admin/blog/setting",
        component: AdminBlogSetting,
        meta: {
          title: "博客设置",
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
