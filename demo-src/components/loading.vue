<template>
  <div class="demo-loading">
    <div>
      <VULoading type="circle" color="black" />
      <VULoading type="circle" color="white" />
    </div>

    <div>
      <VULoading type="gradient-circle" color="black" />
      <VULoading type="gradient-circle" color="white" />
    </div>

    <div>
      <VULoading type="spinner" color="black" />
      <VULoading type="spinner" color="white" />
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '单色圆环',
      title2: '渐变色圆环',
      title3: 'Spinner'
    },
    'en-US': {
      title1: 'Solid Circle',
      title2: 'Gradient Circle',
      title3: 'Spinner'
    }
  }
}
</script>

<style lang="postcss">
.demo-loading {
  .vu-loading {
    display: inline-block;
    margin: 10px 0 10px 20px;
  }
}
</style>
