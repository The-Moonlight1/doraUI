<template>
  <button
    class="dora-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <dora-icon v-if="icon" :name="icon"></dora-icon>
    <dora-icon v-if="loading" name="loading" loading></dora-icon>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { Props, Emits } from './button';

  const props = defineProps(Props);
  const emits = defineEmits(Emits);
  // eslint-disable-next-line vue/no-setup-props-destructure
  const { type, size, round, plain, circle, disabled, text, bg, nativeType, autoFocus, icon, loading } = props;
  const classList = computed(() => {
    return [
      {
        [`dora-button--${type}`]: type,
        [`dora-button--${size}`]: size,
        [`is-disabled`]: disabled,
        [`is-loading`]: loading,
        [`is-round`]: round,
        [`is-plain`]: plain,
        [`is-circle`]: circle,
        [`is-text`]: text,
        [`is-bg`]: bg
      }
    ];
  });
  function handlerClick(evt: MouseEvent): void {
    emits('click', evt);
  }
</script>
