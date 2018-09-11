import Vue from "vue";
import NotifyConstructor from "./main";
let NotifyWrap;

const Notify = options => {
  if (typeof options === "string") {
    options = {
      content: options
    };
  }
  return create(options);
};
// 创建实例
let create = options => {
  let constructor = Vue.extend(NotifyConstructor);
  let instace = new constructor({
    data: options
  });
  let vm = instace.$mount();
  NotifyWrap = document.createElement("div");
  NotifyWrap.className = "iue-notify";
  NotifyWrap.appendChild(vm.$el);
  document.body.appendChild(NotifyWrap);
  return vm;
};
// 关闭所有
Notify.closeAll = () => {};

export default Notify;
