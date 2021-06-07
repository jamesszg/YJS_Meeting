<template>
  <div class="pdfView"
    style="width: 100%; height: 100%; background-color: #fff; display: flex; flex-direction: column;">
    <div style="width: 100%; height: 100px;">
      {{process_id}}
      {{trueUrl}}
      <el-button @click='logrouter'>router</el-button>
    </div>
    <div style="width: 100%; height: 600px; display: flex; flex-direction: row;">
      <el-table ref="singleTable" highlight-current-row @current-change="handleCurrentChange"
        style="border: 1px;top: 0px; height: auto; flex-direction: column; width: 15%;" :data="tableData">
        <!-- <el-table-column style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <button style="display: flex; align-items: center;">??</button>
              </el-table-column> -->
        <el-table-column prop="id" align="center">
        </el-table-column>
      </el-table>
      <div id='tablePDF' style="width: 85%;background-color: antiquewhite;"></div>
    </div>

  </div>
</template>

<script>
  import pdf from 'pdfobject'
  export default {
    mounted() {
      pdf.embed(this.trueUrl, "#tablePDF");
    },
    data() {
      return {
        process_id: -1,
        trueUrl: '/testpdf.pdf',
        url1: '/new_helper2.pdf',
        url2: '/testpdf.pdf',
        title: 'meeting_title',
        isCollapse: true,
        changePdf: true,
        nowFocus: 1,
        tableData: [{
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
        ],
        currentRow: null
      };
    },
    methods: {
      logrouter() {
        console.log("button")
        console.log(this.$route)
      },
      reEmbed() {
        pdf.embed(this.trueUrl, "#tablePDF");
      },
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
        this.nowFocus = 1;
        pdf.embed(this.trueUrl, "#pdfObject");
      },
      jump() {
        if (this.nowFocus < 5) {
          this.nowFocus += 2;
        } else {
          this.nowFocus = 1;
        }
        pdf.embed(this.trueUrl, "#pdfObject", {
          page: this.nowFocus
        })
      },
      handleCurrentChange(val) {
        this.currentRow = val
        console.log(val.id)
        // let tmpUrl = this.trueUrl
        // let pageNum = val.id
        // console.log(tmpUrl)
        // console.log(pageNum)
        pdf.embed(this.trueUrl, "#tablePDF", {
          page: val.id
        })
      }
    },
    watch: {
      '$route'(to, from) {
        console.log('router change')
        this.process_id = this.$route.params.process_id;
        this.trueUrl = this.$route.params.pdf_url;
        console.log(this.$route.params)
        if (to.name === 'pdfView') {
          console.log(to.params)
          this.process_id = to.params.process_id;
          if (this.process_id === 1) {
            this.trueUrl = '/new_helper2.pdf'
          }
          if (this.process_id === 2) {
            this.trueUrl = '/test.pdf'
          }
          if (this.process_id === 3) {
            this.trueUrl = '/testpdf.pdf'
          }
          if (this.process_id === 4) {
            this.trueUrl = '/new_helper2.pdf'
          }
          this.reEmbed();
        }
      }
    },
    created() {
      console.log('created');
      this.process_id = this.$route.params.process_id;
      this.trueUrl = this.$route.params.pdf_url;
      this.$forceUpdate()
    },
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }

  #pdfObject {
    height: 100%;
  }
</style>