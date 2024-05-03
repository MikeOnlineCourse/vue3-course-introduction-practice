import { createApp } from "vue";
import App from "./App.vue";
import SvgIcon from "./components/SvgIcon/index.vue";
import "virtual:svg-icons-register";

const app = createApp(App);

app.component("SvgIcon", SvgIcon);

app.mount("#app");
