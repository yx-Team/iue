<template>
    <div class="iue-row" :class="className" :style="rowStyle">
        <slot></slot>
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
        },
        gutter:{
            type:[String,Number],
            default:''
        }
    },
    computed:{
        className(){
            var className={
                [`${namespace}--flex`]:this.type
            }
            return className
        },
        rowStyle(){
            let gutter = this.gutter;
            if(gutter){
                gutter=Number(gutter);
                return [
                    {'marginLeft':-gutter/2+'px'},
                    {'marginRight':-gutter/2+'px'}
                ]
            }
            return [];
        }
    },
    mounted(){
        if(this.gutter){
            // 通过this.$children获取组件row里面的col子组件，循环设置col里面的gutter值
            this.$children.forEach(component=>{
                component.gutter=Number(this.gutter);
            })
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
.loop(@col) when (@col > 0) {
    .loop((@col - 1));
    // 网格
    .@{name-space}col-@{col}{
        float: left;
        width: (@col/24*100%);
    }
    // 偏移
    .@{name-space}col-offset-@{col}{
        margin-left: (@col/24*100%);
    }
}

.media(@col,@media) when (@col>0){
    .media((@col - 1),@media);
    .@{name-space}col-@{media}-@{col}{
        width: (@col/24*100%);
    }
}

@media screen and (max-width: 768px) {
   .media(24,xs);
}
@media screen and (min-width:768px) {
    .media(24,sm);
}
@media screen and (min-width: 992px) {
    .media(24,md);
}
@media screen and (min-width: 1200px) {
    .media(24,lg);
}
@media screen and (min-width: 1920px) {
    .media(24,xl);
}


</style>
