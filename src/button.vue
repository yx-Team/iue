<template>
    <button class="iue-button" :class="className">
        <iue-icon :icon="icon" v-if="icon"></iue-icon>
        <span><slot></slot></span>
    </button>
</template>

<script>
let namespace='iue-'
export default {
    name:'iue-button',
    props:{
        type:{
            type:String,
            default:'default'
        },
        circle:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:''
        }
    },
    computed:{
        className(){
            let className = '';
            if(this.type){
                className+=`${namespace}button--${this.type} `
            }
            if(this.circle){
                className+=`${namespace}button--circle `
            }
            return className
        }
    }
}
</script>

<style lang="less">
@import './assets/css/var';
@import './assets/css/mixins';
.@{name-space}button{
    display: flex;
    align-items: center;
    display: inline-block;
    height: 32px;
    line-height: 1.5;
    font-size: 14px;
    padding: 0 15px;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    vertical-align: middle;
    transition: all .3s ease;
    background: @color-white;
    [class*="iue-icon-"],.iconfont{
        vertical-align: middle;
    }
    span{
       vertical-align: middle;
    }
    &:focus{
        box-shadow: 0 0 0 2px #d5e8fc;
    }
    &--default,&--dashed,&--text{
        background-color: @color-white;
        border-color:@color-border;
        color: @color-content;
        &:hover{
            border-color:@color-primary-light5;
            color: @color-primary-light3;
        }
        &:focus{
            border-color:@color-primary-light;
            color: @color-primary-light;
        }
        &:active{
            border-color:@color-primary-light;
        }
    }
    &--dashed{
        border-style: dashed;
    }
    &--text{
        border-color: transparent;
    }
    &--primary{
        .button(@color-primary);
    }
    &--info{
        .button(@color-info);
    }
    &--success{
        .button(@color-success);
    }
    &--warning{
        .button(@color-warning);
    }
    &--danger{
        .button(@color-danger);
    }
    &--circle{
        border-radius: 50px;
    }
}
</style>
