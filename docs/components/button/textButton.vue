<template>
  <p>Basic text button</p>
  <div class="button-item">
    <dora-button v-for="button in buttons" :key="button.text" :type="button.type" text>{{ button.text }}</dora-button>
  </div>

  <p>Background color always on</p>
  <div class="button-item">
    <dora-button v-for="button in buttons" :key="button.text" :type="button.type" text bg>{{
      button.text
    }}</dora-button>
  </div>

  <p>Disabled text button</p>
  <div class="button-item">
    <dora-button v-for="button in buttons" :key="button.text" :type="button.type" text disabled>{{
      button.text
    }}</dora-button>
  </div>
</template>

<script setup lang="ts">
  const buttons = [
    { type: 'default', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' }
  ] as const;
</script>
