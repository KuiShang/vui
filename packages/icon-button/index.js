import VuIconButton from './src/icon-button'
console.log(VuIconButton)
/* istanbul ignore next */
VuIconButton.install = Vue => {
  Vue.component(VuIconButton.name, VuIconButton)
}

export default VuIconButton
