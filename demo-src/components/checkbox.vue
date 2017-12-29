<template>
  <div class="page has-navbar" >

    <div class="page-content">
      <div class="item item-divider">
        选择感兴趣的板块:
      </div>
      <VUCheckboxGroup
      v-model="result"
      >
      <VUCheckbox  v-for="(item, index) in list" :key="index"
      :name="item"
       >
      复选框 {{ item }}
      </VUCheckbox>
      </VUCheckboxGroup>
      <p class="padding">
        chosen topics: {{ result }}
      </p>
    </div>

  </div>
</template>
<script>
  export default{
    data() {
      return {
        chosenTopics: true,
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"],
        list: ['a', 'b', 'c'],
        result: ['a', 'b']
      }
    },

    watch: {
      chosenTopics: (newVal) => {
        console.log(newVal)
      }
    }
  }
</script>
