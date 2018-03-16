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
    <md-card class="card-container">
      <md-card-header>
        <div class="md-title">
          <span class="theme-color">请选择bug来源</span>
        </div>
      </md-card-header>
      <md-card-content>
        <md-radio v-model="info.bugFromSelect" value="前端">前端</md-radio>
        <md-radio v-model="info.bugFromSelect" value="后端">后端</md-radio>
        <md-radio v-model="info.bugFromSelect" value="未知">未知</md-radio>
        <md-radio v-model="info.bugFromSelect" value="其他">其他</md-radio>
        <mb-input
          v-show="info.bugFromSelect === '其他'"
          label="请输入bug来源"
          v-model="info.bugFromOthers">
        </mb-input>
      </md-card-content>
    </md-card>
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
