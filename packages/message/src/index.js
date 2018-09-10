import Vue from 'vue'
// message 组件
import MessageConstructor from './message'
// message组件的父容器
let messageWarp
let instances = []
const Message = (options)=>{
    if(typeof options === 'string'){
        options={content:options}
    }
    return create(options);
}
// info/success/warning/danger
['info','success','warning','danger'].forEach(type=>{
    
    Message[type]=(options)=>{
        if(typeof options === 'string'){
            options={
                content:options
            }
            
        }
        options.type=type;
        
        return create(options);
    }
})
// closeAll
Message.closeAll=function(){
    instances.forEach(vm=>{
        vm.handleClose()
    })
    instances=[]
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
    instances.push(vm)
    return vm;
}
export default Message