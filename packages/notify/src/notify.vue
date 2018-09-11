<template>
    <div class="iue-notify" :class="classList">
        <i class="iue-notify__icon" v-if="showIcon || customIcon" :class="iconClass"></i>
        <div class="iue-notify__content">
            <div class="iue-notify__title" v-if="title">
                {{title}}
                <div class="iue-notify__close" v-if="closeable" @click="close"><i class="iue-icon-close"></i></div>
            </div>
            <div class="iue-notify__desc" v-if="desc && !this.$slots.desc">
                <template>{{desc}}</template>
            </div>
            <div class="iue-notify__desc" v-if="this.$slots.desc">
                 <slot name="desc"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'IueAlert',
    data(){
        return{
            title:'通知',
            desc:'',
            showIcon:true,
            customIcon:'',
            type:'info',
            closeable:true
        }
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
                [`iue-notify--${this.type}`]:this.type,
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
.iue-notify{
    position: relative;
    padding:8px 30px 8px 15px;
    line-height:1.15;
    font-size: 12px;
    border-radius: @alert-radius;
    vertical-align: middle;
    background:#fff;
    box-shadow: 0 0 10px 0 rgba(255,255,255,0.15);
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
        .iue-notify__icon{
            font-size: 24px;
            margin-right: 20px;
        }
        .iue-notify__title{
            font-size: 14px;
            color: @color-title;
        }
        .iue-notify__desc{
            font-size: 12px;
            line-height: 1.5;
            color: @color-title;
        }
        
    }
}
</style>
