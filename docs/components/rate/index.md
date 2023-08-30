# Rate 评

基本用法
评分组件基本用法。
<preview path="./basic.vue"></preview>

## 尺寸 size

按钮分为：`s`、`m`、`l`、`xl` 四种尺寸。高度分别为：`14px`、`18px`、`22px`、`26px`。默认尺寸为 `l`。
<preview path="./size.vue"></preview>

## 半选

指定 allow-half 来开启半选。
<preview path="./half.vue"></preview>

## 自定义颜色

通过 color 可以自定义颜色。另外可以通过对象形式自定义不同分值时的颜色。
<preview path="./color.vue"></preview>

## 只读模式

通过设置 readonly 属性让评分组件为只读状态。
<preview path="./readonly.vue"></preview>

## 支持清除

通过设置 allow-clear 来允许清除评分。
<preview path="./clear.vue"></preview>

## 任意长度的评分

通过指定 count 来指定任意长度的评分组件。
<preview path="./count.vue"></preview>

## 全部功能

<preview path="./all.vue"></preview>

### API

| 参数                  | 描述           | 类型                | 默认值            |
| --------------------- | -------------- | ------------------- | ----------------- |
| count                 | 评分的总数     | string ｜ number    | 5                 |
| size                  | 尺寸           | `s`｜`m`｜`l`｜`xl` | `'l'`             |
| model-value (v-model) | 绑定值         | string ｜ number    | -                 |
| default-value         | 默认值         | string ｜ number    | 0                 |
| allow-half            | 是否允许半选   | boolean             | false             |
| allow-clear           | 是否允许清除   | boolean             | false             |
| readonly              | 是否为只读状态 | boolean             | false             |
| disabled              | 是否禁用       | boolean             | false             |
| color                 | 颜色           | string              | -                 |
| icon                  | Icon 组件      | string              | 'yike-wujiaoxing' |

### Events

| 事件名       | 描述                   | 参数          |
| ------------ | ---------------------- | ------------- |
| change       | 值改变时触发           | value: number |
| hover-change | 鼠标移动到数值上时触发 | value: number |
