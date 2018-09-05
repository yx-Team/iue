<template>
    <div class="example-demo">
        <iue-row :gutter="20">
            <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg"> </div></iue-col>
            <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg-light"> </div></iue-col>
            <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg"> </div></iue-col>
            <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg-light"> </div></iue-col>
            <iue-col :xs="24" :sm="6" :md="8" :lg="12" :xl="4"><div class="grid-bg"> </div></iue-col>
            <iue-col :xs="24" :sm="6" :md="8" :lg="12" :xl="4"><div class="grid-bg-light"> </div></iue-col>
        </iue-row>
        <iue-row :gutter="20">
            <iue-col :md="{span:4,offset:4}" :lg="{span:6}"><div class="grid-bg"> </div></iue-col>
            <iue-col :md="{span:4,offset:4}" :lg="{span:4,offset:2}"><div class="grid-bg-light"> </div></iue-col>
            <iue-col :md="{span:4}" :lg="{span:4,offset:2}"><div class="grid-bg"> </div></iue-col>
        </iue-row>
    </div>
</template>

<script>
import Vue from 'vue'
import Iue from '../../../../packages/index'
Vue.use(Iue)
export default {
    name:'grid-media'
}
</script>

<style>

</style>
