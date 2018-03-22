<template>
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
</template>
<script>
export default {
  name: 'bugSource',
  data() {
    return {
      info: {
        bugFromSelect: '',
        bugFromOthers: ''
      }
    }
  }
}
</script>
