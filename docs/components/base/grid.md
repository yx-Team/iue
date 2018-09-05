---
 title: Gird
---

# 网格

### 基础布局

<grid-base></grid-base>

~~~ html
<iue-row>
    <iue-col span="24"><div class="grid-bg-dark">24</div></iue-col>
</iue-row>
<iue-row>
    <iue-col span="12"><div class="grid-bg">12</div></iue-col>
    <iue-col span="12"><div class="grid-bg-light">12</div></iue-col>
</iue-row>
<iue-row>
    <iue-col span="8"><div class="grid-bg">8</div></iue-col>
    <iue-col span="8"><div class="grid-bg-light">8</div></iue-col>
    <iue-col span="8"><div class="grid-bg">8</div></iue-col>
</iue-row>
<iue-row>
    <iue-col span="6"><div class="grid-bg">6</div></iue-col>
    <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
    <iue-col span="6"><div class="grid-bg">6</div></iue-col>
    <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
</iue-row>
<iue-row>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
</iue-row>
~~~

### 分栏间距
<grid-gutter></grid-gutter>

~~~html
<iue-row :gutter="20">
    <iue-col span="6"><div class="grid-bg">6</div></iue-col>
    <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
    <iue-col span="6"><div class="grid-bg">6</div></iue-col>
    <iue-col span="6"><div class="grid-bg-light">6</div></iue-col>
</iue-row>
~~~

### 分栏偏移
支持偏移指定的栏数。
<grid-offset></grid-offset>

~~~html
<iue-row :gutter="20">
    <iue-col span="8"><div class="grid-bg">8</div></iue-col>
    <iue-col span="4" offset="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="6" offset="2"><div class="grid-bg">6</div></iue-col>
</iue-row>
<iue-row :gutter="20">
    <iue-col span="6" offset="6"><div class="grid-bg">6</div></iue-col>
    <iue-col span="8" offset="4"><div class="grid-bg">8</div></iue-col>
</iue-row>
<iue-row :gutter="20">
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4" offset="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4" offset="4"><div class="grid-bg-light">4</div></iue-col>
</iue-row>
~~~



### 响应式布局
参考bootstrap,预留xs、sm、md、lg、xl 这5个属性

<grid-media></grid-media>
<style lang="less">
    /* 示例间距 */
    .example-demo{
        .grid-bg-dark{
            background:#dddddd;
            border-radius:4px;
             width:100%;
             height:50px;
             line-height:50px;
             margin-bottom:10px;
        }
        .grid-bg{
            background:#D6D8DC;
            border-radius:4px;
             width:100%;
             height:50px;
             line-height:50px;
             margin-bottom:10px;
        }
        .grid-bg-light{
            background:#f8f8f8;
             border-radius:4px;
             width:100%;
             height:50px;
             line-height:50px;
             margin-bottom:10px;
        }
        .iue-row{
            margin:10px 0;  
            
        }
        .iue-col{
            
           
            text-align:center;
            font-size:16px;
           
            
        }
    }
</style>