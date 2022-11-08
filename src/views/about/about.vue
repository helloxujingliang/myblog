<template>
    <div class="container">
        <div class="silder-container">
            <el-carousel :interval="10000" type="" height="800px" width="100%">
                <el-carousel-item >
                    <video class="banner-background" src="/images/banner12.mp4" autoplay="true" style="height:800px;;width:100%;object-fit:fill" loop="true" poster="" muted="">
                        <source src="/images/banner12.mp4" type="video/mp4">
                    </video>
                </el-carousel-item>

                <el-carousel-item >
                    <img src="https://a.amap.com/lbs-dev-yuntu/static/web/banner/me@2x.jpg" width="100%" height="800px"/>
                </el-carousel-item>

                <!-- <el-carousel-item >
                    <img src="/images/about2.jpg" width="100%" height="800px" />
                </el-carousel-item> -->
               
            </el-carousel>
        </div>

        <div class="work-container">
            <div class="cate-title">安全稳定，保障您的业务发展</div>
            <div class="work">
                <div class="work-box">
                    <div class="image"></div>
                    <div class="work-title">稳定的服务可用性</div>
                    <div class="work-desc">超高的服务可用性，持续稳定支持您的业务发展</div>
                </div>
                <div class="work-box">
                    <div class="image" style="background-position:0px -200px;"></div>
                    <div class="work-title">快速的服务响应</div>
                    <div class="work-desc">服务请求到达高德至完成处理的平均时长不超过200ms</div>
                </div>
                <div class="work-box">
                    <div class="image" style="background-position:0px -400px;"></div>
                    <div class="work-title">稳定的服务可用性</div>
                    <div class="work-desc">超高的服务可用性，持续稳定支持您的业务发展</div>
                </div>
                <div class="work-box">
                    <div class="image" style="background-position:0px -200px;"></div>
                    <div class="work-title">全方位的技术支持</div>
                    <div class="work-desc">工单体系提供全方位的技术支持，更有技术支持专业版可供选择</div>
                </div>
            </div>
        </div>

        <div class="site-count-container">
            <div class="cate-title" style="color:#f1f1f1;">海量数据铸就强大行业优势</div>
            <div class="count-container">
                <div class="count-box">
                    <div class="image"></div>
                    <div class="count-box-title">6800</div>
                    <div class="count-desc">日均处理近1000亿次的定位及路线规划请求</div>
                </div>
                <div class="count-box">
                    <div class="image" style="height:100px;"></div>
                    <div class="count-box-title">90%</div>
                    <div class="count-desc">日均处理近1000亿次的定位及路线规划请求</div>
                </div>
                <div class="count-box">
                    <div class="image"></div>
                    <div class="count-box-title">40万</div>
                    <div class="count-desc">日均处理近1000亿次的定位及路线规划请求</div>
                </div>
                <div class="count-box">
                    <div class="image" style="height:100px;"></div>
                    <div class="count-box-title">500+</div>
                    <div class="count-desc">日均处理近1000亿次的定位及路线规划请求</div>
                </div>
                <div class="count-box">
                    <div class="image"></div>
                    <div class="count-box-title">8500</div>
                    <div class="count-desc">日均处理近1000亿次的定位及路线规划请求</div>
                </div>
            </div>
        </div>

        <!-- <div class="about-us-container">

        </div>

        <div class="writer-container">

        </div> -->



        <div class="content-us-container">
            <div class="cate-title" >联系我们，合作共赢</div>
            <div class="content-info">
                <div class="content-box">
                    <div class="content-box-info">
                        <p class="content-box-info-title"><img src="http://www.cqtianjiao.com/skin/default/images/ny/conts_06.png" alt="">联系电话</p>
                        <p style="font-size:14px">17861857725</p>
                    </div>
                </div>
                <div class="content-box">
                    <div class="content-box-info" >
                        <p class="content-box-info-title"><img src="http://www.cqtianjiao.com/skin/default/images/ny/conts_08.png" alt="">通讯地址</p>
                        <p style="font-size:12px;">山东省临沂市临沂应用科学城A座14楼</p>
                    </div>
                </div>
                <div class="content-box">
                    <div class="content-box-info">
                        <p class="content-box-info-title"><img src="http://www.cqtianjiao.com/skin/default/images/ny/conts_03.png" alt="">邮箱地址</p>
                        <p style="font-size:14px;">3225043@qq.com</p>
                    </div>
                </div>
                <div class="content-box">
                     <div class="content-box-info">
                        <p class="content-box-info-title"><img src="http://www.cqtianjiao.com/skin/default/images/ny/conts_03.png" alt="">微信联系</p>
                        <p style="font-size:14px;">1293941636</p>
                    </div>
                </div>

                <div class="content-box" >
                     <div class="content-box-info">
                        <p class="content-box-info-title"><img src="http://www.cqtianjiao.com/skin/default/images/ny/conts_03.png" alt="">腾讯QQ</p>
                        <p style="font-size:14px;">1293941636</p>
                    </div>
                </div>
                <!-- <p style="font-size:14px;">邮箱地址：3225043@qq.com</p>
                <p style="font-size:14px;"></p> -->
            </div>
            <div class="content-us">
                <div id="mapContainer"></div>
                
            </div>
        </div>

                



        <div class="footer">
            <img src="/images/site-footer.png" alt="">
        </div>

    </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
    name:"About",
    data(){
        return {
            map:null,
        }
    },
    mounted(){
        this.initMap();
    },
    methods:{
        initMap(){
            AMapLoader.load({
                key:"6d680f3b6680f06639c63b7ef372c9a4",             // 申请好的Web端开发者Key，首次调用 load 时必填
                version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap)=>{
                this.map = new AMap.Map("mapContainer",{  //设置地图容器id
                    viewMode:"3D",    //是否为3D地图模式
                    zoom:15,           //初始化地图级别
                    center:[118.304504,35.134555], //初始化地图中心点位置
                });
                let marker = new AMap.Marker({
                    position: new AMap.LngLat(118.304504,35.134555),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                    title: '北京'
                });
                this.map.add(marker)
            }).catch(e=>{
                console.log(e);
            })
        },
    }
}
</script>
<style scoped>
.container{
    width:100%;
    margin:0px auto;
    margin-top:0px;
    background:#fff;
    border-radius:4px;
}



.silder-container{
    width:100%;
    height:800px;
    /* background-image: url(https://a.amap.com/lbs-dev-yuntu/static/web/banner/me@2x.jpg);
    background-size: 100% 100%; */
}
.work-container{
    width:100%;
    height:500px;
    padding:50px 0px;
    background:linear-gradient(90deg,#dee6f2,#f1f5ff);
}
.cate-title{
    width:1200px;
    height:100px;
    text-align:center;
    font-size:28px;
    line-height:100px;
    text-align:center;
    margin:0px auto;
    font-family: "PingFangSC-Light";
    font-weight:200;
    color:#1e2437;
}
.work{
    width:1360px;
    height:400px;
    margin:0px auto;
}
.work-box{
    width:300px;
    padding:20px;
    float:left;
    text-align:center;
}
.work-box .image{
    width:200px;
    margin:0px 50px;
    height:200px;
    background-image: url(https://a.amap.com/lbs-dev-yuntu/static/web/image/home/business_development_icon_2x.png);
    background-size:100% 300%;

}
.work-box .work-title{
    font-size:18px;
    height:50px;
}
.work-box .work-desc{
    font-size:14px;
     height:50px;
}
.site-count-container{
    width:100%;
    height:500px;
    padding:50px 0px;
    background-image: url(https://a.amap.com/lbs-dev-yuntu/static/web/image/home/industry_advantage_back_2x.jpg);
    background-size: 100% 600px;
}
.count-container{
    width:1360px;
    height:400px;
    margin:0px auto;
}
.count-box{
    width:212px;
    padding:30px;
    float:left;
    height:400px;
    color:#fff;
    text-align: center;
}

.count-box .image{
    width:200px;
    height:160px;
}
.count-box-title{
    font-size:40px;
}
.count-desc{
    font-size:14px;
    color:#999;
    margin-top:20px;
}
.site-count-container-title{
    width:1140px;
    text-align: center;
    color:#fff;
    margin:0px auto;
    font-size:24px;
}

.about-us-container{
    width:100%;
    height:600px;
    /* background-image:url(/images/about2.jpg); */
    background:linear-gradient(90deg,#dee6f2,#f1f5ff);
    background-size:100% 600px;
}
.writer-container{
    width:100%;
    height:600px;
    background-image:url(/images/about3.jpg);
     /* background:linear-gradient(90deg,#28314a,#191e2e);; */
    background-size:100% 600px;
}
.content-us-container{
    width:100%;
    height:700px;
    padding-top:30px;
    /* background:#f4f4f4; */
    background:linear-gradient(90deg,#dee6f2,#f1f5ff);
    /* background:linear-gradient(90deg,#28314a,#191e2e);; */
    background-image: url(https://a.amap.com/lbs-dev-yuntu/static/web/image/home/quick_build_back_2x.jpg);
    background-size:100% 750px;
    /* \background:url() no-repeat center center; */
}

/* .content-us{
    width:1360px;
    height:500px;
    margin:0px auto;
} */

#mapContainer{
    width:1360px;
    height:400px;
    margin:0px auto;
}
.content-info{
    width:1360px;
    height:100px;
    margin:0px auto;
    padding-bottom:30px;
}

.content-box{
    width:231px;
    padding:0px 20px;
    float:left;
    border-right:1px solid #dfdfdf;
    text-align: center;
}
.content-box:last-child{
    border-right:0px;
}
.content-box-image{
    float:left;
}
.content-box-info-title img{
    width:30px;
    height:30px;
    position:relative;
    top:6px;
}
.content-box-info{
  width:240px;
}
.content-box-info-title{
    margin-bottom:18px;
    color:#777;
}
.footer{
    width:100%;
    height:440px;
}
.footer img{
    width:100%;
}
</style>