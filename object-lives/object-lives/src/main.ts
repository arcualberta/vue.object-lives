import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as ArcAuthorization from '@arc/authorization'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)
const pinia = createPinia()


library.add(fab, faRightToBracket)


app.component('font-awesome-icon', FontAwesomeIcon)

app.use(vue3GoogleLogin, {
    //refer to https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit#heading=h.4zlex6l80fxx
    clientId: config.googleLoginClientId
})
app.component("Login", ArcAuthorization.Login)
app.use(pinia)
app.use(router)

app.mount('#app')

