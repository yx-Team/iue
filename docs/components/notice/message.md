---
title: Message
---
# Message 全局提示

<iue-button type="primary" @click="click01">message</iue-button>


<script>
import Vue from 'vue'
import Iue from '../../../packages'
Vue.use(Iue)
export default {
    name:'NoticeMessage',
    methods:{
        click01(){
           console.log('01')
           this.$Message('提示信息2')
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