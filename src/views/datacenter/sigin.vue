<template>
<div class="page-contaienr">
    <div class="container">
        <div class="title">每日签到
            <div style="float:right;height:40px;cursor:pointer;color:#777;" >
                <i class="el-icon-question">&nbsp;<span style="font-size:14px;">签到规则</span></i>
            </div>
        </div>
        
        <el-row>
            <el-col :span="16">
                <div style="width:100%;height:80px;line-height:80px;font-size:14px;color:#999;text-align:left;border-radius:4px;">
                    <el-row>
                        <el-col :span="8">
                            <span style="font-size:32px;color:#333;font-weight:bold;color:#1e80ff;">3</span>&nbsp;&nbsp;&nbsp;连续签到天数
                        </el-col>
                        <el-col :span="8">
                            <span style="font-size:32px;color:#333;font-weight:bold;">23</span>&nbsp;&nbsp;&nbsp;累计签到天数
                        </el-col>
                        <el-col :span="8">
                            <span style="font-size:32px;color:#333;font-weight:bold;">950</span>&nbsp;&nbsp;&nbsp;当前积分 <i class="el-icon-warning"></i>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="8">
                <div style="width:100%;height:80px;">
                    <div style="width:200px;height:50px;float:right;margin:15px auto;background:#1e80ff;color:#fff;text-align:center;line-height:50px;border-radius:4px;cursor:pointer;">
                        <img src="/images/icon/coffe.png" width="30px" style="position:relative;top:8px;" alt="">
                        立即签到
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div class="month">
                <i class="el-icon-caret-left" @click="changeMonth('last')"></i>
                {{currentYear}}年{{currentMonth}}月
                <i class="el-icon-caret-right" @click="changeMonth('next')"></i>

                <span style="float:right;font-size:14px;"><img src="/images/icon/card.png" width="20px" alt=""> 补签卡：<span style="color:orange">2&nbsp;</span>张</span>
            </div>
            <div class="weeks">
                <div class="weekday">周日</div>
                <div class="weekday">周一</div>
                <div class="weekday">周二</div>
                <div class="weekday">周三</div>
                <div class="weekday">周四</div>
                <div class="weekday">周五</div>
                <div class="weekday">周六</div>
                <div class="day" v-for="(item,index) in dateContainer" :key="index"  :style="{'background':item.day >0 ? '#f7f8fa':'#fff'}">
                    <p v-show="item.day >0 && item.today"><span style="padding:0px 5px;border-radius:50%;background:#1e80ff;color:#fff;">{{item.day}}</span></p>
                    <p v-show="item.day >0 && !item.today">{{item.day}}</p>
                    <p v-show="item.day >= nowDay && item.day > 0">
                        <img src="/images/icon/coffe.png" width="16px" style="position:relative;top:2px;" alt="">
                        <span style="font-size:12px;color:#777;;" >+{{item.day*100}}</span>
                    </p>
                    <p><span style="font-size:12px;color:#1e80ff;" v-show="item.day < nowDay && item.day > 0">待补签</span></p>
                </div>
            </div>
        
        </el-row>
       
    </div>
    <div class="get-coffee-container">
        <div class="yaoqing" style="margin-right:20px;">
            <div class="left">
                <p >邀请有奖</p>
                <p style="font-size:12px;color:#888;margin:18px 0px;">邀请好友，立获5000咖啡豆</p>
                <el-button type="primary"  round size="mini">立即邀请 <i class="el-icon-right"></i> </el-button>
            </div>
            <div class="right">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/shuzimiti.e40a5a7.png" alt="">
            </div>
        </div>
        <div class="yaoqing">
            <div class="left">
                <p >每日撸猫挑战赛</p>
                <p style="font-size:12px;color:#888;margin:18px 0px;">每日撸猫挑战赛，获取猫粮</p>
                <el-button type="primary"  round size="mini">立即挑战 <i class="el-icon-right"></i> </el-button>
            </div>
            <div class="right">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/haidi.ffe5bcf.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"Sigin",
    data(){
        return {
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
                 
                    // obj.day = prefix;
                    obj.day = 0;
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
                    // obj.day = suffix;
                    obj.day = 0;
                    // dateArray[i] = suffix;
                    dateArray[i] = obj;
                    suffix++;
                }
            }
            this.dateContainer = dateArray;

            // this.dateContainer.forEach((item,index)=>{
            //     for(let i=0;i<this.silderList.length;i++){
            //         if((item.year+"-"+item.month+"-"+item.day) == this.silderList[i].date){
                    
            //             this.dateContainer[index].activitys.push(this.silderList[i]);
            //         }
            //     }
            // })

            console.log("dateContainer",this.dateContainer);
            this.dateContainer[13].sigin = {
                // iss
            }

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
        },
    }
}
</script>
<style scoped>
.page-contaienr{
    width:724px;
}
.container{
    width:724px;
    padding:20px;
    background:#fff;
    border-radius:4px;
}
.title{
    width:724px;
    padding-bottom:20px;
    border-bottom:1px solid #f1f3f5;
}
.month{
    width:100%;
    height:50px;
    line-height:50px;
    font-weight: bold;
    font-size: 20px;
    color: #1d2129;
    line-height: 50px;
    font-weight: 500;
    margin-bottom:20px;
}
.weeks{
    width:100%;
    height:40px;
}
.weeks .weekday{
    width:103.4px;
    text-align: center;
    line-height:40px;
    height:40px;
    float:left;
    color:#86909c;
}
.day{
    width:93px;
    margin:5px;
    text-align: center;
    line-height:30px;
    height:60px;
    background:#f7f8fa;
    float:left;
}
.day p{
    margin:0px;
}
.get-coffee-container{
    width:764px;
    height:130px;
    margin-top:20px;
}
 
.get-coffee-container .yaoqing{
    width:332px;
    padding:20px;
    min-height:100px;
    background:#fff;
    float:left;
    border-radius:4px;
}
.get-coffee-container .yaoqing .left{
    float:left;
}

.get-coffee-container .yaoqing .right{
    float:right;
}

.get-coffee-container .yaoqing .right img{
    width:160px;
    height:100px;
}
</style>