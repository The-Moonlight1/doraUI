<script setup lang="ts">
  import { computed } from 'vue';
  import { Props } from './link';
  const props = defineProps(Props);
  // eslint-disable-next-line vue/no-setup-props-destructure
  const { type, disabled, underline, href } = props;
  const classList = computed(() => [
    'dora-link',
    disabled && `is-disabled`,
    underline || `is-underline`,
    `dora-link--${type}`
  ]);
</script>

<template>
  <a :class="classList" :href="href"
    ><span><slot></slot></span>
  </a>
</template>
