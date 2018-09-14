<template>
    <div class="iue-tabs__item" v-if="visibel"><slot></slot></div>
</template>

<script>
export default {
    name:'IueTabsItem',
    props:{
        label:[Number,String]
    },
    data(){
        return {
            name:this.label,
            visibel:false
        }
    },
    mounted(){
       
    }
}
</script>

<style lang="less">

</style>
