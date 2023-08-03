<script setup lang="ts">
  import { Props } from './icon';
  // defineProps<IconProps>();
  defineProps(Props);
</script>

<template>
  <svg
    class="icon"
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
</style>
