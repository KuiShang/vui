---
title: 指南
---

## <div class="code-name">VUI</div>

<div class="code-desc">
  Mobile UI Components, based on Vue.js .
</div>

## 介绍

什么是 **VUI** ？

一个基于 **vue.js**样式的 UI 框架，用于快速构建移动端单页应用。

<hr/>


## 快速上手

### 安装

```shell
在package.json dependent中添加依赖

"@qyyfe/ec-ui": "git+http://gitlab.intra.gomeplus.com/qyyfe/ec-ui.git",

```

### 引入组件

#### 方式一. 按需引入组件

```js
import { Button } from 'vui/lib/button';
import 'vui/lib/theme-chalk/base.css';
import 'vui/lib/theme-chalk/button.css';
```
 
#### 方式二. 导入所有组件

```js
import Vue from 'vue';
import vui from 'vui'
import 'vui/lib/theme-chalk/index.css' 
Vue.use(vui)   

```
## DEMO 部署地址
[DEMO](http://10.112.178.20:9000/#/)

<!-- <div class="device-ios">
  <iframe class="demo-ios" src="http://10.112.178.20:9000/#/" frameborder="0"></iframe>
</div> -->

### THANKS TO:

[**代码结构组织:** https://github.com/ElemeFE/element](https://github.com/ElemeFE/element)

[**docs:** https://github.com/wangdahoo/vonic](https://github.com/wangdahoo/vonic)

[**demo:** https://github.com/wangdahoo/vonic](https://github.com/wangdahoo/vonic)

[**基础组件逻辑:** https://github.com/youzan/vant](https://github.com/youzan/vant)

[**样式组织1:** https://github.com/wangdahoo/vonic](https://github.com/wangdahoo/vonic) 

[**样式组织2:** https://github.com/youzan/vant](https://github.com/youzan/vant) 

[**样式组织3:** https://github.com/ElemeFE/element](https://github.com/ElemeFE/element)
