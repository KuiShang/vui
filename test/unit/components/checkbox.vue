<template>
  <vu-checkbox-group v-model="result">
    <vu-checkbox v-for="(item, index) in list" :key="index" :name="item" :disabled="index === 2">复选框{{item}}</vu-checkbox>
  </vu-checkbox-group>
</template>

<script>
import Checkbox from 'packages/checkbox';
import CheckboxGroup from 'packages/checkbox-group';

export default {
  components: {
    'vu-checkbox': Checkbox,
    'vu-checkbox-group': CheckboxGroup
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
