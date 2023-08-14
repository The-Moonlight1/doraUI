import { InputSize, InputType } from './interface';
export const Props = {
  size: {
    type: String as () => InputSize,
    default: 'm',
    validator(value: InputSize) {
      return (['s', 'm', 'l', 'xl'] as const).includes(value);
    }
  },
  type: {
    type: String,
    default: 'text',
    validator(value: InputType) {
      return (['text', 'password'] as const).includes(value);
    }
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: String
  },
  prefixIcon: {
    type: String
  },
  showPassword: Boolean,
  autofocus: Boolean
};
