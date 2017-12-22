<template>
  <div class="page has-navbar" >

    <div class="page-content">
      <div class="item item-divider">
        选择感兴趣的板块:
      </div>

      <VUCheckBox :options="topics" v-model="chosenTopics" theme="positive"></VUCheckBox>

      <p class="padding">
        chosen topics: {{ chosenTopics }}
      </p>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        chosenTopics: [],
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
      }
    },

    watch: {
      chosenTopics: (newVal) => {
        console.log(newVal)
      }
    }
  }
</script>
