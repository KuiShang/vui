<template>
  <div class="page-loadmore">
    <h1 class="page-title">Pull down</h1>
    <p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>
    <p class="page-loadmore-desc">此例请使用手机查看</p>
    <p class="page-loadmore-desc">translate : {{ translate }}</p>
    <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">
      translateScale : {{ moveTranslate }}
    </div>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <vu-loadmore
        :top-method="loadTop"
        @translate-change="translateChange"
        @top-status-change="handleTopChange"
        ref="loadmore"
        :bottom-method="loadBottom"
        @bottom-status-change="handleBottomChange"
        :bottom-loading-text="''"
        >
        <vu-list :list="list">
          <template slot-scope="props">
            <div class="page-loadmore-listitem" @click="handleClick(props.listItem)">{{ props.listItem }}</div>
          </template>
        </vu-list>
        <div slot="top" class="vu-loadmore__top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <vu-loading type="spinner"></vu-loading>
          </span>
        </div>
      </vu-loadmore>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        topStatus: '',
        bottomStatus: '',
        wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0
      };
    },

    methods: {
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(lastValue + i);
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      handleBottomChange(status) {
        this.moveTranslate = 1;
        this.bottomStatus = status;
      },
      handleClick(text) {
        console.log(text);
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>

<style>
.page-loadmore {
    width: 100%;
    overflow-x: hidden;
}


.page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px;
}

.page-loadmore-desc:last-of-type {
    border-bottom: solid 1px #eee;
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
    text-align: center;
}

.page-loadmore-listitem:first-child {
    border-top: solid 1px #eee;
}

.page-loadmorewrapper {
    margin-top: -1px;
    overflow: scroll;
}

.mint-spinner {
    display: inline-block;
    vertical-align: middle;
}

.loading-background{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    transition: .2s linear;
}

.vu-loadmore__top span{
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
}

.vu-loadmore__top .is-rotate {
    transform: rotate(180deg);
}

</style>

