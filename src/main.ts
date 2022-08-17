import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "./plugins/vue-fontawesome";
import "typeface-notosans-kor";

createApp(App)
  .use(store)
  .use(router)
  .component("fa-fa", FontAwesomeIcon)
  .mount("#app");
