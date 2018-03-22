<template>
  <md-card class="card-container">
    <md-card-header>
      <div class="md-title">
        <span class="theme-color">操作系统/浏览器：</span>
      </div>
    </md-card-header>
    <md-card-content>
      <md-radio v-model="info.bugFromBrowser" value="iOS">iOS</md-radio>
      <md-radio v-model="info.bugFromBrowser" value="Android">Android</md-radio>
      <md-radio v-model="info.bugFromBrowser" value="current">当前浏览器</md-radio>
      <md-radio v-model="info.bugFromBrowser" value="others">其他</md-radio>
      <mb-input
        :label="label"
        v-model="info.bugFromBrowserText">
      </mb-input>
    </md-card-content>
  </md-card>
</template>
<script>
import UA from 'ua-device'
export default {
  name: 'bugBrowser',
  data() {
    return {
      info: {
        bugFromBrowser: '',
        bugFromBrowserVersion: '',
        bugFromBrowserText: ''
      },
      uaInfo: ''
    }
  },
  watch: {
    'info.bugFromBrowser'(newVal, oldVal) {
      console.log(newVal)
      if (newVal === 'current') {
        this.info.bugFromBrowserText = this.uaInfo
      } else {
        if (newVal !== 'others' || oldVal !== 'current') {
          this.info.bugFromBrowserText = ''
        }
      }
    }
  },
  computed: {
    label() {
      if (
        this.info.bugFromBrowser === 'iOS' ||
        this.info.bugFromBrowser === 'Android'
      ) {
        return '请输入对应版本'
      } else {
        return '请输入操作系统/浏览器及版本'
      }
    },
    browserInfo() {
      if (
        this.info.bugFromBrowser === 'iOS' ||
        this.info.bugFromBrowser === 'Android'
      ) {
        return `${this.info.bugFromBrowser} ${this.info.bugFromBrowserText}`
      } else if (this.info.bugFromBrowser === 'current') {
        return this.uaInfo
      } else {
        return this.info.bugFromBrowserText
      }
    }
  },
  mounted() {
    const ua = new UA(navigator.userAgent)
    this.uaInfo = `${ua.os.name} ${ua.browser.name}:${ua.browser.version.original}`
    console.log(ua)
  }
}
</script>
