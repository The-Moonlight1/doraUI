# Progress 进度条

## 基本用法

进度条基本用法
<preview path="./basic.vue"></preview>

## 环形进度条

设置 `type="circle"` 将会展示环形进度条。
<preview path="./progress-circle.vue"></preview>

## 进度条尺寸 size

进度条分为：`s`、`m`、`l` 3 种尺寸。高度分别为：`4px`、`6px`、`8px`。默认尺寸为 `m`。
<preview path="./size.vue"></preview>

## 进度条状态

通过 `status` 指定进度条状态
<preview path="./status.vue"></preview>

## 环形进度条状态

设置 `status` 将会展示不同状态的环形进度条。
<preview path="./circle-status.vue"></preview>

## 自定义内容

通过`slot`添加自定义内容。
<preview path="./slot.vue"></preview>

### API

| 参数        | 描述                       | 类型                         | 默认值 |
| ----------- | -------------------------- | ---------------------------- | ------ |
| type        | 进度条类型（必填）         | 'line'｜'circle'             | line   |
| percent     | 百分比                     | number                       | 20     |
| size        | 尺寸                       | 's'｜'m' ｜'l'               | m      |
| strokeColor | 进度条颜色                 | string                       | -      |
| status      | 进度条状态                 | 'normal'｜'success'｜'error' | normal |
| showText    | 是否显示进度数值和状态图标 | boolean                      | true   |

### Slot

| 插槽名 | 描述                 | 参数    |
| ------ | -------------------- | ------- |
| format | 自定义进度条尾部内容 | percent |
