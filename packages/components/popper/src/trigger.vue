<template>
  <ForwarRef v-if="nowrap" :set-ref="setTriggerRef" only-child>
    <slot v-bind="$attrs" />
  </ForwarRef>
  <span v-else ref="triggerRef" class="dora-popper-trigger" v-bind="$attrs">
    <slot />
  </span>
</template>

<script lang="ts" setup>
  import { inject, onBeforeUnmount, watch } from 'vue';
  // import { composeEventHandlers } from '@vangle/utils';
  import { PopperContextKey, TriggerProps } from './popper';
  import ForwarRef from './forward-ref';
  const composeEventHandlers = <E,>(
    theirsHandler?: (event: E) => boolean | void,
    oursHandler?: (event: E) => void,
    { checkForDefaultPrevented = true } = {}
  ) => {
    const handleEvent = (event: E) => {
      const shouldPrevent = theirsHandler?.(event);

      if (checkForDefaultPrevented === false || !shouldPrevent) {
        return oursHandler?.(event);
      }
    };
    return handleEvent;
  };
  const props = defineProps(TriggerProps);

  const { onClose, onOpen, triggerRef } = inject(PopperContextKey)!;

  const setTriggerRef = (el: HTMLElement) => {
    triggerRef.value = el;
    triggerRef?.value?.classList.add('dora-popper-trigger');
  };

  let isMousedown = false;
  const onMouseup = () => {
    onClose();
    isMousedown = false;
  };
  const onBlur = composeEventHandlers(props.onBlur, () => {
    props.trigger === 'focus' && onClose();
  });
  const onFocus = composeEventHandlers(props.onFocus, () => {
    if (props.trigger === 'focus') onOpen();
    else if (!isMousedown) onOpen();
  });

  const onClick = composeEventHandlers(props.onClick, e => {
    if (props.trigger === 'click') {
      onOpen();
      document.addEventListener('mouseup', onMouseup, { once: true });
    } else if ((e as MouseEvent).detail === 0) {
      onClose();
    }
  });
  const onMousedown = composeEventHandlers(props.onMouseDown, () => {
    isMousedown = true;
    if (props.trigger !== 'click' && props.trigger === 'hover') {
      onOpen();
    }
    document.addEventListener('mouseup', onMouseup, { once: true });
  });
  const onMouseenter = composeEventHandlers(props.onMouseEnter, () => {
    props.trigger === 'hover' && onOpen();
  });
  const onMouseleave = composeEventHandlers(props.onMouseLeave, () => {
    if (isMousedown) return;
    props.trigger === 'hover' && onClose();
  });

  const events = {
    blur: onBlur,
    click: onClick,
    focus: onFocus,
    mousedown: onMousedown,
    mouseenter: onMouseenter,
    mouseleave: onMouseleave
  };

  const setEvents = <T extends (e: Event) => void>(
    el: HTMLElement | null,
    events: Record<string, T>,
    type: 'addEventListener' | 'removeEventListener'
  ) => {
    if (el) {
      Object.entries(events).forEach(([name, handler]) => {
        el[type](name, handler);
      });

      el.addEventListener('mouseup', e => e.stopPropagation());
    }
  };

  watch(triggerRef, (triggerEl: HTMLElement | null, previousTriggerEl: HTMLElement | null) => {
    setEvents(triggerEl, events, 'addEventListener');
    setEvents(previousTriggerEl, events, 'removeEventListener');
  });

  onBeforeUnmount(() => {
    setEvents(triggerRef.value, events, 'removeEventListener');
    document.removeEventListener('mouseup', onMouseup);
  });
</script>
