import Vue from "vue";
import NotifyConstructor from "./notify";
let NotifyWrap;
let instances=[];
const Notify = (options) => {
 
  if (typeof options === "string") {
    options = {
      title: options
    };
  }
  return create(options);
};
// 四种状态
['info','success','warning','danger'].forEach(type=>{
  Notify[type]= (options) => {

    if (typeof options === "string") {
      options = {
        title: options
      };
    }
    options.type=type
    return create(options);
  }
})
// 创建实例
let create = (options) => {
  console.log(options)
  let instance = Vue.extend(NotifyConstructor);
  let vm = new instance({
    data: options
  }).$mount();
 
  if(!NotifyWrap){
    NotifyWrap = document.createElement("div");
    NotifyWrap.className = "iue-notify-wrap";
  }
  
  
  NotifyWrap.appendChild(vm.$el);
  document.body.appendChild(NotifyWrap);
  instances.push(vm);
  return vm;
};
// 关闭所有
Notify.closeAll = () => {
  instances.forEach(vm=>{
    vm.close();
  })
};

export default Notify;
