import VuPopup from './src/popup'

VuPopup.install = Vue => {
  Vue.component(VuPopup.name, VuPopup)
}

export default VuPopup
