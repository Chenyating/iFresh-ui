<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <x-button type="primary">button</x-button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {

  }
}
</script>
<style lang='less'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>