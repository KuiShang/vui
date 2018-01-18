<template>
  <div class="vu-cell-group" :class="{ 'vu-hairline--top-bottom': border }">
    <slot />
  </div>
</template>

<script>

export default ({
  name: 'VuCellGroup',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
});
</script>
