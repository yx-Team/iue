---
title: Message
pageClass: page-content-wrap
---
# Message 全局提示

## 概述
轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

## 普通提示
最基本的提示，默认在1.5s后消失

<iue-button type="primary" @click="click01">显示普通提示</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>
~~~ js
<iue-button type="primary" @click="click01">显示普通提示</iue-button>

export default {
    name:'NoticeMessage',
    methods:{
        click01(){
            this.$Message.info('普通提示');
        }
}
~~~

## 提示类型
不同的提示类型success warning danger


<iue-button type="success" @click="success">显示成功提示</iue-button>
<iue-button type="warning" @click="warning">显示警告提示</iue-button>
<iue-button type="danger" @click="danger">显示错误提示</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>
~~~ js

<iue-button type="success" @click="success">显示成功提示</iue-button>
<iue-button type="warning" @click="warning">显示警告提示</iue-button>
<iue-button type="danger" @click="danger">显示错误提示</iue-button>

export default {
    name:'NoticeMessage',
    methods:{
        success(){
            this.$Message.success('显示成功提示');
        },
        warning(){
            this.$Message.warning('显示警告提示');
        },
        danger(){
            this.$Message.danger('显示错误提示');
        }
}
~~~

## 自定义时长
显示一个10s的加载提示框,通过传入一个对象，改变duration的值，来设置显示时间

<iue-button @click="loading">显示加载提示</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>
~~~ js
<iue-button @click="loading">显示加载提示</iue-button>
export default {
    name:'NoticeMessage',
    methods:{
        loading(){
            this.$Message.loading({
                content:'10s加载提示',
                duration:10
            });
        }
}
~~~


## 可关闭
显示一个带关闭按钮的提示框，通过传入一个对象，改变closeable的值，来设置关闭按钮显示隐藏

<iue-button @click="closeMessage">带关闭的提示</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>
~~~ js
<iue-button @click="closeMessage">带关闭的提示</iue-button>
export default {
    name:'NoticeMessage',
    methods:{
        closeMessage(){
            this.$Message({
                content:'带关闭的提示',
                duration:10,
                closeable:true,
                onClose:function(){
                    this.$Message.info('关闭了');
                }
            });
        }
}
~~~
## 全局方法
为 Vue.prototype 添加了全局方法 $Message。因此在 vue instance 中可以采用本页面中的方式调用 Message

## 单独引用
单独引入 Message

<pre class="language-js">
import {$Message} from '../../../packages'
$Message.info('hello')
</pre>


### Attributes

| 参数        | 说明                     | 类型        | 可选值                         |默认值       |
| ----------- |:-----------------------:| :------------:| :--------------------------:| :----------:|
| type        | 类型                    |    String   | info/success/warning/danger/loading    |  info        |
| content     | 内容 （必填）            |    String   | --                             |  --         |
| closeable   | 是否显示关闭按钮          |    Boolean  | --                             |  false        |
| duration    | 持续时间                 |    Number   | --                             |  1.5s        |
| onClose     | 关闭Message的回调函数     |    Function   | --                             |  --      |



### 方法
| 事件        | 说明                     |
| ----------- |:-----------------------:|
| close        |  关闭当前的Message    |
| closeAll     |  关闭所有的Message    |

::: tip
调用this.$Message或者$Message会返回一个实例，要手动关闭，可以执行他的close()方法

关闭所有的Message,可以执行this.$Message.closeAll()
:::




<script>
import Vue from 'vue'
import Iue from '../../../packages'
Vue.use(Iue)
export default {
    name:'NoticeMessage',
    methods:{
        click01(){
            this.$Message.info('普通提示');
        },
        success(){
            this.$Message.success('显示成功提示');
        },
        warning(){
            this.$Message.warning('显示警告提示');
        },
        danger(){
            this.$Message.danger('显示错误提示');
        },
        loading(){
            this.$Message.loading({
                content:'10s加载提示',
                duration:10
            });
        },
        closeMessage(){
            this.$Message({
                content:'带关闭的提示',
                duration:10,
                closeable:true,
                onClose:function(){
                   this.$Message.info('关闭了');
                }
            });
        },
        clickAll(){
            this.$Message.closeAll();
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

.alert-demo{
    padding-top:20px;
    .iue-alert{
        margin-bottom:10px;
    }
}
</style>