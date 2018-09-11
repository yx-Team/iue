<template>
<transition :name="messageAnimate">
<div class="iue-message-notice"  v-if="visible"  :style="{'height':height+'px'}">
    <div class="iue-message-notice__content" @mouseenter="clearTimer" @mouseleave="init">
        <i class="iue-message__icon" :class="typeIcon"></i>
        <i class="iue-message__close iue-icon-close" v-if="closeable" @click="close"></i>
        <span class="iue-message__text">{{content}}</span>
        
    </div>    
</div> 
</transition> 
 
</template>

<script>
export default {
    name:'IueMessage',
    data(){
        return{
            type:'info',//类型,
            closeable:false,//关闭按钮
            content:'',//文本内容
            duration:1.5,//持续时间
            onClose:null,
            /////////////////////////////////
            messageAnimate:'message-slider-top',//移动动画
            visible:false,//可见
            closed:false,//关闭状态
            height:60,//高度
            timer:null,//定时器
        }
    },
    watch:{
        // 监控是否关闭，关闭的时候监听动画结束，执行onTransitionEnd
        closed(val){
            if(val){
                this.$el.addEventListener('transitionend',this.onTransitionEnd)
            }
        }
    },
    computed:{
        typeIcon(){
            let icon='';
            switch(this.type){
                    case 'info':
                    icon="iue-icon-exclamation-circle iue-message__icon--info"
                    break;
                    case 'success':
                    icon="iue-icon-check-circle iue-message__icon--success"
                    break;
                    case 'warning':
                    icon="iue-icon-exclamation-circle iue-message__icon--warning"
                    break;
                    case 'danger':
                    icon="iue-icon-close-circle iue-message__icon--danger"
                    break;
                    case 'loading':
                    icon="iue-icon-loading"
                    break;
                    default:
                    icon="iue-icon-exclamation-circle iue-message__icon--info"
                    break;
                }
            return icon
        }
    },
    mounted(){
        this.visible=true;
        this.init();
        
    },
    methods:{
        init(){
            if(this.closed) return
            // 延迟关闭
            if( this.duration > 0) {
                this.timer=setTimeout(() => {
                    this.close()
                }, this.duration*1000);
            }
        },
        close(){
            this.clearTimer()
            if(typeof this.onClose === 'function'){
                this.onClose();
            }
            this.closed=true;
            this.height=0;
        },
        // 动画结束，销毁事件，移除dom
        onTransitionEnd(){
            this.$el.removeEventListener('transitionend',this.onTransitionEnd)
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el)
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
@import '../../assets/css/animate';
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
        position: relative;
        pointer-events: none;
        transform-origin: center top;
        overflow: hidden;
        transition: all .3s;
        &__content{
            position: relative;
            display: inline-block;
            margin-top: 10px;
            padding:10px 15px;
            background: #fff;
            line-height: 18px;
            text-align: center;
            font-size: 14px;
            border-radius: @message-radius;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
            pointer-events: all;
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
        &--success{
            color: @color-success
        }
        &--warning{
            color: @color-warning
        }
        &--danger{
            color: @color-danger
        }
    }
    &__close{
        position: absolute;
        right: 10px;
        top: 50%;
        z-index: 2;
        transform: translateY(-50%);
        color: #999;
        transition: color .3s;
        cursor: pointer;
        &:hover{
            color: #666;
        }
        & ~ .iue-message__text{
            padding-right: 100px;
        }
    }
    &__text{
        font-size: 14px;
        color: @color-content;
    }
    .iue-icon-loading {
        animation: spin 1s linear infinite;
        color: #999;
        display: block;
        float: left;
    }

}
</style>
