import VuLoading from './src/loading'

/* istanbul ignore next */
VuLoading.install = Vue => {
  Vue.component(VuLoading.name, VuLoading)
}

export default VuLoading
