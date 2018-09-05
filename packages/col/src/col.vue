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
            default:0
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
                if(typeof this[media]==='number') {
                    className[`${namespace}col-${media}-${this[media]}`] = true
                }else if(typeof this[media]==='object'){
                    // 返回一个数组，对象属性的键名
                    let keys =Object.keys(this[media]);
                    keys.forEach(key=>{
                        if(key==='span'){
                            className[`${namespace}col-${media}-${this[media][key]}`] = true
                        }else if(key === 'offset'){
                            className[`${namespace}col-${media}-offset-${this[media][key]}`] = true
                        }
                    })
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

