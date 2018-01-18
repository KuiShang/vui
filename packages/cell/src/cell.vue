<template>
  <div
    class="vu-cell"
    :class="{
      'vu-hairline': border,
      'vu-cell--required': required,
      'vu-cell--clickable': isLink || clickable
    }"
    @click="onClick"
  >
    <div class="vu-cell__title" v-if="title || icon || $slots.title || $slots.icon">
      <slot name="icon">
        <vu-iconButton v-if="icon" :name="icon" />
      </slot>
      <slot name="title">
        <span class="vu-cell__text" v-text="title" />
        <span class="vu-cell__label" v-if="label" v-text="label" />
      </slot>
    </div>
    <div
      class="vu-cell__value"
      v-if="value || $slots.default"
      :class="{
        'vu-cell__value--link': isLink,
        'vu-cell__value--alone': !$slots.title && !title && !label
      }"
    >
      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <vu-iconButton name="arrow" class="vu-cell__right-icon" v-if="isLink" />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
// import { create } from '../utils';
import RouterLink from '../../theme-chalk/scripts/router-link';

export default ({
  name: 'vuCell',
  mixins: [RouterLink],
  
  props: {
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    value: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  },
  mounted(){
    //alert(this.title)
  },
  methods: {
    onClick() {
      this.$emit('click');
      this.routerLink();
    }
  }
});
</script>
