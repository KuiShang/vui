<template>
  <div class="vu-progress">
    <span class="vu-progress__portion" :style="portionStyle" />
    <span class="vu-progress__pivot" v-show="showPivot" :style="pivotStyle">{{ pivotText }}</span>
  </div>
</template>

<script>
  export default {
    name: 'VuProgress',

    props: {
      inactive: Boolean,
      percentage: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 100
      },
      showPivot: {
        type: Boolean,
        default: true
      },
      pivotText: {
        type: String,
        default() {
          return this.percentage + '%';
        }
      },
      color: { // 进度条颜色
        type: String,
        default: '#38f'
      },
      textColor: {
        type: String,
        default: '#fff'
      }
    },

    computed: {
      componentColor() {
        return this.inactive ? '#cacaca' : this.color;
      },
      pivotStyle() {
        const { percentage } = this;
        return {
          color: this.textColor,
          backgroundColor: this.componentColor,
          left: percentage <= 5 ? '0%' : percentage >= 95 ? '100%' : percentage + '%',
          marginLeft: percentage <= 5 ? '0' : percentage >= 95 ? '-28px' : '-14px'
        };
      },
      portionStyle() {
        return {
          width: this.percentage + '%',
          backgroundColor: this.componentColor
        };
      }
    }
  };
</script>
