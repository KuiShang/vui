<template>
  <div class="vu-list">
    <ul class="vu-list__wrapper">
      <li class="vu-list__item" v-for="(item, index) in list" :key="index">
        <slot :listItem="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VuList',

  props: {
    list: {
      type: Array,
      default: []
    }
  }
}
</script>
