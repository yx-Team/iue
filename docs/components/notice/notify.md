---
title: Notify
pageClass: page-content-wrap
---
# Notify 通知提醒

## 概述
轻量级的信息通知组件，在顶部右侧显示，并自动消失。有多种不同的通知状态可选择。

## 普通提示
最基本的通知提醒，默认在1.5s后消失

<iue-button type="primary" @click="click01">显示普通提示</iue-button>

<script>
import Vue from 'vue'
import Iue from '../../../packages'
Vue.use(Iue)
export default {
    name:'NoticeNotify',
    methods:{
        click01(){
            this.$Notify('通知提醒')
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