import VUSwipeItem from './src/swipe-item'

/* istanbul ignore next */
VUSwipeItem.install = Vue => {
  Vue.component(VUSwipeItem.name, VUSwipeItem)
}

export default VUSwipeItem
