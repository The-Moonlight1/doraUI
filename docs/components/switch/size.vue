<template>
  <dora-space>
    <dora-switch v-model="isChecked" size="s"></dora-switch>
    <dora-switch v-model="isChecked"></dora-switch>
  </dora-space>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const isChecked = ref(false);
</script>
