import { createI18n } from "vue-i18n";

import zh from "../language/zh-TW.json";
import en from "../language/en-US.json";

let locale = "zh-TW";
if (typeof window !== "undefined") {
  locale = window.localStorage.getItem("locale") ?? "zh-TW";
}
export const i18nInstall = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: "zh-TW",
    messages: {
      "zh-TW": zh,
      "en-US": en,
    },
  });

  app.use(i18n);
};
