import VUSwipe from './src/swipe'

/* istanbul ignore next */
VUSwipe.install = Vue => {
  Vue.component(VUSwipe.name, VUSwipe)
}

export default VUSwipe
