import Vue from 'vue'
import ButtonGroup from './button-group'
import Button from './button'
import Icon from './icon'
import './assets/css/index.less'
Vue.component('iue-button-group',ButtonGroup)
Vue.component('iue-button',Button)
Vue.component('iue-icon',Icon)
new Vue({
    el:'#app',
    methods:{
        btnHandle(){
            alert('hello')
        }
    }
})

import chai from 'chai';
let expect = chai.expect;
{
    // 判断添加了type 生成的class是否存在
    var vm = createTest(Button,{
        propsData:{
            type:'primary'
        }
    })
    var type = vm.$el.classList.contains('iue-button--primary')
    expect(type).to.be.true
    
}
{
    // circle
    var vm = createTest(Button,{
        propsData:{
            type:'circle'
        }
    })
    var circle = vm.$el.classList.contains('iue-button--circle')
    expect(circle).to.be.true
}

// 创建测试实例，不插入到dom
function createTest(componentName,obj){
    var constructor = Vue.extend(componentName);
    var vm = new constructor(obj)
    vm.$mount();
    return vm;
}
// 创建测试实例，插入到dom
function createVue(componentName,obj){
    var div = document.createElement('div');
    document.querySelector('body').appendChild(div)
    var constructor = Vue.extend(componentName);
    var vm = new constructor(obj)
    vm.$mount(div);
    return vm;
}