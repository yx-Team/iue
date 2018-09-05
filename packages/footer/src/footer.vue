<template>
    <div class="iue-footer" :style="{height:height+'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'IueFooter',
    props:{
        height:{
            type:Number,
            default:60
        }
    }
}
</script>

<style lang="less">

</style>
