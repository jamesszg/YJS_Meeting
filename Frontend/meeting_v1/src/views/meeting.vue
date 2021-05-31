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
                <el-menu class="el-menu" @open="handleOpen" unique-opened=true
                    @close="handleClose" @select="select" active-text-color=#303133 text-color= #303133 style="height: 100%;">
                    <el-submenu v-for="(process, idx) in processes" :index=idx+1>
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span >议程{{idx+1}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index='brief' >Brief</el-menu-item>
                            <el-menu-item index='student' >Student</el-menu-item>
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
                console.log(index)
                console.log(path)
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                this.Nowtitle = "议程"+key;
                // this.$router.push(
                //     {
                //         name:'brief',
                //         params:{
                //             process_id:key
                //         }
                //     }
                // )
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
                this.Nowtitle = "议程"+key;
                // this.$router.push(
                //     {
                //         name:'brief',
                //         params:{
                //             process_id:key
                //         }
                //     }
                // )
            }
        },
        data() {
            return {
                processes: [{
                        id: 1,
                        url: 'process_url_01'
                    },
                    {
                        id: 2,
                        url: 'process_url_02'
                    },
                    {
                        id: 3,
                        url: 'process_url_03'
                    },
                    {
                        id: 4,
                        url: 'process_url_04'
                    }
                ],
                Nowtitle: '议程1'
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
        height: 550px;
    }
</style>