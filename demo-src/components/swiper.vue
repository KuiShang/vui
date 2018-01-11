<template>
  <div class="demo-swipe">
    <div>
      <vu-swipe :autoplay="3000">
        <vu-swipeItem>1</vu-swipeItem>
        <vu-swipeItem>2</vu-swipeItem>
        <vu-swipeItem>3</vu-swipeItem>
        <vu-swipeItem>4</vu-swipeItem>
      </vu-swipe>
    </div>

    <div>
      <vu-swipe :autoplay="3000">
        <vu-swipeItem v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </vu-swipeItem>
      </vu-swipe>
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '图片懒加载'
    },
    'en-US': {
      title2: 'Image Lazyload'
    }
  },

  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    };
  }
};
</script>

<style lang="scss">
.demo-swipe {
  padding-bottom: 30px;
  .vu-swipe {
    cursor: pointer;

    &-item {
      color: #fff;
      min-height: 140px;
      font-size: 20px;
      text-align: center;
      line-height: 150px;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      width: 100%;
      height: 240px;
      display: block;
      padding: 30px 60px;
      box-sizing: border-box;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
</style>
