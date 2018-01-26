----------
#### CellGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| border | 是否显示外边框 | `Boolean` | `true` | - |

#### Cell API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| icon | 左侧图标 | `String` | - | - |
| title | 左侧标题 | `String` | - | - |
| value | 右侧内容 | `String` | - | - |
| label | 标题下方的描述信息 | `String` | - | - |
| url | 跳转链接 | `String` | - | - |
| to | 路由跳转对象，同 `vue-router` 的 to | `String | Object` | - | - |
| replace | 跳转时是否替换当前 history | `String` | `false` | - |
| border | 是否显示内边框 | `Boolean` | `true` | - |
| clickable | 是否开启点击反馈 | `Boolean` | `false` | - |
| is-link | 是否展示右侧箭头并开启点击反馈 | `Boolean` | `false` | - |
| required | 是否显示表单必填符号 | `Boolean` | `false` | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 自定义显示内容 |
| icon | 自定义`icon` |
| title | 自定义`title` |
| right-icon | 自定义右侧按钮，默认是`arrow` |


> [演示](http://10.112.178.20:9000/#/cell)

