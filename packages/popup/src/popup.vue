<template>
  <transition :name="currentTransition">
    <div v-show="value" class="vu-popup" :class="{ [`vu-popup--${position}`]: position }">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
/*eslint-disable*/
import Popup from '@/mixins/popup';
export default {
  name: 'VuPopup',

  mixins: [Popup],

  props: {
    transition: String,
    overlay: {
      type: Boolean,
      default: true
    },
    lockOnScroll: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data() {
    const transition = this.transition || (this.position === '' ? 'vu-fade' : `popup-slide-${this.position}`);
    return {
      currentValue: false,
      currentTransition: transition
    };
  },

  mounted() {
    if (this.value) {
      this.open()
    }
  }
}
</script>
