<template>
    <div class="iue-footer" :style="{height:height}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'IueFooter',
    props:{
        height:{
            type:String,
            default:'60px'
        }
    }
}
</script>

<style lang="less">

</style>
