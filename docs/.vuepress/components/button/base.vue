<template>
    <div class="example-demo">
        <iue-button @click="btnHandle">默认</iue-button>
        <iue-button type="primary">主按钮</iue-button>
        <iue-button type="dashed">虚线</iue-button>
        <iue-button type="text">文本</iue-button>
        <iue-button type="info">Info</iue-button>
        <iue-button type="success">Success</iue-button>
        <iue-button type="warning">Warning</iue-button>
        <iue-button type="danger">Danger</iue-button>
        
    </div>
</template>

<script>
import Button from "../../../../packages/button";
export default {
  name: "button-base",
  methods: {
    btnHandle() {
      alert("点击了按钮");
    }
  },
  components: {
    "iue-button": Button
  }
};
</script>
