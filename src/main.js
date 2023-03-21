import { createApp } from "vue";

import App from "./App.vue";
import BaseButton from "./components/buttons/BaseButton.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.component("BaseButton", BaseButton);

app.mount("#app");
