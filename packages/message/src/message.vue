<template>
<div class="iue-message-notice">
    <div class="iue-message-notice__content">
        <i class="iue-message__icon iue-icon-exclamation-circle iue-message__icon--info"></i>
        <span class="iue-message__text">{{content}}</span>
    </div>    
</div>    
</template>

<script>
export default {
    name:'IueMessage',
    data(){
        return{
            content:''
        }
    }
}
</script>

<style lang="less">
@import '../../assets/css/var';
@import '../../assets/css/mixins';
.iue-message{
    position: fixed;
    left: 0;
    right: 0;
    top: 24px;
    z-index:999;
    width: 100%;
    text-align: center;
    pointer-events: none;
    &-notice{
        pointer-events: none;
        &__content{
            display: inline-block;
            padding:10px 15px;
            background: #fff;
            line-height: 18px;
            text-align: center;
            font-size: 14px;
            border-radius: @message-radius;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
            transition: all .3s;
        }
        
    }
    &__icon{
        &[class*=iue-icon-]{
            font-size: 14px;
        }
        margin-right: 10px;
        &--info{
            color: @color-info
        }
    }
    &__text{
        font-size: 14px;
        color: @color-content;
    }
}
</style>
