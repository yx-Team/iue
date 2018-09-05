import IueContent from './src/content'

IueContent.install=(Vue)=>{
    Vue.component(IueContent.name,IueContent)
}

export default IueContent