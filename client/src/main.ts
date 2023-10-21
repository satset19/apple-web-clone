import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router"

// const app = createApp(App)

// app.use(createPinia())



const app = createApp(App)
const pinia = createPinia()

// app.use(createPinia())
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(router)
app.use(pinia)
app.mount('#app')