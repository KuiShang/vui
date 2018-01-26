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
----------
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

将`vu-cell-group`组件看成一个容器即可

```html
<vu-cell-group>
  <vu-cell title="单元格" value="内容" />
  <vu-cell title="单元格" value="内容" label="描述信息" />
</vu-cell-group>
```

###### 只设置value
只设置`value`时会向左对齐

```html
<vu-cell-group>
  <vu-cell value="内容" />
</vu-cell-group>
```

###### 展示图标
通过`icon`属性在标题左侧展示图标

```html
<vu-cell-group>
  <vu-cell title="单元格" icon="location" />
</vu-cell-group>
```


###### 展示箭头
传入`is-link`属性则会在右侧显示箭头

```html
<vu-cell-group>
  <vu-cell title="单元格" is-link />
  <vu-cell title="单元格" is-link value="内容" />
</vu-cell-group>
```

###### 高级用法
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

--------

### Dialog 弹出框

#### 使用指南

```js
import { Dialog } from 'vant';
```

#### 代码演示

##### 消息提示
用于提示一些消息，只包含一个确认按钮

```javascript
Dialog.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容'
}).then(() => {
  // on close
});
```

##### 消息确认
用于确认消息，包含取消和确认按钮

```javascript
Dialog.confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on confirm
}).catch(() => {
  // on cancel
});
```

##### 组件内调用
引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，便于在组件内调用。

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容'
    });
  }
}
```

#### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Dialog.alert | options | `Promise` | 展示消息提示弹窗 |
| Dialog.confirm | options | `Promise` | 展示消息确认弹窗 |
| Dialog.close | - | `void` | 关闭弹窗 |

#### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 标题 | `String` | - | - |
| message | 内容 | `String` | - | - |
| showConfirmButton | 是否展示确认按钮 | `Boolean` |  `true` | - |
| showCancelButton | 是否展示取消按钮 | `Boolean` |  `false` | - |
| confirmButtonText | 确认按钮的文案 | `String` |  `确认` | - |
| cancelButtonText | 取消按钮的文案 | `String` | `取消` | - |
| overlay | 是否展示蒙层 | `Boolean` | `true` | - |
| closeOnClickOverlay | 点击蒙层时是否关闭弹窗 | `Boolean` | `false` | - |
| lockOnScroll | 是否禁用背景滚动 | `Boolean` | `true` | - |

----------

### Field 输入框

`input`或`textarea`的输入框。

#### 使用指南
``` javascript
import { Field } from 'vui';

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
--------

### Loadmore 下拉刷新 上拉刷新

#### 使用指南
``` javascript
import { Loadmore } from 'vui';
```

#### 代码演示

```html
<vu-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</vu-loadmore>
```

以列表顶部的下拉刷新为例：按住列表，下拉一定距离（通过 `topDistance` 配置）后释放，被指定为 `top-method` 的方法就会执行

```javascript
loadTop() {
  ...// 加载更多数据
  this.$refs.loadmore.onTopLoaded();
}
```
注意在这个方法的最后需要手动调用 `loadmore` 的 `onTopLoaded` 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
列表底部的上拉刷新与之类似

```javascript
loadBottom() {
  ...// 加载更多数据
  this.allLoaded = true;// 若数据已全部获取完毕
  this.$refs.loadmore.onBottomLoaded();
}
```


唯一的区别是，当底部数据全部获取完毕时，可以将绑定到组件 `bottom-all-loaded` 属性的变量赋值为 `true`，这样 `bottom-method` 就不会再次执行了。
手指在屏幕上滑动的距离与组件实际移动的距离比值可以通过 `distance-index` 参数配置，默认值为 2。


#### 代码演示

可以为列表顶部和底部的加载提示区域提供自定义的 HTML 模板

```html
<template>
  <vu-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </vu-loadmore>
</template>
<script>
  export default {
    data() {
      return {
        topStatus: '',
        // ...
      };
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      // ...
    },
    // ...
  };
</script>
```

比如需要配置列表顶部的 HTML，则需要为自定义 HTML 模板的最外层标签设置 `slot` 属性为 `top`，类名为 `mint-loadmore-top`。当用户滑动组件时，组件会有以下几个状态：

* pull：组件已经被按下，但按下的距离未达到 topDistance，此时释放不会触发 top-method，列表会回到初始位置
* drop：按下的距离不小于 topDistance，此时释放会触发 top-method
* loading：组件已被释放，top-method 正在执行 每当组件的状态发生变化时，loadmore 都会触发 top-status-change 方法，参数为组件目前的状态。因此可以像本例一样，使用一个 handleTopChange 方法来处理组件状态的变化。


#### 配置加载提示区域的文字

在不使用自定义 HTML 模板的情况下，可以配置 `loadmore` 本身自带的加载提示区域的文字。以列表顶部为例，对应于 `status` 的三个状态，可配置的属性依次为 `topPullText`、`topDropText` 和 `topLoadingText`。与之对应的底部属性为 `bottomPullText`、`bottomDropText` 和 `bottomLoadingText`。

#### 自动检测

loadmore 在初始化时会自动检测它的高度是否能够撑满其容器，如果不能则会调用 `bottom-method`，直到撑满容器为止。如果不希望使用这一机制，可以将 `auto-fill` 设为 `false`。

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| autoFill | 若为真，loadmore 会自动检测并撑满其容器 | `Boolean` | `true` | - |
| distanceIndex | 手指移动与组件移动距离的比值	 | `Number` | 2 | - |
| maxDistance | 组件可移动的最大距离（像素），若为 0 则不限制 | `Number` | 0 | - |
| topPullText | topStatus 为 pull 时加载提示区域的文字	 | `String` | `下拉刷新` | - |
| topDropText | topStatus 为 drop 时加载提示区域的文字 | `String` | `释放更新` | - |
| topDropText | topStatus 为 drop 时加载提示区域的文字 | `String` | `释放更新` | - |
| topLoadingText | topStatus 为 loading 时加载提示区域的文字 | `String` | `加载中...` | - |
| topDistance | 触发 topMethod 的下拉距离阈值（像素） | `Number` | 70 | - |
| topMethod | 下拉刷新执行的方法		 | `Function` | - | - |
| bottomPullText | bottomStatus 为 pull 时加载提示区域的文字 | `String` | `上拉刷新` | - |
| bottomDropText | bottomStatus 为 drop 时加载提示区域的文字	 | `String` | `释放更新` | - |
| bottomLoadingText | bottomStatus 为 loading 时加载提示区域的文字 | `String` | `加载中...` | - |
| bottomDistance | 触发 bottomMethod 的上拉距离阈值（像素） | `Number` | 70 | - |
| bottomMethod | 上拉刷新执行的方法 | `Function` | - | - |
| bottomAllLoaded | 若为真，则 bottomMethod 不会被再次触发 | `Boolean` | `false` | - |


#### Events

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| top-status-change | 组件顶部状态发生变化时的回调函数 | 组件顶部的新状态名 |
| bottom-status-change | 组件底部状态发生变化时的回调函数 | 组件底部的新状态名 |

#### Slot

| name | 描述 |
|-----------|-----------|
| - | 数据列表 |
| top | 自定义顶部加载提示区域 HTML 模板 |
| bottom | 自定义底部加载提示区域 HTML 模板 |

----------
### NavBar 导航栏

#### 使用指南
``` javascript
import { NavBar } from 'vui';

Vue.use(NavBar);
```

#### 代码演示

##### 基础用法

```html
<vu-nav-bar
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
<vu-nav-bar title="标题" left-text="返回" left-arrow>
  <vu-icon name="search" slot="right" />
</vu-nav-bar>
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

#### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-left | 点击左侧按钮时触发 | - |
| click-right | 点击右侧按钮时触发 | - |

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

#### Search

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '搜索框'}">
    <div class="page-content">
      <search v-model="keywords" placeholder="输入关键字" :on-search="onSearch" :on-cancel="onCancel"></search>

      <div class="padding" v-show="searching">
        <span v-if="keywords">searching for '{{keywords}}'.</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        keywords: '',
        searching: false
      }
    },

    methods: {
      onSearch(keywords) {
        this.searching = true;
      },

      onCancel() {
        this.searching = false;
        this.keywords = ''
      }
    }
  }
</script>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| value | 值（用`v-model`替代以支持双向绑定） |  String | 是 | 无 |
| placeholder | 占位符 |  String | 否 | Search |
| onSearch | 搜索回调函数 |  Function | 否 | 无 |
| onCancel | 取消回调函数 |  Function | 否 | 无 |
| cancelText | 取消按钮文案 |  String | 否 | Cancel |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Search)

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
<vu-swipe :autoplay="3000">
  <vu-swipe-item>1</vu-swipe-item>
  <vu-swipe-item>2</vu-swipe-item>
  <vu-swipe-item>3</vu-swipe-item>
  <vu-swipe-item>4</vu-swipe-item>
</vu-swipe>
```

##### 图片懒加载
配合 [Lazyload](#/zh-CN/component/lazyload) 组件实现图片懒加载

```html
<vu-swipe :autoplay="3000">
  <vu-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </vu-swipe-item>
</vu-swipe>
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

----------


### Tabs 标签页

### 使用指南
``` javascript
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
```

### 代码演示

#### 基础用法

默认情况下启用第一个 tab，可以通过`active`属性激活对应特定索引的 tab

```html
<vu-tabs :active="active">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

#### 横向滚动

默认情况下多于4个tab时，可以横向滚动tab。可以通过设置`swipe-threshold`这个阙值，多于这个阙值时，tab就会支持横向滚动。

```html
<vu-tabs>
  <vu-tab v-for="index in 8" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

#### 禁用标签

在对应的`vu-tab`上设置`disabled`属性即可。如果需要监听禁用事件，可以在`vu-tabs`上监听`disabled`事件。

```html
<vu-tabs @disabled="onClickDisabled">
  <vu-tab v-for="index in 4" :title="'选项 ' + index" :disabled="index === 2">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled() {
      Toast('Disabled!')
    }
  }
};
```

#### 样式风格

`Tabs`目前有两种样式：`line`和`card`，默认为`line`样式，也就上面基础用法中的样式，你可以在`vu-tabs`上设置`type`为`card`改为card样式。

```html
<vu-tabs type="card">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

#### 点击事件

可以在`vu-tabs`上绑定一个`click`事件，事件处理函数有一个参数，参数为对应`tab`在`tabs`中的索引。

```html
<vu-tabs @click="handleTabClick">
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

```javascript
export default {
  methods: {
    handleTabClick(index) {
      Toast(index);
    }
  }
};
```

#### 粘性布局
通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<vu-tabs :active="active" sticky>
  <vu-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </vu-tab>
</vu-tabs>
```

### Tabs API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| type | Tab 样式类型 | `String` | `line` | `card` |
| active | 默认激活的 tab | `String` `Number` | `0` | - |
| duration | 切换 tab 的动画时间 | `Number` | `0.2` | - |
| swipe-threshold | 滚动阀值，设置 Tab 超过多少个可滚动 | `Number` | `4` | - |
| sticky | 是否使用粘性定位布局 | `Boolean` | `false` | - |

### Tab API

| 参数 | 说明 | 类型 | 默认值 | 可选 |
|-----------|-----------|-----------|-------------|-------------|
| title | tab的标题 | `String` | - | - |
| disabled | 是否禁用这个tab | `Boolean` | `false` | - |

### Tabs Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 某个tab点击事件 | index：点击的`tab`的索引 |
| disabled | 某个tab禁用时点击事件 | index：点击的`tab`的索引 |



--------

### Toast 轻提示

#### 使用指南

```javascript
import { Toast } from 'vui';
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
