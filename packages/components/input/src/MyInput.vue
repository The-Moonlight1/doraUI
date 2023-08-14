<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { Props } from './input';
  const props = defineProps(Props);
  const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'clear']);
  const showClear = ref(false);
  const cType = ref(props.type);
  const focus = ref(props.autofocus);
  function handleMouseEnter() {
    showClear.value = props.clearable;
  }

  function handleMouseLeave() {
    showClear.value = false;
  }
  const value = computed<any>({
    get: () => props.modelValue,
    set: (val: any) => {
      emit('update:modelValue', val);
    }
  });
  const onFocus = () => {
    focus.value = true;
    emit('focus');
  };
  const onBlur = () => {
    focus.value = false;
    emit('blur');
  };
  const clear = () => {
    value.value = '';
    emit('clear');
  };
  const passwordView = ref(true);
  const handleViewPassword = () => {
    if (props.type !== 'password') return;
    passwordView.value = !passwordView.value;
    if (!passwordView.value) {
      cType.value = 'text';
    } else {
      cType.value = props.type;
    }
  };
</script>

<template>
  <div class="dora-input">
    <div
      :class="['dora-input__wrapper', focus && 'is-focus']"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <span v-if="$slots.prefix || prefixIcon" class="dora-input__prefix">
        <slot name="prefix"></slot>
        <dora-icon v-if="prefixIcon" :name="prefixIcon" />
      </span>
      <input
        ref="inputRef"
        v-model="value"
        class="dora-input__inner"
        :type="cType"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :readonly="readonly"
        :disabled="disabled"
        @focus="onFocus"
        @blur="onBlur"
        v-bind="$attrs"
      />
      <span v-if="showPassword || clearable" class="dora-input__suffix">
        <template v-if="showPassword">
          <dora-icon :name="passwordView ? 'view' : 'hide'" @click="handleViewPassword"></dora-icon>
        </template>
        <dora-icon v-show="showClear" name="circle-close" @click.stop="clear"></dora-icon>
      </span>
      <span v-if="$slots.suffix || suffixIcon" class="dora-input__suffix">
        <slot name="suffix"></slot>
        <dora-icon v-if="suffixIcon" :name="suffixIcon"></dora-icon>
      </span>
    </div>
  </div>
</template>
