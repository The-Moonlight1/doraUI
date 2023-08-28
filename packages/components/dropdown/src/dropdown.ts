import { PropType } from 'vue';
import { Placement, Trigger } from '../../tooltip/src/tooltip';
import { Size, Type } from './interface';

export const DropdownProps = {
  title: {
    type: String,
    default: ''
  },
  placement: {
    type: String as () => Placement,
    default: 'bottom',
    validator: (val: Placement) => {
      return (['top', 'left', 'right', 'bottom', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'] as const).includes(
        val
      );
    }
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: (val: Trigger) => {
      return (['hover', 'focus', 'click', 'contextMenu', 'none'] as const).includes(val);
    }
  },
  closeDelay: {
    type: Number,
    default: 80
  },
  openDelay: {
    type: Number,
    default: 80
  },
  open: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<Type>,
    default: 'default'
  },
  size: {
    type: String as PropType<Size>,
    default: 'm'
  },
  overlayStyle: {
    type: Object,
    default: () => {}
  },
  overlayClassName: {
    type: String,
    default: ''
  },
  zIndex: {
    type: Number,
    default: 1000
  },
  arrow: {
    type: Boolean,
    default: true
  }
};
