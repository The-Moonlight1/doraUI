import { DividerOrientation, DividerFontAlign, DividerFontType, DividerType } from './interface';
import { PropType } from 'vue';

export const Props = {
  orientation: {
    type: String as PropType<DividerOrientation>,
    default: (): DividerOrientation => 'horizontal',
    validator(value: DividerOrientation) {
      return (['horizontal', 'vertical'] as const).includes(value);
    }
  },
  type: {
    type: String as PropType<DividerType>,
    default: (): DividerType => 'solid',
    validator(value: DividerType) {
      return (['solid', 'dashed', 'dotted'] as const).includes(value);
    }
  },
  fontAlign: {
    type: String as PropType<DividerFontAlign>,
    default: (): DividerFontAlign => 'center',
    validator(value: DividerFontAlign) {
      return (['left', 'right', 'center'] as const).includes(value);
    }
  },
  fontType: {
    type: String as PropType<DividerFontType>,
    default: (): DividerFontType => 'primary',
    validator(value: DividerFontType) {
      return (['primary', 'success', 'warning', 'danger', 'info', 'light', 'dark'] as const).includes(value);
    }
  },
  orientationMargin: {
    type: String
  }
};
