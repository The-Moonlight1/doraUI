/**
 * 1. 声明并导出类型
 * 2. 供 props 定义类型
 */

import type { ButtonHTMLAttributes } from 'vue';

export type ButtonSizeType = 'default' | 'large' | 'small';

export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning';

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>;
