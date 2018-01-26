<template>
  <div class="demo-image-preview">
    <div>
      <vu-button  type="primary" @click="showImagePreview">预览图片</vu-button>
    </div>

    <div>
      <vu-button  type="primary" @click="showImagePreview(1)">指定初始位置</vu-button>
    </div>

    <div>
      <vu-button  type="primary" @click="showImagePreview(0, 1000)">手动关闭</vu-button>
    </div>
  </div>
</template>

<script>
// import vui from '../src/index.js'
import vui from '../../src/index.js';
const ImagePreview = vui.ImagePreview
export default {
  i18n: {
    'zh-CN': {
      button1: '预览图片',
      button2: '指定初始位置',
      button3: '手动关闭'
    },
    'en-US': {
      button1: 'Show Images',
      button2: 'Custom Start Position',
      button3: 'Close Manually'
    }
  },

  methods: {
    showImagePreview(position, timer) {
      const instance = ImagePreview([
        'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
        'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
        'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
      ], typeof position === 'number' ? position : 0);

      if (timer) {
        setTimeout(() => {
          instance.close();
        }, timer);
      }
    }
  }
};
</script>

<style lang="scss">
.demo-image-preview {
  .vu-button {
    margin-left: 15px;
  }
}
.vu-image-preview {
    width: 320px;
    height: 568px;
    box-sizing: border-box;
    position: absolute;
    top: 85px;
    left: 75px;
    overflow: hidden;
  img {
    pointer-events: none;
  }
}

.vu-modal {
    width: 320px;
    height: 568px;
    box-sizing: border-box;
    position: absolute;
    top: 85px;
    left: 75px;
    overflow: hidden;
}
</style>