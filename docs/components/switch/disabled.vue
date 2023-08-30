<template>
  <dora-space>
    <dora-switch v-model="unchecked" disabled></dora-switch>
    <dora-switch v-model="checked" disabled></dora-switch>
  </dora-space>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const unchecked = ref(false);
  const checked = ref(true);
</script>
