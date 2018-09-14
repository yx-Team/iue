import './assets/css/index.less';
import Button from './button';
import ButtonGroup from './button-group';
import Icon from './icon';

import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Sider from './sider';

import Tabs from './tabs';
import TabsItem from './tabs-item';


import Alert from './alert';
import Message from './message/index';
import Notify from './notify/index';

const components = {
    Button,
    ButtonGroup,
    Icon,
    
    Row,
    Col,
    Layout,
    Header,
    Footer,
    Content,
    Sider,

    Tabs,
    TabsItem,

    Alert,
    Message,
    Notify
}


const install = function(Vue){
    let comp = Object.values(components)
    comp.forEach(component=>{
        Vue.component(component.name,component)
    })
    Vue.prototype.$Message=Message
    Vue.prototype.$Notify=Notify
}
if(typeof window !=='undefined' && window.Vue){
    install(window.Vue)
}

const api = {
    install,
    ...components  
}
export const $Message = Message;
export const $Notify = Notify;
export default api