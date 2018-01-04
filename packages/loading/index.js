import VULoading from './src/loading'

/* istanbul ignore next */
VULoading.install = Vue => {
  Vue.component(VULoading.name, VULoading)
}

export default VULoading
