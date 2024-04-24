import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HeaderBar from "./components/03-Global.vue";

const app = createApp(App);
app.component("HeaderBar", HeaderBar);

app.mount("#app");
