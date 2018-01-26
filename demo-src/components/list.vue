<template>
  <div>
    <p class="demo-list-title">list 1</p>
    <vu-list :list="this.data1">
      <div slot-scope="props">{{ props.listItem.text }}</div>
    </vu-list>
    <p class="demo-list-title">list2</p>
    <vu-list :list="data2">
      <template slot-scope="props">
        <div class="list-listitem" @click="handleClick(props.listItem)">{{ props.listItem }}</div>
      </template>
    </vu-list>
  </div>
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
      ],
      data2: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },

  methods: {
    handleClick(text) {
      console.log(text);
    }
  }
}
</script>

<style>
.demo-list-title {
  color: #666;
}
.list-listitem {
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
    text-align: center;
}

.list-listitem:first-child {
    border-top: solid 1px #eee;
}
</style>

