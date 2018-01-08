# vui

> 基于vue的ui组件通用基础框架

## Build Setup

``` bash
# install dependencies
npm install

# run doc-server at localhost:9527
npm run doc

# run demo at localhost:8080
npm run dev:demo

# build all components
npm run build:start 

# build demo-src 
npm run build:demo 

# run all tests
npm test
```


## 组件扩展

* 在packages中新建文件夹 名称建议统一采用中划线命名法 ${a-b}
* 在文件夹中必须新建index.js
* 在components.json中声明组件
* 在theme-chalk/src 下 新建 ${a-b}.scss （名称必须与组件文件夹同名

## 其他注意事项

css 相关
    b  为放到跟布局  并加入组件名称前缀
    e  为组件内部内层元素 用_链接 分情况放到跟布局下
    m  为外层传入的可能会修改的 用--链接 直接放到跟布局下
    when  添加 is- 比如有无边框等。放到跟组件下的is-层级之下

其他配置
    组件开发中 
    vui  -> 表示当前根目录
    @  -> 表示当前根目录下的src目录
    
## LICENSE
GPL


