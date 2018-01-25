<template>
  <vu-list :list="this.data1">
    <template slot-scope="props">
      <div class="ssss" @click="handleClick(props.listItem.text)">{{ props.listItem.text }}</div>
    </template>
  </vu-list>
</template>

<script>
export default {
  data() {
    return {
      data1: [
        {
          text: 'data1-1'
        },
        {
          text: 'data1-2'
        },
        {
          text: 'data1-3'
        },
        {
          text: 'data1-4'
        },
        {
          text: 'data1-5'
        }
      ]
    }
  },

  methods: {
    handleClick(text) {
      console.log(text);
    }
  }
}
</script>

