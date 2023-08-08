import { alignType, directionType, sizeType } from './interface';
import { PropType } from 'vue';

export const Props = {
  align: {
    type: String as PropType<alignType>
  },
  direction: {
    type: String as PropType<directionType>,
    default: 'horizontal',
    validator: (value: directionType) => {
      return ['vertical', 'horizontal'].includes(value);
    }
  },
  size: {
    type: String as PropType<sizeType>,
    default: 'medium',
    validator: (value: sizeType) => {
      return ['small', 'medium', 'large', 'larger'].includes(value);
    }
  }
};
