<template>
    <div class="iue-row" :class="className">
        <slot></slot>
    </div>
    <!-- <div>
        <div class="iue-row" :class="className">
            <div class="iue-col-12">12</div>
            <div class="iue-col-12">12</div>
        </div>
        <div class="iue-row" :class="className">
            <div class="iue-col-8">8</div>
            <div class="iue-col-8">8</div>
            <div class="iue-col-8">8</div>
        </div>
        <div class="iue-row" :class="className">
            <div class="iue-col-6">6</div>
            <div class="iue-col-6">6</div>
            <div class="iue-col-6 iue-col-offset-6">6</div>
        </div>
        <div class="iue-row" :class="className">
            <div class="iue-col-4 iue-col-offset-4">4</div>
            <div class="iue-col-4 iue-col-offset-4">4</div>
            <div class="iue-col-4 iue-col-offset-4">4</div>
        </div>
        <div class="iue-row" :class="className">
            <div class="iue-col-8">8</div>
            <div class="iue-col-8">8</div>
            <div class="iue-col-8">8</div>
        </div>
    </div>     -->
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
    .clearfix();
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
    // 网格
    .@{name-space}col-@{counter}{
        float: left;
        width: (@counter/24*100%);
    }
    // 偏移
    .@{name-space}col-offset-@{counter}{
        margin-left: (@counter/24*100%);
    }
}
</style>
