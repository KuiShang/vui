<template>
  <div class="demo-field">
  <h1>Field</h1>
    <div>
    <div class="demo-title demo-first-title">基础用法</div>
      <div>
        <VuField v-model="value" :placeholder="'请输入用户名'" />
      </div>
    </div>

    <div>
    <div class="demo-title">自定义类型</div>
      <div>
        <VuField
          v-model="username"
          :label="'用户名'"
          icon="clear"
          :placeholder="'请输入用户名'"
          required
          @click-icon="username = ''"
        />

        <VuField
          v-model="password"
          type="password"
          :label="'密码'"
          :placeholder="'请输入密码'"
          required
        />
      </div>
    </div>

    <div>
    <div class="demo-title">禁用输入框</div>
      <div>
        <VuField :value="'输入框已禁用'" :label="'用户名'" disabled />
      </div>
    </div>

    <div>
    <div class="demo-title">错误提示</div>
      <div>
        <VuField :label="'用户名'" :placeholder="'请输入用户名'" error />
        <VuField
          v-model="phone"
          :label="'手机号'"
          :placeholder="'请输入手机号'"
          :error-message="'手机号格式错误'"
        />
      </div>
    </div>

    <div>
    <div class="demo-title">高度自适应</div>
      <div>
        <VuField
          v-model="message"
          :label="'留言'"
          type="textarea"
          :placeholder="'请输入留言'"
          rows="1"
          autosize
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title5: '高度自适应',
      username: '用户名',
      password: '密码',
      message: '留言',
      phone: '手机号',
      phonePlaceholder: '请输入手机号',
      usernamePlaceholder: '请输入用户名',
      passwordPlaceholder: '请输入密码',
      messagePlaceholder: '请输入留言',
      inputDisabled: '输入框已禁用',
      phoneError: '手机号格式错误'
    },
    'en-US': {
      title2: 'Custom type',
      title3: 'Disabled',
      title4: 'Error info',
      title5: 'Auto resize',
      username: 'Username',
      password: 'Password',
      message: 'Message',
      phone: 'Phone',
      phonePlaceholder: 'Phone',
      usernamePlaceholder: 'Username',
      passwordPlaceholder: 'Password',
      messagePlaceholder: 'Message',
      inputDisabled: 'Disabled',
      phoneError: 'Invalid phone'
    }
  },

  data() {
    return {
      value: '',
      password: '',
      username: '',
      message: '',
      phone: '1365577'
    };
  }
};
</script>

<style lang="scss">
.demo-field {
  padding: 0 0 30px 0;
  text-align: left;
}
h1{
  margin: 0;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  text-transform: capitalize;
}
.demo-first-title{
  padding-top:0 !important;
}
.demo-title{
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: rgba(69,90,100,.6);
  padding: 40px 15px 10px;
}

</style>
