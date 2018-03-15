<template>
    <div class="report-page">
      <div class="report-left">
        <div class="report-left-content md-elevation-20">
          <input-form></input-form>
        </div>
      </div>
      <div class="report-right">
        <div class="report-right-content md-elevation-20">
          <output-form></output-form>
        </div>
      </div>
      <div class="report-transform md-elevation-10">
        <i class="report-transform-icon iconfont icon-copy"></i>
      </div>
    </div>
</template>
<script>
import inputForm from './inputForm.vue'
import outputForm from './outputForm.vue'
export default {
  name: 'report',
  components: {
    inputForm,
    outputForm
  }
}
</script>
<style lang="scss">
.report-page {
  display: flex;
  flex-flow: row wrap;
  min-height: 100%;
}
.report-left, .report-right {
  flex: 1;
  min-width: 200px;
  min-height: 100%;
  padding: 12px;
}
.report-left-content, .report-right-content {
  height: 100%;
  background-color: #fff;
  border-radius: 2px;
}
.report-transform {
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 56px;
  height: 56px;
  background-color: #448aff;
  border-radius: 50%;
  text-align: center;
  line-height: 56px;
  overflow: hidden;
   cursor: pointer;

  &-icon {
    color: #fff;
    font-size: 26px;
  }
}
</style>
