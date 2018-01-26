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

        <router-link tag="li" class="item-icon-right" :to="{ name: 'cell'}">
           <span class="item-note">Cell单元格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'progress'}">
          <span class="item-note">progress进度条</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'navBar'}">
          <span class="item-note">navBar导航条</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'switch'}">
          <span class="item-note">switch</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'list'}">
          <span class="item-note">list</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'loadmore'}">
          <span class="item-note">loadmore</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'imagePreview'}">
          <span class="item-note">imagePreview</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'field'}">
          Field <span class="item-note">输入框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

          <router-link tag="li" class="item-icon-right" :to="{ name: 'lazyload'}">
          Field <span class="item-note">lazyload</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
       
      </ul>

      <h3>操作提示</h3>
      <ul class="list-ios hl-list-borderless">
        <router-link tag="li" class="item-icon-right" :to="{ name: 'dialog'}">
          <span class="item-note">dialog弹出框</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>

        <router-link tag="li" class="item-icon-right" :to="{ name: 'toast'}">
          <span class="item-note">toast轻提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
      </ul>

      <!-- layout -->
      <h3>布局</h3>
      <ul class="list-ios hl-list-borderless">
        <router-link tag="li" class="item-icon-right" :to="{ name: 'cell'}">
          Cell <span class="item-note">单元格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
        <router-link tag="li" class="item-icon-right" :to="{ name: 'tab'}">
          Tab <span class="item-note">标签页</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
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
