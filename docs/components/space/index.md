# Space 间距

设置组件之间的间距

## 何时使用

避免组件紧贴在一起，拉开统一的空间

- 适合行内元素
- 可以设置各种水平对齐方式
- 需要表单组件之间紧凑连接且合并边框时，

## 代码演示

### 基本用法

<preview path="./basic.vue"></preview>

### 垂直间距

与基本用法一样，这里不做赘述

### 间距大小

控制 `size` 属性

### 对齐方式

<preview path="./alignment.vue"></preview>

## API

| 属性名    | 描述                                                                                          | 类型                                                                    | 默认值    |
| --------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| direction | 间距方向                                                                                      | `horizontal / vertical`                                                 | horizonal |
| size      | 间距大小,如 20px 2em，默认单位为 px ，支持数组形式来分别设置横向和纵向间距,也可以使用内置大小 | `number / string / number / string[] / small / middle / large /larger ` | middle    |
| align     | 设置子元素的对齐方式                                                                          | `start / end / center`                                                  | -         |