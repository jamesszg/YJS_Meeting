<template>
  <!-- <div>
    <router-view></router-view>
    <button @click=back>
      goback
    </button>
  </div> -->
  <div v-if=start>
    <el-container style="display: flex; flex-direction: column;">
      <el-header>
        <el-button type='primary'>返回上一级</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <el-button @click="goback">默认按钮</el-button>
      </el-footer>
    </el-container>
  </div>
  <div v-else>
    <el-container class="el-aside"
      style="display: flex; align-items: center; align-content: center; justify-content:center">
      <el-button style="width: 40%; height: 200px;" @click="close">
        退出会议
      </el-button>
      <el-button style="width: 40%; height: 200px;" @click="kaishi">
        开始会议
      </el-button>
    </el-container>
  </div>
</template>

<script>
  export default {
    methods: {
      goback() {
        console.log('goback')
        this.$router.push('/')
      },
      close() {
        window.location.href = "about:blank";
        window.close();
      },
      kaishi() {
        this.start = true;
      }
    },
    data() {
      return {
        start: false
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