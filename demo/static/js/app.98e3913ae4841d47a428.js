webpackJsonp([0],{"BXs/":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("7+uW"),e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container-cut"},[i("div",{staticClass:"goback",on:{click:function(s){t.$router.go(-1)}}},[t._v("Go Back")]),t._v(" "),i("router-view",{staticClass:"demo-container"})],1)])},staticRenderFns:[]},a=i("VU/8")({name:"app"},e,!1,function(t){i("y6JH")},null,null).exports,c=i("/ocq"),o={data:function(){return{sidebar:void 0,sidebarRight:void 0}},mounted:function(){},destroyed:function(){},methods:{}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page has-navbar"},[i("div",{staticClass:"page-content"},[i("h3",[t._v("基础")]),t._v(" "),i("ul",{staticClass:"list-ios hl-list-borderless"},[i("router-link",{staticClass:"item-icon-right",attrs:{tag:"li",to:{name:"checkbox"}}},[t._v("\n        Checkbox "),i("span",{staticClass:"item-note"},[t._v("复选框")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("router-link",{staticClass:"item-icon-right",attrs:{tag:"li",to:{name:"swiper"}}},[i("span",{staticClass:"item-note"},[t._v("swiper轮播")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("router-link",{staticClass:"item-icon-right",attrs:{tag:"li",to:{name:"iconbutton"}}},[i("span",{staticClass:"item-note"},[t._v("图标按钮")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("router-link",{staticClass:"item-icon-right",attrs:{tag:"li",to:{name:"loading"}}},[i("span",{staticClass:"item-note"},[t._v("loading")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("router-link",{staticClass:"item-icon-right",attrs:{tag:"li",to:{name:"button"}}},[i("span",{staticClass:"item-note"},[t._v("button")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/mdButton")}}},[t._v("\n        MdButton "),i("span",{staticClass:"item-note"},[t._v("Material Design 风格")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/input")}}},[t._v("\n        Input "),i("span",{staticClass:"item-note"},[t._v("输入框")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/search")}}},[t._v("\n        Search "),i("span",{staticClass:"item-note"},[t._v("搜索框")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/radio")}}},[t._v("\n        Radio "),i("span",{staticClass:"item-note"},[t._v("单选框")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/toggle")}}},[t._v("\n        Toggle "),i("span",{staticClass:"item-note"},[t._v("开关按钮")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/range")}}},[t._v("\n        Range Slider "),i("span",{staticClass:"item-note"},[t._v("滑块")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/badge")}}},[t._v("\n        Badge "),i("span",{staticClass:"item-note"},[t._v("徽章")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/basic/dialog")}}},[t._v("\n        Dialog "),i("span",{staticClass:"item-note"},[t._v("对话框")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.toast()}}},[t._v("\n        Toast "),i("span",{staticClass:"item-note"},[t._v("文字提示")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.loading("正在加载..")}}},[t._v("\n        Loading "),i("span",{staticClass:"item-note"},[t._v("加载提示")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})])],1),t._v(" "),i("h3",[t._v("布局")]),t._v(" "),i("ul",{staticClass:"list-ios hl-list-borderless"},[i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/layout/header")}}},[t._v("\n        Header "),i("span",{staticClass:"item-note"},[t._v("页头")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/layout/list")}}},[t._v("\n        List "),i("span",{staticClass:"item-note"},[t._v("列表")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/layout/cells")}}},[t._v("\n        Cells "),i("span",{staticClass:"item-note"},[t._v("宫格")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/layout/tabs")}}},[t._v("\n        Tabs "),i("span",{staticClass:"item-note"},[t._v("选项卡")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/layout/buttonbar")}}},[t._v("\n        ButtonBar "),i("span",{staticClass:"item-note"},[t._v("iOS 选项卡")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/layout/scalable")}}},[t._v("\n        Scalable "),i("span",{staticClass:"item-note"},[t._v("缩放")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})])]),t._v(" "),i("h3",[t._v("高级")]),t._v(" "),i("ul",{staticClass:"list-ios hl-list-borderless"},[i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/swiper")}}},[t._v("\n        Swiper "),i("span",{staticClass:"item-note"},[t._v("轮播")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/vswipe")}}},[t._v("\n        VSwipe "),i("span",{staticClass:"item-note"},[t._v("v1.0.0")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/scroll")}}},[t._v("\n        Scroll "),i("span",{staticClass:"item-note"},[t._v("下拉刷新、无限加载")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/scroller")}}},[t._v("\n        Vue Scroller "),i("span",{staticClass:"item-note"},[t._v("v2.1.0")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/cascade")}}},[t._v("\n        Cascade "),i("span",{staticClass:"item-note"},[t._v("级联")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/accordion")}}},[t._v("\n        Accordion "),i("span",{staticClass:"item-note"},[t._v("手风琴组件")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/datepicker")}}},[t._v("\n        Datepicker "),i("span",{staticClass:"item-note"},[t._v("日期选择器")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/popup")}}},[t._v("\n        Popup "),i("span",{staticClass:"item-note"},[t._v("自定义弹层")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/actionsheet")}}},[t._v("\n        ActionSheet "),i("span",{staticClass:"item-note"},[t._v("操作列表")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.toggleSidebarRight()}}},[t._v("\n        Sidebar "),i("span",{staticClass:"item-note"},[t._v("侧边栏")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/tabbar/home")}}},[t._v("\n        Tabbar "),i("span",{staticClass:"item-note"},[t._v("嵌套路由使用")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/tabbarWithoutRoutes")}}},[t._v("\n        Tabbar Standalone "),i("span",{staticClass:"item-note"},[t._v("单独使用")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})]),t._v(" "),i("li",{staticClass:"item-icon-right",nativeOn:{click:function(s){t.$router.forward("/advanced/modal")}}},[t._v("\n        Modal "),i("span",{staticClass:"item-note"},[t._v("模态窗")]),t._v(" "),i("i",{staticClass:"icon ion-ios-arrow-right"})])]),t._v(" "),i("div",{staticClass:"footer"})]),t._v(" "),i("router-view")],1)},staticRenderFns:[]},l=i("VU/8")(o,r,!1,function(t){i("nXSd")},"data-v-7c1f1860",null).exports,v={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"demo-checkbox"},[i("div",[i("p",{staticClass:"title"},[t._v("基础用法")]),t._v(" "),i("VUCheckbox",{model:{value:t.checkbox1,callback:function(s){t.checkbox1=s},expression:"checkbox1"}},[t._v(t._s("checkbox")+" 1")])],1),t._v(" "),i("div",[i("p",{staticClass:"title"},[t._v("禁用状态")]),t._v(" "),i("VUCheckbox",{attrs:{value:!1,disabled:""}},[t._v(t._s("checkbox")+" 2")]),t._v(" "),i("VUCheckbox",{attrs:{value:!0,disabled:""}},[t._v(t._s("checkbox")+" 2")])],1),t._v(" "),i("div",[i("p",{staticClass:"title"},[t._v("checkbox组")]),t._v(" "),i("VUCheckbox-group",{model:{value:t.result,callback:function(s){t.result=s},expression:"result"}},t._l(t.list,function(s,n){return i("VUCheckbox",{key:n,attrs:{name:s}},[t._v("\n        "+t._s("checkbox")+" "+t._s(s)+"\n      ")])}))],1)])},staticRenderFns:[]},u=i("VU/8")({i18n:{"zh-CN":{checkbox:"复选框",title3:"Checkbox 组",title4:"与 Cell 组件一起使用"},"en-US":{checkbox:"Checkbox",title3:"Checkbox Group",title4:"Inside a Cell"}},data:function(){return{checkbox1:!0,checkbox2:!0,list:["a","b","c"],result:["a","b"]}}},v,!1,function(t){i("J3cx")},null,null).exports,h=i("oG+V"),d={i18n:{"zh-CN":{title:"图标列表"},"en-US":{title:"Icon List"}},data:function(){return this.icons=h.glyphs.map(function(t){return t.css}),{}}},p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"demo-icon"},[i("div",[i("div",{staticClass:"title"},[t._v("图标列表")]),t._v(" "),i("div",{staticClass:"container"},t._l(t.icons,function(s){return i("div",{key:s,staticClass:"item",attrs:{span:"8"}},[i("VUIconButton",{attrs:{name:s}}),t._v(" "),i("span",[t._v(t._s(s))])],1)}))])])},staticRenderFns:[]},g=i("VU/8")(d,p,!1,function(t){i("pISp")},null,null).exports,_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"demo-swipe"},[s("div",[s("VUSwipe",{attrs:{autoplay:3e3}},[s("VUSwipeItem",[this._v("1")]),this._v(" "),s("VUSwipeItem",[this._v("2")]),this._v(" "),s("VUSwipeItem",[this._v("3")]),this._v(" "),s("VUSwipeItem",[this._v("4")])],1)],1),this._v(" "),s("div",[s("VUSwipe",{attrs:{autoplay:3e3}},this._l(this.images,function(t,i){return s("VUSwipeItem",{key:i},[s("img",{attrs:{src:t}})])}))],1)])},staticRenderFns:[]},m=i("VU/8")({i18n:{"zh-CN":{title2:"图片懒加载"},"en-US":{title2:"Image Lazyload"}},data:function(){return{images:["https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg","https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg","https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"]}}},_,!1,function(t){i("cgU6")},null,null).exports,f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"demo-loading"},[s("div",[s("p",{staticClass:"title"},[this._v("单色圆环")]),this._v(" "),s("p",[s("VULoading",{attrs:{type:"circle",color:"black"}})],1),this._v(" "),s("p",[s("VULoading",{attrs:{type:"circle",color:"white"}})],1)]),this._v(" "),s("div",[s("p",{staticClass:"title"},[this._v("渐变色圆环")]),this._v(" "),s("p",[s("VULoading",{attrs:{type:"gradient-circle",color:"black"}})],1),this._v(" "),s("p",[s("VULoading",{attrs:{type:"gradient-circle",color:"white"}})],1)]),this._v(" "),s("div",[s("p",{staticClass:"title"},[this._v("spinner")]),this._v(" "),s("p",[s("VULoading",{attrs:{type:"spinner",color:"black"}})],1),this._v(" "),s("p",[s("VULoading",{attrs:{type:"spinner",color:"white"}})],1)])])},staticRenderFns:[]},C=i("VU/8")({i18n:{"zh-CN":{title1:"单色圆环",title2:"渐变色圆环",title3:"Spinner"},"en-US":{title1:"Solid Circle",title2:"Gradient Circle",title3:"Spinner"}}},f,!1,function(t){i("i+lE")},null,null).exports,b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"demo demo-button"},[s("div",[s("VUButton",{attrs:{type:"default"}},[this._v(this._s("default"))]),this._v(" "),s("VUButton",{attrs:{type:"primary"}},[this._v(this._s("primary"))]),this._v(" "),s("VUButton",{attrs:{type:"danger"}},[this._v(this._s("danger"))])],1),this._v(" "),s("div",[s("VUButton",{attrs:{size:"large"}},[this._v(this._s("large"))]),this._v(" "),s("VUButton",{attrs:{size:"normal"}},[this._v(this._s("normal"))]),this._v(" "),s("VUButton",{attrs:{size:"small"}},[this._v(this._s("small"))]),this._v(" "),s("VUButton",{attrs:{size:"mini"}},[this._v(this._s("mini"))])],1),this._v(" "),s("div",[s("VUButton",{attrs:{disabled:""}},[this._v(this._s("disabled"))])],1),this._v(" "),s("div",[s("VUButton",{attrs:{loading:""}}),this._v(" "),s("VUButton",{attrs:{loading:"",type:"primary"}})],1),this._v(" "),s("div",[s("VUButton",{attrs:{tag:"a",href:"http://code.ds.gome.com.cn/gitlab/meidian-crd/open/vui",target:"_blank"}},[this._v("\n      "+this._s("button")+"\n    ")])],1),this._v(" "),s("div",[s("VUButton",{attrs:{type:"primary",bottomAction:""}},[this._v(this._s("button"))]),this._v(" "),s("div",[s("VUButton",{attrs:{bottomAction:""}},[this._v(this._s("button"))])],1),this._v(" "),s("div",[s("VUButton",{attrs:{type:"primary",bottomAction:""}},[this._v(this._s("button"))])],1)],1)])},staticRenderFns:[]},w=i("VU/8")({i18n:{"zh-CN":{title1:"按钮类型",title2:"按钮尺寸",title3:"加载状态",title4:"自定义按钮标签",title5:"页面底部操作按钮",default:"默认按钮",primary:"主要按钮",danger:"危险按钮",large:"大号按钮",normal:"普通按钮",small:"小型按钮",mini:"迷你按钮"},"en-US":{title1:"Type",title2:"Size",title3:"Loading",title4:"Custom Tag",title5:"Action Button",default:"Default",primary:"Primary",danger:"Danger",large:"Large",normal:"Normal",small:"Small",mini:"Mini"}}},b,!1,function(t){i("imNn")},null,null).exports;n.a.use(c.a);const k=[{path:"/",name:"Home",component:l},{path:"/checkbox",name:"checkbox",component:u},{path:"/iconbutton",name:"iconbutton",component:g},{path:"/swiper",name:"swiper",component:m},{path:"/loading",name:"loading",component:C},{path:"/button",name:"button",component:w}];var y=new c.a({routes:k}),V=(i("ostY"),{name:"VUCheckbox",mixins:[{methods:{findParentByName:function(t){if(!this.parentGroup)for(var s=this.$parent;s;){if(s.$options.name===t){this.parentGroup=s;break}s=s.$parent}return this.parentGroup}}}],props:{value:{},disabled:Boolean,name:[String,Number],shape:{type:String,default:"round"}},watch:{value:function(t){this.$emit("change",t)}},computed:{isGroup:function(){return!!this.findParentByName("VUCheckboxGroup")},currentValue:{get:function(){return this.isGroup&&this.parentGroup?-1!==this.parentGroup.value.indexOf(this.name):this.value},set:function(t){if(this.isGroup&&this.parentGroup){var s=this.parentGroup.value.slice();if(t)-1===s.indexOf(this.name)&&(s.push(this.name),this.parentGroup.$emit("input",s));else{var i=s.indexOf(this.name);-1!==i&&(s.splice(i,1),this.parentGroup.$emit("input",s))}}else this.$emit("input",t)}},isChecked:function(){var t=this.currentValue;return"[object Boolean]"==={}.toString.call(t)?t:null!==t&&void 0!==t?t===this.name:void 0},isDisabled:function(){return this.isGroup&&this.parentGroup&&this.parentGroup.disabled||this.disabled}},methods:{onClickLabel:function(){this.isDisabled||(this.currentValue=!this.currentValue)}}}),x={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"vu-checkbox",class:["vu-checkbox--"+t.shape,{"is-disabled":t.isDisabled}]},[i("span",{staticClass:"vu-checkbox__input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"vu-checkbox__control",attrs:{type:"checkbox",disabled:t.isDisabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{change:function(s){var i=t.currentValue,n=s.target,e=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&(t.currentValue=i.concat([null])):a>-1&&(t.currentValue=i.slice(0,a).concat(i.slice(a+1)))}else t.currentValue=e}}}),t._v(" "),i("i",{staticClass:"vui-icon vui-icon-success custom-vui-icon-success"})]),t._v(" "),i("span",{staticClass:"vu-checkbox__label",on:{click:t.onClickLabel}},[t._t("default")],2)])},staticRenderFns:[]},U=i("VU/8")(V,x,!1,null,null,null).exports;U.install=(t=>{t.component(U.name,U)});var $=U,S={name:"VUCheckboxGroup",props:{value:{},disabled:Boolean},watch:{value:function(t){this.$emit("change",t)}}},B={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vu-checkbox-group",attrs:{"aria-label":"vu-checkbox-group"}},[this._t("default")],2)},staticRenderFns:[]},O=i("VU/8")(S,B,!1,null,null,null).exports;O.install=(t=>{t.component(O.name,O)});var z=O,G={name:"VUIconButton",props:{name:String,info:String}},T={render:function(){var t=this.$createElement,s=this._self._c||t;return s("i",this._g({staticClass:"vui-icon",class:"vui-icon-"+this.name},this.$listeners),[this._t("default"),this._v(" "),this.info?s("div",{staticClass:"icon__info"},[this._v(this._s(this.info))]):this._e()],2)},staticRenderFns:[]},E=i("VU/8")(G,T,!1,null,null,null).exports;E.install=(t=>{t.component(E.name,E)});var R=E,I={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vu-swipe-item",style:this.style},[this._t("default")],2)},staticRenderFns:[]},D=i("VU/8")({name:"VUSwipeItem",data:function(){return{offset:0}},computed:{style:function(){return{width:this.$parent.width+"px",transform:"translate3d("+this.offset+"px, 0, 0)"}}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)}},I,!1,null,null,null).exports;D.install=(t=>{t.component(D.name,D)});var L=D,X={name:"VUSwipe",props:{autoplay:Number,initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{width:0,offset:0,startX:0,startY:0,active:0,deltaX:0,swipes:[],direction:"",currentDuration:0}},mounted:function(){this.initialize()},destroyed:function(){clearTimeout(this.timer)},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()}},computed:{count:function(){return this.swipes.length},trackStyle:function(){return{paddingLeft:this.width+"px",width:(this.count+2)*this.width+"px",transitionDuration:this.currentDuration+"ms",transform:"translate3d("+this.offset+"px, 0, 0)"}},activeIndicator:function(){return(this.active+this.count)%this.count}},methods:{initialize:function(){clearTimeout(this.timer),this.width=this.$el.getBoundingClientRect().width,this.active=this.initialSwipe,this.currentDuration=0,this.offset=this.count>1?-this.width*(this.active+1):0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onTouchStart:function(t){clearTimeout(this.timer),this.deltaX=0,this.direction="",this.currentDuration=0,this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY,this.active<=-1&&this.move(this.count),this.active>=this.count&&this.move(-this.count)},onTouchMove:function(t){this.direction=this.direction||this.getDirection(t.touches[0]),"horizontal"===this.direction&&(t.preventDefault(),this.deltaX=t.touches[0].clientX-this.startX,this.move(0,this.range(this.deltaX,[-this.width,this.width])))},onTouchEnd:function(){this.deltaX&&(this.move(Math.abs(this.deltaX)>50?this.deltaX>0?-1:1:0),this.currentDuration=this.duration),this.autoPlay()},move:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this.active,n=this.count,e=this.swipes,a=this.deltaX,c=this.width;t?(-1===i&&(e[n-1].offset=0),e[0].offset=i===n-1&&t>0?n*c:0,this.active+=t):0===i?e[n-1].offset=a>0?-n*c:0:i===n-1&&(e[0].offset=a<0?n*c:0),this.offset=s-(this.active+1)*this.width},autoPlay:function(){var t=this,s=this.autoplay;s&&this.count>1&&(clearTimeout(this.timer),this.timer=setTimeout(function(){t.currentDuration=0,t.active>=t.count&&t.move(-t.count),setTimeout(function(){t.currentDuration=t.duration,t.move(1),t.autoPlay()},30)},s))},getDirection:function(t){var s=Math.abs(t.clientX-this.startX),i=Math.abs(t.clientY-this.startY);return s>i?"horizontal":s<i?"vertical":""},range:function(t,s){return Math.min(Math.max(t,s[0]),s[1])}}},N={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"vu-swipe"},[t.count>1?i("div",{staticClass:"vu-swipe__track",style:t.trackStyle,on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,touchcancel:t.onTouchEnd,transitionend:function(s){t.$emit("change",t.activeIndicator)}}},[t._t("default")],2):i("div",{staticClass:"vu-swipe__track"},[t._t("default")],2),t._v(" "),t.showIndicators&&t.count>1?i("div",{staticClass:"vu-swipe__indicators"},t._l(t.count,function(s){return i("i",{key:s,class:{"vu-swipe__indicator--active":s-1===t.activeIndicator}})})):t._e()])},staticRenderFns:[]},F=i("VU/8")(X,N,!1,null,null,null).exports;F.install=(t=>{t.component(F.name,F)});var A=F,M={name:"VULoading",props:{type:{type:String,default:"gradient-circle"},color:{type:String,default:"black"}}},P={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"vu-loading",class:["vu-loading--"+t.type,"vu-loading--"+t.color]},[i("span",{staticClass:"vu-loading__spinner",class:["vu-loading__spinner--"+t.type,"vu-loading__spinner--"+t.color]},t._l(12,function(s){return"spinner"===t.type?i("i",{key:s}):t._e()}))])},staticRenderFns:[]},Y=i("VU/8")(M,P,!1,null,null,null).exports;Y.install=(t=>{t.component(Y.name,Y)});var j=Y,H={name:"VUButton",components:{VULoading:j},props:{block:Boolean,loading:Boolean,disabled:Boolean,nativeType:String,bottomAction:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"}},methods:{onClick:function(t){this.loading||this.disabled||this.$emit("click",t)}}},J={render:function(){var t=this.$createElement,s=this._self._c||t;return s(this.tag,{tag:"component",staticClass:"vu-button",class:["vu-button--"+this.type,"vu-button--"+this.size,{"vu-button--disabled":this.disabled,"vu-button--loading":this.loading,"vu-button--block":this.block,"vu-button--bottom-action":this.bottomAction}],attrs:{type:this.nativeType,disabled:this.disabled},on:{click:this.onClick}},[this.loading?s("VULoading",{staticClass:"vu-button__icon-loading",attrs:{type:"circle",color:"default"===this.type?"black":"white"}}):this._e(),this._v(" "),s("span",{staticClass:"vu-button__text"},[this._t("default")],2)],1)},staticRenderFns:[]},q=i("VU/8")(H,J,!1,null,null,null).exports;q.install=(t=>{t.component(q.name,q)});var W=q,K=[$,z,R,L,A,j,W],Q=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];K.map(function(s){t.component(s.name,s)})};"undefined"!=typeof window&&window.Vue&&Q(window.Vue);var Z={version:"1.0.0",install:Q,Checkbox:$,CheckboxGroup:z,IconButton:R,SwipeItem:L,Swipe:A,Loading:j,Button:W};i("KRrO");n.a.use(Z);let tt=new n.a({el:"#app",router:y,template:"<app/>",components:{app:a}});console.log(tt)},J3cx:function(t,s){},KRrO:function(t,s){},cgU6:function(t,s){},"i+lE":function(t,s){},imNn:function(t,s){},nXSd:function(t,s){},"oG+V":function(t,s){t.exports={name:"vu-icon",glyphs:[{src:"关闭.svg",css:"close"},{src:"升级地址.svg",css:"upgrade"},{src:"加购.svg",css:"add-o"},{src:"认证通过.svg",css:"passed"},{src:"客服.svg",css:"chat"},{src:"答疑.svg",css:"question"},{src:"时钟.svg",css:"clock"},{src:"金币.svg",css:"gold-coin"},{src:"播放.svg",css:"play"},{src:"暂停.svg",css:"pause"},{src:"停止.svg",css:"stop"},{src:"more-o.svg",css:"more-o"},{src:"share.svg",css:"share"},{src:"喜欢.svg",css:"like-o"},{src:"物流.svg",css:"logistics"},{src:"编辑地址.svg",css:"edit"},{src:"兑换.svg",css:"exchange"},{src:"其他分店.svg",css:"location"},{src:"购物车2.svg",css:"cart"},{src:"店铺.svg",css:"shop"},{src:"送礼.svg",css:"gift"},{src:"联系人.svg",css:"contact"},{src:"wap首页.svg",css:"wap-home"},{src:"积分.svg",css:"points"},{src:"折扣.svg",css:"discount"},{src:"积分礼包.svg",css:"point-gift"},{src:"售后.svg",css:"after-sale"},{src:"编辑资料.svg",css:"edit-data"},{src:"删除.svg",css:"delete"},{src:"记录.svg",css:"records"},{src:"已完成.svg",css:"completed"},{src:"认证.svg",css:"certificate"},{src:"待发货2.svg",css:"tosend"},{src:"已完成2.svg",css:"sign"},{src:"首页.svg",css:"home"},{src:"包邮.svg",css:"free-postage"},{src:"生日特权.svg",css:"birthday-privilege"},{src:"会员日特权.svg",css:"member-day-privilege"},{src:"余额明细.svg",css:"balance-details"},{src:"返现记录.svg",css:"cash-back-record"},{src:"积分商城.svg",css:"points-mall"},{src:"兑换记录.svg",css:"exchange-record"},{src:"待付款.svg",css:"pending-payment"},{src:"待接单.svg",css:"pending-orders"},{src:"待发货.svg",css:"pending-deliver"},{src:"待评价.svg",css:"pending-evaluate"},{src:"密码可见.svg",css:"password-view"},{src:"密码不见.svg",css:"password-not-view"},{src:"单选.svg",css:"check"},{src:"进入箭头.svg",css:"arrow"},{src:"arrow-left.svg",css:"arrow-left"},{src:"成功.svg",css:"success"},{src:"失败.svg",css:"fail"},{src:"新增地址.svg",css:"add"},{src:"选中.svg",css:"checked"},{src:"喜欢2.svg",css:"like"},{src:"拍照.svg",css:"photograph"},{src:"二维码失效.svg",css:"qr-invalid"},{src:"二维码.svg",css:"qr"},{src:"添加.svg",css:"add2"},{src:"照片.svg",css:"photo"},{src:"搜索.svg",css:"search"},{src:"清除搜索.svg",css:"clear"},{src:"微信支付.svg",css:"wechat"},{src:"支付宝支付.svg",css:"alipay"},{src:"wap导航.svg",css:"wap-nav"},{src:"有赞E卡.svg",css:"ecard-pay"},{src:"余额支付.svg",css:"balance-pay"},{src:"找人代付.svg",css:"peer-pay"},{src:"信用卡支付.svg",css:"credit-pay"},{src:"借记卡支付.svg",css:"debit-pay"},{src:"其他支付方式.svg",css:"other-pay"},{src:"购物车1.svg",css:"shopping-cart"},{src:"浏览记录.svg",css:"browsing-history"},{src:"商品收藏.svg",css:"goods-collect"},{src:"店铺收藏.svg",css:"shop-collect"},{src:"收礼物.svg",css:"receive-gift"},{src:"送出赠品.svg",css:"send-gift"},{src:"设置.svg",css:"setting"},{src:"优惠券.svg",css:"coupon"},{src:"礼品卡支付.svg",css:"gift-card-pay"},{src:"货到付款.svg",css:"cash-on-deliver"},{src:"进行中.svg",css:"underway"},{src:"电话.svg",css:"phone"},{src:"描述.svg",css:"description"},{src:"卡.svg",css:"card"},{src:"会员余额.svg",css:"value-card"},{src:"礼卡.svg",css:"gift-card"},{src:"HOT.svg",css:"hot"},{src:"NEW.svg",css:"new"},{src:"新品.svg",css:"new-arrival"},{src:"热卖.svg",css:"hot-sale"},{src:"more.svg",css:"more"}]}},ostY:function(t,s){},pISp:function(t,s){},y6JH:function(t,s){}},["BXs/"]);
//# sourceMappingURL=app.98e3913ae4841d47a428.js.map