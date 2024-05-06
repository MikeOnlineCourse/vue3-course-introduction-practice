import { createApp } from "vue";
import App from "./App.vue";

import { thousand } from "./directive/thousand.js";
import { timeformat } from "./directive/timeformat.js";
import { src } from "./directive/src.js";

const app = createApp(App);

// https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
app.directive("my-directive", {
  // 在綁定DOM的 attribute 或事件監聽被使用之前調用
  created() {},
  // 在綁定DOM的父組件掛載之前調用
  beforeMount() {},
  // 綁定DOM的父組件被掛載時調用
  mounted() {},
  // 在包含組件的 VNode 更新之前調用
  beforeUpdate() {},
  // 在包含組件的 VNode 及其子組件的 VNode 更新之後調用
  updated() {},
  // 在綁定DOM的父組件移除之前調用
  beforeUnmount() {},
  // 移除綁定DOM的父組件時調用
  unmounted() {},
});

app.directive("thousand", thousand);
app.directive("timeformat", timeformat);
app.directive("src", src);

app.mount("#app");
