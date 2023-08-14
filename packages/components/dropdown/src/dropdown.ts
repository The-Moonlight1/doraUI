import { DropdownPosition, DropdownTriger } from './interface';
import { PropType, ExtractPropTypes } from 'vue';

export const Props = {
  trigger: {
    type: String as PropType<DropdownTriger>,
    default: 'hover'
  },
  position: {
    type: String as PropType<DropdownPosition>,
    default: 'bottom'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: false
  },
  showArrow: {
    type: Boolean,
    default: true
  }
};
export type DropdownPropps = ExtractPropTypes<typeof Props>;
