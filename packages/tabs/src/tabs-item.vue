<template>
  <div 
    class="iue-tabs__item" 
    v-show="visibel" 
    :style="{width:width}"
  ><slot/></div>
</template>

<script>
export default {
  name: "IueTabsItem",
  props: {
    label: {
      type: [Number, String],
      default: 0
    },
    name: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      itemName: "",
      width:'100%',
      visibel: false
    };
  }
};
</script>

<style lang="less">
</style>
