<template>
    <div class="example-demo">
        <p>左对齐</p>
        <div class="example-demo-row">
            <iue-row type="flex" justify="left" align="center">
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            </iue-row>
        </div>
        <p>居中对齐</p>
        <div class="example-demo-row">
            <iue-row type="flex" justify="center" align="center">
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            </iue-row>
        </div>
        <p>右对齐</p>
        <div class="example-demo-row">
            <iue-row type="flex" justify="right" align="center">
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            </iue-row>
        </div>
        <p>子元素顶对齐</p>
        <div class="example-demo-row">
            <iue-row type="flex" justify="left" align="top">
                <iue-col span="4"><div class="grid-bg" style="height:80px">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg" style="height:80px">col-4</div></iue-col>
            </iue-row>
        </div>
        <p>子元素底对齐</p>
        <div class="example-demo-row">
            <iue-row type="flex" justify="center" align="bottom">
                <iue-col span="4"><div class="grid-bg" style="height:80px">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg" style="height:80px">col-4</div></iue-col>
            </iue-row>
        </div>
        <p>子元素两边对齐</p>
        <div class="example-demo-row">
            <iue-row type="flex" justify="between" align="center">
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            </iue-row>
        </div>
        <p>子元素平分空间对齐</p>
        <div class="example-demo-row">
            <iue-row type="flex" justify="around" align="center">
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
                <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            </iue-row>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Iue from '../../../../packages/index'
Vue.use(Iue)
export default {
    name:'grid-flex'
}
</script>

<style>

</style>
