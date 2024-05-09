import { createApp } from "vue";

import router from "./router";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import zh from "./language/zh-TW.json";
import en from "./language/en-US.json";

import App from "./App.vue";
import "virtual:svg-icons-register";

const pinia = createPinia();
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "zh-TW",
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zh,
    "en-US": en,
  },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(pinia);
app.mount("#app");
