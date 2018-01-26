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

        <router-link tag="li" class="item-icon-right" :to="{ name: 'imagePreview'}">
          <span class="item-note">imagePreview</span>
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

      <!-- layout -->
      <h3>布局</h3>
      <ul class="list-ios hl-list-borderless">
        <router-link tag="li" class="item-icon-right" :to="{ name: 'cell'}">
          Cell <span class="item-note">单元格</span>
          <i class="icon ion-ios-arrow-right"></i>
        </router-link>
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
