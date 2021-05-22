<template>
    <div class="home">
      <pdf 
        ref="pdf"
        v-for="i in numPages"
        :key="i"
        :src="url"
        :page="i">
      </pdf>
    </div>
    
  </template>
  
  <script>
  // @ is an alias to /src
  import pdf from 'vue-pdf';
  
  export default {
    name: "Home",
    components: {
      pdf
    },
    data(){
      return{
        url:"/testpdf.pdf",
        numPages:null, //pdf总页数
      }
    },
    mounted(){
      this.getNumPages()
    },
    methods: {
      //计算pdf总页数
      getNumPages(){
        let loadingTask = pdf.createLoadingTask(this.url)
        loadingTask.promise.then(pdf => {
          this.numPages = pdf.numPages
        }).catch(err => {
          console.error('pdf 加载失败', err)
        })
      }
    }
  };
  
  
  </script>