<script setup lang="ts">
  import DoraTooltip from '@dora-ui/components/tooltip';

  const handlerClick = () => {
    console.log('click');
  };
  console.log('test');
  const tableData = {
    columns: ['name', 'age', 'address'],
    data: [
      {
        name: '张三',
        age: 18,
        address: '北京'
      },
      {
        name: '李四',
        age: 20,
        address: '上海'
      },
      {
        name: '王五',
        age: 22,
        address: '广州'
      }
    ]
  };
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

    <DoraIcon name="aixin" :pointer="true" :spin="true"></DoraIcon>

    <DoraTable :columns="tableData.columns" :data="tableData.data"></DoraTable>
    <div class="box">
      哈哈哈
      <dora-divider></dora-divider>
      <dora-divider>我是分割线</dora-divider>
      <dora-divider fontAlign="left">左侧分割线</dora-divider>
      <dora-divider fontAlign="right">右侧分割线</dora-divider>
      <dora-divider type="dashed">dashed</dora-divider>
      <dora-divider fontAlign="left" type="dashed">dashed 左</dora-divider>

      <span>Text <dora-divider orientation="vertical"></dora-divider> Link </span>
    </div>
    <dora-space size="larger">
      <dora-button>按钮1</dora-button>
      <span>2</span>
      666
    </dora-space>
  </div>

  <dora-link href="https://www.baidu.com" type="primary" disabled>百度</dora-link>
  <dora-input suffixIcon="aixin" clearable="true"></dora-input>
  <DoraTooltip>
    <span>测试</span>
    <template #content> 我是测试tooltip </template>
  </DoraTooltip>
  <DoraDropdown placement="right" title="test">
    <template #content>
      <dora-dropdown-item>Action 1</dora-dropdown-item>
      <dora-dropdown-item>Action 2</dora-dropdown-item>
      <dora-dropdown-item>Action 3</dora-dropdown-item>
      <dora-dropdown-item>Action 4</dora-dropdown-item>
      <dora-dropdown-item>Action 5</dora-dropdown-item>
    </template>
  </DoraDropdown>
</template>

<style lang="scss" scoped>
  .box {
    width: 400px;
    height: 200px;
    border: 2px salmon solid;
  }
</style>
