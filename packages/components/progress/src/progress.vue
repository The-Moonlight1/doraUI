<template>
  <div class="dora-progress">
    <template v-if="props.type === 'line'">
      <div :class="['dora-progress-line-wrapper', doraProgressSizeCls[props.type]]">
        <div
          class="dora-progress-inner"
          :style="{
            '--progress-inner-w': progressPercent,
            '--progress-inner-color': setProgressState
          }"
        ></div>
        <div v-if="props.showText" class="dora-progress-text">
          <slot name="format" :percent="props.percent">
            <div>{{ progressPercent }}</div>
            <div
              v-if="getIconName(props.status)"
              class="dora-progress-icon"
              :style="{ color: getIconColor(props.status) }"
            >
              <!-- <component :is="getIconName(props.status)"></component> -->
              <dora-icon :name="getIconName(props.status, true)"></dora-icon>
            </div>
          </slot>
        </div>
      </div>
    </template>
    <template v-else-if="props.type === 'circle'">
      <div :class="['dora-progress-circle-wrapper', doraProgressSizeCls[props.type]]">
        <svg class="dora-progress-svg" :style="doraProgressCircleStyle.svgWh">
          <circle
            :r="doraProgressCircleStyle.r"
            :cx="doraProgressCircleStyle.cx"
            :cy="doraProgressCircleStyle.cy"
            :stroke-width="doraProgressCircleStyle.strokeWidth"
            fill="transparent"
            class="dora-progress-circle"
            stroke="#e8e8e8"
          ></circle>
          <circle
            :r="doraProgressCircleStyle.r"
            :cx="doraProgressCircleStyle.cx"
            :cy="doraProgressCircleStyle.cy"
            :stroke-width="doraProgressCircleStyle.strokeWidth"
            fill="transparent"
            class="dora-progress-circle"
            :stroke="setProgressState"
            :stroke-dasharray="progressValues.circumference"
            :stroke-dashoffset="progressValues.dashoffset"
          ></circle>
        </svg>
        <div v-if="props.showText" class="dora-progress-circle-text">
          <slot name="format" :percent="props.percent">
            <div
              v-if="getIconName(props.status)"
              class="dora-progress-circle-icon"
              :style="{ color: getIconColor(props.status) }"
            >
              <!-- <component :is="getIconName(props.status, true)"></component> -->
              <dora-icon :name="getIconName(props.status, true)"></dora-icon>
            </div>
            <div v-else>{{ progressPercent }}</div>
          </slot>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { getIconColor, getIconName, getSvgSize } from './util';
  //   import { ProgressProps } from './progress';
  import { PSize } from './util';
  export type Status = 'normal' | 'success' | 'error';

  // 进度条组件传参类型
  export type ProgressProps = {
    type?: 'line' | 'circle';
    percent?: number;
    strokeColor?: string;
    size?: PSize;
    status?: Status;
    showText?: boolean;
  };
  const props = withDefaults(defineProps<ProgressProps>(), {
    type: 'line',
    percent: 20,
    strokeColor: '', // 轨道颜色
    size: 'm',
    status: 'normal',
    showText: true // 是否显示文字
  });
  // 进度条百分比
  const progressPercent = computed(() => props.percent + '%');
  // 绑定尺寸class
  const doraProgressSizeCls = computed(() => ({
    line: `dora-progress--${props.size}`,
    circle: `dora-progress-circle--${props.size}`
  }));

  // 设置进度条颜色
  const setProgressState = computed(() => getIconColor(props.status) || props.strokeColor);
  // 环形进度条
  const doraProgressCircleStyle = computed(() => {
    const sizeVal = getSvgSize(props.size);
    const strokeWidth = Number(sizeVal[0]);
    const val = Number(sizeVal[1]) / 2;
    return {
      svgWh: `width:${val * 2}px;height:${val * 2}px`,
      strokeWidth,
      r: (Number(sizeVal[1]) - strokeWidth) / 2,
      cx: val,
      cy: val
    };
  });
  // 环形进度值
  const progressValues = computed(() => {
    const { percent } = props;
    const { r } = doraProgressCircleStyle.value;
    const isMax = percent >= 100;
    const offset = percent === 50 ? 0 : 1;
    const circumference = 2 * Math.PI * (isMax ? r : r - offset);
    const val = circumference * (1 - percent / 100);
    return {
      circumference,
      dashoffset: isMax ? percent / 100 : val
    };
  });
</script>
