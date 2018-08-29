<template>
    <i :class="className"></i>
</template>

<script>
export default {
    name:'iue-icon',
    props:{
        icon:{
            type:String,
            default:''
        },
        custom:{
            type:String,
            default:''
        }
    },
    computed:{
        className(){
            if(this.icon){
                return 'iue-icon-'+this.icon
            }
            if(this.custom){
                 return this.custom
            }
        }
    }
}
</script>
<style>
[class*='iue-icon-'].iue-icon--right{
    margin-left: 5px;
}
</style>

