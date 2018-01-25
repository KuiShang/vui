import VuSwitch from './src/switch'

/* istanbul ignore next */
VuSwitch.install = Vue => {
  Vue.component(VuSwitch.name, VuSwitch)
}

export default VuSwitch
