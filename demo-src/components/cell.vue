<template>
  <div class="demo-cell">
    <h1>Cell</h1>
    <div>
        <p class="title">基础用法</p>
        <vu-cell-group>
          <vu-cell title="单元格" value="内容" />
          <vu-cell title="单元格" value="内容" label="描述信息" />
        </vu-cell-group>
    </div>

    <div >
        <p class="title">只设置 value</p>
        <vu-cell-group>
            <vu-cell value="内容" />
        </vu-cell-group>
    </div>
    <div>
        <p class="title">展示图标</p>
        <vu-cell-group>
            <vu-cell title="单元格" icon="location" />
        </vu-cell-group>
    </div>
    <div>
        <p class="title">展示箭头</p>
        <vu-cell-group>
            <vu-cell title="单元格" is-link />
            <vu-cell title="单元格" is-link value="内容" />
        </vu-cell-group>
    </div>
    <div>
        <p class="title">高级用法</p>
        <vu-cell-group>
            <vu-cell value="内容" icon="shop" is-link>
                <template slot="title">
                    <span class="van-cell-text">单元格</span>
                    <span>标签</span>
                    <!-- <van-tag type="danger">标签</van-tag> -->
                </template>
            </vu-cell>
            <vu-cell title="单元格" icon="location" is-link />
            <vu-cell title="单元格">
                <Vu-IconButton slot="right-icon" name="search" class="vu-cell__right-icon" />
            </vu-cell>
        </vu-cell-group>
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
