// import { StyleValue } from 'vue';

import { ExtractPropTypes } from 'vue';

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

// export type TooltipProps = {
//   title?: string;
//   placement?: Placement;
//   trigger?: Trigger | Trigger[];
//   open?: boolean;
//   closeDelay?: number;
//   openDelay?: number;
//   autoAdjustOverflow?: boolean;
//   overlayStyle?: StyleValue;
//   overlayClassName?: string;
//   zIndex?: number;
//   destroyTooltipOnHide?: boolean;
//   arrow?: boolean;
// };
export const Props = {
  title: {
    type: String,
    default: ''
  },
  placement: {
    type: String,
    default: 'top'
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: (val: Trigger) => {
      return TRIGGER.includes(val);
    }
  },
  open: {
    type: Boolean,
    default: false
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  autoAdjustOverflow: {
    type: Boolean,
    default: true
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

// export type TooltipEmit = {
//   (e: 'update:open', ev: boolean): void;
//   (e: 'openChange', ev: boolean): void;
// };

export type TooltipProps = ExtractPropTypes<typeof Props>;
