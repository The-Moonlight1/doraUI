import {
  d as g,
  o as a,
  c as i,
  r as c,
  n as I,
  a as N,
  t as w,
  _ as m,
  b as $,
  w as v,
  e as f,
  T as pe,
  u as et,
  i as tt,
  P as nt,
  f as he,
  g as b,
  h as V,
  j as D,
  k as u,
  l,
  p as H,
  m as E,
  q as st,
  s as He,
  v as ot,
  x as at,
  y as rt,
  z as j,
  A as Q,
  B as lt,
  C as q,
  D as ee,
  E as fe,
  F as it,
  G,
  H as M,
  I as x,
  J as me,
  K as J,
  L as h,
  M as R,
  N as Ee,
  O as se,
  Q as ge,
  R as De,
  S as ct,
  U as ut,
  V as ze,
  W as Te,
  X as oe,
  Y as dt,
  Z as _t,
  $ as vt,
  a0 as pt,
  a1 as ht
} from './framework.100f4c70.js';
const ft = g({
  __name: 'VPBadge',
  props: { text: {}, type: {} },
  setup(n) {
    return (e, t) => (
      a(),
      i(
        'span',
        { class: I(['VPBadge', e.type ?? 'tip']) },
        [c(e.$slots, 'default', {}, () => [N(w(e.text), 1)], !0)],
        2
      )
    );
  }
});
const mt = m(ft, [['__scopeId', 'data-v-9acf571d']]),
  gt = { key: 0, class: 'VPBackdrop' },
  yt = g({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(n) {
      return (e, t) => (
        a(), $(pe, { name: 'fade' }, { default: v(() => [e.show ? (a(), i('div', gt)) : f('', !0)]), _: 1 })
      );
    }
  });
const $t = m(yt, [['__scopeId', 'data-v-0ae85de0']]),
  P = et;
function bt(n, e) {
  let t,
    o = !1;
  return () => {
    t && clearTimeout(t),
      o
        ? (t = setTimeout(n, e))
        : (n(),
          (o = !0),
          setTimeout(() => {
            o = !1;
          }, e));
  };
}
function de(n) {
  return /^\//.test(n) ? n : `/${n}`;
}
function Z(n) {
  if (tt(n)) return n.replace(nt, '');
  const { site: e } = P(),
    { pathname: t, search: o, hash: s } = new URL(n, 'http://a.com'),
    r =
      t.endsWith('/') || t.endsWith('.html')
        ? n
        : n.replace(/(?:(^\.+)\/)?.*$/, `$1${t.replace(/(\.md)?$/, e.value.cleanUrls ? '' : '.html')}${o}${s}`);
  return he(r);
}
function te({ removeCurrent: n = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: o, page: s, theme: r } = P(),
    d = b(() => {
      var _, y;
      return {
        label: (_ = t.value.locales[o.value]) == null ? void 0 : _.label,
        link: ((y = t.value.locales[o.value]) == null ? void 0 : y.link) || (o.value === 'root' ? '/' : `/${o.value}/`)
      };
    });
  return {
    localeLinks: b(() =>
      Object.entries(t.value.locales).flatMap(([_, y]) =>
        n && d.value.label === y.label
          ? []
          : {
              text: y.label,
              link: kt(
                y.link || (_ === 'root' ? '/' : `/${_}/`),
                r.value.i18nRouting !== !1 && e,
                s.value.relativePath.slice(d.value.link.length - 1),
                !t.value.cleanUrls
              )
            }
      )
    ),
    currentLang: d
  };
}
function kt(n, e, t, o) {
  return e ? n.replace(/\/$/, '') + de(t.replace(/(^|\/)?index.md$/, '$1').replace(/\.md$/, o ? '.html' : '')) : n;
}
const ie = n => (H('data-v-2dadae79'), (n = n()), E(), n),
  Pt = { class: 'NotFound' },
  Vt = ie(() => u('p', { class: 'code' }, '404', -1)),
  wt = ie(() => u('h1', { class: 'title' }, 'PAGE NOT FOUND', -1)),
  St = ie(() => u('div', { class: 'divider' }, null, -1)),
  Lt = ie(() =>
    u(
      'blockquote',
      { class: 'quote' },
      " But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",
      -1
    )
  ),
  Mt = { class: 'action' },
  Bt = ['href'],
  Ct = g({
    __name: 'NotFound',
    setup(n) {
      const { site: e } = P(),
        { localeLinks: t } = te({ removeCurrent: !1 }),
        o = V('/');
      return (
        D(() => {
          var r;
          const s = window.location.pathname.replace(e.value.base, '').replace(/(^.*?\/).*$/, '/$1');
          t.value.length &&
            (o.value =
              ((r = t.value.find(({ link: d }) => d.startsWith(s))) == null ? void 0 : r.link) || t.value[0].link);
        }),
        (s, r) => (
          a(),
          i('div', Pt, [
            Vt,
            wt,
            St,
            Lt,
            u('div', Mt, [
              u('a', { class: 'link', href: l(he)(o.value), 'aria-label': 'go to home' }, ' Take me home ', 8, Bt)
            ])
          ])
        )
      );
    }
  });
const It = m(Ct, [['__scopeId', 'data-v-2dadae79']]);
function Fe(n) {
  return at() ? (rt(n), !0) : !1;
}
function Oe(n) {
  return typeof n == 'function' ? n() : l(n);
}
const Tt = typeof window < 'u',
  Ge = () => {};
function Nt(...n) {
  if (n.length !== 1) return st(...n);
  const e = n[0];
  return typeof e == 'function' ? He(ot(() => ({ get: e, set: Ge }))) : V(e);
}
function At(n) {
  var e;
  const t = Oe(n);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const ye = Tt ? window : void 0;
function xt(...n) {
  let e, t, o, s;
  if ((typeof n[0] == 'string' || Array.isArray(n[0]) ? (([t, o, s] = n), (e = ye)) : ([e, t, o, s] = n), !e))
    return Ge;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const r = [],
    d = () => {
      r.forEach(S => S()), (r.length = 0);
    },
    p = (S, B, C, k) => (S.addEventListener(B, C, k), () => S.removeEventListener(B, C, k)),
    _ = j(
      () => [At(e), Oe(s)],
      ([S, B]) => {
        d(), S && r.push(...t.flatMap(C => o.map(k => p(S, C, k, B))));
      },
      { immediate: !0, flush: 'post' }
    ),
    y = () => {
      _(), d();
    };
  return Fe(y), y;
}
function Ht() {
  const n = V(!1);
  return (
    lt() &&
      D(() => {
        n.value = !0;
      }),
    n
  );
}
function Et(n) {
  const e = Ht();
  return b(() => (e.value, !!n()));
}
function _e(n, e = {}) {
  const { window: t = ye } = e,
    o = Et(() => t && 'matchMedia' in t && typeof t.matchMedia == 'function');
  let s;
  const r = V(!1),
    d = () => {
      s && ('removeEventListener' in s ? s.removeEventListener('change', p) : s.removeListener(p));
    },
    p = () => {
      o.value &&
        (d(),
        (s = t.matchMedia(Nt(n).value)),
        (r.value = !!(s != null && s.matches)),
        s && ('addEventListener' in s ? s.addEventListener('change', p) : s.addListener(p)));
    };
  return Q(p), Fe(() => d()), r;
}
function Re({ window: n = ye } = {}) {
  if (!n) return { x: V(0), y: V(0) };
  const e = V(n.scrollX),
    t = V(n.scrollY);
  return (
    xt(
      n,
      'scroll',
      () => {
        (e.value = n.scrollX), (t.value = n.scrollY);
      },
      { capture: !1, passive: !0 }
    ),
    { x: e, y: t }
  );
}
function Ue(n, e) {
  if (Array.isArray(n)) return n;
  if (n == null) return [];
  e = de(e);
  const t = Object.keys(n)
    .sort((o, s) => s.split('/').length - o.split('/').length)
    .find(o => e.startsWith(de(o)));
  return t ? n[t] : [];
}
function Dt(n) {
  const e = [];
  let t = 0;
  for (const o in n) {
    const s = n[o];
    if (s.items) {
      t = e.push(s);
      continue;
    }
    e[t] || e.push({ items: [] }), e[t].items.push(s);
  }
  return e;
}
function zt(n) {
  const e = [];
  function t(o) {
    for (const s of o) s.text && s.link && e.push({ text: s.text, link: s.link }), s.items && t(s.items);
  }
  return t(n), e;
}
function ve(n, e) {
  return Array.isArray(e) ? e.some(t => ve(n, t)) : q(n, e.link) ? !0 : e.items ? ve(n, e.items) : !1;
}
function z() {
  const n = ee(),
    { theme: e, frontmatter: t } = P(),
    o = _e('(min-width: 960px)'),
    s = V(!1),
    r = b(() => {
      const T = e.value.sidebar,
        A = n.data.relativePath;
      return T ? Ue(T, A) : [];
    }),
    d = b(() => t.value.sidebar !== !1 && r.value.length > 0 && t.value.layout !== 'home'),
    p = b(() => (_ ? (t.value.aside == null ? e.value.aside === 'left' : t.value.aside === 'left') : !1)),
    _ = b(() => (t.value.layout === 'home' ? !1 : t.value.aside != null ? !!t.value.aside : e.value.aside !== !1)),
    y = b(() => d.value && o.value),
    S = b(() => (d.value ? Dt(r.value) : []));
  function B() {
    s.value = !0;
  }
  function C() {
    s.value = !1;
  }
  function k() {
    s.value ? C() : B();
  }
  return {
    isOpen: s,
    sidebar: r,
    sidebarGroups: S,
    hasSidebar: d,
    hasAside: _,
    leftAside: p,
    isSidebarEnabled: y,
    open: B,
    close: C,
    toggle: k
  };
}
function Ft(n, e) {
  let t;
  Q(() => {
    t = n.value ? document.activeElement : void 0;
  }),
    D(() => {
      window.addEventListener('keyup', o);
    }),
    fe(() => {
      window.removeEventListener('keyup', o);
    });
  function o(s) {
    s.key === 'Escape' && n.value && (e(), t == null || t.focus());
  }
}
function Ot(n) {
  const { page: e } = P(),
    t = V(!1),
    o = b(() => n.value.collapsed != null),
    s = b(() => !!n.value.link),
    r = b(() => q(e.value.relativePath, n.value.link)),
    d = b(() => (r.value ? !0 : n.value.items ? ve(e.value.relativePath, n.value.items) : !1)),
    p = b(() => !!(n.value.items && n.value.items.length));
  Q(() => {
    t.value = !!(o.value && n.value.collapsed);
  }),
    Q(() => {
      (r.value || d.value) && (t.value = !1);
    });
  function _() {
    o.value && (t.value = !t.value);
  }
  return { collapsed: t, collapsible: o, isLink: s, isActiveLink: r, hasActiveLink: d, hasChildren: p, toggle: _ };
}
function Gt() {
  const { hasSidebar: n } = z(),
    e = _e('(min-width: 960px)'),
    t = _e('(min-width: 1280px)');
  return { isAsideEnabled: b(() => (!t.value && !e.value ? !1 : n.value ? t.value : e.value)) };
}
const Rt = 71;
function $e(n) {
  return (
    (typeof n.outline == 'object' && !Array.isArray(n.outline) && n.outline.label) || n.outlineTitle || 'On this page'
  );
}
function be(n) {
  const e = [...document.querySelectorAll('.VPDoc h2,h3,h4,h5,h6')]
    .filter(t => t.id && t.hasChildNodes())
    .map(t => {
      const o = Number(t.tagName[1]);
      return { title: Ut(t), link: '#' + t.id, level: o };
    });
  return jt(e, n);
}
function Ut(n) {
  let e = '';
  for (const t of n.childNodes)
    if (t.nodeType === 1) {
      if (t.classList.contains('VPBadge') || t.classList.contains('header-anchor')) continue;
      e += t.textContent;
    } else t.nodeType === 3 && (e += t.textContent);
  return e.trim();
}
function jt(n, e) {
  if (e === !1) return [];
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [o, s] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t;
  n = n.filter(d => d.level >= o && d.level <= s);
  const r = [];
  e: for (let d = 0; d < n.length; d++) {
    const p = n[d];
    if (d === 0) r.push(p);
    else {
      for (let _ = d - 1; _ >= 0; _--) {
        const y = n[_];
        if (y.level < p.level) {
          (y.children || (y.children = [])).push(p);
          continue e;
        }
      }
      r.push(p);
    }
  }
  return r;
}
function qt(n, e) {
  const { isAsideEnabled: t } = Gt(),
    o = bt(r, 100);
  let s = null;
  D(() => {
    requestAnimationFrame(r), window.addEventListener('scroll', o);
  }),
    it(() => {
      d(location.hash);
    }),
    fe(() => {
      window.removeEventListener('scroll', o);
    });
  function r() {
    if (!t.value) return;
    const p = [].slice.call(n.value.querySelectorAll('.outline-link')),
      _ = [].slice
        .call(document.querySelectorAll('.content .header-anchor'))
        .filter(k => p.some(T => T.hash === k.hash && k.offsetParent !== null)),
      y = window.scrollY,
      S = window.innerHeight,
      B = document.body.offsetHeight,
      C = Math.abs(y + S - B) < 1;
    if (_.length && C) {
      d(_[_.length - 1].hash);
      return;
    }
    for (let k = 0; k < _.length; k++) {
      const T = _[k],
        A = _[k + 1],
        [L, K] = Kt(k, T, A);
      if (L) {
        d(K);
        return;
      }
    }
  }
  function d(p) {
    s && s.classList.remove('active'), p !== null && (s = n.value.querySelector(`a[href="${decodeURIComponent(p)}"]`));
    const _ = s;
    _
      ? (_.classList.add('active'), (e.value.style.top = _.offsetTop + 33 + 'px'), (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'));
  }
}
function Ne(n) {
  return n.parentElement.offsetTop - Rt;
}
function Kt(n, e, t) {
  const o = window.scrollY;
  return n === 0 && o === 0 ? [!0, null] : o < Ne(e) ? [!1, null] : !t || o < Ne(t) ? [!0, e.hash] : [!1, null];
}
const Wt = ['href', 'title'],
  Yt = g({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(n) {
      function e({ target: t }) {
        const o = t.href.split('#')[1],
          s = document.getElementById(decodeURIComponent(o));
        s == null || s.focus();
      }
      return (t, o) => {
        const s = G('VPDocOutlineItem', !0);
        return (
          a(),
          i(
            'ul',
            { class: I(t.root ? 'root' : 'nested') },
            [
              (a(!0),
              i(
                M,
                null,
                x(
                  t.headers,
                  ({ children: r, link: d, title: p }) => (
                    a(),
                    i('li', null, [
                      u('a', { class: 'outline-link', href: d, onClick: e, title: p }, w(p), 9, Wt),
                      r != null && r.length ? (a(), $(s, { key: 0, headers: r }, null, 8, ['headers'])) : f('', !0)
                    ])
                  )
                ),
                256
              ))
            ],
            2
          )
        );
      };
    }
  });
const ke = m(Yt, [['__scopeId', 'data-v-24a74f3a']]),
  Xt = n => (H('data-v-5f7dc612'), (n = n()), E(), n),
  Qt = { class: 'content' },
  Jt = { class: 'outline-title' },
  Zt = { 'aria-labelledby': 'doc-outline-aria-label' },
  en = Xt(() =>
    u('span', { class: 'visually-hidden', id: 'doc-outline-aria-label' }, ' Table of Contents for current page ', -1)
  ),
  tn = g({
    __name: 'VPDocAsideOutline',
    setup(n) {
      const { frontmatter: e, theme: t } = P(),
        o = me([]);
      J(() => {
        o.value = be(e.value.outline ?? t.value.outline);
      });
      const s = V(),
        r = V();
      return (
        qt(s, r),
        (d, p) => (
          a(),
          i(
            'div',
            { class: I(['VPDocAsideOutline', { 'has-outline': o.value.length > 0 }]), ref_key: 'container', ref: s },
            [
              u('div', Qt, [
                u('div', { class: 'outline-marker', ref_key: 'marker', ref: r }, null, 512),
                u('div', Jt, w(l($e)(l(t))), 1),
                u('nav', Zt, [en, h(ke, { headers: o.value, root: !0 }, null, 8, ['headers'])])
              ])
            ],
            2
          )
        )
      );
    }
  });
const nn = m(tn, [['__scopeId', 'data-v-5f7dc612']]),
  sn = { class: 'VPDocAsideCarbonAds' },
  on = g({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(n) {
      const e = () => null;
      return (t, o) => (a(), i('div', sn, [h(l(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads'])]));
    }
  }),
  an = n => (H('data-v-6c27c03a'), (n = n()), E(), n),
  rn = { class: 'VPDocAside' },
  ln = an(() => u('div', { class: 'spacer' }, null, -1)),
  cn = g({
    __name: 'VPDocAside',
    setup(n) {
      const { theme: e } = P();
      return (t, o) => (
        a(),
        i('div', rn, [
          c(t.$slots, 'aside-top', {}, void 0, !0),
          c(t.$slots, 'aside-outline-before', {}, void 0, !0),
          h(nn),
          c(t.$slots, 'aside-outline-after', {}, void 0, !0),
          ln,
          c(t.$slots, 'aside-ads-before', {}, void 0, !0),
          l(e).carbonAds ? (a(), $(on, { key: 0, 'carbon-ads': l(e).carbonAds }, null, 8, ['carbon-ads'])) : f('', !0),
          c(t.$slots, 'aside-ads-after', {}, void 0, !0),
          c(t.$slots, 'aside-bottom', {}, void 0, !0)
        ])
      );
    }
  });
const un = m(cn, [['__scopeId', 'data-v-6c27c03a']]);
function dn() {
  const { theme: n, page: e } = P();
  return b(() => {
    const { text: t = 'Edit this page', pattern: o = '' } = n.value.editLink || {};
    let s;
    return typeof o == 'function' ? (s = o(e.value)) : (s = o.replace(/:path/g, e.value.filePath)), { url: s, text: t };
  });
}
function _n() {
  const { page: n, theme: e, frontmatter: t } = P();
  return b(() => {
    var _, y, S, B, C, k;
    const o = Ue(e.value.sidebar, n.value.relativePath),
      s = zt(o),
      r = s.findIndex(T => q(n.value.relativePath, T.link)),
      d = (((_ = e.value.docFooter) == null ? void 0 : _.prev) === !1 && !t.value.prev) || t.value.prev === !1,
      p = (((y = e.value.docFooter) == null ? void 0 : y.next) === !1 && !t.value.next) || t.value.next === !1;
    return {
      prev: d
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                ? t.value.prev.text
                : void 0) ?? ((S = s[r - 1]) == null ? void 0 : S.text),
            link:
              (typeof t.value.prev == 'object' ? t.value.prev.link : void 0) ??
              ((B = s[r - 1]) == null ? void 0 : B.link)
          },
      next: p
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                ? t.value.next.text
                : void 0) ?? ((C = s[r + 1]) == null ? void 0 : C.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((k = s[r + 1]) == null ? void 0 : k.link)
          }
    };
  });
}
const vn = {},
  pn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  hn = u(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z'
    },
    null,
    -1
  ),
  fn = u(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z'
    },
    null,
    -1
  ),
  mn = [hn, fn];
function gn(n, e) {
  return a(), i('svg', pn, mn);
}
const yn = m(vn, [['render', gn]]),
  F = g({
    __name: 'VPLink',
    props: { tag: {}, href: {}, noIcon: { type: Boolean }, target: {}, rel: {} },
    setup(n) {
      const e = n,
        t = b(() => (e.tag ?? e.href ? 'a' : 'span')),
        o = b(() => e.href && Ee.test(e.href));
      return (s, r) => (
        a(),
        $(
          R(t.value),
          {
            class: I(['VPLink', { link: s.href, 'vp-external-link-icon': o.value, 'no-icon': s.noIcon }]),
            href: s.href ? l(Z)(s.href) : void 0,
            target: s.target || (o.value ? '_blank' : void 0),
            rel: s.rel || (o.value ? 'noreferrer' : void 0)
          },
          { default: v(() => [c(s.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    }
  }),
  $n = { class: 'VPLastUpdated' },
  bn = ['datetime'],
  kn = g({
    __name: 'VPDocFooterLastUpdated',
    setup(n) {
      const { theme: e, page: t } = P(),
        o = b(() => new Date(t.value.lastUpdated)),
        s = b(() => o.value.toISOString()),
        r = V('');
      return (
        D(() => {
          Q(() => {
            var d;
            r.value = new Intl.DateTimeFormat(
              void 0,
              ((d = e.value.lastUpdated) == null ? void 0 : d.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short'
              }
            ).format(o.value);
          });
        }),
        (d, p) => {
          var _;
          return (
            a(),
            i('p', $n, [
              N(
                w(((_ = l(e).lastUpdated) == null ? void 0 : _.text) || l(e).lastUpdatedText || 'Last updated') + ': ',
                1
              ),
              u('time', { datetime: s.value }, w(r.value), 9, bn)
            ])
          );
        }
      );
    }
  });
const Pn = m(kn, [['__scopeId', 'data-v-e6622399']]),
  Vn = { key: 0, class: 'VPDocFooter' },
  wn = { key: 0, class: 'edit-info' },
  Sn = { key: 0, class: 'edit-link' },
  Ln = { key: 1, class: 'last-updated' },
  Mn = { key: 1, class: 'prev-next' },
  Bn = { class: 'pager' },
  Cn = ['href'],
  In = ['innerHTML'],
  Tn = ['innerHTML'],
  Nn = { class: 'pager' },
  An = ['href'],
  xn = ['innerHTML'],
  Hn = ['innerHTML'],
  En = g({
    __name: 'VPDocFooter',
    setup(n) {
      const { theme: e, page: t, frontmatter: o } = P(),
        s = dn(),
        r = _n(),
        d = b(() => e.value.editLink && o.value.editLink !== !1),
        p = b(() => t.value.lastUpdated && o.value.lastUpdated !== !1),
        _ = b(() => d.value || p.value || r.value.prev || r.value.next);
      return (y, S) => {
        var B, C, k, T, A, L;
        return _.value
          ? (a(),
            i('footer', Vn, [
              c(y.$slots, 'doc-footer-before', {}, void 0, !0),
              d.value || p.value
                ? (a(),
                  i('div', wn, [
                    d.value
                      ? (a(),
                        i('div', Sn, [
                          h(
                            F,
                            { class: 'edit-link-button', href: l(s).url, 'no-icon': !0 },
                            {
                              default: v(() => [
                                h(yn, { class: 'edit-link-icon', 'aria-label': 'edit icon' }),
                                N(' ' + w(l(s).text), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ['href']
                          )
                        ]))
                      : f('', !0),
                    p.value ? (a(), i('div', Ln, [h(Pn)])) : f('', !0)
                  ]))
                : f('', !0),
              ((B = l(r).prev) != null && B.link) || ((C = l(r).next) != null && C.link)
                ? (a(),
                  i('nav', Mn, [
                    u('div', Bn, [
                      (k = l(r).prev) != null && k.link
                        ? (a(),
                          i(
                            'a',
                            { key: 0, class: 'pager-link prev', href: l(Z)(l(r).prev.link) },
                            [
                              u(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML: ((T = l(e).docFooter) == null ? void 0 : T.prev) || 'Previous page'
                                },
                                null,
                                8,
                                In
                              ),
                              u('span', { class: 'title', innerHTML: l(r).prev.text }, null, 8, Tn)
                            ],
                            8,
                            Cn
                          ))
                        : f('', !0)
                    ]),
                    u('div', Nn, [
                      (A = l(r).next) != null && A.link
                        ? (a(),
                          i(
                            'a',
                            { key: 0, class: 'pager-link next', href: l(Z)(l(r).next.link) },
                            [
                              u(
                                'span',
                                {
                                  class: 'desc',
                                  innerHTML: ((L = l(e).docFooter) == null ? void 0 : L.next) || 'Next page'
                                },
                                null,
                                8,
                                xn
                              ),
                              u('span', { class: 'title', innerHTML: l(r).next.text }, null, 8, Hn)
                            ],
                            8,
                            An
                          ))
                        : f('', !0)
                    ])
                  ]))
                : f('', !0)
            ]))
          : f('', !0);
      };
    }
  });
const Dn = m(En, [['__scopeId', 'data-v-66c3fca0']]),
  zn = {},
  Fn = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  On = u(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z'
    },
    null,
    -1
  ),
  Gn = [On];
function Rn(n, e) {
  return a(), i('svg', Fn, Gn);
}
const Pe = m(zn, [['render', Rn]]),
  Un = { key: 0, class: 'VPDocOutlineDropdown' },
  jn = { key: 0, class: 'items' },
  qn = g({
    __name: 'VPDocOutlineDropdown',
    setup(n) {
      const { frontmatter: e, theme: t } = P(),
        o = V(!1);
      J(() => {
        o.value = !1;
      });
      const s = me([]);
      return (
        J(() => {
          s.value = be(e.value.outline ?? t.value.outline);
        }),
        (r, d) =>
          s.value.length > 0
            ? (a(),
              i('div', Un, [
                u(
                  'button',
                  { onClick: d[0] || (d[0] = p => (o.value = !o.value)), class: I({ open: o.value }) },
                  [N(w(l($e)(l(t))) + ' ', 1), h(Pe, { class: 'icon' })],
                  2
                ),
                o.value ? (a(), i('div', jn, [h(ke, { headers: s.value }, null, 8, ['headers'])])) : f('', !0)
              ]))
            : f('', !0)
      );
    }
  });
const Kn = m(qn, [['__scopeId', 'data-v-8a26b39b']]),
  Wn = n => (H('data-v-aa784cbe'), (n = n()), E(), n),
  Yn = { class: 'container' },
  Xn = Wn(() => u('div', { class: 'aside-curtain' }, null, -1)),
  Qn = { class: 'aside-container' },
  Jn = { class: 'aside-content' },
  Zn = { class: 'content' },
  es = { class: 'content-container' },
  ts = { class: 'main' },
  ns = g({
    __name: 'VPDoc',
    setup(n) {
      const { theme: e } = P(),
        t = ee(),
        { hasSidebar: o, hasAside: s, leftAside: r } = z(),
        d = b(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''));
      return (p, _) => {
        const y = G('Content');
        return (
          a(),
          i(
            'div',
            { class: I(['VPDoc', { 'has-sidebar': l(o), 'has-aside': l(s) }]) },
            [
              c(p.$slots, 'doc-top', {}, void 0, !0),
              u('div', Yn, [
                l(s)
                  ? (a(),
                    i(
                      'div',
                      { key: 0, class: I(['aside', { 'left-aside': l(r) }]) },
                      [
                        Xn,
                        u('div', Qn, [
                          u('div', Jn, [
                            h(un, null, {
                              'aside-top': v(() => [c(p.$slots, 'aside-top', {}, void 0, !0)]),
                              'aside-bottom': v(() => [c(p.$slots, 'aside-bottom', {}, void 0, !0)]),
                              'aside-outline-before': v(() => [c(p.$slots, 'aside-outline-before', {}, void 0, !0)]),
                              'aside-outline-after': v(() => [c(p.$slots, 'aside-outline-after', {}, void 0, !0)]),
                              'aside-ads-before': v(() => [c(p.$slots, 'aside-ads-before', {}, void 0, !0)]),
                              'aside-ads-after': v(() => [c(p.$slots, 'aside-ads-after', {}, void 0, !0)]),
                              _: 3
                            })
                          ])
                        ])
                      ],
                      2
                    ))
                  : f('', !0),
                u('div', Zn, [
                  u('div', es, [
                    c(p.$slots, 'doc-before', {}, void 0, !0),
                    h(Kn),
                    u('main', ts, [
                      h(
                        y,
                        { class: I(['vp-doc', [d.value, l(e).externalLinkIcon && 'external-link-icon-enabled']]) },
                        null,
                        8,
                        ['class']
                      )
                    ]),
                    h(Dn, null, {
                      'doc-footer-before': v(() => [c(p.$slots, 'doc-footer-before', {}, void 0, !0)]),
                      _: 3
                    }),
                    c(p.$slots, 'doc-after', {}, void 0, !0)
                  ])
                ])
              ]),
              c(p.$slots, 'doc-bottom', {}, void 0, !0)
            ],
            2
          )
        );
      };
    }
  });
const ss = m(ns, [['__scopeId', 'data-v-aa784cbe']]),
  os = g({
    __name: 'VPButton',
    props: { tag: {}, size: {}, theme: {}, text: {}, href: {} },
    setup(n) {
      const e = n,
        t = b(() => [e.size ?? 'medium', e.theme ?? 'brand']),
        o = b(() => e.href && Ee.test(e.href)),
        s = b(() => (e.tag ? e.tag : e.href ? 'a' : 'button'));
      return (r, d) => (
        a(),
        $(
          R(s.value),
          {
            class: I(['VPButton', t.value]),
            href: r.href ? l(Z)(r.href) : void 0,
            target: o.value ? '_blank' : void 0,
            rel: o.value ? 'noreferrer' : void 0
          },
          { default: v(() => [N(w(r.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    }
  });
const as = m(os, [['__scopeId', 'data-v-7b52330e']]),
  rs = ['src', 'alt'],
  ls = { inheritAttrs: !1 },
  is = g({
    ...ls,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(n) {
      return (e, t) => {
        const o = G('VPImage', !0);
        return e.image
          ? (a(),
            i(
              M,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    i(
                      'img',
                      se(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string' ? e.$attrs : { ...e.image, ...e.$attrs },
                        {
                          src: l(he)(typeof e.image == 'string' ? e.image : e.image.src),
                          alt: e.alt ?? (typeof e.image == 'string' ? '' : e.image.alt || '')
                        }
                      ),
                      null,
                      16,
                      rs
                    ))
                  : (a(),
                    i(
                      M,
                      { key: 1 },
                      [
                        h(o, se({ class: 'dark', image: e.image.dark, alt: e.image.alt }, e.$attrs), null, 16, [
                          'image',
                          'alt'
                        ]),
                        h(o, se({ class: 'light', image: e.image.light, alt: e.image.alt }, e.$attrs), null, 16, [
                          'image',
                          'alt'
                        ])
                      ],
                      64
                    ))
              ],
              64
            ))
          : f('', !0);
      };
    }
  });
const Ve = m(is, [['__scopeId', 'data-v-b1bd3d0c']]),
  cs = n => (H('data-v-2dcd40f9'), (n = n()), E(), n),
  us = { class: 'container' },
  ds = { class: 'main' },
  _s = { key: 0, class: 'name' },
  vs = ['innerHTML'],
  ps = ['innerHTML'],
  hs = ['innerHTML'],
  fs = { key: 0, class: 'actions' },
  ms = { key: 0, class: 'image' },
  gs = { class: 'image-container' },
  ys = cs(() => u('div', { class: 'image-bg' }, null, -1)),
  $s = g({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(n) {
      const e = ge('hero-image-slot-exists');
      return (t, o) => (
        a(),
        i(
          'div',
          { class: I(['VPHero', { 'has-image': t.image || l(e) }]) },
          [
            u('div', us, [
              u('div', ds, [
                c(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(), i('h1', _s, [u('span', { innerHTML: t.name, class: 'clip' }, null, 8, vs)]))
                      : f('', !0),
                    t.text ? (a(), i('p', { key: 1, innerHTML: t.text, class: 'text' }, null, 8, ps)) : f('', !0),
                    t.tagline
                      ? (a(), i('p', { key: 2, innerHTML: t.tagline, class: 'tagline' }, null, 8, hs))
                      : f('', !0)
                  ],
                  !0
                ),
                t.actions
                  ? (a(),
                    i('div', fs, [
                      (a(!0),
                      i(
                        M,
                        null,
                        x(
                          t.actions,
                          s => (
                            a(),
                            i('div', { key: s.link, class: 'action' }, [
                              h(as, { tag: 'a', size: 'medium', theme: s.theme, text: s.text, href: s.link }, null, 8, [
                                'theme',
                                'text',
                                'href'
                              ])
                            ])
                          )
                        ),
                        128
                      ))
                    ]))
                  : f('', !0)
              ]),
              t.image || l(e)
                ? (a(),
                  i('div', ms, [
                    u('div', gs, [
                      ys,
                      c(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(), $(Ve, { key: 0, class: 'image-src', image: t.image }, null, 8, ['image']))
                            : f('', !0)
                        ],
                        !0
                      )
                    ])
                  ]))
                : f('', !0)
            ])
          ],
          2
        )
      );
    }
  });
const bs = m($s, [['__scopeId', 'data-v-2dcd40f9']]),
  ks = g({
    __name: 'VPHomeHero',
    setup(n) {
      const { frontmatter: e } = P();
      return (t, o) =>
        l(e).hero
          ? (a(),
            $(
              bs,
              {
                key: 0,
                class: 'VPHomeHero',
                name: l(e).hero.name,
                text: l(e).hero.text,
                tagline: l(e).hero.tagline,
                image: l(e).hero.image,
                actions: l(e).hero.actions
              },
              {
                'home-hero-info': v(() => [c(t.$slots, 'home-hero-info')]),
                'home-hero-image': v(() => [c(t.$slots, 'home-hero-image')]),
                _: 3
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions']
            ))
          : f('', !0);
    }
  }),
  Ps = {},
  Vs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  ws = u(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z'
    },
    null,
    -1
  ),
  Ss = [ws];
function Ls(n, e) {
  return a(), i('svg', Vs, Ss);
}
const Ms = m(Ps, [['render', Ls]]),
  Bs = { class: 'box' },
  Cs = ['innerHTML'],
  Is = ['innerHTML'],
  Ts = ['innerHTML'],
  Ns = { key: 3, class: 'link-text' },
  As = { class: 'link-text-value' },
  xs = g({
    __name: 'VPFeature',
    props: { icon: {}, title: {}, details: {}, link: {}, linkText: {} },
    setup(n) {
      return (e, t) => (
        a(),
        $(
          F,
          { class: 'VPFeature', href: e.link, 'no-icon': !0, tag: e.link ? 'a' : 'div' },
          {
            default: v(() => [
              u('article', Bs, [
                typeof e.icon == 'object'
                  ? (a(),
                    $(
                      Ve,
                      { key: 0, image: e.icon, alt: e.icon.alt, height: e.icon.height, width: e.icon.width },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width']
                    ))
                  : e.icon
                  ? (a(), i('div', { key: 1, class: 'icon', innerHTML: e.icon }, null, 8, Cs))
                  : f('', !0),
                u('h2', { class: 'title', innerHTML: e.title }, null, 8, Is),
                e.details ? (a(), i('p', { key: 2, class: 'details', innerHTML: e.details }, null, 8, Ts)) : f('', !0),
                e.linkText
                  ? (a(), i('div', Ns, [u('p', As, [N(w(e.linkText) + ' ', 1), h(Ms, { class: 'link-text-icon' })])]))
                  : f('', !0)
              ])
            ]),
            _: 1
          },
          8,
          ['href', 'tag']
        )
      );
    }
  });
const Hs = m(xs, [['__scopeId', 'data-v-c71adac8']]),
  Es = { key: 0, class: 'VPFeatures' },
  Ds = { class: 'container' },
  zs = { class: 'items' },
  Fs = g({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(n) {
      const e = n,
        t = b(() => {
          const o = e.features.length;
          if (o) {
            if (o === 2) return 'grid-2';
            if (o === 3) return 'grid-3';
            if (o % 3 === 0) return 'grid-6';
            if (o > 3) return 'grid-4';
          } else return;
        });
      return (o, s) =>
        o.features
          ? (a(),
            i('div', Es, [
              u('div', Ds, [
                u('div', zs, [
                  (a(!0),
                  i(
                    M,
                    null,
                    x(
                      o.features,
                      r => (
                        a(),
                        i(
                          'div',
                          { key: r.title, class: I(['item', [t.value]]) },
                          [
                            h(
                              Hs,
                              {
                                icon: r.icon,
                                title: r.title,
                                details: r.details,
                                link: r.link,
                                'link-text': r.linkText
                              },
                              null,
                              8,
                              ['icon', 'title', 'details', 'link', 'link-text']
                            )
                          ],
                          2
                        )
                      )
                    ),
                    128
                  ))
                ])
              ])
            ]))
          : f('', !0);
    }
  });
const Os = m(Fs, [['__scopeId', 'data-v-e42de37c']]),
  Gs = g({
    __name: 'VPHomeFeatures',
    setup(n) {
      const { frontmatter: e } = P();
      return (t, o) =>
        l(e).features
          ? (a(), $(Os, { key: 0, class: 'VPHomeFeatures', features: l(e).features }, null, 8, ['features']))
          : f('', !0);
    }
  }),
  Rs = { class: 'VPHome' },
  Us = g({
    __name: 'VPHome',
    setup(n) {
      return (e, t) => {
        const o = G('Content');
        return (
          a(),
          i('div', Rs, [
            c(e.$slots, 'home-hero-before', {}, void 0, !0),
            h(ks, null, {
              'home-hero-info': v(() => [c(e.$slots, 'home-hero-info', {}, void 0, !0)]),
              'home-hero-image': v(() => [c(e.$slots, 'home-hero-image', {}, void 0, !0)]),
              _: 3
            }),
            c(e.$slots, 'home-hero-after', {}, void 0, !0),
            c(e.$slots, 'home-features-before', {}, void 0, !0),
            h(Gs),
            c(e.$slots, 'home-features-after', {}, void 0, !0),
            h(o)
          ])
        );
      };
    }
  });
const js = m(Us, [['__scopeId', 'data-v-edfd9509']]),
  qs = {},
  Ks = { class: 'VPPage' };
function Ws(n, e) {
  const t = G('Content');
  return a(), i('div', Ks, [c(n.$slots, 'page-top'), h(t), c(n.$slots, 'page-bottom')]);
}
const Ys = m(qs, [['render', Ws]]),
  Xs = g({
    __name: 'VPContent',
    setup(n) {
      const { page: e, frontmatter: t } = P(),
        { hasSidebar: o } = z();
      return (s, r) => (
        a(),
        i(
          'div',
          { class: I(['VPContent', { 'has-sidebar': l(o), 'is-home': l(t).layout === 'home' }]), id: 'VPContent' },
          [
            l(e).isNotFound
              ? c(s.$slots, 'not-found', { key: 0 }, () => [h(It)], !0)
              : l(t).layout === 'page'
              ? (a(),
                $(
                  Ys,
                  { key: 1 },
                  {
                    'page-top': v(() => [c(s.$slots, 'page-top', {}, void 0, !0)]),
                    'page-bottom': v(() => [c(s.$slots, 'page-bottom', {}, void 0, !0)]),
                    _: 3
                  }
                ))
              : l(t).layout === 'home'
              ? (a(),
                $(
                  js,
                  { key: 2 },
                  {
                    'home-hero-before': v(() => [c(s.$slots, 'home-hero-before', {}, void 0, !0)]),
                    'home-hero-info': v(() => [c(s.$slots, 'home-hero-info', {}, void 0, !0)]),
                    'home-hero-image': v(() => [c(s.$slots, 'home-hero-image', {}, void 0, !0)]),
                    'home-hero-after': v(() => [c(s.$slots, 'home-hero-after', {}, void 0, !0)]),
                    'home-features-before': v(() => [c(s.$slots, 'home-features-before', {}, void 0, !0)]),
                    'home-features-after': v(() => [c(s.$slots, 'home-features-after', {}, void 0, !0)]),
                    _: 3
                  }
                ))
              : (a(),
                $(
                  ss,
                  { key: 3 },
                  {
                    'doc-top': v(() => [c(s.$slots, 'doc-top', {}, void 0, !0)]),
                    'doc-bottom': v(() => [c(s.$slots, 'doc-bottom', {}, void 0, !0)]),
                    'doc-footer-before': v(() => [c(s.$slots, 'doc-footer-before', {}, void 0, !0)]),
                    'doc-before': v(() => [c(s.$slots, 'doc-before', {}, void 0, !0)]),
                    'doc-after': v(() => [c(s.$slots, 'doc-after', {}, void 0, !0)]),
                    'aside-top': v(() => [c(s.$slots, 'aside-top', {}, void 0, !0)]),
                    'aside-outline-before': v(() => [c(s.$slots, 'aside-outline-before', {}, void 0, !0)]),
                    'aside-outline-after': v(() => [c(s.$slots, 'aside-outline-after', {}, void 0, !0)]),
                    'aside-ads-before': v(() => [c(s.$slots, 'aside-ads-before', {}, void 0, !0)]),
                    'aside-ads-after': v(() => [c(s.$slots, 'aside-ads-after', {}, void 0, !0)]),
                    'aside-bottom': v(() => [c(s.$slots, 'aside-bottom', {}, void 0, !0)]),
                    _: 3
                  }
                ))
          ],
          2
        )
      );
    }
  });
const Qs = m(Xs, [['__scopeId', 'data-v-ca56803f']]),
  Js = { class: 'container' },
  Zs = ['innerHTML'],
  eo = ['innerHTML'],
  to = g({
    __name: 'VPFooter',
    setup(n) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = z();
      return (s, r) =>
        l(e).footer && l(t).footer !== !1
          ? (a(),
            i(
              'footer',
              { key: 0, class: I(['VPFooter', { 'has-sidebar': l(o) }]) },
              [
                u('div', Js, [
                  l(e).footer.message
                    ? (a(), i('p', { key: 0, class: 'message', innerHTML: l(e).footer.message }, null, 8, Zs))
                    : f('', !0),
                  l(e).footer.copyright
                    ? (a(), i('p', { key: 1, class: 'copyright', innerHTML: l(e).footer.copyright }, null, 8, eo))
                    : f('', !0)
                ])
              ],
              2
            ))
          : f('', !0);
    }
  });
const no = m(to, [['__scopeId', 'data-v-3fe37ad1']]),
  so = g({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(n) {
      const e = n,
        { theme: t } = P(),
        o = V(!1),
        s = V(0),
        r = V();
      J(() => {
        o.value = !1;
      });
      function d() {
        (o.value = !o.value), (s.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0));
      }
      function p(y) {
        y.target.classList.contains('outline-link') &&
          (r.value && (r.value.style.transition = 'none'),
          ct(() => {
            o.value = !1;
          }));
      }
      function _() {
        (o.value = !1), window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return (y, S) => (
        a(),
        i(
          'div',
          { class: 'VPLocalNavOutlineDropdown', style: De({ '--vp-vh': s.value + 'px' }) },
          [
            y.headers.length > 0
              ? (a(),
                i(
                  'button',
                  { key: 0, onClick: d, class: I({ open: o.value }) },
                  [N(w(l($e)(l(t))) + ' ', 1), h(Pe, { class: 'icon' })],
                  2
                ))
              : (a(), i('button', { key: 1, onClick: _ }, w(l(t).returnToTopLabel || 'Return to top'), 1)),
            h(
              pe,
              { name: 'flyout' },
              {
                default: v(() => [
                  o.value
                    ? (a(),
                      i(
                        'div',
                        { key: 0, ref_key: 'items', ref: r, class: 'items', onClick: p },
                        [
                          u(
                            'a',
                            { class: 'top-link', href: '#', onClick: _ },
                            w(l(t).returnToTopLabel || 'Return to top'),
                            1
                          ),
                          h(ke, { headers: y.headers }, null, 8, ['headers'])
                        ],
                        512
                      ))
                    : f('', !0)
                ]),
                _: 1
              }
            )
          ],
          4
        )
      );
    }
  });
const oo = m(so, [['__scopeId', 'data-v-a99d9644']]),
  ao = {},
  ro = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  lo = u('path', { d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z' }, null, -1),
  io = u('path', { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' }, null, -1),
  co = u('path', { d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z' }, null, -1),
  uo = u('path', { d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z' }, null, -1),
  _o = [lo, io, co, uo];
function vo(n, e) {
  return a(), i('svg', ro, _o);
}
const po = m(ao, [['render', vo]]),
  ho = ['aria-expanded'],
  fo = { class: 'menu-text' },
  mo = g({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(n) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = z(),
        { y: s } = Re(),
        r = me([]),
        d = V(0);
      D(() => {
        d.value = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height'));
      }),
        J(() => {
          r.value = be(t.value.outline ?? e.value.outline);
        });
      const p = b(() => r.value.length === 0 && !o.value),
        _ = b(() => ({ VPLocalNav: !0, fixed: p.value, 'reached-top': s.value >= d.value }));
      return (y, S) =>
        l(t).layout !== 'home' && (!p.value || l(s) >= d.value)
          ? (a(),
            i(
              'div',
              { key: 0, class: I(_.value) },
              [
                l(o)
                  ? (a(),
                    i(
                      'button',
                      {
                        key: 0,
                        class: 'menu',
                        'aria-expanded': y.open,
                        'aria-controls': 'VPSidebarNav',
                        onClick: S[0] || (S[0] = B => y.$emit('open-menu'))
                      },
                      [h(po, { class: 'menu-icon' }), u('span', fo, w(l(e).sidebarMenuLabel || 'Menu'), 1)],
                      8,
                      ho
                    ))
                  : f('', !0),
                h(oo, { headers: r.value, navHeight: d.value }, null, 8, ['headers', 'navHeight'])
              ],
              2
            ))
          : f('', !0);
    }
  });
const go = m(mo, [['__scopeId', 'data-v-1d8ce381']]);
function yo() {
  const n = V(!1);
  function e() {
    (n.value = !0), window.addEventListener('resize', s);
  }
  function t() {
    (n.value = !1), window.removeEventListener('resize', s);
  }
  function o() {
    n.value ? t() : e();
  }
  function s() {
    window.outerWidth >= 768 && t();
  }
  const r = ee();
  return j(() => r.path, t), { isScreenOpen: n, openScreen: e, closeScreen: t, toggleScreen: o };
}
const $o = {},
  bo = { class: 'VPSwitch', type: 'button', role: 'switch' },
  ko = { class: 'check' },
  Po = { key: 0, class: 'icon' };
function Vo(n, e) {
  return (
    a(),
    i('button', bo, [
      u('span', ko, [n.$slots.default ? (a(), i('span', Po, [c(n.$slots, 'default', {}, void 0, !0)])) : f('', !0)])
    ])
  );
}
const wo = m($o, [
    ['render', Vo],
    ['__scopeId', 'data-v-3ff7ec9e']
  ]),
  So = {},
  Lo = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Mo = ut(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9
  ),
  Bo = [Mo];
function Co(n, e) {
  return a(), i('svg', Lo, Bo);
}
const Io = m(So, [['render', Co]]),
  To = {},
  No = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Ao = u(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z'
    },
    null,
    -1
  ),
  xo = [Ao];
function Ho(n, e) {
  return a(), i('svg', No, xo);
}
const Eo = m(To, [['render', Ho]]),
  Do = g({
    __name: 'VPSwitchAppearance',
    setup(n) {
      const { site: e, isDark: t } = P(),
        o = V(!1),
        s = ze ? r() : () => {};
      D(() => {
        o.value = document.documentElement.classList.contains('dark');
      });
      function r() {
        const d = window.matchMedia('(prefers-color-scheme: dark)'),
          p = document.documentElement.classList;
        let _ = localStorage.getItem(Te),
          y = (e.value.appearance === 'dark' && _ == null) || (_ === 'auto' || _ == null ? d.matches : _ === 'dark');
        d.onchange = C => {
          _ === 'auto' && B((y = C.matches));
        };
        function S() {
          B((y = !y)),
            (_ = y ? (d.matches ? 'auto' : 'dark') : d.matches ? 'light' : 'auto'),
            localStorage.setItem(Te, _);
        }
        function B(C) {
          const k = document.createElement('style');
          (k.type = 'text/css'),
            k.appendChild(
              document.createTextNode(`:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`)
            ),
            document.head.appendChild(k),
            (o.value = C),
            p[C ? 'add' : 'remove']('dark'),
            window.getComputedStyle(k).opacity,
            document.head.removeChild(k);
        }
        return S;
      }
      return (
        j(o, d => {
          t.value = d;
        }),
        (d, p) => (
          a(),
          $(
            wo,
            { title: 'toggle dark mode', class: 'VPSwitchAppearance', 'aria-checked': o.value, onClick: l(s) },
            { default: v(() => [h(Io, { class: 'sun' }), h(Eo, { class: 'moon' })]), _: 1 },
            8,
            ['aria-checked', 'onClick']
          )
        )
      );
    }
  });
const we = m(Do, [['__scopeId', 'data-v-c5c79930']]),
  zo = { key: 0, class: 'VPNavBarAppearance' },
  Fo = g({
    __name: 'VPNavBarAppearance',
    setup(n) {
      const { site: e } = P();
      return (t, o) => (l(e).appearance ? (a(), i('div', zo, [h(we)])) : f('', !0));
    }
  });
const Oo = m(Fo, [['__scopeId', 'data-v-0979fa44']]),
  Se = V();
let je = !1,
  ue = 0;
function Go(n) {
  const e = V(!1);
  if (ze) {
    !je && Ro(), ue++;
    const t = j(Se, o => {
      var s, r, d;
      o === n.el.value || ((s = n.el.value) != null && s.contains(o))
        ? ((e.value = !0), (r = n.onFocus) == null || r.call(n))
        : ((e.value = !1), (d = n.onBlur) == null || d.call(n));
    });
    fe(() => {
      t(), ue--, ue || Uo();
    });
  }
  return He(e);
}
function Ro() {
  document.addEventListener('focusin', qe), (je = !0), (Se.value = document.activeElement);
}
function Uo() {
  document.removeEventListener('focusin', qe);
}
function qe() {
  Se.value = document.activeElement;
}
const jo = {},
  qo = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Ko = u(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z'
    },
    null,
    -1
  ),
  Wo = [Ko];
function Yo(n, e) {
  return a(), i('svg', qo, Wo);
}
const Ke = m(jo, [['render', Yo]]),
  Xo = {},
  Qo = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Jo = u('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Zo = u('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  ea = u('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  ta = [Jo, Zo, ea];
function na(n, e) {
  return a(), i('svg', Qo, ta);
}
const sa = m(Xo, [['render', na]]),
  oa = { class: 'VPMenuLink' },
  aa = g({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(n) {
      const { page: e } = P();
      return (t, o) => (
        a(),
        i('div', oa, [
          h(
            F,
            {
              class: I({ active: l(q)(l(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch) }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel
            },
            { default: v(() => [N(w(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel']
          )
        ])
      );
    }
  });
const ce = m(aa, [['__scopeId', 'data-v-129f73e8']]),
  ra = { class: 'VPMenuGroup' },
  la = { key: 0, class: 'title' },
  ia = g({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', ra, [
          e.text ? (a(), i('p', la, w(e.text), 1)) : f('', !0),
          (a(!0),
          i(
            M,
            null,
            x(
              e.items,
              o => (
                a(), i(M, null, ['link' in o ? (a(), $(ce, { key: 0, item: o }, null, 8, ['item'])) : f('', !0)], 64)
              )
            ),
            256
          ))
        ])
      );
    }
  });
const ca = m(ia, [['__scopeId', 'data-v-ef329f54']]),
  ua = { class: 'VPMenu' },
  da = { key: 0, class: 'items' },
  _a = g({
    __name: 'VPMenu',
    props: { items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', ua, [
          e.items
            ? (a(),
              i('div', da, [
                (a(!0),
                i(
                  M,
                  null,
                  x(
                    e.items,
                    o => (
                      a(),
                      i(
                        M,
                        { key: o.text },
                        [
                          'link' in o
                            ? (a(), $(ce, { key: 0, item: o }, null, 8, ['item']))
                            : (a(), $(ca, { key: 1, text: o.text, items: o.items }, null, 8, ['text', 'items']))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ]))
            : f('', !0),
          c(e.$slots, 'default', {}, void 0, !0)
        ])
      );
    }
  });
const va = m(_a, [['__scopeId', 'data-v-68f0e03b']]),
  pa = ['aria-expanded', 'aria-label'],
  ha = { key: 0, class: 'text' },
  fa = { class: 'menu' },
  ma = g({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(n) {
      const e = V(!1),
        t = V();
      Go({ el: t, onBlur: o });
      function o() {
        e.value = !1;
      }
      return (s, r) => (
        a(),
        i(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: r[1] || (r[1] = d => (e.value = !0)),
            onMouseleave: r[2] || (r[2] = d => (e.value = !1))
          },
          [
            u(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': s.label,
                onClick: r[0] || (r[0] = d => (e.value = !e.value))
              },
              [
                s.button || s.icon
                  ? (a(),
                    i('span', ha, [
                      s.icon ? (a(), $(R(s.icon), { key: 0, class: 'option-icon' })) : f('', !0),
                      N(' ' + w(s.button) + ' ', 1),
                      h(Ke, { class: 'text-icon' })
                    ]))
                  : (a(), $(sa, { key: 1, class: 'icon' }))
              ],
              8,
              pa
            ),
            u('div', fa, [
              h(va, { items: s.items }, { default: v(() => [c(s.$slots, 'default', {}, void 0, !0)]), _: 3 }, 8, [
                'items'
              ])
            ])
          ],
          544
        )
      );
    }
  });
const Le = m(ma, [['__scopeId', 'data-v-724b4169']]),
  ga = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
  },
  ya = ['href', 'aria-label', 'innerHTML'],
  $a = g({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(n) {
      const e = n,
        t = b(() => (typeof e.icon == 'object' ? e.icon.svg : ga[e.icon]));
      return (o, s) => (
        a(),
        i(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: o.link,
            'aria-label': o.ariaLabel ?? (typeof o.icon == 'string' ? o.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: t.value
          },
          null,
          8,
          ya
        )
      );
    }
  });
const ba = m($a, [['__scopeId', 'data-v-ca478949']]),
  ka = { class: 'VPSocialLinks' },
  Pa = g({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', ka, [
          (a(!0),
          i(
            M,
            null,
            x(
              e.links,
              ({ link: o, icon: s, ariaLabel: r }) => (
                a(), $(ba, { key: o, icon: s, link: o, ariaLabel: r }, null, 8, ['icon', 'link', 'ariaLabel'])
              )
            ),
            128
          ))
        ])
      );
    }
  });
const Me = m(Pa, [['__scopeId', 'data-v-e0849a22']]),
  Va = { key: 0, class: 'group translations' },
  wa = { class: 'trans-title' },
  Sa = { key: 1, class: 'group' },
  La = { class: 'item appearance' },
  Ma = { class: 'label' },
  Ba = { class: 'appearance-action' },
  Ca = { key: 2, class: 'group' },
  Ia = { class: 'item social-links' },
  Ta = g({
    __name: 'VPNavBarExtra',
    setup(n) {
      const { site: e, theme: t } = P(),
        { localeLinks: o, currentLang: s } = te({ correspondingLink: !0 }),
        r = b(() => (o.value.length && s.value.label) || e.value.appearance || t.value.socialLinks);
      return (d, p) =>
        r.value
          ? (a(),
            $(
              Le,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: v(() => [
                  l(o).length && l(s).label
                    ? (a(),
                      i('div', Va, [
                        u('p', wa, w(l(s).label), 1),
                        (a(!0),
                        i(
                          M,
                          null,
                          x(l(o), _ => (a(), $(ce, { key: _.link, item: _ }, null, 8, ['item']))),
                          128
                        ))
                      ]))
                    : f('', !0),
                  l(e).appearance
                    ? (a(),
                      i('div', Sa, [
                        u('div', La, [
                          u('p', Ma, w(l(t).darkModeSwitchLabel || 'Appearance'), 1),
                          u('div', Ba, [h(we)])
                        ])
                      ]))
                    : f('', !0),
                  l(t).socialLinks
                    ? (a(),
                      i('div', Ca, [
                        u('div', Ia, [
                          h(Me, { class: 'social-links-list', links: l(t).socialLinks }, null, 8, ['links'])
                        ])
                      ]))
                    : f('', !0)
                ]),
                _: 1
              }
            ))
          : f('', !0);
    }
  });
const Na = m(Ta, [['__scopeId', 'data-v-54f2e9c5']]),
  Aa = n => (H('data-v-337db325'), (n = n()), E(), n),
  xa = ['aria-expanded'],
  Ha = Aa(() =>
    u(
      'span',
      { class: 'container' },
      [u('span', { class: 'top' }), u('span', { class: 'middle' }), u('span', { class: 'bottom' })],
      -1
    )
  ),
  Ea = [Ha],
  Da = g({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(n) {
      return (e, t) => (
        a(),
        i(
          'button',
          {
            type: 'button',
            class: I(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = o => e.$emit('click'))
          },
          Ea,
          10,
          xa
        )
      );
    }
  });
const za = m(Da, [['__scopeId', 'data-v-337db325']]),
  Fa = g({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(n) {
      const { page: e } = P();
      return (t, o) => (
        a(),
        $(
          F,
          {
            class: I({
              VPNavBarMenuLink: !0,
              active: l(q)(l(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch)
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: '0'
          },
          { default: v(() => [N(w(t.item.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel']
        )
      );
    }
  });
const Oa = m(Fa, [['__scopeId', 'data-v-d686e32e']]),
  Ga = g({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(n) {
      const { page: e } = P();
      return (t, o) => (
        a(),
        $(
          Le,
          {
            class: I({
              VPNavBarMenuGroup: !0,
              active: l(q)(l(e).relativePath, t.item.activeMatch, !!t.item.activeMatch)
            }),
            button: t.item.text,
            items: t.item.items
          },
          null,
          8,
          ['class', 'button', 'items']
        )
      );
    }
  }),
  Ra = n => (H('data-v-c5ea8083'), (n = n()), E(), n),
  Ua = { key: 0, 'aria-labelledby': 'main-nav-aria-label', class: 'VPNavBarMenu' },
  ja = Ra(() => u('span', { id: 'main-nav-aria-label', class: 'visually-hidden' }, 'Main Navigation', -1)),
  qa = g({
    __name: 'VPNavBarMenu',
    setup(n) {
      const { theme: e } = P();
      return (t, o) =>
        l(e).nav
          ? (a(),
            i('nav', Ua, [
              ja,
              (a(!0),
              i(
                M,
                null,
                x(
                  l(e).nav,
                  s => (
                    a(),
                    i(
                      M,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), $(Oa, { key: 0, item: s }, null, 8, ['item']))
                          : (a(), $(Ga, { key: 1, item: s }, null, 8, ['item']))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : f('', !0);
    }
  });
const Ka = m(qa, [['__scopeId', 'data-v-c5ea8083']]);
const Wa = { type: 'button', class: 'DocSearch DocSearch-Button', 'aria-label': 'Search' },
  Ya = { class: 'DocSearch-Button-Container' },
  Xa = u(
    'svg',
    { class: 'DocSearch-Search-Icon', width: '20', height: '20', viewBox: '0 0 20 20', 'aria-label': 'search icon' },
    [
      u('path', {
        d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
        stroke: 'currentColor',
        fill: 'none',
        'fill-rule': 'evenodd',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      })
    ],
    -1
  ),
  Qa = { class: 'DocSearch-Button-Placeholder' },
  Ja = u(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [u('kbd', { class: 'DocSearch-Button-Key' }), u('kbd', { class: 'DocSearch-Button-Key' }, 'K')],
    -1
  ),
  Ae = g({
    __name: 'VPNavBarSearchButton',
    props: { placeholder: {} },
    setup(n) {
      return (e, t) => (a(), i('button', Wa, [u('span', Ya, [Xa, u('span', Qa, w(e.placeholder), 1)]), Ja]));
    }
  });
const Za = { id: 'local-search' },
  er = { key: 1, id: 'docsearch' },
  tr = g({
    __name: 'VPNavBarSearch',
    setup(n) {
      const e = () => null,
        t = () => null,
        { theme: o, localeIndex: s } = P(),
        r = V(!1),
        d = V(!1),
        p = b(() => {
          var T, A, L, K, ne, W, Ie;
          const k = ((T = o.value.search) == null ? void 0 : T.options) ?? o.value.algolia;
          return (
            ((ne =
              (K =
                (L = (A = k == null ? void 0 : k.locales) == null ? void 0 : A[s.value]) == null
                  ? void 0
                  : L.translations) == null
                ? void 0
                : K.button) == null
              ? void 0
              : ne.buttonText) ||
            ((Ie = (W = k == null ? void 0 : k.translations) == null ? void 0 : W.button) == null
              ? void 0
              : Ie.buttonText) ||
            'Search'
          );
        });
      D(() => {});
      function _() {
        r.value || ((r.value = !0), setTimeout(y, 16));
      }
      function y() {
        const k = new Event('keydown');
        (k.key = 'k'),
          (k.metaKey = !0),
          window.dispatchEvent(k),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || y();
          }, 16);
      }
      const S = V(!1),
        B = V("'Meta'");
      D(() => {
        B.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "'⌘'" : "'Ctrl'";
      });
      const C = '';
      return (k, T) => {
        var A;
        return (
          a(),
          i(
            'div',
            { class: 'VPNavBarSearch', style: De({ '--vp-meta-key': B.value }) },
            [
              l(C) === 'local'
                ? (a(),
                  i(
                    M,
                    { key: 0 },
                    [
                      S.value
                        ? (a(),
                          $(
                            l(e),
                            { key: 0, placeholder: p.value, onClose: T[0] || (T[0] = L => (S.value = !1)) },
                            null,
                            8,
                            ['placeholder']
                          ))
                        : f('', !0),
                      u('div', Za, [
                        h(Ae, { placeholder: p.value, onClick: T[1] || (T[1] = L => (S.value = !0)) }, null, 8, [
                          'placeholder'
                        ])
                      ])
                    ],
                    64
                  ))
                : l(C) === 'algolia'
                ? (a(),
                  i(
                    M,
                    { key: 1 },
                    [
                      r.value
                        ? (a(),
                          $(
                            l(t),
                            {
                              key: 0,
                              algolia: ((A = l(o).search) == null ? void 0 : A.options) ?? l(o).algolia,
                              onVnodeBeforeMount: T[2] || (T[2] = L => (d.value = !0))
                            },
                            null,
                            8,
                            ['algolia']
                          ))
                        : f('', !0),
                      d.value
                        ? f('', !0)
                        : (a(), i('div', er, [h(Ae, { placeholder: p.value, onClick: _ }, null, 8, ['placeholder'])]))
                    ],
                    64
                  ))
                : f('', !0)
            ],
            4
          )
        );
      };
    }
  });
const nr = g({
  __name: 'VPNavBarSocialLinks',
  setup(n) {
    const { theme: e } = P();
    return (t, o) =>
      l(e).socialLinks
        ? (a(), $(Me, { key: 0, class: 'VPNavBarSocialLinks', links: l(e).socialLinks }, null, 8, ['links']))
        : f('', !0);
  }
});
const sr = m(nr, [['__scopeId', 'data-v-79777ac0']]),
  or = ['href'],
  ar = g({
    __name: 'VPNavBarTitle',
    setup(n) {
      const { site: e, theme: t } = P(),
        { hasSidebar: o } = z(),
        { currentLang: s } = te();
      return (r, d) => (
        a(),
        i(
          'div',
          { class: I(['VPNavBarTitle', { 'has-sidebar': l(o) }]) },
          [
            u(
              'a',
              { class: 'title', href: l(Z)(l(s).link) },
              [
                c(r.$slots, 'nav-bar-title-before', {}, void 0, !0),
                l(t).logo ? (a(), $(Ve, { key: 0, class: 'logo', image: l(t).logo }, null, 8, ['image'])) : f('', !0),
                l(t).siteTitle
                  ? (a(), i(M, { key: 1 }, [N(w(l(t).siteTitle), 1)], 64))
                  : l(t).siteTitle === void 0
                  ? (a(), i(M, { key: 2 }, [N(w(l(e).title), 1)], 64))
                  : f('', !0),
                c(r.$slots, 'nav-bar-title-after', {}, void 0, !0)
              ],
              8,
              or
            )
          ],
          2
        )
      );
    }
  });
const rr = m(ar, [['__scopeId', 'data-v-7e7e0f30']]),
  lr = {},
  ir = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  cr = u('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  ur = u(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v'
    },
    null,
    -1
  ),
  dr = [cr, ur];
function _r(n, e) {
  return a(), i('svg', ir, dr);
}
const We = m(lr, [['render', _r]]),
  vr = { class: 'items' },
  pr = { class: 'title' },
  hr = g({
    __name: 'VPNavBarTranslations',
    setup(n) {
      const { theme: e } = P(),
        { localeLinks: t, currentLang: o } = te({ correspondingLink: !0 });
      return (s, r) =>
        l(t).length && l(o).label
          ? (a(),
            $(
              Le,
              { key: 0, class: 'VPNavBarTranslations', icon: We, label: l(e).langMenuLabel || 'Change language' },
              {
                default: v(() => [
                  u('div', vr, [
                    u('p', pr, w(l(o).label), 1),
                    (a(!0),
                    i(
                      M,
                      null,
                      x(l(t), d => (a(), $(ce, { key: d.link, item: d }, null, 8, ['item']))),
                      128
                    ))
                  ])
                ]),
                _: 1
              },
              8,
              ['label']
            ))
          : f('', !0);
    }
  });
const fr = m(hr, [['__scopeId', 'data-v-6aa7a022']]),
  mr = n => (H('data-v-ccf4f9d9'), (n = n()), E(), n),
  gr = { class: 'container' },
  yr = { class: 'title' },
  $r = { class: 'content' },
  br = mr(() => u('div', { class: 'curtain' }, null, -1)),
  kr = { class: 'content-body' },
  Pr = g({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(n) {
      const { y: e } = Re(),
        { hasSidebar: t } = z(),
        o = b(() => ({ 'has-sidebar': t.value, fill: e.value > 0 }));
      return (s, r) => (
        a(),
        i(
          'div',
          { class: I(['VPNavBar', o.value]) },
          [
            u('div', gr, [
              u('div', yr, [
                h(rr, null, {
                  'nav-bar-title-before': v(() => [c(s.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                  'nav-bar-title-after': v(() => [c(s.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                  _: 3
                })
              ]),
              u('div', $r, [
                br,
                u('div', kr, [
                  c(s.$slots, 'nav-bar-content-before', {}, void 0, !0),
                  h(tr, { class: 'search' }),
                  h(Ka, { class: 'menu' }),
                  h(fr, { class: 'translations' }),
                  h(Oo, { class: 'appearance' }),
                  h(sr, { class: 'social-links' }),
                  h(Na, { class: 'extra' }),
                  c(s.$slots, 'nav-bar-content-after', {}, void 0, !0),
                  h(
                    za,
                    {
                      class: 'hamburger',
                      active: s.isScreenOpen,
                      onClick: r[0] || (r[0] = d => s.$emit('toggle-screen'))
                    },
                    null,
                    8,
                    ['active']
                  )
                ])
              ])
            ])
          ],
          2
        )
      );
    }
  });
const Vr = m(Pr, [['__scopeId', 'data-v-ccf4f9d9']]);
function wr(n) {
  if (Array.isArray(n)) {
    for (var e = 0, t = Array(n.length); e < n.length; e++) t[e] = n[e];
    return t;
  } else return Array.from(n);
}
var Be = !1;
if (typeof window < 'u') {
  var xe = {
    get passive() {
      Be = !0;
    }
  };
  window.addEventListener('testPassive', null, xe), window.removeEventListener('testPassive', null, xe);
}
var ae =
    typeof window < 'u' &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)),
  U = [],
  re = !1,
  Ce = -1,
  Y = void 0,
  O = void 0,
  X = void 0,
  Ye = function (e) {
    return U.some(function (t) {
      return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
    });
  },
  le = function (e) {
    var t = e || window.event;
    return Ye(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
  },
  Sr = function (e) {
    if (X === void 0) {
      var t = !!e && e.reserveScrollBarGap === !0,
        o = window.innerWidth - document.documentElement.clientWidth;
      if (t && o > 0) {
        var s = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
        (X = document.body.style.paddingRight), (document.body.style.paddingRight = s + o + 'px');
      }
    }
    Y === void 0 && ((Y = document.body.style.overflow), (document.body.style.overflow = 'hidden'));
  },
  Lr = function () {
    X !== void 0 && ((document.body.style.paddingRight = X), (X = void 0)),
      Y !== void 0 && ((document.body.style.overflow = Y), (Y = void 0));
  },
  Mr = function () {
    return window.requestAnimationFrame(function () {
      if (O === void 0) {
        O = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left };
        var e = window,
          t = e.scrollY,
          o = e.scrollX,
          s = e.innerHeight;
        (document.body.style.position = 'fixed'),
          (document.body.style.top = -t),
          (document.body.style.left = -o),
          setTimeout(function () {
            return window.requestAnimationFrame(function () {
              var r = s - window.innerHeight;
              r && t >= s && (document.body.style.top = -(t + r));
            });
          }, 300);
      }
    });
  },
  Br = function () {
    if (O !== void 0) {
      var e = -parseInt(document.body.style.top, 10),
        t = -parseInt(document.body.style.left, 10);
      (document.body.style.position = O.position),
        (document.body.style.top = O.top),
        (document.body.style.left = O.left),
        window.scrollTo(t, e),
        (O = void 0);
    }
  },
  Cr = function (e) {
    return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
  },
  Ir = function (e, t) {
    var o = e.targetTouches[0].clientY - Ce;
    return Ye(e.target)
      ? !1
      : (t && t.scrollTop === 0 && o > 0) || (Cr(t) && o < 0)
      ? le(e)
      : (e.stopPropagation(), !0);
  },
  Xe = function (e, t) {
    if (!e) {
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
      );
      return;
    }
    if (
      !U.some(function (s) {
        return s.targetElement === e;
      })
    ) {
      var o = { targetElement: e, options: t || {} };
      (U = [].concat(wr(U), [o])),
        ae ? Mr() : Sr(t),
        ae &&
          ((e.ontouchstart = function (s) {
            s.targetTouches.length === 1 && (Ce = s.targetTouches[0].clientY);
          }),
          (e.ontouchmove = function (s) {
            s.targetTouches.length === 1 && Ir(s, e);
          }),
          re || (document.addEventListener('touchmove', le, Be ? { passive: !1 } : void 0), (re = !0)));
    }
  },
  Qe = function () {
    ae &&
      (U.forEach(function (e) {
        (e.targetElement.ontouchstart = null), (e.targetElement.ontouchmove = null);
      }),
      re && (document.removeEventListener('touchmove', le, Be ? { passive: !1 } : void 0), (re = !1)),
      (Ce = -1)),
      ae ? Br() : Lr(),
      (U = []);
  };
const Tr = g({
  __name: 'VPNavScreenMenuLink',
  props: { item: {} },
  setup(n) {
    const e = ge('close-screen');
    return (t, o) => (
      a(),
      $(
        F,
        { class: 'VPNavScreenMenuLink', href: t.item.link, target: t.item.target, rel: t.item.rel, onClick: l(e) },
        { default: v(() => [N(w(t.item.text), 1)]), _: 1 },
        8,
        ['href', 'target', 'rel', 'onClick']
      )
    );
  }
});
const Nr = m(Tr, [['__scopeId', 'data-v-11002699']]),
  Ar = {},
  xr = { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', focusable: 'false', viewBox: '0 0 24 24' },
  Hr = u(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z'
    },
    null,
    -1
  ),
  Er = [Hr];
function Dr(n, e) {
  return a(), i('svg', xr, Er);
}
const zr = m(Ar, [['render', Dr]]),
  Fr = g({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(n) {
      const e = ge('close-screen');
      return (t, o) => (
        a(),
        $(
          F,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: l(e)
          },
          { default: v(() => [N(w(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick']
        )
      );
    }
  });
const Je = m(Fr, [['__scopeId', 'data-v-bae3f311']]),
  Or = { class: 'VPNavScreenMenuGroupSection' },
  Gr = { key: 0, class: 'title' },
  Rr = g({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(n) {
      return (e, t) => (
        a(),
        i('div', Or, [
          e.text ? (a(), i('p', Gr, w(e.text), 1)) : f('', !0),
          (a(!0),
          i(
            M,
            null,
            x(e.items, o => (a(), $(Je, { key: o.text, item: o }, null, 8, ['item']))),
            128
          ))
        ])
      );
    }
  });
const Ur = m(Rr, [['__scopeId', 'data-v-9a36bf6e']]),
  jr = ['aria-controls', 'aria-expanded'],
  qr = { class: 'button-text' },
  Kr = ['id'],
  Wr = { key: 1, class: 'group' },
  Yr = g({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(n) {
      const e = n,
        t = V(!1),
        o = b(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`);
      function s() {
        t.value = !t.value;
      }
      return (r, d) => (
        a(),
        i(
          'div',
          { class: I(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            u(
              'button',
              { class: 'button', 'aria-controls': o.value, 'aria-expanded': t.value, onClick: s },
              [u('span', qr, w(r.text), 1), h(zr, { class: 'button-icon' })],
              8,
              jr
            ),
            u(
              'div',
              { id: o.value, class: 'items' },
              [
                (a(!0),
                i(
                  M,
                  null,
                  x(
                    r.items,
                    p => (
                      a(),
                      i(
                        M,
                        { key: p.text },
                        [
                          'link' in p
                            ? (a(), i('div', { key: p.text, class: 'item' }, [h(Je, { item: p }, null, 8, ['item'])]))
                            : (a(), i('div', Wr, [h(Ur, { text: p.text, items: p.items }, null, 8, ['text', 'items'])]))
                        ],
                        64
                      )
                    )
                  ),
                  128
                ))
              ],
              8,
              Kr
            )
          ],
          2
        )
      );
    }
  });
const Xr = m(Yr, [['__scopeId', 'data-v-50d7cc7a']]),
  Qr = { key: 0, class: 'VPNavScreenMenu' },
  Jr = g({
    __name: 'VPNavScreenMenu',
    setup(n) {
      const { theme: e } = P();
      return (t, o) =>
        l(e).nav
          ? (a(),
            i('nav', Qr, [
              (a(!0),
              i(
                M,
                null,
                x(
                  l(e).nav,
                  s => (
                    a(),
                    i(
                      M,
                      { key: s.text },
                      [
                        'link' in s
                          ? (a(), $(Nr, { key: 0, item: s }, null, 8, ['item']))
                          : (a(), $(Xr, { key: 1, text: s.text || '', items: s.items }, null, 8, ['text', 'items']))
                      ],
                      64
                    )
                  )
                ),
                128
              ))
            ]))
          : f('', !0);
    }
  }),
  Zr = { key: 0, class: 'VPNavScreenAppearance' },
  el = { class: 'text' },
  tl = g({
    __name: 'VPNavScreenAppearance',
    setup(n) {
      const { site: e, theme: t } = P();
      return (o, s) =>
        l(e).appearance
          ? (a(), i('div', Zr, [u('p', el, w(l(t).darkModeSwitchLabel || 'Appearance'), 1), h(we)]))
          : f('', !0);
    }
  });
const nl = m(tl, [['__scopeId', 'data-v-a3e1deb5']]),
  sl = { class: 'list' },
  ol = g({
    __name: 'VPNavScreenTranslations',
    setup(n) {
      const { localeLinks: e, currentLang: t } = te({ correspondingLink: !0 }),
        o = V(!1);
      function s() {
        o.value = !o.value;
      }
      return (r, d) =>
        l(e).length && l(t).label
          ? (a(),
            i(
              'div',
              { key: 0, class: I(['VPNavScreenTranslations', { open: o.value }]) },
              [
                u('button', { class: 'title', onClick: s }, [
                  h(We, { class: 'icon lang' }),
                  N(' ' + w(l(t).label) + ' ', 1),
                  h(Ke, { class: 'icon chevron' })
                ]),
                u('ul', sl, [
                  (a(!0),
                  i(
                    M,
                    null,
                    x(
                      l(e),
                      p => (
                        a(),
                        i('li', { key: p.link, class: 'item' }, [
                          h(F, { class: 'link', href: p.link }, { default: v(() => [N(w(p.text), 1)]), _: 2 }, 1032, [
                            'href'
                          ])
                        ])
                      )
                    ),
                    128
                  ))
                ])
              ],
              2
            ))
          : f('', !0);
    }
  });
const al = m(ol, [['__scopeId', 'data-v-756abca3']]),
  rl = g({
    __name: 'VPNavScreenSocialLinks',
    setup(n) {
      const { theme: e } = P();
      return (t, o) =>
        l(e).socialLinks
          ? (a(), $(Me, { key: 0, class: 'VPNavScreenSocialLinks', links: l(e).socialLinks }, null, 8, ['links']))
          : f('', !0);
    }
  }),
  ll = { class: 'container' },
  il = g({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(n) {
      const e = V(null);
      function t() {
        Xe(e.value, { reserveScrollBarGap: !0 });
      }
      function o() {
        Qe();
      }
      return (s, r) => (
        a(),
        $(
          pe,
          { name: 'fade', onEnter: t, onAfterLeave: o },
          {
            default: v(() => [
              s.open
                ? (a(),
                  i(
                    'div',
                    { key: 0, class: 'VPNavScreen', ref_key: 'screen', ref: e, id: 'VPNavScreen' },
                    [
                      u('div', ll, [
                        c(s.$slots, 'nav-screen-content-before', {}, void 0, !0),
                        h(Jr, { class: 'menu' }),
                        h(al, { class: 'translations' }),
                        h(nl, { class: 'appearance' }),
                        h(rl, { class: 'social-links' }),
                        c(s.$slots, 'nav-screen-content-after', {}, void 0, !0)
                      ])
                    ],
                    512
                  ))
                : f('', !0)
            ]),
            _: 3
          }
        )
      );
    }
  });
const cl = m(il, [['__scopeId', 'data-v-e9531215']]),
  ul = { class: 'VPNav' },
  dl = g({
    __name: 'VPNav',
    setup(n) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: o } = yo();
      return (
        oe('close-screen', t),
        (s, r) => (
          a(),
          i('header', ul, [
            h(
              Vr,
              { 'is-screen-open': l(e), onToggleScreen: l(o) },
              {
                'nav-bar-title-before': v(() => [c(s.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                'nav-bar-title-after': v(() => [c(s.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                'nav-bar-content-before': v(() => [c(s.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                'nav-bar-content-after': v(() => [c(s.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                _: 3
              },
              8,
              ['is-screen-open', 'onToggleScreen']
            ),
            h(
              cl,
              { open: l(e) },
              {
                'nav-screen-content-before': v(() => [c(s.$slots, 'nav-screen-content-before', {}, void 0, !0)]),
                'nav-screen-content-after': v(() => [c(s.$slots, 'nav-screen-content-after', {}, void 0, !0)]),
                _: 3
              },
              8,
              ['open']
            )
          ])
        )
      );
    }
  });
const _l = m(dl, [['__scopeId', 'data-v-a32a6387']]),
  vl = n => (H('data-v-660e600a'), (n = n()), E(), n),
  pl = ['role', 'tabindex'],
  hl = vl(() => u('div', { class: 'indicator' }, null, -1)),
  fl = ['onKeydown'],
  ml = { key: 1, class: 'items' },
  gl = g({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(n) {
      const e = n,
        {
          collapsed: t,
          collapsible: o,
          isLink: s,
          isActiveLink: r,
          hasActiveLink: d,
          hasChildren: p,
          toggle: _
        } = Ot(b(() => e.item)),
        y = b(() => (p.value ? 'section' : 'div')),
        S = b(() => (s.value ? 'a' : 'div')),
        B = b(() => (p.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p')),
        C = b(() => (s.value ? void 0 : 'button')),
        k = b(() => [
          [`level-${e.depth}`],
          { collapsible: o.value },
          { collapsed: t.value },
          { 'is-link': s.value },
          { 'is-active': r.value },
          { 'has-active': d.value }
        ]);
      function T(L) {
        ('key' in L && L.key !== 'Enter') || (!e.item.link && _());
      }
      function A() {
        e.item.link && _();
      }
      return (L, K) => {
        const ne = G('VPSidebarItem', !0);
        return (
          a(),
          $(
            R(y.value),
            { class: I(['VPSidebarItem', k.value]) },
            {
              default: v(() => [
                L.item.text
                  ? (a(),
                    i(
                      'div',
                      se(
                        { key: 0, class: 'item', role: C.value },
                        dt(L.item.items ? { click: T, keydown: T } : {}, !0),
                        { tabindex: L.item.items && 0 }
                      ),
                      [
                        hl,
                        L.item.link
                          ? (a(),
                            $(
                              F,
                              { key: 0, tag: S.value, class: 'link', href: L.item.link },
                              {
                                default: v(() => [
                                  (a(),
                                  $(R(B.value), { class: 'text', innerHTML: L.item.text }, null, 8, ['innerHTML']))
                                ]),
                                _: 1
                              },
                              8,
                              ['tag', 'href']
                            ))
                          : (a(),
                            $(R(B.value), { key: 1, class: 'text', innerHTML: L.item.text }, null, 8, ['innerHTML'])),
                        L.item.collapsed != null
                          ? (a(),
                            i(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: A,
                                onKeydown: _t(A, ['enter']),
                                tabindex: '0'
                              },
                              [h(Pe, { class: 'caret-icon' })],
                              40,
                              fl
                            ))
                          : f('', !0)
                      ],
                      16,
                      pl
                    ))
                  : f('', !0),
                L.item.items && L.item.items.length
                  ? (a(),
                    i('div', ml, [
                      L.depth < 5
                        ? (a(!0),
                          i(
                            M,
                            { key: 0 },
                            x(
                              L.item.items,
                              W => (
                                a(), $(ne, { key: W.text, item: W, depth: L.depth + 1 }, null, 8, ['item', 'depth'])
                              )
                            ),
                            128
                          ))
                        : f('', !0)
                    ]))
                  : f('', !0)
              ]),
              _: 1
            },
            8,
            ['class']
          )
        );
      };
    }
  });
const yl = m(gl, [['__scopeId', 'data-v-660e600a']]),
  Ze = n => (H('data-v-72061457'), (n = n()), E(), n),
  $l = Ze(() => u('div', { class: 'curtain' }, null, -1)),
  bl = { class: 'nav', id: 'VPSidebarNav', 'aria-labelledby': 'sidebar-aria-label', tabindex: '-1' },
  kl = Ze(() => u('span', { class: 'visually-hidden', id: 'sidebar-aria-label' }, ' Sidebar Navigation ', -1)),
  Pl = g({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(n) {
      const e = n,
        { sidebarGroups: t, hasSidebar: o } = z();
      let s = V(null);
      function r() {
        Xe(s.value, { reserveScrollBarGap: !0 });
      }
      function d() {
        Qe();
      }
      return (
        vt(async () => {
          var p;
          e.open ? (r(), (p = s.value) == null || p.focus()) : d();
        }),
        (p, _) =>
          l(o)
            ? (a(),
              i(
                'aside',
                {
                  key: 0,
                  class: I(['VPSidebar', { open: p.open }]),
                  ref_key: 'navEl',
                  ref: s,
                  onClick: _[0] || (_[0] = pt(() => {}, ['stop']))
                },
                [
                  $l,
                  u('nav', bl, [
                    kl,
                    c(p.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    i(
                      M,
                      null,
                      x(
                        l(t),
                        y => (
                          a(),
                          i('div', { key: y.text, class: 'group' }, [h(yl, { item: y, depth: 0 }, null, 8, ['item'])])
                        )
                      ),
                      128
                    )),
                    c(p.$slots, 'sidebar-nav-after', {}, void 0, !0)
                  ])
                ],
                2
              ))
            : f('', !0)
      );
    }
  });
const Vl = m(Pl, [['__scopeId', 'data-v-72061457']]),
  wl = g({
    __name: 'VPSkipLink',
    setup(n) {
      const e = ee(),
        t = V();
      j(
        () => e.path,
        () => t.value.focus()
      );
      function o({ target: s }) {
        const r = document.getElementById(decodeURIComponent(s.hash).slice(1));
        if (r) {
          const d = () => {
            r.removeAttribute('tabindex'), r.removeEventListener('blur', d);
          };
          r.setAttribute('tabindex', '-1'), r.addEventListener('blur', d), r.focus(), window.scrollTo(0, 0);
        }
      }
      return (s, r) => (
        a(),
        i(
          M,
          null,
          [
            u('span', { ref_key: 'backToTop', ref: t, tabindex: '-1' }, null, 512),
            u('a', { href: '#VPContent', class: 'VPSkipLink visually-hidden', onClick: o }, ' Skip to content ')
          ],
          64
        )
      );
    }
  });
const Sl = m(wl, [['__scopeId', 'data-v-62851bb8']]),
  Ll = { key: 0, class: 'Layout' },
  Ml = g({
    __name: 'Layout',
    setup(n) {
      const { isOpen: e, open: t, close: o } = z(),
        s = ee();
      j(() => s.path, o), Ft(e, o), oe('close-sidebar', o), oe('is-sidebar-open', e);
      const { frontmatter: r } = P(),
        d = ht(),
        p = b(() => !!d['home-hero-image']);
      return (
        oe('hero-image-slot-exists', p),
        (_, y) => {
          const S = G('Content');
          return l(r).layout !== !1
            ? (a(),
              i('div', Ll, [
                c(_.$slots, 'layout-top', {}, void 0, !0),
                h(Sl),
                h($t, { class: 'backdrop', show: l(e), onClick: l(o) }, null, 8, ['show', 'onClick']),
                l(r).navbar !== !1
                  ? (a(),
                    $(
                      _l,
                      { key: 0 },
                      {
                        'nav-bar-title-before': v(() => [c(_.$slots, 'nav-bar-title-before', {}, void 0, !0)]),
                        'nav-bar-title-after': v(() => [c(_.$slots, 'nav-bar-title-after', {}, void 0, !0)]),
                        'nav-bar-content-before': v(() => [c(_.$slots, 'nav-bar-content-before', {}, void 0, !0)]),
                        'nav-bar-content-after': v(() => [c(_.$slots, 'nav-bar-content-after', {}, void 0, !0)]),
                        'nav-screen-content-before': v(() => [
                          c(_.$slots, 'nav-screen-content-before', {}, void 0, !0)
                        ]),
                        'nav-screen-content-after': v(() => [c(_.$slots, 'nav-screen-content-after', {}, void 0, !0)]),
                        _: 3
                      }
                    ))
                  : f('', !0),
                h(go, { open: l(e), onOpenMenu: l(t) }, null, 8, ['open', 'onOpenMenu']),
                h(
                  Vl,
                  { open: l(e) },
                  {
                    'sidebar-nav-before': v(() => [c(_.$slots, 'sidebar-nav-before', {}, void 0, !0)]),
                    'sidebar-nav-after': v(() => [c(_.$slots, 'sidebar-nav-after', {}, void 0, !0)]),
                    _: 3
                  },
                  8,
                  ['open']
                ),
                h(Qs, null, {
                  'page-top': v(() => [c(_.$slots, 'page-top', {}, void 0, !0)]),
                  'page-bottom': v(() => [c(_.$slots, 'page-bottom', {}, void 0, !0)]),
                  'not-found': v(() => [c(_.$slots, 'not-found', {}, void 0, !0)]),
                  'home-hero-before': v(() => [c(_.$slots, 'home-hero-before', {}, void 0, !0)]),
                  'home-hero-info': v(() => [c(_.$slots, 'home-hero-info', {}, void 0, !0)]),
                  'home-hero-image': v(() => [c(_.$slots, 'home-hero-image', {}, void 0, !0)]),
                  'home-hero-after': v(() => [c(_.$slots, 'home-hero-after', {}, void 0, !0)]),
                  'home-features-before': v(() => [c(_.$slots, 'home-features-before', {}, void 0, !0)]),
                  'home-features-after': v(() => [c(_.$slots, 'home-features-after', {}, void 0, !0)]),
                  'doc-footer-before': v(() => [c(_.$slots, 'doc-footer-before', {}, void 0, !0)]),
                  'doc-before': v(() => [c(_.$slots, 'doc-before', {}, void 0, !0)]),
                  'doc-after': v(() => [c(_.$slots, 'doc-after', {}, void 0, !0)]),
                  'doc-top': v(() => [c(_.$slots, 'doc-top', {}, void 0, !0)]),
                  'doc-bottom': v(() => [c(_.$slots, 'doc-bottom', {}, void 0, !0)]),
                  'aside-top': v(() => [c(_.$slots, 'aside-top', {}, void 0, !0)]),
                  'aside-bottom': v(() => [c(_.$slots, 'aside-bottom', {}, void 0, !0)]),
                  'aside-outline-before': v(() => [c(_.$slots, 'aside-outline-before', {}, void 0, !0)]),
                  'aside-outline-after': v(() => [c(_.$slots, 'aside-outline-after', {}, void 0, !0)]),
                  'aside-ads-before': v(() => [c(_.$slots, 'aside-ads-before', {}, void 0, !0)]),
                  'aside-ads-after': v(() => [c(_.$slots, 'aside-ads-after', {}, void 0, !0)]),
                  _: 3
                }),
                h(no),
                c(_.$slots, 'layout-bottom', {}, void 0, !0)
              ]))
            : (a(), $(S, { key: 1 }));
        }
      );
    }
  });
const Bl = m(Ml, [['__scopeId', 'data-v-df39da25']]);
const Il = {
  Layout: Bl,
  enhanceApp: ({ app: n }) => {
    n.component('Badge', mt);
  }
};
export { Il as t };
