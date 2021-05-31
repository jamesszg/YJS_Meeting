<template>
    <div class="process">
        <el-container>
            <el-aside width="35%">
                <el-button type="primary" plain style="height: 100px;" @click="goTo('brief')">
                    Brief
                </el-button>
                <el-button type="primary" plain style="margin-left: 0px; height: 100px;" @click="goTo('student')">
                    Student
                </el-button>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main style="height: 500px;">
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
                console.log(src)

                this.$router.push(src)
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
    }
</style>