<template>
    <div class="activity-container">
        <div class="top-container">
            
            <div class="calendar-container">
                <div class="year-month">
                    <i class="el-icon-caret-left" style="font-size:18px;float:left;margin-left:70px;margin-top:10px;cursor:pointer;" @click="changeMonth('last')"></i>
                    {{currentYear}}年{{currentMonth}}月
                    <i class="el-icon-caret-right" style="font-size:18px;float:right;margin-right:70px;margin-top:10px;cursor:pointer;" @click="changeMonth('next')"></i>
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
                    <div v-for="(item,index) in dateContainer" class="day-box" :key="index" :style="{'color':item.currentMonth?'#777':'#bbb'}">
                        <span :class="{'todayStyle':item.today && item.year == nowYear && item.month == nowMonth}" style="">{{item.day}}</span>
                        <div class="activity-point">

                            <el-popover
                            placement="top"
                            trigger="hover"
                            width="220"
                            v-model="visible">
                            <p style="margin:3px 0px;padding:0px;font-size:12px;" v-for="(it,idx) in item.activitys" :key="idx"><span style="font-size:20px;font-weight:bold;margin-top:4px;margin-right:8px;">·</span>{{it.title}}</p>
                            
                            <div slot="reference" style="padding:0px;">
                                <span v-show="item.activitys.length>0"  style="display:block;width:6px;height:6px;background:#fff;border:1px solid #409eff;margin:auto;border-radius:50%;float:center;"></span>
                            </div>
                            </el-popover>

                        </div>
                    </div>
                </div>
            </div>

            <div class="silder-container">
                <el-button type="primary" round size="large" style="position:absolute;bottom:35px;right:50px;"> <i class="el-icon-suitcase-1"></i> 活动合作 > ></el-button>
                <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec48adc1f419454fbe9407e29483d797~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?" height="100%" width="100%" alt="">
            </div>

        </div>
       

        <div class="silder-box-container">
            <div class="silder-box" v-for="(item,index) in silderList" :key="index">
                <div>
                    <img :src="item.image" width="241px" />
                </div>
                <div class="activity-info">
                    <p class="activity-name">{{item.title}}</p>
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
                    title:"【掘金夜谈No.6】输出与输入：技术写作与个人成长",
                    date:"2022-10-24"
                },{
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a3855caad5c40dd967c3f01be794f9d~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"零门槛搞懂基于大模型的AIGC应用",
                    date:"2022-10-24"
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dabeafad6df48ea9af0efde68d15687~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"Tapdata 异构数据库的模型推演",
                    date:"2022-10-25"
                },{
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7378a70da0b484ba28c5b760256b573~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"禅道·中国行【杭州站】敏捷圆桌派来了",
                    date:"2022-11-8"
                },{
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e862dc7c91c402595a6605b8b711efc~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"TiDB Worksop Day深圳",
                    date:"2022-9-13"
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1eea56b4afb04349ac752916ecd28cf5~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"字节跳动技术沙龙（第7期）｜字节高性能开源微服务框架：CloudWeGo",
                    date:"2022-9-13"
                },{
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/73d23deb51044502ad1f5441ddf274b4~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"APP商业化运营操盘手训练营",
                    date:"2022-9-14"
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bc3674409ff443eb93a1629f33c1e06~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"ST connector接入计划专题",
                    date:"2022-9-30"
                },{
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc576c1d817e4ac18ee57b7ec1437e0c~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"MagicHub中英混ASR挑战赛",
                    date:"2022-8-24"
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec48adc1f419454fbe9407e29483d797~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"第二届阿里云 ECS 开发者大赛",
                    date:"2022-9-27"
                },{
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30b89a46e64b4539b854996d466c547b~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"MongoDB 使用规范及最佳实践",
                    date:"2022-10-1"
                },{
                    image:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86f5460511fa45dfa17f9111e36cb773~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"ArchSummit全球架构师峰会",
                    date:"2022-10-2"
                },{
                    image:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5291e72867fd4225a432e8b50b9d3931~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"T Chat 第八期「 龙熠-我在大厂做国际化 」8月18日晚8点开播",
                    date:"2022-10-6"
                },{
                    image:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a3855caad5c40dd967c3f01be794f9d~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"Bytebase 产品部署试用",
                    date:"2022-10-6"
                },{
                    image:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dabeafad6df48ea9af0efde68d15687~tplv-k3u1fbpfcp-no-mark:460:460:460:270.awebp?",
                    url:"",
                    title:"全球运维大会 深圳站",
                    date:"2022-10-16"
                },
            ],

            currentYear:null,
            currentMonth:null,
            dateContainer:null,
            nowYear:null,
            nowMonth:null,
            nowDay:null,
        }
    },
    created(){
        let currentDate = new Date();
        
        this.nowYear = currentDate.getFullYear();
        this.nowMonth = currentDate.getMonth()+1;
        this.nowDay = currentDate.getDate();

        this.currentYear = currentDate.getFullYear();
        this.currentMonth = currentDate.getMonth()+1;
        this.initCalendar(this.currentYear,this.currentMonth);
    },
    methods:{
        initCalendar(year,month){
            // 获取本月第一天是周几
            let currentWeekDate = new Date(year,month-1,1);
            let weekDay = currentWeekDate.getDay();
            console.log(year+"年"+month+"月 第一天是周："+weekDay);

            // 获取当前月份天数
            let currentDate = new Date(year,month,0);
            let currentMonthDayCount = currentDate.getDate();

            // 今日
            let nowDate = new Date();
            let today = nowDate.getDate();
          
            // 获取上个月月份天数
            let lastMonthDate = new Date(year,month-1,0);
            let lastMonthDayCount = lastMonthDate.getDate();

            // 初始化日期容器
            let dateArray = [];
            let prefix = lastMonthDayCount - weekDay;
            let suffix = 1;
            for(let i=0;i<42;i++){
                let obj = {
                    day:null,
                    currentMonth:0,
                    today:false,
                    year:year,
                    month:month,
                    activitys:[],
                }
                if(i<weekDay){
                 
                    obj.day = prefix;
                    // dateArray[i] = prefix;
                    dateArray[i] = obj;
                    prefix++;
                }else if(i>=weekDay && i < (currentMonthDayCount+weekDay)){
                    if((i-weekDay+1) == today){
                        obj.today=true;
                    }
                     obj.currentMonth = 1,
                     obj.day = i-weekDay+1
                    // dateArray[i] = i-weekDay+1
                    dateArray[i] = obj;
                }else if(i>=currentMonthDayCount+weekDay){
                    obj.day = suffix;
                    // dateArray[i] = suffix;
                    dateArray[i] = obj;
                    suffix++;
                }
            }
            this.dateContainer = dateArray;

            this.dateContainer.forEach((item,index)=>{
                for(let i=0;i<this.silderList.length;i++){
                    if((item.year+"-"+item.month+"-"+item.day) == this.silderList[i].date){
                    
                        this.dateContainer[index].activitys.push(this.silderList[i]);
                    }
                }
            })

            console.log("dateContainer",this.dateContainer);

        },
        changeMonth(type){
            if(type=='last'){
                this.currentMonth--;
                if(this.currentMonth<=0){
                this.currentYear--;
                this.currentMonth = 12;
                }
                this.initCalendar(this.currentYear,this.currentMonth);
            }else if(type == 'next'){
                this.currentMonth++;
                if(this.currentMonth>12){
                this.currentYear++;
                this.currentMonth = 1;
                }
                this.initCalendar(this.currentYear,this.currentMonth);
            }
        }
    }
}
</script>
<style scoped>
.activity-container{
    width:1024px;
    margin:15px auto;
}
.top-container{
    height:270px;
    width:1140px;
}
.silder-container{
    width:562px;
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
.calendar-container .day-container .day-box{
    width:63.8px;
    float:left;
    height:30px;
    font-size:12px;
    color:#777;
    text-align: center;
    border-radius: 2px;
}
.calendar-container .day-container .activity-point{
    width:100%;
    height:8px;
    text-align:center;
}
.calendar-container .day-container div:hover{
    /* background:#409eff; */
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
    width:241px;
    height:280px;
    float:left;
    margin-right:20px;
    margin-bottom:20px;
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
.silder-box:nth-child(4n){
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
    width:220.75px;
    padding:12px;
  }
  .activity-info .activity-name{
    margin:0px;
    height:42px;
    font-size:14px;
    overflow: hidden;
    text-overflow:ellipsis;
    /* white-space: nowrap; */
  }

.activity-info .activity-time{
    font-size:12px;
    color:#777;
}
.activity-info .activity-address{
    font-size:12px;
    color:#777;
}


.dayStyle{
     width:22px;height:22px;line-height:22px;border-radius:50%;color:#666;margin:0px auto;display:block;background:#fff;
}

.todayStyle{
    width:22px;height:22px;line-height:22px;border-radius:50%;color:#fff;margin:0px auto;display:block;background:#409eff;
}
</style>