<template>
    <div class="iue-header" :style="{height:height+'px'}"><slot></slot></div>
</template>

<script>
export default {
    name:'IueHeader',
    props:{
        height:{
            type:Number,
            default:64
        }
    }
}
</script>

<style lang="less">

</style>
