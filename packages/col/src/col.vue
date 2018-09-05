<template>
    <div class="iue-col" :class="className" :style="colStyle"><slot></slot></div>
</template>

<script>
let namespace = "iue-";
export default {
    name:'IueCol',
    props:{
        span:{
            type:[String,Number],
            default:24
        },
        offset:{
            type:[String,Number],
            default:''
        },
        xs:[Number,Object],
        sm:[Number,Object],
        md:[Number,Object],
        lg:[Number,Object],
        xl:[Number,Object]
    },
    data(){
        return{
            gutter:0
        }
    },
    computed:{
        className(){
            var className={
                [`${namespace}col-${this.span}`]:this.span,
                [`${namespace}col-offset-${this.offset}`]:this.offset
            };
            ['xs','sm','md','lg','xl'].forEach(media => {
                if(this[media]) {
                    className[`${namespace}col-${media}-${this[media]}`] = true
                }
            });
            return className;
        },
        colStyle(){
            if(this.gutter) {
                let val = this.gutter/2+'px'
                return [
                    {'paddingLeft':val},
                    {'paddingRight':val}
                ]
            }
            return []
        }
    }
}
</script>

