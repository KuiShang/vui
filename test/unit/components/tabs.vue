<template>
  <vu-tabs :active="active" :duration="duration" @click="handleTabClick" @disabled="handleTabDisabledClick" :sticky="sticky">
    <vu-tab :title="firstTabTitle" :disabled="firstTabDisabled">内容一</vu-tab>
    <vu-tab title="选项二">内容二</vu-tab>
    <vu-tab title="选项三" disabled>内容三</vu-tab>
    <vu-tab title="选项四">内容四</vu-tab>
  </vu-tabs>
</template>

<script>
import Tab from 'packages/tab';
import Tabs from 'packages/tabs';

export default {
  components: {
    'vu-tab': Tab,
    'vu-tabs': Tabs
  },

  props: {
    firstTabTitle: {
      type: String,
      default: '选项一'
    },
    firstTabDisabled: {
      type: Boolean
    },
    sticky: Boolean
  },

  data() {
    return {
      active: 0,
      duration: 0.5
    };
  },

  methods: {
    handleTabClick(index) {
      this.$emit('click');
    },
    handleTabDisabledClick(index) {
      this.$emit('disabled');
    }
  }
};
</script>
