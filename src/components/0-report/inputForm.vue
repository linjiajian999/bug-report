<template>
  <div class="input-form">
    <bug-info
      :to-get-info.sync="toGetInfo"
      @getInfo="dealInfo">
    </bug-info>
    <bug-source
      :to-get-info.sync="toGetInfo"
      @getInfo="dealInfo">
    </bug-source>
    <bug-browser
      :to-get-info.sync="toGetInfo"
      @getInfo="dealInfo">
    </bug-browser>
    <bug-description
      :to-get-info.sync="toGetInfo"
      @getInfo="dealInfo">
    </bug-description>
    <step
      :to-get-info.sync="toGetInfo"
      @getInfo="dealInfo">
    </step>
    <!-- <div class="md-elevation-10 input-form--center">
      <i class="report-transform-icon iconfont icon-copy"></i>
    </div> -->
    <md-button
      class="md-fab input-form--center"
      @click="next">
      <md-icon>+</md-icon>
    </md-button>
  </div>
</template>
<script>
import bugInfo from './bug-info'
import bugSource from './bug-source'
import bugBrowser from './bug-browser'
import bugDescription from './bug-description'
import step from './step'
import theButton from '../public/the-button'
export default {
  name: 'input-form',
  components: {
    bugInfo,
    bugSource,
    bugBrowser,
    bugDescription,
    step,
    theButton
  },
  data() {
    return {
      toGetInfo: false,
      checkIsAllInfo: {
        browser: {
          count: 0,
          info: {}
        },
        description: {
          count: 0,
          info: {}
        },
        info: {
          count: 0,
          info: {}
        },
        source: {
          count: 0,
          info: {}
        },
        step: {
          count: 0,
          info: {}
        }
      }
    }
  },
  methods: {
    next() {
      this.toGetInfo = true
      document.documentElement.scrollTop = document.body.scrollTop = 0
    },
    dealInfo(infoPayload) {
      const type = infoPayload.type
      const info = infoPayload.info
      if (this.checkIsAllInfo[type]) {
        this.checkIsAllInfo[type].count++
        this.checkIsAllInfo[type].info = info
      }
      let preCount = this.checkIsAllInfo.browser.count
      let isAllUpdate = true
      for (let key in this.checkIsAllInfo) {
        if (preCount !== this.checkIsAllInfo[key].count) {
          isAllUpdate = false
        }
      }
      if (isAllUpdate) {
        const updateInfo = {}
        for (let key in this.checkIsAllInfo) {
          updateInfo[key] = this.checkIsAllInfo[key].info
        }
        this.$emit('getInfo', updateInfo)
      }
    }
  }
}
</script>
<style lang="scss">
$theme-color: #6091f3;
.input-form {
  padding: 24px 12px 24px;
  &--center {
    position: fixed;
    transform: translate(-50%, -50%);
    margin: 0;
    z-index: 100;
  }
}
@media all and (min-width: 501px) {
  .input-form {
    &--center {
      left: 50%;
      top: 50%;
    }
  }
}
@media all and (max-width: 500px) {
  .input-form {
    &--center {
      right: 0;
      bottom: 0;
    }
  }
}
.card-container {
  margin-bottom: 16px;
}
.form-item--title {
  color: $theme-color;
}
</style>
