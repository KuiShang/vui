import VuTabs from './src/tabs'

/* istanbul ignore next */
VuTabs.install = Vue => {
  Vue.component(VuTabs.name, VuTabs)
}

export default VuTabs
