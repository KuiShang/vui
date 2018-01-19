/**
 * Created by yangjiali on 2018/1/18.
 */
import VuNavBar from './src/nav-bar'

VuNavBar.install = Vue => {
  Vue.component(VuNavBar.name, VuNavBar)
}

export default VuNavBar
