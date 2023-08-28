<template>
  <div :class="[bem(), getDisabled, `size-${size}`]" @click="handleDropdownItemClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { createCssScope } from '@dora-ui/utils';
  import { inject, toRefs } from 'vue';
  import type { Ref } from 'vue';

  interface DropdownItemProps {
    value?: string | number | object;
    disabled?: boolean;
  }
  const bem = createCssScope('dropdown-item');
  const props = withDefaults(defineProps<DropdownItemProps>(), {
    value: '',
    disabled: false
  });

  // Injects
  const selectedValue = inject('selectedValue') as Ref<string | number | object>;
  const isOpen = inject('isOpen') as Ref<boolean>;
  const size = inject('size');

  const { value, disabled } = toRefs(props);
  const getDisabled = disabled.value ? 'disabled' : false;

  function handleDropdownItemClick() {
    if (getDisabled) return;

    selectedValue.value = value.value;
    isOpen.value = false;
  }
</script>
