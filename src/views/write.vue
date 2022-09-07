<template>
  <div class="wirte-container">
     <Toolbar
            style="border-bottom: 1px solid #eee"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
      />
      <Editor
          style="height: calc( 100% - 130px); overflow-y: hidden;border-bottom: 1px solid #ddd;"
          v-model="html"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="onCreated"
      />
      <div class="operate-box">
        <div style="float:left;">
          <el-select  size="small" placeholder="文章分类" style="float:left;width:120px;margin-left:4px;">
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
          <el-input type="text" size="small" placeholder="文章标题……" style="float:left;width:220px;margin-left:12px;"></el-input>

          <el-select v-model="value1" size="small" multiple placeholder="请选择" style="float:left;width:300px;margin-left:12px;">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <!-- <el-link style="font-size:12px;margin-right:16px;" type="default" :underline="false"> <strong style="color:#666;">#</strong>Vue2</el-link>
          <el-link style="font-size:12px;margin-right:16px;"  type="default" :underline="false"> <strong style="color:#666;">#</strong>MapBox GL </el-link> -->
        </div>
        <div style="float:right;margin:0px 12px;">
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
          options: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
         options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
            editor: null,
            html: '',
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
            this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
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
  width:1050px;
  height: calc( 100vh - 115px);
  background:#fff;
  margin:0px auto;
}
.operate-box{
  width:1050px;
  margin-top:4px;
  padding:10px 0px;
  height:30px;
  background:#fff;
}
::v-deep .el-input__inner{
  border-radius:0px;
  border:0px;
  border-bottom:1px solid #f1f1f1;
}
</style>