<template>
  <div class="wirte-container">
    <Toolbar
            style="border-bottom: 1px solid #eee;border-top:1px solid #eee;position:fixed;top:60px;width:1024px;left:50%;margin-left:-512px;z-index:999;"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
      />

    <div style="witdh:904px;height:30px;border-bottom:1px solid #eee;padding:20px 0px;">
          <el-input type="text" size="mini" v-model="form.title" placeholder="文章标题……" style="float:left;width:780px;"></el-input>
          <span style="font-size:12px;line-height:30px;margin:12px;color:#777;">6/30字&nbsp;(标题5~30字)</span>
    </div>
     
      <Editor
          style="height: calc( 100% - 130px); overflow-y: hidden;border-bottom: 1px solid #eee;"
          v-model="form.content"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="onCreated"
      />
      <div class="article-info-container">
        <el-form ref="form" :model="form" label-width="100px" size="mini">
          <el-form-item label="封面图片：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              style="float:left;"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-input type="textarea"  v-model="form.title" placeholder="文章摘要……" style="float:left;width:600px;margin-left:20px;height:108px;"></el-input>
          </el-form-item>

          <el-form-item label="文章专栏：">
            <el-select  size="mini" v-model="form.cateId" placeholder="文章分类" >
              <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label">
                <el-option
                  v-for="item in group.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-option-group>
            </el-select>
          </el-form-item>
          <el-form-item label="文章标签：">
            <el-select v-model="form.tags" size="mini" multiple placeholder="请选择" style="">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布形式：">
            <el-radio-group v-model="form.resource" size="mini">
              <el-radio  label="仅自己可见"></el-radio>
              <el-radio  label="粉丝可见"></el-radio>
              <el-radio  label="全部可见"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="内容等级：">
            <el-radio-group v-model="form.level" size="mini">
              <el-radio  label="初级"></el-radio>
              <el-radio  label="中级"></el-radio>
              <el-radio  label="高级"></el-radio>
            </el-radio-group>
          </el-form-item>

        </el-form>
      </div>
      <div class="operate-box">
        <div style="float:right;color:#777;">
          <el-button type="default" size="small" round>保存文章</el-button>
          <el-button type="primary" size="small" round>发布文章</el-button>
        </div>
      </div>
  </div>

</template>
<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default Vue.extend({
    components: { Editor, Toolbar },
    data() {
        return {
          imageUrl:null,
          form:{
            cateId:null,
            title:"【MapBox GL】加载GeoJson cricle、line、fill、symbol图层",
            tags:[],
            state:null,
            content:null,
          },
          options: [{
            label: '前端开发',
            options: [{
              value: '1',
              label: 'JavaScript'
            }, {
              value: '2',
              label: 'CSS3'
            },{
              value: '3',
              label: 'Vue2'
            },{
              value: '4',
              label: 'Vue3'
            },{
              value: '5',
              label: 'MapBox'
            }]
          }, {
          label: '后端开发',
          options: [{
            value: 'Chengdu',
            label: '.Net Core'
          }, {
            value: 'Shenzhen',
            label: 'C#'
          }, {
            value: 'Guangzhou',
            label: 'JavaSE'
          }, {
            value: 'Dalian',
            label: 'SpringBoot'
          }]
        }],
         options2: [{
          value: '选项1',
          label: 'MapBoxGL'
        }, {
          value: '选项2',
          label: 'Vue'
        }, {
          value: '选项3',
          label: 'C#'
        }, {
          value: '选项4',
          label: 'Python'
        }, {
          value: '选项5',
          label: '爬虫'
        }],
        value1: [],
        value:null,
            editor: null,
            toolbarConfig: { },
            editorConfig: { placeholder: '请输入内容...' },
            mode: 'default', // or 'simple'
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
    },
    mounted() {
        // 模拟 ajax 请求，异步渲染编辑器
        setTimeout(() => {
            this.form.content = `一、图层操作
（一）图层加载
1、添加GeoJson 点（point）、线（line）、面（fill）、图标（symbol）数据
        天空地监测平台： 镇边界图
        费县智慧社区：社区边界、楼栋
2、添加WMS（Raster）地图服务 ：
        天空地监测 地图影像地图
3、添加MVT（Vector）矢量瓦片数据
        天空地监测平台：执法地图页面历史图斑数据
4、加载3D白膜地图数据
        临沭智慧城市 建筑物白膜数据加载
5、添加普通自定义图片Marker
        天空地监测平台：判读页面加载数据
6、添加HTML Element动态效果图标
        天空地监测大屏：最新上报点展示
7、背景图层加载
        天空地监测大屏：蓝色背景图层加载
（二）图层操作
1、获取图层
2、判断图层
3、移除图层
4、Image添加、判断、移除
二、数据操作
1、数据过滤（filter)
2、数据展示（exception表达式）
三、图层样式
1、layout
2、paint
四、地图控件
1、鼠标移入弹出特效
五、绘图编辑
1、使用mapbox-gl-draw插件 封装绘图插件
六、常见特效
1、城市建筑物白膜
2、3D行政区划地图
3、鼠标移入颜色高亮
4、图层元素不同色彩显示
5、叠加图层时移动缩放到图层所在范围
6、炫彩动画特效加载
`
        }, 1500)
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
})
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>

<style scoped>
.wirte-container{
  width:944px;
  padding:20px 40px;
  min-height: calc( 100vh - 132px);
  background:#fff;
  margin:0px auto;
  margin-top:83px;
}
.operate-box{
  width:944px;
  padding:0px 20px;
  height:30px;
  background:#fff;
}
::v-deep .el-input__inner{
  /* background:#f9f9f9; */
  border-radius:12px;
  /* border:0px;
  border-bottom:1px solid #f1f1f1; */
}

::v-deep .el-radio{
    margin-right:8px;
    font-size:12px;
}

::v-deep .el-radio__label{
  font-size:12px;
}

.article-info-container {
  width:984px;
  padding:20px 0px;
  height:360px;
  background:#ffffff;
  margin-top:30px;
}
/* 上传图片样式 */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 108px;
    line-height: 108px;
    text-align: center;
    border:1px dashed #ccc;
    border-radius:8px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>