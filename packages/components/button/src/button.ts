import { ExtractPropTypes, PropType } from 'vue';
import type { ButtonNativeType, ButtonSizeType, ButtonType } from './interface';

export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => 'default',
    // 自定义类型校验函数
    validator(value: ButtonType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning'] as const).includes(value);
    }
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    validator(value: ButtonSizeType) {
      return (['default', 'large', 'small'] as const).includes(value);
    }
  },
  plain: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  circle: {
    type: Boolean,
    default: (): boolean => false
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  text: {
    type: Boolean,
    default: (): boolean => false
  },
  bg: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  autoFocus: {
    type: Boolean,
    default: (): boolean => false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value) {
      return (['button', 'submit', 'reset'] as const).includes(value);
    }
  }
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
