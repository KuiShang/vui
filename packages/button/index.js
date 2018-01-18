import VuButton from './src/button'

/* istanbul ignore next */
VuButton.install = Vue => {
  Vue.component(VuButton.name, VuButton)
}

export default VuButton
