<template>
    <div class="example-demo">

        <iue-layout>
            <iue-header>header</iue-header>
            <iue-content>content</iue-content>
            <iue-footer>footer</iue-footer>
        </iue-layout>

        <iue-layout>
            <iue-header>header</iue-header>
            <iue-layout>
                <iue-sider>sider</iue-sider>
                <iue-content>content</iue-content>
            </iue-layout>
            <iue-footer>footer</iue-footer>
        </iue-layout>

        <iue-layout>
            <iue-header>header</iue-header>
            <iue-layout>
                <iue-content>content</iue-content>
                <iue-sider>sider</iue-sider>
            </iue-layout>
            <iue-footer>footer</iue-footer>
        </iue-layout>

        <iue-layout :vertical="false">
            <iue-sider>sider</iue-sider>
            <iue-layout>
                <iue-header>header</iue-header>
                <iue-content>content</iue-content>
                <iue-footer>footer</iue-footer>
            </iue-layout>
        </iue-layout>

    </div>
</template>

<script>
import Vue from 'vue';
import Iue from '../../../../packages';
Vue.use(Iue);
export default {
    name:'LayoutBase'
}
</script>

<style lang="less">
@import '../../../../packages/assets/css/index';
.example-demo{
    &>.iue-layout{
        margin-bottom: 50px;
    }
    .iue-layout{
        min-height: 300px;
    }
    .iue-header{
        background: mix(#ffffff,#4aa4ff,40%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .iue-content{
        background: mix(#ffffff,#4aa4ff,10%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .iue-sider{
        background: mix(#ffffff,#4aa4ff,50%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .iue-footer{
        background: mix(#ffffff,#4aa4ff,40%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding:20px 50px;
    }
}
</style>
