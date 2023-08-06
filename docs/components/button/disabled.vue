<template>
  <div class="button-item">
    <dora-button disabled>Default</dora-button>
    <dora-button type="primary" disabled>Primary</dora-button>
    <dora-button type="success" disabled>Success</dora-button>
    <dora-button type="info" disabled>Info</dora-button>
    <dora-button type="warning" disabled>Warning</dora-button>
    <dora-button type="danger" disabled>Danger</dora-button>
  </div>

  <div class="button-item">
    <dora-button plain disabled>Plain</dora-button>
    <dora-button type="primary" plain disabled>Primary</dora-button>
    <dora-button type="success" plain disabled>Success</dora-button>
    <dora-button type="info" plain disabled>Info</dora-button>
    <dora-button type="warning" plain disabled>Warning</dora-button>
    <dora-button type="danger" plain disabled>Danger</dora-button>
  </div>
</template>

<style lang="scss">
  .button-item {
    margin-bottom: 20px;
  }
</style>
