<template>
    <div class="meeting">
        <el-container>
            <el-aside width="20%">
                <!-- 
                <div v-for="(process,index) in processes">{{process}}</div>
                <el-button v-for="(process, index) in processes" type="primary" plain style="margin-left: 0px; height: 100px;" @click="goTo(process)">
                    Process_{{process.id}}
                </el-button> 
                -->
                <el-menu class="el-menu" @open="handleOpen" unique-opened=true @close="handleClose" @select="select"
                    active-text-color=#303133 text-color=#303133 style="height: 100%;">
                    <el-submenu v-for="(process, idx) in processes" :index=idx+1>
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>议程{{idx+1}}</span>
                        </template>
                        <el-menu-item-group style="width: 100%; margin-left: 0px;">
                            <el-menu-item index='brief'>Brief_PDFObject</el-menu-item>
                            <el-menu-item index='student'>Student_PDFVuer</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>{{Nowtitle}}</el-header>
                <el-main style="height: 100%px;">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        methods: {
            goTo(src) {
                let process = src;
                console.log(process.id)
                console.log(process.url)
            },
            select(index, path) {
                let process_id = path[0]
                let pdfUrl = path[1]
                if (pdfUrl == "brief") {
                    console.log("Yes")
                    this.$router.push({
                        name: 'pdfView',
                        // query: {
                        //     processid: process_id,
                        //     url: pdfUrl
                        // }
                        params:{
                            process_id: process_id,
                            pdf_url: this.pdfurlList[process_id]
                        }
                    })
                } else {
                    console.log("No")
                    this.$router.push({
                        name: 'pdfVuer',
                        params:{
                            process_id: process_id,
                            pdf_url: this.pdfurlList[process_id]
                        }
                    })
                }
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                this.Nowtitle = "议程" + key;
                this.$router.push({
                    name: "pdfView",
                    // query: {
                    //     processid: key
                    // }
                    params:{
                        process_id: key,
                        pdf_url: this.pdfurlList[key]
                    }
                })
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
                this.Nowtitle = "议程" + key;
                this.$router.push({
                    name: "pdfView",
                    // query: {
                    //     processid: key
                    // }
                    params:{
                        process_id: key,
                        pdf_url: this.pdfurlList[key]
                    }
                })
            }
        },
        data() {
            return {
                processes: [{
                        id: 1,
                        url: '/testpdf.pdf'
                    },
                    {
                        id: 2,
                        url: '/new_helper2.pdf'
                    },
                    {
                        id: 3,
                        url: '/test.pdf'
                    },
                    {
                        id: 4,
                        url: '/testpdf.pdf'
                    }
                ],
                pdfurlList:[
                    "error","/1.pdf","/2.pdf","/3.pdf","/4.pdf"
                ],
                Nowtitle: '议程1'
            }
        },
        watch:{
            '$route'(to,from){
                console.log('router')
            }
        }
    }
</script>

<style>
    .el-aside {
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        margin-left: 0;
        width: 100%;
        height: 550px;
    }
</style>