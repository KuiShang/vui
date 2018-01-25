<template>
  <div class="demo">
    <h1 class="demo-section__title">navBar</h1>
    <div>
      <h2 class="demo-block__title">基本用法</h2>
      <vu-nav-bar
        :title="title"
        :left-text="back"
        :right-text="button"
        left-arrow
        left-arrow-size="14px"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>

    <div>
      <h2 class="demo-block__title">高级用法</h2>
      <vu-nav-bar :title="title" :left-text="back" left-arrow leftArrowSize="14px">
        <vu-iconButton name="search" slot="right" class="icon" />
      </vu-nav-bar>
    </div>

  </div>

</template>

<script>
  export default {
  	data () {
      return {
      	title: '标题',
        back: '返回',
        button: '按钮',

      };
    },
    methods: {
      onClickLeft() {
        alert('should be toast' + this.back);
      },
      onClickRight() {
        alert('should be toast' + this.button);
      }
    }
  };
</script>

<style lang='scss' scoped>
  .icon {
    font-size: 14px;
  }
</style>
