import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@babel/polyfill'
import './registerServiceWorker'

import Vuetify from 'vuetify/lib'

import { VueMasonryPlugin } from 'vue-masonry'
// import Home from './views/Home'
import 'vuetify/src/stylus/app.styl'
// import Recipes from './views/Recipes'
// import Favorites from './views/Favorites'
import store from './store/store'
// import Form from './views/Form'

Vue.use(VueMasonryPlugin)
Vue.use(Vuetify)

// const routes = [
//   { path: '/', component: Home },
//   { path: '/recipes', component: Recipes },
//   { path: '/favorites', component: Favorites },
//   { path: '/form', component: Form }
// ]
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
