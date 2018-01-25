import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import checkbox from './components/checkbox'
import iconbutton from './components/iconButton'
import swiper from './components/swiper'
import loading from './components/loading'
import button from './components/button'
import progress from './components/progress'
import field from './components/field'
import cell from './components/cell'
import navBar from './components/navBar'
import toast from './components/toast'


Vue.use(Router)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/checkbox',
  name: 'checkbox',
  component: checkbox
}, {
  path: '/iconbutton',
  name: 'iconbutton',
  component: iconbutton
}, {
  path: '/swiper',
  name: 'swiper',
  component: swiper
}, {
  path: '/loading',
  name: 'loading',
  component: loading
}, {
  path: '/button',
  name: 'button',
  component: button
},
{
  path: '/progress',
  name: 'progress',
  component: progress
},
{
  path: '/field',
  name: 'field',
  component: field
},
{
  path: '/cell',
  name: 'cell',
  component: cell
},
  {
    path: '/navBar',
    name: 'navBar',
    component: navBar
  },
  {
    path: '/toast',
    name: 'toast',
    component: toast
  }];


export default new Router({
  routes: routes
})
