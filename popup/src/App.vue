<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="doit">do</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    doit() {
      this.$popup({
        status: true,
        msg: "doitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoitdoit"
      })
    }
  },
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
