import type { ExtractPropTypes } from 'vue';

export const Props = {
  name: {
    type: String,
    default: (): string => 'aixin'
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  pointer: {
    type: Boolean,
    default: (): boolean => false
  }
};

export type IconProps = ExtractPropTypes<typeof Props>;
