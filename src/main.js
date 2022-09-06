import { createApp } from 'vue'
import router from './router'
import '@/assets/css/style.css'
import 'vite/modulepreload-polyfill'

import App from './App.vue'

const app = createApp(App)
app.use(router).mount('#app')

if (navigator.serviceWorker) {
  // Start registration process on every page load
  window.addEventListener('load', () => {
      navigator.serviceWorker
          // The register function takes as argument
          // the file path to the worker's file
          .register('/service_worker.js')
          // Gives us registration object
          .then(reg => console.log('Service Worker Registered'))
          .catch(swErr => console.log(
                `Service Worker Installation Error: ${swErr}}`));
    });

  navigator.serviceWorker.addEventListener("message", (event) => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);
  });
}

navigator.serviceWorker.onmessage