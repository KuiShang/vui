import Vue from 'vue'
import Home from './components/Home'
import VueRouter from 'vue-router'

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const routes = [
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes: routes
})
/*eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<Home/>',
  components: { Home }
})
