<template>
  <div class="button">
    
    
        <iue-button native-type="reset" type="primary">Reset</iue-button>
        <iue-button native-type="submit" type="primary">Submit</iue-button>
        <hr />
        <iue-button @click="btnHandle">默认</iue-button>
        <iue-button type="primary">主按钮</iue-button>
        <iue-button type="dashed">虚线</iue-button>
        <iue-button type="text">文本</iue-button>
        <iue-button type="info">Info</iue-button>
        <iue-button type="success">Success</iue-button>
        <iue-button type="warning">Warning</iue-button>
        <iue-button type="danger">Danger</iue-button>

        <hr />
        <iue-button disabled>默认</iue-button>
        <iue-button type="primary" disabled>主按钮</iue-button>
        <iue-button type="dashed" disabled>虚线</iue-button>
        <iue-button type="text" disabled>文本</iue-button>
        <iue-button type="info" disabled>Info</iue-button>
        <iue-button type="success" disabled>Success</iue-button>
        <iue-button type="warning" disabled>Warning</iue-button>
        <iue-button type="danger" disabled>Danger</iue-button>
        <hr />
        <iue-button>默认</iue-button>
        <iue-button type="primary" round>主按钮</iue-button>
        <iue-button type="dashed" round>虚线</iue-button>
        <iue-button type="info" round>Info</iue-button>
        <iue-button type="success" round>Success</iue-button>
        <iue-button type="warning" round>Warning</iue-button>
        <iue-button type="danger" round>Danger</iue-button>
        <hr />
        <iue-button icon="search" size="large" circle></iue-button>
        <iue-button icon="search" circle></iue-button>
        <iue-button icon="search" size="small" circle></iue-button>
        <iue-button  loading type="primary" round>加载中...</iue-button>
        <iue-button icon="search" type="primary" round disabled>主按钮</iue-button>
        <iue-button icon="search" type="dashed" round>虚线</iue-button>
        <iue-button icon="search" type="info" round>Info</iue-button>
        <iue-button icon="search" type="success" round>Success</iue-button>
        <iue-button icon="search" type="warning" round>Warning</iue-button>
        <iue-button icon="search" type="danger" round>Danger</iue-button>
        <hr />
        <iue-button type="primary" round icon="like">喜欢</iue-button>
        <iue-button type="primary" round>喜欢<iue-icon class="iue-icon--right" type="like-o"></iue-icon></iue-button>
        <hr />
        <iue-button size="large">大型按钮</iue-button>
        <iue-button >默认按钮</iue-button>
        <iue-button size="small">小型按钮</iue-button>
        <hr />
        <iue-button size="large" icon="like" type="info" block>大型按钮</iue-button>
        <iue-button type="success" icon="like" block>默认按钮</iue-button>
        <iue-button size="small" icon="like" type="warning" block>小型按钮</iue-button>
        <hr />
        <iue-button-group>
                <iue-button type="primary" icon="left-arrow">上一页</iue-button>
                <iue-button type="primary">下一页 <iue-icon type="right-arrow"></iue-icon></iue-button>
        </iue-button-group>
        <iue-button-group>
                <iue-button icon="like-o" type="info"></iue-button>
                <iue-button icon="apple-o" type="info"></iue-button>
                <iue-button icon="collection-o" type="info"></iue-button>
        </iue-button-group>
        <iue-button-group>
                <iue-button icon="left-arrow">上一页</iue-button>
                <iue-button>下一页 <iue-icon icon="right-arrow"></iue-icon></iue-button>
        </iue-button-group>
    
  </div>
</template>

<script>

export default {
  name: 'home',
  methods:{
    btnHandle(){
      alert('点击了按钮')
    }
  }
}
</script>
