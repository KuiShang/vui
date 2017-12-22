import Vue from 'vue'
import app from './components/app'
import router from './router'
import vui from 'vui'
import 'vuiss'
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
Vue.use(vui)
/*eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})
