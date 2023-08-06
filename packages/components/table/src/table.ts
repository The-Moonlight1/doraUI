import { ExtractPropTypes } from 'vue';

// export type TableProps = {
//   //   columns?: any[];
//   //   data?: any[];
//   columns?: [];
//   data?: [];
// };

export const Props = {
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
};

export type TableProps = ExtractPropTypes<typeof Props>;
