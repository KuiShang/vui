<template>
  <div 
    class="vu-switch"
    :class="[
      { [`vu-switch--${size}`]: size}, 
      { 'is-disabled': disabled}, 
      { 'vu-switch--checked': currentValue}
    ]"
    @click="toggleState"
  >
    <span class="vu-switch__node"></span>
    <span class="vu-switch__inner" v-if="size!=='small'">
      <slot name="open" v-if="currentValue"></slot>
      <slot name="close" v-else></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'VuSwitch',

  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(val) {
        return ['large', 'default', 'small'].indexOf(val) >= 0
      },
      default: 'default'
    }
  },

  data() {
    return {
      currentValue: this.value
    }
  },

  methods: {
    toggleState(e) {
      if (this.disabled) {
        return false;
      }
      this.currentValue = !this.currentValue;
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    }
  }
}
</script>

