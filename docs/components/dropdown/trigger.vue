<template>
  <dora-space wrap>
    <dora-dropdown title="hover">
      <!-- <template #content> -->
      <dora-dropdown-item>Action 1</dora-dropdown-item>
      <dora-dropdown-item>Action 2</dora-dropdown-item>
      <dora-dropdown-item>Action 3</dora-dropdown-item>
      <dora-dropdown-item>Action 4</dora-dropdown-item>
      <!-- </template> -->
    </dora-dropdown>
    <dora-dropdown title="click" trigger="click">
      <!-- <template #content> -->
      <dora-dropdown-item>Action 1</dora-dropdown-item>
      <dora-dropdown-item>Action 2</dora-dropdown-item>
      <dora-dropdown-item>Action 3</dora-dropdown-item>
      <dora-dropdown-item>Action 4</dora-dropdown-item>
      <!-- </template> -->
    </dora-dropdown>
    <dora-dropdown title="contextmenu" trigger="contextMenu">
      <!-- <template #content> -->
      <dora-dropdown-item>Action 1</dora-dropdown-item>
      <dora-dropdown-item>Action 2</dora-dropdown-item>
      <dora-dropdown-item>Action 3</dora-dropdown-item>
      <dora-dropdown-item>Action 4</dora-dropdown-item>
      <!-- </template> -->
    </dora-dropdown>
    <dora-dropdown title="click & contextmenu" :trigger="['click', 'contextMenu']">
      <!-- <template #content> -->
      <dora-dropdown-item>Action 1</dora-dropdown-item>
      <dora-dropdown-item>Action 2</dora-dropdown-item>
      <dora-dropdown-item>Action 3</dora-dropdown-item>
      <dora-dropdown-item>Action 4</dora-dropdown-item>
      <!-- </template> -->
    </dora-dropdown>
  </dora-space>
</template>
