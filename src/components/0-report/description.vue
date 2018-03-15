<template>
  <div class="description-container">
    <md-field>
      <label>请输入bug描述</label>
      <md-textarea v-model="textarea" md-counter="500"></md-textarea>
    </md-field>
  </div>
</template>
<script>
export default {
  name: 'description',
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
