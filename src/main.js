import "./index.css";
import router from "./router";
import store from "./store";
import { createApp } from "vue";
import App from "./App.vue";
import * as filters from './filters'
import i18n from './i18n';

const app = createApp(App);
app.use(router).use(store).mount("#app");
app.use(i18n);

app.config.globalProperties.$filters = filters
