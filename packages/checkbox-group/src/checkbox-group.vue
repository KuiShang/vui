<template>
  <div class="vu-checkbox-group" aria-label="vu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VuCheckboxGroup',

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
