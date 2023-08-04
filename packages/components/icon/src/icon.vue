<script setup lang="ts">
  // import { IconProps } from './icon';
  import { Props } from './icon';
  // defineProps<IconProps>();
  defineProps(Props);
</script>

<template>
  <svg
    class="icon dora-icon"
    :class="{ isSpin: spin, 'is-loading': loading, allSpin: loading }"
    aria-hidden="true"
    :style="{
      color: color,
      width: size,
      height: size,
      cursor: pointer ? 'pointer' : 'default'
    }"
  >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .isSpin:hover,
  .allSpin {
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
</style>
