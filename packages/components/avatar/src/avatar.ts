const SIZES = ['s', 'm', 'l', 'xl'] as const;
export type Size = (typeof SIZES)[number];
