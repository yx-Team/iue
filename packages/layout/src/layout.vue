<template>
    <div class="iue-layout" :class="[className,{'has-sider':hasSider}]"><slot></slot></div>
</template>

<script>
export default {
    name:'IueLayout',
    props:{
        vertical:{
            type:Boolean,
            default:true
        }
    },
    computed:{
        className(){
            let className={
                'is-vertical':this.vertical
            }
            return className
        }
    },
    data(){
        return {
            hasSider:false
        }
    },
    mounted(){
        // 通过检测slot子组件里面是否有sider,添加class:has-sider来布局
        this.$children.forEach(component=>{
            if(component.$options.name==='IueSider'){
                this.hasSider=true
            }
        })
    }
}
</script>

<style lang="less">
@import "../../assets/css/var";
@import "../../assets/css/mixins";
.@{name-space}layout{
    display: flex;
    flex:1;
    flex-direction: column;
    &.has-sider{
     flex-direction: row;
    }
}
.@{name-space}sider{
   width: 200px;
}
.@{name-space}content{
    flex:1;
}
</style>
