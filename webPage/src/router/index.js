import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/home", name: "home", component: () => import("../components/home.vue") },
  { path: "/about", name: "about", component: () => import("../components/about.vue") },

  { path: "/declare/terms", name: "terms", component: () => import("../components/declare/terms.vue") },
  { path: "/declare/privacy", name: "privacy", component: () => import("../components/declare/privacy.vue") },
  { path: "/declare/Copyright", name: "copyright", component: () => import("../components/declare/Copyright.vue") },

  { path: "/product/info", name: "info", component: () => import("../components/product/info.vue") },
  { path: "/product/download", name: "download", component: () => import("../components/product/download.vue") },
  { path: "/product/result", name: "result", component: () => import("../components/product/result.vue") },

  { path: "/pay/buy", name: "buy", component: () => import("../components/pay/buy.vue") },
  { path: "/pay/pay", name: "pay", component: () => import("../components/pay/pay.vue") },
  { path: "/pay/result", name: "result", component: () => import("../components/pay/result.vue") },

  { path: "/services", name: "services", component: () => import("../components/services.vue") }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});