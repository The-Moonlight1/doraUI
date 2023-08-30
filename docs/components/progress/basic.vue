<template>
  <dora-space direction="vertical">
    <dora-progress></dora-progress>
    <dora-progress :show-text="false"></dora-progress>
    <dora-progress :percent="50" :stroke-color="'red'"></dora-progress>
    <dora-progress :percent="90" :stroke-color="'#000'"></dora-progress>
  </dora-space>
</template>
