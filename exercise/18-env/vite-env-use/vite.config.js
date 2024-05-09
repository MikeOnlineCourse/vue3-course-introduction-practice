import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

// 需要使用 define 把 .env 丟到 process.env 才需要安裝
import "dotenv/config";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [VueDevTools(), vue()],
});
