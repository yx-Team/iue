---

title: Button

---


# Button

### 基础用法
基础的按钮用法
<button-base></button-base>
~~~ html
<iue-button @click="btnHandle">默认</iue-button>
<iue-button type="primary">主按钮</iue-button>
<iue-button type="dashed">虚线</iue-button>
<iue-button type="text">文本</iue-button>
<iue-button type="info">Info</iue-button>
<iue-button type="success">Success</iue-button>
<iue-button type="warning">Warning</iue-button>
<iue-button type="danger">Danger</iue-button>
~~~

### 禁用状态
按钮不可以点击

<button-disabled></button-disabled>
~~~ html
<iue-button disabled>默认</iue-button>
<iue-button type="primary" disabled>主按钮</iue-button>
<iue-button type="dashed" disabled>虚线</iue-button>
<iue-button type="text" disabled>文本</iue-button>
<iue-button type="info" disabled>Info</iue-button>
<iue-button type="success" disabled>Success</iue-button>
<iue-button type="warning" disabled>Warning</iue-button>
<iue-button type="danger" disabled>Danger</iue-button>
~~~


### 图标按钮
图标按钮有较强的识别性

<button-icon></button-icon>
~~~ html
<iue-button icon="search" size="large" circle></iue-button>
<iue-button icon="search" circle></iue-button>
<iue-button icon="search" size="small" circle></iue-button>
<iue-button icon="search" type="primary" round disabled>主按钮</iue-button>
<iue-button icon="search" type="dashed" round>虚线</iue-button>
<iue-button icon="search" type="info" round>Info</iue-button>
<iue-button icon="search" type="success" round>Success</iue-button>
<iue-button icon="search" type="warning" round>Warning</iue-button>
<iue-button icon="search" type="danger" round>Danger</iue-button>
~~~

::: tip
加了属性circle的组件最好不要带文字，只要图标
:::

### 加载按钮
在按钮上显示加载状态

<button-loading></button-loading>
~~~ html
 <iue-button  loading type="primary" round>加载中...</iue-button>
~~~


### 不同尺寸按钮
提供三种大小按钮  larger default small 

<button-size></button-size>
~~~ html
<iue-button size="large">大型按钮</iue-button>
<iue-button >默认按钮</iue-button>
<iue-button size="small">小型按钮</iue-button>
~~~

### Attributes

| 参数        | 说明                       | 类型       | 可选值       |默认值       |
| ----------- |:-----------------------:| :----------:| :------------:| :----------:|
| size        | 尺寸                    |    String   | large/small    |  --         |
| type        | 按钮类型                |    String   | defalut/info/success/warning/danger    |  default         |
| nativeType  | 原生按钮类型             |    String   | reset/submit    |  --         |
| circle      | 是否圆形按钮，最好只有图标 |    Boolean   | --    |  false        |
| round       | 是否圆角按钮             |    Boolean   | --    |  false        |
| icon        | 图标类名                 |    String   | --    |  --         |
| loading     | 是否加载中状态            |    Boolean   | --    |  --         |
| disabled    | 是否禁用按钮              |    Boolean   | --    |  --         |
| block       | 是否显示块状按钮          |    Boolean   | --    |  --         |