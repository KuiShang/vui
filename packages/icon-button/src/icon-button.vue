<template>
  <i class="vui-icon" :class="`vui-icon-${name}`" v-on="$listeners">
    <slot></slot>
    <div v-if="info" class="icon__info">{{ info }}</div>
  </i>
</template>

<script>
export default {
  name: 'VuIconButton',
  props: {
    name: String,
    info: String
  }
}
</script>
