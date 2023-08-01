import { _ as t, G as e, o as l, c as p, k as c, L as a, w as n, U as r, a as o } from './chunks/framework.100f4c70.js';
const f = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md","lastUpdated":1690379997000}'
  ),
  d = { name: 'components/button/index.md' },
  i = { style: { 'margin-bottom': '20px' } },
  D = r(
    `<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ msg }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是ComA组件</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,
    1
  );
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
