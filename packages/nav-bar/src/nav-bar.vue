<template>
  <div
  class="vu-nav-bar vu-hairline--top-bottom"
  :class="{'vu-nav-bar--fixed': fixed}"
  :style="style"
  >
    <div class="vu-nav-bar__left" @click="$emit('click-left')">
      <slot name="left">
        <icon-button v-if="leftArrow" class="vu-nav-bar__arrow" name="arrow" :style="{fontSize: leftArrowSize}"></icon-button>
        <span v-if="leftText" v-text="leftText" class="vu-nav-bar__text"></span>
      </slot>
    </div>

    <div class="vu-nav-bar__title">
      <slot name="title">{{title}}</slot>
    </div>

    <div class="vu-nav-bar__right" @click="$emit('click-right')">
      <slot name="right">
        <span v-if="rightText" v-text="rightText" class="vu-nav-bar__text"></span>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import IconButton from 'vui/packages/icon-button';

  export default {
	  name: 'VuNavBar',
    components: {
      IconButton
    },
  props: {
		title: String,
    leftText:String,
    rightText: String,
    leftArrow: Boolean,
    leftArrowSize: String,
    fixed: Boolean,
    zIndex: {
			type: Number,
      default: 1
    }
  },
  computed: {
		style () {
			return {
				zIndex: this.zIndex
      }
    }
  }
}
</script>

