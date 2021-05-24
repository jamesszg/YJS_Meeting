<template>
    <div class="pdfNoPage">
        <div v-if="isLoading" class="mask">
            <loading size="24px" vertical>加载中...</loading>
        </div>
        <div class="pdf-box">
            <pdf v-for="i in numPages" :key="i" :src="pdfSrc" :page="i" @page-loaded="pageLoaded" />
        </div>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'
    import {
        Loading
    } from 'vant'
    export default {
        metaInfo: {
            meta: [{
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes'
                }
            ]
        },
        // 名字
        name: 'PdfNoPage',
        // 部件
        components: {
            pdf,
            Loading
        },
        // 静态
        props: {
            pdfSrc: {
                type: String,
                default: ''
            }
        },
        // 数据
        data() {
            return {
                numPages: undefined,
                isLoading: true
            }
        },
        // 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
        computed: {},
        // 对象内部的属性监听，也叫深度监听
        watch: {},
        // 请求数据
        created() {},
        mounted() {
            this.getNumPages(this.pdfSrc)
        },
        // 方法表示一个具体的操作，主要书写业务逻辑；
        methods: {
            getNumPages(url) {
                var loadingTask = pdf.createLoadingTask(url)
                loadingTask.promise.then(pdf => {
                    this.url = loadingTask
                    this.numPages = pdf.numPages
                }).catch((err) => {
                    console.log(err)
                })
            },
            // 等pdf页数加载完成的时候，隐藏加载框
            pageLoaded(num) {
                if (num === this.numPages) {
                    this.isLoading = false
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    // 加载框
    .mask {
        width: 100vw;
        height: 100%;
        position: relative;

        .van-loading {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .pdf-box {
        padding: 10px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        overflow-x: hidden;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        font-size: .28rem;

        span {
            width: 100%;
        }
    }
</style>