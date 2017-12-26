import VUIcon from './src/icon'

/* istanbul ignore next */
VUIcon.install = Vue => {
  Vue.component(VUIcon.name, VUIcon)
}

export default VUIcon
