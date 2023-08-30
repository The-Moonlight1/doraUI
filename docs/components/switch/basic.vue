<template>
  <dora-switch v-model="isChecked"></dora-switch>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const isChecked = ref(false);
</script>
