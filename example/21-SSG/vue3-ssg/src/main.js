import { ViteSSG } from "vite-ssg";

import App from "./App.vue";
import { routes } from "./router";
import { i18nInstall } from "./i18n";
import { piniaInstall } from "./pinia";

import "virtual:svg-icons-register";

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    piniaInstall(ctx);
    i18nInstall(ctx);
  }
);
