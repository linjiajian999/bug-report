<template>
  <div class="output-form">
    <div class="md-title">{{ info.info.name }}</div>
    <p class="md-body-1">
      重现地址：{{ info.info.url || '未填写' }}
    </p>
    <p class="md-body-1">
      账号密码：{{ `${info.info.loginAccount} ${info.info.password}` }}
    </p>
    <seperator></seperator>
    <div class="md-title">bug来源： {{ info.source.bugFrom || '未填写' }}</div>
    <seperator></seperator>
    <div class="md-title">OS/Browser: {{ info.browser }}</div>
    <seperator></seperator>
    <div class="md-title">bug行为表现及描述：</div>
    <div class="md-subheading">原因：</div>
    <p class="md-body-1">
      {{
        info.description.isKnowCause
        ? info.description.cause || '未填写'
        : '未知'
      }}
    </p>
    <div class="md-subheading">
      bug是否重复：{{ info.description.isDuplicate }}
    </div>
    <div class="md-subheading">bug表现行为：</div>
    <p class="md-body-1">
      {{ info.description.description }}
    </p>
    <div class="md-subheading">正常期望行为：</div>
    <p class="md-body-1">
      {{ info.description.expectation }}
    </p>
    <seperator></seperator>
    <div class="md-title">复现步骤</div>
    <div
      v-for="(step, index) in info.step.list"
      :key="index">
      <div class="md-subheading">
        {{ step.label }}【=================================】
      </div>
      <p class="md-body-1">
        {{ step.content }}
      </p>
    </div>
  </div>
</template>
<script>
import seperator from './seperator'

export default {
  name: 'output-form',
  components: {
    seperator
  },
  props: {
    info: {
      default() {
        return {
          browser: '',
          description: {
            cause: '',
            description: '',
            expectation: '',
            isDuplicate: false,
            isKnowCause: false
          },
          info: {
            name: '',               // 项目名称
            url: '',                // 重现地址
            loginAccount: '',       // 登录账号
            password: ''            // 登录密码
          },
          source: {
            bugFrom: ''
          },
          step: {
            list: []
          }
        }
      },
      type: Object
    }
  }
}
</script>
<style lang="scss">
.output-form {
  padding: 24px 12px 24px;
}
</style>
