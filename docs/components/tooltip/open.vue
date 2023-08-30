<template>
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
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const open = ref(false);
</script>
