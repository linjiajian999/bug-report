<template>
  <div class="input-form">
    <md-card class="card-container">
      <md-card-header>
        <div class="md-title">
          <span class="theme-color">项目信息</span>
        </div>
      </md-card-header>
      <md-card-content>
        <div class="form-item">
          <mb-input
            label="项目名称(例：XXXX：用户中心)"
            v-model="info.name">
          </mb-input>
        </div>
        <div class="form-item">
          <mb-input
            label="bug重现地址"
            v-model="info.url">
          </mb-input>
        </div>
        <div class="form-item">
          <mb-input
            label="登录账号"
            v-model="info.loginAccount">
          </mb-input>
        </div>
        <div class="form-item">
          <mb-input
            label="登录密码"
            v-model="info.password">
          </mb-input>
        </div>
      </md-card-content>
    </md-card>
    <bug-source></bug-source>
    <bug-browser></bug-browser>
    <description></description>
    <step></step>
  </div>
</template>
<script>
import bugSource from './bug-source'
import bugBrowser from './bug-browser'
import description from './description'
import step from './step'
export default {
  name: 'input-form',
  components: {
    bugSource,
    bugBrowser,
    description,
    step
  },
  data() {
    return {
      info: {
        name: '',           // 项目名称
        url: '',            // 重现地址
        loginAccount: '',   // 登录账号
        password: '',       // 登录密码
        bugFromSelect: '前端',     // bug来源
        bugFromOthers: '',  // bug来源其他
        description: ''     // 描述
      }
    }
  },
  computed: {
    bugFrom() {
      return this.bugFromSelect === '其他' ? this.bugFromOthers : this.bugFromSelect
    }
  }
}
</script>
<style lang="scss">
$theme-color: #6091f3;
.input-form {
  padding: 24px 12px 24px;
}
.card-container {
  margin-bottom: 16px;
}
.form-item--title {
  color: $theme-color;
}
</style>
