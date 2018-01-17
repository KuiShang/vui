<template>
  <div class="demo demo-button">
    <div>
      <vu-button type="default">{{ 'default' }}</vu-button>
      <vu-button type="primary">{{ 'primary' }}</vu-button>
      <vu-button type="danger">{{ 'danger' }}</vu-button>
    </div>

    <div >
      <vu-button size="large">{{ 'large' }}</vu-button>
      <vu-button size="normal">{{ 'normal' }}</vu-button>
      <vu-button size="small">{{ 'small' }}</vu-button>
      <vu-button size="mini">{{ 'mini' }}</vu-button>
    </div>

    <div >
      <vu-button disabled>{{ 'disabled' }}</vu-button>
    </div>

    <div >
      <vu-button loading></vu-button>
      <vu-button loading type="primary"></vu-button>
    </div>

    <div >
      <vu-button tag="a" href="http://code.ds.gome.com.cn/gitlab/meidian-crd/open/vui" target="_blank">
        {{ 'button' }}
      </vu-button>
    </div>

    <div >
      <vu-button type="primary" bottomAction>{{ 'button' }}</vu-button>

        <div >
          <vu-button bottomAction>{{ 'button' }}</vu-button>
        </div>
        <div >
          <vu-button type="primary" bottomAction>{{ 'button'}}</vu-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '按钮类型',
      title2: '按钮尺寸',
      title3: '加载状态',
      title4: '自定义按钮标签',
      title5: '页面底部操作按钮',
      default: '默认按钮',
      primary: '主要按钮',
      danger: '危险按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮'
    },
    'en-US': {
      title1: 'Type',
      title2: 'Size',
      title3: 'Loading',
      title4: 'Custom Tag',
      title5: 'Action Button',
      default: 'Default',
      primary: 'Primary',
      danger: 'Danger',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini'
    }
  }
}
</script>


<style lang="scss">
.demo-button {
  .vu-button {
    user-select: none;

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }

    &--small,
    &--normal {
      margin-right: 10px;
    }
  }

  .vu-doc-demo-block {
    padding: 0 15px;
  }

  .vu-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
