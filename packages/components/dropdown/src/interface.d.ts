// export type DropdownTriger = 'click' | 'hover';
// export type DropdownPosition = 'bottom' | 'bl' | 'br' | 'top' | 'tl' | 'tr';

export const TYPES = ['primary', 'secondary', 'outline', 'default'] as const;
export type Type = (typeof TYPES)[number];

export const SIZES = ['s', 'm', 'l', 'xl'] as const;
export type Size = (typeof SIZES)[number];
