<template>
    <div class="code-panel">
        <div class="code-panel-content">
            <slot></slot>
        </div>
        <div class="code-panel-content-code " :class="{'is-active':show}" ref="code">

        </div>
        <div class="code-panel-ft" @click="code">
            <iue-button block :icon="iconName">{{codeText}}</iue-button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Iue from '../../../packages';
Vue.use(Iue);
export default {
    name:'code-panel',
    data(){
        return{
            show:false
        }
    },
    computed:{
        codeText(){
            return this.show?'隐藏代码':'显示代码';
        },
        iconName(){
            return this.show?'up-arrow':'down-arrow';
        }
    },
    mounted(){
        this.$refs.code.appendChild(this.$el.parentNode.nextElementSibling)
    },
    methods:{
        code(){
            this.show=!this.show;
        }
    }
}
</script>

<style lang="less">
@import '../../../packages/assets/css/index';
.code-panel{
    
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 4px;
    &-content{
        padding: 20px;
        .iue-button{
            margin-bottom: 10px;
        }
        .iue-alert{
            margin-bottom:10px;
        }
    }
    .is-active div[class*='language-']{
        display: block!important;
        margin: 0;
        border-radius: 0;
        pre{
             margin: 0;
        border-radius: 0;
        }
    }
    &-ft{
        position: relative;
        z-index: 2;
        margin-left: -1px;
        margin-right: -1px;
        margin-bottom: -1px;
        button{
            position: relative;
            border-color: #eee;
            border-left: -2px;
            border-right: -20px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
}
</style>