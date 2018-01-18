import VuCell from './src/cell'

/* istanbul ignore next */
VuCell.install = Vue => {
	Vue.component(VuCell.name, VuCell)
}

export default VuCell
