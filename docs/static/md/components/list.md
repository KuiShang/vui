--------
### List 列表组件

#### 使用指南
``` javascript
import { List } from 'vui';
```

#### 代码演示

```html
<vu-list :list="this.data1">
  <div slot-scope="props">{{ props.listItem }}</div>
</vu-list>
```

```html
<vu-list :list="this.data1">
  <!-- vue 2.5.0 之前版本 -->
  <template slot-scope="props">{{ props.listItem }}</template>
</vu-list>
```
slot 进去的模板，需要有 `slot-scope` 属性，该属性的 `listItem` 为传入的props列表的每一项

vue 2.5.0 之前的版本，slot只能用`template`标签，之后的版本可以用任何标签

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| list | 传入的列表 | `Array` | - | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 列表模板 |