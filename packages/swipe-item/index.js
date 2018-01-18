import VuSwipeItem from './src/swipe-item'

/* istanbul ignore next */
VuSwipeItem.install = Vue => {
  Vue.component(VuSwipeItem.name, VuSwipeItem)
}

export default VuSwipeItem
