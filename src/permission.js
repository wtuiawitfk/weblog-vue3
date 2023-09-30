import router from "@/router/index";
import { getToken } from "@/composables/auth";
import { showMessage } from "@/composables/utils";

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log("==> 全局路由前置守卫");
  // 若用户想访问后台（以 /admin 为前缀的路由）
  // 未登录，则强制跳转登录页
  let token = getToken();
  if (!token && to.path.startsWith("/admin")) {
    showMessage("请先登录", "warning");
    next({ path: "/login" });
  } else {
    next();
  }
});

// 全局路由后置守卫
router.afterEach((to, from) => {
  // 动态设置页面title
  let title = (to.meta.title ? to.meta.title : "") + "- weblog";
  document.title = title;
});
