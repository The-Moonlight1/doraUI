<template>
  <dora-space direction="vertical">
    <dora-switch v-model="value" checked-value="on" unchecked-value="off"></dora-switch>
    <span>当前的值：{{ value }}</span>
  </dora-space>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const value = ref('');
</script>
