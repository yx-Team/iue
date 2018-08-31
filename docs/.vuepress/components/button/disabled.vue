<template>
    <div>
        <iue-button disabled>默认</iue-button>
        <iue-button type="primary" disabled>主按钮</iue-button>
        <iue-button type="dashed" disabled>虚线</iue-button>
        <iue-button type="text" disabled>文本</iue-button>
        <iue-button type="info" disabled>Info</iue-button>
        <iue-button type="success" disabled>Success</iue-button>
        <iue-button type="warning" disabled>Warning</iue-button>
        <iue-button type="danger" disabled>Danger</iue-button>
    </div>
</template>
<script>
import Button from "../../../../packages/button";
export default {
  name: "button-disabled",
  components: {
    "iue-button": Button
  }
};
</script>