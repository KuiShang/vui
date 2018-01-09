<template>
  <div class="vu-checkbox-group" aria-label="vu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VUCheckboxGroup',

  props: {
    value: {},
    disabled: Boolean
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  }
}
</script>
