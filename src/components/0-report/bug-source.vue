<template>
  <md-card class="card-container">
    <md-card-header>
      <div class="md-title">
        <span class="theme-color">请选择bug来源</span>
      </div>
    </md-card-header>
    <md-card-content>
      <md-radio v-model="bugFromSelect" value="前端">前端</md-radio>
      <md-radio v-model="bugFromSelect" value="后端">后端</md-radio>
      <md-radio v-model="bugFromSelect" value="未知">未知</md-radio>
      <md-radio v-model="bugFromSelect" value="其他">其他</md-radio>
      <mb-input
        v-show="bugFromSelect === '其他'"
        label="请输入bug来源"
        v-model="bugFromOthers">
      </mb-input>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: 'bugSource',
  props: {
    toGetInfo: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      bugFromSelect: '',
      bugFromOthers: ''
    }
  },
  computed: {
    bugFrom() {
      return this.bugFromSelect === '其他' ? this.bugFromOthers : this.bugFromSelect
    }
  },
  watch: {
    toGetInfo(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$emit('update:toGetInfo', false)
        })
        this.$emit('getInfo', {
          type: 'source',
          info: {
            bugFrom: this.bugFrom
          }
        })
      }
    }
  }
}
</script>
