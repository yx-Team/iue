---
title: Notify
pageClass: page-content-wrap
---
# Notify 通知提醒




<script>
import Vue from 'vue'
import Iue from '../../../packages'
Vue.use(Iue)
export default {
    name:'NoticeNotify',
    methods:{
        handleClose(){
            alert('点击了关闭按钮')
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