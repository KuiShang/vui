<template>
  <vui-checkbox-group v-model="result">
    <vui-checkbox v-for="(item, index) in list" :key="index" :name="item" :disabled="index === 2">复选框{{item}}</vui-checkbox>
  </vui-checkbox-group>
</template>

<script>
import Checkbox from 'packages/checkbox';
import CheckboxGroup from 'packages/checkbox-group';

export default {
  components: {
    'vui-checkbox': Checkbox,
    'vui-checkbox-group': CheckboxGroup
  },

  data() {
    return {
      list: [
        'a',
        'b',
        'c',
        'd'
      ],
      result: ['a', 'b']
    };
  }
};
</script>
