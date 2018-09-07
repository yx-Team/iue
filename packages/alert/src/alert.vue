<template>
    <div class="iue-alert" :class="classList">
        <i class="iue-alert__icon" v-if="showIcon || customIcon" :class="iconClass"></i>
        <div class="iue-alert__content">
            <div class="iue-alert__title" v-if="title">
                {{title}}
                <div class="iue-alert__close" v-if="closeable" @click="close"><i class="iue-icon-close"></i></div>
                <div class="iue-alert__close is-closetext" v-if="closeText" @click="close">{{closeText}}</div>
            </div>
            <div class="iue-alert__desc" v-if="desc && !this.$slots.desc">
                <template>{{desc}}</template>
            </div>
            <div class="iue-alert__desc" v-if="this.$slots.desc">
                 <slot name="desc"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'IueAlert',
    props:{
        title:String,
        desc:String,
        showIcon:Boolean,
        customIcon:String,
        type:{
            type:String,
            default:'info',
            validator(val){
                return ['info','success','warning','danger'].includes(val)
            }
        },
        closeable:Boolean,
        closeText:String
    },
    computed:{
        iconClass(){
            let iconClass=[];
            if(this.showIcon && !this.customIcon){
                let icon;
                switch(this.type){
                    case 'info':
                    icon="iue-icon-exclamation-circle"
                    break;
                    case 'success':
                    icon="iue-icon-check-circle"
                    break;
                    case 'warning':
                    icon="iue-icon-exclamation-circle"
                    break;
                    case 'danger':
                    icon="iue-icon-close-circle"
                    break;
                    default:
                    icon="iue-icon-exclamation-circle"
                    break;
                }
                iconClass.push(icon)
            }
            if(this.customIcon){
                iconClass.push(this.customIcon)
            }
            return iconClass
        },
        classList(){
            let list = {
                [`iue-alert--${this.type}`]:this.type,
                ['is-desc']:this.desc
            }
            return list
        }
    },
    methods:{
        close(e){
            // 触发关闭事件
            this.$emit('close',e)
            // 销毁实例
            this.$destroy();
            // 移除dom
            this.$el.remove();
            
        }
    }
}
</script>

<style lang="less">
@import '../../assets/css/var';
@import '../../assets/css/mixins';
.iue-alert{
    position: relative;
    padding:8px 30px 8px 15px;
    line-height:1.15;
    font-size: 12px;
    border-radius: @alert-radius;
    vertical-align: middle;
    &--info{
        .alert(@color-info)
    }
    &--success{
        .alert(@color-success)
    }
    &--warning{
        .alert(@color-warning)
    }
    &--danger{
        .alert(@color-danger)
    }
    &__icon{
        &[class*=iue-icon-]{
            font-size: 12px;
            margin-right: 8px;
            vertical-align: inherit;
        }
        
    }
    &__content{
        display: inline-block;
    }
    &__title{
        font-size: 12px;
        color: #434E66
    }
    &__desc{
        font-size: 12px;
        padding-top: 10px;
        color: #434E66
    }
    &__close{
        position: absolute;
        right: 10px;
        top: 6px;
        font-size: 12px;
        color: #999;
        cursor: pointer;
        &.is-closetext{
            top: 8px;
        }
    }
    &.is-desc{
        width: 100%;
        display: inline-flex;
        padding:15px 15px;
        .iue-alert__icon{
            font-size: 24px;
            margin-right: 20px;
        }
        .iue-alert__title{
            font-size: 14px;
            color: @color-title;
        }
        .iue-alert__desc{
            font-size: 12px;
            line-height: 1.5;
            color: @color-title;
        }
        
    }
}
</style>
