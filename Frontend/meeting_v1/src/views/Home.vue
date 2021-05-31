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