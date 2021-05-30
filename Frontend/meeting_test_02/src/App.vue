<template>
  <pdf src="./static/test.pdf" :page="1">
    <template slot="loading">
      loading content here...
    </template>
  </pdf>
</template>

<script>
  import pdf from 'pdfvuer'
  // import 'pdfjs-dist/build/pdf.worker.entry'

  export default {
    components: {
      pdf
    }
  }
</script>