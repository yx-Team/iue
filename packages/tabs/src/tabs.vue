<template>
    <div class="iue-tabs">
        <div class="iue-tabs__hd">
            <div class="iue-tabs__menu" 
                :class="{'is-active':isActive===index}" 
                v-for="(item,index) in menuList" 
                @click="handleMenu(item,index)"
                :key="index">
                {{item.label}}
            </div>
        </div>
        <div class="iue-tabs__bd">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'IueTabs',
    data(){
        return{
            menuList:[],
            isActive:0
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            // 创建tabs menu 数据
            let menuList = [];
            this.$children.forEach((vm,index)=>{
                var label = vm.$options.propsData.label
                menuList.push({
                    label:label
                })
                // 根据选中索引，显示tab内容
                if(this.isActive===index){
                    vm.visibel=true
                }
            })
            this.menuList = menuList
        },
        // 点击菜单，显示对应的内容
        handleMenu(item,index){
            this.isActive=index
            this.$children.forEach(vm=>{
               vm.visibel=false
                if(vm.label===this.menuList[this.isActive].label){
                    vm.visibel=true
                }
               
            })
        }
    }

}
</script>

<style lang="less">
@import '../../assets/css/var';
@import '../../assets/css/mixins';
.iue-tabs{

    &__hd{
        .clearfix();
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
    }
    &__menu{
        position: relative;
        float: left;
        padding:0 20px;
        line-height: 40px;
        height: 40px;
        margin-bottom: -1px;
        cursor: pointer;
        &.is-active:after{
            content:'';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0px;
            z-index: 1;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border:1px solid #e6e6e6;
            border-bottom-color: #fff;
        }
    }
    &__item{
        padding: 10px 0;
    }
}
</style>
