<template>
  <Transition name="message-fade" @before-leave="beforeLeave" @after-leave="emit('destroy')">
    <div v-show="visible" :id="id" :class="[n(), type && n('--' + type)]" :style="styles">
      <DoraIcon :name="icon || iconMap[type]" />
      <div v-if="!dangerouslyUseHTMLString" :class="n('content')">
        <slot>{{ message }}</slot>
      </div>
      <div v-else :class="n('content')" v-html="message"></div>
      <div v-if="showClose" :class="n('closeBtn')" @click="close">
        <DoraIcon name="close" />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
  import { onMounted, onBeforeMount, ref, computed } from 'vue';
  import DoraIcon from '../../icon';
  import { MessageProps } from './message';
  const iconMap: any = {
    info: 'reminder',
    success: 'tick',
    warning: 'warning',
    error: 'Cross'
  };
  const props = defineProps(MessageProps);
  const emit = defineEmits(['destroy', 'close']);

  type ClassName = string | undefined | null;
  type Classes = (ClassName | [any, ClassName, ClassName?])[];
  function createNamespace(name: string) {
    const namespace = `dora-${name}`;

    const createBEM = (suffix?: string): string => {
      if (!suffix) return namespace;

      return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`;
    };

    const classes = (...classes: Classes): any[] => {
      return classes.map(className => {
        if (Array.isArray(className)) {
          const [condition, truthy, falsy = null] = className;
          return condition ? truthy : falsy;
        }

        return className;
      });
    };

    return {
      n: createBEM,
      classes
    };
  }
  const { n } = createNamespace('message');
  const visible = ref(false);
  const timerId = ref();

  const styles = computed(() => ({
    top: props.offset + 'px',
    zIndex: props.zIndex
  }));

  const startTimer = () => {
    timerId.value = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  };

  const clearTimer = () => {
    if (timerId.value) {
      clearTimeout(timerId.value);
      timerId.value = undefined;
    }
  };

  const close = () => (visible.value = false);

  const beforeLeave = () => {
    emit('close');
  };

  onMounted(() => {
    startTimer();
    visible.value = true;
  });

  onBeforeMount(() => {
    clearTimer();
  });

  defineExpose({
    visible,
    close
  });
</script>
