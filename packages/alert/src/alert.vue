<template>
    <div class="iue-alert" :class="'iue-alert--'+type">
        <i class="iue-alert__icon" :class="'iue-icon-'+icon"></i>
        <div class="iue-alert__content">
            <div class="iue-alert__title" v-if="title">{{title}}</div>
            <div class="iue-alert__desc" v-if="desc">{{desc}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'IueAlert',
    props:{
        title:String,
        desc:String,
        icon:String,
        type:{
            type:String,
            default:'info',
            validator(val){
                return ['info','success','warning','danger'].contains(val)
            }
        }
    }
}
</script>

<style lang="less">
@import '../../assets/css/var';
.iue-alert{
    padding:8px 15px;
    &--info{
        background:mix(@color-white,@color-info,30%);
        border:1px solid @color-info;
        .iue-alert__icon{
            color: @color-info;
        }
    }
    &__icon{
        font-size: 24px;
    }
}
</style>
