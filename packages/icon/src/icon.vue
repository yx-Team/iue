<template>
    <i :class="className"></i>
</template>

<script>
export default {
    name:'iue-icon',
    props:{
        type:{
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
            if(this.type){
                return 'iue-icon-'+this.type
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

