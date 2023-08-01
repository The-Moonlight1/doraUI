import { _ as t, G as e, o as l, c as p, k as c, L as a, w as n, U as r, a as o } from './chunks/framework.100f4c70.js';
const f = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md","lastUpdated":1690379997000}'
  ),
  d = { name: 'components/button/index.md' },
  i = { style: { 'margin-bottom': '20px' } },
  D = r('', 1);
function F(_, y, m, u, C, g) {
  const s = e('dora-button');
  return (
    l(),
    p('div', null, [
      c('div', i, [
        a(s, { color: 'blue' }, { default: n(() => [o('主要按钮')]), _: 1 }),
        a(s, { color: 'green' }, { default: n(() => [o('绿色按钮')]), _: 1 }),
        a(s, { color: 'gray' }, { default: n(() => [o('灰色按钮')]), _: 1 }),
        a(s, { color: 'yellow' }, { default: n(() => [o('黄色按钮')]), _: 1 }),
        a(s, { color: 'red' }, { default: n(() => [o('红色按钮')]), _: 1 })
      ]),
      D
    ])
  );
}
const h = t(d, [['render', F]]);
export { f as __pageData, h as default };
