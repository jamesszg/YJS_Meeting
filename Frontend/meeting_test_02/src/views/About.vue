<template>
  <div id="pdf-content">
  </div>
</template>

<script>
  import pdf from 'pdfobject'
  export default {
    mounted(){
      pdf.embed("/test.pdf", "#pdf-content");
    }
  }
</script>