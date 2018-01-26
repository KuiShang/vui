-----------
### Checkbox 复选框

#### 使用指南
``` javascript
import { Checkbox, CheckboxGroup } from 'vui';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
```

#### 代码演示

##### 基础用法
通过`v-model`绑定 checkbox 的勾选状态

```html
<vu-checkbox v-model="checked">复选框 1</vu-checkbox>
```

```javascript
export default {
  data() {


---------