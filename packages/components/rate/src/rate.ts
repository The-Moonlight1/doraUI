const SIZES = ['s', 'm', 'l', 'xl'] as const;
type Size = (typeof SIZES)[number];

export const RateProps = {
  count: {
    type: [String, Number],
    default: 5
  },
  modelValue: {
    type: [String, Number],
    default: 3.5
  },
  defaultValue: {
    type: [String, Number],
    default: 0
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  allowClear: {
    type: Boolean,
    default: false
  },
  grading: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#fadb14'
  },
  icon: {
    type: String,
    default: 'star-fill'
  },
  size: {
    type: String,
    default: 'm',
    validator: (val: string) => SIZES.includes(val as Size)
  }
};
