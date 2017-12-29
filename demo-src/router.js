import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import checkbox from './components/checkbox'
import iconbutton from './components/iconButton'
Vue.use(Router)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: checkbox
},
{
  path: '/iconbutton',
  name: 'iconbutton',
  component: iconbutton
}]
export default new Router({
  routes: routes
})
