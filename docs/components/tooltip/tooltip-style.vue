<template>
  <dora-space>
    <dora-tooltip :overlay-style="{ backgroundColor: 'pink' }">
      <dora-button type="outline">pink</dora-button>
    </dora-tooltip>
    <dora-tooltip :overlay-style="{ backgroundColor: 'red' }">
      <dora-button type="outline">red</dora-button>
    </dora-tooltip>
    <dora-tooltip :overlay-style="{ backgroundColor: 'green' }">
      <dora-button type="outline">green</dora-button>
    </dora-tooltip>
    <dora-tooltip :overlay-style="{ backgroundColor: 'orange' }">
      <dora-button type="outline">orange</dora-button>
    </dora-tooltip>
    <dora-tooltip overlay-class-name="tooltip-class-name">
      <dora-button type="outline">blue</dora-button>
    </dora-tooltip>
  </dora-space>
</template>
<style scoped>
  :deep .tooltip-class-name {
    background-color: blue !important;
  }
</style>
