<template>
  <div style="background-color: aliceblue; display: flex;">
    <div style="width: 35%; height: 600px; background-color: aquamarine;">
      <el-menu default-active=nowPage class="el-menu-vertical-demo" @select="log">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div style="width: 65%; height: 600px; background-color: blanchedalmond;">
      <pdf src=pdfSrc :page=nowPage>
        <template slot="loading">
          loading content here...
        </template>
      </pdf>
    </div>
  </div>
</template>

<script>
  import pdf from 'pdfvuer'
  import 'pdfjs-dist/build/pdf.worker.entry'
  export default {
    data(){
      return{
        nowPage:1,
        pdfSrc: '/test.pdf',
      }
    },
    component:{
      pdf
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      log(key, keyPath){
        console.log(key,keyPath)
        console.log(this.nowPage)
        this.nowPage = key
        console.log(this.nowPage)
      }
    }
  }
</script>