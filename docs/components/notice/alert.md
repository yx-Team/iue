---
title: Alert
---
# Alert 警告提示

## 概述
静态地呈现一些警告信息，可手动关闭。




## 基础示例
<div class="alert-demo">
    <iue-alert type="info" title="info 提示的文案"></iue-alert>
    <iue-alert type="success" title="success 提示的文案"></iue-alert>
    <iue-alert type="warning" title="warning 提示的文案"></iue-alert>
    <iue-alert type="danger" title="danger 提示的文案"></iue-alert>
</div>

~~~html
<iue-alert type="info" title="info 提示的文案"></iue-alert>
<iue-alert type="success" title="success 提示的文案"></iue-alert>
<iue-alert type="warning" title="warning 提示的文案"></iue-alert>
<iue-alert type="danger" title="danger 提示的文案"></iue-alert>
~~~
## 图标示例
<div class="alert-demo">
    <iue-alert type="info" show-icon title="info 提示的文案"></iue-alert>
    <iue-alert type="success" show-icon title="success 提示的文案"></iue-alert>
    <iue-alert type="warning" show-icon title="warning 提示的文案"></iue-alert>
    <iue-alert type="danger" show-icon  title="danger 提示的文案"></iue-alert>
    <iue-alert type="info" show-icon custom-icon="iconfont iue-icon-frown" title="自定义图标"></iue-alert>
</div>

~~~html
<iue-alert type="info" show-icon title="info 提示的文案"></iue-alert>
<iue-alert type="success" show-icon title="success 提示的文案"></iue-alert>
<iue-alert type="warning" show-icon title="warning 提示的文案"></iue-alert>
<iue-alert type="danger" show-icon  title="danger 提示的文案"></iue-alert>
<iue-alert type="info" show-icon custom-icon="iconfont iue-icon-frown" title="自定义图标"></iue-alert>
~~~
## 带描述示例
<div class="alert-demo">
    <iue-alert type="info" title="info 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="success" title="success 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="warning" title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="danger" title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="danger" title="danger 提示的文案">
        <span slot="desc">文字说明文字说明<b>文字说明</b>文字说明文字说明文字说明</span>
    </iue-alert>
</div>

~~~html
<iue-alert type="info" title="info 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="success" title="success 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="warning" title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="danger" title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<!-- slot desc -->
<iue-alert type="danger" title="danger 提示的文案">
    <span slot="desc">文字说明文字说明<b>文字说明</b>文字说明文字说明文字说明</span>
</iue-alert>
~~~
## 带描述图标示例
<div class="alert-demo">
    <iue-alert type="info" show-icon title="info 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="success" show-icon  title="success 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="warning" show-icon  title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="danger" show-icon title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
</div>

~~~html
<iue-alert type="info" show-icon title="info 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="success" show-icon  title="success 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="warning" show-icon  title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="danger" show-icon title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
~~~
## 带关闭的示例
<div class="alert-demo">
    <iue-alert type="info" closeable @close="handleClose" title="info 提示的文案"></iue-alert>
    <iue-alert type="warning"  closeable  show-icon title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="success" closeable  title="success 提示的文案"></iue-alert>
    <iue-alert type="info" close-text="关闭" title="info 自定义关闭按钮文字"></iue-alert>
    <iue-alert type="danger" closeable title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    <iue-alert type="danger" close-text="关闭" show-icon  title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
</div>

~~~js

<iue-alert type="info" closeable @close="handleClose" title="info 提示的文案"></iue-alert>
<iue-alert type="warning" closeable title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="success" closeable  title="success 提示的文案"></iue-alert>
<iue-alert type="info" close-text="关闭" title="info 自定义关闭按钮文字"></iue-alert>
<iue-alert type="danger" closeable title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
<iue-alert type="danger" close-text="关闭" title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>


export default {
    name:'NoticeAlertClose',
    methods:{
        handleClose(){
            alert('点击了关闭按钮')
        }
    }
}
~~~


### Attributes

| 参数        | 说明                     | 类型        | 可选值                         |默认值       |
| ----------- |:-----------------------:| :------------:| :--------------------------:| :----------:|
| type        | 类型                    |    String   | info/success/warning/danger    |  info        |
| title       | 标题 （必填）            |    String   | --                             |  --         |
| desc        | 描述，辅助性文字         |    String    | --                             |  --         |
| icon-show   | 是否显示图标             |    Boolean   | --                            |  false        |
| customIcon  | 自定义图标               |    String    | --                            |  --        |
| closeable   | 是否显示关闭按钮          |    Boolean  | --                             |  false        |
| closeText   | 自定义关闭文字            |    Number   | --                             |  --        |

### Event
| 事件        | 说明                     | 回调函数        | 
| ----------- |:-----------------------:| :------------:|
| close        | 关闭Alert触发的事件     |   --   |


<script>
import Vue from 'vue'
import Iue from '../../../packages'
Vue.use(Iue)
export default {
    name:'NoticeAlertClose',
    methods:{
        handleClose(){
            alert('点击了关闭按钮')
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