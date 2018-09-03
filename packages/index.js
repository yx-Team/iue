import './assets/css/index.less';
import Button from './button';
import ButtonGroup from './button-group';
import Icon from './icon';
import Row from './row';
import Col from './col';

const components = [
    Button,
    ButtonGroup,
    Icon,
    Row,
    Col
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