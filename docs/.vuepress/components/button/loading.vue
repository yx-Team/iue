<template>
    <div class="example-demo">
        <iue-button  loading type="primary" round>加载中...</iue-button>
    </div>
</template>
<script>
import Vue from 'vue';
import Iue from '../../../../packages';
Vue.use(Iue);

export default {
  name: "button-loading"
};
</script>
<style lang="less">
@import '../../../../packages/assets/css/index';
</style>