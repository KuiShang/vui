<template>
  <div class="demo-tab">
  <h1>Tab</h1>
    <div class="vu-doc-demo-block">
    <h2 class="vu-doc-demo-block-title demo-first-title">基础用法</h2>
      <vu-tabs :active="active">
        <vu-tab :title="'选项' + index" v-for="index in tabs" :key="index">
          {{ '内容' }} {{ index }}
        </vu-tab>
      </vu-tabs>
    </div>

    <div class="vu-doc-demo-block">
    <h2 class="vu-doc-demo-block-title">横向滚动</h2>
      <vu-tabs>
        <vu-tab v-for="index in 8" :title="'选项' + index" :key="index">
          {{ '内容' }} {{ index }}
        </vu-tab>
      </vu-tabs>
    </div>

    <div class="vu-doc-demo-block">
    <h2 class="vu-doc-demo-block-title">禁用标签</h2>
      <vu-tabs @disabled="onClickDisabled">
        <vu-tab v-for="index in 4" :title="'选项' + index" :disabled="index === 2" :key="index">
          {{ '内容' }} {{ index }}
        </vu-tab>
      </vu-tabs>
    </div>

    <div class="vu-doc-demo-block">
    <h2 class="vu-doc-demo-block-title">样式风格</h2>
      <vu-tabs type="card">
        <vu-tab v-for="index in 4" :title="'选项' + index" :key="index">
          {{ '内容' }} {{ index }}
        </vu-tab>
      </vu-tabs>
    </div>

    <div class="vu-doc-demo-block">
    <h2 class="vu-doc-demo-block-title">点击事件</h2>
      <vu-tabs @click="handleTabClick">
        <vu-tab v-for="index in 4" :title="'选项' + index" :key="index">
          {{ '内容' }} {{ index }}
        </vu-tab>
      </vu-tabs>
    </div>

    <div class="vu-doc-demo-block">
    <h2 class="vu-doc-demo-block-title">粘性布局</h2>
      <vu-tabs :active="active" sticky>
        <vu-tab :title="'选项' + index" v-for="index in tabs" :key="index">
          {{ '内容' }} {{ index }}
        </vu-tab>
      </vu-tabs>
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '选项 ',
      title2: '横向滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky'
    }
  },

  data() {
    return {
      active: 2,
      tabs: [1, 2, 3, 4]
    };
  },

  mounted() {
    setTimeout(() => {
      this.active = 3;
    }, 1000);
  },

  methods: {
    onClickDisabled() {
      Toast('Disabled!');
    },

    handleTabClick(index) {
      Toast(index);
    }
  }
};
</script>

<style lang="postcss">
.demo-tab {
  margin-bottom: 700px;
  text-align: left;
  padding: 0 0 50px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;


  .vu-tab__pane {
    background-color: #fff;
    padding: 20px;
  }

  .vu-tabs--card .vu-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .vu-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .vu-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .vu-doc-demo-block:last-child {
    .vu-tab__pane {
      padding: 50px 20px;
    }
  }
  .vu-doc-demo-block-title{
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69,90,100,.6);
    padding: 40px 15px 10px;
  }
}
.vu-tab__pane {
    background-color: #fff;
    padding: 20px;
  }

  .vu-tabs--card .vu-tab__pane {
    background-color: transparent;
  }

  .custom-tabwrap .vu-tab-active {
    color: #20a0ff;
  }
  .custom-tabwrap .vu-tabs-nav-bar {
    background: #20a0ff;
  }
  .custom-pane {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .vu-doc-demo-block:last-child {
    .vu-tab__pane {
      padding: 50px 20px;
    }
  }
  .vu-doc-demo-block-title{
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69,90,100,.6);
    padding: 40px 15px 10px;
  }
.demo-first-title{
  padding-top:0 !important;
}
</style>
