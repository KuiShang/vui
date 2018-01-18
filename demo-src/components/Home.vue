<template>
  <div class="page has-navbar">
    <div class="page-content">
      <!-- Basic -->
      <h3>基础</h3>

      <ul class="list-ios hl-list-borderless">
        <router-link tag="li" class="item-icon-right" :to="{ name: 'checkbox'}">
          Checkbox <span class="item-note">复选框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'swiper'}">
           <span class="item-note">swiper轮播</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'iconbutton'}">
           <span class="item-note">图标按钮</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'loading'}">
           <span class="item-note">loading</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'button'}">
           <span class="item-note">button</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'progress'}">
          <span class="item-note">progress</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'switch'}">
          <span class="item-note">switch</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>



        <li class="item-icon-right" @click.native="$router.forward('/basic/mdButton')">
          MdButton <span class="item-note">Material Design 风格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/basic/input')">
          Input <span class="item-note">输入框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/basic/search')">
          Search <span class="item-note">搜索框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/basic/radio')">
          Radio <span class="item-note">单选框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>

        <li class="item-icon-right" @click.native="$router.forward('/basic/toggle')">
          Toggle <span class="item-note">开关按钮</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/basic/range')">
          Range Slider <span class="item-note">滑块</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/basic/badge')">
          Badge <span class="item-note">徽章</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/basic/dialog')">
          Dialog <span class="item-note">对话框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="toast()">
          Toast <span class="item-note">文字提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="loading('正在加载..')">
          Loading <span class="item-note">加载提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
      </ul>

      <!-- layout -->
      <h3>布局</h3>
      <ul class="list-ios hl-list-borderless">
        <li class="item-icon-right" @click.native="$router.forward('/layout/header')">
          Header <span class="item-note">页头</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/layout/list')">
          List <span class="item-note">列表</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/layout/cells')">
          Cells <span class="item-note">宫格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/layout/tabs')">
          Tabs <span class="item-note">选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/layout/buttonbar')">
          ButtonBar <span class="item-note">iOS 选项卡</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/layout/scalable')">
          Scalable <span class="item-note">缩放</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
      </ul>

      <!-- advanced -->
      <h3>高级</h3>
      <ul class="list-ios hl-list-borderless">
        <li class="item-icon-right" @click.native="$router.forward('/advanced/swiper')">
          Swiper <span class="item-note">轮播</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/vswipe')">
          VSwipe <span class="item-note">v1.0.0</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/scroll')">
          Scroll <span class="item-note">下拉刷新、无限加载</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/scroller')">
          Vue Scroller <span class="item-note">v2.1.0</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/cascade')">
          Cascade <span class="item-note">级联</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/accordion')">
          Accordion <span class="item-note">手风琴组件</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/datepicker')">
          Datepicker <span class="item-note">日期选择器</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/popup')">
          Popup <span class="item-note">自定义弹层</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/actionsheet')">
          ActionSheet <span class="item-note">操作列表</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="toggleSidebarRight()">
          Sidebar <span class="item-note">侧边栏</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/tabbar/home')">
          Tabbar <span class="item-note">嵌套路由使用</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/tabbarWithoutRoutes')">
          Tabbar Standalone <span class="item-note">单独使用</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
        <li class="item-icon-right" @click.native="$router.forward('/advanced/modal')">
          Modal <span class="item-note">模态窗</span>
          <i class="icon ion-ios-arrow-right"></i>
        </li>
      </ul>
      <div class="footer"></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>

.footer {
  height: 40px;
}
li {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  text-align: left;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,.26);
  border-radius: 4px;
}
</style>
<script>
export default {
  data() {
    return {
      sidebar: undefined,
      sidebarRight: undefined
    };
  },

  mounted() {},

  destroyed() {},

  methods: {}
};
</script>
