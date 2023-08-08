<script setup lang="ts">
  import { Props } from './space';
  import { computed } from 'vue';
  const props = defineProps(Props);
  // eslint-disable-next-line vue/no-setup-props-destructure
  const { size, direction, align } = props;
  console.log('size', size, direction, align);
  const classList = computed(() => {
    return ['dora-space', direction && `is-${direction}`, size && `is-${size}`, align && `is-${align}`];
  });
</script>

<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
