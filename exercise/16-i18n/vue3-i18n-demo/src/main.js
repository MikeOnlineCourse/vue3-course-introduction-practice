import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./style.css";
import App from "./App.vue";
import zh from "./language/zh-TW.json";
import en from "./language/en-US.json";
import ja from "./language/ja-JP.json";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "zh-TW",
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zh,
    "en-US": en,
    "ja-JP": ja,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
