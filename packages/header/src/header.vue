<template>
    <div class="iue-header" :style="{height:height}"><slot></slot></div>
</template>

<script>
export default {
    name:'IueHeader',
    props:{
        height:{
            type:String,
            default:'64px'
        }
    }
}
</script>

<style lang="less">

</style>
