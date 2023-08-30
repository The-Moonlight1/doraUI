// export type DropdownTriger = 'click' | 'hover';
// export type DropdownPosition = 'bottom' | 'bl' | 'br' | 'top' | 'tl' | 'tr';

export const TYPES = ['default', 'primary', 'success', 'info', 'danger', 'warning'] as const;
export type Type = (typeof TYPES)[number];

export const SIZES = ['default', 'large', 'small'] as const;
export type Size = (typeof SIZES)[number];
