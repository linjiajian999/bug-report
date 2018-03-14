<template>
  <div class="input-form">
    <div class="form-item">
      <mb-input label="项目名称(例：XXXX：用户中心)" v-model="data.name"></mb-input>
    </div>
    <div class="form-item">
      <mb-input label="重现地址" v-model="data.url"></mb-input>
    </div>
    <div class="form-item">
      <mb-input label="登录账号" v-model="data.loginAccount"></mb-input>
    </div>
    <div class="form-item">
      <mb-input label="登录密码" v-model="data.password"></mb-input>
    </div>
    <description></description>
    <step></step>
  </div>
</template>
<script>
import description from './description'
import step from './step'
export default {
  name: 'input-form',
  components: {
    description,
    step
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          name: '',           // 项目名称
          url: '',            // 重现地址
          loginAccount: '',   // 登录账号
          password: '',       // 登录密码
          description: ''     // 描述
        }
      }
    }
  }
}
</script>
<style lang="scss">
$text-color: #6091f3;
.input-form {
  padding: 24px 12px 24px;
}
.form-item--title {
  color: $text-color;
}
</style>
