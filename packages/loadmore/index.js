import VuLoadmore from './src/loadmore'

/* istanbul ignore next */
VuLoadmore.install = Vue => {
  Vue.component(VuLoadmore.name, VuLoadmore)
}

export default VuLoadmore
