import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

let app=createApp(App)
app.use(router)
app.mount('#app')

