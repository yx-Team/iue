<template>
    <div class="example-demo">
       
        <iue-row :gutter="20">
            <iue-col span="8"><div class="grid-bg">col-8</div></iue-col>
            <iue-col span="4" offset="4"><div class="grid-bg-light">col-4</div></iue-col>
            <iue-col span="6" offset="2"><div class="grid-bg">col-6</div></iue-col>
        </iue-row>
        <iue-row :gutter="20">
            <iue-col span="6" offset="6"><div class="grid-bg">col-6</div></iue-col>
            <iue-col span="8" offset="4"><div class="grid-bg">col-8</div></iue-col>
            
        </iue-row>
        <iue-row :gutter="20">
            <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            <iue-col span="4" offset="4"><div class="grid-bg">col-4</div></iue-col>
            <iue-col span="4" offset="4"><div class="grid-bg-light">col-4</div></iue-col>
        </iue-row>
    </div>
</template>

<script>
import Vue from 'vue'
import Iue from '../../../../packages/index'
Vue.use(Iue)
export default {
    name:'grid-offset'
}
</script>

<style>

</style>
