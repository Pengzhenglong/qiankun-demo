<template>
      <div className="App"  id="App">
       <a href="/micro-app1">micro-app1</a>
      <a href="/micro-app2">micro-app2</a>
      <a href="/micro-vue3-app3">micro-vue3-app3</a>
      <div id="micro-app1"></div>
      <div id="micro-app2"></div>
      <div id="micro-vue3-app3"></div>
    </div>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
