import IueAlert from "./src/alert";

IueAlert.install = Vue => {
  Vue.component(IueAlert.name, IueAlert);
};

export default IueAlert;
