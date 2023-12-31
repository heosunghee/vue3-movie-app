import { createApp } from 'vue'
import App from './App'
import store from './store'  // Same as './store/index.js'
import router from './routes' // Same as './routes/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(store) // $store
  .use(router) // $route, $router
  .use(loadImage) // $loadImage
  .mount('#app')