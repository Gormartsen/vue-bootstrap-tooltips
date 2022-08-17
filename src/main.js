import { createApp } from "vue";
import Debug from "@gormartsen/vue-debug";

import App from "./App.vue";

window.APP = createApp(App);

window.APP.use(Debug, true);


import TooltipComponent from "../index";

window.APP.use(TooltipComponent);

window.APP.mount("#app");
