<template>
    <div class="article-page">
        <div class="article-container">
            <div class="article-operate">
                <div>
                    <img src="/images/icon/good.png" />
                </div>
                <div>
                    <img src="/images/icon/pinglun-b.png" />
                </div>
                <div>
                    <img src="/images/icon/collect.png" />
                </div>
                <div>
                    <img src="/images/icon/fenxiang.png" />
                </div>
                <div>
                    <img src="/images/icon/jubao.png" />
                </div>
            </div>
            <!-- 文章标题 -->
            <div class="article-title">【MapBox GL】加载GeoJson点线面数据</div>
            <!-- 文章内容 -->
            <div class="article-info">
                <span style="margin-right:12px;"><i class="el-icon-collection-tag"></i>&nbsp;前端开发·MapBox GL</span>
                <span><i class="el-icon-time"></i>&nbsp;2022-009-10 12:33</span>
                <span style="margin:0px 16px;"><i class="el-icon-view"></i>&nbsp;448</span>
                <!-- <el-tag size="mini" style="margin:0px 4px;">Vue2</el-tag>
                <el-tag size="mini" style="margin:0px 4px;">mapbox gl</el-tag> -->
                <span style="float:right;font-size:12px;">
                <el-link style="font-size:12px;margin-right:6px;" type="default" :underline="false"> <strong style="color:#666;"></strong>#Vue2</el-link>
                <el-link style="font-size:12px;margin-right:6px;"  type="default" :underline="false"> <strong style="color:#666;"></strong>#MapBox GL </el-link>
                </span>
            </div>
            <!-- 文章内容 -->
            <div class="article-content" id="article" v-html="content">

            </div>
        </div>
        <div class="article-user-info">
            <div class="user-container">
                <div class="user-info" @click="$router.push({'path':'/my'})">
                <div class="photo">
                    <img src="@/assets/images/baidu.png" width="40px" alt="">
                </div>
                <div class="username">
                    <p>MASA技术团队
                    <img src="@/assets/images/level.png" width="36px">
                    </p>
                    <p style="font-size:12px;color:#999;">前端开发工程师&nbsp;&nbsp;&nbsp;&nbsp;IP属地：山东省</p>
                </div>
                </div>
                <div class="user-count">
                <div class="row">
                    <div class="count-btn">
                        32
                    </div>
                    <div>文章数量</div>
                </div>
                <div class="row">
                    <div class="count-btn">
                    843
                    </div>
                    <div>获赞数量</div>
                </div>
                <div class="row">
                    <div class="count-btn">
                    3232
                    </div>
                    <div>浏览次数</div>
                </div>
                </div>
                <div style="margin-top:5px;text-align:center;">
                <el-row>
                    <el-col :span="4">
                    <img src="/images/github.png" width="20px" />
                    </el-col>
                    <el-col :span="4">
                    <img src="/images/csdn.png" width="20px" />
                    </el-col>
                    <el-col :span="4">
                    <img src="/images/baidu.png" width="20px" />
                    </el-col>
                    <el-col :span="4">
                    <img src="/images/qq.png" width="20px" />
                    </el-col>
                    <el-col :span="4">
                    <img src="/images/weibo.png" width="20px" />
                    </el-col>
                    <el-col :span="4">
                    <img src="/images/gitee.png" width="20px" />
                    </el-col>
                </el-row>
                </div>
            </div>
            <!-- 相关文章 -->
          <div class="record-container">
              <div class="cate-title">
              <div class="cate-title-text">
                  <i class="el-icon-s-data"></i>相关文章
              </div>
              </div>
              <div class="record-list">
              <p class="hot-article" v-for="(item,index) in articleList" style="font-size:13px;height:22px;" :key="index">
                  <!-- <i style="color:#409eff;">{{index+1}}、</i> -->
                  <span>{{item.title}}</span>
              </p>
              
              </div>
          </div>
        </div>  
    </div>
</template>
<script>
import Hljs from 'highlight.js'
import 'highlight.js/styles/solarized-dark.css'

export default {
    name:"Article",
    components:{

    },
    data(){
        return {
                  articleList:[
        {
          title:"【MapBoxGL】加载GeoJSON点线面数据",
          cate:"MapBox GL",
          photo:"/images/csdn.png",
          image:"/images/springboot.png",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"/images/nginx.png",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"/images/docker.png",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"/images/java.png",
        },{
          title:"【MapBoxGL】（零）MapBoxGL功能总结",
          cate:"Java SE",
          photo:"/images/baidu.png",
          image:"/images/mysql.png",
        },{
          title:"【Git】创建Git项目上传代码和拉取远程代码",
          cate:"Cesium",
          photo:"/images/csdn.png",
          image:"/images/mybatisplus.png",
        },        {
          title:"【MapBoxGL】加载GeoJSON点线面数据",
          cate:"MapBox GL",
          photo:"/images/csdn.png",
          image:"/images/springboot.png",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"/images/nginx.png",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"/images/docker.png",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"/images/java.png",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"/images/nginx.png",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"/images/docker.png",
        },{
          title:"Vue全家桶（三）Vue后端接口访问axios的使用及axios封装",
          cate:"MySQL",
          photo:"/images/weibo.png",
          image:"/images/java.png",
        },{
          title:"【MyBatis】ResultMap和Collection实现嵌套查询一对多查询&&二级菜单查询",
          cate:"MyBatis",
          photo:"/images/github.png",
          image:"/images/nginx.png",
        },{
          title:"SpringBoot+MyBatis+MySQL增删改查（四）（图片上传、删除、时间格式化工具类）、UUID",
          cate:"SpringBoot",
          photo:"/images/qq.png",
          image:"/images/docker.png",
        }
      ],
            content:`

<h2><strong>（一）图层加载</strong></h2>
<blockquote style="bcakground:red">
<p>图层加载</p>
</blockquote>
            <pre class="language-javascript"><code>     // {select id,title,createtime,createuser,createid,desc, cateId,cateName,parentCateid,parentCateNmae,tags:[{},{}]}
      // article : id,title,desc,content,state,visibility,createtime,createuser,createuserid,updatetime,cateId,delete
      // add update delete list(querylist:cateid,tag,key,page,limit ; default:state == 1,visibility == 1)
      // link : id,title,desc,url,state,sort,             
      // tag : id,name,desc,
      // cate id,name,desc,parentId(default 0),
      // user id,username,password,email,login_time,login_ip,object,
      // 关联表 ： good(点赞) 
      // 关联表 ： collect(收藏)
      // 关联表 ： tag(标签)
      // 用户注册 登录 写作 浏览 点赞 收藏 找回密码  </code></pre>
<p>1、添加GeoJson 点（point）、线（line）、面（fill）、图标（symbol）数据</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 天空地监测平台： 镇边界图</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 费县智慧社区：社区边界、楼栋</p>
<p>2、添加WMS（Raster）地图服务&nbsp;：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天空地监测 地图影像地图</p>
<p>3、添加MVT（Vector）矢量瓦片数据</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 天空地监测平台：执法地图页面历史图斑数据</p>
<p>4、加载3D白膜地图数据</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 临沭智慧城市 建筑物白膜数据加载</p>
<p>5、添加普通自定义图片Marker</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 天空地监测平台：判读页面加载数据</p>
<p>6、添加HTML Element动态效果图标</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 天空地监测大屏：最新上报点展示</p>
<p>7、背景图层加载</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 天空地监测大屏：蓝色背景图层加载</p>
<pre class="language-javascript"><code>dealPreCode(){
            let el = document.getElementById("article");
            let blocks = el.querySelectorAll('pre code'); // querySelectorAll可以根据自己的富文本生成的代码做调整 我这里默认刚好
            blocks.forEach((block) =&gt; { // 在forEach中做一些操作
                // 1.创建ul节点
                let ul = document.createElement("ul");
                // 2.根据换行符获取行数，根据获取的行数生成行号
                let rowCount = block.outerHTML.split('').length;
                for(let i=1;i &lt;= rowCount;i++){
                //创建li节点，创建文本节点
                let li = document.createElement("li")
                let text = document.createTextNode(i)
                //为li追加文本节点，将li加入ul
                li.appendChild(text)
                ul.appendChild(li)
                }
                // 3.给行号添加类名
                ul.className = 'pre-numbering'
                // 4.将ul节点加到 代码块
                block.parentNode.appendChild(ul)
                Hljs.highlightBlock(block)
            })
        }</code></pre>
<h2>（二）图层操作</h2>
<p>1、获取图层</p>
<p>2、判断图层</p>
<p>3、移除图层</p>
<p>4、Image添加、判断、移除</p>
<h1><strong>二、数据操作</strong></h1>
<p>1、数据过滤（filter)</p>
<p>2、数据展示（exception表达式）</p>
<h1><strong>三、图层样式</strong></h1>
<p>1、layout</p>
<p>2、paint</p>
<h1>四、地图控件</h1>
<p>1、鼠标移入弹出特效</p>
<h1><strong>五、绘图编辑</strong></h1>
<p>1、使用mapbox-gl-draw插件 封装绘图插件</p>
<h1>六、常见特效</h1>
<p>1、城市建筑物白膜</p>`
        }
    },
    created(){

    },
    mounted(){
        this.dealPreCode();
    },
    methods:{
        dealPreCode(){
            let el = document.getElementById("article");
            let blocks = el.querySelectorAll('pre code'); // querySelectorAll可以根据自己的富文本生成的代码做调整 我这里默认刚好
            blocks.forEach((block,index) => { // 在forEach中做一些操作
                // blocks[index].style.fontSize="14px"
                blocks[index].style.fontFamily="Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace"
                blocks[index].style.borderRadius="3px"
                // 1.创建ul节点
                // let ul = document.createElement("ul");
                // 2.根据换行符获取行数，根据获取的行数生成行号
                // let rowCount = block.outerHTML.split('\n').length;
                // for(let i=1;i <= rowCount;i++){
                // //创建li节点，创建文本节点
                // let li = document.createElement("li")
                // let text = document.createTextNode(i)
                // //为li追加文本节点，将li加入ul
                // li.appendChild(text)
                // ul.appendChild(li)
                // }
                // // 3.给行号添加类名
                // ul.className = 'pre-numbering'
                // // 4.将ul节点加到 代码块
                // block.parentNode.appendChild(ul)
                Hljs.highlightBlock(block)
            })
        }
    }
}


</script>
<style scoped>
.article-page{
    width:1140px;
    margin:0px auto;
}
.article-page .article-user-info{
    width:290px;
    float:right;
    min-height:800px;
    position:fixed;
    top:76px;
    right:50%;
    margin-right:-570px;
}
.article-container{
    float:left;
    background:#fff;
    width:835px;
    min-height:500px;
    padding:30px 0px;
    position: relative;
    /* margin-left:70px; */
        /* background:linear-gradient(0deg,transparent 24%,rgba(201,195,195,.329) 25%,hsla(0,8%,80.4%,.05) 26%,transparent 27%,transparent 74%,hsla(0,5.2%,81%,.185) 75%,rgba(180,176,176,.05) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,rgba(204,196,196,.226) 25%,hsla(0,4%,66.1%,.05) 26%,transparent 27%,transparent 74%,hsla(0,5.2%,81%,.185) 75%,rgba(180,176,176,.05) 76%,transparent 77%,transparent); */
  
}
.article-operate{
    width:50px;
    height:400px;
    position:fixed;
    margin-top:60px;
    left:50%;
    z-index:999;
    top:0px;
    bottom:0px;
    margin:auto -640px;
    
}
.article-operate div{
    font-size:22px;
    color:#999;
    width:50px;
    height:50px;
    border-radius: 50%;
    background: #fff;
    margin-bottom:18px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    text-align: center;
    line-height:50px;
}
.article-operate div img{
    width:23px;
    margin-top:12px;
}
.article-title{
    height:80px;
    font-size:28px;
    font-weight:bold;
    padding:0px 15px;
}
.article-info{
    font-size:13px;
    padding:0px 15px;
    color:#777;
}
.article-content{
    border-top:1px solid #f1f1f1;
    font-size:14px;
    margin-top:30px;
    line-height:22px;
    color:#666;
    position:relative;
    color: #383838;
    font-size: 13px;
    line-height: 20px;
    /* letter-spacing: 2px; */
    word-break: break-word;
    /* font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif; */
    scroll-behavior: smooth;
    background-image: linear-gradient(0deg,transparent 24%,rgba(201,195,195,.329) 25%,hsla(0,8%,80.4%,.05) 26%,transparent 27%,transparent 74%,hsla(0,5.2%,81%,.185) 75%,rgba(180,176,176,.05) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,rgba(204,196,196,.226) 25%,hsla(0,4%,66.1%,.05) 26%,transparent 27%,transparent 74%,hsla(0,5.2%,81%,.185) 75%,rgba(180,176,176,.05) 76%,transparent 77%,transparent);
    background-color: #fff;
    background-size: 50px 50px;
    padding:0px 15px;
    padding-bottom: 60px;
}

blockquote{
    background-color: #ccc;
    border-left: 8px solid red;
    display: block;
    font-size: 100%;
    line-height: 1.5;
    margin: 10px 0;
    padding: 10px;
    width:100%;
    height:30px;
}

::v-deep pre{
    font-size:14px;
}

.user-container{
  width:266px;
  padding:12px;
  height:160px;
  background:#fff;
  margin-bottom:20px;
  border-radius:0px;
}
.user-info{
  width:266px;
  height:60px;
  border-bottom:1px solid #f1f3f5;
}
.user-info:hover{
  cursor:pointer;
}
.user-container .photo{
  width:40px;
  height:40px;
  background:#f1f1f1;
  border-radius: 50%;
  margin:5px auto;
  float:left;
  overflow:hidden;
  box-shadow: 0 0 4px rgba(0,0,0, 0.1);
}
.user-container .username{
  width:200px;
  height:40px;
  margin-left:10px;
  font-size:14px;
  color:#333;
  text-align: left;
  float:left;
}
.user-count{
  font-size:13px;
  height:70px;
  padding-top:0px;
}
.user-count .row{
  width:83px;
  text-align: center;
  float:left;
  height:34px;
  margin-top:6px;
  line-height: 30px;
  font-size:12px;
}
.count-btn{
  width:88px;
  height:30px;
  text-align:center;
  line-height:30px;
  font-size:14px;}
.user-container .username p{
  margin:6px 3px;
}

.record-container{
  width:266px;
  padding:12px;
  min-height:280px;
  background:#fff;
  margin-bottom:20px;
  border-radius: 0px;
  position:relative;
}
.cate-title{
  width:266px;
  height:40px;
  position:absolute;
  top:0px;
  left:0px;
  font-size:14px;
  border-bottom:1px solid #f1f3f5;
  color:#333;
  padding:0px 12px;
}
.cate-title-text{
  height:38px;
  float:left;
  padding:0px 3px;
  line-height:38px;
}
.record-list{
  margin-top:40px;
  width:266px;
}

.record-list .hot-article{
  width:251px;
  color:#666;
  height:30px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.record-list .hot-article:hover{
  color:#409eff;
  cursor:pointer;
}


</style>