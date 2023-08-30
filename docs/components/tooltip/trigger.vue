<template>
  <dora-space align="end">
    <div>
      <label class="tooltip-switch">
        <dora-switch v-model="open"></dora-switch>
        <span>切换气泡显示状态</span>
        <br />
      </label>
      <dora-tooltip
        v-model:open="open"
        placement="bottomLeft"
        trigger="none"
        title="当 trigger 设置为 none 时，所有组件内触发气泡打开或关闭的事件都将失效"
      >
        <dora-button>tooltip</dora-button>
      </dora-tooltip>
    </div>
    <dora-tooltip trigger="hover">
      <dora-button type="outline">hover</dora-button>
    </dora-tooltip>
    <dora-tooltip trigger="click">
      <dora-button type="outline">click</dora-button>
    </dora-tooltip>
    <dora-tooltip trigger="contextMenu">
      <dora-button type="outline">contextmenu</dora-button>
    </dora-tooltip>
    <dora-tooltip trigger="focus">
      <dora-input />
    </dora-tooltip>
    <dora-tooltip :trigger="['contextMenu', 'click']">
      <dora-button type="outline">click/contextMenu</dora-button>
    </dora-tooltip>
  </dora-space>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const open = ref(false);
</script>
<style>
  .tooltip-switch {
    display: block;
    margin-bottom: 8px;
  }
</style>
