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
