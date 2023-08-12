import { linkType } from './interface';

export const Props = {
  type: {
    type: String as () => linkType,
    default: (): linkType => 'default',
    validator(value: linkType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning'] as const).includes(value);
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  underline: {
    type: Boolean,
    default: (): boolean => true
  },
  href: {
    type: String,
    default: (): string => ''
  }
};
