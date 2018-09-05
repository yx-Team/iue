<template>
    <div class="code-panel">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue';
import Iue from '../../../packages';
Vue.use(Iue);
export default {
    name:'code-panel'
}
</script>

<style lang="less">
@import '../../../packages/assets/css/index';
.code-panel{
    padding: 20px;
    margin-top: 20px;
    border: 1px solid #eee;
}
</style>