<template>
  <vu-tabs :active="active">
    <vu-tab title="选项一">内容一</vu-tab>
    <vu-tab title="选项二">内容二</vu-tab>
    <vu-tab title="选项三">内容三</vu-tab>
    <vu-tab title="选项四">内容四</vu-tab>
    <vu-tab title="选项五">内容五</vu-tab>
    <vu-tab title="选项六">内容六</vu-tab>
    <vu-tab title="选项七">内容七</vu-tab>
    <vu-tab title="选项八">内容八</vu-tab>
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
    active: [String, Number]
  }
};
</script>
