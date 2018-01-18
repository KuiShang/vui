import VUCell from './src/cell-group'

/* istanbul ignore next */
VUCell.install = Vue => {
	Vue.component(VUCell.name, VUCell)
}

export default VUCell