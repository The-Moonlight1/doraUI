<script setup lang="ts">
  import { ref } from 'vue';
  import { Props } from './tooltip';
  const props = defineProps(Props);
  const { visible, trigger } = props;

  let tooltipVisible = ref(false);
  if (visible !== null) {
    tooltipVisible = ref(true);
  }
  const handleHoverTooltipShow = () => {
    if (trigger === 'hover' && visible === null) {
      tooltipVisible.value = true;
    }
  };

  const handleHoverTooltipHide = () => {
    if (trigger === 'hover' && visible === null) {
      tooltipVisible.value = false;
    }
  };
</script>

<template>
  <div @mouseenter="handleHoverTooltipShow" @mouseleave="handleHoverTooltipHide" class="dora-tooltip-warpper">
    <div v-show="tooltipVisible">
      <div class="dora-tooltip-title">
        <!-- <slot name="title"></slot> -->
        {{ title }}
      </div>
      <div class="dora-tooltip--icon">
        <dora-icon name="question-circle" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>
