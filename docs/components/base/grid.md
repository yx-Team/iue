---
 title: Gird
 pageClass: page-content-wrap
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
### flex布局
在flex模式下有效，通过设置row的参数(justify、align)为不同的值，来定义子元素的排布方式。

<grid-flex></grid-flex>

~~~html
<!-- 左对齐 -->
<iue-row type="flex" justify="left" align="center">
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
</iue-row>
<!-- 居中对齐 -->
<iue-row type="flex" justify="center" align="center">
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
</iue-row>
<!-- 右对齐 -->
<iue-row type="flex" justify="right" align="center">
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
</iue-row>

<!-- 子元素顶对齐 -->
<iue-row type="flex" justify="left" align="top">
    <iue-col span="4"><div class="grid-bg" style="height:80px">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg" style="height:80px">4</div></iue-col>
</iue-row>
<!-- 子元素底对齐 -->
<iue-row type="flex" justify="center" align="bottom">
    <iue-col span="4"><div class="grid-bg" style="height:80px">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg" style="height:80px">4</div></iue-col>
</iue-row>

<!-- 子元素两边对齐 -->
<iue-row type="flex" justify="between" align="center">
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
</iue-row>
<!-- 子元素平分空间对齐 -->
<iue-row type="flex" justify="around" align="center">
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg-light">4</div></iue-col>
    <iue-col span="4"><div class="grid-bg">4</div></iue-col>
</iue-row>
~~~

### 响应式布局
参考bootstrap,预留xs、sm、md、lg、xl 这5个属性

<grid-media></grid-media>

~~~html
<iue-row :gutter="20">
    <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg"> </div></iue-col>
    <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg-light"> </div></iue-col>
    <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg"> </div></iue-col>
    <iue-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"><div class="grid-bg-light"> </div></iue-col>
    <iue-col :xs="24" :sm="6" :md="8" :lg="12" :xl="4"><div class="grid-bg"> </div></iue-col>
    <iue-col :xs="24" :sm="6" :md="8" :lg="12" :xl="4"><div class="grid-bg-light"> </div></iue-col>
</iue-row>
<iue-row :gutter="20">
    <iue-col :md="{span:4,offset:4}" :lg="{span:6}"><div class="grid-bg"> </div></iue-col>
    <iue-col :md="{span:4,offset:4}" :lg="{span:4,offset:2}"><div class="grid-bg-light"> </div></iue-col>
    <iue-col :md="{span:4}" :lg="{span:4,offset:2}"><div class="grid-bg"> </div></iue-col>
</iue-row>
~~~


### Row Attributes

| 参数        | 说明                       | 类型        | 可选值                             |默认值       |
| ----------- |:-----------------------:| :------------:| :---------------------------------:| :----------:|
| type        | 布局模式，可选flex         |    String   | flex                               |  --         |
| justify     | flex布局水平布局方式       |    String   | left/center/right/between/around   |  --         |
| align       | flex布局垂直排列方式       |    String   | top/center/bottom                   |  --        |
| gutter      | 栅格间距                  |    Number   | --                                  |  0        |


### Col Attributes

| 参数        | 说明                                | 类型                                           | 可选值         |默认值       |
| ----------- |:----------------------------------:| :---------------------------------------------:| :-------------:| :----------:|
| span        | 栅格的列数                          |    String/Number                               |  --            |  24        |
| offset      | 栅格的左偏移列数                     |    String/Number                               | --             |  0         |
| xs          | <768px 响应式栅格数或者栅格属性对象   |    Number/Object(例如： {span: 4, offset: 4})   | --             |  --        |
| sm          | ≥768px 响应式栅格数或者栅格属性对象   |    Number/Object(例如： {span: 4, offset: 4})   | --             |  --          |
| md          | ≥992px 响应式栅格数或者栅格属性对象   |    Number/Object(例如： {span: 4, offset: 4})   | --             |  --          |
| lg          | ≥1200px 响应式栅格数或者栅格属性对象   |    Number/Object(例如： {span: 4, offset: 4})   | --             |  --          |
| xl          | ≥1920px 响应式栅格数或者栅格属性对象   |    Number/Object(例如： {span: 4, offset: 4})   | --             |  --          |
<style lang="less">
    /* 示例间距 */
    .example-demo{
        &-row{
            overflow:hidden;
            background:#f7f7f7;
            padding:0 10px;
        }
        .grid-bg-dark{
            background:#017efe;
            border-radius:4px;
             width:100%;
             height:50px;
             line-height:50px;
             margin-bottom:10px;
             color:#fff;
        }
        .grid-bg{
            background:#0199fe;
            border-radius:4px;
             width:100%;
             height:50px;
             line-height:50px;
             margin-bottom:10px;
             color:#fff;
        }
        .grid-bg-light{
            background:#80ccff;
             border-radius:4px;
             width:100%;
             height:50px;
             line-height:50px;
             margin-bottom:10px;
             color:#fff;
        }
        .iue-row{
            margin:10px 0 0px;  
            
        }
        .iue-col{
            
           
            text-align:center;
            font-size:16px;
           
            
        }
    }
</style>