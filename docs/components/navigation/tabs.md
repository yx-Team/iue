---
title: Tabs
pageClass: page-content-wrap
---


# Tabs 选项卡

### 基础用法

基础的按钮用法

<div>
    <doc-panel>
        <iue-tabs>
            <iue-tabs-item label="系统配置">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
            <iue-tabs-item label="主题设置">主题设置主题设置主题设置主题设置</iue-tabs-item>
            <iue-tabs-item label="水印设置">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
        </iue-tabs>
    </doc-panel>
</div>

~~~ html
<doc-panel>
    <iue-tabs>
        <iue-tabs-item label="系统配置">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
        <iue-tabs-item label="主题设置">主题设置主题设置主题设置主题设置</iue-tabs-item>
        <iue-tabs-item label="水印设置">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
    </iue-tabs>
</doc-panel>
~~~

### v-model双向绑定

基础的按钮用法

<div>
    <doc-panel>
        <iue-tabs v-model="tabName">
            <iue-tabs-item label="系统配置" name="tab01">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
            <iue-tabs-item label="主题设置" name="tab02">主题设置主题设置主题设置主题设置</iue-tabs-item>
            <iue-tabs-item label="水印设置" name="tab03">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
        </iue-tabs>
    </doc-panel>
</div>

~~~ html
<doc-panel>
    <iue-tabs>
        <iue-tabs-item label="系统配置">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
        <iue-tabs-item label="主题设置">主题设置主题设置主题设置主题设置</iue-tabs-item>
        <iue-tabs-item label="水印设置">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
    </iue-tabs>
</doc-panel>
~~~

### disabled 禁用

基础的按钮用法

<div>
    <doc-panel>
        <iue-tabs>
            <iue-tabs-item label="系统配置">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
            <iue-tabs-item label="主题设置" :disabled="true">主题设置主题设置主题设置主题设置</iue-tabs-item>
            <iue-tabs-item label="水印设置">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
        </iue-tabs>
    </doc-panel>
</div>

~~~ html
<doc-panel>
    <iue-tabs>
        <iue-tabs-item label="系统配置">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
        <iue-tabs-item label="主题设置" :disabled="true">主题设置主题设置主题设置主题设置</iue-tabs-item>
        <iue-tabs-item label="水印设置">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
    </iue-tabs>
</doc-panel>
~~~

### animated 动画

基础的按钮用法

<div>
    <doc-panel>
        <iue-tabs :animated="true">
            <iue-tabs-item label="系统配置">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
            <iue-tabs-item label="主题设置">主题设置主题设置主题设置主题设置</iue-tabs-item>
            <iue-tabs-item label="水印设置">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
        </iue-tabs>
    </doc-panel>
</div>

~~~ html
<doc-panel>
    <iue-tabs>
        <iue-tabs-item label="系统配置">系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置系统配置</iue-tabs-item>
        <iue-tabs-item label="主题设置" :disabled="true">主题设置主题设置主题设置主题设置</iue-tabs-item>
        <iue-tabs-item label="水印设置">水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置水印设置</iue-tabs-item>
    </iue-tabs>
</doc-panel>
~~~

### Attributes

| 参数        | 说明                       | 类型       | 可选值       |默认值       |
| ----------- |:-----------------------:| :----------:| :------------:| :----------:|
| size        | 尺寸                    |    String   | large/small    |  --         |
| type        | 按钮类型                |    String   | defalut/info/success/warning/danger    |  default         |
| nativeType  | 原生按钮类型             |    String   | reset/submit    |  --         |
| circle      | 是否圆形按钮，最好只有图标 |    Boolean   | --    |  false        |
| round       | 是否圆角按钮             |    Boolean   | --    |  false        |
| icon        | 图标类名                 |    String   | --    |  --         |
| loading     | 是否加载中状态            |    Boolean   | --    |  --         |
| disabled    | 是否禁用按钮              |    Boolean   | --    |  --         |
| block       | 是否显示块状按钮          |    Boolean   | --    |  --         |

<script>
import Vue from 'vue'
import Iue from '../../../packages'
Vue.use(Iue)
export default {
    name:'BaseButton',
    data(){
        return{
            tabName:'tab01'
        }
    },
    watch:{
        tabName(val){
            console.log(val)
        }
    },
    methods:{
       
    }
}
</script>
<style lang="less">
    /* 示例间距 */
    .example-demo{
        margin:10px 0; 
        .iue-button{
            margin-bottom:5px;
        }
    }
</style>