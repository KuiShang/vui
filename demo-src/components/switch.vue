<template>
  <div class="demo demo-switch">
    <div class="switch-group">
      <vu-switch size="large" v-model="data1"></vu-switch>
      <vu-switch v-model="data1"></vu-switch>
      <vu-switch size="small" v-model="data1"></vu-switch>
    </div>
    <div class="switch-group">
        <vu-switch @input="valChange"></vu-switch>
        <vu-switch @input="valChange"></vu-switch>
    </div>
    <div class="switch-group switch-group-disabled">
        <vu-switch v-model="data1"></vu-switch>
        <vu-switch disabled v-model="data1"></vu-switch>
    </div>
    <div class="switch-group">
        <vu-switch size="small">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </vu-switch>
        <vu-switch>
          <span slot="open">开</span>
          <span slot="close">关</span>
        </vu-switch>
        <vu-switch size="large">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </vu-switch>
        <vu-switch size="large">
          <span slot="open">open</span>
          <span slot="close">close</span>
        </vu-switch>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: true
    }
  },

  methods: {
    valChange(val) {
      console.log('val changed', val)
    }
  }
}
</script>
<style>
.switch-group {
  margin-top: 20px;
  padding: 20px;
  user-select: none;
}
.switch-group-disabled {
  background-color: #fff;
}
</style>



