<template>
  <div 
    class="iue-tabs" 
    ref="tabs">
    <div class="iue-tabs__hd">
      <div 
        class="iue-tabs__menu" 
        :class="[{'is-active':currentVal===item.name},{'is-disabled':item.disabled}]" 
        v-for="(item,index) in menuList" 
        @click="handleMenu(item)"
        :key="index">
        {{ item.label }}
      </div>
    </div>
    <div 
      class="iue-tabs__bd" 
      :class="bdClass"
      :style="bdStyle"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "IueTabs",
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    animated:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      menuList: [],
      isActive: 0,
      currentVal: this.value
    };
  },
  mounted() {
    this.currentVal = this.value;
    this.init();
  },
  watch: {
    value(val) {
      this.currentVal = val;
    },
    currentVal(val) {
      this.$emit("input", val);
    }
  },
  computed:{
    bdClass(){
      let bdClass = [
        {'is-animated':this.animated}
      ]
      return bdClass
    },
    bdStyle(){
      if(this.animated){
        let num; 
        this.getTabMenu().forEach((vm,index)=>{
         if(vm.itemName === this.currentVal){
           num = index
         }
        })
        console.log()
        return [
          {'width':(this.menuList.length*100)+'%'},
          {'transform':`translateX(-${num/this.menuList.length*100}%)`}
        ]
      }
      return []
    }
  },
  methods: {
    init() {
      // 创建tab导航数据
      let menuList = [];
      let tabsWidth = this.$refs.tabs.getBoundingClientRect().width;
      this.getTabMenu().forEach((vm, index) => {
        // 获取子组件的props数据
        var props = vm.$options.propsData
        // 设置子组件的itemName，子组件是根据itemName来判断选中
        vm.itemName = props.name || index;
        // 设置item的宽度
        vm.width=tabsWidth+'px'
        // 组合数据插入到menuList
        menuList.push({
          label: props.label,
          name: vm.itemName,
          disabled:props.disabled || false
        });
        // 根据v-model的值，显示tab内容
        vm.visibel = vm.itemName === this.currentVal || this.animated;
        
      });
      this.menuList = menuList;
    },
    // 获取子组件，过滤需要的子组件
    getTabMenu(){
      return this.$children.filter(nav=>{
        return nav.$options.name==='IueTabsItem'
      })
    },
    // 点击菜单，显示对应的内容
    handleMenu(item) {
      // 如果有禁用属性，不能点击
      if(item.disabled) return false;

      this.currentVal = item.name;
      this.changeTab();
    },
    // 切换tab
    changeTab() {
      this.getTabMenu().forEach(vm => {
        vm.visibel = vm.itemName === this.currentVal || this.animated;
      });
    }
  }
};
</script>

<style lang="less">
@import "../../assets/css/var";
@import "../../assets/css/mixins";
@import "../../assets/css/animate";
.iue-tabs {
   overflow: hidden;
  &__hd {
    .clearfix();
    font-size: 14px;
    border-bottom: 1px solid #e6e6e6;
  }
  &__menu {
    position: relative;
    float: left;
    padding: 0 20px;
    line-height: 40px;
    height: 40px;
    margin-bottom: -1px;
    cursor: pointer;
    &.is-active:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0px;
      z-index: 1;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border: 1px solid #e6e6e6;
      border-bottom-color: #fff;
    }
    &.is-disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  &__bd{
    &.is-animated{
      transition:all .3s ease-in-out;
      .iue-tabs__item{
        float: left;
      }
    }
  }
  
  &__item {
    padding: 10px 0;
  }
}
</style>
