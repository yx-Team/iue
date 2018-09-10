---
title: Message
---
# Message 全局提示

<iue-button type="primary" @click="click01">message</iue-button>
<iue-button type="primary" @click="clickAll">关闭全部</iue-button>
<script>
import Vue from 'vue'
import Iue from '../../../packages'
import { $Message } from '../../../packages'

Vue.use(Iue)
export default {
    name:'NoticeMessage',
    methods:{
        click01(){
            $Message.warning('提示信息message')
           this.$Message({
               content:'提示信息',
               type:'success',
               closeable:true,
               onClose:function(){
                   alert(1)
               }
           })
           this.$Message({
               content:'提示信息2',
               type:'info',
               duration:4
           })
           this.$Message({
               content:'提示信息3',
               type:'warning'
           })
           this.$Message({
               content:'提示信息4',
               type:'danger'
           })
           var loading = this.$Message({
               content:'加载中...',
               type:'loading',
               duration:10
           })
           setTimeout(()=>{
               loading.handleClose()
           },5000)
        },
        clickAll(){
            this.$Message.closeAll()
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