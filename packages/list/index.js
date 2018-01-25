import VuList from './src/list'

/* istanbul ignore next */
VuList.install = Vue => {
  Vue.component(VuList.name, VuList)
}

export default VuList
