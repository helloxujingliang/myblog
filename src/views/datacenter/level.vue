<template>
    <div class="page-container">
        <div class="container">
            <div class="title">成长等级
                <div style="float:right;height:40px;cursor:pointer;color:#777;" >
                    <i class="el-icon-question">&nbsp;<span style="font-size:14px;">等级规则</span></i>
                </div>
            </div>
            <div class="level-container">
                <div class="current-level-container">
                    <div class="level">当前等级</div>
                </div>
            </div>
        </div>

        <div class="task-container">
             <div class="title">升级行为
                <div style="float:right;height:40px;cursor:pointer;color:#1e80ff;" >
                    <span style="font-size:14px;">今日得分&nbsp;0</span>
                </div>
            </div>
            <div class="task-box-container">
                <div class="task-box">
                    <div>
                        <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72a37dbd04454fa1b682af47ddec726b~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp" width="48px" alt="">
                    </div>
                    <div>
                        <p style="font-size:14px;">发布一篇文章</p>
                        <p style="font-size:12px;color:#888;">分数+10,已完成0/2</p>
                    </div>
                    <div>
                        <el-button type="primary" size="mini" round>去完成</el-button>
                    </div>
                </div>

                <div class="task-box">
                    <div>
                        <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72a37dbd04454fa1b682af47ddec726b~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp" width="48px" alt="">
                    </div>
                    <div>
                        <p style="font-size:14px;">发布一篇文章</p>
                        <p style="font-size:12px;color:#888;">分数+10,已完成0/2</p>
                    </div>
                    <div>
                        <el-button type="primary" size="mini" round>去完成</el-button>
                    </div>
                </div>

                <div class="task-box">
                    <div>
                        <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72a37dbd04454fa1b682af47ddec726b~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp" width="48px" alt="">
                    </div>
                    <div>
                        <p style="font-size:14px;">发布一篇文章</p>
                        <p style="font-size:12px;color:#888;">分数+10,已完成0/2</p>
                    </div>
                    <div>
                        <el-button type="primary" size="mini" round>去完成</el-button>
                    </div>
                </div>

                <div class="task-box">
                    <div>
                        <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72a37dbd04454fa1b682af47ddec726b~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp" width="48px" alt="">
                    </div>
                    <div>
                        <p style="font-size:14px;">发布一篇文章</p>
                        <p style="font-size:12px;color:#888;">分数+10,已完成0/2</p>
                    </div>
                    <div>
                        <el-button type="primary" size="mini" round>去完成</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Level",
    data(){
        return {
          
        }
    }
}
</script>
<style scoped>
.page-container{
    width:764px;
    margin:0px;
}
.container{
    width:724px;
    padding:20px;
    border-radius:4px;
    background:#fff;
}
.title{
    width:724px;
    padding-bottom:20px;
    border-bottom:1px solid #f1f3f5;
}
.level-container{
    width:724px;
    padding:20px 0px;
}
.level-container::after{
    content:"";
    display: block;
    clear:both;
    height:0;
    visibility: hidden;
}
.current-level-container{
    width:300px;
    height:160px;
    background:linear-gradient(104.12deg,#e7e7ff,#c3bbf5 46.87%,#9e91ed);
    border-radius:4px;
    float:left;
    overflow: hidden;
    position:relative;
}
.current-level-container .level{
    color:#fff;
    background:#efc01a;
    position:absolute;
    top:0px;
    left:0px;
    font-size:12px;
    padding:4px 6px;
    border-radius: 4px;;
}

.task-container{
    width:724px;
    padding:20px;
    margin-top:20px;
    min-height:100px;
    background:#fff;
    border-radius:4px;
}

.task-box-container{
    width:724px;
    padding-top:20px;
}

.task-box-container::after{
    content:"";
    display: block;
    clear:both;
    height:0;
    visibility: hidden;
}

.task-box{
    width:206px;
    padding:15px 10px;
    border:1px solid #f1f3f5;
    float:left;
    border-radius:4px;
    margin-right:20px;
    margin-bottom:20px;
}
.task-box:nth-of-type(3n){
    margin-right:0px;
}
.task-box div{
    float:left;
}
</style>