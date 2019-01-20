import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Recipes from './views/Recipes.vue'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/equipment',
      name: 'equipment',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "equipment" */ './views/Equipment.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Recipes.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./views/Favorites.vue')
    }
  ]
})
