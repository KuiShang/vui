<template>
  <div class="demo-loading">
    <div>
      <p class="title">单色圆环</p>
      <p>
      <vu-loading type="circle" color="black" />
      </p>
      <p>
      <vu-loading type="circle" color="white" />
      </p>
    </div>

    <div>
      <p class="title">渐变色圆环</p>
      <p>
      <vu-loading type="gradient-circle" color="black" />
      </p>
      <p>
      <vu-loading type="gradient-circle" color="white" />
      </p>
    </div>

    <div>
       <p class="title">spinner</p>
       <p>
      <vu-loading type="spinner" color="black" />
      </p>
      <p>
      <vu-loading type="spinner" color="white" />
      </p>
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
  text-align: left;
  .vu-loading {
    display: inline-block;
    margin: 10px 0 10px 20px;
  }
}
</style>
