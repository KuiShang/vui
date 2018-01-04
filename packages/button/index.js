import VUButton from './src/button'

/* istanbul ignore next */
VUButton.install = Vue => {
  Vue.component(VUButton.name, VUButton)
}

export default VUButton
