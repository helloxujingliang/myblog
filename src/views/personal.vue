<template>
    <div class="container">
        <div class="left">
            <ul>
                <li>个人资料</li>
                <li>账号设置</li>
                <li>个人资料</li>
                <li>个人资料</li>
            </ul>
        </div>
        <div class="right">

        </div>
    </div>
</template>
<script>
export default {
    name:"Personal",
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.container{
    width:1024px;
    margin:0px auto;
}
.container .left{
    width:230px;
    height:500px;
    background:#fff;
    float:left;
}
.container .right{
    width:779px;
    height:500px;
    background:#fff;
    float:right;
}
</style>