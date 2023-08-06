# Table 表格

展示行列数据

## 何时使用

- 当有大量结构化的数据需要展示时
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时

## 如何使用

指定表格的数据源, `columns` 表头 `data` 表格数据,  
<mark>建议是将这两个数据均放入放到 `tableData` 对象中</mark>

```ts
const tableData = {
  columns: ['name', 'age', 'gender'],
  data: [
    {
      date: 'yan',
      name: '21',
      address: '山西省运城市'
    },
    {
      date: 'yan',
      name: '21',
      address: '山西省运城市'
    },
    {
      date: 'yan',
      name: '21',
      address: '山西省运城市'
    },
    {
      date: 'yan',
      name: '21',
      address: '山西省运城市'
    }
  ]
};
```

## 基本用法

<preview path="./basic.vue"></preview>

## Table API

### Table Attributres

| 属性名  | 描述             | 类型       | 默认值 |
| ------- | ---------------- | ---------- | ------ |
| columns | 表格列的配置描述 | —          | —      |
| data    | 数据数组         | `object[]` | —      |
