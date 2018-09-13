---
title: Notify
pageClass: page-content-wrap
---
# Notify 通知提醒

## 概述
轻量级的信息通知组件，在顶部右侧显示，并自动消失。有多种不同的通知状态可选择。

## 基础用法
最基本的通知提醒，默认在5s后消失,不写desc,默认以标题模式展示

<iue-button type="primary" @click="click01">显示普通提示</iue-button>
<iue-button type="primary" @click="click02">只显示标题</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>
~~~ js
<iue-button type="primary" @click="click01">显示普通提示</iue-button>
<iue-button type="primary" @click="click02">只显示标题</iue-button>

export default {
    name:'NoticeNotify',
    methods:{
        click01(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click02(){
            this.$Notify('通知提醒')
        }
    }
}
~~~

## 多种状态
提供四种状态模式：success/warning/danger

<iue-button type="info" @click="click03">信息</iue-button>
<iue-button type="success" @click="click04">成功</iue-button>
<iue-button type="warning" @click="click05">警告</iue-button>
<iue-button type="danger" @click="click06">错误</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>
~~~ js
<iue-button type="info" @click="click03">信息</iue-button>
<iue-button type="success" @click="click04">成功</iue-button>
<iue-button type="warning" @click="click05">警告</iue-button>
<iue-button type="danger" @click="click06">错误</iue-button>
export default {
    name:'NoticeNotify',
    methods:{
        click03(){
            this.$Notify.info({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click04(){
            this.$Notify.success({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click05(){
            this.$Notify.warning({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click06(){
            this.$Notify.danger({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        }
    }
}
~~~

## 定义时长
自定义显示时间

<iue-button type="default" @click="click07">自定义时长</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>

~~~ js
<iue-button type="default" @click="click07">自定义时长</iue-button>
export default {
    name:'NoticeNotify',
    methods:{
        click07(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                duration:1.5
            })
        }
    }
}
~~~
## 自定义图标
通过参数showIcon显示隐藏图标，通过参数customIcon自定义图标

<iue-button type="default" @click="click08">不显示图标</iue-button>
<iue-button type="default" @click="click09">自定义图标</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>

~~~ js
<iue-button type="default" @click="click08">不显示图标</iue-button>
<iue-button type="default" @click="click09">自定义图标</iue-button>
export default {
    name:'NoticeNotify',
    methods:{
        click08(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                showIcon:false
            })
        },
        click09(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                customIcon:'iue-icon-a-down-arrow'
            })
        }
    }
}
~~~

## 可关闭
默认显示一个带关闭按钮的提示框，通过传入一个对象，改变closeable的值，来设置关闭按钮显示隐藏

<iue-button type="default" @click="click10">显示关闭</iue-button>
<iue-button type="default" @click="click11">不显示关闭</iue-button>
<iue-button type="default"  @click="toggleCode" icon="code"></iue-button>

~~~ js
<iue-button type="default" @click="click10">显示关闭</iue-button>
<iue-button type="default" @click="click11">不显示关闭</iue-button>
export default {
    name:'NoticeNotify',
    methods:{
        click10(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                closeable:true
            })
        },
        click11(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                closeable:false
            })
        }
    }
}
~~~


## 全局方法
为 Vue.prototype 添加了全局方法 $Notify。因此在 vue instance 中可以采用本页面中的方式调用 Notify

## 单独引用
单独引入 Notify

<pre class="language-js">
import {$Notify} from '../../../packages'
$Notify('hello')
</pre>

##其他调用方式
除了可以通过this.$Notify(options)方式调用，还可以通过以下方式调用：

> this.$Notify.info(options)

> this.$Notify.success(options)

> this.$Notify.warning(options)

> this.$Notify.danger(options)

### Options

| 参数        | 说明                     | 类型        | 可选值                         |默认值       |
| ----------- |:-----------------------:| :------------:| :--------------------------:| :----------:|
| type        | 类型                    |    String   | info/success/warning/danger    |  info        |
| desc        | 内容 （必填）            |    String   | --                             |  --         |
| showIcon    | 是否显示图标             |    Boolean   | --                             |  true         |
| customIcon  | 自定义图标               |    String   | --                             |  --         |
| closeable   | 是否显示关闭按钮          |    Boolean  | --                             |  false        |
| duration    | 持续时间                 |    Number   | --                             |  5s        |
| onClose     | 关闭Notify的回调函数     |    Function   | --                             |  --      |


### 方法
| 事件        | 说明                     |
| ----------- |:-----------------------:|
| close        |  关闭当前的Notify    |
| closeAll     |  关闭所有的Notify    |

::: tip
调用this.$Notify或者$Notify会返回一个实例，要手动关闭，可以执行他的close()方法

关闭所有的Message,可以执行this.$Message.closeAll()
:::


<script>
import Vue from 'vue'
import Iue from '../../../packages'
Vue.use(Iue)
export default {
    name:'NoticeNotify',
    methods:{
        click01(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click02(){
            this.$Notify('通知提醒')
        },
        click03(){
            this.$Notify.info({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click04(){
            this.$Notify.success({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click05(){
            this.$Notify.warning({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click06(){
            this.$Notify.danger({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
            })
        },
        click07(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                duration:1.5
            })
        },
        click08(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                showIcon:false
            })
        },
        click09(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                customIcon:'iue-icon-a-down-arrow'
            })
        },
        click10(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                closeable:true
            })
        },
        click11(){
            this.$Notify({
                title:'通知',
                desc:'通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容',
                closeable:false
            })
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

</style>