import { createApp } from 'vue'
import router from './router'
// bootstrap (ui)
import '@/assets/css/bootstrap-5.0.2/bootstrap.min.css'
import '@/assets/js/bootstrap-5.0.2/bootstrap.bundle.min.js'
import '@/assets/css/style.css'
import 'vite/modulepreload-polyfill'

import App from './App.vue'

const app = createApp(App)
app.use(router).mount('#app')
