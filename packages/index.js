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

const components = [
    Button,
    ButtonGroup,
    Icon,
    Row,
    Col,
    Layout,
    Header,
    Footer,
    Content,
    Sider
]

const install = function(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
if(typeof window !=='undefined' && window.Vue){
    install(window.Vue)
}

const api = {
    install,
    ...components
}

export default api