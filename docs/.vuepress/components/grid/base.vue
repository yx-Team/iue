<template>
    <div class="example-demo">
        <iue-row>
            <iue-col span="24"><div class="grid-bg-dark">col-24</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="12"><div class="grid-bg">col-12</div></iue-col>
            <iue-col span="12"><div class="grid-bg-light">col-12</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="8"><div class="grid-bg">col-8</div></iue-col>
            <iue-col span="8"><div class="grid-bg-light">col-8</div></iue-col>
            <iue-col span="8"><div class="grid-bg">col-8</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="6"><div class="grid-bg">col-6</div></iue-col>
            <iue-col span="6"><div class="grid-bg-light">col-6</div></iue-col>
            <iue-col span="6"><div class="grid-bg">col-6</div></iue-col>
            <iue-col span="6"><div class="grid-bg-light">col-6</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
            <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
            <iue-col span="4"><div class="grid-bg">col-4</div></iue-col>
            <iue-col span="4"><div class="grid-bg-light">col-4</div></iue-col>
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
