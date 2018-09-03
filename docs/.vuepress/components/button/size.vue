<template>
    <div class="example-demo">
        <iue-button size="large">大型按钮</iue-button>
        <iue-button >默认按钮</iue-button>
        <iue-button size="small">小型按钮</iue-button>
    </div>
</template>
<script>
import Vue from 'vue';
import Iue from '../../../../packages';
Vue.use(Iue);

export default {
  name: "button-size"
};
</script>
<style lang="less">
@import '../../../../packages/assets/css/index';
</style>