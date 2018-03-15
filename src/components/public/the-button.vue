<template>
  <mb-button
    color="#fff"
    ripple-color="#fff"
    background-color="#6091f3"
    @click="click">
    <span class="the-button-slot">
      <slot></slot>
    </span>
  </mb-button>
</template>
<script>
export default {
  name: 'theButton',
  methods: {
    click(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
.the-button-slot {
  display: inline-block;
  min-width: 72px;
}
</style>
