<template>
  <div class="vu-tab__pane" :class="{ 'vu-tab__pane--select': index === parentGroup.curActive }">
    <slot />
  </div>
</template>

<script>
import findParent from '@/mixins/find-parent'

export default({
  name: 'VuTab',

  mixins: [findParent],

  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean
  },

  computed: {
    index() {
      return this.parentGroup.tabs.indexOf(this);
    }
  },

  created() {
    this.findParentByName('VuTabs');
    this.parentGroup.tabs.push(this);
  },

  destroyed() {
    this.parentGroup.tabs.splice(this.index, 1);
  }
});
</script>
