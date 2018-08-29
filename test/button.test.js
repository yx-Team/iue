import Chai from "chai";
import Vue from "vue";
import Button from "../src/components/button";
import {createTest,createVue} from './utils';
import { describe, it } from "mocha";
const expect = Chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Button", () => {
  it("存在Button", () => {
    expect(Button).to.be.ok;
  });
  it("props circle 能正确显示", () => {
    var vm = createTest(Button, {
      propsData: {
        type: "circle"
      }
    });
    var circle = vm.$el.classList.contains("iue-button--circle");
    expect(circle).to.be.true;
    vm.$destroy();
  });
  it("props size 能正确显示",()=>{
    var vm = createTest(Button,{
      propsData:{
        size:"large"
      }
    })
    var size = vm.$el.classList.contains('iue-button--large');
    expect(size).to.be.true;
    vm.$destroy();
  })
  it("props nativeType 能正确显示",()=>{
    var vm = createTest(Button,{
      propsData:{
        nativeType:"reset"
      }
    })
    var nativeType = vm.$el.getAttribute('type')
    expect(nativeType).to.eq('reset')
    vm.$destroy();
  })
  it("props round 能正确显示",()=>{
    var vm = createTest(Button,{
      propsData:{
        round:true
      }
    })
    var round = vm.$el.classList.contains('iue-button--round');
    expect(round).to.be.true;
    vm.$destroy();
  })
  it("props disabled 能正确显示",()=>{
    var vm = createTest(Button,{
      propsData:{
        disabled:true
      }
    })
    var disabled = vm.$el.getAttribute('disabled')
    expect(disabled).to.eq('disabled')
    vm.$destroy();
  })
  it("props block 能正确显示",()=>{
    var vm = createTest(Button,{
      propsData:{
        block:true
      }
    })
    var block = vm.$el.classList.contains('iue-button--block');
    expect(block).to.be.true;
    vm.$destroy();
  })
});
