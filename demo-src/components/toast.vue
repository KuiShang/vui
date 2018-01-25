<template>
  <div>
    <div :title="title1">
      <vu-button @click="showToast">{{ title1 }}</vu-button>
    </div>

    <div :title="title2">
      <vu-button @click="showLoadingToast">{{ title2 }}</vu-button>
    </div>

    <div :title="title3">
      <vu-button @click="showSuccessToast">{{ success }}</vu-button>
      <vu-button @click="showFailToast">{{ fail }}</vu-button>
    </div>

    <div :title="advancedUsage">
      <vu-button @click="showCustomizedToast">{{ advancedUsage }}</vu-button>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
    	return {
        title1: '文字提示',
        title2: '加载提示',
        title3: '成功/失败提示',
        success: '成功提示',
        fail: '失败提示',
        advancedUsage: '高级用法',
        text1: '我是提示文案，建议不超过十五字~',
        text2: '成功文案',
        text3: '失败文案',
        text4: second => `倒计时 ${second} 秒`
      }
    },

    methods: {
      showToast() {
        VuToast(this.text1);
      },

      showLoadingToast() {
        VuToast.loading({ mask: true });
      },

      showSuccessToast() {
        VuToast.success(this.text2);
      },

      showFailToast() {
        VuToast.fail(this.text3);
      },

      showCustomizedToast(duration) {
        const toast = VuToast.loading({
          duration: 0,
          forbidClick: true,
          message: this.text4(3)
        });

        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = this.text4(second);
          } else {
            clearInterval(timer);
            VuToast.clear();
          }
        }, 1000);
      }
    }
  };
</script>

<style lang="postcss">
  .demo-toast {
  .vu-button {
    margin-left: 15px;
  }
  }
</style>
