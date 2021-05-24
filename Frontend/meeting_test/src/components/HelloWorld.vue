
<template>
  <el-row style="background-color: aquamarine;">
    <el-col style="column-span: all;">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index='1' @click="goTo('1')">选项1</el-menu-item>
        <el-menu-item index='2' @click="goTo('2')">选项2</el-menu-item>
        <el-menu-item index='3'>选项3</el-menu-item>
        <el-menu-item index='4'>选项4</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>

  my Test tabel

  <div style="width: 100%; height: 100px; background-color: black;">
    <el-row>
      
    </el-row>
  </div>
</template>
  
  <script>
    export default {
      data() {
        return {
          isCollapse: true
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
  </script>
  
  <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  </style>
  