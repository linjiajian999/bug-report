<template>
   <md-card class="card-container">
    <md-card-header>
      <span class="md-title">
        <span class="theme-color">描述</span>
      </span>
      <md-switch
        v-model="info.isKnowCause"
        class="md-primary">
        是否知道原因
      </md-switch>
      <md-switch
        v-model="info.isDuplicate"
        class="md-primary">
        是否已有相同（类似）bug
      </md-switch>
    </md-card-header>
    <md-card-content>
      <md-field v-show="info.isKnowCause">
        <label>请输入bug原因</label>
        <md-textarea
          v-model="info.cause"
          md-counter="500">
        </md-textarea>
      </md-field>
      <div class="description-container">
        <div class="description-container--left">
          <md-field>
            <label>bug表现及描述</label>
            <md-textarea
              v-model="info.description"
              md-counter="500">
            </md-textarea>
          </md-field>
        </div>
        <div class="description-container--right">
          <md-field>
            <label>正确情况下期望表现</label>
            <md-textarea
              v-model="info.expectation"
              md-counter="500">
            </md-textarea>
          </md-field>
        </div>
      </div>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: 'budDescription',
  props: {
    toGetInfo: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      info: {
        cause: '',
        description: '',
        expectation: '',
        isDuplicate: false,
        isKnowCause: false
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
          type: 'description',
          info: Object.assign({}, this.info)
        })
      }
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
