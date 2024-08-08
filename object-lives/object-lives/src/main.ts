import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as ArcAuthorization from "@arc/authorization";
import vue3GoogleLogin from "vue3-google-login";
import "@/assets/variables.scss";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { default as config } from "./appsettings";

/* import specific icons */
import * as faIcons from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faIcons.faCircleCheck);
library.add(faIcons.faCircleXmark);
library.add(faIcons.faPenToSquare);
library.add(faIcons.faCirclePlus);
library.add(faIcons.faQuestionCircle);
library.add(faIcons.faThList);
library.add(faIcons.faArrowLeft);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
const pinia = createPinia();

library.add(fab, faRightToBracket);
library.add(fab, faRightFromBracket);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(vue3GoogleLogin, {
  //refer to https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit#heading=h.4zlex6l80fxx
  clientId: config.googleLoginClientId,
});
app.component("Login", ArcAuthorization.Login);
app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount("#app");
