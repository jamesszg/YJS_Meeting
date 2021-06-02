<template>
  <div class="Home">
    <el-button @click="goTo('meeting')">Meeting</el-button>
    <el-button @click="goTo('process')">Process</el-button>
    <el-button @click="goTo('brief')">Brief</el-button>
    <el-button @click="goTo('student')">Student</el-button>
  </div>
</template>

<script>
  export default{
    methods:{
      goTo(src){
        console.log(src)
        this.$router.push(src)
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>