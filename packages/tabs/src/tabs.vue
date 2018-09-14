<template>
    <div class="iue-tabs">
        <div class="iue-tabs__hd">
            <div class="iue-tabs__menu">tab01</div>
            <div class="iue-tabs__menu">tab02</div>
            <div class="iue-tabs__menu">tab03</div>
        </div>
        <div class="iue-tabs__bd">
            <div class="iue-tabs__content">content01</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'IueTabs'
}
</script>

<style lang="less">
@import '../../assets/css/var';
@import '../../assets/css/mixins';
.iue-tabs{

    &__hd{

        .clearfix();
        font-size: 14px;
    }
    &__menu{
        float: left;
        padding:0 20px;
        line-height: 40px;
        height: 40px;
        border:1px solid #e6e6e6;
        border-bottom: #fff;
    }
    &__content{

    }
}
</style>
