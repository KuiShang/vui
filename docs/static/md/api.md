---
title: API
---

## API

<p class="danger">
  该文档内所有演示代码，均可在[这里](http://10.112.178.20:9000)找到。
</p>

## 组件

----------

### Button 按钮

#### 使用指南
``` javascript
import { Button } from 'vui';

Vue.use(Button);
```

#### 代码演示

##### 按钮类型
支持`default`、`primary`、`danger`三种类型，默认为`default`

```html
<vu-button type="default">默认按钮</vu-button>
<vu-button type="primary">主要按钮</vu-button>
<vu-button type="danger">危险按钮</vu-button>
```

##### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html
<vu-button size="large">大号按钮</vu-button>
<vu-button size="normal">普通按钮</vu-button>
<vu-button size="small">小型按钮</vu-button>
<vu-button size="mini">迷你按钮</vu-button>
```

##### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<vu-button disabled>禁用状态</vu-button>
```

##### 加载状态

```html
<vu-button loading />
<vu-button loading type="primary" />
```

##### 自定义按钮标签

按钮标签默认为`button`，可以使用`tag`属性来修改按钮标签

```html
<vu-button tag="a" href="http://code.ds.gome.com.cn/gitlab/meidian-crd/open/vui" target="_blank">
  按钮
</vu-button>
```

##### 页面底部操作按钮

```html
<vu-button type="primary" bottomAction>按钮</vu-button>
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `String` | `default` | `primary` `danger` |
| size | 按钮尺寸 | `String` | `normal` | `large` `small` `mini` |
| tag | 按钮标签 | `String` | `button` | 任意`HTML`标签 |
| nativeType | 按钮类型（原生） | `String` | `''` | - |
| diabled | 是否禁用 | `Boolean` |  `false` | - |
| loading | 是否显示为加载状态 | `Boolean` |  `false` | - |
| block | 是否为块级元素 | `Boolean` |   `false` | - |
| bottomAction | 是否为底部行动按钮 | `Boolean` | `false` | - |


> [演示](http://10.112.178.20:9000/#/button)

----------


### Cell 单元格

#### 使用指南
``` javascript
import { Cell, CellGroup } from 'vui';

Vue.use(Cell);
Vue.use(CellGroup);
```

#### 代码演示

###### 基础用法

将`van-cell-group`组件看成一个容器即可

```html
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
```

###### 只设置value
只设置`value`时会向左对齐

```html
<van-cell-group>
  <van-cell value="内容" />
</van-cell-group>
```

###### 展示图标
通过`icon`属性在标题左侧展示图标

```html
<van-cell-group>
  <van-cell title="单元格" icon="location" />
</van-cell-group>
```


###### 展示箭头
传入`is-link`属性则会在右侧显示箭头

```html
<van-cell-group>
  <van-cell title="单元格" is-link />
  <van-cell title="单元格" is-link value="内容" />
</van-cell-group>
```

###### 高级用法
如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

```html
<van-cell-group>
  <van-cell value="内容" icon="shop" is-link>
    <template slot="title">
      <span class="van-cell-text">单元格</span>
      <van-tag type="danger">标签</van-tag>
    </template>
  </van-cell>
  <van-cell title="单元格" icon="location" is-link />
  <van-cell title="单元格">
    <van-icon slot="right-icon" name="search" class="van-cell__right-icon" />
  </van-cell>
</van-cell-group>
```

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

----------

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
    return {
      checked: true
    };
  }
};
```

##### 禁用状态

```html
<vu-checkbox v-model="checked" disabled>复选框 2</vu-checkbox>
```

##### Checkbox 组

需要与`vu-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`vu-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<vu-checkbox-group v-model="result">
  <vu-checkbox
    v-for="(item, index) in list"
    :key="index"
    :name="item"
  >
    复选框 {{ item }}
  </vu-checkbox>
</vu-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

##### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件

```html
<vu-checkbox-group v-model="result">
  <vu-cell-group>
    <vu-cell v-for="(item, index) in list" :key="index">
      <vu-checkbox :name="item">复选框 {{ item }}</vu-checkbox>
    </vu-cell>
  </vu-cell-group>
</vu-checkbox-group>
```

##### Checkbox API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 标识 Checkbox 名称 | `Boolean` | `false` | - |
| disabled | 是否禁用单选框 | `Boolean` | `false` | - |
| shape | 形状 | `String` | `round` | `square` |

##### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

##### Checkbox Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

##### CheckboxGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |


> [演示](http://10.112.178.20:9000/#/checkbox)

----------

### Progress 进度条

#### 使用指南
``` javascript
import { Progress } from 'vui';

Vue.use(Progress);
```

#### 代码演示

##### 基础用法

进度条默认为蓝色，使用`percentage`属性来设置当前进度

```html
<vu-progress :percentage="0" />
<vu-progress :percentage="46" />
<vu-progress :percentage="100" />
```


##### 进度条置灰

```html
<vu-progress inactive :percentage="0" />
<vu-progress inactive :percentage="46" />
<vu-progress inactive :percentage="100" />
```


##### 样式定制

可以使用`pivot-text`属性自定义文字，`color`属性自定义进度条颜色

```html
<vu-progress pivot-text="红色" color="#ed5050" :percentage="26" />
<vu-progress pivot-text="橙色" color="#f60" :percentage="46" />
<vu-progress pivot-text="黄色" color="#f09000" :percentage="66" />
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| inactive | 是否置灰 | `Boolean` | `false` | - |
| percentage | 进度百分比 | `Number` | `false` | `0-100` |
| show-pivot | 是否显示进度文字 | `Boolean` | `true` | - |
| pivot-text | 文字显示 | `String` | 百分比文字 | - |
| color | 进度条颜色 | `String` | `#38f` | hexvalue |
| text-color | 进度条文字颜色 | `String` | `#fff` | hexvalue |

----------

### Field 输入框

`input`或`textarea`的输入框。

#### 使用指南
``` javascript
import { Field } from 'vant';

Vue.use(Field);
```

#### 代码演示

##### 基础用法
通过 v-model 绑定输入框的值

```html
<vu-cell-group>
  <vu-field v-model="value" placeholder="请输入用户名" />
</vu-cell-group>
```

##### 自定义类型
根据`type`属性定义不同类型的输入框

```html
<vu-cell-group>
  <vu-field
    v-model="username"
    label="用户名"
    icon="clear"
    placeholder="请输入用户名"
    required
    @click-icon="username = ''"
  />

  <vu-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</vu-cell-group>
```

##### 禁用输入框

```html
<vu-cell-group>
  <vu-field
    value="输入框已禁用"
    label="用户名"
    disabled
  />
</vu-cell-group>
```

##### 错误提示
通过`error`或者`error-message`属性增加对应的错误提示

```html
<vu-cell-group>
  <vu-field
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <vu-field
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</vu-cell-group>
```

##### 高度自适应
对于 textarea，可以通过`autosize`属性设置高度自适应

```html
<vu-cell-group>
  <vu-field
    v-model="message"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    rows="1"
    autosize
/>
</vu-cell-group>
```

#### API
Filed 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`readonly`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 输入框类型 | `String` | `text` | `number` `email` `textarea` `tel` `datetime` `date` `password` `url` |
| value | 输入框的值 | `String` | - | - |
| label | 输入框标签 | `String` | - | - |
| disabled | 是否禁用输入框 | `Boolean` | `false` | - |
| error | 输入框是否有错误 | `Boolean` | `false` | - |
| error-message | 输入框底部错误提示文案 | `String` | `''` | - |
| autosize | 高度自适应(仅支持textarea) | `Boolean` | `false` | - |
| icon | 输入框尾部图标 | `String` | - |  Icon 组件支持的类型 |

#### Event
Filed 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| click-icon | 点击尾部图标时触发 | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| icon | 自定义icon |

----------

### Cell 单元格

#### 使用指南
``` javascript
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
```

#### 代码演示

##### 基础用法

将`vu-cell-group`组件看成一个容器即可

```html
<vu-cell-group>
  <vu-cell title="单元格" value="内容" />
  <vu-cell title="单元格" value="内容" label="描述信息" />
</vu-cell-group>
```

##### 只设置value
只设置`value`时会向左对齐

```html
<vu-cell-group>
  <vu-cell value="内容" />
</vu-cell-group>
```

##### 展示图标
通过`icon`属性在标题左侧展示图标

```html
<vu-cell-group>
  <vu-cell title="单元格" icon="location" />
</vu-cell-group>
```


##### 展示箭头
传入`is-link`属性则会在右侧显示箭头

```html
<vu-cell-group>
  <vu-cell title="单元格" is-link />
  <vu-cell title="单元格" is-link value="内容" />
</vu-cell-group>
```

##### 高级用法
如以上用法不能满足你的需求，可以使用对应的`slot`来自定义显示的内容

```html
<vu-cell-group>
  <vu-cell value="内容" icon="shop" is-link>
    <template slot="title">
      <span class="vu-cell-text">单元格</span>
      <vu-tag type="danger">标签</vu-tag>
    </template>
  </vu-cell>
  <vu-cell title="单元格" icon="location" is-link />
  <vu-cell title="单元格">
    <vu-icon slot="right-icon" name="search" class="vu-cell__right-icon" />
  </vu-cell>
</vu-cell-group>
```

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

----------
### NavBar 导航栏

#### 使用指南
``` javascript
import { NavBar } from 'vant';

Vue.use(NavBar);
```

#### 代码演示

##### 基础用法

```html
<van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
```

```js
export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
```

##### 高级用法
通过 slot 定制内容

```html
<van-nav-bar title="标题" left-text="返回" left-arrow>
  <van-icon name="search" slot="right" />
</van-nav-bar>
```


#### API
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String` | `''` | - |
| left-text | 左侧文案 | `String` | `''` | - |
| right-text | 右侧文案 | `String` | `''` | - |
| left-arrow | 是否显示左侧箭头 | `Boolean` | `false` | - |
| left-arrow-size | 左侧箭头图标字体大小 | `String` | `14px, 14rem` | - |
| fixed | 是否固定在顶部 | `Boolean` | `false` | - |
| z-index | 元素 z-index | `Number` | `1` | - |

#### Slot

| name | 描述 |
|-----------|-----------|
| title | 自定义标题 |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-left | 点击左侧按钮时触发 | - |
| click-right | 点击右侧按钮时触发 | - |

----------


### Swipe 轮播

#### 使用指南
``` javascript
import { Swipe, SwipeItem } from 'vui';

Vue.use(Swipe);
Vue.use(SwipeItem);
```

#### 代码演示

##### 基础用法
通过`autoplay`属性设置自动轮播间隔

```html
<van-swipe :autoplay="3000">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
```

##### 图片懒加载
配合 [Lazyload](#/zh-CN/component/lazyload) 组件实现图片懒加载

```html
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | - | - |
| duration | 动画时长，单位为 ms | `Number` | `500` | - |
| showIndicators | 是否显示指示器 | `Boolean` | `true` | - |
| initialSwipe | 初始位置，从 0 开始算 | `Number` | `0` | - |

#### 事件

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### Toast 轻提示

#### 使用指南

```javascript
import { Toast } from 'vant';
```

#### 代码演示

##### 文字提示

```javascript
Toast('我是提示文案，建议不超过十五字~');
```


##### 加载提示

```javascript
Toast.loading({ mask: true });
```


##### 成功/失败提示

```javascript
Toast.success('成功文案');
Toast.fail('失败文案');
```


##### 高级用法

```javascript
const toast = Toast.loading({
  duration: 0,       // 持续展示 toast
  forbidClick: true, // 禁用背景点击
  message: '倒计时 3 秒'
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
```

##### 组件内调用
引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$toast('提示文案');
  }
}
```



#### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Toast | `options | message` | toast 实例 | 展示提示 |
| Toast.loading | `options | message` | toast 实例 | 展示加载提示 |
| Toast.success | `options | message` | toast 实例 | 展示成功提示 |
| Toast.fail | `options | message` | toast 实例 | 展示失败提示 |
| Toast.clear | - | `void` | 关闭提示 |

#### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 提示类型 | `String` | `text` | `loading` `success` `fail` `html` |
| message | 内容 | `String` | `''` | - |
| position | 位置 | `String` | `middle` | `top` `bottom` |
| mask | 是否显示背景蒙层 | `Boolean` | `false` | - |
| forbidClick | 禁止背景点击 | `Boolean` | `false` | - |
| duration | 时长(ms) | `Number` | `3000` | 值为 0 时，toast 不会消失 |
