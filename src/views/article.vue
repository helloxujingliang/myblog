<template>
    <div class="article-container">
        <div class="article-title">【MapBox GL】加载GeoJson点线面数据</div>
        <div class="article-info">
            <span style="margin-right:12px;"><i class="el-icon-collection-tag"></i>&nbsp;前端开发·MapBox GL</span>
            <span><i class="el-icon-time"></i>&nbsp;2022-009-10 12:33</span>
            <span style="margin:0px 16px;"><i class="el-icon-view"></i>&nbsp;448</span>
            <!-- <el-tag size="mini" style="margin:0px 4px;">Vue2</el-tag>
            <el-tag size="mini" style="margin:0px 4px;">mapbox gl</el-tag> -->
            <span style="float:right;font-size:12px;">
              <el-link style="font-size:12px;margin-right:6px;" type="default" :underline="false"> <strong style="color:#666;">#</strong>Vue2</el-link>
              <el-link style="font-size:12px;margin-right:6px;"  type="default" :underline="false"> <strong style="color:#666;">#</strong>MapBox GL </el-link>
            </span>
        </div>

        <div class="article-content" id="article" v-html="content">

        </div>
    </div>
</template>
<script>
import Hljs from 'highlight.js'
import 'highlight.js/styles/solarized-dark.css'
export default {
    name:"Article",
    data(){
        return {
            content:`
<h2><strong>（一）图层加载</strong></h2>
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
.article-container{
    min-height:500px;
    padding:30px 15px;
}
.article-title{
    height:50px;
    font-size:19px;
    font-weight:bold;
}
.article-info{
    font-size:13px;
    color:#777;
}
.article-content{
    border-top:1px solid #f1f1f1;
    font-size:14px;
    margin-top:30px;
    line-height:22px;
    color:#666;
    position:relative;
}



::v-deep pre{
    font-size:14px;
}


</style>