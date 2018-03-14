<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const loading = document.getElementById('loading')
    loading.style.display = 'none'
  }
}
</script>
