<template>
  <div class="demo demo-progress">
    <h1 class="demo-section__title">Progress</h1>
    <div>
      <h2 class="demo-block__title">基本用法</h2>

      <vu-progress :percentage="0" />
      <vu-progress :percentage="46" />
      <vu-progress :percentage="100" />
    </div>

    <div>
      <h2 class="demo-block__title">进度条置灰</h2>

      <vu-progress inactive :percentage="0" />
      <vu-progress inactive :percentage="46" />
      <vu-progress inactive :percentage="100" />
    </div>

    <div>
      <h2 class="demo-block__title">样式定制</h2>

      <vu-progress pivot-text="红色" color="#ed5050" :percentage="26" />
      <vu-progress pivot-text="橙色" color="#f60" :percentage="46" />
      <vu-progress pivot-text="黄色" color="#f09000" :percentage="66" />
    </div>
  </div>
</template>

<script>
  export default {
    i18n: {
      'zh-CN': {
        title2: '进度条置灰',
        title3: '样式定制'
      },
      'en-US': {
        title2: 'Inactive',
        title3: 'Custom Style'
      }
    }
  };
</script>

<style lang="scss" scoped>
  .demo-progress {

    .vu-progress {
      margin: 20px 10px;

      &:first-of-type {
         margin-top: 10px;
       }
    }
  }
</style>
