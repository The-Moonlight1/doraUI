<template>
  <dora-space>
    <dora-progress type="circle" size="s"></dora-progress>
    <dora-progress type="circle" :percent="50" size="m"></dora-progress>
    <dora-progress type="circle" :percent="99" size="l">
      <template #format="{ percent }">
        <div style="color: red">剩余{{ percent }}</div>
      </template>
    </dora-progress>
    <dora-progress type="circle" :percent="num" size="l"></dora-progress>
  </dora-space>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const num = ref(10);
  setInterval(() => {
    if (num.value === 100) return;
    num.value += 10;
  }, 1000);
</script>
