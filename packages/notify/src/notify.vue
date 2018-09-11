<template>
<transition name="notify">
    <div class="iue-notify" :class="classList" v-if="visible" :style="eleStyle" @mouseenter="clearTimer" @mouseleave="init">
        <i class="iue-notify__icon" v-if="showIcon || customIcon" :class="iconClass"></i>
        <div class="iue-notify__content">
            <div class="iue-notify__title" v-if="title">
                {{title}}
                <div class="iue-notify__close" v-if="closeable" @click="close"><i class="iue-icon-close"></i></div>
            </div>
            <div class="iue-notify__desc" v-if="desc">
                <template>{{desc}}</template>
            </div>
            
        </div>
    </div>
</transition>    
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
            closeable:true,
            duration:1.5,
            visible:false,
            height:'auto',
            closed:false,
            timer:null
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
        },
        eleStyle(){
            return {
                height:this.height,
                paddingTop:this.height,
                paddingBottom:this.height
            }
        }
    },
    watch:{
        closed(val){
            if(val){
                this.$el.addEventListener('transitionend',this.destroyEle)
            }
        }
    },
    mounted(){
        this.visible=true;
        this.init();
    },
    methods:{
        init(){
            if(this.closed) return;
            this.$nextTick(()=>{
                this.height = this.$el.getBoundingClientRect().height;
            })
            if(this.duration>0){
                this.timer=setTimeout(() => {
                    this.close()
                }, this.duration*1000);
            }
        },
        destroyEle(){
            console.log(123123)
            this.$el.removeEventListener('transitionend',this.destroyEle)
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el)
        },
        close(){
           
            this.clearTimer();
            this.closed=true;
            this.height=0;
            
            
        },
        clearTimer(){
            clearTimeout(this.timer)
        }
    }
}
</script>

<style lang="less">
@import '../../assets/css/var';
@import '../../assets/css/mixins';
.iue-notify{
    position: relative;
    padding:15px 30px 15px 15px;
    line-height:1.15;
    font-size: 12px;
    border-radius: @alert-radius;
    vertical-align: middle;
    background:#fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    pointer-events: all;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all .3s;
    &-wrap{
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 999;
        width:320px;
        pointer-events: none;
    }
    &--info{
        .notify(@color-info)
    }
    &--success{
        .notify(@color-success)
    }
    &--warning{
        .notify(@color-warning)
    }
    &--danger{
        .notify(@color-danger)
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
