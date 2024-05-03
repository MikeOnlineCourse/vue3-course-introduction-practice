import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: () => import("../pages/about.vue") },
    { path: "/address", component: () => import("../pages/address.vue") },
    { path: "/courses", component: () => import("../pages/courses/index.vue") },
    {
      path: "/courses/:id",
      component: () => import("../pages/courses/[id].vue"),
    },
  ],
});

export default router;
