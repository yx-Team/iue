---
title: Button
pageClass: page-content-wrap
---


# Button 按钮

## 基础用法
基础的按钮用法

<div class="example-demo">
    <iue-button @click="btnHandle">默认</iue-button>
    <iue-button type="primary">主按钮</iue-button>
    <iue-button type="dashed">虚线</iue-button>
    <iue-button type="text">文本</iue-button>
    <iue-button type="info">Info</iue-button>
    <iue-button type="success">Success</iue-button>
    <iue-button type="warning">Warning</iue-button>
    <iue-button type="danger">Danger</iue-button>
</div>

<iue-button type="default" block  @click="toggleCode" icon="code">代码</iue-button>

~~~ html
<iue-button @click="btnHandle">默认</iue-button>
<iue-button type="primary">主按钮</iue-button>
<iue-button type="dashed">虚线</iue-button>
<iue-button type="text">文本</iue-button>
<iue-button type="info">Info</iue-button>
<iue-button type="success">Success</iue-button>
<iue-button type="warning">Warning</iue-button>
<iue-button type="danger">Danger</iue-button>
~~~

## 禁用状态
按钮不可以点击

<div class="example-demo">
        <iue-button disabled>默认</iue-button>
        <iue-button type="primary" disabled>主按钮</iue-button>
        <iue-button type="dashed" disabled>虚线</iue-button>
        <iue-button type="text" disabled>文本</iue-button>
        <iue-button type="info" disabled>Info</iue-button>
        <iue-button type="success" disabled>Success</iue-button>
        <iue-button type="warning" disabled>Warning</iue-button>
        <iue-button type="danger" disabled>Danger</iue-button>
    </div>
<iue-button type="default" block  @click="toggleCode" icon="code">代码</iue-button>

~~~ html
<iue-button disabled>默认</iue-button>
<iue-button type="primary" disabled>主按钮</iue-button>
<iue-button type="dashed" disabled>虚线</iue-button>
<iue-button type="text" disabled>文本</iue-button>
<iue-button type="info" disabled>Info</iue-button>
<iue-button type="success" disabled>Success</iue-button>
<iue-button type="warning" disabled>Warning</iue-button>
<iue-button type="danger" disabled>Danger</iue-button>
~~~


## 图标按钮
图标按钮有较强的识别性

<div class="example-demo">
        <iue-button icon="search" size="large" circle></iue-button>
        <iue-button icon="search" circle></iue-button>
        <iue-button icon="search" size="small" circle></iue-button>
        <iue-button icon="search" type="primary" round disabled>主按钮</iue-button>
        <iue-button icon="search" type="dashed" round>虚线</iue-button>
        <iue-button icon="search" type="info" round>Info</iue-button>
        <iue-button icon="search" type="success" round>Success</iue-button>
        <iue-button icon="search" type="warning" round>Warning</iue-button>
        <iue-button icon="search" type="danger" round>Danger</iue-button>
    </div>
<iue-button type="default" block  @click="toggleCode" icon="code">代码</iue-button>

~~~ html
<iue-button icon="search" size="large" circle></iue-button>
<iue-button icon="search" circle></iue-button>
<iue-button icon="search" size="small" circle></iue-button>
<iue-button icon="search" type="primary" round disabled>主按钮</iue-button>
<iue-button icon="search" type="dashed" round>虚线</iue-button>
<iue-button icon="search" type="info" round>Info</iue-button>
<iue-button icon="search" type="success" round>Success</iue-button>
<iue-button icon="search" type="warning" round>Warning</iue-button>
<iue-button icon="search" type="danger" round>Danger</iue-button>
~~~

::: tip
加了属性circle的组件最好不要带文字，只要图标
:::

## 加载按钮
在按钮上显示加载状态

<div class="example-demo">
        <iue-button  loading type="primary" round>加载中...</iue-button>
    </div>
<iue-button type="default" block  @click="toggleCode" icon="code">代码</iue-button>

~~~ html
 <iue-button  loading type="primary" round>加载中...</iue-button>
~~~


## 不同尺寸按钮
提供三种大小按钮  larger default small 

<div class="example-demo">
        <iue-button size="large">大型按钮</iue-button>
        <iue-button >默认按钮</iue-button>
        <iue-button size="small">小型按钮</iue-button>
    </div>
<iue-button type="default" block  @click="toggleCode" icon="code">代码</iue-button>

~~~ html
<iue-button size="large">大型按钮</iue-button>
<iue-button >默认按钮</iue-button>
<iue-button size="small">小型按钮</iue-button>
~~~

## 按钮组

<div class="example-demo">
        <iue-button-group>
                <iue-button type="primary" icon="left-arrow">上一页</iue-button>
                <iue-button type="primary">下一页 <iue-icon type="right-arrow"></iue-icon></iue-button>
        </iue-button-group>
        <iue-button-group>
                <iue-button icon="like-o" type="info"></iue-button>
                <iue-button icon="apple-o" type="info"></iue-button>
                <iue-button icon="collection-o" type="info"></iue-button>
        </iue-button-group>
        <iue-button-group>
                <iue-button icon="left-arrow">上一页</iue-button>
                <iue-button>下一页 <iue-icon type="right-arrow"></iue-icon></iue-button>
        </iue-button-group>
    </div>
<iue-button type="default" block  @click="toggleCode" icon="code">代码</iue-button>

~~~ html
<iue-button-group>
        <iue-button type="primary" icon="left-arrow">上一页</iue-button>
        <iue-button type="primary">下一页 <iue-icon icon="right-arrow"></iue-icon></iue-button>
</iue-button-group>
<iue-button-group>
        <iue-button icon="like-o" type="info"></iue-button>
        <iue-button icon="apple-o" type="info"></iue-button>
        <iue-button icon="collection-o" type="info"></iue-button>
</iue-button-group>
<iue-button-group>
        <iue-button icon="left-arrow">上一页</iue-button>
        <iue-button>下一页 <iue-icon icon="right-arrow"></iue-icon></iue-button>
</iue-button-group>
~~~
## 块状按钮

<div class="example-demo">
        <iue-button size="large" icon="like" type="info" block>大型按钮</iue-button>
        <iue-button type="success" icon="like" block>默认按钮</iue-button>
        <iue-button size="small" icon="like" type="warning" block>小型按钮</iue-button>
    </div>
<iue-button type="default" block  @click="toggleCode" icon="code">代码</iue-button>

~~~ html
<iue-button size="large" icon="like" type="info" block>大型按钮</iue-button>
<iue-button type="success" icon="like" block>默认按钮</iue-button>
<iue-button size="small" icon="like" type="warning" block>小型按钮</iue-button>
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
    methods:{
         btnHandle() {
            alert("点击了按钮");
            },
        toggleCode(e){
            var next = e.currentTarget.nextElementSibling;
            console.log(e.currentTarget.nextElementSibling.style.display)
            if(next.style.display=='none' || next.style.display==''){
                next.style.display='block'
            }else{
                 next.style.display='none'
            }
        }
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