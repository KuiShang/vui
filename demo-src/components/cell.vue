<template>
  <div class="demo-cell">
  <h1 class="vu-doc-demo-section-title">Cell</h1>
    <div>
    <h2 class="vu-doc-demo-title first-title">基础用法</h2>
      <div class="vu-hairline--top-bottom">
        <VuCell :title="'单元格'" :value="'内容'" />
        <VuCell :title="'单元格'" :value="'内容'" :label="'描述信息'" />
      </div>
    </div>

    <div >
    <h2 class="vu-doc-demo-title">只设置value</h2>
      <div  class="vu-hairline--top-bottom">
        <VuCell :value="'内容'" />
      </div>
    </div>

    <div >
    <h2 class="vu-doc-demo-title">展示图标</h2>
      <div  class="vu-hairline--top-bottom">
        <VuCell :title="'单元格'" icon="location" />
      </div>
    </div>

    <div >
    <h2 class="vu-doc-demo-title">展示箭头</h2>
      <div  class="vu-hairline--top-bottom">
        <VuCell :title="'单元格'" is-link />
        <VuCell :title="'单元格'" is-link :value="'内容'" />
      </div>
    </div>

    <div >
    <h2 class="vu-doc-demo-title">高级用法</h2>
      <div  class="vu-hairline--top-bottom">
        <VuCell :value="'内容'" icon="shop" is-link>
          <template slot="title">
            <span class="van-cell-text">{{ '单元格' }}</span>
            <!-- <div type="danger">{{ 'tag' }}</div> -->
          </template>
        </VuCell>
        <VuCell :title="'单元格'" icon="location" is-link />
        <VuCell :title="'单元格'">
          <VuIconButton slot="right-icon" name="search" class="vu-cell__right-icon" />
        </VuCell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      cell: '单元格',
      title2: '只设置 value',
      title3: '展示图标',
      title4: '展示箭头'
    },
    'en-US': {
      cell: 'Cell title',
      title2: 'Value only',
      title3: 'Left Icon',
      title4: 'Link'
    }
  },

  methods: {
    handleClick() {
      console.log('cell click');
    }
  }
};
</script>


<style lang="scss">
    .demo-cell {
      text-align: left;
      background: #fff;
      width:100%;
      overflow:scroll;
      padding-bottom:30px;
      .title{
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        color: rgba(69,90,100,.6);
        padding: 10px 0;
      }
    }
</style>
