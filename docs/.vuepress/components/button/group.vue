<template>
    <div>
        <iue-button-group>
            <iue-button type="primary">大型按钮</iue-button>
            <iue-button  type="primary">默认按钮</iue-button>
            <iue-button type="primary">小型按钮</iue-button>
        </iue-button-group>
        <iue-button-group>
            <iue-button type="primary" icon="left-arrow">大型按钮</iue-button>
            <iue-button  type="primary">默认按钮</iue-button>
            <iue-button type="primary">小型按钮<iue-icon icon="right-arrow" /></iue-button>
        </iue-button-group>
    </div>
</template>
<script>
import Vue from 'vue';
import Iue from '../../../../packages';
Vue.use(Iue);

export default {
  name: "button-group"
};
</script>
<style lang="less">
@import '../../../../packages/assets/css/index';
</style>