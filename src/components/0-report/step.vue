<template>
  <md-card class="card-container">
    <md-card-header>
      <span class="md-title">
        <span class="theme-color">复现步骤</span>
      </span>
    </md-card-header>
    <md-card-content>
      <md-steppers
        md-vertical
        :md-active-step.sync="activeStep">
        <md-step
          v-for="(step, index) in list"
          :id="step.id"
          :key="index"
          :md-label="step.label"
          :md-description="step.description"
          :md-done="step.done">
          <md-field>
            <label>步骤描述</label>
            <md-textarea v-model="step.content" md-counter="100"></md-textarea>
          </md-field>
          <the-button
            @click="setDone(step, index)">
            完成
          </the-button>
          <the-button
            @click="nextStep(step, index)">
            下一步
          </the-button>
        </md-step>
      </md-steppers>
    </md-card-content>
  </md-card>
</template>
<script>
import theButton from '../public/the-button'
export default {
  name: 'step',
  components: {
    theButton
  },
  props: {
    toGetInfo: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      activeStep: 'step-0',
      list: [{
        label: '第1步',
        description: '',
        id: 'step-0',
        content: '',
        done: false
      }]
    }
  },
  filters: {
    generateDescription(content) {
      return content.length > 20 ? content.subStr(0, 20) : content
    }
  },
  watch: {
    toGetInfo(newVal) {
      if (newVal) {
        this.$emit('update:toGetInfo', false)
        this.$emit('getInfo', {
          type: 'step',
          info: {
            list: this.list.concat()
          }
        })
      }
    }
  },
  methods: {
    setDone(step, index) {
      step.done = true
      if (index < this.list.length - 1) {
        this.activeStep = `step${index - 1}`
      }
      this.setDescription(step)
    },
    nextStep(step, index) {
      step.done = true
      if (index === this.list.length - 1) {
        const length = this.list.length
        const id = `step-${length}`
        const newStep = {
          label: `第${length + 1}步`,
          description: '',
          id,
          content: '',
          done: false
        }
        this.list.push(newStep)
        this.$nextTick(() => {
          this.activeStep = id
        })
      } else {
        console.log()
        this.activeStep = `step-${index + 1}`
      }
      this.setDescription(step)
    },
    setDescription(step) {
      const descriptionLength = 25
      step.description = step.content.length > descriptionLength
        ? step.content.substr(0, descriptionLength)
        : step.content
    }
  }
}
</script>
