<script setup lang="ts">
  import { DoraButton } from '@dora-ui/components/button';
  import { DoraIcon } from '@dora-ui/components/icon';

  // import '@dora-ui/theme-chalk/src/index.scss'
  // import DoraButton from '@dora-ui/components/button';

  const handlerClick = () => {
    console.log('click');
  };
  console.log('test');
</script>

<template>
  <div class="app">
    <h2>我是开发调试页面</h2>
    <dora-button size="small" @click="handlerClick"> button </dora-button>
    <dora-button size="small" type="primary"> button </dora-button>
    <dora-button size="small" type="success"> button </dora-button>
    <dora-button size="small" type="danger"> button </dora-button>

    <dora-button size="small" type="warning"> button </dora-button>
    <dora-button size="small" type="info"> button </dora-button>
    <br />
    <DoraButton>按钮默认尺寸</DoraButton>

    <dora-button size="small">按钮小尺寸</dora-button>
    <br />

    <dora-button plain type="primary">朴素按钮</dora-button>
    <dora-button round type="primary">椭圆</dora-button>
    <dora-button disabled type="primary">禁止</dora-button>
    <dora-button circle type="primary">圆</dora-button>
    <dora-button loading>loading</dora-button>
    <DoraButton type="success">成功</DoraButton>

    <DoraIcon name="aixin" :pointer="true"></DoraIcon>
  </div>
</template>

<style lang="less" scoped></style>
