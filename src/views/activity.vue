<template>
    <div class="activity-container">
        <div class="top-container">
            
            <div class="calendar-container">
                <div class="year-month">
                    <i class="el-icon-caret-left" style="font-size:18px;float:left;margin-left:70px;margin-top:10px;"></i>
                    2022年10月
                    <i class="el-icon-caret-right" style="font-size:18px;float:right;margin-right:70px;margin-top:10px;"></i>
                </div>
                <div class="weekday-contaienr">
                    <div>日</div>
                    <div>一</div>
                    <div>二</div>
                    <div>三</div>
                    <div>四</div>
                    <div>五</div>
                    <div>六</div>
                </div>
                <div class="day-container">
                    <div v-for="(item,index) in 42" :key="index">{{item}}</div>
                </div>
            </div>

            <div class="silder-container">
                <el-button type="primary" round size="large" style="position:absolute;bottom:35px;right:50px;"> <i class="el-icon-suitcase-1"></i> 活动合作 > ></el-button>
                <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e862dc7c91c402595a6605b8b711efc~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?" width="100%" alt="">
            </div>

        </div>
       

        <div class="silder-box-container">
            <div class="silder-box" v-for="item in silderList" :key="item">
                <div>
                    <img :src="item.image" width="216px" />
                </div>
                <div class="activity-info">
                    <p class="activity-name">第八期字节跳动技术沙龙|深度解析</p>
                    <p class="activity-time"> <i class="el-icon-date"></i> 10-11 周三</p>
                    <p class="activity-address"> 
                        <i class="el-icon-location-information"></i>上海
                        <el-button size="mini" type="primary" style="float:right;position:relative;top:-5px;" round>&nbsp;&nbsp;报名参加&nbsp;&nbsp;</el-button>
                    </p>
                </div>
            </div>

           
        </div>
        
    </div>
</template>
<script>
export default {
    name:"",
    data(){
        return {
            silderList:[
                {
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5291e72867fd4225a432e8b50b9d3931~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a3855caad5c40dd967c3f01be794f9d~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dabeafad6df48ea9af0efde68d15687~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7378a70da0b484ba28c5b760256b573~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e862dc7c91c402595a6605b8b711efc~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1eea56b4afb04349ac752916ecd28cf5~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73d23deb51044502ad1f5441ddf274b4~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bc3674409ff443eb93a1629f33c1e06~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc576c1d817e4ac18ee57b7ec1437e0c~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec48adc1f419454fbe9407e29483d797~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30b89a46e64b4539b854996d466c547b~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86f5460511fa45dfa17f9111e36cb773~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5291e72867fd4225a432e8b50b9d3931~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a3855caad5c40dd967c3f01be794f9d~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dabeafad6df48ea9af0efde68d15687~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                },
            ]
        }
    }
}
</script>
<style scoped>
.activity-container{
    width:1140px;
    margin:15px auto;
}
.top-container{
    height:270px;
    width:1140px;
}
.silder-container{
    width:678px;
    float:left;
    height:270px;
    margin-left: 15px;
    overflow: hidden;
    position:relative;
}
.calendar-container{
    width:447px;
    float:left;
    height:270px;
    background:#fff;
}
.calendar-container .year-month{
    width:447px;
    height:40px;
    font-size:14px;
    font-weight:bold;
    text-align:center;
    color:#409eff;
    line-height:40px
}
.calendar-container .weekday-contaienr{
    width:447px;
    height:30px;
    background:#409eff;
}
.calendar-container .weekday-contaienr div{
    width:63.8px;
    height:30px;
    text-align: center;
    color:#fff;
    float:left;
    line-height:30px;
    font-size:12px;
}
.calendar-container .day-container{
    width:447px;
    height:180px;
    padding:10px 0px;
}
.calendar-container .day-container div{
    width:63.8px;
    float:left;
    height:30px;
    font-size:12px;
    line-height:30px;
    color:#777;
    text-align: center;
    border-radius: 2px;
}
.calendar-container .day-container div:hover{
    background:#409eff;
    color:#fff;
    cursor: pointer;
}
.rili-container img{
    margin:0px;
}
.silder-box-container{
    width:1140px;
    margin-top:35px;
}
.silder-box{
    width:216px;
    height:260px;
    float:left;
    margin-right:15px;
    margin-bottom:15px;
    background:#fcfcfc;
    position:relative;
    z-index:1;
    top:0px;
    transition: all 0.3s;
    cursor:pointer;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}
.silder-box:hover{
    box-shadow: 0 0 25px rgba(0,0,0,0.1);
    z-index:2;
    top:-3px;
}
.silder-box:nth-child(5n){
    margin-right:0px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .activity-info{
    width:192px;
    padding:12px;
  }
  .activity-info .activity-name{
    margin:0px;
    font-size:14px;
  }

.activity-info .activity-time{
    font-size:12px;
    color:#777;
}
.activity-info .activity-address{
    font-size:12px;
    color:#777;
}
</style>