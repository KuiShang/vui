<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled"
    class="vu-button"
    :class="[
      'vu-button--' + type,
      'vu-button--' + size,
      {
        'vu-button--disabled': disabled,
        'vu-button--loading': loading,
        'vu-button--block': block,
        'vu-button--bottom-action': bottomAction
      }
    ]"
      @click="onClick"
    >
    <VuLoading
      v-if="loading"
      class="vu-button__icon-loading"
      type="circle"
      :color="type === 'default' ? 'black' : 'white'"
    />
    <span class="vu-button__text">
      <slot></slot>
    </span>
  </component>
</template>

<script>
import VuLoading from 'vui/packages/loading'
export default {
  name: 'VuButton',
  components: { VuLoading },
  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}
</script>
