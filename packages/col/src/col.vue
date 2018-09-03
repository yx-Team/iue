<template>
    <div class="iue-col" :class="className"><slot></slot></div>
</template>

<script>
let namespace = "iue-";
export default {
    name:'IueCol',
    props:{
        span:{
            type:[String,Number],
            default:24
        },
        offset:{
            type:[String,Number],
            default:''
        }
    },
    computed:{
        className(){
            var className={
                [`${namespace}col-${this.span}`]:this.span,
                [`${namespace}col-offset-${this.offset}`]:this.offset
            }
            return className;
        }
    }
}
</script>

<style lang="less">

</style>
