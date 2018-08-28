<template>
    <button :type="nativeType" class="iue-button" :class="className" :disabled="disabled" @click="handle">
        <iue-icon class="iue-button--loading" icon="loading" v-if="loading"></iue-icon>
        <iue-icon :icon="icon" v-if="icon"></iue-icon>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
let namespace = "iue-";
export default {
  name: "iue-button",
  props: {
    size: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
	},
	nativeType:{
	  type: String,
      default: ""
	},
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
	},
	block:{
		type: Boolean,
      	default: false
	}
  },
  computed: {
    className() {
      let className = "";
      if (this.type) {
        className += `${namespace}button--${this.type} `;
      }
      if (this.circle) {
        className += `${namespace}button--circle `;
      }
      if (this.round) {
        className += `${namespace}button--round `;
      }
      if (this.loading) {
        className += `is-loading `;
      }
      if (this.disabled) {
        className += "is-disabled ";
      }
      if (this.size) {
		  className += `${namespace}button--${this.size} `;
	  }
	  if (this.block) {
		  className += `${namespace}button--block `;
      }
      return className;
    }
  },
  methods: {
    handle(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less">
@import "./assets/css/var";
@import "./assets/css/mixins";
.@{name-space}button {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  height: 32px;
  line-height: 1.5;
  font-size: 14px;
  padding: 0 15px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  background: @color-white;
  transition: all 0.3s ease;
  cursor: pointer;
  [class*="iue-icon-"],
  .iconfont {
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
  &:focus {
    box-shadow: 0 0 0 2px #d5e8fc;
  }
  &--default,
  &--dashed,
  &--text {
    background-color: @color-white;
    border-color: @color-border;
    color: @color-content;
    &:hover {
      border-color: @color-primary-light5;
      color: @color-primary-light3;
    }
    &:focus {
      border-color: @color-primary-light;
      color: @color-primary-light;
    }
    &:active {
      border-color: @color-primary-light;
    }
  }
  &--dashed {
    border-style: dashed;
  }
  &--text {
    border-color: transparent;
  }
  &--primary {
    .button(@color-primary);
  }
  &--info {
    .button(@color-info);
  }
  &--success {
    .button(@color-success);
  }
  &--warning {
    .button(@color-warning);
  }
  &--danger {
    .button(@color-danger);
  }
  &--circle {
    border-radius: 50%;
    padding: 0 7px;
  }
  
  &--round {
    border-radius: 50px;
  }
  &--block{
	  width: 100%;
	  justify-content: center;
  }
  &.is-loading {
    pointer-events: none;
    opacity: 0.5;
  }
  &.is-disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  [class*="iue-icon-"] {
    ~ span {
      padding-left: 5px;
    }
  }
 &--large{
	  height: 36px;
	  font-size: 16px;
	  padding: 0 9px;
  }
  &--small{
	  height: 28px;
	  font-size: 12px;
	  padding: 0 5px;
	  [class*="iue-icon-"]{
		  font-size: 12px;
	  }
  }
  &-group{
	  font-size: 0;
	  
	  .@{name-space}button:first-child{
		  border-top-right-radius: 0;
		  border-bottom-right-radius: 0;
	  }
	  .@{name-space}button:last-child{
		  border-top-left-radius: 0;
		  border-bottom-left-radius: 0;
	  }
  }
}

.iue-icon-loading {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
