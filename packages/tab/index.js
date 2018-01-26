import VuTab from './src/tab'

/* istanbul ignore next */
VuTab.install = Vue => {
  Vue.component(VuTab.name, VuTab)
}

export default VuTab
