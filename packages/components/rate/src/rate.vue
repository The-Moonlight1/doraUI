<template>
  <div :class="bem([size], { disabled: disabled, readonly: readonly })" @mouseleave="handleLeave()">
    <div
      v-for="n in numberCount"
      :key="n"
      :class="doraRateItemClass(n)"
      :style="animationStyle(n)"
      @animationend="handleAnimationEnd(n)"
    >
      <div
        v-show="allowHalf"
        :class="halfClass(n)"
        :style="{ color: color }"
        @mouseenter="handleEnter(n - 0.5)"
        @click="handleClick(n - 0.5)"
      >
        <dora-icon
          name="star-fill"
          :class="halfIconClass"
          :id="doraIconSizeClass"
          :style="{ color: color }"
        ></dora-icon>
      </div>
      <dora-icon
        name="star"
        :class="iconClass(n)"
        :id="doraIconSizeClass"
        :style="{ color: showValue >= n && color ? color : '' }"
        @mouseenter="handleEnter(n)"
        @click="handleClick(n)"
      ></dora-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { RateProps } from './rate';
  import { computed, onMounted, ref } from 'vue';
  import { createCssScope } from '@dora-ui/utils';

  const showValue = ref(0); // 显示的星星数
  const value = ref(0); // 实际的星星数
  const animation = ref(false); // 动画开关
  const props = defineProps(RateProps);

  const bem = createCssScope('rate');
  const emits = defineEmits(['update:modelValue', 'change', 'hover-change']);

  onMounted(() => {
    if (props.defaultValue) {
      showValue.value = Number(props.defaultValue);
      value.value = Number(props.defaultValue);
    }
    if (props.modelValue) {
      showValue.value = Number(props.modelValue);
      value.value = Number(props.modelValue);
    }
  });

  const rateClass = computed(() => {
    return {
      'dora-rate-disabled': props.disabled,
      'dora-rate-readonly': props.readonly
    };
  });
  const numberCount = computed(() => Number(props.count));

  const writeabled = computed(() => props.disabled || props.readonly);

  const animationStyle = computed(() => {
    return (n: number) => (animation.value ? { animationDelay: `${50 * n}ms` } : undefined);
  });

  const doraRateItemClass = computed(() => {
    return (n: number) => {
      const classList = [' dora-rate-item', animation.value && value.value > n ? 'dora-rate-item--animation' : ''];
      return classList.join(' ');
    };
  });

  const doraIconSizeClass = computed(() => {
    return `dora-rate-icon-${props.size}`;
  });

  const halfClass = computed(() => {
    return (n: number) => {
      const classList = ['dora-rate-half', showValue.value + 0.5 === n ? 'dora-rate-half--select' : ''];
      return classList.join(' ');
    };
  });

  const halfIconClass = computed(() => {
    const classList = ['dora-rate-half-icon', doraIconSizeClass.value];
    return classList.join(' ');
  });

  const iconClass = computed(() => {
    return (n: number) => {
      const classList = [
        'dora-rate-icon',
        showValue.value >= n ? 'dora-rate-icon--select' : '',
        doraIconSizeClass.value
      ];
      return classList.join(' ');
    };
  });

  // 鼠标移出
  const handleLeave = () => {
    showValue.value = value.value;
  };

  //鼠标移入
  const handleEnter = (n: number) => {
    if (writeabled.value) {
      return;
    }
    showValue.value = n;
    emits('hover-change', n);
  };

  //点击确定分数
  const handleClick = (n: number) => {
    if (writeabled.value) {
      return;
    }
    animation.value = true;

    // 可以清空，并且点击的是已经选中的星星，清空真实的星星数（显示星星数等鼠标移出时更新）
    if (props.allowClear && value.value === n) {
      value.value = 0;
      return;
    }
    value.value = n;
    updateModelValue(n);
  };
  const handleAnimationEnd = (n: number) => {
    if (animation.value && n == Math.ceil(value.value) - 1) {
      animation.value = false;
    }
  };

  // 更新
  const updateModelValue = (n: number) => {
    if (props.modelValue) {
      emits('update:modelValue', n);
      emits('change', n);
    }
  };
</script>
