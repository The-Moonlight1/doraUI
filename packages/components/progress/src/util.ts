import type { Status } from './progress';
const SIZES = ['s', 'm', 'l', 'xl'] as const;
type Size = (typeof SIZES)[number];

export type PSize = Exclude<Size, 'xl'>;
export const statusColor = {
  success: '#1fb4a2',
  error: '#fa5247',
  normal: '#2B5AED'
};

/**
 * 根据状态获取对应的 Icon 颜色
 */
export const getIconColor = (status: Status) => statusColor[status] || statusColor['normal'];

/**
 * 根据状态获取对应的 Icon Name
 */
export const getIconName: (status: Status, isLinear?: boolean) => string = (status: Status, isLinear?: boolean) =>
  ({
    normal: '',
    success: isLinear ? 'IconTickOutline' : 'IconTickFill',
    error: isLinear ? 'IconCloseOutline' : 'IconCrossFill'
  })[status];

/**
 * 根据size获取对应的 svg大小
 */
export const getSvgSize: (size: PSize) => string[] = (size: PSize) =>
  ({
    s: ['4', '64'],
    m: ['6', '80'],
    l: ['8', '108']
  })[size];
