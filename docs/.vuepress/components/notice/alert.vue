<template>
    <div class="alert-demo">
        <p>基础示例</p>
        <iue-alert type="info" title="info 提示的文案"></iue-alert>
        <iue-alert type="success" title="success 提示的文案"></iue-alert>
        <iue-alert type="warning" title="warning 提示的文案"></iue-alert>
        <iue-alert type="danger" title="danger 提示的文案"></iue-alert>
        <p>带描述示例</p>
        <iue-alert type="info" title="info 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="success" title="success 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="warning" title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="danger" title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <p>带图标的警告框</p>
        <iue-alert type="info" icon="exclamation-circle" title="info 提示的文案"></iue-alert>
        <iue-alert type="success" icon="check-circle" title="success 提示的文案"></iue-alert>
        <iue-alert type="warning" icon="exclamation-circle" title="warning 提示的文案"></iue-alert>
        <iue-alert type="danger" icon="close-circle" title="danger 提示的文案"></iue-alert>
        <p>带图标带描述示例</p>
        <iue-alert type="info" icon="exclamation-circle-o" title="info 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="success"  icon="check-circle-o" title="success 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="warning" icon="exclamation-circle-o" title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="danger" icon="close-circle-o" title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <p>可关闭的示例</p>
        <iue-alert type="info" closeable @close="handleClose" title="info 提示的文案"></iue-alert>
        <iue-alert type="warning" closeable title="warning 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="success" closeable icon="check-circle" title="success 提示的文案"></iue-alert>
        <iue-alert type="info" close-text="关闭" icon="check-circle" title="info 自定义关闭按钮文字"></iue-alert>
        <iue-alert type="danger" closeable icon="close-circle-o" title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
        <iue-alert type="danger" close-text="关闭" icon="close-circle-o" title="danger 提示的文案" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></iue-alert>
    </div>
</template>

<script>
import Vue from 'vue'
import Iue from '../../../../packages/'
Vue.use(Iue)
export default {
    name:'NoticeAlert',
    methods:{
        handleClose(){
            alert('点击了关闭按钮')
        }
    }
}
</script>

<style>

</style>
