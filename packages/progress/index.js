import VuProgress from './src/progress'

/* istanbul ignore next */
VuProgress.install = Vue => {
  Vue.component(VuProgress.name, VuProgress)
}

export default VuProgress
