<template>
    <div class="example-demo">
        <iue-button size="large" icon="like" type="info" block>大型按钮</iue-button>
        <iue-button type="success" icon="like" block>默认按钮</iue-button>
        <iue-button size="small" icon="like" type="warning" block>小型按钮</iue-button>
    </div>
</template>
<script>
import Vue from 'vue';
import Iue from '../../../../packages';
Vue.use(Iue);

export default {
  name: "button-block"
};
</script>
<style lang="less">
@import '../../../../packages/assets/css/index';
</style>