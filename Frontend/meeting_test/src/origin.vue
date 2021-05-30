<template>
  
  <img src="./assets/logo.png">
  <div>
    <el-button type="primary" @click='msg = !msg'>折叠</el-button>
  </div>
  <div v-if='msg'>true</div>
  <div v-else>false</div>
  <HelloWorld></HelloWorld>
</template>

<script>


import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
