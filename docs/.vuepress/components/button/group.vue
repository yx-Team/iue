<template>
   <div class="example-demo">
        <iue-button-group>
                <iue-button type="primary" icon="left-arrow">上一页</iue-button>
                <iue-button type="primary">下一页 <iue-icon icon="right-arrow"></iue-icon></iue-button>
        </iue-button-group>
        <iue-button-group>
                <iue-button icon="like-o" type="info"></iue-button>
                <iue-button icon="apple-o" type="info"></iue-button>
                <iue-button icon="collection-o" type="info"></iue-button>
        </iue-button-group>
        <iue-button-group>
                <iue-button icon="left-arrow">上一页</iue-button>
                <iue-button>下一页 <iue-icon icon="right-arrow"></iue-icon></iue-button>
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