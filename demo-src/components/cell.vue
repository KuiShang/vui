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

<style lang="postcss">
.demo-cell {
  padding: 0 0 30px 0;
  text-align: left;
  .van-cell-text {
    margin-right: 5px;
  }

  .van-cell-text,
  .van-tag--danger {
    vertical-align: middle;
  }
}
.demo-field {
  padding: 0 0 30px 0;
  text-align: left;
}
.vu-doc-demo-title{
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69,90,100,.6);
  padding: 40px 15px 10px;
}
.vu-doc-demo-section-title{
  margin: 0;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  text-transform: capitalize;
}
.first-title{
  padding-top: 0px;
}

.vu-hairline--top-bottom::after ,.vu-hairline::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  -webkit-transform: scale(.5);
  transform: scale(.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  pointer-events: none;
  box-sizing: border-box;
  border: 0 solid #e5e5e5;
}


</style>
