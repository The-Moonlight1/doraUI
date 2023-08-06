<script setup lang="ts">
  import { computed } from 'vue';
  import { Props } from './divider';
  const props = defineProps(Props);
  // eslint-disable-next-line vue/no-setup-props-destructure
  const { type, orientation, fontType, fontAlign } = props;
  const classList = computed(() => {
    return [
      'dora-divider',
      type && `is-${type}`,
      fontType && `dora-divider--${fontType}`,
      fontAlign && `dora-divider--${fontAlign}`,
      orientation && `is-${orientation}`
    ];
  });
</script>

<template>
  <div :class="classList">
    <span><slot></slot></span>
  </div>
</template>

<style lang="scss" scoped></style>
