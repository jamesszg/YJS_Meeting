<template>
  <div class="home">

    <h2>华东理工大学XXXX会议</h2>
  <div
    id="example"
    style="
      width: 100%;
      height: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    "
  >
    <div>
      <el-button type="primary" @click="change">查看会议</el-button>
      <el-button type="primary" @click="goMeeting">开始会议</el-button>
    </div>
    <div id="pdfObject"></div>
    <el-button type="primary" @click="jump()">走</el-button>
  </div>
  <div>{{ nowFocus }}</div>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import pdf from "pdfobject";
export default {
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      trueUrl: "111",
      url1: "/new_helper2.pdf",
      url2: "/testpdf.pdf",
      changePdf: true,
      nowFocus: 1,
    };
  },
  methods: {
    goMeeting() {
      this.$router.push("meeting");
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
      pdf.embed(this.trueUrl, "#pdfObject", { page: this.nowFocus });
    },
  },
};
</script>

<style>
.home {
  margin-top: 50px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

#pdfObject {
  height: 100%;
}
</style>
