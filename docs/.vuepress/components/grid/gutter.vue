<template>
    <div class="example-demo">
        <iue-row :gutter="20">
            <iue-col span="6"><div class="grid-bg">6</div></iue-col>
            <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
            <iue-col span="6"><div class="grid-bg">6</div></iue-col>
            <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
        </iue-row>
    </div>
</template>

<script>
import Vue from 'vue'
import Iue from '../../../../packages/index'
Vue.use(Iue)
export default {
    name:'grid-gutter'
}
</script>

<style>

</style>
