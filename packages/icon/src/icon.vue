<template>
  <i class="icon" :class="`icon-${name}`" v-on="$listeners">
    <slot></slot>
    <div v-if="info" class="icon__info">{{ info }}</div>
  </i>
</template>

<script>
export default {
  name: 'VUIcon',
  props: {
    name: String,
    info: String
  }
}
</script>
