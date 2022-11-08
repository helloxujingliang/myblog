<template>
    <div class="tag-container">
        <div class="filter-container">
            <p><span style="font-size:22px;color:#666;">标签</span> </p>
             <p style="margin:20px 0px;font-size:14px;">标签不仅能组织和归类你的内容，还能关联相似的内容。正确的使用标签将让你的内容被更多人发现和解决。</p>
             <div>
                <div style="width:200px;float:left;">
                    <el-link type="primary" style="margin-right:20px;font-size:16px;" :underline="false">热门</el-link>
                    <el-link type="default" style="margin-right:20px;font-size:16px;" :underline="false">最新</el-link>
                    <el-link type="default" style="margin-right:20px;font-size:16px;" :underline="false">最热</el-link>
                </div>
                <div style="width:300px;float:right;">
                    <el-input placeholder="搜索专栏文章..." size="mini"></el-input>
                </div>
             </div>
        </div>
        <div class="tag-box-container">
             
             <div class="tag-box" v-for="(item,index) in tagList" :key="index">
                <p>
                    <el-tag size="small" type="primary">{{item.name}}</el-tag>
                </p>
                <p class="tag-desc">
                    {{item.desc}}
                </p>
                <p class="tag-article-count">
                    {{item.count}}篇 · 84534次阅读
                </p>
            </div>
        </div>
        <!-- 分页 -->
        <div class="pagenation">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cate",
    data(){
        return {
            tagList:[
                {
                    name:"javascript",
                    desc:"JavaScript 是一门弱类型的动态脚本语言，支持多种编程范式，包括面向对象和函数式编程，被广泛用于",
                    count:"3293"
                }, {
                    name:"php",
                    desc:"PHP，是英文超文本预处理语言 Hypertext Preprocessor 的缩写。PHP 是一种开源的通用计算机脚本语言，尤...",
                    count:"1239"
                },{
                    name:"vue.js",
                    desc:"Reactive Components for Modern Web Interfaces. Vue.js 是一个用于创建 web 交互界面的。其特点是 简...",
                    count:"987"
                },{
                    name:"css",
                    desc:"层叠样式表（英语：Cascading Style Sheets，简写CSS），又称串样式列表，由W3C定义和维护的标准，一种...",
                    count:"657"
                },{
                    name:"java",
                    desc:"Java 是一种可以撰写跨平台应用软件的面向对象的程序设计语言，是由 Sun Microsystems 公司于 1995 年 5",
                    count:"90087"
                },{
                    name:"react.js",
                    desc:"React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for creating us..",
                    count:"21646"
                },{
                    name:"javascript",
                    desc:"JavaScript 是一门弱类型的动态脚本语言，支持多种编程范式，包括面向对象和函数式编程，被广泛用于",
                    count:"3293"
                }, {
                    name:"php",
                    desc:"PHP，是英文超文本预处理语言 Hypertext Preprocessor 的缩写。PHP 是一种开源的通用计算机脚本语言，尤...",
                    count:"1239"
                },{
                    name:"vue.js",
                    desc:"Reactive Components for Modern Web Interfaces. Vue.js 是一个用于创建 web 交互界面的。其特点是 简...",
                    count:"987"
                },{
                    name:"css",
                    desc:"层叠样式表（英语：Cascading Style Sheets，简写CSS），又称串样式列表，由W3C定义和维护的标准，一种...",
                    count:"657"
                },{
                    name:"java",
                    desc:"Java 是一种可以撰写跨平台应用软件的面向对象的程序设计语言，是由 Sun Microsystems 公司于 1995 年 5",
                    count:"90087"
                },{
                    name:"react.js",
                    desc:"React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for creating us..",
                    count:"21646"
                }, {
                    name:"javascript",
                    desc:"JavaScript 是一门弱类型的动态脚本语言，支持多种编程范式，包括面向对象和函数式编程，被广泛用于",
                    count:"3293"
                }, {
                    name:"php",
                    desc:"PHP，是英文超文本预处理语言 Hypertext Preprocessor 的缩写。PHP 是一种开源的通用计算机脚本语言，尤...",
                    count:"1239"
                },{
                    name:"vue.js",
                    desc:"Reactive Components for Modern Web Interfaces. Vue.js 是一个用于创建 web 交互界面的。其特点是 简...",
                    count:"987"
                },{
                    name:"css",
                    desc:"层叠样式表（英语：Cascading Style Sheets，简写CSS），又称串样式列表，由W3C定义和维护的标准，一种...",
                    count:"657"
                },{
                    name:"java",
                    desc:"Java 是一种可以撰写跨平台应用软件的面向对象的程序设计语言，是由 Sun Microsystems 公司于 1995 年 5",
                    count:"90087"
                },{
                    name:"react.js",
                    desc:"React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for creating us..",
                    count:"21646"
                },{
                    name:"css",
                    desc:"层叠样式表（英语：Cascading Style Sheets，简写CSS），又称串样式列表，由W3C定义和维护的标准，一种...",
                    count:"657"
                },{
                    name:"java",
                    desc:"Java 是一种可以撰写跨平台应用软件的面向对象的程序设计语言，是由 Sun Microsystems 公司于 1995 年 5",
                    count:"90087"
                },{
                    name:"css",
                    desc:"层叠样式表（英语：Cascading Style Sheets，简写CSS），又称串样式列表，由W3C定义和维护的标准，一种...",
                    count:"657"
                },{
                    name:"java",
                    desc:"Java 是一种可以撰写跨平台应用软件的面向对象的程序设计语言，是由 Sun Microsystems 公司于 1995 年 5",
                    count:"90087"
                },{
                    name:"react.js",
                    desc:"React (sometimes styled React.js or ReactJS) is an open-source JavaScript library for creating us..",
                    count:"21646"
                },{
                    name:"css",
                    desc:"层叠样式表（英语：Cascading Style Sheets，简写CSS），又称串样式列表，由W3C定义和维护的标准，一种...",
                    count:"657"
                }
            ]
        }
    }
}
</script>
<style scoped>
.tag-container{
    width:100%;
    margin:15px auto;
}
.filter-container{
    width:1024px;
    height:140px;
    margin:0px auto;
}

.tag-box-container{
    width:1024px;
    margin:0px auto;

}
.tag-box-container::after{
  content:"";
  display:block;
  clear:both;
  height:0;
  visibility: hidden;
}

.tag-box{
    width:219px;
    border:1px solid #f1f3f5;
    padding:0px 10px;
    margin-right:20px;
    margin-bottom:20px;
    float:left;
    height:180px;
    background:#fff;
}
.tag-box:nth-child(4n){
    margin-right:0px;
}
.tag-box p{
    margin:12px 0px;
}

.tag-desc{
    font-size:14px;
    color:#666;
}

.tag-article-count{
    font-size:14px;
    color:#777;
}
.pagenation{
    width:1024px;
    text-align: center;
    margin:0px auto;
    padding:24px 0px;
}
</style>