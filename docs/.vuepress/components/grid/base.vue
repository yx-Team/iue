<template>
    <div class="example-demo">
        <iue-row>
            <iue-col span="8">8</iue-col>
            <iue-col span="8">8</iue-col>
            <iue-col span="8">8</iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="6">6</iue-col>
            <iue-col span="6">6</iue-col>
            <iue-col span="6">6</iue-col>
            <iue-col span="6">6</iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="3" offset="3">3</iue-col>
            <iue-col span="3" offset="3">3</iue-col>
            <iue-col span="3" offset="3">3</iue-col>
            <iue-col span="3" offset="3">3</iue-col>
        </iue-row>
    </div>
</template>

<script>
import Vue from 'vue'
import Iue from '../../../../packages/index'
Vue.use(Iue)
export default {
    name:'grid-base'
}
</script>

<style>

</style>
