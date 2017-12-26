<template>
  <div class="checkbox-group" aria-label="checkbox-group">
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
