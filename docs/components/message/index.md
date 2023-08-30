# Message 全局提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。 Dora 注册了一个全局的 `$message`方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<preview path="./basic.vue"></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为`info`。 此时正文内容以 `message` 的值传入。 同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 `open4` 那样直接调用。
<preview path="./different-types.vue"></preview>

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 true 此外，和 Notification 一样，Message 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。

<preview path="./closable.vue"></preview>

## 使用 HTML 片段作为正文内容

`message` 还支持使用 HTML 字符串作为正文内容。

将`dangerouslyUseHTMLString`属性设置为 true,`message` 就会被当作 HTML 片段处理。

<preview path="./raw-html.vue"></preview>

## API

| 属性                       | 说明                                          | 类型                                          | 默认值          |
| -------------------------- | --------------------------------------------- | --------------------------------------------- | --------------- |
| `message`                  | 消息文字                                      | `string \| VNode \| (() => VNode)`            | —               |
| `type`                     | 消息类型                                      | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'`        |
| `icon`                     | 自定义图标，该属性会覆盖 `type` 的图标。      | `string \| Component`                         | —               |
| `dangerouslyUseHTMLString` | 是否将 message 属性作为 HTML 片段处理         | `boolean`                                     | `false`         |
| `custom-class`             | 自定义类名                                    | `string`                                      | —               |
| `duration`                 | 显示时间，单位为毫秒。 设为 0 则不会自动关闭  | `number`                                      | `3000`          |
| `show-close`               | 是否显示关闭按钮                              | `boolean`                                     | `false`         |
| `center`                   | 文字是否居中                                  | `boolean`                                     | `false`         |
| `on-close`                 | 关闭时的回调函数, 参数为被关闭的 message 实例 | `function`                                    | —               |
| `offset`                   | Message 距离窗口顶部的偏移量                  | `number`                                      | `20`            |
| `appendTo`                 | 设置组件的根元素                              | `string \| HTMLElement`                       | `document.body` |

### Message 方法

调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 `close` 方法。

| 方法名  | 描述               |
| ------- | ------------------ |
| `close` | 关闭当前的 Message |
