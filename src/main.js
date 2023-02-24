import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faToggleOff,
  faToggleOn,
  faLink,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faVuejs } from "@fortawesome/free-brands-svg-icons";

library.add(faToggleOff, faToggleOn, faLink, faAnglesRight, faGithub, faVuejs);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
