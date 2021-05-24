<template>
  <el-row style="background-color: aquamarine;">
    <el-col style="column-span: all;">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-menu-item index='1' @click="goTo('1')">选项1</el-menu-item>
        <el-menu-item index='2' @click="goTo('2')">选项2</el-menu-item>
        <el-menu-item index='3'>选项3</el-menu-item>
        <el-menu-item index='4'>选项4</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  my Test tabel

  <div id='example' style="width: 100%; height: 600px; margin: 0 auto; display: flex; flex-direction: column;">
    <el-button type="primary" @click='change()'>切换</el-button>
    {{trueUrl}}
    <!-- <iframe id='pdfFrame' src="trueUrl"></iframe> -->
  </div>

  <div style="width: 100%; background-color: black; display: flex;">
    <el-table style="border: 1px; background-color: aqua; width: 40%;" :data='tableData'>
      <el-table-column></el-table-column>
    </el-table>
    <div style="width: 60%; background-color: antiquewhite;">
      testpdf.pdf
    </div>
  </div>
  <div>
    {{title}}
  </div>
</template>

<script>

  export default {
    data() {
      return {
        trueUrl: '',
        url1: 'C:/Users/JamesMBP/Desktop/YJS_Meeting/Frontend/meeting_test/public/new_helper2.pdf',
        url2: 'C:/Users/JamesMBP/Desktop/YJS_Meeting/Frontend/meeting_test/public/testpdf.pdf',
        title: 'meeting_title',
        isCollapse: true,
        changePdf: true,
        tableData: [
          {
            id: 1,
            title: 'process_01',
            msg: 'url1'
          },
          {
            id: 2,
            title: 'process_02',
            msg: 'url2'
          },
          {
            id: 3,
            title: 'process_03',
            msg: 'url3'
          },
          {
            id: 4,
            title: 'process_04',
            msg: 'url4'
          },
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goTo(path) {
        this.$router.replace(path)
      },
      change() {
        this.changePdf = !this.changePdf;
        if (this.changePdf) {
          this.trueUrl = this.url1;
        } else {
          this.trueUrl = this.url2;
        }
      }
    },
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>