<template>
  <div :class="[bem()]">
    <Tooltip
      :arrow="arrow"
      :trigger="trigger"
      :z-index="zIndex"
      :placement="placement"
      :close-delay="closeDelay"
      :open-delay="openDelay"
      :overlay-style="overlayStyle"
      :overlay-class-name="overlayClassName"
      @open-change="handleOpenChange"
    >
      <div :class="bem('title')">
        <DoraButton v-if="title" :size="size" :type="type">
          {{ title }}
          <dora-icon name="down-outline" />
        </DoraButton>
        <slot v-else name="title"></slot>
        <!-- <slot name="title"></slot> -->
      </div>

      <template #content>
        <!-- <slot name="content"></slot> -->
        <slot></slot>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
  import Tooltip from '../../tooltip/src/tooltip.vue';
  import { createCssScope } from '@dora-ui/utils';
  import { ref, toRefs, provide, watch } from 'vue';

  // props
  import { DropdownProps } from './dropdown';
  const emit = defineEmits<{
    (e: 'selected', value: string | number | object): void;
    (e: 'visibleChange', value: boolean): void;
  }>();

  const bem = createCssScope('dropdown');
  const props = defineProps(DropdownProps);
  // refs
  const { size, trigger } = toRefs(props);
  // open key is readonly, so：
  const isOpen = ref(props.open);
  const selectedValue = ref<any>(null);
  const iconRef = ref<HTMLElement>();

  provide('selectedValue', selectedValue);
  provide('isOpen', isOpen);
  provide('size', size);

  watch(
    () => selectedValue.value,
    (newSelected, oldSelected) => {
      if (newSelected !== oldSelected) {
        emit('selected', newSelected);
      }
    }
  );

  function handleOpenChange(value: boolean) {
    const iconNode = iconRef.value;

    if (iconNode) {
      if (value) {
        iconNode.style.transform = 'rotate(180deg)';
      } else {
        iconNode.style.transform = 'rotate(0deg)';
      }
    }
    emit('visibleChange', value);
  }
</script>
