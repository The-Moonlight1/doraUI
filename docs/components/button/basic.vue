<template>
  <div class="button-item">
    <dora-button> Default </dora-button>
    <dora-button type="primary"> Primary </dora-button>
    <dora-button type="success"> Success </dora-button>
    <dora-button type="warning"> Warning </dora-button>
    <dora-button type="info"> Info </dora-button>
    <dora-button type="danger"> Danger </dora-button>
  </div>
  <div class="button-item">
    <dora-button plain> plain </dora-button>
    <dora-button type="primary" plain> Primary </dora-button>
    <dora-button type="success" plain> Success </dora-button>
    <dora-button type="warning" plain> Warning </dora-button>
    <dora-button type="info" plain> Info </dora-button>
    <dora-button type="danger" plain> Danger </dora-button>
  </div>
  <div class="button-item">
    <dora-button round>Round</dora-button>
    <dora-button type="primary" round>Primary</dora-button>
    <dora-button type="success" round>Success</dora-button>
    <dora-button type="info" round>Info</dora-button>
    <dora-button type="warning" round>Warning</dora-button>
    <dora-button type="danger" round>Danger</dora-button>
  </div>
  <div class="button-item">
    <dora-button icon="search" circle></dora-button>
    <dora-button type="primary" icon="edit" circle></dora-button>
    <dora-button type="success" icon="check" circle></dora-button>
    <dora-button type="info" icon="youjian" circle></dora-button>
    <dora-button type="warning" icon="star" circle></dora-button>
    <dora-button type="danger" icon="delete" circle></dora-button>
  </div>
</template>

<style lang="scss">
  .button-item {
    margin-bottom: 20px;
  }
</style>
