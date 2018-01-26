<template>
  <div>
    <h1 class="demo-section__title">{{title1}}</h1>

    <div>
      <vu-button @click="onClickAlert">Alert</vu-button>
      <vu-button @click="onClickAlert2">{{ alert2 }}</vu-button>
    </div>

    <h1 class="demo-section__title">{{title2}}</h1>

    <div>
      <vu-button @click="onClickConfirm">Confirm</vu-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
  	return {
      title1: '消息提示',
      title2: '消息确认',
      alert2: '无标题 Alert',
      title: '标题',
      content: '内容'
    }
  },
  methods: {
    onClickAlert() {
      Dialog.alert({
        title: this.title,
        message: this.content
      });
    },

    onClickAlert2() {
      Dialog.alert({
        message: this.content
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: this.title,
        message: this.content
      });
    }
  }
};
</script>

<style lang="postcss">
  /*.vu-button {*/
    /*margin: 15px;*/
  /*}*/
</style>
