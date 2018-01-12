<template>
  <div class="demo-icon">
    <div >
      <div class="title">图标列表</div>
      <div class="container">
        <div span="8" v-for="icon in icons" :key="icon" class="item">
          <vu-iconButton :name="icon" />
          <span>{{ icon }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const icons = require('../../packages/theme-chalk/scripts/icon-config');

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表'
    },
    'en-US': {
      title: 'Icon List'
    }
  },

  data() {
    this.icons = icons.glyphs.map(icon => icon.css);
    return {};
  }
}
</script>

<style lang="scss">
.demo-icon {
  font-size: 0;
  .title {
        font-size: 14px;
  }

.container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      .item {
            flex-basis: 70px;
      }
}

  span {
    font-size: 14px;
  }
}
</style>

