<template>
    
<div class="page-contaienr">
    <div style="width:764px;height:100px;margin-bottom:20px;">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/banner.d73d31c.png" style="width:764px;height:100px;border-radius:4px;" alt="" >
    </div>
    <div class="notice-container">
        <p style="font-size:16px;"><span><img src="/images/icon/shops-notice.png" style="position:relative;top:5px;" width="24px" alt=""></span>公告栏</p>
        <p style="font-size:12px;color:#515767;text-indent:30px;">1.问题和意见反馈（例如修改收货地址）：</p>
        <p style="font-size:12px;color:#515767;text-indent:30px;">2.所有中奖/兑换商品30个自然日内未提交收件信息视为自动放弃；小铺商品物流信息查询：关注“顺丰速运+”小程序-“查快递”</p>
    </div>
     <div class="container">
         <div class="title">福利兑换
            <div style="float:right;height:40px;cursor:pointer;color:#777;" >
                <span style="font-size:14px;margin-right:20px;"><i class="el-icon-coin"></i>兑换历史</span>
                <span style="font-size:14px;">剩余豆子：<span style="color:#1e8eff;font-weight:400;"><img src="/images/icon/coffe.png" width="20px" style="position:relative;top:4px;" alt="">&nbsp;1024</span></span>
            </div>
        </div> 
        <div class="goods-contaienr">
            <div class="goods" v-for="(item,index) in goodsList" :key="index">
                <div class="image">
                    <img :src="item.image" alt="">
                </div>
                <div class="goods-desc">
                    <p style="margin:6px 0px;font-size:14px;height:40px;">{{item.name}}</p>
                    <p style="font-size:12px;line-height:30px;color:#888;">
                        <img src="/images/icon/coffe.png" width="20px" style="position:relative;top:4px;" alt=""> {{item.price}}w
                        <span style="float:right;">{{item.count}}人已兑换</span>
                    </p>
                </div>
                <div class="goods-buy">
                    <p style="padding-top:5px;padding-left:12px;">
                        <el-button type="primary" size="mini" round @click="$router.push('/datacenter/goods')">立即兑换</el-button>
                    </p>
                </div>
            </div>
                   
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"Shopes",
    data(){
        return {
            goodsList:[
                {
                    name:"欧式不锈钢咖啡杯",
                    image:"/images/shpos/goods4.jpg",
                    price:23.5,
                    count:23,
                },
                {
                    name:"陶瓷马克杯",
                    image:"/images/shpos/goods5.jpg",
                    price:33.5,
                    count:7,
                },{
                    name:"埃塞俄比亚咖啡豆",
                    image:"/images/shpos/goods13.jpg",
                    price:23.5,
                    count:55,
                },{
                    name:"意式咖啡豆500g",
                    image:"/images/shpos/goods12.jpg",
                    price:23.5,
                    count:55,
                },{
                    name:"分子黑咖啡豆500g",
                    image:"/images/shpos/goods10.jpg",
                    price:23.5,
                    count:55,
                },{
                    name:"Starbucks深度烘焙咖啡豆200g",
                    image:"/images/shpos/goods11.jpg",
                    price:23.5,
                    count:55,
                },
                {
                    name:"AOKKA咖啡豆（深度烘焙）",
                    image:"/images/shpos/goods1.jpg",
                    price:23.5,
                    count:55,
                },
                {
                    name:"蓝山咖啡豆",
                    image:"/images/shpos/goods2.jpg",
                    price:20.5,
                    count:90,
                },
                {
                    name:"AOKKA咖啡豆",
                    image:"/images/shpos/goods3.jpg",
                    price:23.5,
                    count:63,
                },
                {
                    name:"Moko手摇咖啡豆研磨机",
                    image:"/images/shpos/goods7.jpg",
                    price:60.5,
                    count:17,
                },
                {
                    name:"Tanto手摇咖啡豆研磨机",
                    image:"/images/shpos/goods6.jpg",
                    price:55,
                    count:23,
                },{
                    name:"StarBack手摇咖啡豆研磨机",
                    image:"/images/shpos/goods8.jpg",
                    price:60.5,
                    count:17,
                },
                {
                    name:"Amercan手摇咖啡豆研磨机",
                    image:"/images/shpos/goods9.jpg",
                    price:55,
                    count:23,
                },
                
            ]
        }
    }
}
</script>
<style  scoped>
.notice-container{
    width:724px;
    padding:15px 20px;
    min-height:80px;
    background:#fff;
    border-radius:4px;
    margin-bottom:20px;
    line-height:30px;
}
.container{
    width:724px;
    background:#fff;
    padding:20px;
    border-radius:4px;
}
.title{
    width:724px;
    padding-bottom:20px;
    border-bottom:1px solid #f1f3f5;
}
.goods-contaienr{
    width:724px;
    padding-top:30px;

}
.goods-contaienr::after{
 content:"";
  display: block;
  clear:both;
  height:0;
  visibility: hidden;
}
.goods-contaienr .goods{
    width:167.5px;
    float:left;
    height:264px;
    margin-bottom:24px;
    margin-right:15px;
    border:1px solid #f1f1f1;
    border-radius:4px;
    overflow: hidden;
}

.goods-contaienr .goods:nth-of-type(4n){
    margin-right:0px;
}

.goods-contaienr .goods .image{
    width:165px;
    height:140px;
    text-align: center;
}

.goods-contaienr .goods .image img{
   width:120px;
    height:100px;
    margin-top:15px;
}
.goods-contaienr .goods .goods-desc{
    padding:0px 12px;
}
.goods-contaienr .goods .goods-buy{
    width:220px;
    border-top:1px solid #f1f3f5;
}
</style>