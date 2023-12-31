import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/main.css'
import { createPinia } from 'pinia'
import auth from './assets/auth.js'

const pinia = createPinia()

const app = createApp(App)

app.mixin(auth)

app.use(pinia)

app.use(router)

app.mount('#app')
