<template>
   <md-card class="card-container">
    <md-card-header>
      <span class="md-title">
        <span class="theme-color">描述</span>
      </span>
      <md-switch
        v-model="isKnowCause"
        class="md-primary">
        是否知道原因
      </md-switch>
      <md-switch
        v-model="isDuplicate"
        class="md-primary">
        是否已有相同（类似）bug
      </md-switch>
    </md-card-header>
    <md-card-content>
      <md-field v-show="isKnowCause">
        <label>请输入bug原因</label>
        <md-textarea v-model="cause" md-counter="500"></md-textarea>
      </md-field>
      <div class="description-container">
        <div class="description-container--left">
          <md-field>
            <label>bug表现及描述</label>
            <md-textarea v-model="description" md-counter="500"></md-textarea>
          </md-field>
        </div>
        <div class="description-container--right">
          <md-field>
            <label>正确情况下期望表现</label>
            <md-textarea v-model="description" md-counter="500"></md-textarea>
          </md-field>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: 'description',
  data() {
    return {
      cause: '',
      description: '',
      isDuplicate: false,
      isKnowCause: false
    }
  }
}
</script>
<style lang="scss">
.description {
  &-container {
    display: flex;
    &--left {
      margin-right: 16px;
    }
    &--left, &--right {
      flex: 1;
    }
  }
}
</style>
