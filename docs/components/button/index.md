# Button 按钮

常用的按钮操作

## 基础用法

使用 `type`、`plain`、`round`和 `circle` 来定义按钮的样式。

<preview path="./basic.vue" title="基础用法" description="使用 type、plain、round 和 circle 来定义按钮的样式。"></preview>

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用

<p text="sm">使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>

<preview path="./disabled.vue" title="禁用状态" description="你可以使用 disabled 属性来定义按钮是否被禁用"></preview>

## 文字按钮

::: tip
文字按钮
:::

<preview path="./textButton.vue" title="文字按钮" description="你可以使用 text 属性来定义按钮是否为文字按钮"></preview>

## 图标按钮

使用图标为按钮添加更多的含义。你也可以单独使用图标不添加文字来节省显示区域占用  
使用 `icon` 属性来为按钮添加图标。您可以在我们的 Icon 组件中找到所需图标。

<preview path="./icon.vue" title="文字按钮" description="你可以使用 icon 属性来定义按钮是否为文字按钮"></preview>

## 加载状态按钮

点击按钮来加载数据，冰箱用户反馈加载状态  
通过设置 `loading` 属性为 `true` 来显示加载中状态

<preview path="./loading.vue" title="文字按钮" description="你可以使用 icon 属性来定义按钮是否为文字按钮"></preview>

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

<preview path="./size.vue" title="文字按钮" description="你可以使用 icon 属性来定义按钮是否为文字按钮"></preview>

<br/>

## Button API

### Button Attributres

| 属性名    |           说明           |      类型 | 默认值 |
| --------- | :----------------------: | --------: | ------ |
| size      |           尺寸           |    `emum` | ——     |
| type      |           类型           |    `enum` | ——     |
| plain     |      是否为朴素按钮      | `boolean` | false  |
| bg        | 是否显示文字按钮背景颜色 | `boolean` | false  |
| round     |      是否为圆角按钮      | `boolean` | false  |
| circle    |      是否为圆形按钮      | `boolean` | false  |
| loading   |     是否为加载中状态     | `boolean` | false  |
| disabled  |    按钮是否为禁用状态    | `boolean` | false  |
| autofocus |   原生 autofocus 属性    | `boolean` | false  |
