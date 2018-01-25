<template>
  <transition name="vu-fade">
    <div
      v-show="visible"
      class="vu-modal"
      :class="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    />
  </transition>
</template>

<script>
export default {
  name: 'VuModal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
}
</script>
