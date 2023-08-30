<template>
  <dora-space>
    <dora-switch v-model="unchecked" loading></dora-switch>
    <dora-switch v-model="checked" loading></dora-switch>
  </dora-space>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const unchecked = ref(false);
  const checked = ref(true);
</script>
