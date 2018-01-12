<template>
  <div class="demo-checkbox">
    <div>
      <p class="title">基础用法</p>
      <vu-checkbox v-model="checkbox1">{{ 'checkbox' }} 1</vu-checkbox>
    </div>

    <div >
      <p class="title">禁用状态</p>
      <vu-checkbox :value="false" disabled>{{ 'checkbox' }} 2</vu-checkbox>
      <vu-checkbox :value="true" disabled>{{ 'checkbox' }} 2</vu-checkbox>
    </div>

    <div>
      <p class="title">checkbox组</p>
      <vu-checkbox-group v-model="result">
        <vu-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ 'checkbox' }} {{ item }}
        </vu-checkbox>
      </vu-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      title3: 'Checkbox 组',
      title4: '与 Cell 组件一起使用'
    },
    'en-US': {
      checkbox: 'Checkbox',
      title3: 'Checkbox Group',
      title4: 'Inside a Cell'
    }
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  }
};
</script>

<style lang="scss">
.demo-checkbox {
  text-align: left;
  background: #fff;

  .vu-checkbox {
    margin: 10px 0 0 20px;
  }

  .vu-cell {
    .vu-checkbox {
      margin: 0;
    }

    .vu-checkbox__input {
      float: right;
      position: static;
    }

    span {
      margin: 0;
    }
  }
}
</style>
