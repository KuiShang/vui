<template>
  <VuField :onIconClick="onIconClick" @blur="$emit('blur')">
    <div slot="icon">icon</div>
  </VuField>
</template>

<script>
import Field from 'packages/field';

export default {
  components: {
    [Field.name]: Field
  },

  props: ['onIconClick']
};
</script>

