<template>
  <div class="vu-loading" :class="['vu-loading--' + type, 'vu-loading--' + color]">
    <span class="vu-loading__spinner" :class="['vu-loading__spinner--' + type, 'vu-loading__spinner--' + color]">
      <i v-if="type === 'spinner'" v-for="item in 12" :key="item"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VULoading',
  props: {
    type: {
      type: String,
      default: 'gradient-circle'
    },
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>
