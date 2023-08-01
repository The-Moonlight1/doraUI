import {
  d as c,
  g as b,
  o as l,
  c as u,
  r as g,
  n as v,
  _ as A,
  k as P,
  V as r,
  a2 as B,
  a3 as C,
  a4 as S,
  a5 as w,
  a6 as j,
  a7 as E,
  a8 as O,
  a9 as T,
  aa as k,
  ab as $,
  ac as D,
  u as R,
  j as F,
  A as V,
  ad as z,
  ae as I,
  af as L,
  ag as H
} from './chunks/framework.100f4c70.js';
import { t as M } from './chunks/theme.7999302b.js';
const N = {
    type: {
      type: String,
      default: () => 'default',
      validator(e) {
        return ['default', 'primary', 'success', 'info', 'danger', 'warning'].includes(e);
      }
    },
    size: {
      type: String,
      validator(e) {
        return ['default', 'medium', 'small', 'mini', 'tiny'].includes(e);
      }
    },
    plain: { type: Boolean, default: () => !1 },
    round: { type: Boolean, default: () => !1 },
    circle: { type: Boolean, default: () => !1 },
    loading: { type: Boolean, default: () => !1 },
    disabled: { type: Boolean, default: () => !1 },
    icon: { type: String, default: () => '' },
    autoFocus: { type: Boolean, default: () => !1 },
    nativeType: {
      type: String,
      default: () => 'button',
      validator(e) {
        return ['button', 'submit', 'reset'].includes(e);
      }
    }
  },
  U = { click: e => e },
  G = ['type', 'autofocus', 'disabled'],
  q = c({
    __name: 'button',
    props: N,
    emits: U,
    setup(e, { emit: t }) {
      const n = e,
        a = b(() => {
          const {
            type: o,
            size: i,
            round: f,
            plain: m,
            circle: y,
            disabled: _,
            nativeType: le,
            autoFocus: ue,
            icon: pe,
            loading: h
          } = n;
          return [
            {
              [`dora-button--${o}`]: o,
              [`dora-button--${i}`]: i,
              'is-disabled': _,
              'is-loading': h,
              'is-round': f,
              'is-plain': m,
              'is-circle': y
            }
          ];
        });
      function d(o) {
        t('click', o);
      }
      return (o, i) => (
        l(),
        u(
          'button',
          {
            class: v(['dora-button', a.value]),
            type: o.nativeType,
            autofocus: o.autoFocus,
            disabled: o.disabled || o.loading,
            onClick: d
          },
          [g(o.$slots, 'default')],
          10,
          G
        )
      );
    }
  }),
  x = (e, t) => {
    if (
      ((e.install = n => {
        for (const a of [e, ...Object.values(t ?? {})]) n.component(a.name, a);
      }),
      t)
    )
      for (const [n, a] of Object.entries(t)) e[n] = a;
    return e;
  },
  J = x(q),
  K = Object.freeze(Object.defineProperty({ __proto__: null, DoraButton: J }, Symbol.toStringTag, { value: 'Module' })),
  Q = '0.0.1',
  W = function (e) {
    Object.entries(K).forEach(([t, n]) => {
      e.component(t, n);
    });
  },
  X = { install: W, version: Q },
  Y = {},
  Z = { class: 'home' },
  ee = P('h2', null, 'home', -1),
  te = [ee];
function ne(e, t) {
  return l(), u('div', Z, te);
}
const ae = A(Y, [['render', ne]]),
  oe = {
    ...M,
    enhanceApp({ app: e }) {
      e.use(X), e.component('Home', ae);
    }
  };
function p(e) {
  if (e.extends) {
    const t = p(e.extends);
    return {
      ...t,
      ...e,
      async enhanceApp(n) {
        t.enhanceApp && (await t.enhanceApp(n)), e.enhanceApp && (await e.enhanceApp(n));
      }
    };
  }
  return e;
}
const s = p(oe),
  se = c({
    name: 'VitePressApp',
    setup() {
      const { site: e } = R();
      return (
        F(() => {
          V(() => {
            (document.documentElement.lang = e.value.lang), (document.documentElement.dir = e.value.dir);
          });
        }),
        z(),
        I(),
        L(),
        s.setup && s.setup(),
        () => H(s.Layout)
      );
    }
  });
async function ie() {
  const e = ce(),
    t = re();
  t.provide(C, e);
  const n = S(e.route);
  return (
    t.provide(w, n),
    t.component('Content', j),
    t.component('ClientOnly', E),
    Object.defineProperties(t.config.globalProperties, {
      $frontmatter: {
        get() {
          return n.frontmatter.value;
        }
      },
      $params: {
        get() {
          return n.page.value.params;
        }
      }
    }),
    s.enhanceApp && (await s.enhanceApp({ app: t, router: e, siteData: O })),
    { app: t, router: e, data: n }
  );
}
function re() {
  return T(se);
}
function ce() {
  let e = r,
    t;
  return k(n => {
    let a = $(n);
    return a
      ? (e && (t = a), (e || t === a) && (a = a.replace(/\.js$/, '.lean.js')), r && (e = !1), D(() => import(a), []))
      : null;
  }, s.NotFound);
}
r &&
  ie().then(({ app: e, router: t, data: n }) => {
    t.go().then(() => {
      B(t.route, n.site), e.mount('#app');
    });
  });
export { ie as createApp };
