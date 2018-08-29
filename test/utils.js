import Vue from 'vue'
// 创建测试实例，不插入到dom
export function createTest(componentName,obj){
    var constructor = Vue.extend(componentName);
    var vm = new constructor(obj)
    vm.$mount();
    return vm;
}
// 创建测试实例，插入到dom
export function createVue(componentName,obj){
    var div = document.createElement('div');
    document.querySelector('body').appendChild(div)
    var constructor = Vue.extend(componentName);
    var vm = new constructor(obj)
    vm.$mount(div);
    return vm;
}