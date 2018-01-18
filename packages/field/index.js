import VuField from './src/field'

/* istanbul ignore next */
VuField.install = Vue => {
  Vue.component(VuField.name, VuField)
}

export default VuField
