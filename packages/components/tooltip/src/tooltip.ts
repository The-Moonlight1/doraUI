// import { StyleValue } from 'vue';

import { ExtractPropTypes, PropType } from 'vue';

const PLACEMENT = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom'
] as const;
export type Placement = (typeof PLACEMENT)[number];

const TRIGGER = ['hover', 'focus', 'click', 'contextMenu', 'none'] as const;
export type Trigger = (typeof TRIGGER)[number];
export const Props = {
  title: {
    type: String,
    default: 'hello tooltip'
  },
  placement: {
    type: String as () => Placement,
    default: 'top',
    validator: (val: Placement) => {
      return PLACEMENT.includes(val);
    }
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: (val: Trigger) => {
      return TRIGGER.includes(val);
    }
  },
  visible: {
    required: false,
    default: null,
    type: Boolean as PropType<boolean | null>
  },
  open: {
    type: Boolean,
    default: false
  },
  closeDelay: {
    type: Number,
    default: 300
  },
  openDelay: {
    type: Number,
    default: 0
  },
  autoAdjustOverflow: {
    type: Boolean,
    default: false
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
  destroyTooltipOnHide: {
    type: Boolean,
    default: false
  },
  arrow: {
    type: Boolean,
    default: true
  }
};

export type TooltipProps = ExtractPropTypes<typeof Props>;
