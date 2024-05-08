import "virtual:svg-icons-register";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import zh from "./language/zh-TW.json";
import en from "./language/en-US.json";

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
app.mount("#app");
