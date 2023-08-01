<template>
  <button
    class="dora-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { Props, Emits } from './button';

  const props = defineProps(Props);
  const emits = defineEmits(Emits);
  const { type, size, round, plain, circle, disabled, nativeType, autoFocus, icon, loading } = props;
  const classList = computed(() => {
    return [
      {
        [`dora-button--${type}`]: type,
        [`dora-button--${size}`]: size,
        [`is-disabled`]: disabled,
        [`is-loading`]: loading,
        [`is-round`]: round,
        [`is-plain`]: plain,
        [`is-circle`]: circle
      }
    ];
  });
  function handlerClick(evt: MouseEvent): void {
    emits('click', evt);
  }
</script>
