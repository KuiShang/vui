import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import checkbox from './components/checkbox'
import iconbutton from './components/iconButton'
import swiper from './components/swiper'
import loading from './components/loading'
import button from './components/button'
import progress from './components/progress'
import Switch from './components/switch'
import field from './components/field'
import cell from './components/cell'
import tab from './components/tab'
import navBar from './components/navBar'
import loadmore from './components/loadmore'
import list from './components/list'
import imagePreview from './components/image-preview'
import lazyload from './components/lazyload'
import toast from './components/toast'
import dialog from './components/dialog'

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
  path: '/switch',
  name: 'switch',
  component: Switch
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
  path: '/tab',
  name: 'tab',
  component: tab
},
{
  path: '/navBar',
  name: 'navBar',
  component: navBar
},
{
  path: '/loadmore',
  name: 'loadmore',
  component: loadmore
},
{
  path: '/list',
  name: 'list',
  component: list
},
{
  path: '/imagePreview',
  name: 'imagePreview',
  component: imagePreview
},
{
  path: '/lazyload',
  name: 'lazyload',
  component: lazyload
},
{
  path: '/toast',
  name: 'toast',
  component: toast
},
{
  path: '/dialog',
  name: 'dialog',
  component: dialog
}]

export default new Router({
  routes: routes
})
