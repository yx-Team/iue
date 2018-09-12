<template>
<transition :name="messageAnimate">
<div class="iue-message-notice" :class="{'is-close':height===0}"  v-if="visible"  :style="{'height':height+'px'}">
    <div class="iue-message-notice__content" @mouseenter="clearTimer" @mouseleave="init">
        <i class="iue-message__icon" :class="typeIcon"></i>
        <i class="iue-message__close iue-icon-close" v-if="closeable" @click="handleClose"></i>
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
    watch:{
        // 监控是否关闭，关闭的时候监听动画结束，执行onTransitionEnd
        closed(val){
            if(val){
                // 页面动画执行完dom更新再销毁，不然页面会出现部分dom不销毁
                this.$nextTick(()=>{
                   this.destroyEle()
                })
                
            }
        },
        // 高度为0，执行close()
        height(val){
            if(val===0){
                this.close()
            }
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
                    this.height=0;
                }, this.duration*1000);
            }
        },
        handleClose(){
             this.height=0;
        },
        close(){
            this.clearTimer()
            if(typeof this.onClose === 'function'){
                this.onClose();
            }
            // this.closed=true;
            
        },
        // 动画结束，销毁事件，移除dom
        destroyEle(){
            this.visible=false;
            this.$destroy();
            console.log('end')
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
        transform-origin: 0 0;
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
        &.is-close{
            opacity: 0;
            height: 0;
            transform: translateY(-100%);
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
