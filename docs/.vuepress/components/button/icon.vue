<template>
    <div class="example-demo">
        <iue-button icon="search" size="large" circle></iue-button>
        <iue-button icon="search" circle></iue-button>
        <iue-button icon="search" size="small" circle></iue-button>
        <iue-button icon="search" type="primary" round disabled>主按钮</iue-button>
        <iue-button icon="search" type="dashed" round>虚线</iue-button>
        <iue-button icon="search" type="info" round>Info</iue-button>
        <iue-button icon="search" type="success" round>Success</iue-button>
        <iue-button icon="search" type="warning" round>Warning</iue-button>
        <iue-button icon="search" type="danger" round>Danger</iue-button>
    </div>
</template>
<script>
import Vue from 'vue';
import Iue from '../../../../packages';
Vue.use(Iue);

export default {
  name: "button-icon"
};
</script>
<style lang="less">
@import '../../../../packages/assets/css/index';
</style>