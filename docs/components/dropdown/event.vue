<script setup lang="ts">
  function handleSelected(value: string) {
    console.log('selected=>', value);
  }
  function handleVisibleChange(value: boolean) {
    console.log('visibleChange=>', value);
  }
</script>
<template>
  <dora-dropdown title="hover" @selected="handleSelected" @visible-change="handleVisibleChange">
    <!-- <template #content> -->
    <dora-dropdown-item value="1">Action 1</dora-dropdown-item>
    <dora-dropdown-item value="2">Action 2</dora-dropdown-item>
    <dora-dropdown-item value="3">Action 3</dora-dropdown-item>
    <dora-dropdown-item value="4">Action 4</dora-dropdown-item>
    <!-- </template> -->
  </dora-dropdown>
</template>
