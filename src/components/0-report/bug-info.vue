<template>
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
</template>
<script>
export default {
  name: 'bugInfo',
  props: {
    toGetInfo: false
  },
  data() {
    return {
      info: {
        name: '',               // 项目名称
        url: '',                // 重现地址
        loginAccount: '',       // 登录账号
        password: ''            // 登录密码
      }
    }
  },
  watch: {
    toGetInfo(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$emit('update:toGetInfo', false)
        })
        this.$emit('getInfo', {
          type: 'info',
          info: Object.assign({}, this.info)
        })
      }
    }
  }
}
</script>
