function Vn(e, t) {
  const n = Object.create(null),
    s = e.split(',');
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? r => !!n[r.toLowerCase()] : r => !!n[r];
}
const te = {},
  ft = [],
  Pe = () => {},
  Ci = () => !1,
  Ei = /^on[^a-z]/,
  Nt = e => Ei.test(e),
  qn = e => e.startsWith('onUpdate:'),
  ie = Object.assign,
  zn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ti = Object.prototype.hasOwnProperty,
  q = (e, t) => Ti.call(e, t),
  L = Array.isArray,
  at = e => ln(e) === '[object Map]',
  dr = e => ln(e) === '[object Set]',
  U = e => typeof e == 'function',
  se = e => typeof e == 'string',
  Yn = e => typeof e == 'symbol',
  ee = e => e !== null && typeof e == 'object',
  hr = e => ee(e) && U(e.then) && U(e.catch),
  pr = Object.prototype.toString,
  ln = e => pr.call(e),
  Ai = e => ln(e).slice(8, -1),
  gr = e => ln(e) === '[object Object]',
  Jn = e => se(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Et = Vn(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  cn = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n));
  },
  Ri = /-(\w)/g,
  Me = cn(e => e.replace(Ri, (t, n) => (n ? n.toUpperCase() : ''))),
  Pi = /\B([A-Z])/g,
  rt = cn(e => e.replace(Pi, '-$1').toLowerCase()),
  fn = cn(e => e.charAt(0).toUpperCase() + e.slice(1)),
  zt = cn(e => (e ? `on${fn(e)}` : '')),
  It = (e, t) => !Object.is(e, t),
  Cn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Zt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ii = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Oi = e => {
    const t = se(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ws;
const Sn = () =>
  ws ||
  (ws =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {});
function Xn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = se(s) ? Li(s) : Xn(s);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else {
    if (se(e)) return e;
    if (ee(e)) return e;
  }
}
const Fi = /;(?![^(]*\))/g,
  Si = /:([^]+)/,
  Mi = /\/\*[^]*?\*\//g;
function Li(e) {
  const t = {};
  return (
    e
      .replace(Mi, '')
      .split(Fi)
      .forEach(n => {
        if (n) {
          const s = n.split(Si);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Zn(e) {
  let t = '';
  if (se(e)) t = e;
  else if (L(e))
    for (let n = 0; n < e.length; n++) {
      const s = Zn(e[n]);
      s && (t += s + ' ');
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const Ni = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  $i = Vn(Ni);
function mr(e) {
  return !!e || e === '';
}
const Oc = e =>
    se(e)
      ? e
      : e == null
      ? ''
      : L(e) || (ee(e) && (e.toString === pr || !U(e.toString)))
      ? JSON.stringify(e, _r, 2)
      : String(e),
  _r = (e, t) =>
    t && t.__v_isRef
      ? _r(e, t.value)
      : at(t)
      ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => ((n[`${s} =>`] = r), n), {}) }
      : dr(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : ee(t) && !L(t) && !gr(t)
      ? String(t)
      : t;
let _e;
class Hi {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = _e),
      !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = _e;
      try {
        return (_e = this), t();
      } finally {
        _e = n;
      }
    }
  }
  on() {
    _e = this;
  }
  off() {
    _e = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Bi(e, t = _e) {
  t && t.active && t.effects.push(e);
}
function Ui() {
  return _e;
}
function Fc(e) {
  _e && _e.cleanups.push(e);
}
const Qn = e => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  br = e => (e.w & Ve) > 0,
  yr = e => (e.n & Ve) > 0,
  ji = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ve;
  },
  Di = e => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        br(r) && !yr(r) ? r.delete(e) : (t[n++] = r), (r.w &= ~Ve), (r.n &= ~Ve);
      }
      t.length = n;
    }
  },
  Qt = new WeakMap();
let xt = 0,
  Ve = 1;
const Mn = 30;
let Ae;
const nt = Symbol(''),
  Ln = Symbol('');
class Gn {
  constructor(t, n = null, s) {
    (this.fn = t), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), Bi(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ae,
      n = ke;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (this.parent = Ae), (Ae = this), (ke = !0), (Ve = 1 << ++xt), xt <= Mn ? ji(this) : xs(this), this.fn();
    } finally {
      xt <= Mn && Di(this),
        (Ve = 1 << --xt),
        (Ae = this.parent),
        (ke = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ae === this ? (this.deferStop = !0) : this.active && (xs(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function xs(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let ke = !0;
const vr = [];
function bt() {
  vr.push(ke), (ke = !1);
}
function yt() {
  const e = vr.pop();
  ke = e === void 0 ? !0 : e;
}
function pe(e, t, n) {
  if (ke && Ae) {
    let s = Qt.get(e);
    s || Qt.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Qn())), wr(r);
  }
}
function wr(e, t) {
  let n = !1;
  xt <= Mn ? yr(e) || ((e.n |= Ve), (n = !br(e))) : (n = !e.has(Ae)), n && (e.add(Ae), Ae.deps.push(e));
}
function $e(e, t, n, s, r, i) {
  const o = Qt.get(e);
  if (!o) return;
  let l = [];
  if (t === 'clear') l = [...o.values()];
  else if (n === 'length' && L(e)) {
    const f = Number(s);
    o.forEach((a, d) => {
      (d === 'length' || d >= f) && l.push(a);
    });
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case 'add':
        L(e) ? Jn(n) && l.push(o.get('length')) : (l.push(o.get(nt)), at(e) && l.push(o.get(Ln)));
        break;
      case 'delete':
        L(e) || (l.push(o.get(nt)), at(e) && l.push(o.get(Ln)));
        break;
      case 'set':
        at(e) && l.push(o.get(nt));
        break;
    }
  if (l.length === 1) l[0] && Nn(l[0]);
  else {
    const f = [];
    for (const a of l) a && f.push(...a);
    Nn(Qn(f));
  }
}
function Nn(e, t) {
  const n = L(e) ? e : [...e];
  for (const s of n) s.computed && Cs(s);
  for (const s of n) s.computed || Cs(s);
}
function Cs(e, t) {
  (e !== Ae || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function Ki(e, t) {
  var n;
  return (n = Qt.get(e)) == null ? void 0 : n.get(t);
}
const ki = Vn('__proto__,__v_isRef,__isVue'),
  xr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(Yn)
  ),
  Wi = es(),
  Vi = es(!1, !0),
  qi = es(!0),
  Es = zi();
function zi() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
      e[t] = function (...n) {
        const s = z(this);
        for (let i = 0, o = this.length; i < o; i++) pe(s, 'get', i + '');
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(z)) : r;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
      e[t] = function (...n) {
        bt();
        const s = z(this)[t].apply(this, n);
        return yt(), s;
      };
    }),
    e
  );
}
function Yi(e) {
  const t = z(this);
  return pe(t, 'has', e), t.hasOwnProperty(e);
}
function es(e = !1, t = !1) {
  return function (s, r, i) {
    if (r === '__v_isReactive') return !e;
    if (r === '__v_isReadonly') return e;
    if (r === '__v_isShallow') return t;
    if (r === '__v_raw' && i === (e ? (t ? ao : Rr) : t ? Ar : Tr).get(s)) return s;
    const o = L(s);
    if (!e) {
      if (o && q(Es, r)) return Reflect.get(Es, r, i);
      if (r === 'hasOwnProperty') return Yi;
    }
    const l = Reflect.get(s, r, i);
    return (Yn(r) ? xr.has(r) : ki(r)) || (e || pe(s, 'get', r), t)
      ? l
      : le(l)
      ? o && Jn(r)
        ? l
        : l.value
      : ee(l)
      ? e
        ? Pr(l)
        : un(l)
      : l;
  };
}
const Ji = Cr(),
  Xi = Cr(!0);
function Cr(e = !1) {
  return function (n, s, r, i) {
    let o = n[s];
    if (gt(o) && le(o) && !le(r)) return !1;
    if (!e && (!Gt(r) && !gt(r) && ((o = z(o)), (r = z(r))), !L(n) && le(o) && !le(r))) return (o.value = r), !0;
    const l = L(n) && Jn(s) ? Number(s) < n.length : q(n, s),
      f = Reflect.set(n, s, r, i);
    return n === z(i) && (l ? It(r, o) && $e(n, 'set', s, r) : $e(n, 'add', s, r)), f;
  };
}
function Zi(e, t) {
  const n = q(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && $e(e, 'delete', t, void 0), s;
}
function Qi(e, t) {
  const n = Reflect.has(e, t);
  return (!Yn(t) || !xr.has(t)) && pe(e, 'has', t), n;
}
function Gi(e) {
  return pe(e, 'iterate', L(e) ? 'length' : nt), Reflect.ownKeys(e);
}
const Er = { get: Wi, set: Ji, deleteProperty: Zi, has: Qi, ownKeys: Gi },
  eo = {
    get: qi,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    }
  },
  to = ie({}, Er, { get: Vi, set: Xi }),
  ts = e => e,
  an = e => Reflect.getPrototypeOf(e);
function Bt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = z(e),
    i = z(t);
  n || (t !== i && pe(r, 'get', t), pe(r, 'get', i));
  const { has: o } = an(r),
    l = s ? ts : n ? rs : Ot;
  if (o.call(r, t)) return l(e.get(t));
  if (o.call(r, i)) return l(e.get(i));
  e !== r && e.get(t);
}
function Ut(e, t = !1) {
  const n = this.__v_raw,
    s = z(n),
    r = z(e);
  return t || (e !== r && pe(s, 'has', e), pe(s, 'has', r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function jt(e, t = !1) {
  return (e = e.__v_raw), !t && pe(z(e), 'iterate', nt), Reflect.get(e, 'size', e);
}
function Ts(e) {
  e = z(e);
  const t = z(this);
  return an(t).has.call(t, e) || (t.add(e), $e(t, 'add', e, e)), this;
}
function As(e, t) {
  t = z(t);
  const n = z(this),
    { has: s, get: r } = an(n);
  let i = s.call(n, e);
  i || ((e = z(e)), (i = s.call(n, e)));
  const o = r.call(n, e);
  return n.set(e, t), i ? It(t, o) && $e(n, 'set', e, t) : $e(n, 'add', e, t), this;
}
function Rs(e) {
  const t = z(this),
    { has: n, get: s } = an(t);
  let r = n.call(t, e);
  r || ((e = z(e)), (r = n.call(t, e))), s && s.call(t, e);
  const i = t.delete(e);
  return r && $e(t, 'delete', e, void 0), i;
}
function Ps() {
  const e = z(this),
    t = e.size !== 0,
    n = e.clear();
  return t && $e(e, 'clear', void 0, void 0), n;
}
function Dt(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = z(o),
      f = t ? ts : e ? rs : Ot;
    return !e && pe(l, 'iterate', nt), o.forEach((a, d) => s.call(r, f(a), f(d), i));
  };
}
function Kt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = z(r),
      o = at(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      f = e === 'keys' && o,
      a = r[e](...s),
      d = n ? ts : t ? rs : Ot;
    return (
      !t && pe(i, 'iterate', f ? Ln : nt),
      {
        next() {
          const { value: p, done: y } = a.next();
          return y ? { value: p, done: y } : { value: l ? [d(p[0]), d(p[1])] : d(p), done: y };
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    );
  };
}
function Be(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function no() {
  const e = {
      get(i) {
        return Bt(this, i);
      },
      get size() {
        return jt(this);
      },
      has: Ut,
      add: Ts,
      set: As,
      delete: Rs,
      clear: Ps,
      forEach: Dt(!1, !1)
    },
    t = {
      get(i) {
        return Bt(this, i, !1, !0);
      },
      get size() {
        return jt(this);
      },
      has: Ut,
      add: Ts,
      set: As,
      delete: Rs,
      clear: Ps,
      forEach: Dt(!1, !0)
    },
    n = {
      get(i) {
        return Bt(this, i, !0);
      },
      get size() {
        return jt(this, !0);
      },
      has(i) {
        return Ut.call(this, i, !0);
      },
      add: Be('add'),
      set: Be('set'),
      delete: Be('delete'),
      clear: Be('clear'),
      forEach: Dt(!0, !1)
    },
    s = {
      get(i) {
        return Bt(this, i, !0, !0);
      },
      get size() {
        return jt(this, !0);
      },
      has(i) {
        return Ut.call(this, i, !0);
      },
      add: Be('add'),
      set: Be('set'),
      delete: Be('delete'),
      clear: Be('clear'),
      forEach: Dt(!0, !0)
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
      (e[i] = Kt(i, !1, !1)), (n[i] = Kt(i, !0, !1)), (t[i] = Kt(i, !1, !0)), (s[i] = Kt(i, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [so, ro, io, oo] = no();
function ns(e, t) {
  const n = t ? (e ? oo : io) : e ? ro : so;
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(q(n, r) && r in s ? n : s, r, i);
}
const lo = { get: ns(!1, !1) },
  co = { get: ns(!1, !0) },
  fo = { get: ns(!0, !1) },
  Tr = new WeakMap(),
  Ar = new WeakMap(),
  Rr = new WeakMap(),
  ao = new WeakMap();
function uo(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function ho(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : uo(Ai(e));
}
function un(e) {
  return gt(e) ? e : ss(e, !1, Er, lo, Tr);
}
function po(e) {
  return ss(e, !1, to, co, Ar);
}
function Pr(e) {
  return ss(e, !0, eo, fo, Rr);
}
function ss(e, t, n, s, r) {
  if (!ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = ho(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return r.set(e, l), l;
}
function ut(e) {
  return gt(e) ? ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gt(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function Ir(e) {
  return ut(e) || gt(e);
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function Tt(e) {
  return Zt(e, '__v_skip', !0), e;
}
const Ot = e => (ee(e) ? un(e) : e),
  rs = e => (ee(e) ? Pr(e) : e);
function is(e) {
  ke && Ae && ((e = z(e)), wr(e.dep || (e.dep = Qn())));
}
function os(e, t) {
  e = z(e);
  const n = e.dep;
  n && Nn(n);
}
function le(e) {
  return !!(e && e.__v_isRef === !0);
}
function ls(e) {
  return Or(e, !1);
}
function go(e) {
  return Or(e, !0);
}
function Or(e, t) {
  return le(e) ? e : new mo(e, t);
}
class mo {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : z(t)),
      (this._value = n ? t : Ot(t));
  }
  get value() {
    return is(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Gt(t) || gt(t);
    (t = n ? t : z(t)), It(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : Ot(t)), os(this));
  }
}
function _o(e) {
  return le(e) ? e.value : e;
}
const bo = {
  get: (e, t, n) => _o(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return le(r) && !le(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  }
};
function Fr(e) {
  return ut(e) ? e : new Proxy(e, bo);
}
class yo {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: s } = t(
      () => is(this),
      () => os(this)
    );
    (this._get = n), (this._set = s);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Sc(e) {
  return new yo(e);
}
class vo {
  constructor(t, n, s) {
    (this._object = t), (this._key = n), (this._defaultValue = s), (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ki(z(this._object), this._key);
  }
}
class wo {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Mc(e, t, n) {
  return le(e) ? e : U(e) ? new wo(e) : ee(e) && arguments.length > 1 ? xo(e, t, n) : ls(e);
}
function xo(e, t, n) {
  const s = e[t];
  return le(s) ? s : new vo(e, t, n);
}
class Co {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new Gn(t, () => {
        this._dirty || ((this._dirty = !0), os(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = z(this);
    return is(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Eo(e, t, n = !1) {
  let s, r;
  const i = U(e);
  return i ? ((s = e), (r = Pe)) : ((s = e.get), (r = e.set)), new Co(s, r, i || !r, n);
}
function We(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (i) {
    dn(i, t, n);
  }
  return r;
}
function xe(e, t, n, s) {
  if (U(e)) {
    const i = We(e, t, n, s);
    return (
      i &&
        hr(i) &&
        i.catch(o => {
          dn(o, t, n);
        }),
      i
    );
  }
  const r = [];
  for (let i = 0; i < e.length; i++) r.push(xe(e[i], t, n, s));
  return r;
}
function dn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const o = t.proxy,
      l = n;
    for (; i; ) {
      const a = i.ec;
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, o, l) === !1) return;
      }
      i = i.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      We(f, null, 10, [e, o, l]);
      return;
    }
  }
  To(e, n, r, s);
}
function To(e, t, n, s = !0) {
  console.error(e);
}
let Ft = !1,
  $n = !1;
const fe = [];
let Se = 0;
const dt = [];
let Ne = null,
  Qe = 0;
const Sr = Promise.resolve();
let cs = null;
function Mr(e) {
  const t = cs || Sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ao(e) {
  let t = Se + 1,
    n = fe.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    St(fe[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function fs(e) {
  (!fe.length || !fe.includes(e, Ft && e.allowRecurse ? Se + 1 : Se)) &&
    (e.id == null ? fe.push(e) : fe.splice(Ao(e.id), 0, e), Lr());
}
function Lr() {
  !Ft && !$n && (($n = !0), (cs = Sr.then(Nr)));
}
function Ro(e) {
  const t = fe.indexOf(e);
  t > Se && fe.splice(t, 1);
}
function Po(e) {
  L(e) ? dt.push(...e) : (!Ne || !Ne.includes(e, e.allowRecurse ? Qe + 1 : Qe)) && dt.push(e), Lr();
}
function Is(e, t = Ft ? Se + 1 : 0) {
  for (; t < fe.length; t++) {
    const n = fe[t];
    n && n.pre && (fe.splice(t, 1), t--, n());
  }
}
function en(e) {
  if (dt.length) {
    const t = [...new Set(dt)];
    if (((dt.length = 0), Ne)) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, Ne.sort((n, s) => St(n) - St(s)), Qe = 0; Qe < Ne.length; Qe++) Ne[Qe]();
    (Ne = null), (Qe = 0);
  }
}
const St = e => (e.id == null ? 1 / 0 : e.id),
  Io = (e, t) => {
    const n = St(e) - St(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Nr(e) {
  ($n = !1), (Ft = !0), fe.sort(Io);
  const t = Pe;
  try {
    for (Se = 0; Se < fe.length; Se++) {
      const n = fe[Se];
      n && n.active !== !1 && We(n, null, 14);
    }
  } finally {
    (Se = 0), (fe.length = 0), en(), (Ft = !1), (cs = null), (fe.length || dt.length) && Nr();
  }
}
function Oo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || te;
  let r = n;
  const i = t.startsWith('update:'),
    o = i && t.slice(7);
  if (o && o in s) {
    const d = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: p, trim: y } = s[d] || te;
    y && (r = n.map(A => (se(A) ? A.trim() : A))), p && (r = n.map(Ii));
  }
  let l,
    f = s[(l = zt(t))] || s[(l = zt(Me(t)))];
  !f && i && (f = s[(l = zt(rt(t)))]), f && xe(f, e, 6, r);
  const a = s[l + 'Once'];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), xe(a, e, 6, r);
  }
}
function $r(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!U(e)) {
    const f = a => {
      const d = $r(a, t, !0);
      d && ((l = !0), ie(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l
    ? (ee(e) && s.set(e, null), null)
    : (L(i) ? i.forEach(f => (o[f] = null)) : ie(o, i), ee(e) && s.set(e, o), o);
}
function hn(e, t) {
  return !e || !Nt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, rt(t)) || q(e, t));
}
let ae = null,
  pn = null;
function tn(e) {
  const t = ae;
  return (ae = e), (pn = (e && e.type.__scopeId) || null), t;
}
function Lc(e) {
  pn = e;
}
function Nc() {
  pn = null;
}
function Fo(e, t = ae, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Ds(-1);
    const i = tn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      tn(i), s._d && Ds(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function En(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: l,
    attrs: f,
    emit: a,
    render: d,
    renderCache: p,
    data: y,
    setupState: A,
    ctx: N,
    inheritAttrs: O
  } = e;
  let j, _;
  const w = tn(e);
  try {
    if (n.shapeFlag & 4) {
      const R = r || s;
      (j = Te(d.call(R, R, p, i, A, y, N))), (_ = f);
    } else {
      const R = t;
      (j = Te(R.length > 1 ? R(i, { attrs: f, slots: l, emit: a }) : R(i, null))), (_ = t.props ? f : So(f));
    }
  } catch (R) {
    (Pt.length = 0), dn(R, e, 1), (j = ce(be));
  }
  let $ = j;
  if (_ && O !== !1) {
    const R = Object.keys(_),
      { shapeFlag: K } = $;
    R.length && K & 7 && (o && R.some(qn) && (_ = Mo(_, o)), ($ = qe($, _)));
  }
  return (
    n.dirs && (($ = qe($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (j = $),
    tn(w),
    j
  );
}
const So = e => {
    let t;
    for (const n in e) (n === 'class' || n === 'style' || Nt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Mo = (e, t) => {
    const n = {};
    for (const s in e) (!qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Lo(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: f } = t,
    a = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && f >= 0) {
    if (f & 1024) return !0;
    if (f & 16) return s ? Os(s, o, a) : !!o;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const y = d[p];
        if (o[y] !== s[y] && !hn(a, y)) return !0;
      }
    }
  } else return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? Os(s, o, a) : !0) : !!o;
  return !1;
}
function Os(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !hn(n, i)) return !0;
  }
  return !1;
}
function No({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const $o = e => e.__isSuspense;
function Hr(e, t) {
  t && t.pendingBranch ? (L(e) ? t.effects.push(...e) : t.effects.push(e)) : Po(e);
}
function Ho(e, t) {
  return gn(e, null, t);
}
function $c(e, t) {
  return gn(e, null, { flush: 'post' });
}
const kt = {};
function Yt(e, t, n) {
  return gn(e, t, n);
}
function gn(e, t, { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = te) {
  var l;
  const f = Ui() === ((l = oe) == null ? void 0 : l.scope) ? oe : null;
  let a,
    d = !1,
    p = !1;
  if (
    (le(e)
      ? ((a = () => e.value), (d = Gt(e)))
      : ut(e)
      ? ((a = () => e), (s = !0))
      : L(e)
      ? ((p = !0),
        (d = e.some(R => ut(R) || Gt(R))),
        (a = () =>
          e.map(R => {
            if (le(R)) return R.value;
            if (ut(R)) return ct(R);
            if (U(R)) return We(R, f, 2);
          })))
      : U(e)
      ? t
        ? (a = () => We(e, f, 2))
        : (a = () => {
            if (!(f && f.isUnmounted)) return y && y(), xe(e, f, 3, [A]);
          })
      : (a = Pe),
    t && s)
  ) {
    const R = a;
    a = () => ct(R());
  }
  let y,
    A = R => {
      y = w.onStop = () => {
        We(R, f, 4);
      };
    },
    N;
  if (Lt)
    if (((A = Pe), t ? n && xe(t, f, 3, [a(), p ? [] : void 0, A]) : a(), r === 'sync')) {
      const R = Fl();
      N = R.__watcherHandles || (R.__watcherHandles = []);
    } else return Pe;
  let O = p ? new Array(e.length).fill(kt) : kt;
  const j = () => {
    if (w.active)
      if (t) {
        const R = w.run();
        (s || d || (p ? R.some((K, J) => It(K, O[J])) : It(R, O))) &&
          (y && y(), xe(t, f, 3, [R, O === kt ? void 0 : p && O[0] === kt ? [] : O, A]), (O = R));
      } else w.run();
  };
  j.allowRecurse = !!t;
  let _;
  r === 'sync'
    ? (_ = j)
    : r === 'post'
    ? (_ = () => de(j, f && f.suspense))
    : ((j.pre = !0), f && (j.id = f.uid), (_ = () => fs(j)));
  const w = new Gn(a, _);
  t ? (n ? j() : (O = w.run())) : r === 'post' ? de(w.run.bind(w), f && f.suspense) : w.run();
  const $ = () => {
    w.stop(), f && f.scope && zn(f.scope.effects, w);
  };
  return N && N.push($), $;
}
function Bo(e, t, n) {
  const s = this.proxy,
    r = se(e) ? (e.includes('.') ? Br(s, e) : () => s[e]) : e.bind(s, s);
  let i;
  U(t) ? (i = t) : ((i = t.handler), (n = t));
  const o = oe;
  _t(this);
  const l = gn(r, i.bind(s), n);
  return o ? _t(o) : st(), l;
}
function Br(e, t) {
  const n = t.split('.');
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function ct(e, t) {
  if (!ee(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), le(e))) ct(e.value, t);
  else if (L(e)) for (let n = 0; n < e.length; n++) ct(e[n], t);
  else if (dr(e) || at(e))
    e.forEach(n => {
      ct(n, t);
    });
  else if (gr(e)) for (const n in e) ct(e[n], t);
  return e;
}
function Fe(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[s];
    f && (bt(), xe(f, n, 8, [e.el, l, e, t]), yt());
  }
}
function Uo() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    bn(() => {
      e.isMounted = !0;
    }),
    Wr(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const ye = [Function, Array],
  Ur = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ye,
    onEnter: ye,
    onAfterEnter: ye,
    onEnterCancelled: ye,
    onBeforeLeave: ye,
    onLeave: ye,
    onAfterLeave: ye,
    onLeaveCancelled: ye,
    onBeforeAppear: ye,
    onAppear: ye,
    onAfterAppear: ye,
    onAppearCancelled: ye
  },
  jo = {
    name: 'BaseTransition',
    props: Ur,
    setup(e, { slots: t }) {
      const n = ci(),
        s = Uo();
      let r;
      return () => {
        const i = t.default && Dr(t.default(), !0);
        if (!i || !i.length) return;
        let o = i[0];
        if (i.length > 1) {
          for (const O of i)
            if (O.type !== be) {
              o = O;
              break;
            }
        }
        const l = z(e),
          { mode: f } = l;
        if (s.isLeaving) return Tn(o);
        const a = Fs(o);
        if (!a) return Tn(o);
        const d = Hn(a, l, s, n);
        Bn(a, d);
        const p = n.subTree,
          y = p && Fs(p);
        let A = !1;
        const { getTransitionKey: N } = a.type;
        if (N) {
          const O = N();
          r === void 0 ? (r = O) : O !== r && ((r = O), (A = !0));
        }
        if (y && y.type !== be && (!Ge(a, y) || A)) {
          const O = Hn(y, l, s, n);
          if ((Bn(y, O), f === 'out-in'))
            return (
              (s.isLeaving = !0),
              (O.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              Tn(o)
            );
          f === 'in-out' &&
            a.type !== be &&
            (O.delayLeave = (j, _, w) => {
              const $ = jr(s, y);
              ($[String(y.key)] = y),
                (j._leaveCb = () => {
                  _(), (j._leaveCb = void 0), delete d.delayedLeave;
                }),
                (d.delayedLeave = w);
            });
        }
        return o;
      };
    }
  },
  Do = jo;
function jr(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Hn(e, t, n, s) {
  const {
      appear: r,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: f,
      onAfterEnter: a,
      onEnterCancelled: d,
      onBeforeLeave: p,
      onLeave: y,
      onAfterLeave: A,
      onLeaveCancelled: N,
      onBeforeAppear: O,
      onAppear: j,
      onAfterAppear: _,
      onAppearCancelled: w
    } = t,
    $ = String(e.key),
    R = jr(n, e),
    K = (T, D) => {
      T && xe(T, s, 9, D);
    },
    J = (T, D) => {
      const B = D[1];
      K(T, D), L(T) ? T.every(Y => Y.length <= 1) && B() : T.length <= 1 && B();
    },
    V = {
      mode: i,
      persisted: o,
      beforeEnter(T) {
        let D = l;
        if (!n.isMounted)
          if (r) D = O || l;
          else return;
        T._leaveCb && T._leaveCb(!0);
        const B = R[$];
        B && Ge(e, B) && B.el._leaveCb && B.el._leaveCb(), K(D, [T]);
      },
      enter(T) {
        let D = f,
          B = a,
          Y = d;
        if (!n.isMounted)
          if (r) (D = j || f), (B = _ || a), (Y = w || d);
          else return;
        let P = !1;
        const k = (T._enterCb = F => {
          P || ((P = !0), F ? K(Y, [T]) : K(B, [T]), V.delayedLeave && V.delayedLeave(), (T._enterCb = void 0));
        });
        D ? J(D, [T, k]) : k();
      },
      leave(T, D) {
        const B = String(e.key);
        if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return D();
        K(p, [T]);
        let Y = !1;
        const P = (T._leaveCb = k => {
          Y || ((Y = !0), D(), k ? K(N, [T]) : K(A, [T]), (T._leaveCb = void 0), R[B] === e && delete R[B]);
        });
        (R[B] = e), y ? J(y, [T, P]) : P();
      },
      clone(T) {
        return Hn(T, t, n, s);
      }
    };
  return V;
}
function Tn(e) {
  if (mn(e)) return (e = qe(e)), (e.children = null), e;
}
function Fs(e) {
  return mn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Bn(e, t) {
  e.shapeFlag & 6 && e.component
    ? Bn(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Dr(e, t = !1, n) {
  let s = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === he
      ? (o.patchFlag & 128 && r++, (s = s.concat(Dr(o.children, t, l))))
      : (t || o.type !== be) && s.push(l != null ? qe(o, { key: l }) : o);
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
  return s;
}
function Kr(e, t) {
  return U(e) ? (() => ie({ name: e.name }, t, { setup: e }))() : e;
}
const ht = e => !!e.type.__asyncLoader,
  mn = e => e.type.__isKeepAlive;
function Ko(e, t) {
  kr(e, 'a', t);
}
function ko(e, t) {
  kr(e, 'da', t);
}
function kr(e, t, n = oe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((_n(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; ) mn(r.parent.vnode) && Wo(s, t, n, r), (r = r.parent);
  }
}
function Wo(e, t, n, s) {
  const r = _n(t, e, s, !0);
  yn(() => {
    zn(s[t], r);
  }, n);
}
function _n(e, t, n = oe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          bt(), _t(n);
          const l = xe(t, n, e, o);
          return st(), yt(), l;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const He =
    e =>
    (t, n = oe) =>
      (!Lt || e === 'sp') && _n(e, (...s) => t(...s), n),
  Vo = He('bm'),
  bn = He('m'),
  qo = He('bu'),
  zo = He('u'),
  Wr = He('bum'),
  yn = He('um'),
  Yo = He('sp'),
  Jo = He('rtg'),
  Xo = He('rtc');
function Zo(e, t = oe) {
  _n('ec', e, t);
}
const as = 'components';
function Hc(e, t) {
  return qr(as, e, !0, t) || e;
}
const Vr = Symbol.for('v-ndc');
function Bc(e) {
  return se(e) ? qr(as, e, !1) || e : e || Vr;
}
function qr(e, t, n = !0, s = !1) {
  const r = ae || oe;
  if (r) {
    const i = r.type;
    if (e === as) {
      const l = Pl(i, !1);
      if (l && (l === t || l === Me(t) || l === fn(Me(t)))) return i;
    }
    const o = Ss(r[e] || i[e], t) || Ss(r.appContext[e], t);
    return !o && s ? i : o;
  }
}
function Ss(e, t) {
  return e && (e[t] || e[Me(t)] || e[fn(Me(t))]);
}
function Uc(e, t, n, s) {
  let r;
  const i = n && n[s];
  if (L(e) || se(e)) {
    r = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++) r[o] = t(e[o], o, void 0, i && i[o]);
  } else if (typeof e == 'number') {
    r = new Array(e);
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i && i[o]);
  } else if (ee(e))
    if (e[Symbol.iterator]) r = Array.from(e, (o, l) => t(o, l, void 0, i && i[l]));
    else {
      const o = Object.keys(e);
      r = new Array(o.length);
      for (let l = 0, f = o.length; l < f; l++) {
        const a = o[l];
        r[l] = t(e[a], a, l, i && i[l]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
function jc(e, t, n = {}, s, r) {
  if (ae.isCE || (ae.parent && ht(ae.parent) && ae.parent.isCE))
    return t !== 'default' && (n.name = t), ce('slot', n, s && s());
  let i = e[t];
  i && i._c && (i._d = !1), ni();
  const o = i && zr(i(n)),
    l = ri(he, { key: n.key || (o && o.key) || `_${t}` }, o || (s ? s() : []), o && e._ === 1 ? 64 : -2);
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), i && i._c && (i._d = !0), l;
}
function zr(e) {
  return e.some(t => (on(t) ? !(t.type === be || (t.type === he && !zr(t.children))) : !0)) ? e : null;
}
function Dc(e, t) {
  const n = {};
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : zt(s)] = e[s];
  return n;
}
const Un = e => (e ? (fi(e) ? gs(e) || e.proxy : Un(e.parent)) : null),
  At = ie(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Un(e.parent),
    $root: e => Un(e.root),
    $emit: e => e.emit,
    $options: e => us(e),
    $forceUpdate: e => e.f || (e.f = () => fs(e.update)),
    $nextTick: e => e.n || (e.n = Mr.bind(e.proxy)),
    $watch: e => Bo.bind(e)
  }),
  An = (e, t) => e !== te && !e.__isScriptSetup && q(e, t),
  Qo = {
    get({ _: e }, t) {
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
      let a;
      if (t[0] !== '$') {
        const A = o[t];
        if (A !== void 0)
          switch (A) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (An(s, t)) return (o[t] = 1), s[t];
          if (r !== te && q(r, t)) return (o[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && q(a, t)) return (o[t] = 3), i[t];
          if (n !== te && q(n, t)) return (o[t] = 4), n[t];
          jn && (o[t] = 0);
        }
      }
      const d = At[t];
      let p, y;
      if (d) return t === '$attrs' && pe(e, 'get', t), d(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== te && q(n, t)) return (o[t] = 4), n[t];
      if (((y = f.config.globalProperties), q(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return An(r, t)
        ? ((r[t] = n), !0)
        : s !== te && q(s, t)
        ? ((s[t] = n), !0)
        : q(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i } }, o) {
      let l;
      return (
        !!n[o] ||
        (e !== te && q(e, o)) ||
        An(t, o) ||
        ((l = i[0]) && q(l, o)) ||
        q(s, o) ||
        q(At, o) ||
        q(r.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : q(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    }
  };
function Kc() {
  return Go().slots;
}
function Go() {
  const e = ci();
  return e.setupContext || (e.setupContext = ui(e));
}
function Ms(e) {
  return L(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let jn = !0;
function el(e) {
  const t = us(e),
    n = e.proxy,
    s = e.ctx;
  (jn = !1), t.beforeCreate && Ls(t.beforeCreate, e, 'bc');
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: a,
    created: d,
    beforeMount: p,
    mounted: y,
    beforeUpdate: A,
    updated: N,
    activated: O,
    deactivated: j,
    beforeDestroy: _,
    beforeUnmount: w,
    destroyed: $,
    unmounted: R,
    render: K,
    renderTracked: J,
    renderTriggered: V,
    errorCaptured: T,
    serverPrefetch: D,
    expose: B,
    inheritAttrs: Y,
    components: P,
    directives: k,
    filters: F
  } = t;
  if ((a && tl(a, s, null), o))
    for (const ne in o) {
      const Q = o[ne];
      U(Q) && (s[ne] = Q.bind(n));
    }
  if (r) {
    const ne = r.call(n, n);
    ee(ne) && (e.data = un(ne));
  }
  if (((jn = !0), i))
    for (const ne in i) {
      const Q = i[ne],
        ze = U(Q) ? Q.bind(n, n) : U(Q.get) ? Q.get.bind(n, n) : Pe,
        $t = !U(Q) && U(Q.set) ? Q.set.bind(n) : Pe,
        Ye = Ee({ get: ze, set: $t });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: Ie => (Ye.value = Ie)
      });
    }
  if (l) for (const ne in l) Yr(l[ne], s, n, ne);
  if (f) {
    const ne = U(f) ? f.call(n) : f;
    Reflect.ownKeys(ne).forEach(Q => {
      ll(Q, ne[Q]);
    });
  }
  d && Ls(d, e, 'c');
  function X(ne, Q) {
    L(Q) ? Q.forEach(ze => ne(ze.bind(n))) : Q && ne(Q.bind(n));
  }
  if (
    (X(Vo, p),
    X(bn, y),
    X(qo, A),
    X(zo, N),
    X(Ko, O),
    X(ko, j),
    X(Zo, T),
    X(Xo, J),
    X(Jo, V),
    X(Wr, w),
    X(yn, R),
    X(Yo, D),
    L(B))
  )
    if (B.length) {
      const ne = e.exposed || (e.exposed = {});
      B.forEach(Q => {
        Object.defineProperty(ne, Q, { get: () => n[Q], set: ze => (n[Q] = ze) });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === Pe && (e.render = K),
    Y != null && (e.inheritAttrs = Y),
    P && (e.components = P),
    k && (e.directives = k);
}
function tl(e, t, n = Pe) {
  L(e) && (e = Dn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ee(r) ? ('default' in r ? (i = pt(r.from || s, r.default, !0)) : (i = pt(r.from || s))) : (i = pt(r)),
      le(i)
        ? Object.defineProperty(t, s, { enumerable: !0, configurable: !0, get: () => i.value, set: o => (i.value = o) })
        : (t[s] = i);
  }
}
function Ls(e, t, n) {
  xe(L(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Yr(e, t, n, s) {
  const r = s.includes('.') ? Br(n, s) : () => n[s];
  if (se(e)) {
    const i = t[e];
    U(i) && Yt(r, i);
  } else if (U(e)) Yt(r, e.bind(n));
  else if (ee(e))
    if (L(e)) e.forEach(i => Yr(i, t, n, s));
    else {
      const i = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(i) && Yt(r, i, e);
    }
}
function us(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o }
    } = e.appContext,
    l = i.get(t);
  let f;
  return (
    l
      ? (f = l)
      : !r.length && !n && !s
      ? (f = t)
      : ((f = {}), r.length && r.forEach(a => nn(f, a, o, !0)), nn(f, t, o)),
    ee(t) && i.set(t, f),
    f
  );
}
function nn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && nn(e, i, n, !0), r && r.forEach(o => nn(e, o, n, !0));
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = nl[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const nl = {
  data: Ns,
  props: $s,
  emits: $s,
  methods: Ct,
  computed: Ct,
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  components: Ct,
  directives: Ct,
  watch: rl,
  provide: Ns,
  inject: sl
};
function Ns(e, t) {
  return t
    ? e
      ? function () {
          return ie(U(e) ? e.call(this, this) : e, U(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function sl(e, t) {
  return Ct(Dn(e), Dn(t));
}
function Dn(e) {
  if (L(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ct(e, t) {
  return e ? ie(Object.create(null), e, t) : t;
}
function $s(e, t) {
  return e ? (L(e) && L(t) ? [...new Set([...e, ...t])] : ie(Object.create(null), Ms(e), Ms(t ?? {}))) : t;
}
function rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(Object.create(null), e);
  for (const s in t) n[s] = ue(e[s], t[s]);
  return n;
}
function Jr() {
  return {
    app: null,
    config: {
      isNativeTag: Ci,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let il = 0;
function ol(e, t) {
  return function (s, r = null) {
    U(s) || (s = ie({}, s)), r != null && !ee(r) && (r = null);
    const i = Jr(),
      o = new Set();
    let l = !1;
    const f = (i.app = {
      _uid: il++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Sl,
      get config() {
        return i.config;
      },
      set config(a) {},
      use(a, ...d) {
        return o.has(a) || (a && U(a.install) ? (o.add(a), a.install(f, ...d)) : U(a) && (o.add(a), a(f, ...d))), f;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), f;
      },
      component(a, d) {
        return d ? ((i.components[a] = d), f) : i.components[a];
      },
      directive(a, d) {
        return d ? ((i.directives[a] = d), f) : i.directives[a];
      },
      mount(a, d, p) {
        if (!l) {
          const y = ce(s, r);
          return (
            (y.appContext = i),
            d && t ? t(y, a) : e(y, a, p),
            (l = !0),
            (f._container = a),
            (a.__vue_app__ = f),
            gs(y.component) || y.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, f._container), delete f._container.__vue_app__);
      },
      provide(a, d) {
        return (i.provides[a] = d), f;
      },
      runWithContext(a) {
        sn = f;
        try {
          return a();
        } finally {
          sn = null;
        }
      }
    });
    return f;
  };
}
let sn = null;
function ll(e, t) {
  if (oe) {
    let n = oe.provides;
    const s = oe.parent && oe.parent.provides;
    s === n && (n = oe.provides = Object.create(s)), (n[e] = t);
  }
}
function pt(e, t, n = !1) {
  const s = oe || ae;
  if (s || sn) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : sn._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && U(t) ? t.call(s && s.proxy) : t;
  }
}
function cl(e, t, n, s = !1) {
  const r = {},
    i = {};
  Zt(i, vn, 1), (e.propsDefaults = Object.create(null)), Xr(e, t, r, i);
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (e.props = s ? r : po(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i);
}
function fl(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o }
    } = e,
    l = z(r),
    [f] = e.propsOptions;
  let a = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let y = d[p];
        if (hn(e.emitsOptions, y)) continue;
        const A = t[y];
        if (f)
          if (q(i, y)) A !== i[y] && ((i[y] = A), (a = !0));
          else {
            const N = Me(y);
            r[N] = Kn(f, l, N, A, e, !1);
          }
        else A !== i[y] && ((i[y] = A), (a = !0));
      }
    }
  } else {
    Xr(e, t, r, i) && (a = !0);
    let d;
    for (const p in l)
      (!t || (!q(t, p) && ((d = rt(p)) === p || !q(t, d)))) &&
        (f ? n && (n[p] !== void 0 || n[d] !== void 0) && (r[p] = Kn(f, l, p, void 0, e, !0)) : delete r[p]);
    if (i !== l) for (const p in i) (!t || !q(t, p)) && (delete i[p], (a = !0));
  }
  a && $e(e, 'set', '$attrs');
}
function Xr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let f in t) {
      if (Et(f)) continue;
      const a = t[f];
      let d;
      r && q(r, (d = Me(f)))
        ? !i || !i.includes(d)
          ? (n[d] = a)
          : ((l || (l = {}))[d] = a)
        : hn(e.emitsOptions, f) || ((!(f in s) || a !== s[f]) && ((s[f] = a), (o = !0)));
    }
  if (i) {
    const f = z(n),
      a = l || te;
    for (let d = 0; d < i.length; d++) {
      const p = i[d];
      n[p] = Kn(r, f, p, a[p], e, !q(a, p));
    }
  }
  return o;
}
function Kn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = q(o, 'default');
    if (l && s === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && U(f)) {
        const { propsDefaults: a } = r;
        n in a ? (s = a[n]) : (_t(r), (s = a[n] = f.call(null, t)), st());
      } else s = f;
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === rt(n)) && (s = !0));
  }
  return s;
}
function Zr(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let f = !1;
  if (!U(e)) {
    const d = p => {
      f = !0;
      const [y, A] = Zr(p, t, !0);
      ie(o, y), A && l.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !f) return ee(e) && s.set(e, ft), ft;
  if (L(i))
    for (let d = 0; d < i.length; d++) {
      const p = Me(i[d]);
      Hs(p) && (o[p] = te);
    }
  else if (i)
    for (const d in i) {
      const p = Me(d);
      if (Hs(p)) {
        const y = i[d],
          A = (o[p] = L(y) || U(y) ? { type: y } : ie({}, y));
        if (A) {
          const N = js(Boolean, A.type),
            O = js(String, A.type);
          (A[0] = N > -1), (A[1] = O < 0 || N < O), (N > -1 || q(A, 'default')) && l.push(p);
        }
      }
    }
  const a = [o, l];
  return ee(e) && s.set(e, a), a;
}
function Hs(e) {
  return e[0] !== '$';
}
function Bs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? 'null' : '';
}
function Us(e, t) {
  return Bs(e) === Bs(t);
}
function js(e, t) {
  return L(t) ? t.findIndex(n => Us(n, e)) : U(t) && Us(t, e) ? 0 : -1;
}
const Qr = e => e[0] === '_' || e === '$stable',
  ds = e => (L(e) ? e.map(Te) : [Te(e)]),
  al = (e, t, n) => {
    if (t._n) return t;
    const s = Fo((...r) => ds(t(...r)), n);
    return (s._c = !1), s;
  },
  Gr = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Qr(r)) continue;
      const i = e[r];
      if (U(i)) t[r] = al(r, i, s);
      else if (i != null) {
        const o = ds(i);
        t[r] = () => o;
      }
    }
  },
  ei = (e, t) => {
    const n = ds(t);
    e.slots.default = () => n;
  },
  ul = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = z(t)), Zt(t, '_', n)) : Gr(t, (e.slots = {}));
    } else (e.slots = {}), t && ei(e, t);
    Zt(e.slots, vn, 1);
  },
  dl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = !0,
      o = te;
    if (s.shapeFlag & 32) {
      const l = t._;
      l ? (n && l === 1 ? (i = !1) : (ie(r, t), !n && l === 1 && delete r._)) : ((i = !t.$stable), Gr(t, r)), (o = t);
    } else t && (ei(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !Qr(l) && !(l in o) && delete r[l];
  };
function rn(e, t, n, s, r = !1) {
  if (L(e)) {
    e.forEach((y, A) => rn(y, t && (L(t) ? t[A] : t), n, s, r));
    return;
  }
  if (ht(s) && !r) return;
  const i = s.shapeFlag & 4 ? gs(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: l, r: f } = e,
    a = t && t.r,
    d = l.refs === te ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if ((a != null && a !== f && (se(a) ? ((d[a] = null), q(p, a) && (p[a] = null)) : le(a) && (a.value = null)), U(f)))
    We(f, l, 12, [o, d]);
  else {
    const y = se(f),
      A = le(f);
    if (y || A) {
      const N = () => {
        if (e.f) {
          const O = y ? (q(p, f) ? p[f] : d[f]) : f.value;
          r
            ? L(O) && zn(O, i)
            : L(O)
            ? O.includes(i) || O.push(i)
            : y
            ? ((d[f] = [i]), q(p, f) && (p[f] = d[f]))
            : ((f.value = [i]), e.k && (d[e.k] = f.value));
        } else y ? ((d[f] = o), q(p, f) && (p[f] = o)) : A && ((f.value = o), e.k && (d[e.k] = o));
      };
      o ? ((N.id = -1), de(N, n)) : N();
    }
  }
}
let Ue = !1;
const Wt = e => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  Vt = e => e.nodeType === 8;
function hl(e) {
  const {
      mt: t,
      p: n,
      o: { patchProp: s, createText: r, nextSibling: i, parentNode: o, remove: l, insert: f, createComment: a }
    } = e,
    d = (_, w) => {
      if (!w.hasChildNodes()) {
        n(null, _, w), en(), (w._vnode = _);
        return;
      }
      (Ue = !1),
        p(w.firstChild, _, null, null, null),
        en(),
        (w._vnode = _),
        Ue && console.error('Hydration completed but contains mismatches.');
    },
    p = (_, w, $, R, K, J = !1) => {
      const V = Vt(_) && _.data === '[',
        T = () => O(_, w, $, R, K, V),
        { type: D, ref: B, shapeFlag: Y, patchFlag: P } = w;
      let k = _.nodeType;
      (w.el = _), P === -2 && ((J = !1), (w.dynamicChildren = null));
      let F = null;
      switch (D) {
        case mt:
          k !== 3
            ? w.children === ''
              ? (f((w.el = r('')), o(_), _), (F = _))
              : (F = T())
            : (_.data !== w.children && ((Ue = !0), (_.data = w.children)), (F = i(_)));
          break;
        case be:
          k !== 8 || V ? (F = T()) : (F = i(_));
          break;
        case Rt:
          if ((V && ((_ = i(_)), (k = _.nodeType)), k === 1 || k === 3)) {
            F = _;
            const ge = !w.children.length;
            for (let X = 0; X < w.staticCount; X++)
              ge && (w.children += F.nodeType === 1 ? F.outerHTML : F.data),
                X === w.staticCount - 1 && (w.anchor = F),
                (F = i(F));
            return V ? i(F) : F;
          } else T();
          break;
        case he:
          V ? (F = N(_, w, $, R, K, J)) : (F = T());
          break;
        default:
          if (Y & 1)
            k !== 1 || w.type.toLowerCase() !== _.tagName.toLowerCase() ? (F = T()) : (F = y(_, w, $, R, K, J));
          else if (Y & 6) {
            w.slotScopeIds = K;
            const ge = o(_);
            if (
              (t(w, ge, null, $, R, Wt(ge), J),
              (F = V ? j(_) : i(_)),
              F && Vt(F) && F.data === 'teleport end' && (F = i(F)),
              ht(w))
            ) {
              let X;
              V
                ? ((X = ce(he)), (X.anchor = F ? F.previousSibling : ge.lastChild))
                : (X = _.nodeType === 3 ? li('') : ce('div')),
                (X.el = _),
                (w.component.subTree = X);
            }
          } else
            Y & 64
              ? k !== 8
                ? (F = T())
                : (F = w.type.hydrate(_, w, $, R, K, J, e, A))
              : Y & 128 && (F = w.type.hydrate(_, w, $, R, Wt(o(_)), K, J, e, p));
      }
      return B != null && rn(B, null, R, w), F;
    },
    y = (_, w, $, R, K, J) => {
      J = J || !!w.dynamicChildren;
      const { type: V, props: T, patchFlag: D, shapeFlag: B, dirs: Y } = w,
        P = (V === 'input' && Y) || V === 'option';
      if (P || D !== -1) {
        if ((Y && Fe(w, null, $, 'created'), T))
          if (P || !J || D & 48)
            for (const F in T) ((P && F.endsWith('value')) || (Nt(F) && !Et(F))) && s(_, F, null, T[F], !1, void 0, $);
          else T.onClick && s(_, 'onClick', null, T.onClick, !1, void 0, $);
        let k;
        if (
          ((k = T && T.onVnodeBeforeMount) && ve(k, $, w),
          Y && Fe(w, null, $, 'beforeMount'),
          ((k = T && T.onVnodeMounted) || Y) &&
            Hr(() => {
              k && ve(k, $, w), Y && Fe(w, null, $, 'mounted');
            }, R),
          B & 16 && !(T && (T.innerHTML || T.textContent)))
        ) {
          let F = A(_.firstChild, w, _, $, R, K, J);
          for (; F; ) {
            Ue = !0;
            const ge = F;
            (F = F.nextSibling), l(ge);
          }
        } else B & 8 && _.textContent !== w.children && ((Ue = !0), (_.textContent = w.children));
      }
      return _.nextSibling;
    },
    A = (_, w, $, R, K, J, V) => {
      V = V || !!w.dynamicChildren;
      const T = w.children,
        D = T.length;
      for (let B = 0; B < D; B++) {
        const Y = V ? T[B] : (T[B] = Te(T[B]));
        if (_) _ = p(_, Y, R, K, J, V);
        else {
          if (Y.type === mt && !Y.children) continue;
          (Ue = !0), n(null, Y, $, null, R, K, Wt($), J);
        }
      }
      return _;
    },
    N = (_, w, $, R, K, J) => {
      const { slotScopeIds: V } = w;
      V && (K = K ? K.concat(V) : V);
      const T = o(_),
        D = A(i(_), w, T, $, R, K, J);
      return D && Vt(D) && D.data === ']' ? i((w.anchor = D)) : ((Ue = !0), f((w.anchor = a(']')), T, D), D);
    },
    O = (_, w, $, R, K, J) => {
      if (((Ue = !0), (w.el = null), J)) {
        const D = j(_);
        for (;;) {
          const B = i(_);
          if (B && B !== D) l(B);
          else break;
        }
      }
      const V = i(_),
        T = o(_);
      return l(_), n(null, w, T, V, $, R, Wt(T), K), V;
    },
    j = _ => {
      let w = 0;
      for (; _; )
        if (((_ = i(_)), _ && Vt(_) && (_.data === '[' && w++, _.data === ']'))) {
          if (w === 0) return i(_);
          w--;
        }
      return _;
    };
  return [d, p];
}
const de = Hr;
function pl(e) {
  return gl(e, hl);
}
function gl(e, t) {
  const n = Sn();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: f,
      setText: a,
      setElementText: d,
      parentNode: p,
      nextSibling: y,
      setScopeId: A = Pe,
      insertStaticContent: N
    } = e,
    O = (c, u, h, m = null, g = null, x = null, E = !1, v = null, C = !!u.dynamicChildren) => {
      if (c === u) return;
      c && !Ge(c, u) && ((m = Ht(c)), Ie(c, g, x, !0), (c = null)),
        u.patchFlag === -2 && ((C = !1), (u.dynamicChildren = null));
      const { type: b, ref: S, shapeFlag: I } = u;
      switch (b) {
        case mt:
          j(c, u, h, m);
          break;
        case be:
          _(c, u, h, m);
          break;
        case Rt:
          c == null && w(u, h, m, E);
          break;
        case he:
          P(c, u, h, m, g, x, E, v, C);
          break;
        default:
          I & 1
            ? K(c, u, h, m, g, x, E, v, C)
            : I & 6
            ? k(c, u, h, m, g, x, E, v, C)
            : (I & 64 || I & 128) && b.process(c, u, h, m, g, x, E, v, C, it);
      }
      S != null && g && rn(S, c && c.ref, x, u || c, !u);
    },
    j = (c, u, h, m) => {
      if (c == null) s((u.el = l(u.children)), h, m);
      else {
        const g = (u.el = c.el);
        u.children !== c.children && a(g, u.children);
      }
    },
    _ = (c, u, h, m) => {
      c == null ? s((u.el = f(u.children || '')), h, m) : (u.el = c.el);
    },
    w = (c, u, h, m) => {
      [c.el, c.anchor] = N(c.children, u, h, m, c.el, c.anchor);
    },
    $ = ({ el: c, anchor: u }, h, m) => {
      let g;
      for (; c && c !== u; ) (g = y(c)), s(c, h, m), (c = g);
      s(u, h, m);
    },
    R = ({ el: c, anchor: u }) => {
      let h;
      for (; c && c !== u; ) (h = y(c)), r(c), (c = h);
      r(u);
    },
    K = (c, u, h, m, g, x, E, v, C) => {
      (E = E || u.type === 'svg'), c == null ? J(u, h, m, g, x, E, v, C) : D(c, u, g, x, E, v, C);
    },
    J = (c, u, h, m, g, x, E, v) => {
      let C, b;
      const { type: S, props: I, shapeFlag: M, transition: H, dirs: W } = c;
      if (
        ((C = c.el = o(c.type, x, I && I.is, I)),
        M & 8 ? d(C, c.children) : M & 16 && T(c.children, C, null, m, g, x && S !== 'foreignObject', E, v),
        W && Fe(c, null, m, 'created'),
        V(C, c, c.scopeId, E, m),
        I)
      ) {
        for (const Z in I) Z !== 'value' && !Et(Z) && i(C, Z, null, I[Z], x, c.children, m, g, Le);
        'value' in I && i(C, 'value', null, I.value), (b = I.onVnodeBeforeMount) && ve(b, m, c);
      }
      W && Fe(c, null, m, 'beforeMount');
      const G = (!g || (g && !g.pendingBranch)) && H && !H.persisted;
      G && H.beforeEnter(C),
        s(C, u, h),
        ((b = I && I.onVnodeMounted) || G || W) &&
          de(() => {
            b && ve(b, m, c), G && H.enter(C), W && Fe(c, null, m, 'mounted');
          }, g);
    },
    V = (c, u, h, m, g) => {
      if ((h && A(c, h), m)) for (let x = 0; x < m.length; x++) A(c, m[x]);
      if (g) {
        let x = g.subTree;
        if (u === x) {
          const E = g.vnode;
          V(c, E, E.scopeId, E.slotScopeIds, g.parent);
        }
      }
    },
    T = (c, u, h, m, g, x, E, v, C = 0) => {
      for (let b = C; b < c.length; b++) {
        const S = (c[b] = v ? Ke(c[b]) : Te(c[b]));
        O(null, S, u, h, m, g, x, E, v);
      }
    },
    D = (c, u, h, m, g, x, E) => {
      const v = (u.el = c.el);
      let { patchFlag: C, dynamicChildren: b, dirs: S } = u;
      C |= c.patchFlag & 16;
      const I = c.props || te,
        M = u.props || te;
      let H;
      h && Je(h, !1), (H = M.onVnodeBeforeUpdate) && ve(H, h, u, c), S && Fe(u, c, h, 'beforeUpdate'), h && Je(h, !0);
      const W = g && u.type !== 'foreignObject';
      if ((b ? B(c.dynamicChildren, b, v, h, m, W, x) : E || Q(c, u, v, null, h, m, W, x, !1), C > 0)) {
        if (C & 16) Y(v, u, I, M, h, m, g);
        else if (
          (C & 2 && I.class !== M.class && i(v, 'class', null, M.class, g),
          C & 4 && i(v, 'style', I.style, M.style, g),
          C & 8)
        ) {
          const G = u.dynamicProps;
          for (let Z = 0; Z < G.length; Z++) {
            const re = G[Z],
              Ce = I[re],
              ot = M[re];
            (ot !== Ce || re === 'value') && i(v, re, Ce, ot, g, c.children, h, m, Le);
          }
        }
        C & 1 && c.children !== u.children && d(v, u.children);
      } else !E && b == null && Y(v, u, I, M, h, m, g);
      ((H = M.onVnodeUpdated) || S) &&
        de(() => {
          H && ve(H, h, u, c), S && Fe(u, c, h, 'updated');
        }, m);
    },
    B = (c, u, h, m, g, x, E) => {
      for (let v = 0; v < u.length; v++) {
        const C = c[v],
          b = u[v],
          S = C.el && (C.type === he || !Ge(C, b) || C.shapeFlag & 70) ? p(C.el) : h;
        O(C, b, S, null, m, g, x, E, !0);
      }
    },
    Y = (c, u, h, m, g, x, E) => {
      if (h !== m) {
        if (h !== te) for (const v in h) !Et(v) && !(v in m) && i(c, v, h[v], null, E, u.children, g, x, Le);
        for (const v in m) {
          if (Et(v)) continue;
          const C = m[v],
            b = h[v];
          C !== b && v !== 'value' && i(c, v, b, C, E, u.children, g, x, Le);
        }
        'value' in m && i(c, 'value', h.value, m.value);
      }
    },
    P = (c, u, h, m, g, x, E, v, C) => {
      const b = (u.el = c ? c.el : l('')),
        S = (u.anchor = c ? c.anchor : l(''));
      let { patchFlag: I, dynamicChildren: M, slotScopeIds: H } = u;
      H && (v = v ? v.concat(H) : H),
        c == null
          ? (s(b, h, m), s(S, h, m), T(u.children, h, S, g, x, E, v, C))
          : I > 0 && I & 64 && M && c.dynamicChildren
          ? (B(c.dynamicChildren, M, h, g, x, E, v), (u.key != null || (g && u === g.subTree)) && ti(c, u, !0))
          : Q(c, u, h, S, g, x, E, v, C);
    },
    k = (c, u, h, m, g, x, E, v, C) => {
      (u.slotScopeIds = v),
        c == null ? (u.shapeFlag & 512 ? g.ctx.activate(u, h, m, E, C) : F(u, h, m, g, x, E, C)) : ge(c, u, C);
    },
    F = (c, u, h, m, g, x, E) => {
      const v = (c.component = El(c, m, g));
      if ((mn(c) && (v.ctx.renderer = it), Tl(v), v.asyncDep)) {
        if ((g && g.registerDep(v, X), !c.el)) {
          const C = (v.subTree = ce(be));
          _(null, C, u, h);
        }
        return;
      }
      X(v, c, u, h, g, x, E);
    },
    ge = (c, u, h) => {
      const m = (u.component = c.component);
      if (Lo(c, u, h))
        if (m.asyncDep && !m.asyncResolved) {
          ne(m, u, h);
          return;
        } else (m.next = u), Ro(m.update), m.update();
      else (u.el = c.el), (m.vnode = u);
    },
    X = (c, u, h, m, g, x, E) => {
      const v = () => {
          if (c.isMounted) {
            let { next: S, bu: I, u: M, parent: H, vnode: W } = c,
              G = S,
              Z;
            Je(c, !1),
              S ? ((S.el = W.el), ne(c, S, E)) : (S = W),
              I && Cn(I),
              (Z = S.props && S.props.onVnodeBeforeUpdate) && ve(Z, H, S, W),
              Je(c, !0);
            const re = En(c),
              Ce = c.subTree;
            (c.subTree = re),
              O(Ce, re, p(Ce.el), Ht(Ce), c, g, x),
              (S.el = re.el),
              G === null && No(c, re.el),
              M && de(M, g),
              (Z = S.props && S.props.onVnodeUpdated) && de(() => ve(Z, H, S, W), g);
          } else {
            let S;
            const { el: I, props: M } = u,
              { bm: H, m: W, parent: G } = c,
              Z = ht(u);
            if ((Je(c, !1), H && Cn(H), !Z && (S = M && M.onVnodeBeforeMount) && ve(S, G, u), Je(c, !0), I && xn)) {
              const re = () => {
                (c.subTree = En(c)), xn(I, c.subTree, c, g, null);
              };
              Z ? u.type.__asyncLoader().then(() => !c.isUnmounted && re()) : re();
            } else {
              const re = (c.subTree = En(c));
              O(null, re, h, m, c, g, x), (u.el = re.el);
            }
            if ((W && de(W, g), !Z && (S = M && M.onVnodeMounted))) {
              const re = u;
              de(() => ve(S, G, re), g);
            }
            (u.shapeFlag & 256 || (G && ht(G.vnode) && G.vnode.shapeFlag & 256)) && c.a && de(c.a, g),
              (c.isMounted = !0),
              (u = h = m = null);
          }
        },
        C = (c.effect = new Gn(v, () => fs(b), c.scope)),
        b = (c.update = () => C.run());
      (b.id = c.uid), Je(c, !0), b();
    },
    ne = (c, u, h) => {
      u.component = c;
      const m = c.vnode.props;
      (c.vnode = u), (c.next = null), fl(c, u.props, m, h), dl(c, u.children, h), bt(), Is(), yt();
    },
    Q = (c, u, h, m, g, x, E, v, C = !1) => {
      const b = c && c.children,
        S = c ? c.shapeFlag : 0,
        I = u.children,
        { patchFlag: M, shapeFlag: H } = u;
      if (M > 0) {
        if (M & 128) {
          $t(b, I, h, m, g, x, E, v, C);
          return;
        } else if (M & 256) {
          ze(b, I, h, m, g, x, E, v, C);
          return;
        }
      }
      H & 8
        ? (S & 16 && Le(b, g, x), I !== b && d(h, I))
        : S & 16
        ? H & 16
          ? $t(b, I, h, m, g, x, E, v, C)
          : Le(b, g, x, !0)
        : (S & 8 && d(h, ''), H & 16 && T(I, h, m, g, x, E, v, C));
    },
    ze = (c, u, h, m, g, x, E, v, C) => {
      (c = c || ft), (u = u || ft);
      const b = c.length,
        S = u.length,
        I = Math.min(b, S);
      let M;
      for (M = 0; M < I; M++) {
        const H = (u[M] = C ? Ke(u[M]) : Te(u[M]));
        O(c[M], H, h, null, g, x, E, v, C);
      }
      b > S ? Le(c, g, x, !0, !1, I) : T(u, h, m, g, x, E, v, C, I);
    },
    $t = (c, u, h, m, g, x, E, v, C) => {
      let b = 0;
      const S = u.length;
      let I = c.length - 1,
        M = S - 1;
      for (; b <= I && b <= M; ) {
        const H = c[b],
          W = (u[b] = C ? Ke(u[b]) : Te(u[b]));
        if (Ge(H, W)) O(H, W, h, null, g, x, E, v, C);
        else break;
        b++;
      }
      for (; b <= I && b <= M; ) {
        const H = c[I],
          W = (u[M] = C ? Ke(u[M]) : Te(u[M]));
        if (Ge(H, W)) O(H, W, h, null, g, x, E, v, C);
        else break;
        I--, M--;
      }
      if (b > I) {
        if (b <= M) {
          const H = M + 1,
            W = H < S ? u[H].el : m;
          for (; b <= M; ) O(null, (u[b] = C ? Ke(u[b]) : Te(u[b])), h, W, g, x, E, v, C), b++;
        }
      } else if (b > M) for (; b <= I; ) Ie(c[b], g, x, !0), b++;
      else {
        const H = b,
          W = b,
          G = new Map();
        for (b = W; b <= M; b++) {
          const me = (u[b] = C ? Ke(u[b]) : Te(u[b]));
          me.key != null && G.set(me.key, b);
        }
        let Z,
          re = 0;
        const Ce = M - W + 1;
        let ot = !1,
          bs = 0;
        const vt = new Array(Ce);
        for (b = 0; b < Ce; b++) vt[b] = 0;
        for (b = H; b <= I; b++) {
          const me = c[b];
          if (re >= Ce) {
            Ie(me, g, x, !0);
            continue;
          }
          let Oe;
          if (me.key != null) Oe = G.get(me.key);
          else
            for (Z = W; Z <= M; Z++)
              if (vt[Z - W] === 0 && Ge(me, u[Z])) {
                Oe = Z;
                break;
              }
          Oe === void 0
            ? Ie(me, g, x, !0)
            : ((vt[Oe - W] = b + 1), Oe >= bs ? (bs = Oe) : (ot = !0), O(me, u[Oe], h, null, g, x, E, v, C), re++);
        }
        const ys = ot ? ml(vt) : ft;
        for (Z = ys.length - 1, b = Ce - 1; b >= 0; b--) {
          const me = W + b,
            Oe = u[me],
            vs = me + 1 < S ? u[me + 1].el : m;
          vt[b] === 0 ? O(null, Oe, h, vs, g, x, E, v, C) : ot && (Z < 0 || b !== ys[Z] ? Ye(Oe, h, vs, 2) : Z--);
        }
      }
    },
    Ye = (c, u, h, m, g = null) => {
      const { el: x, type: E, transition: v, children: C, shapeFlag: b } = c;
      if (b & 6) {
        Ye(c.component.subTree, u, h, m);
        return;
      }
      if (b & 128) {
        c.suspense.move(u, h, m);
        return;
      }
      if (b & 64) {
        E.move(c, u, h, it);
        return;
      }
      if (E === he) {
        s(x, u, h);
        for (let I = 0; I < C.length; I++) Ye(C[I], u, h, m);
        s(c.anchor, u, h);
        return;
      }
      if (E === Rt) {
        $(c, u, h);
        return;
      }
      if (m !== 2 && b & 1 && v)
        if (m === 0) v.beforeEnter(x), s(x, u, h), de(() => v.enter(x), g);
        else {
          const { leave: I, delayLeave: M, afterLeave: H } = v,
            W = () => s(x, u, h),
            G = () => {
              I(x, () => {
                W(), H && H();
              });
            };
          M ? M(x, W, G) : G();
        }
      else s(x, u, h);
    },
    Ie = (c, u, h, m = !1, g = !1) => {
      const { type: x, props: E, ref: v, children: C, dynamicChildren: b, shapeFlag: S, patchFlag: I, dirs: M } = c;
      if ((v != null && rn(v, null, h, c, !0), S & 256)) {
        u.ctx.deactivate(c);
        return;
      }
      const H = S & 1 && M,
        W = !ht(c);
      let G;
      if ((W && (G = E && E.onVnodeBeforeUnmount) && ve(G, u, c), S & 6)) xi(c.component, h, m);
      else {
        if (S & 128) {
          c.suspense.unmount(h, m);
          return;
        }
        H && Fe(c, null, u, 'beforeUnmount'),
          S & 64
            ? c.type.remove(c, u, h, g, it, m)
            : b && (x !== he || (I > 0 && I & 64))
            ? Le(b, u, h, !1, !0)
            : ((x === he && I & 384) || (!g && S & 16)) && Le(C, u, h),
          m && ms(c);
      }
      ((W && (G = E && E.onVnodeUnmounted)) || H) &&
        de(() => {
          G && ve(G, u, c), H && Fe(c, null, u, 'unmounted');
        }, h);
    },
    ms = c => {
      const { type: u, el: h, anchor: m, transition: g } = c;
      if (u === he) {
        wi(h, m);
        return;
      }
      if (u === Rt) {
        R(c);
        return;
      }
      const x = () => {
        r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (c.shapeFlag & 1 && g && !g.persisted) {
        const { leave: E, delayLeave: v } = g,
          C = () => E(h, x);
        v ? v(c.el, x, C) : C();
      } else x();
    },
    wi = (c, u) => {
      let h;
      for (; c !== u; ) (h = y(c)), r(c), (c = h);
      r(u);
    },
    xi = (c, u, h) => {
      const { bum: m, scope: g, update: x, subTree: E, um: v } = c;
      m && Cn(m),
        g.stop(),
        x && ((x.active = !1), Ie(E, c, u, h)),
        v && de(v, u),
        de(() => {
          c.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    Le = (c, u, h, m = !1, g = !1, x = 0) => {
      for (let E = x; E < c.length; E++) Ie(c[E], u, h, m, g);
    },
    Ht = c => (c.shapeFlag & 6 ? Ht(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : y(c.anchor || c.el)),
    _s = (c, u, h) => {
      c == null ? u._vnode && Ie(u._vnode, null, null, !0) : O(u._vnode || null, c, u, null, null, null, h),
        Is(),
        en(),
        (u._vnode = c);
    },
    it = { p: O, um: Ie, m: Ye, r: ms, mt: F, mc: T, pc: Q, pbc: B, n: Ht, o: e };
  let wn, xn;
  return t && ([wn, xn] = t(it)), { render: _s, hydrate: wn, createApp: ol(_s, wn) };
}
function Je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ti(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (L(s) && L(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[i] = Ke(r[i])), (l.el = o.el)), n || ti(o, l)),
        l.type === mt && (l.el = o.el);
    }
}
function ml(e) {
  const t = e.slice(),
    n = [0];
  let s, r, i, o, l;
  const f = e.length;
  for (s = 0; s < f; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; ) (l = (i + o) >> 1), e[n[l]] < a ? (i = l + 1) : (o = l);
      a < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o]);
  return n;
}
const _l = e => e.__isTeleport,
  he = Symbol.for('v-fgt'),
  mt = Symbol.for('v-txt'),
  be = Symbol.for('v-cmt'),
  Rt = Symbol.for('v-stc'),
  Pt = [];
let Re = null;
function ni(e = !1) {
  Pt.push((Re = e ? null : []));
}
function bl() {
  Pt.pop(), (Re = Pt[Pt.length - 1] || null);
}
let Mt = 1;
function Ds(e) {
  Mt += e;
}
function si(e) {
  return (e.dynamicChildren = Mt > 0 ? Re || ft : null), bl(), Mt > 0 && Re && Re.push(e), e;
}
function kc(e, t, n, s, r, i) {
  return si(oi(e, t, n, s, r, i, !0));
}
function ri(e, t, n, s, r) {
  return si(ce(e, t, n, s, r, !0));
}
function on(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ge(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vn = '__vInternal',
  ii = ({ key: e }) => e ?? null,
  Jt = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (se(e) || le(e) || U(e) ? { i: ae, r: e, k: t, f: !!n } : e) : null
  );
function oi(e, t = null, n = null, s = 0, r = null, i = e === he ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ii(t),
    ref: t && Jt(t),
    scopeId: pn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ae
  };
  return (
    l ? (hs(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= se(n) ? 8 : 16),
    Mt > 0 && !o && Re && (f.patchFlag > 0 || i & 6) && f.patchFlag !== 32 && Re.push(f),
    f
  );
}
const ce = yl;
function yl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Vr) && (e = be), on(e))) {
    const l = qe(e, t, !0);
    return (
      n && hs(l, n),
      Mt > 0 && !i && Re && (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Il(e) && (e = e.__vccOpts), t)) {
    t = vl(t);
    let { class: l, style: f } = t;
    l && !se(l) && (t.class = Zn(l)), ee(f) && (Ir(f) && !L(f) && (f = ie({}, f)), (t.style = Xn(f)));
  }
  const o = se(e) ? 1 : $o(e) ? 128 : _l(e) ? 64 : ee(e) ? 4 : U(e) ? 2 : 0;
  return oi(e, t, n, s, r, o, i, !0);
}
function vl(e) {
  return e ? (Ir(e) || vn in e ? ie({}, e) : e) : null;
}
function qe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e,
    l = t ? wl(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ii(l),
    ref: t && t.ref ? (n && r ? (L(r) ? r.concat(Jt(t)) : [r, Jt(t)]) : Jt(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== he ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function li(e = ' ', t = 0) {
  return ce(mt, null, e, t);
}
function Wc(e, t) {
  const n = ce(Rt, null, e);
  return (n.staticCount = t), n;
}
function Vc(e = '', t = !1) {
  return t ? (ni(), ri(be, null, e)) : ce(be, null, e);
}
function Te(e) {
  return e == null || typeof e == 'boolean'
    ? ce(be)
    : L(e)
    ? ce(he, null, e.slice())
    : typeof e == 'object'
    ? Ke(e)
    : ce(mt, null, String(e));
}
function Ke(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : qe(e);
}
function hs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (L(t)) n = 16;
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), hs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(vn in t)
        ? (t._ctx = ae)
        : r === 3 && ae && (ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    U(t) ? ((t = { default: t, _ctx: ae }), (n = 32)) : ((t = String(t)), s & 64 ? ((n = 16), (t = [li(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function wl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = Zn([t.class, s.class]));
      else if (r === 'style') t.style = Xn([t.style, s.style]);
      else if (Nt(r)) {
        const i = t[r],
          o = s[r];
        o && i !== o && !(L(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== '' && (t[r] = s[r]);
  }
  return t;
}
function ve(e, t, n, s = null) {
  xe(e, t, 7, [n, s]);
}
const xl = Jr();
let Cl = 0;
function El(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || xl,
    i = {
      uid: Cl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Hi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Zr(s, r),
      emitsOptions: $r(s, r),
      emit: null,
      emitted: null,
      propsDefaults: te,
      inheritAttrs: s.inheritAttrs,
      ctx: te,
      data: te,
      props: te,
      attrs: te,
      slots: te,
      refs: te,
      setupState: te,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return (i.ctx = { _: i }), (i.root = t ? t.root : i), (i.emit = Oo.bind(null, i)), e.ce && e.ce(i), i;
}
let oe = null;
const ci = () => oe || ae;
let ps,
  lt,
  Ks = '__VUE_INSTANCE_SETTERS__';
(lt = Sn()[Ks]) || (lt = Sn()[Ks] = []),
  lt.push(e => (oe = e)),
  (ps = e => {
    lt.length > 1 ? lt.forEach(t => t(e)) : lt[0](e);
  });
const _t = e => {
    ps(e), e.scope.on();
  },
  st = () => {
    oe && oe.scope.off(), ps(null);
  };
function fi(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function Tl(e, t = !1) {
  Lt = t;
  const { props: n, children: s } = e.vnode,
    r = fi(e);
  cl(e, n, r, t), ul(e, s);
  const i = r ? Al(e, t) : void 0;
  return (Lt = !1), i;
}
function Al(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Tt(new Proxy(e.ctx, Qo)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? ui(e) : null);
    _t(e), bt();
    const i = We(s, e, 0, [e.props, r]);
    if ((yt(), st(), hr(i))) {
      if ((i.then(st, st), t))
        return i
          .then(o => {
            ks(e, o, t);
          })
          .catch(o => {
            dn(o, e, 0);
          });
      e.asyncDep = i;
    } else ks(e, i, t);
  } else ai(e, t);
}
function ks(e, t, n) {
  U(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : ee(t) && (e.setupState = Fr(t)), ai(e, n);
}
let Ws;
function ai(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ws && !s.render) {
      const r = s.template || us(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: f } = s,
          a = ie(ie({ isCustomElement: i, delimiters: l }, o), f);
        s.render = Ws(r, a);
      }
    }
    e.render = s.render || Pe;
  }
  _t(e), bt(), el(e), yt(), st();
}
function Rl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return pe(e, 'get', '$attrs'), t[n];
      }
    }))
  );
}
function ui(e) {
  const t = n => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Rl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Fr(Tt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in At) return At[n](e);
        },
        has(t, n) {
          return n in t || n in At;
        }
      }))
    );
}
function Pl(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Il(e) {
  return U(e) && '__vccOpts' in e;
}
const Ee = (e, t) => Eo(e, t, Lt);
function kn(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? ee(t) && !L(t)
      ? on(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && on(n) && (n = [n]), ce(e, t, n));
}
const Ol = Symbol.for('v-scx'),
  Fl = () => pt(Ol),
  Sl = '3.3.4',
  Ml = 'http://www.w3.org/2000/svg',
  et = typeof document < 'u' ? document : null,
  Vs = et && et.createElement('template'),
  Ll = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t ? et.createElementNS(Ml, e) : et.createElement(e, n ? { is: n } : void 0);
      return e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r;
    },
    createText: e => et.createTextNode(e),
    createComment: e => et.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => et.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        Vs.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Vs.content;
        if (s) {
          const f = l.firstChild;
          for (; f.firstChild; ) l.appendChild(f.firstChild);
          l.removeChild(f);
        }
        t.insertBefore(l, n);
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    }
  };
function Nl(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t);
}
function $l(e, t, n) {
  const s = e.style,
    r = se(n);
  if (n && !r) {
    if (t && !se(t)) for (const i in t) n[i] == null && Wn(s, i, '');
    for (const i in n) Wn(s, i, n[i]);
  } else {
    const i = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'), '_vod' in e && (s.display = i);
  }
}
const qs = /\s*!important$/;
function Wn(e, t, n) {
  if (L(n)) n.forEach(s => Wn(e, t, s));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const s = Hl(e, t);
    qs.test(n) ? e.setProperty(rt(s), n.replace(qs, ''), 'important') : (e[s] = n);
  }
}
const zs = ['Webkit', 'Moz', 'ms'],
  Rn = {};
function Hl(e, t) {
  const n = Rn[t];
  if (n) return n;
  let s = Me(t);
  if (s !== 'filter' && s in e) return (Rn[t] = s);
  s = fn(s);
  for (let r = 0; r < zs.length; r++) {
    const i = zs[r] + s;
    if (i in e) return (Rn[t] = i);
  }
  return t;
}
const Ys = 'http://www.w3.org/1999/xlink';
function Bl(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(Ys, t.slice(6, t.length)) : e.setAttributeNS(Ys, t, n);
  else {
    const i = $i(t);
    n == null || (i && !mr(n)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : n);
  }
}
function Ul(e, t, n, s, r, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && o(s, r, i), (e[t] = n ?? '');
    return;
  }
  const l = e.tagName;
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    e._value = n;
    const a = l === 'OPTION' ? e.getAttribute('value') : e.value,
      d = n ?? '';
    a !== d && (e.value = d), n == null && e.removeAttribute(t);
    return;
  }
  let f = !1;
  if (n === '' || n == null) {
    const a = typeof e[t];
    a === 'boolean'
      ? (n = mr(n))
      : n == null && a === 'string'
      ? ((n = ''), (f = !0))
      : a === 'number' && ((n = 0), (f = !0));
  }
  try {
    e[t] = n;
  } catch {}
  f && e.removeAttribute(t);
}
function jl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Dl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Kl(e, t, n, s, r = null) {
  const i = e._vei || (e._vei = {}),
    o = i[t];
  if (s && o) o.value = s;
  else {
    const [l, f] = kl(t);
    if (s) {
      const a = (i[t] = ql(s, r));
      jl(e, l, a, f);
    } else o && (Dl(e, l, o, f), (i[t] = void 0));
  }
}
const Js = /(?:Once|Passive|Capture)$/;
function kl(e) {
  let t;
  if (Js.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Js)); ) (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : rt(e.slice(2)), t];
}
let Pn = 0;
const Wl = Promise.resolve(),
  Vl = () => Pn || (Wl.then(() => (Pn = 0)), (Pn = Date.now()));
function ql(e, t) {
  const n = s => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    xe(zl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Vl()), n;
}
function zl(e, t) {
  if (L(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map(s => r => !r._stopped && s && s(r))
    );
  } else return t;
}
const Xs = /^on[a-z]/,
  Yl = (e, t, n, s, r = !1, i, o, l, f) => {
    t === 'class'
      ? Nl(e, s, r)
      : t === 'style'
      ? $l(e, n, s)
      : Nt(t)
      ? qn(t) || Kl(e, t, n, s, o)
      : (t[0] === '.' ? ((t = t.slice(1)), !0) : t[0] === '^' ? ((t = t.slice(1)), !1) : Jl(e, t, s, r))
      ? Ul(e, t, s, i, o, l, f)
      : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s), Bl(e, t, s, r));
  };
function Jl(e, t, n, s) {
  return s
    ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && Xs.test(t) && U(n)))
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Xs.test(t) && se(n))
    ? !1
    : t in e;
}
const je = 'transition',
  wt = 'animation',
  di = (e, { slots: t }) => kn(Do, Xl(e), t);
di.displayName = 'Transition';
const hi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
di.props = ie({}, Ur, hi);
const Xe = (e, t = []) => {
    L(e) ? e.forEach(n => n(...t)) : e && e(...t);
  },
  Zs = e => (e ? (L(e) ? e.some(t => t.length > 1) : e.length > 1) : !1);
function Xl(e) {
  const t = {};
  for (const P in e) P in hi || (t[P] = e[P]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: f = i,
      appearActiveClass: a = o,
      appearToClass: d = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: A = `${n}-leave-to`
    } = e,
    N = Zl(r),
    O = N && N[0],
    j = N && N[1],
    {
      onBeforeEnter: _,
      onEnter: w,
      onEnterCancelled: $,
      onLeave: R,
      onLeaveCancelled: K,
      onBeforeAppear: J = _,
      onAppear: V = w,
      onAppearCancelled: T = $
    } = t,
    D = (P, k, F) => {
      Ze(P, k ? d : l), Ze(P, k ? a : o), F && F();
    },
    B = (P, k) => {
      (P._isLeaving = !1), Ze(P, p), Ze(P, A), Ze(P, y), k && k();
    },
    Y = P => (k, F) => {
      const ge = P ? V : w,
        X = () => D(k, P, F);
      Xe(ge, [k, X]),
        Qs(() => {
          Ze(k, P ? f : i), De(k, P ? d : l), Zs(ge) || Gs(k, s, O, X);
        });
    };
  return ie(t, {
    onBeforeEnter(P) {
      Xe(_, [P]), De(P, i), De(P, o);
    },
    onBeforeAppear(P) {
      Xe(J, [P]), De(P, f), De(P, a);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(P, k) {
      P._isLeaving = !0;
      const F = () => B(P, k);
      De(P, p),
        ec(),
        De(P, y),
        Qs(() => {
          P._isLeaving && (Ze(P, p), De(P, A), Zs(R) || Gs(P, s, j, F));
        }),
        Xe(R, [P, F]);
    },
    onEnterCancelled(P) {
      D(P, !1), Xe($, [P]);
    },
    onAppearCancelled(P) {
      D(P, !0), Xe(T, [P]);
    },
    onLeaveCancelled(P) {
      B(P), Xe(K, [P]);
    }
  });
}
function Zl(e) {
  if (e == null) return null;
  if (ee(e)) return [In(e.enter), In(e.leave)];
  {
    const t = In(e);
    return [t, t];
  }
}
function In(e) {
  return Oi(e);
}
function De(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set())).add(t);
}
function Ze(e, t) {
  t.split(/\s+/).forEach(s => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Qs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ql = 0;
function Gs(e, t, n, s) {
  const r = (e._endId = ++Ql),
    i = () => {
      r === e._endId && s();
    };
  if (n) return setTimeout(i, n);
  const { type: o, timeout: l, propCount: f } = Gl(e, t);
  if (!o) return s();
  const a = o + 'end';
  let d = 0;
  const p = () => {
      e.removeEventListener(a, y), i();
    },
    y = A => {
      A.target === e && ++d >= f && p();
    };
  setTimeout(() => {
    d < f && p();
  }, l + 1),
    e.addEventListener(a, y);
}
function Gl(e, t) {
  const n = window.getComputedStyle(e),
    s = N => (n[N] || '').split(', '),
    r = s(`${je}Delay`),
    i = s(`${je}Duration`),
    o = er(r, i),
    l = s(`${wt}Delay`),
    f = s(`${wt}Duration`),
    a = er(l, f);
  let d = null,
    p = 0,
    y = 0;
  t === je
    ? o > 0 && ((d = je), (p = o), (y = i.length))
    : t === wt
    ? a > 0 && ((d = wt), (p = a), (y = f.length))
    : ((p = Math.max(o, a)), (d = p > 0 ? (o > a ? je : wt) : null), (y = d ? (d === je ? i.length : f.length) : 0));
  const A = d === je && /\b(transform|all)(,|$)/.test(s(`${je}Property`).toString());
  return { type: d, timeout: p, propCount: y, hasTransform: A };
}
function er(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => tr(n) + tr(e[s])));
}
function tr(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function ec() {
  return document.body.offsetHeight;
}
const tc = ['ctrl', 'shift', 'alt', 'meta'],
  nc = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => tc.some(n => e[`${n}Key`] && !t.includes(n))
  },
  qc =
    (e, t) =>
    (n, ...s) => {
      for (let r = 0; r < t.length; r++) {
        const i = nc[t[r]];
        if (i && i(n, t)) return;
      }
      return e(n, ...s);
    },
  sc = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  zc = (e, t) => n => {
    if (!('key' in n)) return;
    const s = rt(n.key);
    if (t.some(r => r === s || sc[r] === s)) return e(n);
  },
  rc = ie({ patchProp: Yl }, Ll);
let On,
  nr = !1;
function ic() {
  return (On = nr ? On : pl(rc)), (nr = !0), On;
}
const Yc = (...e) => {
  const t = ic().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = s => {
      const r = oc(s);
      if (r) return n(r, !0, r instanceof SVGElement);
    }),
    t
  );
};
function oc(e) {
  return se(e) ? document.querySelector(e) : e;
}
const Jc = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  lc = 'modulepreload',
  cc = function (e) {
    return '/doraUI/' + e;
  },
  sr = {},
  Xc = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const r = document.getElementsByTagName('link');
    return Promise.all(
      n.map(i => {
        if (((i = cc(i)), i in sr)) return;
        sr[i] = !0;
        const o = i.endsWith('.css'),
          l = o ? '[rel="stylesheet"]' : '';
        if (!!s)
          for (let d = r.length - 1; d >= 0; d--) {
            const p = r[d];
            if (p.href === i && (!o || p.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${i}"]${l}`)) return;
        const a = document.createElement('link');
        if (
          ((a.rel = o ? 'stylesheet' : lc),
          o || ((a.as = 'script'), (a.crossOrigin = '')),
          (a.href = i),
          document.head.appendChild(a),
          o)
        )
          return new Promise((d, p) => {
            a.addEventListener('load', d),
              a.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${i}`)));
          });
      })
    )
      .then(() => t())
      .catch(i => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented)) throw i;
      });
  },
  fc = window.__VP_SITE_DATA__,
  pi = /^[a-z]+:/i,
  Zc = /^pathname:\/\//,
  Qc = 'vitepress-theme-appearance',
  gi = /#.*$/,
  ac = /(index)?\.(md|html)$/,
  we = typeof document < 'u',
  mi = {
    relativePath: '',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0
  };
function uc(e, t, n = !1) {
  if (t === void 0) return !1;
  if (((e = rr(`/${e}`)), n)) return new RegExp(t).test(e);
  if (rr(t) !== e) return !1;
  const s = t.match(gi);
  return s ? (we ? location.hash : '') === s[0] : !0;
}
function rr(e) {
  return decodeURI(e).replace(gi, '').replace(ac, '');
}
function dc(e) {
  return pi.test(e);
}
function hc(e, t) {
  var s, r, i, o, l, f, a;
  const n = Object.keys(e.locales).find(d => d !== 'root' && !dc(d) && uc(t, `/${d}/`, !0)) || 'root';
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate: ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ?? e.titleTemplate,
    description: ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: bi(e.head, ((f = e.locales[n]) == null ? void 0 : f.head) ?? []),
    themeConfig: { ...e.themeConfig, ...((a = e.locales[n]) == null ? void 0 : a.themeConfig) }
  });
}
function _i(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate;
  if (typeof s == 'string' && s.includes(':title')) return s.replace(/:title/g, n);
  const r = pc(e.title, s);
  return `${n}${r}`;
}
function pc(e, t) {
  return t === !1 ? '' : t === !0 || t === void 0 ? ` | ${e}` : e === t ? '' : ` | ${t}`;
}
function gc(e, t) {
  const [n, s] = t;
  if (n !== 'meta') return !1;
  const r = Object.entries(s)[0];
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1]);
}
function bi(e, t) {
  return [...e.filter(n => !gc(t, n)), ...t];
}
const mc = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  _c = /^[a-z]:/i;
function ir(e) {
  const t = _c.exec(e),
    n = t ? t[0] : '';
  return (
    n +
    e
      .slice(n.length)
      .replace(mc, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  );
}
const bc = Symbol(),
  tt = go(fc);
function Gc(e) {
  const t = Ee(() => hc(tt.value, e.data.relativePath));
  return {
    site: t,
    theme: Ee(() => t.value.themeConfig),
    page: Ee(() => e.data),
    frontmatter: Ee(() => e.data.frontmatter),
    params: Ee(() => e.data.params),
    lang: Ee(() => t.value.lang),
    dir: Ee(() => t.value.dir),
    localeIndex: Ee(() => t.value.localeIndex || 'root'),
    title: Ee(() => _i(t.value, e.data)),
    description: Ee(() => e.data.description || t.value.description),
    isDark: ls(!1)
  };
}
function ef() {
  const e = pt(bc);
  if (!e) throw new Error('vitepress data not properly injected in app');
  return e;
}
function yc(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/');
}
function or(e) {
  return pi.test(e) || e.startsWith('.') ? e : yc(tt.value.base, e);
}
function vc(e) {
  let t = e.replace(/\.html$/, '');
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), we)) {
    const n = '/doraUI/';
    t = ir(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md';
    let s = __VP_HASH_MAP__[t.toLowerCase()];
    if (
      (s ||
        ((t = t.endsWith('_index.md') ? t.slice(0, -9) + '.md' : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null;
    t = `${n}${'assets'.replace(/"(.+)"/, '$1')}/${t}.${s}.js`;
  } else t = `./${ir(t.slice(1).replace(/\//g, '_'))}.md.js`;
  return t;
}
let Xt = [];
function tf(e) {
  Xt.push(e),
    yn(() => {
      Xt = Xt.filter(t => t !== e);
    });
}
const wc = Symbol(),
  lr = 'http://a.com',
  xc = () => ({ path: '/', component: null, data: mi });
function nf(e, t) {
  const n = un(xc()),
    s = { route: n, go: r };
  async function r(l = we ? location.href : '/') {
    var a, d;
    if ((await ((a = s.onBeforeRouteChange) == null ? void 0 : a.call(s, l))) === !1) return;
    const f = new URL(l, lr);
    tt.value.cleanUrls ||
      (!f.pathname.endsWith('/') &&
        !f.pathname.endsWith('.html') &&
        ((f.pathname += '.html'), (l = f.pathname + f.search + f.hash))),
      we &&
        l !== location.href &&
        (history.replaceState({ scrollPosition: window.scrollY }, document.title), history.pushState(null, '', l)),
      await o(l),
      await ((d = s.onAfterRouteChanged) == null ? void 0 : d.call(s, l));
  }
  let i = null;
  async function o(l, f = 0, a = !1) {
    var y;
    if ((await ((y = s.onBeforePageLoad) == null ? void 0 : y.call(s, l))) === !1) return;
    const d = new URL(l, lr),
      p = (i = d.pathname);
    try {
      let A = await e(p);
      if (!A) throw new Error(`Page not found: ${p}`);
      if (i === p) {
        i = null;
        const { default: N, __pageData: O } = A;
        if (!N) throw new Error(`Invalid route component: ${N}`);
        (n.path = we ? p : or(p)),
          (n.component = Tt(N)),
          (n.data = Tt(O)),
          we &&
            Mr(() => {
              let j = tt.value.base + O.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1');
              if (
                (!tt.value.cleanUrls && !j.endsWith('/') && (j += '.html'),
                j !== d.pathname && ((d.pathname = j), (l = j + d.search + d.hash), history.replaceState(null, '', l)),
                d.hash && !f)
              ) {
                let _ = null;
                try {
                  _ = document.getElementById(decodeURIComponent(d.hash).slice(1));
                } catch (w) {
                  console.warn(w);
                }
                if (_) {
                  cr(_, d.hash);
                  return;
                }
              }
              window.scrollTo(0, f);
            });
      }
    } catch (A) {
      if ((!/fetch|Page not found/.test(A.message) && !/^\/404(\.html|\/)?$/.test(l) && console.error(A), !a))
        try {
          const N = await fetch(tt.value.base + 'hashmap.json');
          (window.__VP_HASH_MAP__ = await N.json()), await o(l, f, !0);
          return;
        } catch {}
      i === p && ((i = null), (n.path = we ? p : or(p)), (n.component = t ? Tt(t) : null), (n.data = mi));
    }
  }
  return (
    we &&
      (window.addEventListener(
        'click',
        l => {
          if (l.target.closest('button')) return;
          const a = l.target.closest('a');
          if (a && !a.closest('.vp-raw') && (a instanceof SVGElement || !a.download)) {
            const { target: d } = a,
              {
                href: p,
                origin: y,
                pathname: A,
                hash: N,
                search: O
              } = new URL(a.href instanceof SVGAnimatedString ? a.href.animVal : a.href, a.baseURI),
              j = window.location,
              _ = A.match(/\.\w+$/);
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              !d &&
              y === j.origin &&
              !(_ && _[0] !== '.html') &&
              (l.preventDefault(),
              A === j.pathname && O === j.search
                ? N &&
                  (N !== j.hash && (history.pushState(null, '', N), window.dispatchEvent(new Event('hashchange'))),
                  cr(a, N, a.classList.contains('header-anchor')))
                : r(p));
          }
        },
        { capture: !0 }
      ),
      window.addEventListener('popstate', l => {
        o(location.href, (l.state && l.state.scrollPosition) || 0);
      }),
      window.addEventListener('hashchange', l => {
        l.preventDefault();
      })),
    s
  );
}
function Cc() {
  const e = pt(wc);
  if (!e) throw new Error('useRouter() is called without provider.');
  return e;
}
function yi() {
  return Cc().route;
}
function cr(e, t, n = !1) {
  let s = null;
  try {
    s = e.classList.contains('header-anchor') ? e : document.getElementById(decodeURIComponent(t).slice(1));
  } catch (r) {
    console.warn(r);
  }
  if (s) {
    let f = function () {
      !n || Math.abs(l - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, l)
        : window.scrollTo({ left: 0, top: l, behavior: 'smooth' });
    };
    const r = tt.value.scrollOffset;
    let i = 0;
    if (typeof r == 'number') i = r;
    else if (typeof r == 'string') i = fr(r);
    else if (Array.isArray(r))
      for (const a of r) {
        const d = fr(a);
        if (d) {
          i = d;
          break;
        }
      }
    const o = parseInt(window.getComputedStyle(s).paddingTop, 10),
      l = window.scrollY + s.getBoundingClientRect().top - i + o;
    requestAnimationFrame(f);
  }
}
function fr(e) {
  const t = document.querySelector(e);
  if (!t) return 0;
  const n = t.getBoundingClientRect().bottom;
  return n < 0 ? 0 : n + 24;
}
const ar = () => Xt.forEach(e => e()),
  sf = Kr({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = yi();
      return () =>
        kn(e.as, { style: { position: 'relative' } }, [
          t.component ? kn(t.component, { onVnodeMounted: ar, onVnodeUpdated: ar }) : '404 Page Not Found'
        ]);
    }
  }),
  rf = Kr({
    setup(e, { slots: t }) {
      const n = ls(!1);
      return (
        bn(() => {
          n.value = !0;
        }),
        () => (n.value && t.default ? t.default() : null)
      );
    }
  });
function of() {
  we &&
    window.addEventListener('click', e => {
      var n, s;
      const t = e.target;
      if (t.matches('.vp-code-group input')) {
        const r = (n = t.parentElement) == null ? void 0 : n.parentElement,
          i = Array.from((r == null ? void 0 : r.querySelectorAll('input')) || []).indexOf(t),
          o = r == null ? void 0 : r.querySelector('div[class*="language-"].active'),
          l =
            (s = r == null ? void 0 : r.querySelectorAll('div[class*="language-"]:not(.language-id)')) == null
              ? void 0
              : s[i];
        o && l && o !== l && (o.classList.remove('active'), l.classList.add('active'));
      }
    });
}
function lf() {
  if (we) {
    const e = new WeakMap();
    window.addEventListener('click', t => {
      var s;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
        if (!r || !i) return;
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className);
        let l = '';
        i.querySelectorAll('span.line:not(.diff.remove)').forEach(
          f =>
            (l +=
              (f.textContent || '') +
              `
`)
        ),
          (l = l.slice(0, -1)),
          o && (l = l.replace(/^ *(\$|>) /gm, '').trim()),
          Ec(l).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n));
            const f = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n);
            }, 2e3);
            e.set(n, f);
          });
      }
    });
  }
}
async function Ec(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement;
    (t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt');
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus();
  }
}
function cf(e, t) {
  let n = [],
    s = !0;
  const r = i => {
    if (s) {
      s = !1;
      return;
    }
    n.forEach(o => document.head.removeChild(o)),
      (n = []),
      i.forEach(o => {
        const l = ur(o);
        document.head.appendChild(l), n.push(l);
      });
  };
  Ho(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      f = (i && i.frontmatter.head) || [];
    document.title = _i(o, i);
    const a = l || o.description;
    let d = document.querySelector('meta[name=description]');
    d ? d.setAttribute('content', a) : ur(['meta', { name: 'description', content: a }]), r(bi(o.head, Ac(f)));
  });
}
function ur([e, t, n]) {
  const s = document.createElement(e);
  for (const r in t) s.setAttribute(r, t[r]);
  return n && (s.innerHTML = n), s;
}
function Tc(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description';
}
function Ac(e) {
  return e.filter(t => !Tc(t));
}
const Fn = new Set(),
  vi = () => document.createElement('link'),
  Rc = e => {
    const t = vi();
    (t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t);
  },
  Pc = e => {
    const t = new XMLHttpRequest();
    t.open('GET', e, (t.withCredentials = !0)), t.send();
  };
let qt;
const Ic = we && (qt = vi()) && qt.relList && qt.relList.supports && qt.relList.supports('prefetch') ? Rc : Pc;
function ff() {
  if (!we || !window.IntersectionObserver) return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType))) return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver(i => {
        i.forEach(o => {
          if (o.isIntersecting) {
            const l = o.target;
            n.unobserve(l);
            const { pathname: f } = l;
            if (!Fn.has(f)) {
              Fn.add(f);
              const a = vc(f);
              a && Ic(a);
            }
          }
        });
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach(i => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI
            ),
            f = l.match(/\.\w+$/);
          (f && f[0] !== '.html') ||
            (i.target !== '_blank' && o === location.hostname && (l !== location.pathname ? n.observe(i) : Fn.add(l)));
        });
      });
  };
  bn(s);
  const r = yi();
  Yt(() => r.path, s),
    yn(() => {
      n && n.disconnect();
    });
}
export {
  $c as $,
  Ho as A,
  ci as B,
  uc as C,
  yi as D,
  yn as E,
  zo as F,
  Hc as G,
  he as H,
  Uc as I,
  go as J,
  tf as K,
  ce as L,
  Bc as M,
  pi as N,
  wl as O,
  Zc as P,
  pt as Q,
  Xn as R,
  Mr as S,
  di as T,
  Wc as U,
  we as V,
  Qc as W,
  ll as X,
  Dc as Y,
  zc as Z,
  Jc as _,
  li as a,
  qc as a0,
  Kc as a1,
  cf as a2,
  wc as a3,
  Gc as a4,
  bc as a5,
  sf as a6,
  rf as a7,
  tt as a8,
  Yc as a9,
  nf as aa,
  vc as ab,
  Xc as ac,
  ff as ad,
  lf as ae,
  of as af,
  kn as ag,
  ri as b,
  kc as c,
  Kr as d,
  Vc as e,
  or as f,
  Ee as g,
  ls as h,
  dc as i,
  bn as j,
  oi as k,
  _o as l,
  Nc as m,
  Zn as n,
  ni as o,
  Lc as p,
  Mc as q,
  jc as r,
  Pr as s,
  Oc as t,
  ef as u,
  Sc as v,
  Fo as w,
  Ui as x,
  Fc as y,
  Yt as z
};
