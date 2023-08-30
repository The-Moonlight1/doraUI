<template>
  <dora-space direction="vertical">
    <dora-progress>
      <template #format="{ percent }">
        <span style="color: red">剩余{{ percent }}</span>
      </template>
    </dora-progress>
  </dora-space>
</template>
