<template>
    <div class="example-demo">
        <iue-row>
            <iue-col span="24"><div class="grid-bg-dark">24</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="12"><div class="grid-bg">12</div></iue-col>
            <iue-col span="12"><div class="grid-bg-light">12</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="8"><div class="grid-bg">8</div></iue-col>
            <iue-col span="8"><div class="grid-bg-light">8</div></iue-col>
            <iue-col span="8"><div class="grid-bg">8</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="6"><div class="grid-bg">6</div></iue-col>
            <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
            <iue-col span="6"><div class="grid-bg">6</div></iue-col>
            <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
        </iue-row>
        <iue-row>
            <iue-col span="4"><div class="grid-bg">4</div></iue-col>
            <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
            <iue-col span="4"><div class="grid-bg">4</div></iue-col>
            <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
            <iue-col span="4"><div class="grid-bg">4</div></iue-col>
            <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
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
