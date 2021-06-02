<template>
    <div class="pdfVuer">
        This is pdfVuer page
        {{processid}}
        {{pdfurl}}
        <div id='vuer' style="width: 100%; height: 300px; background-color: aqua;">
            <pdf :src="pdfdata" v-for="i in numPages" :key="i" :id="i" :page="i" :scale.sync="scale"
                style="width:100%;margin:20px auto;" :annotation="true" :resize="true" @link-clicked="handle_pdf_link">
                <template slot="loading">
                    loading content here...
                </template>
            </pdf>
        </div>
    </div>
</template>

<script>
    import pdfvuer from 'pdfvuer'
    import 'pdfjs-dist/build/pdf.worker.entry'
    export default {
        components: {
            pdf: pdfvuer
        },
        mounted() {
            this.getPdf()
        },
        computed: {
            formattedZoom() {
                return Number.parseInt(this.scale * 100);
            },
        },
        data() {
            return {
                processid: -1,
                pdfurl: 'init',
                page: 1,
                numPages: 0,
                pdfdata: '/test.pdf',
                errors: [],
                scale: 'page-width'
            }
        },
        methods: {
            handle_pdf_link: function (params) {
                // Scroll to the appropriate place on our page - the Y component of
                // params.destArray * (div height / ???), from the bottom of the page div
                var page = document.getElementById(String(params.pageNumber));
                page.scrollIntoView();
            },
            getPdf() {
                //var self = this;
                this.pdfdata = pdfvuer.createLoadingTask('/test.pdf');
                this.pdfdata.then(pdf => {
                    this.numPages = pdf.numPages;
                    window.onscroll = function () {
                        changePage()
                        stickyNav()
                    }

                    //Get the offset position of the navbar
                    var sticky = $('#buttons')[0].offsetTop

                    // Add the sticky class to the self.$refs.nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
                    function stickyNav() {
                        if (window.pageYOffset >= sticky) {
                            $('#buttons')[0].classList.remove("hidden")
                        } else {
                            $('#buttons')[0].classList.add("hidden")
                        }
                    }

                    function changePage() {
                        var i = 1,
                            count = Number(pdf.numPages);
                        do {
                            if (window.pageYOffset >= self.findPos(document.getElementById(i)) &&
                                window.pageYOffset <= self.findPos(document.getElementById(i + 1))) {
                                self.page = i
                            }
                            i++
                        } while (i < count)
                        if (window.pageYOffset >= self.findPos(document.getElementById(i))) {
                            self.page = i
                        }
                    }
                });
            },
            findPos(obj) {
                return obj.offsetTop;
            }
        },
        created() {
            console.log('created');
            let to = this.$route
            this.processid = to.query.processid
            this.pdfurl = to.query.url
            this.$forceUpdate()
        },
        watch: {
            $route(to, from) {
                if (to.name === 'pdfVuer') {
                    this.processid = to.query.processid
                    this.pdfurl = to.query.url
                    this.$forceUpdate()
                }
            },
            show: function (s) {
                if (s) {
                    this.getPdf();
                }
            },
            page: function (p) {
                if (window.pageYOffset <= this.findPos(document.getElementById(p)) || (document.getElementById(p +
                        1) && window.pageYOffset >= this.findPos(document.getElementById(p + 1)))) {
                    // window.scrollTo(0,this.findPos(document.getElementById(p)));
                    document.getElementById(p).scrollIntoView();
                }
            }
        }
    }
</script>

<style src="pdfvuer/dist/pdfvuer.css"></style>
<style lang="css" scoped>
    #buttons {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    /* Page content */
    .content {
        padding: 16px;
    }
</style>