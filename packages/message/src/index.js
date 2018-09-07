import Vue from 'vue'
// message 组件
import MessageConstructor from './message'
// message组件的父容器
let messageWarp
// let instance =[]
const Message = (options)=>{
    let data={};
    if(typeof options === 'string'){
        data.content=options
    }
    create(data);
    console.log('message');
    
}
//  创建message实例
let create = (options)=>{
    
    
    var instance = Vue.extend(MessageConstructor)
    var vm = new instance({
        data:options
    }).$mount();
    // 插入到dom
    if(!messageWarp) messageWarp = document.createElement('div');
    messageWarp.className='iue-message';
    messageWarp.appendChild(vm.$el)
    document.body.appendChild(messageWarp)
}
export default Message