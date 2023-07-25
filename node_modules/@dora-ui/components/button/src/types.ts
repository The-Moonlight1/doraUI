import { ExtractPropTypes } from 'vue';
export const ButtonType = ['default', 'primary', 'success', 'info', 'danger', 'warning']
export const ButtonSizeType = ['default', 'medium', 'small', 'mini', 'tiny']
export const buttonProps = {
    type: {
        type: String,
        validator(value: string) {
            return ButtonType.includes(value)
        }
    },
    size: {
        type: String,
        validator(value: string) {
            return ButtonSizeType.includes(value)
        }
    },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>