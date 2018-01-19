import VuSwipe from './src/swipe'

/* istanbul ignore next */
VuSwipe.install = Vue => {
  Vue.component(VuSwipe.name, VuSwipe)
}

export default VuSwipe
