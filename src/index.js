/* Automatically generated by './build/bin/build-entry.js' */

import Checkbox from '../packages/checkbox/index.js'
import CheckboxGroup from '../packages/checkbox-group/index.js'
import IconButton from '../packages/icon-button/index.js'
import SwipeItem from '../packages/swipe-item/index.js'
import Swipe from '../packages/swipe/index.js'
import Loading from '../packages/loading/index.js'
import Button from '../packages/button/index.js'
import Progress from '../packages/progress/index.js'
<<<<<<< HEAD
import Switch from '../packages/switch/index.js'

=======
import Cell from '../packages/cell/index.js'
import CellGroup from '../packages/cell-group/index.js'
import Field from '../packages/field/index.js'
>>>>>>> df9878d14bfb981d728c9171e97a3519714ee4c4
const components = [
  Checkbox,
  CheckboxGroup,
  IconButton,
  SwipeItem,
  Swipe,
  Loading,
  Button,
  Progress,
<<<<<<< HEAD
  Switch
=======
  Cell,
  CellGroup,
  Field
>>>>>>> df9878d14bfb981d728c9171e97a3519714ee4c4
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const vui = {
  version: '1.0.0',
  install,
  Checkbox,
  CheckboxGroup,
  IconButton,
  SwipeItem,
  Swipe,
  Loading,
  Button,
  Progress,
<<<<<<< HEAD
  Switch
=======
  Cell,
  CellGroup,
  Field
>>>>>>> df9878d14bfb981d728c9171e97a3519714ee4c4
}

export default vui
