<template>
  
  <img src="./assets/logo.png">
  <div>
    <el-button type="primary" @click='msg = !msg'>折叠</el-button>
  </div>
  <div v-if='msg'>
    HelloWorld
    <HelloWorld></HelloWorld>
  </div>
  <div v-else>
    pdfVue
    <pdfVue></pdfVue>
  </div>
  
</template>

<script>


import HelloWorld from './components/HelloWorld.vue'
import pdfVue from './components/Table.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,pdfVue
  },
  data: function(){
    return{
      msg: true
    };
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
