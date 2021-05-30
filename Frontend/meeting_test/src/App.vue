<template>
  <div style="display: flex; background-color: aliceblue; width: 100%; height: 650px;">
    <div style="width: 35%; height: 100%; background-color: antiquewhite;">
      <button @click="log">check</button>
    </div>
    <div style="width: 65%; overflow:scroll ;padding-top:5px">
      <pdf :url="pdfUrl" :type="'canvas'" :pdfjsDistPath="'/static'" />
    </div>
  </div>
</template>

<script>
  import pdf from "@/components/PDF/pdf";
  export default {
    components: {
      pdf
    },
    data() {
      return {
        pdfUrl: "/testpdf.pdf",
      };
    },
    created() {
      //this.pdfUrl = this.$route.query.src;
    },
    methods:{
      log:function(){
        console.log(this)
      }
    }
  }

  // <div style="width: 35%; background-color: aliceblue;">
  //   button
  // </div>
  // <div style="width:65%;overflow:hidden;padding-top:50px">
  //   <!-- canvas渲染方式 -->
  //   <pdf :url="pdfUrl" :type="'canvas'" :pdfjsDistPath="'/static'" />
  // </div>
</script>