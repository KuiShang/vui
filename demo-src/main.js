import Vue from 'vue'
import app from './components/app'
import router from './router'
// import vui from 'vui'
// require assets/normalize.css"
import './assets/normalize.css'
import vui from '../src/index.js'
import '../packages/theme-chalk/src/index.scss'
Vue.use(vui);

window.VuToast = vui.Toast;

/*eslint-disable */
let s = new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})
console.log(s)
