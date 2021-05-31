<template>
    <div class="brief">
        This is Brief page
        Now Process Id is {{process_id}}
    </div>
</template>

<script>
    export default{
        data(){
            return{
                process_id:-1
            }
        },
        methods:{
            watch(){
                this.process_id = this.$router.params.process_id
            }
        }
    }
</script>



