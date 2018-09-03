<template>
    <div>
        <div class="iue-row iue-row--flex" :class="className">
            <div class="iue-col-12">12</div>
            <div class="iue-col-12">12</div>
        </div>
        <div class="iue-row iue-row--flex" :class="className">
            <div class="iue-col-8">8</div>
            <div class="iue-col-8">8</div>
            <div class="iue-col-8">8</div>
        </div>
        <div class="iue-row iue-row--flex" :class="className">
            <div class="iue-col-6">6</div>
            <div class="iue-col-6">6</div>
            <div class="iue-col-6">6</div>
            <div class="iue-col-6">6</div>
        </div>
        
    </div>    
</template>

<script>
let namespace = "iue-";
export default {
    name:'IueRow',
    props:{
        type:{
            type:String,
            default:''
        }
    },
    computed:{
        className(){
            var className={
                [`${namespace}--flex`]:this.type
            }
            return className
        }
    }
}
</script>

<style lang="less">
@import "../../assets/css/var";
@import "../../assets/css/mixins";
.@{name-space}row{
    &--flex{
        display: flex;
        flex-direction: row;
        &>[class*='iue-col-']{
            border:1px solid #000;
        }
    }
}
// 网格 24 列 递归循环
.loop(24);
.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    .@{name-space}col-@{counter}{
        float: left;
        width: (@counter/24*100%);
    }
}
</style>
