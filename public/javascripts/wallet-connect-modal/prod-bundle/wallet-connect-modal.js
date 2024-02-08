var _m = Object.defineProperty;
var bm = (r, e, t) => e in r ? _m(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Gc = (r, e, t) => (bm(r, typeof e != "symbol" ? e + "" : e, t), t);
function yu() {
}
function lp(r) {
  return r();
}
function Df() {
  return /* @__PURE__ */ Object.create(null);
}
function ca(r) {
  r.forEach(lp);
}
function fp(r) {
  return typeof r == "function";
}
function mm(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function wm(r) {
  return Object.keys(r).length === 0;
}
function Em(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Dm(r) {
  return Array.from(r.childNodes);
}
let Qu;
function Ss(r) {
  Qu = r;
}
const Ri = [], Sf = [];
let Fi = [];
const xf = [], Sm = /* @__PURE__ */ Promise.resolve();
let vu = !1;
function xm() {
  vu || (vu = !0, Sm.then(dp));
}
function _u(r) {
  Fi.push(r);
}
const Wc = /* @__PURE__ */ new Set();
let Ai = 0;
function dp() {
  if (Ai !== 0)
    return;
  const r = Qu;
  do {
    try {
      for (; Ai < Ri.length; ) {
        const e = Ri[Ai];
        Ai++, Ss(e), Om(e.$$);
      }
    } catch (e) {
      throw Ri.length = 0, Ai = 0, e;
    }
    for (Ss(null), Ri.length = 0, Ai = 0; Sf.length; )
      Sf.pop()();
    for (let e = 0; e < Fi.length; e += 1) {
      const t = Fi[e];
      Wc.has(t) || (Wc.add(t), t());
    }
    Fi.length = 0;
  } while (Ri.length);
  for (; xf.length; )
    xf.pop()();
  vu = !1, Wc.clear(), Ss(r);
}
function Om(r) {
  if (r.fragment !== null) {
    r.update(), ca(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(_u);
  }
}
function Im(r) {
  const e = [], t = [];
  Fi.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Fi = e;
}
const Pm = /* @__PURE__ */ new Set();
function Cm(r, e) {
  r && r.i && (Pm.delete(r), r.i(e));
}
function Am(r, e, t) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(e, t), _u(() => {
    const c = r.$$.on_mount.map(lp).filter(fp);
    r.$$.on_destroy ? r.$$.on_destroy.push(...c) : ca(c), r.$$.on_mount = [];
  }), o.forEach(_u);
}
function Tm(r, e) {
  const t = r.$$;
  t.fragment !== null && (Im(t.after_update), ca(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Rm(r, e) {
  r.$$.dirty[0] === -1 && (Ri.push(r), xm(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Nm(r, e, t, i, o, c, u = null, f = [-1]) {
  const y = Qu;
  Ss(r);
  const p = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: yu,
    not_equal: o,
    bound: Df(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (y ? y.$$.context : [])),
    // everything else
    callbacks: Df(),
    dirty: f,
    skip_bound: !1,
    root: e.target || y.$$.root
  };
  u && u(p.root);
  let m = !1;
  if (p.ctx = t ? t(r, e.props || {}, (x, S, ...C) => {
    const R = C.length ? C[0] : S;
    return p.ctx && o(p.ctx[x], p.ctx[x] = R) && (!p.skip_bound && p.bound[x] && p.bound[x](R), m && Rm(r, x)), S;
  }) : [], p.update(), m = !0, ca(p.before_update), p.fragment = i ? i(p.ctx) : !1, e.target) {
    if (e.hydrate) {
      const x = Dm(e.target);
      p.fragment && p.fragment.l(x), x.forEach(Em);
    } else
      p.fragment && p.fragment.c();
    e.intro && Cm(r.$$.fragment), Am(r, e.target, e.anchor), dp();
  }
  Ss(y);
}
class $m {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Gc(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Gc(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Tm(this, 1), this.$destroy = yu;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!fp(t))
      return yu;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const o = i.indexOf(t);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !wm(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Fm = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Fm);
var br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function si(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var o = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(t, i, o.get ? o : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), t;
}
var Zu = { exports: {} }, Li = typeof Reflect == "object" ? Reflect : null, Of = Li && typeof Li.apply == "function" ? Li.apply : function(e, t, i) {
  return Function.prototype.apply.call(e, t, i);
}, Qo;
Li && typeof Li.ownKeys == "function" ? Qo = Li.ownKeys : Object.getOwnPropertySymbols ? Qo = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Qo = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Lm(r) {
  console && console.warn && console.warn(r);
}
var pp = Number.isNaN || function(e) {
  return e !== e;
};
function ot() {
  ot.init.call(this);
}
Zu.exports = ot;
Zu.exports.once = qm;
ot.EventEmitter = ot;
ot.prototype._events = void 0;
ot.prototype._eventsCount = 0;
ot.prototype._maxListeners = void 0;
var If = 10;
function ua(r) {
  if (typeof r != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
}
Object.defineProperty(ot, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return If;
  },
  set: function(r) {
    if (typeof r != "number" || r < 0 || pp(r))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
    If = r;
  }
});
ot.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
ot.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || pp(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function gp(r) {
  return r._maxListeners === void 0 ? ot.defaultMaxListeners : r._maxListeners;
}
ot.prototype.getMaxListeners = function() {
  return gp(this);
};
ot.prototype.emit = function(e) {
  for (var t = [], i = 1; i < arguments.length; i++)
    t.push(arguments[i]);
  var o = e === "error", c = this._events;
  if (c !== void 0)
    o = o && c.error === void 0;
  else if (!o)
    return !1;
  if (o) {
    var u;
    if (t.length > 0 && (u = t[0]), u instanceof Error)
      throw u;
    var f = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw f.context = u, f;
  }
  var y = c[e];
  if (y === void 0)
    return !1;
  if (typeof y == "function")
    Of(y, this, t);
  else
    for (var p = y.length, m = mp(y, p), i = 0; i < p; ++i)
      Of(m[i], this, t);
  return !0;
};
function yp(r, e, t, i) {
  var o, c, u;
  if (ua(t), c = r._events, c === void 0 ? (c = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (c.newListener !== void 0 && (r.emit(
    "newListener",
    e,
    t.listener ? t.listener : t
  ), c = r._events), u = c[e]), u === void 0)
    u = c[e] = t, ++r._eventsCount;
  else if (typeof u == "function" ? u = c[e] = i ? [t, u] : [u, t] : i ? u.unshift(t) : u.push(t), o = gp(r), o > 0 && u.length > o && !u.warned) {
    u.warned = !0;
    var f = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    f.name = "MaxListenersExceededWarning", f.emitter = r, f.type = e, f.count = u.length, Lm(f);
  }
  return r;
}
ot.prototype.addListener = function(e, t) {
  return yp(this, e, t, !1);
};
ot.prototype.on = ot.prototype.addListener;
ot.prototype.prependListener = function(e, t) {
  return yp(this, e, t, !0);
};
function jm() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function vp(r, e, t) {
  var i = { fired: !1, wrapFn: void 0, target: r, type: e, listener: t }, o = jm.bind(i);
  return o.listener = t, i.wrapFn = o, o;
}
ot.prototype.once = function(e, t) {
  return ua(t), this.on(e, vp(this, e, t)), this;
};
ot.prototype.prependOnceListener = function(e, t) {
  return ua(t), this.prependListener(e, vp(this, e, t)), this;
};
ot.prototype.removeListener = function(e, t) {
  var i, o, c, u, f;
  if (ua(t), o = this._events, o === void 0)
    return this;
  if (i = o[e], i === void 0)
    return this;
  if (i === t || i.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, i.listener || t));
  else if (typeof i != "function") {
    for (c = -1, u = i.length - 1; u >= 0; u--)
      if (i[u] === t || i[u].listener === t) {
        f = i[u].listener, c = u;
        break;
      }
    if (c < 0)
      return this;
    c === 0 ? i.shift() : Um(i, c), i.length === 1 && (o[e] = i[0]), o.removeListener !== void 0 && this.emit("removeListener", e, f || t);
  }
  return this;
};
ot.prototype.off = ot.prototype.removeListener;
ot.prototype.removeAllListeners = function(e) {
  var t, i, o;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[e]), this;
  if (arguments.length === 0) {
    var c = Object.keys(i), u;
    for (o = 0; o < c.length; ++o)
      u = c[o], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = i[e], typeof t == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (o = t.length - 1; o >= 0; o--)
      this.removeListener(e, t[o]);
  return this;
};
function _p(r, e, t) {
  var i = r._events;
  if (i === void 0)
    return [];
  var o = i[e];
  return o === void 0 ? [] : typeof o == "function" ? t ? [o.listener || o] : [o] : t ? Mm(o) : mp(o, o.length);
}
ot.prototype.listeners = function(e) {
  return _p(this, e, !0);
};
ot.prototype.rawListeners = function(e) {
  return _p(this, e, !1);
};
ot.listenerCount = function(r, e) {
  return typeof r.listenerCount == "function" ? r.listenerCount(e) : bp.call(r, e);
};
ot.prototype.listenerCount = bp;
function bp(r) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[r];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
ot.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Qo(this._events) : [];
};
function mp(r, e) {
  for (var t = new Array(e), i = 0; i < e; ++i)
    t[i] = r[i];
  return t;
}
function Um(r, e) {
  for (; e + 1 < r.length; e++)
    r[e] = r[e + 1];
  r.pop();
}
function Mm(r) {
  for (var e = new Array(r.length), t = 0; t < e.length; ++t)
    e[t] = r[t].listener || r[t];
  return e;
}
function qm(r, e) {
  return new Promise(function(t, i) {
    function o(u) {
      r.removeListener(e, c), i(u);
    }
    function c() {
      typeof r.removeListener == "function" && r.removeListener("error", o), t([].slice.call(arguments));
    }
    wp(r, e, c, { once: !0 }), e !== "error" && Bm(r, o, { once: !0 });
  });
}
function Bm(r, e, t) {
  typeof r.on == "function" && wp(r, "error", e, t);
}
function wp(r, e, t, i) {
  if (typeof r.on == "function")
    i.once ? r.once(e, t) : r.on(e, t);
  else if (typeof r.addEventListener == "function")
    r.addEventListener(e, function o(c) {
      i.once && r.removeEventListener(e, o), t(c);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
}
var Pr = Zu.exports;
const eh = /* @__PURE__ */ Xu(Pr);
var th = {}, ha = {}, Le = {}, Ep = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  function e(f, y) {
    var p = f >>> 16 & 65535, m = f & 65535, x = y >>> 16 & 65535, S = y & 65535;
    return m * S + (p * S + m * x << 16 >>> 0) | 0;
  }
  r.mul = Math.imul || e;
  function t(f, y) {
    return f + y | 0;
  }
  r.add = t;
  function i(f, y) {
    return f - y | 0;
  }
  r.sub = i;
  function o(f, y) {
    return f << y | f >>> 32 - y;
  }
  r.rotl = o;
  function c(f, y) {
    return f << 32 - y | f >>> y;
  }
  r.rotr = c;
  function u(f) {
    return typeof f == "number" && isFinite(f) && Math.floor(f) === f;
  }
  r.isInteger = Number.isInteger || u, r.MAX_SAFE_INTEGER = 9007199254740991, r.isSafeInteger = function(f) {
    return r.isInteger(f) && f >= -r.MAX_SAFE_INTEGER && f <= r.MAX_SAFE_INTEGER;
  };
})(Ep);
Object.defineProperty(Le, "__esModule", { value: !0 });
var Dp = Ep;
function Hm(r, e) {
  return e === void 0 && (e = 0), (r[e + 0] << 8 | r[e + 1]) << 16 >> 16;
}
Le.readInt16BE = Hm;
function zm(r, e) {
  return e === void 0 && (e = 0), (r[e + 0] << 8 | r[e + 1]) >>> 0;
}
Le.readUint16BE = zm;
function Km(r, e) {
  return e === void 0 && (e = 0), (r[e + 1] << 8 | r[e]) << 16 >> 16;
}
Le.readInt16LE = Km;
function km(r, e) {
  return e === void 0 && (e = 0), (r[e + 1] << 8 | r[e]) >>> 0;
}
Le.readUint16LE = km;
function Sp(r, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = r >>> 8, e[t + 1] = r >>> 0, e;
}
Le.writeUint16BE = Sp;
Le.writeInt16BE = Sp;
function xp(r, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = r >>> 0, e[t + 1] = r >>> 8, e;
}
Le.writeUint16LE = xp;
Le.writeInt16LE = xp;
function bu(r, e) {
  return e === void 0 && (e = 0), r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3];
}
Le.readInt32BE = bu;
function mu(r, e) {
  return e === void 0 && (e = 0), (r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]) >>> 0;
}
Le.readUint32BE = mu;
function wu(r, e) {
  return e === void 0 && (e = 0), r[e + 3] << 24 | r[e + 2] << 16 | r[e + 1] << 8 | r[e];
}
Le.readInt32LE = wu;
function Eu(r, e) {
  return e === void 0 && (e = 0), (r[e + 3] << 24 | r[e + 2] << 16 | r[e + 1] << 8 | r[e]) >>> 0;
}
Le.readUint32LE = Eu;
function ta(r, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = r >>> 24, e[t + 1] = r >>> 16, e[t + 2] = r >>> 8, e[t + 3] = r >>> 0, e;
}
Le.writeUint32BE = ta;
Le.writeInt32BE = ta;
function ra(r, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = r >>> 0, e[t + 1] = r >>> 8, e[t + 2] = r >>> 16, e[t + 3] = r >>> 24, e;
}
Le.writeUint32LE = ra;
Le.writeInt32LE = ra;
function Vm(r, e) {
  e === void 0 && (e = 0);
  var t = bu(r, e), i = bu(r, e + 4);
  return t * 4294967296 + i - (i >> 31) * 4294967296;
}
Le.readInt64BE = Vm;
function Gm(r, e) {
  e === void 0 && (e = 0);
  var t = mu(r, e), i = mu(r, e + 4);
  return t * 4294967296 + i;
}
Le.readUint64BE = Gm;
function Wm(r, e) {
  e === void 0 && (e = 0);
  var t = wu(r, e), i = wu(r, e + 4);
  return i * 4294967296 + t - (t >> 31) * 4294967296;
}
Le.readInt64LE = Wm;
function Ym(r, e) {
  e === void 0 && (e = 0);
  var t = Eu(r, e), i = Eu(r, e + 4);
  return i * 4294967296 + t;
}
Le.readUint64LE = Ym;
function Op(r, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), ta(r / 4294967296 >>> 0, e, t), ta(r >>> 0, e, t + 4), e;
}
Le.writeUint64BE = Op;
Le.writeInt64BE = Op;
function Ip(r, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), ra(r >>> 0, e, t), ra(r / 4294967296 >>> 0, e, t + 4), e;
}
Le.writeUint64LE = Ip;
Le.writeInt64LE = Ip;
function Jm(r, e, t) {
  if (t === void 0 && (t = 0), r % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, o = 1, c = r / 8 + t - 1; c >= t; c--)
    i += e[c] * o, o *= 256;
  return i;
}
Le.readUintBE = Jm;
function Qm(r, e, t) {
  if (t === void 0 && (t = 0), r % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, o = 1, c = t; c < t + r / 8; c++)
    i += e[c] * o, o *= 256;
  return i;
}
Le.readUintLE = Qm;
function Xm(r, e, t, i) {
  if (t === void 0 && (t = new Uint8Array(r / 8)), i === void 0 && (i = 0), r % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Dp.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var o = 1, c = r / 8 + i - 1; c >= i; c--)
    t[c] = e / o & 255, o *= 256;
  return t;
}
Le.writeUintBE = Xm;
function Zm(r, e, t, i) {
  if (t === void 0 && (t = new Uint8Array(r / 8)), i === void 0 && (i = 0), r % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Dp.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var o = 1, c = i; c < i + r / 8; c++)
    t[c] = e / o & 255, o *= 256;
  return t;
}
Le.writeUintLE = Zm;
function ew(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e);
}
Le.readFloat32BE = ew;
function tw(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e, !0);
}
Le.readFloat32LE = tw;
function rw(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e);
}
Le.readFloat64BE = rw;
function nw(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e, !0);
}
Le.readFloat64LE = nw;
function iw(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r), e;
}
Le.writeFloat32BE = iw;
function sw(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r, !0), e;
}
Le.writeFloat32LE = sw;
function ow(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r), e;
}
Le.writeFloat64BE = ow;
function aw(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r, !0), e;
}
Le.writeFloat64LE = aw;
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
function cw(r) {
  for (var e = 0; e < r.length; e++)
    r[e] = 0;
  return r;
}
Cr.wipe = cw;
Object.defineProperty(ha, "__esModule", { value: !0 });
var Zt = Le, Du = Cr, uw = 20;
function hw(r, e, t) {
  for (var i = 1634760805, o = 857760878, c = 2036477234, u = 1797285236, f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], y = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], p = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], m = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], x = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], S = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], C = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], R = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], H = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], K = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], se = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], $ = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], j = i, O = o, T = c, E = u, h = f, b = y, G = p, W = m, ie = x, ce = S, de = C, w = R, P = H, ee = K, Q = se, k = $, V = 0; V < uw; V += 2)
    j = j + h | 0, P ^= j, P = P >>> 32 - 16 | P << 16, ie = ie + P | 0, h ^= ie, h = h >>> 32 - 12 | h << 12, O = O + b | 0, ee ^= O, ee = ee >>> 32 - 16 | ee << 16, ce = ce + ee | 0, b ^= ce, b = b >>> 32 - 12 | b << 12, T = T + G | 0, Q ^= T, Q = Q >>> 32 - 16 | Q << 16, de = de + Q | 0, G ^= de, G = G >>> 32 - 12 | G << 12, E = E + W | 0, k ^= E, k = k >>> 32 - 16 | k << 16, w = w + k | 0, W ^= w, W = W >>> 32 - 12 | W << 12, T = T + G | 0, Q ^= T, Q = Q >>> 32 - 8 | Q << 8, de = de + Q | 0, G ^= de, G = G >>> 32 - 7 | G << 7, E = E + W | 0, k ^= E, k = k >>> 32 - 8 | k << 8, w = w + k | 0, W ^= w, W = W >>> 32 - 7 | W << 7, O = O + b | 0, ee ^= O, ee = ee >>> 32 - 8 | ee << 8, ce = ce + ee | 0, b ^= ce, b = b >>> 32 - 7 | b << 7, j = j + h | 0, P ^= j, P = P >>> 32 - 8 | P << 8, ie = ie + P | 0, h ^= ie, h = h >>> 32 - 7 | h << 7, j = j + b | 0, k ^= j, k = k >>> 32 - 16 | k << 16, de = de + k | 0, b ^= de, b = b >>> 32 - 12 | b << 12, O = O + G | 0, P ^= O, P = P >>> 32 - 16 | P << 16, w = w + P | 0, G ^= w, G = G >>> 32 - 12 | G << 12, T = T + W | 0, ee ^= T, ee = ee >>> 32 - 16 | ee << 16, ie = ie + ee | 0, W ^= ie, W = W >>> 32 - 12 | W << 12, E = E + h | 0, Q ^= E, Q = Q >>> 32 - 16 | Q << 16, ce = ce + Q | 0, h ^= ce, h = h >>> 32 - 12 | h << 12, T = T + W | 0, ee ^= T, ee = ee >>> 32 - 8 | ee << 8, ie = ie + ee | 0, W ^= ie, W = W >>> 32 - 7 | W << 7, E = E + h | 0, Q ^= E, Q = Q >>> 32 - 8 | Q << 8, ce = ce + Q | 0, h ^= ce, h = h >>> 32 - 7 | h << 7, O = O + G | 0, P ^= O, P = P >>> 32 - 8 | P << 8, w = w + P | 0, G ^= w, G = G >>> 32 - 7 | G << 7, j = j + b | 0, k ^= j, k = k >>> 32 - 8 | k << 8, de = de + k | 0, b ^= de, b = b >>> 32 - 7 | b << 7;
  Zt.writeUint32LE(j + i | 0, r, 0), Zt.writeUint32LE(O + o | 0, r, 4), Zt.writeUint32LE(T + c | 0, r, 8), Zt.writeUint32LE(E + u | 0, r, 12), Zt.writeUint32LE(h + f | 0, r, 16), Zt.writeUint32LE(b + y | 0, r, 20), Zt.writeUint32LE(G + p | 0, r, 24), Zt.writeUint32LE(W + m | 0, r, 28), Zt.writeUint32LE(ie + x | 0, r, 32), Zt.writeUint32LE(ce + S | 0, r, 36), Zt.writeUint32LE(de + C | 0, r, 40), Zt.writeUint32LE(w + R | 0, r, 44), Zt.writeUint32LE(P + H | 0, r, 48), Zt.writeUint32LE(ee + K | 0, r, 52), Zt.writeUint32LE(Q + se | 0, r, 56), Zt.writeUint32LE(k + $ | 0, r, 60);
}
function Pp(r, e, t, i, o) {
  if (o === void 0 && (o = 0), r.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var c, u;
  if (o === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    c = new Uint8Array(16), u = c.length - e.length, c.set(e, u);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    c = e, u = o;
  }
  for (var f = new Uint8Array(64), y = 0; y < t.length; y += 64) {
    hw(f, c, r);
    for (var p = y; p < y + 64 && p < t.length; p++)
      i[p] = t[p] ^ f[p - y];
    fw(c, 0, u);
  }
  return Du.wipe(f), o === 0 && Du.wipe(c), i;
}
ha.streamXOR = Pp;
function lw(r, e, t, i) {
  return i === void 0 && (i = 0), Du.wipe(t), Pp(r, e, t, t, i);
}
ha.stream = lw;
function fw(r, e, t) {
  for (var i = 1; t--; )
    i = i + (r[e] & 255) | 0, r[e] = i & 255, i >>>= 8, e++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var Cp = {}, Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
function dw(r, e, t) {
  return ~(r - 1) & e | r - 1 & t;
}
Un.select = dw;
function pw(r, e) {
  return (r | 0) - (e | 0) - 1 >>> 31 & 1;
}
Un.lessOrEqual = pw;
function Ap(r, e) {
  if (r.length !== e.length)
    return 0;
  for (var t = 0, i = 0; i < r.length; i++)
    t |= r[i] ^ e[i];
  return 1 & t - 1 >>> 8;
}
Un.compare = Ap;
function gw(r, e) {
  return r.length === 0 || e.length === 0 ? !1 : Ap(r, e) !== 0;
}
Un.equal = gw;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = Un, t = Cr;
  r.DIGEST_LENGTH = 16;
  var i = (
    /** @class */
    function() {
      function u(f) {
        this.digestLength = r.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var y = f[0] | f[1] << 8;
        this._r[0] = y & 8191;
        var p = f[2] | f[3] << 8;
        this._r[1] = (y >>> 13 | p << 3) & 8191;
        var m = f[4] | f[5] << 8;
        this._r[2] = (p >>> 10 | m << 6) & 7939;
        var x = f[6] | f[7] << 8;
        this._r[3] = (m >>> 7 | x << 9) & 8191;
        var S = f[8] | f[9] << 8;
        this._r[4] = (x >>> 4 | S << 12) & 255, this._r[5] = S >>> 1 & 8190;
        var C = f[10] | f[11] << 8;
        this._r[6] = (S >>> 14 | C << 2) & 8191;
        var R = f[12] | f[13] << 8;
        this._r[7] = (C >>> 11 | R << 5) & 8065;
        var H = f[14] | f[15] << 8;
        this._r[8] = (R >>> 8 | H << 8) & 8191, this._r[9] = H >>> 5 & 127, this._pad[0] = f[16] | f[17] << 8, this._pad[1] = f[18] | f[19] << 8, this._pad[2] = f[20] | f[21] << 8, this._pad[3] = f[22] | f[23] << 8, this._pad[4] = f[24] | f[25] << 8, this._pad[5] = f[26] | f[27] << 8, this._pad[6] = f[28] | f[29] << 8, this._pad[7] = f[30] | f[31] << 8;
      }
      return u.prototype._blocks = function(f, y, p) {
        for (var m = this._fin ? 0 : 2048, x = this._h[0], S = this._h[1], C = this._h[2], R = this._h[3], H = this._h[4], K = this._h[5], se = this._h[6], $ = this._h[7], j = this._h[8], O = this._h[9], T = this._r[0], E = this._r[1], h = this._r[2], b = this._r[3], G = this._r[4], W = this._r[5], ie = this._r[6], ce = this._r[7], de = this._r[8], w = this._r[9]; p >= 16; ) {
          var P = f[y + 0] | f[y + 1] << 8;
          x += P & 8191;
          var ee = f[y + 2] | f[y + 3] << 8;
          S += (P >>> 13 | ee << 3) & 8191;
          var Q = f[y + 4] | f[y + 5] << 8;
          C += (ee >>> 10 | Q << 6) & 8191;
          var k = f[y + 6] | f[y + 7] << 8;
          R += (Q >>> 7 | k << 9) & 8191;
          var V = f[y + 8] | f[y + 9] << 8;
          H += (k >>> 4 | V << 12) & 8191, K += V >>> 1 & 8191;
          var J = f[y + 10] | f[y + 11] << 8;
          se += (V >>> 14 | J << 2) & 8191;
          var re = f[y + 12] | f[y + 13] << 8;
          $ += (J >>> 11 | re << 5) & 8191;
          var me = f[y + 14] | f[y + 15] << 8;
          j += (re >>> 8 | me << 8) & 8191, O += me >>> 5 | m;
          var oe = 0, we = oe;
          we += x * T, we += S * (5 * w), we += C * (5 * de), we += R * (5 * ce), we += H * (5 * ie), oe = we >>> 13, we &= 8191, we += K * (5 * W), we += se * (5 * G), we += $ * (5 * b), we += j * (5 * h), we += O * (5 * E), oe += we >>> 13, we &= 8191;
          var le = oe;
          le += x * E, le += S * T, le += C * (5 * w), le += R * (5 * de), le += H * (5 * ce), oe = le >>> 13, le &= 8191, le += K * (5 * ie), le += se * (5 * W), le += $ * (5 * G), le += j * (5 * b), le += O * (5 * h), oe += le >>> 13, le &= 8191;
          var _e = oe;
          _e += x * h, _e += S * E, _e += C * T, _e += R * (5 * w), _e += H * (5 * de), oe = _e >>> 13, _e &= 8191, _e += K * (5 * ce), _e += se * (5 * ie), _e += $ * (5 * W), _e += j * (5 * G), _e += O * (5 * b), oe += _e >>> 13, _e &= 8191;
          var B = oe;
          B += x * b, B += S * h, B += C * E, B += R * T, B += H * (5 * w), oe = B >>> 13, B &= 8191, B += K * (5 * de), B += se * (5 * ce), B += $ * (5 * ie), B += j * (5 * W), B += O * (5 * G), oe += B >>> 13, B &= 8191;
          var q = oe;
          q += x * G, q += S * b, q += C * h, q += R * E, q += H * T, oe = q >>> 13, q &= 8191, q += K * (5 * w), q += se * (5 * de), q += $ * (5 * ce), q += j * (5 * ie), q += O * (5 * W), oe += q >>> 13, q &= 8191;
          var F = oe;
          F += x * W, F += S * G, F += C * b, F += R * h, F += H * E, oe = F >>> 13, F &= 8191, F += K * T, F += se * (5 * w), F += $ * (5 * de), F += j * (5 * ce), F += O * (5 * ie), oe += F >>> 13, F &= 8191;
          var d = oe;
          d += x * ie, d += S * W, d += C * G, d += R * b, d += H * h, oe = d >>> 13, d &= 8191, d += K * E, d += se * T, d += $ * (5 * w), d += j * (5 * de), d += O * (5 * ce), oe += d >>> 13, d &= 8191;
          var A = oe;
          A += x * ce, A += S * ie, A += C * W, A += R * G, A += H * b, oe = A >>> 13, A &= 8191, A += K * h, A += se * E, A += $ * T, A += j * (5 * w), A += O * (5 * de), oe += A >>> 13, A &= 8191;
          var ae = oe;
          ae += x * de, ae += S * ce, ae += C * ie, ae += R * W, ae += H * G, oe = ae >>> 13, ae &= 8191, ae += K * b, ae += se * h, ae += $ * E, ae += j * T, ae += O * (5 * w), oe += ae >>> 13, ae &= 8191;
          var fe = oe;
          fe += x * w, fe += S * de, fe += C * ce, fe += R * ie, fe += H * W, oe = fe >>> 13, fe &= 8191, fe += K * G, fe += se * b, fe += $ * h, fe += j * E, fe += O * T, oe += fe >>> 13, fe &= 8191, oe = (oe << 2) + oe | 0, oe = oe + we | 0, we = oe & 8191, oe = oe >>> 13, le += oe, x = we, S = le, C = _e, R = B, H = q, K = F, se = d, $ = A, j = ae, O = fe, y += 16, p -= 16;
        }
        this._h[0] = x, this._h[1] = S, this._h[2] = C, this._h[3] = R, this._h[4] = H, this._h[5] = K, this._h[6] = se, this._h[7] = $, this._h[8] = j, this._h[9] = O;
      }, u.prototype.finish = function(f, y) {
        y === void 0 && (y = 0);
        var p = new Uint16Array(10), m, x, S, C;
        if (this._leftover) {
          for (C = this._leftover, this._buffer[C++] = 1; C < 16; C++)
            this._buffer[C] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (m = this._h[1] >>> 13, this._h[1] &= 8191, C = 2; C < 10; C++)
          this._h[C] += m, m = this._h[C] >>> 13, this._h[C] &= 8191;
        for (this._h[0] += m * 5, m = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += m, m = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += m, p[0] = this._h[0] + 5, m = p[0] >>> 13, p[0] &= 8191, C = 1; C < 10; C++)
          p[C] = this._h[C] + m, m = p[C] >>> 13, p[C] &= 8191;
        for (p[9] -= 8192, x = (m ^ 1) - 1, C = 0; C < 10; C++)
          p[C] &= x;
        for (x = ~x, C = 0; C < 10; C++)
          this._h[C] = this._h[C] & x | p[C];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, S = this._h[0] + this._pad[0], this._h[0] = S & 65535, C = 1; C < 8; C++)
          S = (this._h[C] + this._pad[C] | 0) + (S >>> 16) | 0, this._h[C] = S & 65535;
        return f[y + 0] = this._h[0] >>> 0, f[y + 1] = this._h[0] >>> 8, f[y + 2] = this._h[1] >>> 0, f[y + 3] = this._h[1] >>> 8, f[y + 4] = this._h[2] >>> 0, f[y + 5] = this._h[2] >>> 8, f[y + 6] = this._h[3] >>> 0, f[y + 7] = this._h[3] >>> 8, f[y + 8] = this._h[4] >>> 0, f[y + 9] = this._h[4] >>> 8, f[y + 10] = this._h[5] >>> 0, f[y + 11] = this._h[5] >>> 8, f[y + 12] = this._h[6] >>> 0, f[y + 13] = this._h[6] >>> 8, f[y + 14] = this._h[7] >>> 0, f[y + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(f) {
        var y = 0, p = f.length, m;
        if (this._leftover) {
          m = 16 - this._leftover, m > p && (m = p);
          for (var x = 0; x < m; x++)
            this._buffer[this._leftover + x] = f[y + x];
          if (p -= m, y += m, this._leftover += m, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (p >= 16 && (m = p - p % 16, this._blocks(f, y, m), y += m, p -= m), p) {
          for (var x = 0; x < p; x++)
            this._buffer[this._leftover + x] = f[y + x];
          this._leftover += p;
        }
        return this;
      }, u.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var f = new Uint8Array(16);
        return this.finish(f), f;
      }, u.prototype.clean = function() {
        return t.wipe(this._buffer), t.wipe(this._r), t.wipe(this._h), t.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, u;
    }()
  );
  r.Poly1305 = i;
  function o(u, f) {
    var y = new i(u);
    y.update(f);
    var p = y.digest();
    return y.clean(), p;
  }
  r.oneTimeAuth = o;
  function c(u, f) {
    return u.length !== r.DIGEST_LENGTH || f.length !== r.DIGEST_LENGTH ? !1 : e.equal(u, f);
  }
  r.equal = c;
})(Cp);
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = ha, t = Cp, i = Cr, o = Le, c = Un;
  r.KEY_LENGTH = 32, r.NONCE_LENGTH = 12, r.TAG_LENGTH = 16;
  var u = new Uint8Array(16), f = (
    /** @class */
    function() {
      function y(p) {
        if (this.nonceLength = r.NONCE_LENGTH, this.tagLength = r.TAG_LENGTH, p.length !== r.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(p);
      }
      return y.prototype.seal = function(p, m, x, S) {
        if (p.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var C = new Uint8Array(16);
        C.set(p, C.length - p.length);
        var R = new Uint8Array(32);
        e.stream(this._key, C, R, 4);
        var H = m.length + this.tagLength, K;
        if (S) {
          if (S.length !== H)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          K = S;
        } else
          K = new Uint8Array(H);
        return e.streamXOR(this._key, C, m, K, 4), this._authenticate(K.subarray(K.length - this.tagLength, K.length), R, K.subarray(0, K.length - this.tagLength), x), i.wipe(C), K;
      }, y.prototype.open = function(p, m, x, S) {
        if (p.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (m.length < this.tagLength)
          return null;
        var C = new Uint8Array(16);
        C.set(p, C.length - p.length);
        var R = new Uint8Array(32);
        e.stream(this._key, C, R, 4);
        var H = new Uint8Array(this.tagLength);
        if (this._authenticate(H, R, m.subarray(0, m.length - this.tagLength), x), !c.equal(H, m.subarray(m.length - this.tagLength, m.length)))
          return null;
        var K = m.length - this.tagLength, se;
        if (S) {
          if (S.length !== K)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          se = S;
        } else
          se = new Uint8Array(K);
        return e.streamXOR(this._key, C, m.subarray(0, m.length - this.tagLength), se, 4), i.wipe(C), se;
      }, y.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, y.prototype._authenticate = function(p, m, x, S) {
        var C = new t.Poly1305(m);
        S && (C.update(S), S.length % 16 > 0 && C.update(u.subarray(S.length % 16))), C.update(x), x.length % 16 > 0 && C.update(u.subarray(x.length % 16));
        var R = new Uint8Array(8);
        S && o.writeUint64LE(S.length, R), C.update(R), o.writeUint64LE(x.length, R), C.update(R);
        for (var H = C.digest(), K = 0; K < H.length; K++)
          p[K] = H[K];
        C.clean(), i.wipe(H), i.wipe(R);
      }, y;
    }()
  );
  r.ChaCha20Poly1305 = f;
})(th);
var Tp = {}, $s = {}, rh = {};
Object.defineProperty(rh, "__esModule", { value: !0 });
function yw(r) {
  return typeof r.saveState < "u" && typeof r.restoreState < "u" && typeof r.cleanSavedState < "u";
}
rh.isSerializableHash = yw;
Object.defineProperty($s, "__esModule", { value: !0 });
var tn = rh, vw = Un, _w = Cr, Rp = (
  /** @class */
  function() {
    function r(e, t) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var i = new Uint8Array(this.blockSize);
      t.length > this.blockSize ? this._inner.update(t).finish(i).clean() : i.set(t);
      for (var o = 0; o < i.length; o++)
        i[o] ^= 54;
      this._inner.update(i);
      for (var o = 0; o < i.length; o++)
        i[o] ^= 106;
      this._outer.update(i), tn.isSerializableHash(this._inner) && tn.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), _w.wipe(i);
    }
    return r.prototype.reset = function() {
      if (!tn.isSerializableHash(this._inner) || !tn.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, r.prototype.clean = function() {
      tn.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), tn.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, r.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, r.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, r.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, r.prototype.saveState = function() {
      if (!tn.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, r.prototype.restoreState = function(e) {
      if (!tn.isSerializableHash(this._inner) || !tn.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, r.prototype.cleanSavedState = function(e) {
      if (!tn.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, r;
  }()
);
$s.HMAC = Rp;
function bw(r, e, t) {
  var i = new Rp(r, e);
  i.update(t);
  var o = i.digest();
  return i.clean(), o;
}
$s.hmac = bw;
$s.equal = vw.equal;
Object.defineProperty(Tp, "__esModule", { value: !0 });
var Pf = $s, Cf = Cr, mw = (
  /** @class */
  function() {
    function r(e, t, i, o) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = o;
      var c = Pf.hmac(this._hash, i, t);
      this._hmac = new Pf.HMAC(e, c), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return r.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, r.prototype.expand = function(e) {
      for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
        this._bufpos === this._buffer.length && this._fillBuffer(), t[i] = this._buffer[this._bufpos++];
      return t;
    }, r.prototype.clean = function() {
      this._hmac.clean(), Cf.wipe(this._buffer), Cf.wipe(this._counter), this._bufpos = 0;
    }, r;
  }()
), ww = Tp.HKDF = mw, qi = {}, la = {}, fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.BrowserRandomSource = void 0;
const Af = 65536;
class Ew {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let i = 0; i < t.length; i += Af)
      this._crypto.getRandomValues(t.subarray(i, i + Math.min(t.length - i, Af)));
    return t;
  }
}
fa.BrowserRandomSource = Ew;
function Dw(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var da = {};
const Sw = {}, xw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sw
}, Symbol.toStringTag, { value: "Module" })), Ow = /* @__PURE__ */ si(xw);
Object.defineProperty(da, "__esModule", { value: !0 });
da.NodeRandomSource = void 0;
const Iw = Cr;
class Pw {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Dw < "u") {
      const e = Ow;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(e);
    for (let o = 0; o < i.length; o++)
      i[o] = t[o];
    return (0, Iw.wipe)(t), i;
  }
}
da.NodeRandomSource = Pw;
Object.defineProperty(la, "__esModule", { value: !0 });
la.SystemRandomSource = void 0;
const Cw = fa, Aw = da;
class Tw {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Cw.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Aw.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
la.SystemRandomSource = Tw;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.randomStringForEntropy = r.randomString = r.randomUint32 = r.randomBytes = r.defaultRandomSource = void 0;
  const e = la, t = Le, i = Cr;
  r.defaultRandomSource = new e.SystemRandomSource();
  function o(p, m = r.defaultRandomSource) {
    return m.randomBytes(p);
  }
  r.randomBytes = o;
  function c(p = r.defaultRandomSource) {
    const m = o(4, p), x = (0, t.readUint32LE)(m);
    return (0, i.wipe)(m), x;
  }
  r.randomUint32 = c;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function f(p, m = u, x = r.defaultRandomSource) {
    if (m.length < 2)
      throw new Error("randomString charset is too short");
    if (m.length > 256)
      throw new Error("randomString charset is too long");
    let S = "";
    const C = m.length, R = 256 - 256 % C;
    for (; p > 0; ) {
      const H = o(Math.ceil(p * 256 / R), x);
      for (let K = 0; K < H.length && p > 0; K++) {
        const se = H[K];
        se < R && (S += m.charAt(se % C), p--);
      }
      (0, i.wipe)(H);
    }
    return S;
  }
  r.randomString = f;
  function y(p, m = u, x = r.defaultRandomSource) {
    const S = Math.ceil(p / (Math.log(m.length) / Math.LN2));
    return f(S, m, x);
  }
  r.randomStringForEntropy = y;
})(qi);
var pa = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = Le, t = Cr;
  r.DIGEST_LENGTH = 32, r.BLOCK_SIZE = 64;
  var i = (
    /** @class */
    function() {
      function f() {
        this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return f.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, f.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, f.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }, f.prototype.update = function(y, p) {
        if (p === void 0 && (p = y.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var m = 0;
        if (this._bytesHashed += p, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && p > 0; )
            this._buffer[this._bufferLength++] = y[m++], p--;
          this._bufferLength === this.blockSize && (c(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (p >= this.blockSize && (m = c(this._temp, this._state, y, m, p), p %= this.blockSize); p > 0; )
          this._buffer[this._bufferLength++] = y[m++], p--;
        return this;
      }, f.prototype.finish = function(y) {
        if (!this._finished) {
          var p = this._bytesHashed, m = this._bufferLength, x = p / 536870912 | 0, S = p << 3, C = p % 64 < 56 ? 64 : 128;
          this._buffer[m] = 128;
          for (var R = m + 1; R < C - 8; R++)
            this._buffer[R] = 0;
          e.writeUint32BE(x, this._buffer, C - 8), e.writeUint32BE(S, this._buffer, C - 4), c(this._temp, this._state, this._buffer, 0, C), this._finished = !0;
        }
        for (var R = 0; R < this.digestLength / 4; R++)
          e.writeUint32BE(this._state[R], y, R * 4);
        return this;
      }, f.prototype.digest = function() {
        var y = new Uint8Array(this.digestLength);
        return this.finish(y), y;
      }, f.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, f.prototype.restoreState = function(y) {
        return this._state.set(y.state), this._bufferLength = y.bufferLength, y.buffer && this._buffer.set(y.buffer), this._bytesHashed = y.bytesHashed, this._finished = !1, this;
      }, f.prototype.cleanSavedState = function(y) {
        t.wipe(y.state), y.buffer && t.wipe(y.buffer), y.bufferLength = 0, y.bytesHashed = 0;
      }, f;
    }()
  );
  r.SHA256 = i;
  var o = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function c(f, y, p, m, x) {
    for (; x >= 64; ) {
      for (var S = y[0], C = y[1], R = y[2], H = y[3], K = y[4], se = y[5], $ = y[6], j = y[7], O = 0; O < 16; O++) {
        var T = m + O * 4;
        f[O] = e.readUint32BE(p, T);
      }
      for (var O = 16; O < 64; O++) {
        var E = f[O - 2], h = (E >>> 17 | E << 32 - 17) ^ (E >>> 19 | E << 32 - 19) ^ E >>> 10;
        E = f[O - 15];
        var b = (E >>> 7 | E << 32 - 7) ^ (E >>> 18 | E << 32 - 18) ^ E >>> 3;
        f[O] = (h + f[O - 7] | 0) + (b + f[O - 16] | 0);
      }
      for (var O = 0; O < 64; O++) {
        var h = (((K >>> 6 | K << 26) ^ (K >>> 11 | K << 21) ^ (K >>> 25 | K << 7)) + (K & se ^ ~K & $) | 0) + (j + (o[O] + f[O] | 0) | 0) | 0, b = ((S >>> 2 | S << 32 - 2) ^ (S >>> 13 | S << 32 - 13) ^ (S >>> 22 | S << 32 - 22)) + (S & C ^ S & R ^ C & R) | 0;
        j = $, $ = se, se = K, K = H + h | 0, H = R, R = C, C = S, S = h + b | 0;
      }
      y[0] += S, y[1] += C, y[2] += R, y[3] += H, y[4] += K, y[5] += se, y[6] += $, y[7] += j, m += 64, x -= 64;
    }
    return m;
  }
  function u(f) {
    var y = new i();
    y.update(f);
    var p = y.digest();
    return y.clean(), p;
  }
  r.hash = u;
})(pa);
var nh = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.sharedKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.scalarMultBase = r.scalarMult = r.SHARED_KEY_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = void 0;
  const e = qi, t = Cr;
  r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 32, r.SHARED_KEY_LENGTH = 32;
  function i(O) {
    const T = new Float64Array(16);
    if (O)
      for (let E = 0; E < O.length; E++)
        T[E] = O[E];
    return T;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const c = i([56129, 1]);
  function u(O) {
    let T = 1;
    for (let E = 0; E < 16; E++) {
      let h = O[E] + T + 65535;
      T = Math.floor(h / 65536), O[E] = h - T * 65536;
    }
    O[0] += T - 1 + 37 * (T - 1);
  }
  function f(O, T, E) {
    const h = ~(E - 1);
    for (let b = 0; b < 16; b++) {
      const G = h & (O[b] ^ T[b]);
      O[b] ^= G, T[b] ^= G;
    }
  }
  function y(O, T) {
    const E = i(), h = i();
    for (let b = 0; b < 16; b++)
      h[b] = T[b];
    u(h), u(h), u(h);
    for (let b = 0; b < 2; b++) {
      E[0] = h[0] - 65517;
      for (let W = 1; W < 15; W++)
        E[W] = h[W] - 65535 - (E[W - 1] >> 16 & 1), E[W - 1] &= 65535;
      E[15] = h[15] - 32767 - (E[14] >> 16 & 1);
      const G = E[15] >> 16 & 1;
      E[14] &= 65535, f(h, E, 1 - G);
    }
    for (let b = 0; b < 16; b++)
      O[2 * b] = h[b] & 255, O[2 * b + 1] = h[b] >> 8;
  }
  function p(O, T) {
    for (let E = 0; E < 16; E++)
      O[E] = T[2 * E] + (T[2 * E + 1] << 8);
    O[15] &= 32767;
  }
  function m(O, T, E) {
    for (let h = 0; h < 16; h++)
      O[h] = T[h] + E[h];
  }
  function x(O, T, E) {
    for (let h = 0; h < 16; h++)
      O[h] = T[h] - E[h];
  }
  function S(O, T, E) {
    let h, b, G = 0, W = 0, ie = 0, ce = 0, de = 0, w = 0, P = 0, ee = 0, Q = 0, k = 0, V = 0, J = 0, re = 0, me = 0, oe = 0, we = 0, le = 0, _e = 0, B = 0, q = 0, F = 0, d = 0, A = 0, ae = 0, fe = 0, xe = 0, He = 0, ke = 0, je = 0, gt = 0, yt = 0, Me = E[0], Oe = E[1], Ne = E[2], $e = E[3], qe = E[4], Pe = E[5], Fe = E[6], Se = E[7], Ce = E[8], ze = E[9], Ie = E[10], Ve = E[11], We = E[12], et = E[13], tt = E[14], Je = E[15];
    h = T[0], G += h * Me, W += h * Oe, ie += h * Ne, ce += h * $e, de += h * qe, w += h * Pe, P += h * Fe, ee += h * Se, Q += h * Ce, k += h * ze, V += h * Ie, J += h * Ve, re += h * We, me += h * et, oe += h * tt, we += h * Je, h = T[1], W += h * Me, ie += h * Oe, ce += h * Ne, de += h * $e, w += h * qe, P += h * Pe, ee += h * Fe, Q += h * Se, k += h * Ce, V += h * ze, J += h * Ie, re += h * Ve, me += h * We, oe += h * et, we += h * tt, le += h * Je, h = T[2], ie += h * Me, ce += h * Oe, de += h * Ne, w += h * $e, P += h * qe, ee += h * Pe, Q += h * Fe, k += h * Se, V += h * Ce, J += h * ze, re += h * Ie, me += h * Ve, oe += h * We, we += h * et, le += h * tt, _e += h * Je, h = T[3], ce += h * Me, de += h * Oe, w += h * Ne, P += h * $e, ee += h * qe, Q += h * Pe, k += h * Fe, V += h * Se, J += h * Ce, re += h * ze, me += h * Ie, oe += h * Ve, we += h * We, le += h * et, _e += h * tt, B += h * Je, h = T[4], de += h * Me, w += h * Oe, P += h * Ne, ee += h * $e, Q += h * qe, k += h * Pe, V += h * Fe, J += h * Se, re += h * Ce, me += h * ze, oe += h * Ie, we += h * Ve, le += h * We, _e += h * et, B += h * tt, q += h * Je, h = T[5], w += h * Me, P += h * Oe, ee += h * Ne, Q += h * $e, k += h * qe, V += h * Pe, J += h * Fe, re += h * Se, me += h * Ce, oe += h * ze, we += h * Ie, le += h * Ve, _e += h * We, B += h * et, q += h * tt, F += h * Je, h = T[6], P += h * Me, ee += h * Oe, Q += h * Ne, k += h * $e, V += h * qe, J += h * Pe, re += h * Fe, me += h * Se, oe += h * Ce, we += h * ze, le += h * Ie, _e += h * Ve, B += h * We, q += h * et, F += h * tt, d += h * Je, h = T[7], ee += h * Me, Q += h * Oe, k += h * Ne, V += h * $e, J += h * qe, re += h * Pe, me += h * Fe, oe += h * Se, we += h * Ce, le += h * ze, _e += h * Ie, B += h * Ve, q += h * We, F += h * et, d += h * tt, A += h * Je, h = T[8], Q += h * Me, k += h * Oe, V += h * Ne, J += h * $e, re += h * qe, me += h * Pe, oe += h * Fe, we += h * Se, le += h * Ce, _e += h * ze, B += h * Ie, q += h * Ve, F += h * We, d += h * et, A += h * tt, ae += h * Je, h = T[9], k += h * Me, V += h * Oe, J += h * Ne, re += h * $e, me += h * qe, oe += h * Pe, we += h * Fe, le += h * Se, _e += h * Ce, B += h * ze, q += h * Ie, F += h * Ve, d += h * We, A += h * et, ae += h * tt, fe += h * Je, h = T[10], V += h * Me, J += h * Oe, re += h * Ne, me += h * $e, oe += h * qe, we += h * Pe, le += h * Fe, _e += h * Se, B += h * Ce, q += h * ze, F += h * Ie, d += h * Ve, A += h * We, ae += h * et, fe += h * tt, xe += h * Je, h = T[11], J += h * Me, re += h * Oe, me += h * Ne, oe += h * $e, we += h * qe, le += h * Pe, _e += h * Fe, B += h * Se, q += h * Ce, F += h * ze, d += h * Ie, A += h * Ve, ae += h * We, fe += h * et, xe += h * tt, He += h * Je, h = T[12], re += h * Me, me += h * Oe, oe += h * Ne, we += h * $e, le += h * qe, _e += h * Pe, B += h * Fe, q += h * Se, F += h * Ce, d += h * ze, A += h * Ie, ae += h * Ve, fe += h * We, xe += h * et, He += h * tt, ke += h * Je, h = T[13], me += h * Me, oe += h * Oe, we += h * Ne, le += h * $e, _e += h * qe, B += h * Pe, q += h * Fe, F += h * Se, d += h * Ce, A += h * ze, ae += h * Ie, fe += h * Ve, xe += h * We, He += h * et, ke += h * tt, je += h * Je, h = T[14], oe += h * Me, we += h * Oe, le += h * Ne, _e += h * $e, B += h * qe, q += h * Pe, F += h * Fe, d += h * Se, A += h * Ce, ae += h * ze, fe += h * Ie, xe += h * Ve, He += h * We, ke += h * et, je += h * tt, gt += h * Je, h = T[15], we += h * Me, le += h * Oe, _e += h * Ne, B += h * $e, q += h * qe, F += h * Pe, d += h * Fe, A += h * Se, ae += h * Ce, fe += h * ze, xe += h * Ie, He += h * Ve, ke += h * We, je += h * et, gt += h * tt, yt += h * Je, G += 38 * le, W += 38 * _e, ie += 38 * B, ce += 38 * q, de += 38 * F, w += 38 * d, P += 38 * A, ee += 38 * ae, Q += 38 * fe, k += 38 * xe, V += 38 * He, J += 38 * ke, re += 38 * je, me += 38 * gt, oe += 38 * yt, b = 1, h = G + b + 65535, b = Math.floor(h / 65536), G = h - b * 65536, h = W + b + 65535, b = Math.floor(h / 65536), W = h - b * 65536, h = ie + b + 65535, b = Math.floor(h / 65536), ie = h - b * 65536, h = ce + b + 65535, b = Math.floor(h / 65536), ce = h - b * 65536, h = de + b + 65535, b = Math.floor(h / 65536), de = h - b * 65536, h = w + b + 65535, b = Math.floor(h / 65536), w = h - b * 65536, h = P + b + 65535, b = Math.floor(h / 65536), P = h - b * 65536, h = ee + b + 65535, b = Math.floor(h / 65536), ee = h - b * 65536, h = Q + b + 65535, b = Math.floor(h / 65536), Q = h - b * 65536, h = k + b + 65535, b = Math.floor(h / 65536), k = h - b * 65536, h = V + b + 65535, b = Math.floor(h / 65536), V = h - b * 65536, h = J + b + 65535, b = Math.floor(h / 65536), J = h - b * 65536, h = re + b + 65535, b = Math.floor(h / 65536), re = h - b * 65536, h = me + b + 65535, b = Math.floor(h / 65536), me = h - b * 65536, h = oe + b + 65535, b = Math.floor(h / 65536), oe = h - b * 65536, h = we + b + 65535, b = Math.floor(h / 65536), we = h - b * 65536, G += b - 1 + 37 * (b - 1), b = 1, h = G + b + 65535, b = Math.floor(h / 65536), G = h - b * 65536, h = W + b + 65535, b = Math.floor(h / 65536), W = h - b * 65536, h = ie + b + 65535, b = Math.floor(h / 65536), ie = h - b * 65536, h = ce + b + 65535, b = Math.floor(h / 65536), ce = h - b * 65536, h = de + b + 65535, b = Math.floor(h / 65536), de = h - b * 65536, h = w + b + 65535, b = Math.floor(h / 65536), w = h - b * 65536, h = P + b + 65535, b = Math.floor(h / 65536), P = h - b * 65536, h = ee + b + 65535, b = Math.floor(h / 65536), ee = h - b * 65536, h = Q + b + 65535, b = Math.floor(h / 65536), Q = h - b * 65536, h = k + b + 65535, b = Math.floor(h / 65536), k = h - b * 65536, h = V + b + 65535, b = Math.floor(h / 65536), V = h - b * 65536, h = J + b + 65535, b = Math.floor(h / 65536), J = h - b * 65536, h = re + b + 65535, b = Math.floor(h / 65536), re = h - b * 65536, h = me + b + 65535, b = Math.floor(h / 65536), me = h - b * 65536, h = oe + b + 65535, b = Math.floor(h / 65536), oe = h - b * 65536, h = we + b + 65535, b = Math.floor(h / 65536), we = h - b * 65536, G += b - 1 + 37 * (b - 1), O[0] = G, O[1] = W, O[2] = ie, O[3] = ce, O[4] = de, O[5] = w, O[6] = P, O[7] = ee, O[8] = Q, O[9] = k, O[10] = V, O[11] = J, O[12] = re, O[13] = me, O[14] = oe, O[15] = we;
  }
  function C(O, T) {
    S(O, T, T);
  }
  function R(O, T) {
    const E = i();
    for (let h = 0; h < 16; h++)
      E[h] = T[h];
    for (let h = 253; h >= 0; h--)
      C(E, E), h !== 2 && h !== 4 && S(E, E, T);
    for (let h = 0; h < 16; h++)
      O[h] = E[h];
  }
  function H(O, T) {
    const E = new Uint8Array(32), h = new Float64Array(80), b = i(), G = i(), W = i(), ie = i(), ce = i(), de = i();
    for (let Q = 0; Q < 31; Q++)
      E[Q] = O[Q];
    E[31] = O[31] & 127 | 64, E[0] &= 248, p(h, T);
    for (let Q = 0; Q < 16; Q++)
      G[Q] = h[Q];
    b[0] = ie[0] = 1;
    for (let Q = 254; Q >= 0; --Q) {
      const k = E[Q >>> 3] >>> (Q & 7) & 1;
      f(b, G, k), f(W, ie, k), m(ce, b, W), x(b, b, W), m(W, G, ie), x(G, G, ie), C(ie, ce), C(de, b), S(b, W, b), S(W, G, ce), m(ce, b, W), x(b, b, W), C(G, b), x(W, ie, de), S(b, W, c), m(b, b, ie), S(W, W, b), S(b, ie, de), S(ie, G, h), C(G, ce), f(b, G, k), f(W, ie, k);
    }
    for (let Q = 0; Q < 16; Q++)
      h[Q + 16] = b[Q], h[Q + 32] = W[Q], h[Q + 48] = G[Q], h[Q + 64] = ie[Q];
    const w = h.subarray(32), P = h.subarray(16);
    R(w, w), S(P, P, w);
    const ee = new Uint8Array(32);
    return y(ee, P), ee;
  }
  r.scalarMult = H;
  function K(O) {
    return H(O, o);
  }
  r.scalarMultBase = K;
  function se(O) {
    if (O.length !== r.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`);
    const T = new Uint8Array(O);
    return {
      publicKey: K(T),
      secretKey: T
    };
  }
  r.generateKeyPairFromSeed = se;
  function $(O) {
    const T = (0, e.randomBytes)(32, O), E = se(T);
    return (0, t.wipe)(T), E;
  }
  r.generateKeyPair = $;
  function j(O, T, E = !1) {
    if (O.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (T.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const h = H(O, T);
    if (E) {
      let b = 0;
      for (let G = 0; G < h.length; G++)
        b |= h[G];
      if (b === 0)
        throw new Error("X25519: invalid shared key");
    }
    return h;
  }
  r.sharedKey = j;
})(nh);
function ih(r) {
  return globalThis.Buffer != null ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r;
}
function Np(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ih(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r);
}
function Su(r, e) {
  e || (e = r.reduce((o, c) => o + c.length, 0));
  const t = Np(e);
  let i = 0;
  for (const o of r)
    t.set(o, i), i += o.length;
  return ih(t);
}
function Rw(r, e) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
    t[i] = 255;
  for (var o = 0; o < r.length; o++) {
    var c = r.charAt(o), u = c.charCodeAt(0);
    if (t[u] !== 255)
      throw new TypeError(c + " is ambiguous");
    t[u] = o;
  }
  var f = r.length, y = r.charAt(0), p = Math.log(f) / Math.log(256), m = Math.log(256) / Math.log(f);
  function x(R) {
    if (R instanceof Uint8Array || (ArrayBuffer.isView(R) ? R = new Uint8Array(R.buffer, R.byteOffset, R.byteLength) : Array.isArray(R) && (R = Uint8Array.from(R))), !(R instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (R.length === 0)
      return "";
    for (var H = 0, K = 0, se = 0, $ = R.length; se !== $ && R[se] === 0; )
      se++, H++;
    for (var j = ($ - se) * m + 1 >>> 0, O = new Uint8Array(j); se !== $; ) {
      for (var T = R[se], E = 0, h = j - 1; (T !== 0 || E < K) && h !== -1; h--, E++)
        T += 256 * O[h] >>> 0, O[h] = T % f >>> 0, T = T / f >>> 0;
      if (T !== 0)
        throw new Error("Non-zero carry");
      K = E, se++;
    }
    for (var b = j - K; b !== j && O[b] === 0; )
      b++;
    for (var G = y.repeat(H); b < j; ++b)
      G += r.charAt(O[b]);
    return G;
  }
  function S(R) {
    if (typeof R != "string")
      throw new TypeError("Expected String");
    if (R.length === 0)
      return new Uint8Array();
    var H = 0;
    if (R[H] !== " ") {
      for (var K = 0, se = 0; R[H] === y; )
        K++, H++;
      for (var $ = (R.length - H) * p + 1 >>> 0, j = new Uint8Array($); R[H]; ) {
        var O = t[R.charCodeAt(H)];
        if (O === 255)
          return;
        for (var T = 0, E = $ - 1; (O !== 0 || T < se) && E !== -1; E--, T++)
          O += f * j[E] >>> 0, j[E] = O % 256 >>> 0, O = O / 256 >>> 0;
        if (O !== 0)
          throw new Error("Non-zero carry");
        se = T, H++;
      }
      if (R[H] !== " ") {
        for (var h = $ - se; h !== $ && j[h] === 0; )
          h++;
        for (var b = new Uint8Array(K + ($ - h)), G = K; h !== $; )
          b[G++] = j[h++];
        return b;
      }
    }
  }
  function C(R) {
    var H = S(R);
    if (H)
      return H;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: x,
    decodeUnsafe: S,
    decode: C
  };
}
var Nw = Rw, $w = Nw;
const Fw = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
    return r;
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Lw = (r) => new TextEncoder().encode(r), jw = (r) => new TextDecoder().decode(r);
class Uw {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Mw {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return $p(this, e);
  }
}
class qw {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return $p(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const $p = (r, e) => new qw({
  ...r.decoders || { [r.prefix]: r },
  ...e.decoders || { [e.prefix]: e }
});
class Bw {
  constructor(e, t, i, o) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = o, this.encoder = new Uw(e, t, i), this.decoder = new Mw(e, t, o);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ga = ({ name: r, prefix: e, encode: t, decode: i }) => new Bw(r, e, t, i), Fs = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: o } = $w(t, e);
  return ga({
    prefix: r,
    name: e,
    encode: i,
    decode: (c) => Fw(o(c))
  });
}, Hw = (r, e, t, i) => {
  const o = {};
  for (let m = 0; m < e.length; ++m)
    o[e[m]] = m;
  let c = r.length;
  for (; r[c - 1] === "="; )
    --c;
  const u = new Uint8Array(c * t / 8 | 0);
  let f = 0, y = 0, p = 0;
  for (let m = 0; m < c; ++m) {
    const x = o[r[m]];
    if (x === void 0)
      throw new SyntaxError(`Non-${i} character`);
    y = y << t | x, f += t, f >= 8 && (f -= 8, u[p++] = 255 & y >> f);
  }
  if (f >= t || 255 & y << 8 - f)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, zw = (r, e, t) => {
  const i = e[e.length - 1] === "=", o = (1 << t) - 1;
  let c = "", u = 0, f = 0;
  for (let y = 0; y < r.length; ++y)
    for (f = f << 8 | r[y], u += 8; u > t; )
      u -= t, c += e[o & f >> u];
  if (u && (c += e[o & f << t - u]), i)
    for (; c.length * t & 7; )
      c += "=";
  return c;
}, Yt = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => ga({
  prefix: e,
  name: r,
  encode(o) {
    return zw(o, i, t);
  },
  decode(o) {
    return Hw(o, i, t, r);
  }
}), Kw = ga({
  prefix: "\0",
  name: "identity",
  encode: (r) => jw(r),
  decode: (r) => Lw(r)
}), kw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Kw
}, Symbol.toStringTag, { value: "Module" })), Vw = Yt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Gw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Vw
}, Symbol.toStringTag, { value: "Module" })), Ww = Yt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Yw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Ww
}, Symbol.toStringTag, { value: "Module" })), Jw = Fs({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Qw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Jw
}, Symbol.toStringTag, { value: "Module" })), Xw = Yt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Zw = Yt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), eE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Xw,
  base16upper: Zw
}, Symbol.toStringTag, { value: "Module" })), tE = Yt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), rE = Yt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), nE = Yt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), iE = Yt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), sE = Yt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), oE = Yt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), aE = Yt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), cE = Yt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), uE = Yt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), hE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: tE,
  base32hex: sE,
  base32hexpad: aE,
  base32hexpadupper: cE,
  base32hexupper: oE,
  base32pad: nE,
  base32padupper: iE,
  base32upper: rE,
  base32z: uE
}, Symbol.toStringTag, { value: "Module" })), lE = Fs({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), fE = Fs({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), dE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: lE,
  base36upper: fE
}, Symbol.toStringTag, { value: "Module" })), pE = Fs({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), gE = Fs({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), yE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: pE,
  base58flickr: gE
}, Symbol.toStringTag, { value: "Module" })), vE = Yt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), _E = Yt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), bE = Yt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), mE = Yt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), wE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: vE,
  base64pad: _E,
  base64url: bE,
  base64urlpad: mE
}, Symbol.toStringTag, { value: "Module" })), Fp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), EE = Fp.reduce((r, e, t) => (r[t] = e, r), []), DE = Fp.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function SE(r) {
  return r.reduce((e, t) => (e += EE[t], e), "");
}
function xE(r) {
  const e = [];
  for (const t of r) {
    const i = DE[t.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const OE = ga({
  prefix: "🚀",
  name: "base256emoji",
  encode: SE,
  decode: xE
}), IE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: OE
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Tf = {
  ...kw,
  ...Gw,
  ...Yw,
  ...Qw,
  ...eE,
  ...hE,
  ...dE,
  ...yE,
  ...wE,
  ...IE
};
function Lp(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: {
      name: r,
      prefix: e,
      encode: t
    },
    decoder: { decode: i }
  };
}
const Rf = Lp("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), Yc = Lp("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = Np(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
}), jp = {
  utf8: Rf,
  "utf-8": Rf,
  hex: Tf.base16,
  latin1: Yc,
  ascii: Yc,
  binary: Yc,
  ...Tf
};
function mr(r, e = "utf8") {
  const t = jp[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ih(globalThis.Buffer.from(r, "utf-8")) : t.decoder.decode(`${t.prefix}${r}`);
}
function hr(r, e = "utf8") {
  const t = jp[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("utf8") : t.encoder.encode(r).substring(1);
}
var Nf = globalThis && globalThis.__spreadArray || function(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, o = e.length, c; i < o; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}, PE = (
  /** @class */
  function() {
    function r(e, t, i) {
      this.name = e, this.version = t, this.os = i, this.type = "browser";
    }
    return r;
  }()
), CE = (
  /** @class */
  function() {
    function r(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return r;
  }()
), AE = (
  /** @class */
  function() {
    function r(e, t, i, o) {
      this.name = e, this.version = t, this.os = i, this.bot = o, this.type = "bot-device";
    }
    return r;
  }()
), TE = (
  /** @class */
  function() {
    function r() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return r;
  }()
), RE = (
  /** @class */
  function() {
    function r() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return r;
  }()
), NE = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, $E = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, $f = 3, FE = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", NE]
], Ff = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function LE(r) {
  return r ? Lf(r) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new RE() : typeof navigator < "u" ? Lf(navigator.userAgent) : ME();
}
function jE(r) {
  return r !== "" && FE.reduce(function(e, t) {
    var i = t[0], o = t[1];
    if (e)
      return e;
    var c = o.exec(r);
    return !!c && [i, c];
  }, !1);
}
function Lf(r) {
  var e = jE(r);
  if (!e)
    return null;
  var t = e[0], i = e[1];
  if (t === "searchbot")
    return new TE();
  var o = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  o ? o.length < $f && (o = Nf(Nf([], o, !0), qE($f - o.length), !0)) : o = [];
  var c = o.join("."), u = UE(r), f = $E.exec(r);
  return f && f[1] ? new AE(t, c, u, f[1]) : new PE(t, c, u);
}
function UE(r) {
  for (var e = 0, t = Ff.length; e < t; e++) {
    var i = Ff[e], o = i[0], c = i[1], u = c.exec(r);
    if (u)
      return o;
  }
  return null;
}
function ME() {
  var r = typeof process < "u" && process.version;
  return r ? new CE(process.version.slice(1)) : null;
}
function qE(r) {
  for (var e = [], t = 0; t < r; t++)
    e.push("0");
  return e;
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var xu = function(r, e) {
  return xu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var o in i)
      i.hasOwnProperty(o) && (t[o] = i[o]);
  }, xu(r, e);
};
function BE(r, e) {
  xu(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ou = function() {
  return Ou = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Ou.apply(this, arguments);
};
function HE(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(r); o < i.length; o++)
      e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]]);
  return t;
}
function zE(r, e, t, i) {
  var o = arguments.length, c = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(r, e, t, i);
  else
    for (var f = r.length - 1; f >= 0; f--)
      (u = r[f]) && (c = (o < 3 ? u(c) : o > 3 ? u(e, t, c) : u(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function KE(r, e) {
  return function(t, i) {
    e(t, i, r);
  };
}
function kE(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function VE(r, e, t, i) {
  function o(c) {
    return c instanceof t ? c : new t(function(u) {
      u(c);
    });
  }
  return new (t || (t = Promise))(function(c, u) {
    function f(m) {
      try {
        p(i.next(m));
      } catch (x) {
        u(x);
      }
    }
    function y(m) {
      try {
        p(i.throw(m));
      } catch (x) {
        u(x);
      }
    }
    function p(m) {
      m.done ? c(m.value) : o(m.value).then(f, y);
    }
    p((i = i.apply(r, e || [])).next());
  });
}
function GE(r, e) {
  var t = { label: 0, sent: function() {
    if (c[0] & 1)
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, i, o, c, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(p) {
    return function(m) {
      return y([p, m]);
    };
  }
  function y(p) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, o && (c = p[0] & 2 ? o.return : p[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, p[1])).done)
          return c;
        switch (o = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, o = p[1], p = [0];
            continue;
          case 7:
            p = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              t.label = c[1], c = p;
              break;
            }
            if (c && t.label < c[2]) {
              t.label = c[2], t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(r, t);
      } catch (m) {
        p = [6, m], o = 0;
      } finally {
        i = c = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function WE(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}
function YE(r, e) {
  for (var t in r)
    t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Iu(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Up(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), o, c = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = i.next()).done; )
      c.push(o.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      o && !o.done && (t = i.return) && t.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return c;
}
function JE() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(Up(arguments[e]));
  return r;
}
function QE() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], u = 0, f = c.length; u < f; u++, o++)
      i[o] = c[u];
  return i;
}
function Os(r) {
  return this instanceof Os ? (this.v = r, this) : new Os(r);
}
function XE(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []), o, c = [];
  return o = {}, u("next"), u("throw"), u("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function u(S) {
    i[S] && (o[S] = function(C) {
      return new Promise(function(R, H) {
        c.push([S, C, R, H]) > 1 || f(S, C);
      });
    });
  }
  function f(S, C) {
    try {
      y(i[S](C));
    } catch (R) {
      x(c[0][3], R);
    }
  }
  function y(S) {
    S.value instanceof Os ? Promise.resolve(S.value.v).then(p, m) : x(c[0][2], S);
  }
  function p(S) {
    f("next", S);
  }
  function m(S) {
    f("throw", S);
  }
  function x(S, C) {
    S(C), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function ZE(r) {
  var e, t;
  return e = {}, i("next"), i("throw", function(o) {
    throw o;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(o, c) {
    e[o] = r[o] ? function(u) {
      return (t = !t) ? { value: Os(r[o](u)), done: o === "return" } : c ? c(u) : u;
    } : c;
  }
}
function e3(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof Iu == "function" ? Iu(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(c) {
    t[c] = r[c] && function(u) {
      return new Promise(function(f, y) {
        u = r[c](u), o(f, y, u.done, u.value);
      });
    };
  }
  function o(c, u, f, y) {
    Promise.resolve(y).then(function(p) {
      c({ value: p, done: f });
    }, u);
  }
}
function t3(r, e) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: e }) : r.raw = e, r;
}
function r3(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e.default = r, e;
}
function n3(r) {
  return r && r.__esModule ? r : { default: r };
}
function i3(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function s3(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const o3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Ou;
  },
  __asyncDelegator: ZE,
  __asyncGenerator: XE,
  __asyncValues: e3,
  __await: Os,
  __awaiter: VE,
  __classPrivateFieldGet: i3,
  __classPrivateFieldSet: s3,
  __createBinding: WE,
  __decorate: zE,
  __exportStar: YE,
  __extends: BE,
  __generator: GE,
  __importDefault: n3,
  __importStar: r3,
  __makeTemplateObject: t3,
  __metadata: kE,
  __param: KE,
  __read: Up,
  __rest: HE,
  __spread: JE,
  __spreadArrays: QE,
  __values: Iu
}, Symbol.toStringTag, { value: "Module" })), ya = /* @__PURE__ */ si(o3);
var Jc = {}, us = {}, jf;
function a3() {
  if (jf)
    return us;
  jf = 1, Object.defineProperty(us, "__esModule", { value: !0 }), us.delay = void 0;
  function r(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return us.delay = r, us;
}
var ei = {}, Qc = {}, ti = {}, Uf;
function c3() {
  return Uf || (Uf = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.ONE_THOUSAND = ti.ONE_HUNDRED = void 0, ti.ONE_HUNDRED = 100, ti.ONE_THOUSAND = 1e3), ti;
}
var Xc = {}, Mf;
function u3() {
  return Mf || (Mf = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.ONE_YEAR = r.FOUR_WEEKS = r.THREE_WEEKS = r.TWO_WEEKS = r.ONE_WEEK = r.THIRTY_DAYS = r.SEVEN_DAYS = r.FIVE_DAYS = r.THREE_DAYS = r.ONE_DAY = r.TWENTY_FOUR_HOURS = r.TWELVE_HOURS = r.SIX_HOURS = r.THREE_HOURS = r.ONE_HOUR = r.SIXTY_MINUTES = r.THIRTY_MINUTES = r.TEN_MINUTES = r.FIVE_MINUTES = r.ONE_MINUTE = r.SIXTY_SECONDS = r.THIRTY_SECONDS = r.TEN_SECONDS = r.FIVE_SECONDS = r.ONE_SECOND = void 0, r.ONE_SECOND = 1, r.FIVE_SECONDS = 5, r.TEN_SECONDS = 10, r.THIRTY_SECONDS = 30, r.SIXTY_SECONDS = 60, r.ONE_MINUTE = r.SIXTY_SECONDS, r.FIVE_MINUTES = r.ONE_MINUTE * 5, r.TEN_MINUTES = r.ONE_MINUTE * 10, r.THIRTY_MINUTES = r.ONE_MINUTE * 30, r.SIXTY_MINUTES = r.ONE_MINUTE * 60, r.ONE_HOUR = r.SIXTY_MINUTES, r.THREE_HOURS = r.ONE_HOUR * 3, r.SIX_HOURS = r.ONE_HOUR * 6, r.TWELVE_HOURS = r.ONE_HOUR * 12, r.TWENTY_FOUR_HOURS = r.ONE_HOUR * 24, r.ONE_DAY = r.TWENTY_FOUR_HOURS, r.THREE_DAYS = r.ONE_DAY * 3, r.FIVE_DAYS = r.ONE_DAY * 5, r.SEVEN_DAYS = r.ONE_DAY * 7, r.THIRTY_DAYS = r.ONE_DAY * 30, r.ONE_WEEK = r.SEVEN_DAYS, r.TWO_WEEKS = r.ONE_WEEK * 2, r.THREE_WEEKS = r.ONE_WEEK * 3, r.FOUR_WEEKS = r.ONE_WEEK * 4, r.ONE_YEAR = r.ONE_DAY * 365;
  }(Xc)), Xc;
}
var qf;
function Mp() {
  return qf || (qf = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = ya;
    e.__exportStar(c3(), r), e.__exportStar(u3(), r);
  }(Qc)), Qc;
}
var Bf;
function h3() {
  if (Bf)
    return ei;
  Bf = 1, Object.defineProperty(ei, "__esModule", { value: !0 }), ei.fromMiliseconds = ei.toMiliseconds = void 0;
  const r = Mp();
  function e(i) {
    return i * r.ONE_THOUSAND;
  }
  ei.toMiliseconds = e;
  function t(i) {
    return Math.floor(i / r.ONE_THOUSAND);
  }
  return ei.fromMiliseconds = t, ei;
}
var Hf;
function l3() {
  return Hf || (Hf = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = ya;
    e.__exportStar(a3(), r), e.__exportStar(h3(), r);
  }(Jc)), Jc;
}
var Ti = {}, zf;
function f3() {
  if (zf)
    return Ti;
  zf = 1, Object.defineProperty(Ti, "__esModule", { value: !0 }), Ti.Watch = void 0;
  class r {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const i = this.get(t);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const o = Date.now() - i.started;
      this.timestamps.set(t, { started: i.started, elapsed: o });
    }
    get(t) {
      const i = this.timestamps.get(t);
      if (typeof i > "u")
        throw new Error(`No timestamp found for label: ${t}`);
      return i;
    }
    elapsed(t) {
      const i = this.get(t);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return Ti.Watch = r, Ti.default = r, Ti;
}
var Zc = {}, hs = {}, Kf;
function d3() {
  if (Kf)
    return hs;
  Kf = 1, Object.defineProperty(hs, "__esModule", { value: !0 }), hs.IWatch = void 0;
  class r {
  }
  return hs.IWatch = r, hs;
}
var kf;
function p3() {
  return kf || (kf = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), ya.__exportStar(d3(), r);
  }(Zc)), Zc;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = ya;
  e.__exportStar(l3(), r), e.__exportStar(f3(), r), e.__exportStar(p3(), r), e.__exportStar(Mp(), r);
})(ve);
var ft = {};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.getLocalStorage = ft.getLocalStorageOrThrow = ft.getCrypto = ft.getCryptoOrThrow = Bp = ft.getLocation = ft.getLocationOrThrow = sh = ft.getNavigator = ft.getNavigatorOrThrow = qp = ft.getDocument = ft.getDocumentOrThrow = ft.getFromWindowOrThrow = ft.getFromWindow = void 0;
function oi(r) {
  let e;
  return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
}
ft.getFromWindow = oi;
function Bi(r) {
  const e = oi(r);
  if (!e)
    throw new Error(`${r} is not defined in Window`);
  return e;
}
ft.getFromWindowOrThrow = Bi;
function g3() {
  return Bi("document");
}
ft.getDocumentOrThrow = g3;
function y3() {
  return oi("document");
}
var qp = ft.getDocument = y3;
function v3() {
  return Bi("navigator");
}
ft.getNavigatorOrThrow = v3;
function _3() {
  return oi("navigator");
}
var sh = ft.getNavigator = _3;
function b3() {
  return Bi("location");
}
ft.getLocationOrThrow = b3;
function m3() {
  return oi("location");
}
var Bp = ft.getLocation = m3;
function w3() {
  return Bi("crypto");
}
ft.getCryptoOrThrow = w3;
function E3() {
  return oi("crypto");
}
ft.getCrypto = E3;
function D3() {
  return Bi("localStorage");
}
ft.getLocalStorageOrThrow = D3;
function S3() {
  return oi("localStorage");
}
ft.getLocalStorage = S3;
var oh = {};
Object.defineProperty(oh, "__esModule", { value: !0 });
var Hp = oh.getWindowMetadata = void 0;
const Vf = ft;
function x3() {
  let r, e;
  try {
    r = Vf.getDocumentOrThrow(), e = Vf.getLocationOrThrow();
  } catch {
    return null;
  }
  function t() {
    const x = r.getElementsByTagName("link"), S = [];
    for (let C = 0; C < x.length; C++) {
      const R = x[C], H = R.getAttribute("rel");
      if (H && H.toLowerCase().indexOf("icon") > -1) {
        const K = R.getAttribute("href");
        if (K)
          if (K.toLowerCase().indexOf("https:") === -1 && K.toLowerCase().indexOf("http:") === -1 && K.indexOf("//") !== 0) {
            let se = e.protocol + "//" + e.host;
            if (K.indexOf("/") === 0)
              se += K;
            else {
              const $ = e.pathname.split("/");
              $.pop();
              const j = $.join("/");
              se += j + "/" + K;
            }
            S.push(se);
          } else if (K.indexOf("//") === 0) {
            const se = e.protocol + K;
            S.push(se);
          } else
            S.push(K);
      }
    }
    return S;
  }
  function i(...x) {
    const S = r.getElementsByTagName("meta");
    for (let C = 0; C < S.length; C++) {
      const R = S[C], H = ["itemprop", "property", "name"].map((K) => R.getAttribute(K)).filter((K) => K ? x.includes(K) : !1);
      if (H.length && H) {
        const K = R.getAttribute("content");
        if (K)
          return K;
      }
    }
    return "";
  }
  function o() {
    let x = i("name", "og:site_name", "og:title", "twitter:title");
    return x || (x = r.title), x;
  }
  function c() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const u = o(), f = c(), y = e.origin, p = t();
  return {
    description: f,
    url: y,
    icons: p,
    name: u
  };
}
Hp = oh.getWindowMetadata = x3;
var Is = {}, O3 = (r) => encodeURIComponent(r).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), zp = "%[a-f0-9]{2}", Gf = new RegExp("(" + zp + ")|([^%]+?)", "gi"), Wf = new RegExp("(" + zp + ")+", "gi");
function Pu(r, e) {
  try {
    return [decodeURIComponent(r.join(""))];
  } catch {
  }
  if (r.length === 1)
    return r;
  e = e || 1;
  var t = r.slice(0, e), i = r.slice(e);
  return Array.prototype.concat.call([], Pu(t), Pu(i));
}
function I3(r) {
  try {
    return decodeURIComponent(r);
  } catch {
    for (var e = r.match(Gf) || [], t = 1; t < e.length; t++)
      r = Pu(e, t).join(""), e = r.match(Gf) || [];
    return r;
  }
}
function P3(r) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, t = Wf.exec(r); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var i = I3(t[0]);
      i !== t[0] && (e[t[0]] = i);
    }
    t = Wf.exec(r);
  }
  e["%C2"] = "�";
  for (var o = Object.keys(e), c = 0; c < o.length; c++) {
    var u = o[c];
    r = r.replace(new RegExp(u, "g"), e[u]);
  }
  return r;
}
var C3 = function(r) {
  if (typeof r != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r + "`");
  try {
    return r = r.replace(/\+/g, " "), decodeURIComponent(r);
  } catch {
    return P3(r);
  }
}, A3 = (r, e) => {
  if (!(typeof r == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [r];
  const t = r.indexOf(e);
  return t === -1 ? [r] : [
    r.slice(0, t),
    r.slice(t + e.length)
  ];
}, T3 = function(r, e) {
  for (var t = {}, i = Object.keys(r), o = Array.isArray(e), c = 0; c < i.length; c++) {
    var u = i[c], f = r[u];
    (o ? e.indexOf(u) !== -1 : e(u, f, r)) && (t[u] = f);
  }
  return t;
};
(function(r) {
  const e = O3, t = C3, i = A3, o = T3, c = ($) => $ == null, u = Symbol("encodeFragmentIdentifier");
  function f($) {
    switch ($.arrayFormat) {
      case "index":
        return (j) => (O, T) => {
          const E = O.length;
          return T === void 0 || $.skipNull && T === null || $.skipEmptyString && T === "" ? O : T === null ? [...O, [m(j, $), "[", E, "]"].join("")] : [
            ...O,
            [m(j, $), "[", m(E, $), "]=", m(T, $)].join("")
          ];
        };
      case "bracket":
        return (j) => (O, T) => T === void 0 || $.skipNull && T === null || $.skipEmptyString && T === "" ? O : T === null ? [...O, [m(j, $), "[]"].join("")] : [...O, [m(j, $), "[]=", m(T, $)].join("")];
      case "colon-list-separator":
        return (j) => (O, T) => T === void 0 || $.skipNull && T === null || $.skipEmptyString && T === "" ? O : T === null ? [...O, [m(j, $), ":list="].join("")] : [...O, [m(j, $), ":list=", m(T, $)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const j = $.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (O) => (T, E) => E === void 0 || $.skipNull && E === null || $.skipEmptyString && E === "" ? T : (E = E === null ? "" : E, T.length === 0 ? [[m(O, $), j, m(E, $)].join("")] : [[T, m(E, $)].join($.arrayFormatSeparator)]);
      }
      default:
        return (j) => (O, T) => T === void 0 || $.skipNull && T === null || $.skipEmptyString && T === "" ? O : T === null ? [...O, m(j, $)] : [...O, [m(j, $), "=", m(T, $)].join("")];
    }
  }
  function y($) {
    let j;
    switch ($.arrayFormat) {
      case "index":
        return (O, T, E) => {
          if (j = /\[(\d*)\]$/.exec(O), O = O.replace(/\[\d*\]$/, ""), !j) {
            E[O] = T;
            return;
          }
          E[O] === void 0 && (E[O] = {}), E[O][j[1]] = T;
        };
      case "bracket":
        return (O, T, E) => {
          if (j = /(\[\])$/.exec(O), O = O.replace(/\[\]$/, ""), !j) {
            E[O] = T;
            return;
          }
          if (E[O] === void 0) {
            E[O] = [T];
            return;
          }
          E[O] = [].concat(E[O], T);
        };
      case "colon-list-separator":
        return (O, T, E) => {
          if (j = /(:list)$/.exec(O), O = O.replace(/:list$/, ""), !j) {
            E[O] = T;
            return;
          }
          if (E[O] === void 0) {
            E[O] = [T];
            return;
          }
          E[O] = [].concat(E[O], T);
        };
      case "comma":
      case "separator":
        return (O, T, E) => {
          const h = typeof T == "string" && T.includes($.arrayFormatSeparator), b = typeof T == "string" && !h && x(T, $).includes($.arrayFormatSeparator);
          T = b ? x(T, $) : T;
          const G = h || b ? T.split($.arrayFormatSeparator).map((W) => x(W, $)) : T === null ? T : x(T, $);
          E[O] = G;
        };
      case "bracket-separator":
        return (O, T, E) => {
          const h = /(\[\])$/.test(O);
          if (O = O.replace(/\[\]$/, ""), !h) {
            E[O] = T && x(T, $);
            return;
          }
          const b = T === null ? [] : T.split($.arrayFormatSeparator).map((G) => x(G, $));
          if (E[O] === void 0) {
            E[O] = b;
            return;
          }
          E[O] = [].concat(E[O], b);
        };
      default:
        return (O, T, E) => {
          if (E[O] === void 0) {
            E[O] = T;
            return;
          }
          E[O] = [].concat(E[O], T);
        };
    }
  }
  function p($) {
    if (typeof $ != "string" || $.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function m($, j) {
    return j.encode ? j.strict ? e($) : encodeURIComponent($) : $;
  }
  function x($, j) {
    return j.decode ? t($) : $;
  }
  function S($) {
    return Array.isArray($) ? $.sort() : typeof $ == "object" ? S(Object.keys($)).sort((j, O) => Number(j) - Number(O)).map((j) => $[j]) : $;
  }
  function C($) {
    const j = $.indexOf("#");
    return j !== -1 && ($ = $.slice(0, j)), $;
  }
  function R($) {
    let j = "";
    const O = $.indexOf("#");
    return O !== -1 && (j = $.slice(O)), j;
  }
  function H($) {
    $ = C($);
    const j = $.indexOf("?");
    return j === -1 ? "" : $.slice(j + 1);
  }
  function K($, j) {
    return j.parseNumbers && !Number.isNaN(Number($)) && typeof $ == "string" && $.trim() !== "" ? $ = Number($) : j.parseBooleans && $ !== null && ($.toLowerCase() === "true" || $.toLowerCase() === "false") && ($ = $.toLowerCase() === "true"), $;
  }
  function se($, j) {
    j = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, j), p(j.arrayFormatSeparator);
    const O = y(j), T = /* @__PURE__ */ Object.create(null);
    if (typeof $ != "string" || ($ = $.trim().replace(/^[?#&]/, ""), !$))
      return T;
    for (const E of $.split("&")) {
      if (E === "")
        continue;
      let [h, b] = i(j.decode ? E.replace(/\+/g, " ") : E, "=");
      b = b === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(j.arrayFormat) ? b : x(b, j), O(x(h, j), b, T);
    }
    for (const E of Object.keys(T)) {
      const h = T[E];
      if (typeof h == "object" && h !== null)
        for (const b of Object.keys(h))
          h[b] = K(h[b], j);
      else
        T[E] = K(h, j);
    }
    return j.sort === !1 ? T : (j.sort === !0 ? Object.keys(T).sort() : Object.keys(T).sort(j.sort)).reduce((E, h) => {
      const b = T[h];
      return b && typeof b == "object" && !Array.isArray(b) ? E[h] = S(b) : E[h] = b, E;
    }, /* @__PURE__ */ Object.create(null));
  }
  r.extract = H, r.parse = se, r.stringify = ($, j) => {
    if (!$)
      return "";
    j = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, j), p(j.arrayFormatSeparator);
    const O = (b) => j.skipNull && c($[b]) || j.skipEmptyString && $[b] === "", T = f(j), E = {};
    for (const b of Object.keys($))
      O(b) || (E[b] = $[b]);
    const h = Object.keys(E);
    return j.sort !== !1 && h.sort(j.sort), h.map((b) => {
      const G = $[b];
      return G === void 0 ? "" : G === null ? m(b, j) : Array.isArray(G) ? G.length === 0 && j.arrayFormat === "bracket-separator" ? m(b, j) + "[]" : G.reduce(T(b), []).join("&") : m(b, j) + "=" + m(G, j);
    }).filter((b) => b.length > 0).join("&");
  }, r.parseUrl = ($, j) => {
    j = Object.assign({
      decode: !0
    }, j);
    const [O, T] = i($, "#");
    return Object.assign(
      {
        url: O.split("?")[0] || "",
        query: se(H($), j)
      },
      j && j.parseFragmentIdentifier && T ? { fragmentIdentifier: x(T, j) } : {}
    );
  }, r.stringifyUrl = ($, j) => {
    j = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, j);
    const O = C($.url).split("?")[0] || "", T = r.extract($.url), E = r.parse(T, { sort: !1 }), h = Object.assign(E, $.query);
    let b = r.stringify(h, j);
    b && (b = `?${b}`);
    let G = R($.url);
    return $.fragmentIdentifier && (G = `#${j[u] ? m($.fragmentIdentifier, j) : $.fragmentIdentifier}`), `${O}${b}${G}`;
  }, r.pick = ($, j, O) => {
    O = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, O);
    const { url: T, query: E, fragmentIdentifier: h } = r.parseUrl($, O);
    return r.stringifyUrl({
      url: T,
      query: o(E, j),
      fragmentIdentifier: h
    }, O);
  }, r.exclude = ($, j, O) => {
    const T = Array.isArray(j) ? (E) => !j.includes(E) : (E, h) => !j(E, h);
    return r.pick($, T, O);
  };
})(Is);
const R3 = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
}, N3 = ":";
function $3(r) {
  const [e, t] = r.split(N3);
  return { namespace: e, reference: t };
}
function F3(r, e = []) {
  const t = [];
  return Object.keys(r).forEach((i) => {
    if (e.length && !e.includes(i))
      return;
    const o = r[i];
    t.push(...o.accounts);
  }), t;
}
function Kp(r, e) {
  return r.includes(":") ? [r] : e.chains || [];
}
const kp = "base10", ur = "base16", Cu = "base64pad", ah = "utf8", Vp = 0, ai = 1, L3 = 0, Yf = 1, Au = 12, ch = 32;
function j3() {
  const r = nh.generateKeyPair();
  return { privateKey: hr(r.secretKey, ur), publicKey: hr(r.publicKey, ur) };
}
function Tu() {
  const r = qi.randomBytes(ch);
  return hr(r, ur);
}
function U3(r, e) {
  const t = nh.sharedKey(mr(r, ur), mr(e, ur), !0), i = new ww(pa.SHA256, t).expand(ch);
  return hr(i, ur);
}
function M3(r) {
  const e = pa.hash(mr(r, ur));
  return hr(e, ur);
}
function ji(r) {
  const e = pa.hash(mr(r, ah));
  return hr(e, ur);
}
function q3(r) {
  return mr(`${r}`, kp);
}
function Ls(r) {
  return Number(hr(r, kp));
}
function B3(r) {
  const e = q3(typeof r.type < "u" ? r.type : Vp);
  if (Ls(e) === ai && typeof r.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof r.senderPublicKey < "u" ? mr(r.senderPublicKey, ur) : void 0, i = typeof r.iv < "u" ? mr(r.iv, ur) : qi.randomBytes(Au), o = new th.ChaCha20Poly1305(mr(r.symKey, ur)).seal(i, mr(r.message, ah));
  return z3({ type: e, sealed: o, iv: i, senderPublicKey: t });
}
function H3(r) {
  const e = new th.ChaCha20Poly1305(mr(r.symKey, ur)), { sealed: t, iv: i } = na(r.encoded), o = e.open(i, t);
  if (o === null)
    throw new Error("Failed to decrypt");
  return hr(o, ah);
}
function z3(r) {
  if (Ls(r.type) === ai) {
    if (typeof r.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return hr(Su([r.type, r.senderPublicKey, r.iv, r.sealed]), Cu);
  }
  return hr(Su([r.type, r.iv, r.sealed]), Cu);
}
function na(r) {
  const e = mr(r, Cu), t = e.slice(L3, Yf), i = Yf;
  if (Ls(t) === ai) {
    const f = i + ch, y = f + Au, p = e.slice(i, f), m = e.slice(f, y), x = e.slice(y);
    return { type: t, sealed: x, iv: m, senderPublicKey: p };
  }
  const o = i + Au, c = e.slice(i, o), u = e.slice(o);
  return { type: t, sealed: u, iv: c };
}
function K3(r, e) {
  const t = na(r);
  return Gp({ type: Ls(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? hr(t.senderPublicKey, ur) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Gp(r) {
  const e = (r == null ? void 0 : r.type) || Vp;
  if (e === ai) {
    if (typeof (r == null ? void 0 : r.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (r == null ? void 0 : r.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: r == null ? void 0 : r.senderPublicKey, receiverPublicKey: r == null ? void 0 : r.receiverPublicKey };
}
function Jf(r) {
  return r.type === ai && typeof r.senderPublicKey == "string" && typeof r.receiverPublicKey == "string";
}
var k3 = Object.defineProperty, Qf = Object.getOwnPropertySymbols, V3 = Object.prototype.hasOwnProperty, G3 = Object.prototype.propertyIsEnumerable, Xf = (r, e, t) => e in r ? k3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Zf = (r, e) => {
  for (var t in e || (e = {}))
    V3.call(e, t) && Xf(r, t, e[t]);
  if (Qf)
    for (var t of Qf(e))
      G3.call(e, t) && Xf(r, t, e[t]);
  return r;
};
const W3 = "ReactNative", Ir = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Y3 = "js";
function uh() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function js() {
  return !qp() && !!sh() && navigator.product === W3;
}
function Us() {
  return !uh() && !!sh();
}
function Ms() {
  return js() ? Ir.reactNative : uh() ? Ir.node : Us() ? Ir.browser : Ir.unknown;
}
function J3(r, e) {
  let t = Is.parse(r);
  return t = Zf(Zf({}, t), e), r = Is.stringify(t), r;
}
function Q3() {
  return Hp() || { name: "", description: "", url: "", icons: [""] };
}
function X3() {
  if (Ms() === Ir.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: t, Version: i } = global.Platform;
    return [t, i].join("-");
  }
  const r = LE();
  if (r === null)
    return "unknown";
  const e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
  return r.type === "browser" ? [e, r.name, r.version].join("-") : [e, r.version].join("-");
}
function Z3() {
  var r;
  const e = Ms();
  return e === Ir.browser ? [e, ((r = Bp()) == null ? void 0 : r.host) || "unknown"].join(":") : e;
}
function e6(r, e, t) {
  const i = X3(), o = Z3();
  return [[r, e].join("-"), [Y3, t].join("-"), i, o].join("/");
}
function t6({ protocol: r, version: e, relayUrl: t, sdkVersion: i, auth: o, projectId: c, useOnCloseEvent: u }) {
  const f = t.split("?"), y = e6(r, e, i), p = { auth: o, ua: y, projectId: c, useOnCloseEvent: u || void 0 }, m = J3(f[1] || "", p);
  return f[0] + "?" + m;
}
function ii(r, e) {
  return r.filter((t) => e.includes(t)).length === r.length;
}
function Wp(r) {
  return Object.fromEntries(r.entries());
}
function Yp(r) {
  return new Map(Object.entries(r));
}
function Ni(r = ve.FIVE_MINUTES, e) {
  const t = ve.toMiliseconds(r || ve.FIVE_MINUTES);
  let i, o, c;
  return { resolve: (u) => {
    c && i && (clearTimeout(c), i(u));
  }, reject: (u) => {
    c && o && (clearTimeout(c), o(u));
  }, done: () => new Promise((u, f) => {
    c = setTimeout(() => {
      f(new Error(e));
    }, t), i = u, o = f;
  }) };
}
function Ps(r, e, t) {
  return new Promise(async (i, o) => {
    const c = setTimeout(() => o(new Error(t)), e);
    try {
      const u = await r;
      i(u);
    } catch (u) {
      o(u);
    }
    clearTimeout(c);
  });
}
function Jp(r, e) {
  if (typeof e == "string" && e.startsWith(`${r}:`))
    return e;
  if (r.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (r.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${r}`);
}
function r6(r) {
  return Jp("topic", r);
}
function n6(r) {
  return Jp("id", r);
}
function Qp(r) {
  const [e, t] = r.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string")
    i.topic = t;
  else if (e === "id" && Number.isInteger(Number(t)))
    i.id = Number(t);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
  return i;
}
function Gr(r, e) {
  return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(r));
}
function Fn(r) {
  return Date.now() >= ve.toMiliseconds(r);
}
function Ht(r, e) {
  return `${r}${e ? `:${e}` : ""}`;
}
function eu(r = [], e = []) {
  return [.../* @__PURE__ */ new Set([...r, ...e])];
}
async function i6({ id: r, topic: e, wcDeepLink: t }) {
  try {
    if (!t)
      return;
    const i = typeof t == "string" ? JSON.parse(t) : t;
    let o = i == null ? void 0 : i.href;
    if (typeof o != "string")
      return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const c = `${o}/wc?requestId=${r}&sessionTopic=${e}`, u = Ms();
    u === Ir.browser ? c.startsWith("https://") ? window.open(c, "_blank", "noreferrer noopener") : window.open(c, "_self", "noreferrer noopener") : u === Ir.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(c);
  } catch (i) {
    console.error(i);
  }
}
const s6 = "irn";
function Ru(r) {
  return (r == null ? void 0 : r.relay) || { protocol: s6 };
}
function Xo(r) {
  const e = R3[r];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${r}`);
  return e;
}
var o6 = Object.defineProperty, ed = Object.getOwnPropertySymbols, a6 = Object.prototype.hasOwnProperty, c6 = Object.prototype.propertyIsEnumerable, td = (r, e, t) => e in r ? o6(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, u6 = (r, e) => {
  for (var t in e || (e = {}))
    a6.call(e, t) && td(r, t, e[t]);
  if (ed)
    for (var t of ed(e))
      c6.call(e, t) && td(r, t, e[t]);
  return r;
};
function h6(r, e = "-") {
  const t = {}, i = "relay" + e;
  return Object.keys(r).forEach((o) => {
    if (o.startsWith(i)) {
      const c = o.replace(i, ""), u = r[o];
      t[c] = u;
    }
  }), t;
}
function l6(r) {
  const e = r.indexOf(":"), t = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0, i = r.substring(0, e), o = r.substring(e + 1, t).split("@"), c = typeof t < "u" ? r.substring(t) : "", u = Is.parse(c);
  return { protocol: i, topic: f6(o[0]), version: parseInt(o[1], 10), symKey: u.symKey, relay: h6(u) };
}
function f6(r) {
  return r.startsWith("//") ? r.substring(2) : r;
}
function d6(r, e = "-") {
  const t = "relay", i = {};
  return Object.keys(r).forEach((o) => {
    const c = t + e + o;
    r[o] && (i[c] = r[o]);
  }), i;
}
function p6(r) {
  return `${r.protocol}:${r.topic}@${r.version}?` + Is.stringify(u6({ symKey: r.symKey }, d6(r.relay)));
}
function Hi(r) {
  const e = [];
  return r.forEach((t) => {
    const [i, o] = t.split(":");
    e.push(`${i}:${o}`);
  }), e;
}
function g6(r) {
  const e = [];
  return Object.values(r).forEach((t) => {
    e.push(...Hi(t.accounts));
  }), e;
}
function y6(r, e) {
  const t = [];
  return Object.values(r).forEach((i) => {
    Hi(i.accounts).includes(e) && t.push(...i.methods);
  }), t;
}
function v6(r, e) {
  const t = [];
  return Object.values(r).forEach((i) => {
    Hi(i.accounts).includes(e) && t.push(...i.events);
  }), t;
}
function _6(r, e) {
  const t = Zo(r, e);
  if (t)
    throw new Error(t.message);
  const i = {};
  for (const [o, c] of Object.entries(r))
    i[o] = { methods: c.methods, events: c.events, chains: c.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
function hh(r) {
  return r.includes(":");
}
function ws(r) {
  return hh(r) ? r.split(":")[0] : r;
}
const b6 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, m6 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function he(r, e) {
  const { message: t, code: i } = m6[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function $t(r, e) {
  const { message: t, code: i } = b6[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function nn(r, e) {
  return Array.isArray(r) ? typeof e < "u" && r.length ? r.every(e) : !0 : !1;
}
function Ui(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
function cr(r) {
  return typeof r > "u";
}
function Gt(r, e) {
  return e && cr(r) ? !0 : typeof r == "string" && !!r.trim().length;
}
function lh(r, e) {
  return e && cr(r) ? !0 : typeof r == "number" && !isNaN(r);
}
function w6(r, e) {
  const { requiredNamespaces: t } = e, i = Object.keys(r.namespaces), o = Object.keys(t);
  let c = !0;
  return ii(o, i) ? (i.forEach((u) => {
    const { accounts: f, methods: y, events: p } = r.namespaces[u], m = Hi(f), x = t[u];
    (!ii(Kp(u, x), m) || !ii(x.methods, y) || !ii(x.events, p)) && (c = !1);
  }), c) : !1;
}
function ia(r) {
  return Gt(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1;
}
function E6(r) {
  if (Gt(r, !1) && r.includes(":")) {
    const e = r.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && ia(t);
    }
  }
  return !1;
}
function D6(r) {
  if (Gt(r, !1))
    try {
      return typeof new URL(r) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function S6(r) {
  var e;
  return (e = r == null ? void 0 : r.proposer) == null ? void 0 : e.publicKey;
}
function x6(r) {
  return r == null ? void 0 : r.topic;
}
function O6(r, e) {
  let t = null;
  return Gt(r == null ? void 0 : r.publicKey, !1) || (t = he("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t;
}
function rd(r) {
  let e = !0;
  return nn(r) ? r.length && (e = r.every((t) => Gt(t, !1))) : e = !1, e;
}
function I6(r, e, t) {
  let i = null;
  return nn(e) && e.length ? e.forEach((o) => {
    i || ia(o) || (i = $t("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
  }) : ia(r) || (i = $t("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function P6(r, e, t) {
  let i = null;
  return Object.entries(r).forEach(([o, c]) => {
    if (i)
      return;
    const u = I6(o, Kp(o, c), `${e} ${t}`);
    u && (i = u);
  }), i;
}
function C6(r, e) {
  let t = null;
  return nn(r) ? r.forEach((i) => {
    t || E6(i) || (t = $t("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = $t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function A6(r, e) {
  let t = null;
  return Object.values(r).forEach((i) => {
    if (t)
      return;
    const o = C6(i == null ? void 0 : i.accounts, `${e} namespace`);
    o && (t = o);
  }), t;
}
function T6(r, e) {
  let t = null;
  return rd(r == null ? void 0 : r.methods) ? rd(r == null ? void 0 : r.events) || (t = $t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = $t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t;
}
function Xp(r, e) {
  let t = null;
  return Object.values(r).forEach((i) => {
    if (t)
      return;
    const o = T6(i, `${e}, namespace`);
    o && (t = o);
  }), t;
}
function R6(r, e, t) {
  let i = null;
  if (r && Ui(r)) {
    const o = Xp(r, e);
    o && (i = o);
    const c = P6(r, e, t);
    c && (i = c);
  } else
    i = he("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return i;
}
function Zo(r, e) {
  let t = null;
  if (r && Ui(r)) {
    const i = Xp(r, e);
    i && (t = i);
    const o = A6(r, e);
    o && (t = o);
  } else
    t = he("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return t;
}
function Zp(r) {
  return Gt(r.protocol, !0);
}
function N6(r, e) {
  let t = !1;
  return e && !r ? t = !0 : r && nn(r) && r.length && r.forEach((i) => {
    t = Zp(i);
  }), t;
}
function $6(r) {
  return typeof r == "number";
}
function _r(r) {
  return typeof r < "u" && typeof r !== null;
}
function F6(r) {
  return !(!r || typeof r != "object" || !r.code || !lh(r.code, !1) || !r.message || !Gt(r.message, !1));
}
function L6(r) {
  return !(cr(r) || !Gt(r.method, !1));
}
function j6(r) {
  return !(cr(r) || cr(r.result) && cr(r.error) || !lh(r.id, !1) || !Gt(r.jsonrpc, !1));
}
function U6(r) {
  return !(cr(r) || !Gt(r.name, !1));
}
function nd(r, e) {
  return !(!ia(e) || !g6(r).includes(e));
}
function M6(r, e, t) {
  return Gt(t, !1) ? y6(r, e).includes(t) : !1;
}
function q6(r, e, t) {
  return Gt(t, !1) ? v6(r, e).includes(t) : !1;
}
function id(r, e, t) {
  let i = null;
  const o = B6(r), c = H6(e), u = Object.keys(o), f = Object.keys(c), y = sd(Object.keys(r)), p = sd(Object.keys(e)), m = y.filter((x) => !p.includes(x));
  return m.length && (i = he("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${m.toString()}
      Received: ${Object.keys(e).toString()}`)), ii(u, f) || (i = he("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${f.toString()}`)), Object.keys(e).forEach((x) => {
    if (!x.includes(":") || i)
      return;
    const S = Hi(e[x].accounts);
    S.includes(x) || (i = he("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${x}
        Required: ${x}
        Approved: ${S.toString()}`));
  }), u.forEach((x) => {
    i || (ii(o[x].methods, c[x].methods) ? ii(o[x].events, c[x].events) || (i = he("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${x}`)) : i = he("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${x}`));
  }), i;
}
function B6(r) {
  const e = {};
  return Object.keys(r).forEach((t) => {
    var i;
    t.includes(":") ? e[t] = r[t] : (i = r[t].chains) == null || i.forEach((o) => {
      e[o] = { methods: r[t].methods, events: r[t].events };
    });
  }), e;
}
function sd(r) {
  return [...new Set(r.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function H6(r) {
  const e = {};
  return Object.keys(r).forEach((t) => {
    if (t.includes(":"))
      e[t] = r[t];
    else {
      const i = Hi(r[t].accounts);
      i == null || i.forEach((o) => {
        e[o] = { accounts: r[t].accounts.filter((c) => c.includes(`${o}:`)), methods: r[t].methods, events: r[t].events };
      });
    }
  }), e;
}
function z6(r, e) {
  return lh(r, !1) && r <= e.max && r >= e.min;
}
function od() {
  const r = Ms();
  return new Promise((e) => {
    switch (r) {
      case Ir.browser:
        e(K6());
        break;
      case Ir.reactNative:
        e(k6());
        break;
      case Ir.node:
        e(V6());
        break;
      default:
        e(!0);
    }
  });
}
function K6() {
  return Us() && (navigator == null ? void 0 : navigator.onLine);
}
async function k6() {
  if (js() && typeof global < "u" && global != null && global.NetInfo) {
    const r = await (global == null ? void 0 : global.NetInfo.fetch());
    return r == null ? void 0 : r.isConnected;
  }
  return !0;
}
function V6() {
  return !0;
}
function G6(r) {
  switch (Ms()) {
    case Ir.browser:
      W6(r);
      break;
    case Ir.reactNative:
      Y6(r);
      break;
  }
}
function W6(r) {
  !js() && Us() && (window.addEventListener("online", () => r(!0)), window.addEventListener("offline", () => r(!1)));
}
function Y6(r) {
  js() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => r(e == null ? void 0 : e.isConnected)));
}
const tu = {};
let Go = class {
  static get(e) {
    return tu[e];
  }
  static set(e, t) {
    tu[e] = t;
  }
  static delete(e) {
    delete tu[e];
  }
};
var va = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Nu = function(r, e) {
  return Nu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var o in i)
      i.hasOwnProperty(o) && (t[o] = i[o]);
  }, Nu(r, e);
};
function J6(r, e) {
  Nu(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var $u = function() {
  return $u = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, $u.apply(this, arguments);
};
function Q6(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(r); o < i.length; o++)
      e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]]);
  return t;
}
function X6(r, e, t, i) {
  var o = arguments.length, c = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(r, e, t, i);
  else
    for (var f = r.length - 1; f >= 0; f--)
      (u = r[f]) && (c = (o < 3 ? u(c) : o > 3 ? u(e, t, c) : u(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function Z6(r, e) {
  return function(t, i) {
    e(t, i, r);
  };
}
function e2(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function t2(r, e, t, i) {
  function o(c) {
    return c instanceof t ? c : new t(function(u) {
      u(c);
    });
  }
  return new (t || (t = Promise))(function(c, u) {
    function f(m) {
      try {
        p(i.next(m));
      } catch (x) {
        u(x);
      }
    }
    function y(m) {
      try {
        p(i.throw(m));
      } catch (x) {
        u(x);
      }
    }
    function p(m) {
      m.done ? c(m.value) : o(m.value).then(f, y);
    }
    p((i = i.apply(r, e || [])).next());
  });
}
function r2(r, e) {
  var t = { label: 0, sent: function() {
    if (c[0] & 1)
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, i, o, c, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(p) {
    return function(m) {
      return y([p, m]);
    };
  }
  function y(p) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, o && (c = p[0] & 2 ? o.return : p[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, p[1])).done)
          return c;
        switch (o = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, o = p[1], p = [0];
            continue;
          case 7:
            p = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              t.label = c[1], c = p;
              break;
            }
            if (c && t.label < c[2]) {
              t.label = c[2], t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(r, t);
      } catch (m) {
        p = [6, m], o = 0;
      } finally {
        i = c = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function n2(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}
function i2(r, e) {
  for (var t in r)
    t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Fu(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function eg(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), o, c = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = i.next()).done; )
      c.push(o.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      o && !o.done && (t = i.return) && t.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return c;
}
function s2() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(eg(arguments[e]));
  return r;
}
function o2() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], u = 0, f = c.length; u < f; u++, o++)
      i[o] = c[u];
  return i;
}
function Cs(r) {
  return this instanceof Cs ? (this.v = r, this) : new Cs(r);
}
function a2(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []), o, c = [];
  return o = {}, u("next"), u("throw"), u("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function u(S) {
    i[S] && (o[S] = function(C) {
      return new Promise(function(R, H) {
        c.push([S, C, R, H]) > 1 || f(S, C);
      });
    });
  }
  function f(S, C) {
    try {
      y(i[S](C));
    } catch (R) {
      x(c[0][3], R);
    }
  }
  function y(S) {
    S.value instanceof Cs ? Promise.resolve(S.value.v).then(p, m) : x(c[0][2], S);
  }
  function p(S) {
    f("next", S);
  }
  function m(S) {
    f("throw", S);
  }
  function x(S, C) {
    S(C), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function c2(r) {
  var e, t;
  return e = {}, i("next"), i("throw", function(o) {
    throw o;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(o, c) {
    e[o] = r[o] ? function(u) {
      return (t = !t) ? { value: Cs(r[o](u)), done: o === "return" } : c ? c(u) : u;
    } : c;
  }
}
function u2(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof Fu == "function" ? Fu(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(c) {
    t[c] = r[c] && function(u) {
      return new Promise(function(f, y) {
        u = r[c](u), o(f, y, u.done, u.value);
      });
    };
  }
  function o(c, u, f, y) {
    Promise.resolve(y).then(function(p) {
      c({ value: p, done: f });
    }, u);
  }
}
function h2(r, e) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: e }) : r.raw = e, r;
}
function l2(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e.default = r, e;
}
function f2(r) {
  return r && r.__esModule ? r : { default: r };
}
function d2(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function p2(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const g2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return $u;
  },
  __asyncDelegator: c2,
  __asyncGenerator: a2,
  __asyncValues: u2,
  __await: Cs,
  __awaiter: t2,
  __classPrivateFieldGet: d2,
  __classPrivateFieldSet: p2,
  __createBinding: n2,
  __decorate: X6,
  __exportStar: i2,
  __extends: J6,
  __generator: r2,
  __importDefault: f2,
  __importStar: l2,
  __makeTemplateObject: h2,
  __metadata: e2,
  __param: Z6,
  __read: eg,
  __rest: Q6,
  __spread: s2,
  __spreadArrays: o2,
  __values: Fu
}, Symbol.toStringTag, { value: "Module" })), tg = /* @__PURE__ */ si(g2);
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
function y2(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return JSON.parse(r);
  } catch {
    return r;
  }
}
qs.safeJsonParse = y2;
function v2(r) {
  return typeof r == "string" ? r : JSON.stringify(r, (e, t) => typeof t > "u" ? null : t);
}
qs.safeJsonStringify = v2;
var ls = { exports: {} }, ad;
function _2() {
  return ad || (ad = 1, function() {
    let r;
    function e() {
    }
    r = e, r.prototype.getItem = function(t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }, r.prototype.setItem = function(t, i) {
      this[t] = String(i);
    }, r.prototype.removeItem = function(t) {
      delete this[t];
    }, r.prototype.clear = function() {
      const t = this;
      Object.keys(t).forEach(function(i) {
        t[i] = void 0, delete t[i];
      });
    }, r.prototype.key = function(t) {
      return t = t || 0, Object.keys(this)[t];
    }, r.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof br < "u" && br.localStorage ? ls.exports = br.localStorage : typeof window < "u" && window.localStorage ? ls.exports = window.localStorage : ls.exports = new e();
  }()), ls.exports;
}
var ru = {}, fs = {}, cd;
function b2() {
  if (cd)
    return fs;
  cd = 1, Object.defineProperty(fs, "__esModule", { value: !0 }), fs.IKeyValueStorage = void 0;
  class r {
  }
  return fs.IKeyValueStorage = r, fs;
}
var ds = {}, ud;
function m2() {
  if (ud)
    return ds;
  ud = 1, Object.defineProperty(ds, "__esModule", { value: !0 }), ds.parseEntry = void 0;
  const r = qs;
  function e(t) {
    var i;
    return [t[0], r.safeJsonParse((i = t[1]) !== null && i !== void 0 ? i : "")];
  }
  return ds.parseEntry = e, ds;
}
var hd;
function w2() {
  return hd || (hd = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = tg;
    e.__exportStar(b2(), r), e.__exportStar(m2(), r);
  }(ru)), ru;
}
Object.defineProperty(va, "__esModule", { value: !0 });
va.KeyValueStorage = void 0;
const $i = tg, ld = qs, E2 = $i.__importDefault(_2()), D2 = w2();
class rg {
  constructor() {
    this.localStorage = E2.default;
  }
  getKeys() {
    return $i.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return $i.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(D2.parseEntry);
    });
  }
  getItem(e) {
    return $i.__awaiter(this, void 0, void 0, function* () {
      const t = this.localStorage.getItem(e);
      if (t !== null)
        return ld.safeJsonParse(t);
    });
  }
  setItem(e, t) {
    return $i.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(e, ld.safeJsonStringify(t));
    });
  }
  removeItem(e) {
    return $i.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(e);
    });
  }
}
va.KeyValueStorage = rg;
var S2 = va.default = rg, zi = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Lu = function(r, e) {
  return Lu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var o in i)
      i.hasOwnProperty(o) && (t[o] = i[o]);
  }, Lu(r, e);
};
function x2(r, e) {
  Lu(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ju = function() {
  return ju = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, ju.apply(this, arguments);
};
function O2(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(r); o < i.length; o++)
      e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]]);
  return t;
}
function I2(r, e, t, i) {
  var o = arguments.length, c = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(r, e, t, i);
  else
    for (var f = r.length - 1; f >= 0; f--)
      (u = r[f]) && (c = (o < 3 ? u(c) : o > 3 ? u(e, t, c) : u(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function P2(r, e) {
  return function(t, i) {
    e(t, i, r);
  };
}
function C2(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function A2(r, e, t, i) {
  function o(c) {
    return c instanceof t ? c : new t(function(u) {
      u(c);
    });
  }
  return new (t || (t = Promise))(function(c, u) {
    function f(m) {
      try {
        p(i.next(m));
      } catch (x) {
        u(x);
      }
    }
    function y(m) {
      try {
        p(i.throw(m));
      } catch (x) {
        u(x);
      }
    }
    function p(m) {
      m.done ? c(m.value) : o(m.value).then(f, y);
    }
    p((i = i.apply(r, e || [])).next());
  });
}
function T2(r, e) {
  var t = { label: 0, sent: function() {
    if (c[0] & 1)
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, i, o, c, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(p) {
    return function(m) {
      return y([p, m]);
    };
  }
  function y(p) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, o && (c = p[0] & 2 ? o.return : p[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, p[1])).done)
          return c;
        switch (o = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, o = p[1], p = [0];
            continue;
          case 7:
            p = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              t.label = c[1], c = p;
              break;
            }
            if (c && t.label < c[2]) {
              t.label = c[2], t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(r, t);
      } catch (m) {
        p = [6, m], o = 0;
      } finally {
        i = c = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function R2(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}
function N2(r, e) {
  for (var t in r)
    t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Uu(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ng(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), o, c = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = i.next()).done; )
      c.push(o.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      o && !o.done && (t = i.return) && t.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return c;
}
function $2() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(ng(arguments[e]));
  return r;
}
function F2() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], u = 0, f = c.length; u < f; u++, o++)
      i[o] = c[u];
  return i;
}
function As(r) {
  return this instanceof As ? (this.v = r, this) : new As(r);
}
function L2(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []), o, c = [];
  return o = {}, u("next"), u("throw"), u("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function u(S) {
    i[S] && (o[S] = function(C) {
      return new Promise(function(R, H) {
        c.push([S, C, R, H]) > 1 || f(S, C);
      });
    });
  }
  function f(S, C) {
    try {
      y(i[S](C));
    } catch (R) {
      x(c[0][3], R);
    }
  }
  function y(S) {
    S.value instanceof As ? Promise.resolve(S.value.v).then(p, m) : x(c[0][2], S);
  }
  function p(S) {
    f("next", S);
  }
  function m(S) {
    f("throw", S);
  }
  function x(S, C) {
    S(C), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function j2(r) {
  var e, t;
  return e = {}, i("next"), i("throw", function(o) {
    throw o;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(o, c) {
    e[o] = r[o] ? function(u) {
      return (t = !t) ? { value: As(r[o](u)), done: o === "return" } : c ? c(u) : u;
    } : c;
  }
}
function U2(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof Uu == "function" ? Uu(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(c) {
    t[c] = r[c] && function(u) {
      return new Promise(function(f, y) {
        u = r[c](u), o(f, y, u.done, u.value);
      });
    };
  }
  function o(c, u, f, y) {
    Promise.resolve(y).then(function(p) {
      c({ value: p, done: f });
    }, u);
  }
}
function M2(r, e) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: e }) : r.raw = e, r;
}
function q2(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e.default = r, e;
}
function B2(r) {
  return r && r.__esModule ? r : { default: r };
}
function H2(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function z2(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const K2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return ju;
  },
  __asyncDelegator: j2,
  __asyncGenerator: L2,
  __asyncValues: U2,
  __await: As,
  __awaiter: A2,
  __classPrivateFieldGet: H2,
  __classPrivateFieldSet: z2,
  __createBinding: R2,
  __decorate: I2,
  __exportStar: N2,
  __extends: x2,
  __generator: T2,
  __importDefault: B2,
  __importStar: q2,
  __makeTemplateObject: M2,
  __metadata: C2,
  __param: P2,
  __read: ng,
  __rest: O2,
  __spread: $2,
  __spreadArrays: F2,
  __values: Uu
}, Symbol.toStringTag, { value: "Module" })), _a = /* @__PURE__ */ si(K2);
var ps = {}, nu = {}, gs = {};
let ci = class {
};
const k2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: ci
}, Symbol.toStringTag, { value: "Module" })), V2 = /* @__PURE__ */ si(k2);
var fd;
function G2() {
  if (fd)
    return gs;
  fd = 1, Object.defineProperty(gs, "__esModule", { value: !0 }), gs.IHeartBeat = void 0;
  const r = V2;
  class e extends r.IEvents {
    constructor(i) {
      super();
    }
  }
  return gs.IHeartBeat = e, gs;
}
var dd;
function ig() {
  return dd || (dd = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), _a.__exportStar(G2(), r);
  }(nu)), nu;
}
var iu = {}, ri = {}, pd;
function W2() {
  if (pd)
    return ri;
  pd = 1, Object.defineProperty(ri, "__esModule", { value: !0 }), ri.HEARTBEAT_EVENTS = ri.HEARTBEAT_INTERVAL = void 0;
  const r = ve;
  return ri.HEARTBEAT_INTERVAL = r.FIVE_SECONDS, ri.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, ri;
}
var gd;
function sg() {
  return gd || (gd = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), _a.__exportStar(W2(), r);
  }(iu)), iu;
}
var yd;
function Y2() {
  if (yd)
    return ps;
  yd = 1, Object.defineProperty(ps, "__esModule", { value: !0 }), ps.HeartBeat = void 0;
  const r = _a, e = Pr, t = ve, i = ig(), o = sg();
  class c extends i.IHeartBeat {
    constructor(f) {
      super(f), this.events = new e.EventEmitter(), this.interval = o.HEARTBEAT_INTERVAL, this.interval = (f == null ? void 0 : f.interval) || o.HEARTBEAT_INTERVAL;
    }
    static init(f) {
      return r.__awaiter(this, void 0, void 0, function* () {
        const y = new c(f);
        return yield y.init(), y;
      });
    }
    init() {
      return r.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(f, y) {
      this.events.on(f, y);
    }
    once(f, y) {
      this.events.once(f, y);
    }
    off(f, y) {
      this.events.off(f, y);
    }
    removeListener(f, y) {
      this.events.removeListener(f, y);
    }
    initialize() {
      return r.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), t.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return ps.HeartBeat = c, ps;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = _a;
  e.__exportStar(Y2(), r), e.__exportStar(ig(), r), e.__exportStar(sg(), r);
})(zi);
var Ze = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Mu = function(r, e) {
  return Mu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var o in i)
      i.hasOwnProperty(o) && (t[o] = i[o]);
  }, Mu(r, e);
};
function J2(r, e) {
  Mu(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var qu = function() {
  return qu = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, qu.apply(this, arguments);
};
function Q2(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(r); o < i.length; o++)
      e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]]);
  return t;
}
function X2(r, e, t, i) {
  var o = arguments.length, c = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(r, e, t, i);
  else
    for (var f = r.length - 1; f >= 0; f--)
      (u = r[f]) && (c = (o < 3 ? u(c) : o > 3 ? u(e, t, c) : u(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function Z2(r, e) {
  return function(t, i) {
    e(t, i, r);
  };
}
function eD(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function tD(r, e, t, i) {
  function o(c) {
    return c instanceof t ? c : new t(function(u) {
      u(c);
    });
  }
  return new (t || (t = Promise))(function(c, u) {
    function f(m) {
      try {
        p(i.next(m));
      } catch (x) {
        u(x);
      }
    }
    function y(m) {
      try {
        p(i.throw(m));
      } catch (x) {
        u(x);
      }
    }
    function p(m) {
      m.done ? c(m.value) : o(m.value).then(f, y);
    }
    p((i = i.apply(r, e || [])).next());
  });
}
function rD(r, e) {
  var t = { label: 0, sent: function() {
    if (c[0] & 1)
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, i, o, c, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(p) {
    return function(m) {
      return y([p, m]);
    };
  }
  function y(p) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, o && (c = p[0] & 2 ? o.return : p[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, p[1])).done)
          return c;
        switch (o = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, o = p[1], p = [0];
            continue;
          case 7:
            p = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              t.label = c[1], c = p;
              break;
            }
            if (c && t.label < c[2]) {
              t.label = c[2], t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(r, t);
      } catch (m) {
        p = [6, m], o = 0;
      } finally {
        i = c = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function nD(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}
function iD(r, e) {
  for (var t in r)
    t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Bu(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function og(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), o, c = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = i.next()).done; )
      c.push(o.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      o && !o.done && (t = i.return) && t.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return c;
}
function sD() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(og(arguments[e]));
  return r;
}
function oD() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], u = 0, f = c.length; u < f; u++, o++)
      i[o] = c[u];
  return i;
}
function Ts(r) {
  return this instanceof Ts ? (this.v = r, this) : new Ts(r);
}
function aD(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []), o, c = [];
  return o = {}, u("next"), u("throw"), u("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function u(S) {
    i[S] && (o[S] = function(C) {
      return new Promise(function(R, H) {
        c.push([S, C, R, H]) > 1 || f(S, C);
      });
    });
  }
  function f(S, C) {
    try {
      y(i[S](C));
    } catch (R) {
      x(c[0][3], R);
    }
  }
  function y(S) {
    S.value instanceof Ts ? Promise.resolve(S.value.v).then(p, m) : x(c[0][2], S);
  }
  function p(S) {
    f("next", S);
  }
  function m(S) {
    f("throw", S);
  }
  function x(S, C) {
    S(C), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function cD(r) {
  var e, t;
  return e = {}, i("next"), i("throw", function(o) {
    throw o;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(o, c) {
    e[o] = r[o] ? function(u) {
      return (t = !t) ? { value: Ts(r[o](u)), done: o === "return" } : c ? c(u) : u;
    } : c;
  }
}
function uD(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof Bu == "function" ? Bu(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(c) {
    t[c] = r[c] && function(u) {
      return new Promise(function(f, y) {
        u = r[c](u), o(f, y, u.done, u.value);
      });
    };
  }
  function o(c, u, f, y) {
    Promise.resolve(y).then(function(p) {
      c({ value: p, done: f });
    }, u);
  }
}
function hD(r, e) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: e }) : r.raw = e, r;
}
function lD(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e.default = r, e;
}
function fD(r) {
  return r && r.__esModule ? r : { default: r };
}
function dD(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function pD(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const gD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return qu;
  },
  __asyncDelegator: cD,
  __asyncGenerator: aD,
  __asyncValues: uD,
  __await: Ts,
  __awaiter: tD,
  __classPrivateFieldGet: dD,
  __classPrivateFieldSet: pD,
  __createBinding: nD,
  __decorate: X2,
  __exportStar: iD,
  __extends: J2,
  __generator: rD,
  __importDefault: fD,
  __importStar: lD,
  __makeTemplateObject: hD,
  __metadata: eD,
  __param: Z2,
  __read: og,
  __rest: Q2,
  __spread: sD,
  __spreadArrays: oD,
  __values: Bu
}, Symbol.toStringTag, { value: "Module" })), yD = /* @__PURE__ */ si(gD);
var su, vd;
function vD() {
  if (vd)
    return su;
  vd = 1;
  function r(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  su = e;
  function e(t, i, o) {
    var c = o && o.stringify || r, u = 1;
    if (typeof t == "object" && t !== null) {
      var f = i.length + u;
      if (f === 1)
        return t;
      var y = new Array(f);
      y[0] = c(t);
      for (var p = 1; p < f; p++)
        y[p] = c(i[p]);
      return y.join(" ");
    }
    if (typeof t != "string")
      return t;
    var m = i.length;
    if (m === 0)
      return t;
    for (var x = "", S = 1 - u, C = -1, R = t && t.length || 0, H = 0; H < R; ) {
      if (t.charCodeAt(H) === 37 && H + 1 < R) {
        switch (C = C > -1 ? C : 0, t.charCodeAt(H + 1)) {
          case 100:
          case 102:
            if (S >= m || i[S] == null)
              break;
            C < H && (x += t.slice(C, H)), x += Number(i[S]), C = H + 2, H++;
            break;
          case 105:
            if (S >= m || i[S] == null)
              break;
            C < H && (x += t.slice(C, H)), x += Math.floor(Number(i[S])), C = H + 2, H++;
            break;
          case 79:
          case 111:
          case 106:
            if (S >= m || i[S] === void 0)
              break;
            C < H && (x += t.slice(C, H));
            var K = typeof i[S];
            if (K === "string") {
              x += "'" + i[S] + "'", C = H + 2, H++;
              break;
            }
            if (K === "function") {
              x += i[S].name || "<anonymous>", C = H + 2, H++;
              break;
            }
            x += c(i[S]), C = H + 2, H++;
            break;
          case 115:
            if (S >= m)
              break;
            C < H && (x += t.slice(C, H)), x += String(i[S]), C = H + 2, H++;
            break;
          case 37:
            C < H && (x += t.slice(C, H)), x += "%", C = H + 2, H++, S--;
            break;
        }
        ++S;
      }
      ++H;
    }
    return C === -1 ? t : (C < R && (x += t.slice(C)), x);
  }
  return su;
}
var ou, _d;
function _D() {
  if (_d)
    return ou;
  _d = 1;
  const r = vD();
  ou = o;
  const e = T().console || {}, t = {
    mapHttpRequest: R,
    mapHttpResponse: R,
    wrapRequestSerializer: H,
    wrapResponseSerializer: H,
    wrapErrorSerializer: H,
    req: R,
    res: R,
    err: S
  };
  function i(E, h) {
    return Array.isArray(E) ? E.filter(function(G) {
      return G !== "!stdSerializers.err";
    }) : E === !0 ? Object.keys(h) : !1;
  }
  function o(E) {
    E = E || {}, E.browser = E.browser || {};
    const h = E.browser.transmit;
    if (h && typeof h.send != "function")
      throw Error("pino: transmit option must have a send function");
    const b = E.browser.write || e;
    E.browser.write && (E.browser.asObject = !0);
    const G = E.serializers || {}, W = i(E.browser.serialize, G);
    let ie = E.browser.serialize;
    Array.isArray(E.browser.serialize) && E.browser.serialize.indexOf("!stdSerializers.err") > -1 && (ie = !1);
    const ce = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof b == "function" && (b.error = b.fatal = b.warn = b.info = b.debug = b.trace = b), E.enabled === !1 && (E.level = "silent");
    const de = E.level || "info", w = Object.create(b);
    w.log || (w.log = K), Object.defineProperty(w, "levelVal", {
      get: ee
    }), Object.defineProperty(w, "level", {
      get: Q,
      set: k
    });
    const P = {
      transmit: h,
      serialize: W,
      asObject: E.browser.asObject,
      levels: ce,
      timestamp: C(E)
    };
    w.levels = o.levels, w.level = de, w.setMaxListeners = w.getMaxListeners = w.emit = w.addListener = w.on = w.prependListener = w.once = w.prependOnceListener = w.removeListener = w.removeAllListeners = w.listeners = w.listenerCount = w.eventNames = w.write = w.flush = K, w.serializers = G, w._serialize = W, w._stdErrSerialize = ie, w.child = V, h && (w._logEvent = x());
    function ee() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Q() {
      return this._level;
    }
    function k(J) {
      if (J !== "silent" && !this.levels.values[J])
        throw Error("unknown level " + J);
      this._level = J, c(P, w, "error", "log"), c(P, w, "fatal", "error"), c(P, w, "warn", "error"), c(P, w, "info", "log"), c(P, w, "debug", "log"), c(P, w, "trace", "log");
    }
    function V(J, re) {
      if (!J)
        throw new Error("missing bindings for child Pino");
      re = re || {}, W && J.serializers && (re.serializers = J.serializers);
      const me = re.serializers;
      if (W && me) {
        var oe = Object.assign({}, G, me), we = E.browser.serialize === !0 ? Object.keys(oe) : W;
        delete J.serializers, y([J], we, oe, this._stdErrSerialize);
      }
      function le(_e) {
        this._childLevel = (_e._childLevel | 0) + 1, this.error = p(_e, J, "error"), this.fatal = p(_e, J, "fatal"), this.warn = p(_e, J, "warn"), this.info = p(_e, J, "info"), this.debug = p(_e, J, "debug"), this.trace = p(_e, J, "trace"), oe && (this.serializers = oe, this._serialize = we), h && (this._logEvent = x(
          [].concat(_e._logEvent.bindings, J)
        ));
      }
      return le.prototype = this, new le(this);
    }
    return w;
  }
  o.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, o.stdSerializers = t, o.stdTimeFunctions = Object.assign({}, { nullTime: se, epochTime: $, unixTime: j, isoTime: O });
  function c(E, h, b, G) {
    const W = Object.getPrototypeOf(h);
    h[b] = h.levelVal > h.levels.values[b] ? K : W[b] ? W[b] : e[b] || e[G] || K, u(E, h, b);
  }
  function u(E, h, b) {
    !E.transmit && h[b] === K || (h[b] = function(G) {
      return function() {
        const ie = E.timestamp(), ce = new Array(arguments.length), de = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var w = 0; w < ce.length; w++)
          ce[w] = arguments[w];
        if (E.serialize && !E.asObject && y(ce, this._serialize, this.serializers, this._stdErrSerialize), E.asObject ? G.call(de, f(this, b, ce, ie)) : G.apply(de, ce), E.transmit) {
          const P = E.transmit.level || h.level, ee = o.levels.values[P], Q = o.levels.values[b];
          if (Q < ee)
            return;
          m(this, {
            ts: ie,
            methodLevel: b,
            methodValue: Q,
            transmitLevel: P,
            transmitValue: o.levels.values[E.transmit.level || h.level],
            send: E.transmit.send,
            val: h.levelVal
          }, ce);
        }
      };
    }(h[b]));
  }
  function f(E, h, b, G) {
    E._serialize && y(b, E._serialize, E.serializers, E._stdErrSerialize);
    const W = b.slice();
    let ie = W[0];
    const ce = {};
    G && (ce.time = G), ce.level = o.levels.values[h];
    let de = (E._childLevel | 0) + 1;
    if (de < 1 && (de = 1), ie !== null && typeof ie == "object") {
      for (; de-- && typeof W[0] == "object"; )
        Object.assign(ce, W.shift());
      ie = W.length ? r(W.shift(), W) : void 0;
    } else
      typeof ie == "string" && (ie = r(W.shift(), W));
    return ie !== void 0 && (ce.msg = ie), ce;
  }
  function y(E, h, b, G) {
    for (const W in E)
      if (G && E[W] instanceof Error)
        E[W] = o.stdSerializers.err(E[W]);
      else if (typeof E[W] == "object" && !Array.isArray(E[W]))
        for (const ie in E[W])
          h && h.indexOf(ie) > -1 && ie in b && (E[W][ie] = b[ie](E[W][ie]));
  }
  function p(E, h, b) {
    return function() {
      const G = new Array(1 + arguments.length);
      G[0] = h;
      for (var W = 1; W < G.length; W++)
        G[W] = arguments[W - 1];
      return E[b].apply(this, G);
    };
  }
  function m(E, h, b) {
    const G = h.send, W = h.ts, ie = h.methodLevel, ce = h.methodValue, de = h.val, w = E._logEvent.bindings;
    y(
      b,
      E._serialize || Object.keys(E.serializers),
      E.serializers,
      E._stdErrSerialize === void 0 ? !0 : E._stdErrSerialize
    ), E._logEvent.ts = W, E._logEvent.messages = b.filter(function(P) {
      return w.indexOf(P) === -1;
    }), E._logEvent.level.label = ie, E._logEvent.level.value = ce, G(ie, E._logEvent, de), E._logEvent = x(w);
  }
  function x(E) {
    return {
      ts: 0,
      messages: [],
      bindings: E || [],
      level: { label: "", value: 0 }
    };
  }
  function S(E) {
    const h = {
      type: E.constructor.name,
      msg: E.message,
      stack: E.stack
    };
    for (const b in E)
      h[b] === void 0 && (h[b] = E[b]);
    return h;
  }
  function C(E) {
    return typeof E.timestamp == "function" ? E.timestamp : E.timestamp === !1 ? se : $;
  }
  function R() {
    return {};
  }
  function H(E) {
    return E;
  }
  function K() {
  }
  function se() {
    return !1;
  }
  function $() {
    return Date.now();
  }
  function j() {
    return Math.round(Date.now() / 1e3);
  }
  function O() {
    return new Date(Date.now()).toISOString();
  }
  function T() {
    function E(h) {
      return typeof h < "u" && h;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return E(self) || E(window) || E(this) || {};
    }
  }
  return ou;
}
var ni = {}, bd;
function ag() {
  return bd || (bd = 1, Object.defineProperty(ni, "__esModule", { value: !0 }), ni.PINO_CUSTOM_CONTEXT_KEY = ni.PINO_LOGGER_DEFAULTS = void 0, ni.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, ni.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), ni;
}
var ar = {}, md;
function bD() {
  if (md)
    return ar;
  md = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.generateChildLogger = ar.formatChildLoggerContext = ar.getLoggerContext = ar.setBrowserLoggerContext = ar.getBrowserLoggerContext = ar.getDefaultLoggerOptions = void 0;
  const r = ag();
  function e(f) {
    return Object.assign(Object.assign({}, f), { level: (f == null ? void 0 : f.level) || r.PINO_LOGGER_DEFAULTS.level });
  }
  ar.getDefaultLoggerOptions = e;
  function t(f, y = r.PINO_CUSTOM_CONTEXT_KEY) {
    return f[y] || "";
  }
  ar.getBrowserLoggerContext = t;
  function i(f, y, p = r.PINO_CUSTOM_CONTEXT_KEY) {
    return f[p] = y, f;
  }
  ar.setBrowserLoggerContext = i;
  function o(f, y = r.PINO_CUSTOM_CONTEXT_KEY) {
    let p = "";
    return typeof f.bindings > "u" ? p = t(f, y) : p = f.bindings().context || "", p;
  }
  ar.getLoggerContext = o;
  function c(f, y, p = r.PINO_CUSTOM_CONTEXT_KEY) {
    const m = o(f, p);
    return m.trim() ? `${m}/${y}` : y;
  }
  ar.formatChildLoggerContext = c;
  function u(f, y, p = r.PINO_CUSTOM_CONTEXT_KEY) {
    const m = c(f, y, p), x = f.child({ context: m });
    return i(x, m, p);
  }
  return ar.generateChildLogger = u, ar;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.pino = void 0;
  const e = yD, t = e.__importDefault(_D());
  Object.defineProperty(r, "pino", { enumerable: !0, get: function() {
    return t.default;
  } }), e.__exportStar(ag(), r), e.__exportStar(bD(), r);
})(Ze);
class mD extends ci {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class wD extends ci {
  constructor(e, t) {
    super(), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
}
class ED {
  constructor(e, t) {
    this.logger = e, this.core = t;
  }
}
let DD = class extends ci {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}, SD = class extends ci {
  constructor(e) {
    super();
  }
}, xD = class {
  constructor(e, t, i, o) {
    this.core = e, this.logger = t, this.name = i;
  }
};
class OD extends ci {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}
let ID = class extends ci {
  constructor(e, t) {
    super(), this.core = e, this.logger = t;
  }
}, PD = class {
  constructor(e, t) {
    this.projectId = e, this.logger = t;
  }
}, CD = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, AD = class {
  constructor(e) {
    this.client = e;
  }
};
const TD = (r) => JSON.stringify(r, (e, t) => typeof t == "bigint" ? t.toString() + "n" : t), RD = (r) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, t = r.replace(e, '$1"$2n"$3');
  return JSON.parse(t, (i, o) => typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o);
};
function fh(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return RD(r);
  } catch {
    return r;
  }
}
function Rs(r) {
  return typeof r == "string" ? r : TD(r) || "";
}
var dh = {}, cg = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = Le, t = Cr;
  r.DIGEST_LENGTH = 64, r.BLOCK_SIZE = 128;
  var i = (
    /** @class */
    function() {
      function f() {
        this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return f.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, f.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, f.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._tempHi), t.wipe(this._tempLo), this.reset();
      }, f.prototype.update = function(y, p) {
        if (p === void 0 && (p = y.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var m = 0;
        if (this._bytesHashed += p, this._bufferLength > 0) {
          for (; this._bufferLength < r.BLOCK_SIZE && p > 0; )
            this._buffer[this._bufferLength++] = y[m++], p--;
          this._bufferLength === this.blockSize && (c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (p >= this.blockSize && (m = c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, y, m, p), p %= this.blockSize); p > 0; )
          this._buffer[this._bufferLength++] = y[m++], p--;
        return this;
      }, f.prototype.finish = function(y) {
        if (!this._finished) {
          var p = this._bytesHashed, m = this._bufferLength, x = p / 536870912 | 0, S = p << 3, C = p % 128 < 112 ? 128 : 256;
          this._buffer[m] = 128;
          for (var R = m + 1; R < C - 8; R++)
            this._buffer[R] = 0;
          e.writeUint32BE(x, this._buffer, C - 8), e.writeUint32BE(S, this._buffer, C - 4), c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, C), this._finished = !0;
        }
        for (var R = 0; R < this.digestLength / 8; R++)
          e.writeUint32BE(this._stateHi[R], y, R * 8), e.writeUint32BE(this._stateLo[R], y, R * 8 + 4);
        return this;
      }, f.prototype.digest = function() {
        var y = new Uint8Array(this.digestLength);
        return this.finish(y), y;
      }, f.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, f.prototype.restoreState = function(y) {
        return this._stateHi.set(y.stateHi), this._stateLo.set(y.stateLo), this._bufferLength = y.bufferLength, y.buffer && this._buffer.set(y.buffer), this._bytesHashed = y.bytesHashed, this._finished = !1, this;
      }, f.prototype.cleanSavedState = function(y) {
        t.wipe(y.stateHi), t.wipe(y.stateLo), y.buffer && t.wipe(y.buffer), y.bufferLength = 0, y.bytesHashed = 0;
      }, f;
    }()
  );
  r.SHA512 = i;
  var o = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function c(f, y, p, m, x, S, C) {
    for (var R = p[0], H = p[1], K = p[2], se = p[3], $ = p[4], j = p[5], O = p[6], T = p[7], E = m[0], h = m[1], b = m[2], G = m[3], W = m[4], ie = m[5], ce = m[6], de = m[7], w, P, ee, Q, k, V, J, re; C >= 128; ) {
      for (var me = 0; me < 16; me++) {
        var oe = 8 * me + S;
        f[me] = e.readUint32BE(x, oe), y[me] = e.readUint32BE(x, oe + 4);
      }
      for (var me = 0; me < 80; me++) {
        var we = R, le = H, _e = K, B = se, q = $, F = j, d = O, A = T, ae = E, fe = h, xe = b, He = G, ke = W, je = ie, gt = ce, yt = de;
        if (w = T, P = de, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = ($ >>> 14 | W << 32 - 14) ^ ($ >>> 18 | W << 32 - 18) ^ (W >>> 41 - 32 | $ << 32 - (41 - 32)), P = (W >>> 14 | $ << 32 - 14) ^ (W >>> 18 | $ << 32 - 18) ^ ($ >>> 41 - 32 | W << 32 - (41 - 32)), k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, w = $ & j ^ ~$ & O, P = W & ie ^ ~W & ce, k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, w = o[me * 2], P = o[me * 2 + 1], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, w = f[me % 16], P = y[me % 16], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, ee = J & 65535 | re << 16, Q = k & 65535 | V << 16, w = ee, P = Q, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = (R >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | R << 32 - (34 - 32)) ^ (E >>> 39 - 32 | R << 32 - (39 - 32)), P = (E >>> 28 | R << 32 - 28) ^ (R >>> 34 - 32 | E << 32 - (34 - 32)) ^ (R >>> 39 - 32 | E << 32 - (39 - 32)), k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, w = R & H ^ R & K ^ H & K, P = E & h ^ E & b ^ h & b, k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, A = J & 65535 | re << 16, yt = k & 65535 | V << 16, w = B, P = He, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = ee, P = Q, k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, B = J & 65535 | re << 16, He = k & 65535 | V << 16, H = we, K = le, se = _e, $ = B, j = q, O = F, T = d, R = A, h = ae, b = fe, G = xe, W = He, ie = ke, ce = je, de = gt, E = yt, me % 16 === 15)
          for (var oe = 0; oe < 16; oe++)
            w = f[oe], P = y[oe], k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = f[(oe + 9) % 16], P = y[(oe + 9) % 16], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, ee = f[(oe + 1) % 16], Q = y[(oe + 1) % 16], w = (ee >>> 1 | Q << 32 - 1) ^ (ee >>> 8 | Q << 32 - 8) ^ ee >>> 7, P = (Q >>> 1 | ee << 32 - 1) ^ (Q >>> 8 | ee << 32 - 8) ^ (Q >>> 7 | ee << 32 - 7), k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, ee = f[(oe + 14) % 16], Q = y[(oe + 14) % 16], w = (ee >>> 19 | Q << 32 - 19) ^ (Q >>> 61 - 32 | ee << 32 - (61 - 32)) ^ ee >>> 6, P = (Q >>> 19 | ee << 32 - 19) ^ (ee >>> 61 - 32 | Q << 32 - (61 - 32)) ^ (Q >>> 6 | ee << 32 - 6), k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, f[oe] = J & 65535 | re << 16, y[oe] = k & 65535 | V << 16;
      }
      w = R, P = E, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[0], P = m[0], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[0] = R = J & 65535 | re << 16, m[0] = E = k & 65535 | V << 16, w = H, P = h, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[1], P = m[1], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[1] = H = J & 65535 | re << 16, m[1] = h = k & 65535 | V << 16, w = K, P = b, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[2], P = m[2], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[2] = K = J & 65535 | re << 16, m[2] = b = k & 65535 | V << 16, w = se, P = G, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[3], P = m[3], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[3] = se = J & 65535 | re << 16, m[3] = G = k & 65535 | V << 16, w = $, P = W, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[4], P = m[4], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[4] = $ = J & 65535 | re << 16, m[4] = W = k & 65535 | V << 16, w = j, P = ie, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[5], P = m[5], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[5] = j = J & 65535 | re << 16, m[5] = ie = k & 65535 | V << 16, w = O, P = ce, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[6], P = m[6], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[6] = O = J & 65535 | re << 16, m[6] = ce = k & 65535 | V << 16, w = T, P = de, k = P & 65535, V = P >>> 16, J = w & 65535, re = w >>> 16, w = p[7], P = m[7], k += P & 65535, V += P >>> 16, J += w & 65535, re += w >>> 16, V += k >>> 16, J += V >>> 16, re += J >>> 16, p[7] = T = J & 65535 | re << 16, m[7] = de = k & 65535 | V << 16, S += 128, C -= 128;
    }
    return S;
  }
  function u(f) {
    var y = new i();
    y.update(f);
    var p = y.digest();
    return y.clean(), p;
  }
  r.hash = u;
})(cg);
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.convertSecretKeyToX25519 = r.convertPublicKeyToX25519 = r.verify = r.sign = r.extractPublicKeyFromSecretKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.SEED_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = r.SIGNATURE_LENGTH = void 0;
  const e = qi, t = cg, i = Cr;
  r.SIGNATURE_LENGTH = 64, r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 64, r.SEED_LENGTH = 32;
  function o(B) {
    const q = new Float64Array(16);
    if (B)
      for (let F = 0; F < B.length; F++)
        q[F] = B[F];
    return q;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const u = o(), f = o([1]), y = o([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), p = o([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), m = o([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), x = o([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), S = o([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function C(B, q) {
    for (let F = 0; F < 16; F++)
      B[F] = q[F] | 0;
  }
  function R(B) {
    let q = 1;
    for (let F = 0; F < 16; F++) {
      let d = B[F] + q + 65535;
      q = Math.floor(d / 65536), B[F] = d - q * 65536;
    }
    B[0] += q - 1 + 37 * (q - 1);
  }
  function H(B, q, F) {
    const d = ~(F - 1);
    for (let A = 0; A < 16; A++) {
      const ae = d & (B[A] ^ q[A]);
      B[A] ^= ae, q[A] ^= ae;
    }
  }
  function K(B, q) {
    const F = o(), d = o();
    for (let A = 0; A < 16; A++)
      d[A] = q[A];
    R(d), R(d), R(d);
    for (let A = 0; A < 2; A++) {
      F[0] = d[0] - 65517;
      for (let fe = 1; fe < 15; fe++)
        F[fe] = d[fe] - 65535 - (F[fe - 1] >> 16 & 1), F[fe - 1] &= 65535;
      F[15] = d[15] - 32767 - (F[14] >> 16 & 1);
      const ae = F[15] >> 16 & 1;
      F[14] &= 65535, H(d, F, 1 - ae);
    }
    for (let A = 0; A < 16; A++)
      B[2 * A] = d[A] & 255, B[2 * A + 1] = d[A] >> 8;
  }
  function se(B, q) {
    let F = 0;
    for (let d = 0; d < 32; d++)
      F |= B[d] ^ q[d];
    return (1 & F - 1 >>> 8) - 1;
  }
  function $(B, q) {
    const F = new Uint8Array(32), d = new Uint8Array(32);
    return K(F, B), K(d, q), se(F, d);
  }
  function j(B) {
    const q = new Uint8Array(32);
    return K(q, B), q[0] & 1;
  }
  function O(B, q) {
    for (let F = 0; F < 16; F++)
      B[F] = q[2 * F] + (q[2 * F + 1] << 8);
    B[15] &= 32767;
  }
  function T(B, q, F) {
    for (let d = 0; d < 16; d++)
      B[d] = q[d] + F[d];
  }
  function E(B, q, F) {
    for (let d = 0; d < 16; d++)
      B[d] = q[d] - F[d];
  }
  function h(B, q, F) {
    let d, A, ae = 0, fe = 0, xe = 0, He = 0, ke = 0, je = 0, gt = 0, yt = 0, Me = 0, Oe = 0, Ne = 0, $e = 0, qe = 0, Pe = 0, Fe = 0, Se = 0, Ce = 0, ze = 0, Ie = 0, Ve = 0, We = 0, et = 0, tt = 0, Je = 0, tr = 0, lr = 0, Yr = 0, rr = 0, sn = 0, Sn = 0, qn = 0, Dt = F[0], vt = F[1], St = F[2], xt = F[3], wt = F[4], _t = F[5], Ft = F[6], Lt = F[7], Ot = F[8], jt = F[9], It = F[10], At = F[11], Pt = F[12], lt = F[13], Ut = F[14], Mt = F[15];
    d = q[0], ae += d * Dt, fe += d * vt, xe += d * St, He += d * xt, ke += d * wt, je += d * _t, gt += d * Ft, yt += d * Lt, Me += d * Ot, Oe += d * jt, Ne += d * It, $e += d * At, qe += d * Pt, Pe += d * lt, Fe += d * Ut, Se += d * Mt, d = q[1], fe += d * Dt, xe += d * vt, He += d * St, ke += d * xt, je += d * wt, gt += d * _t, yt += d * Ft, Me += d * Lt, Oe += d * Ot, Ne += d * jt, $e += d * It, qe += d * At, Pe += d * Pt, Fe += d * lt, Se += d * Ut, Ce += d * Mt, d = q[2], xe += d * Dt, He += d * vt, ke += d * St, je += d * xt, gt += d * wt, yt += d * _t, Me += d * Ft, Oe += d * Lt, Ne += d * Ot, $e += d * jt, qe += d * It, Pe += d * At, Fe += d * Pt, Se += d * lt, Ce += d * Ut, ze += d * Mt, d = q[3], He += d * Dt, ke += d * vt, je += d * St, gt += d * xt, yt += d * wt, Me += d * _t, Oe += d * Ft, Ne += d * Lt, $e += d * Ot, qe += d * jt, Pe += d * It, Fe += d * At, Se += d * Pt, Ce += d * lt, ze += d * Ut, Ie += d * Mt, d = q[4], ke += d * Dt, je += d * vt, gt += d * St, yt += d * xt, Me += d * wt, Oe += d * _t, Ne += d * Ft, $e += d * Lt, qe += d * Ot, Pe += d * jt, Fe += d * It, Se += d * At, Ce += d * Pt, ze += d * lt, Ie += d * Ut, Ve += d * Mt, d = q[5], je += d * Dt, gt += d * vt, yt += d * St, Me += d * xt, Oe += d * wt, Ne += d * _t, $e += d * Ft, qe += d * Lt, Pe += d * Ot, Fe += d * jt, Se += d * It, Ce += d * At, ze += d * Pt, Ie += d * lt, Ve += d * Ut, We += d * Mt, d = q[6], gt += d * Dt, yt += d * vt, Me += d * St, Oe += d * xt, Ne += d * wt, $e += d * _t, qe += d * Ft, Pe += d * Lt, Fe += d * Ot, Se += d * jt, Ce += d * It, ze += d * At, Ie += d * Pt, Ve += d * lt, We += d * Ut, et += d * Mt, d = q[7], yt += d * Dt, Me += d * vt, Oe += d * St, Ne += d * xt, $e += d * wt, qe += d * _t, Pe += d * Ft, Fe += d * Lt, Se += d * Ot, Ce += d * jt, ze += d * It, Ie += d * At, Ve += d * Pt, We += d * lt, et += d * Ut, tt += d * Mt, d = q[8], Me += d * Dt, Oe += d * vt, Ne += d * St, $e += d * xt, qe += d * wt, Pe += d * _t, Fe += d * Ft, Se += d * Lt, Ce += d * Ot, ze += d * jt, Ie += d * It, Ve += d * At, We += d * Pt, et += d * lt, tt += d * Ut, Je += d * Mt, d = q[9], Oe += d * Dt, Ne += d * vt, $e += d * St, qe += d * xt, Pe += d * wt, Fe += d * _t, Se += d * Ft, Ce += d * Lt, ze += d * Ot, Ie += d * jt, Ve += d * It, We += d * At, et += d * Pt, tt += d * lt, Je += d * Ut, tr += d * Mt, d = q[10], Ne += d * Dt, $e += d * vt, qe += d * St, Pe += d * xt, Fe += d * wt, Se += d * _t, Ce += d * Ft, ze += d * Lt, Ie += d * Ot, Ve += d * jt, We += d * It, et += d * At, tt += d * Pt, Je += d * lt, tr += d * Ut, lr += d * Mt, d = q[11], $e += d * Dt, qe += d * vt, Pe += d * St, Fe += d * xt, Se += d * wt, Ce += d * _t, ze += d * Ft, Ie += d * Lt, Ve += d * Ot, We += d * jt, et += d * It, tt += d * At, Je += d * Pt, tr += d * lt, lr += d * Ut, Yr += d * Mt, d = q[12], qe += d * Dt, Pe += d * vt, Fe += d * St, Se += d * xt, Ce += d * wt, ze += d * _t, Ie += d * Ft, Ve += d * Lt, We += d * Ot, et += d * jt, tt += d * It, Je += d * At, tr += d * Pt, lr += d * lt, Yr += d * Ut, rr += d * Mt, d = q[13], Pe += d * Dt, Fe += d * vt, Se += d * St, Ce += d * xt, ze += d * wt, Ie += d * _t, Ve += d * Ft, We += d * Lt, et += d * Ot, tt += d * jt, Je += d * It, tr += d * At, lr += d * Pt, Yr += d * lt, rr += d * Ut, sn += d * Mt, d = q[14], Fe += d * Dt, Se += d * vt, Ce += d * St, ze += d * xt, Ie += d * wt, Ve += d * _t, We += d * Ft, et += d * Lt, tt += d * Ot, Je += d * jt, tr += d * It, lr += d * At, Yr += d * Pt, rr += d * lt, sn += d * Ut, Sn += d * Mt, d = q[15], Se += d * Dt, Ce += d * vt, ze += d * St, Ie += d * xt, Ve += d * wt, We += d * _t, et += d * Ft, tt += d * Lt, Je += d * Ot, tr += d * jt, lr += d * It, Yr += d * At, rr += d * Pt, sn += d * lt, Sn += d * Ut, qn += d * Mt, ae += 38 * Ce, fe += 38 * ze, xe += 38 * Ie, He += 38 * Ve, ke += 38 * We, je += 38 * et, gt += 38 * tt, yt += 38 * Je, Me += 38 * tr, Oe += 38 * lr, Ne += 38 * Yr, $e += 38 * rr, qe += 38 * sn, Pe += 38 * Sn, Fe += 38 * qn, A = 1, d = ae + A + 65535, A = Math.floor(d / 65536), ae = d - A * 65536, d = fe + A + 65535, A = Math.floor(d / 65536), fe = d - A * 65536, d = xe + A + 65535, A = Math.floor(d / 65536), xe = d - A * 65536, d = He + A + 65535, A = Math.floor(d / 65536), He = d - A * 65536, d = ke + A + 65535, A = Math.floor(d / 65536), ke = d - A * 65536, d = je + A + 65535, A = Math.floor(d / 65536), je = d - A * 65536, d = gt + A + 65535, A = Math.floor(d / 65536), gt = d - A * 65536, d = yt + A + 65535, A = Math.floor(d / 65536), yt = d - A * 65536, d = Me + A + 65535, A = Math.floor(d / 65536), Me = d - A * 65536, d = Oe + A + 65535, A = Math.floor(d / 65536), Oe = d - A * 65536, d = Ne + A + 65535, A = Math.floor(d / 65536), Ne = d - A * 65536, d = $e + A + 65535, A = Math.floor(d / 65536), $e = d - A * 65536, d = qe + A + 65535, A = Math.floor(d / 65536), qe = d - A * 65536, d = Pe + A + 65535, A = Math.floor(d / 65536), Pe = d - A * 65536, d = Fe + A + 65535, A = Math.floor(d / 65536), Fe = d - A * 65536, d = Se + A + 65535, A = Math.floor(d / 65536), Se = d - A * 65536, ae += A - 1 + 37 * (A - 1), A = 1, d = ae + A + 65535, A = Math.floor(d / 65536), ae = d - A * 65536, d = fe + A + 65535, A = Math.floor(d / 65536), fe = d - A * 65536, d = xe + A + 65535, A = Math.floor(d / 65536), xe = d - A * 65536, d = He + A + 65535, A = Math.floor(d / 65536), He = d - A * 65536, d = ke + A + 65535, A = Math.floor(d / 65536), ke = d - A * 65536, d = je + A + 65535, A = Math.floor(d / 65536), je = d - A * 65536, d = gt + A + 65535, A = Math.floor(d / 65536), gt = d - A * 65536, d = yt + A + 65535, A = Math.floor(d / 65536), yt = d - A * 65536, d = Me + A + 65535, A = Math.floor(d / 65536), Me = d - A * 65536, d = Oe + A + 65535, A = Math.floor(d / 65536), Oe = d - A * 65536, d = Ne + A + 65535, A = Math.floor(d / 65536), Ne = d - A * 65536, d = $e + A + 65535, A = Math.floor(d / 65536), $e = d - A * 65536, d = qe + A + 65535, A = Math.floor(d / 65536), qe = d - A * 65536, d = Pe + A + 65535, A = Math.floor(d / 65536), Pe = d - A * 65536, d = Fe + A + 65535, A = Math.floor(d / 65536), Fe = d - A * 65536, d = Se + A + 65535, A = Math.floor(d / 65536), Se = d - A * 65536, ae += A - 1 + 37 * (A - 1), B[0] = ae, B[1] = fe, B[2] = xe, B[3] = He, B[4] = ke, B[5] = je, B[6] = gt, B[7] = yt, B[8] = Me, B[9] = Oe, B[10] = Ne, B[11] = $e, B[12] = qe, B[13] = Pe, B[14] = Fe, B[15] = Se;
  }
  function b(B, q) {
    h(B, q, q);
  }
  function G(B, q) {
    const F = o();
    let d;
    for (d = 0; d < 16; d++)
      F[d] = q[d];
    for (d = 253; d >= 0; d--)
      b(F, F), d !== 2 && d !== 4 && h(F, F, q);
    for (d = 0; d < 16; d++)
      B[d] = F[d];
  }
  function W(B, q) {
    const F = o();
    let d;
    for (d = 0; d < 16; d++)
      F[d] = q[d];
    for (d = 250; d >= 0; d--)
      b(F, F), d !== 1 && h(F, F, q);
    for (d = 0; d < 16; d++)
      B[d] = F[d];
  }
  function ie(B, q) {
    const F = o(), d = o(), A = o(), ae = o(), fe = o(), xe = o(), He = o(), ke = o(), je = o();
    E(F, B[1], B[0]), E(je, q[1], q[0]), h(F, F, je), T(d, B[0], B[1]), T(je, q[0], q[1]), h(d, d, je), h(A, B[3], q[3]), h(A, A, p), h(ae, B[2], q[2]), T(ae, ae, ae), E(fe, d, F), E(xe, ae, A), T(He, ae, A), T(ke, d, F), h(B[0], fe, xe), h(B[1], ke, He), h(B[2], He, xe), h(B[3], fe, ke);
  }
  function ce(B, q, F) {
    for (let d = 0; d < 4; d++)
      H(B[d], q[d], F);
  }
  function de(B, q) {
    const F = o(), d = o(), A = o();
    G(A, q[2]), h(F, q[0], A), h(d, q[1], A), K(B, d), B[31] ^= j(F) << 7;
  }
  function w(B, q, F) {
    C(B[0], u), C(B[1], f), C(B[2], f), C(B[3], u);
    for (let d = 255; d >= 0; --d) {
      const A = F[d / 8 | 0] >> (d & 7) & 1;
      ce(B, q, A), ie(q, B), ie(B, B), ce(B, q, A);
    }
  }
  function P(B, q) {
    const F = [o(), o(), o(), o()];
    C(F[0], m), C(F[1], x), C(F[2], f), h(F[3], m, x), w(B, F, q);
  }
  function ee(B) {
    if (B.length !== r.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${r.SEED_LENGTH} bytes`);
    const q = (0, t.hash)(B);
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const F = new Uint8Array(32), d = [o(), o(), o(), o()];
    P(d, q), de(F, d);
    const A = new Uint8Array(64);
    return A.set(B), A.set(F, 32), {
      publicKey: F,
      secretKey: A
    };
  }
  r.generateKeyPairFromSeed = ee;
  function Q(B) {
    const q = (0, e.randomBytes)(32, B), F = ee(q);
    return (0, i.wipe)(q), F;
  }
  r.generateKeyPair = Q;
  function k(B) {
    if (B.length !== r.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${r.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(B.subarray(32));
  }
  r.extractPublicKeyFromSecretKey = k;
  const V = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function J(B, q) {
    let F, d, A, ae;
    for (d = 63; d >= 32; --d) {
      for (F = 0, A = d - 32, ae = d - 12; A < ae; ++A)
        q[A] += F - 16 * q[d] * V[A - (d - 32)], F = Math.floor((q[A] + 128) / 256), q[A] -= F * 256;
      q[A] += F, q[d] = 0;
    }
    for (F = 0, A = 0; A < 32; A++)
      q[A] += F - (q[31] >> 4) * V[A], F = q[A] >> 8, q[A] &= 255;
    for (A = 0; A < 32; A++)
      q[A] -= F * V[A];
    for (d = 0; d < 32; d++)
      q[d + 1] += q[d] >> 8, B[d] = q[d] & 255;
  }
  function re(B) {
    const q = new Float64Array(64);
    for (let F = 0; F < 64; F++)
      q[F] = B[F];
    for (let F = 0; F < 64; F++)
      B[F] = 0;
    J(B, q);
  }
  function me(B, q) {
    const F = new Float64Array(64), d = [o(), o(), o(), o()], A = (0, t.hash)(B.subarray(0, 32));
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const ae = new Uint8Array(64);
    ae.set(A.subarray(32), 32);
    const fe = new t.SHA512();
    fe.update(ae.subarray(32)), fe.update(q);
    const xe = fe.digest();
    fe.clean(), re(xe), P(d, xe), de(ae, d), fe.reset(), fe.update(ae.subarray(0, 32)), fe.update(B.subarray(32)), fe.update(q);
    const He = fe.digest();
    re(He);
    for (let ke = 0; ke < 32; ke++)
      F[ke] = xe[ke];
    for (let ke = 0; ke < 32; ke++)
      for (let je = 0; je < 32; je++)
        F[ke + je] += He[ke] * A[je];
    return J(ae.subarray(32), F), ae;
  }
  r.sign = me;
  function oe(B, q) {
    const F = o(), d = o(), A = o(), ae = o(), fe = o(), xe = o(), He = o();
    return C(B[2], f), O(B[1], q), b(A, B[1]), h(ae, A, y), E(A, A, B[2]), T(ae, B[2], ae), b(fe, ae), b(xe, fe), h(He, xe, fe), h(F, He, A), h(F, F, ae), W(F, F), h(F, F, A), h(F, F, ae), h(F, F, ae), h(B[0], F, ae), b(d, B[0]), h(d, d, ae), $(d, A) && h(B[0], B[0], S), b(d, B[0]), h(d, d, ae), $(d, A) ? -1 : (j(B[0]) === q[31] >> 7 && E(B[0], u, B[0]), h(B[3], B[0], B[1]), 0);
  }
  function we(B, q, F) {
    const d = new Uint8Array(32), A = [o(), o(), o(), o()], ae = [o(), o(), o(), o()];
    if (F.length !== r.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${r.SIGNATURE_LENGTH} bytes`);
    if (oe(ae, B))
      return !1;
    const fe = new t.SHA512();
    fe.update(F.subarray(0, 32)), fe.update(B), fe.update(q);
    const xe = fe.digest();
    return re(xe), w(A, ae, xe), P(ae, F.subarray(32)), ie(A, ae), de(d, A), !se(F, d);
  }
  r.verify = we;
  function le(B) {
    let q = [o(), o(), o(), o()];
    if (oe(q, B))
      throw new Error("Ed25519: invalid public key");
    let F = o(), d = o(), A = q[1];
    T(F, f, A), E(d, f, A), G(d, d), h(F, F, d);
    let ae = new Uint8Array(32);
    return K(ae, F), ae;
  }
  r.convertPublicKeyToX25519 = le;
  function _e(B) {
    const q = (0, t.hash)(B.subarray(0, 32));
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const F = new Uint8Array(q.subarray(0, 32));
    return (0, i.wipe)(q), F;
  }
  r.convertSecretKeyToX25519 = _e;
})(dh);
const ND = "EdDSA", $D = "JWT", ug = ".", hg = "base64url", FD = "utf8", LD = "utf8", jD = ":", UD = "did", MD = "key", wd = "base58btc", qD = "z", BD = "K36", HD = 32;
function sa(r) {
  return hr(mr(Rs(r), FD), hg);
}
function lg(r) {
  const e = mr(BD, wd), t = qD + hr(Su([e, r]), wd);
  return [UD, MD, t].join(jD);
}
function zD(r) {
  return hr(r, hg);
}
function KD(r) {
  return mr([sa(r.header), sa(r.payload)].join(ug), LD);
}
function kD(r) {
  return [
    sa(r.header),
    sa(r.payload),
    zD(r.signature)
  ].join(ug);
}
function Ed(r = qi.randomBytes(HD)) {
  return dh.generateKeyPairFromSeed(r);
}
async function VD(r, e, t, i, o = ve.fromMiliseconds(Date.now())) {
  const c = { alg: ND, typ: $D }, u = lg(i.publicKey), f = o + t, y = { iss: u, sub: r, aud: e, iat: o, exp: f }, p = KD({ header: c, payload: y }), m = dh.sign(i.secretKey, p);
  return kD({ header: c, payload: y, signature: m });
}
const GD = "PARSE_ERROR", WD = "INVALID_REQUEST", YD = "METHOD_NOT_FOUND", JD = "INVALID_PARAMS", fg = "INTERNAL_ERROR", ph = "SERVER_ERROR", QD = [-32700, -32600, -32601, -32602, -32603], xs = {
  [GD]: { code: -32700, message: "Parse error" },
  [WD]: { code: -32600, message: "Invalid Request" },
  [YD]: { code: -32601, message: "Method not found" },
  [JD]: { code: -32602, message: "Invalid params" },
  [fg]: { code: -32603, message: "Internal error" },
  [ph]: { code: -32e3, message: "Server error" }
}, dg = ph;
function XD(r) {
  return QD.includes(r);
}
function Dd(r) {
  return Object.keys(xs).includes(r) ? xs[r] : xs[dg];
}
function ZD(r) {
  const e = Object.values(xs).find((t) => t.code === r);
  return e || xs[dg];
}
function pg(r, e, t) {
  return r.message.includes("getaddrinfo ENOTFOUND") || r.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : r;
}
var gg = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Hu = function(r, e) {
  return Hu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var o in i)
      i.hasOwnProperty(o) && (t[o] = i[o]);
  }, Hu(r, e);
};
function eS(r, e) {
  Hu(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var zu = function() {
  return zu = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, zu.apply(this, arguments);
};
function tS(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(r); o < i.length; o++)
      e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]]);
  return t;
}
function rS(r, e, t, i) {
  var o = arguments.length, c = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(r, e, t, i);
  else
    for (var f = r.length - 1; f >= 0; f--)
      (u = r[f]) && (c = (o < 3 ? u(c) : o > 3 ? u(e, t, c) : u(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function nS(r, e) {
  return function(t, i) {
    e(t, i, r);
  };
}
function iS(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function sS(r, e, t, i) {
  function o(c) {
    return c instanceof t ? c : new t(function(u) {
      u(c);
    });
  }
  return new (t || (t = Promise))(function(c, u) {
    function f(m) {
      try {
        p(i.next(m));
      } catch (x) {
        u(x);
      }
    }
    function y(m) {
      try {
        p(i.throw(m));
      } catch (x) {
        u(x);
      }
    }
    function p(m) {
      m.done ? c(m.value) : o(m.value).then(f, y);
    }
    p((i = i.apply(r, e || [])).next());
  });
}
function oS(r, e) {
  var t = { label: 0, sent: function() {
    if (c[0] & 1)
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, i, o, c, u;
  return u = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function f(p) {
    return function(m) {
      return y([p, m]);
    };
  }
  function y(p) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, o && (c = p[0] & 2 ? o.return : p[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, p[1])).done)
          return c;
        switch (o = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, o = p[1], p = [0];
            continue;
          case 7:
            p = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              t.label = c[1], c = p;
              break;
            }
            if (c && t.label < c[2]) {
              t.label = c[2], t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(r, t);
      } catch (m) {
        p = [6, m], o = 0;
      } finally {
        i = c = 0;
      }
    if (p[0] & 5)
      throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function aS(r, e, t, i) {
  i === void 0 && (i = t), r[i] = e[t];
}
function cS(r, e) {
  for (var t in r)
    t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Ku(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function() {
        return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function yg(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), o, c = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = i.next()).done; )
      c.push(o.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      o && !o.done && (t = i.return) && t.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return c;
}
function uS() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(yg(arguments[e]));
  return r;
}
function hS() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], u = 0, f = c.length; u < f; u++, o++)
      i[o] = c[u];
  return i;
}
function Ns(r) {
  return this instanceof Ns ? (this.v = r, this) : new Ns(r);
}
function lS(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []), o, c = [];
  return o = {}, u("next"), u("throw"), u("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function u(S) {
    i[S] && (o[S] = function(C) {
      return new Promise(function(R, H) {
        c.push([S, C, R, H]) > 1 || f(S, C);
      });
    });
  }
  function f(S, C) {
    try {
      y(i[S](C));
    } catch (R) {
      x(c[0][3], R);
    }
  }
  function y(S) {
    S.value instanceof Ns ? Promise.resolve(S.value.v).then(p, m) : x(c[0][2], S);
  }
  function p(S) {
    f("next", S);
  }
  function m(S) {
    f("throw", S);
  }
  function x(S, C) {
    S(C), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function fS(r) {
  var e, t;
  return e = {}, i("next"), i("throw", function(o) {
    throw o;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(o, c) {
    e[o] = r[o] ? function(u) {
      return (t = !t) ? { value: Ns(r[o](u)), done: o === "return" } : c ? c(u) : u;
    } : c;
  }
}
function dS(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof Ku == "function" ? Ku(r) : r[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(c) {
    t[c] = r[c] && function(u) {
      return new Promise(function(f, y) {
        u = r[c](u), o(f, y, u.done, u.value);
      });
    };
  }
  function o(c, u, f, y) {
    Promise.resolve(y).then(function(p) {
      c({ value: p, done: f });
    }, u);
  }
}
function pS(r, e) {
  return Object.defineProperty ? Object.defineProperty(r, "raw", { value: e }) : r.raw = e, r;
}
function gS(r) {
  if (r && r.__esModule)
    return r;
  var e = {};
  if (r != null)
    for (var t in r)
      Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e.default = r, e;
}
function yS(r) {
  return r && r.__esModule ? r : { default: r };
}
function vS(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function _S(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const bS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return zu;
  },
  __asyncDelegator: fS,
  __asyncGenerator: lS,
  __asyncValues: dS,
  __await: Ns,
  __awaiter: sS,
  __classPrivateFieldGet: vS,
  __classPrivateFieldSet: _S,
  __createBinding: aS,
  __decorate: rS,
  __exportStar: cS,
  __extends: eS,
  __generator: oS,
  __importDefault: yS,
  __importStar: gS,
  __makeTemplateObject: pS,
  __metadata: iS,
  __param: nS,
  __read: yg,
  __rest: tS,
  __spread: uS,
  __spreadArrays: hS,
  __values: Ku
}, Symbol.toStringTag, { value: "Module" })), mS = /* @__PURE__ */ si(bS);
var vn = {}, Sd;
function wS() {
  if (Sd)
    return vn;
  Sd = 1, Object.defineProperty(vn, "__esModule", { value: !0 }), vn.isBrowserCryptoAvailable = vn.getSubtleCrypto = vn.getBrowerCrypto = void 0;
  function r() {
    return (br == null ? void 0 : br.crypto) || (br == null ? void 0 : br.msCrypto) || {};
  }
  vn.getBrowerCrypto = r;
  function e() {
    const i = r();
    return i.subtle || i.webkitSubtle;
  }
  vn.getSubtleCrypto = e;
  function t() {
    return !!r() && !!e();
  }
  return vn.isBrowserCryptoAvailable = t, vn;
}
var _n = {}, xd;
function ES() {
  if (xd)
    return _n;
  xd = 1, Object.defineProperty(_n, "__esModule", { value: !0 }), _n.isBrowser = _n.isNode = _n.isReactNative = void 0;
  function r() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  _n.isReactNative = r;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  _n.isNode = e;
  function t() {
    return !r() && !e();
  }
  return _n.isBrowser = t, _n;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = mS;
  e.__exportStar(wS(), r), e.__exportStar(ES(), r);
})(gg);
function gh(r = 3) {
  const e = Date.now() * Math.pow(10, r), t = Math.floor(Math.random() * Math.pow(10, r));
  return e + t;
}
function vg(r = 6) {
  return BigInt(gh(r));
}
function Mi(r, e, t) {
  return {
    id: t || gh(),
    jsonrpc: "2.0",
    method: r,
    params: e
  };
}
function yh(r, e) {
  return {
    id: r,
    jsonrpc: "2.0",
    result: e
  };
}
function ba(r, e, t) {
  return {
    id: r,
    jsonrpc: "2.0",
    error: DS(e, t)
  };
}
function DS(r, e) {
  return typeof r > "u" ? Dd(fg) : (typeof r == "string" && (r = Object.assign(Object.assign({}, Dd(ph)), { message: r })), typeof e < "u" && (r.data = e), XD(r.code) && (r = ZD(r.code)), r);
}
class SS {
}
class xS extends SS {
  constructor() {
    super();
  }
}
class OS extends xS {
  constructor(e) {
    super();
  }
}
const IS = "^https?:", PS = "^wss?:";
function CS(r) {
  const e = r.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function _g(r, e) {
  const t = CS(r);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function Od(r) {
  return _g(r, IS);
}
function Id(r) {
  return _g(r, PS);
}
function AS(r) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(r);
}
function bg(r) {
  return typeof r == "object" && "id" in r && "jsonrpc" in r && r.jsonrpc === "2.0";
}
function vh(r) {
  return bg(r) && "method" in r;
}
function ma(r) {
  return bg(r) && (wn(r) || Wr(r));
}
function wn(r) {
  return "result" in r;
}
function Wr(r) {
  return "error" in r;
}
class En extends OS {
  constructor(e) {
    super(e), this.events = new Pr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(Mi(e.method, e.params || [], e.id || vg().toString()), t);
  }
  async requestStrict(e, t) {
    return new Promise(async (i, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (c) {
          o(c);
        }
      this.events.on(`${e.id}`, (c) => {
        Wr(c) ? o(c.error) : i(c.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (c) {
        o(c);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), ma(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
      type: e.method,
      data: e.params
    });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const TS = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), RS = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Pd = (r) => r.split("?")[0], Cd = 10, NS = TS();
class $S {
  constructor(e) {
    if (this.url = e, this.events = new Pr.EventEmitter(), this.registering = !1, !Id(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (i) => {
        this.onClose(i), e();
      }, this.socket.close();
    });
  }
  async send(e, t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Rs(e));
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  register(e = this.url) {
    if (!Id(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((i, o) => {
        this.events.once("register_error", (c) => {
          this.resetMaxListeners(), o(c);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return o(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((t, i) => {
      const o = gg.isReactNative() ? void 0 : { rejectUnauthorized: !AS(e) }, c = new NS(e, [], o);
      RS() ? c.onerror = (u) => {
        const f = u;
        i(this.emitError(f.error));
      } : c.on("error", (u) => {
        i(this.emitError(u));
      }), c.onopen = () => {
        this.onOpen(c), t(c);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t = typeof e.data == "string" ? fh(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t), o = i.message || i.toString(), c = ba(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return pg(e, Pd(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Cd && this.events.setMaxListeners(Cd);
  }
  emitError(e) {
    const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Pd(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
}
var oa = { exports: {} };
oa.exports;
(function(r, e) {
  var t = 200, i = "__lodash_hash_undefined__", o = 1, c = 2, u = 9007199254740991, f = "[object Arguments]", y = "[object Array]", p = "[object AsyncFunction]", m = "[object Boolean]", x = "[object Date]", S = "[object Error]", C = "[object Function]", R = "[object GeneratorFunction]", H = "[object Map]", K = "[object Number]", se = "[object Null]", $ = "[object Object]", j = "[object Promise]", O = "[object Proxy]", T = "[object RegExp]", E = "[object Set]", h = "[object String]", b = "[object Symbol]", G = "[object Undefined]", W = "[object WeakMap]", ie = "[object ArrayBuffer]", ce = "[object DataView]", de = "[object Float32Array]", w = "[object Float64Array]", P = "[object Int8Array]", ee = "[object Int16Array]", Q = "[object Int32Array]", k = "[object Uint8Array]", V = "[object Uint8ClampedArray]", J = "[object Uint16Array]", re = "[object Uint32Array]", me = /[\\^$.*+?()[\]{}|]/g, oe = /^\[object .+?Constructor\]$/, we = /^(?:0|[1-9]\d*)$/, le = {};
  le[de] = le[w] = le[P] = le[ee] = le[Q] = le[k] = le[V] = le[J] = le[re] = !0, le[f] = le[y] = le[ie] = le[m] = le[ce] = le[x] = le[S] = le[C] = le[H] = le[K] = le[$] = le[T] = le[E] = le[h] = le[W] = !1;
  var _e = typeof br == "object" && br && br.Object === Object && br, B = typeof self == "object" && self && self.Object === Object && self, q = _e || B || Function("return this")(), F = e && !e.nodeType && e, d = F && !0 && r && !r.nodeType && r, A = d && d.exports === F, ae = A && _e.process, fe = function() {
    try {
      return ae && ae.binding && ae.binding("util");
    } catch {
    }
  }(), xe = fe && fe.isTypedArray;
  function He(D, L) {
    for (var te = -1, pe = D == null ? 0 : D.length, ct = 0, Te = []; ++te < pe; ) {
      var dt = D[te];
      L(dt, te, D) && (Te[ct++] = dt);
    }
    return Te;
  }
  function ke(D, L) {
    for (var te = -1, pe = L.length, ct = D.length; ++te < pe; )
      D[ct + te] = L[te];
    return D;
  }
  function je(D, L) {
    for (var te = -1, pe = D == null ? 0 : D.length; ++te < pe; )
      if (L(D[te], te, D))
        return !0;
    return !1;
  }
  function gt(D, L) {
    for (var te = -1, pe = Array(D); ++te < D; )
      pe[te] = L(te);
    return pe;
  }
  function yt(D) {
    return function(L) {
      return D(L);
    };
  }
  function Me(D, L) {
    return D.has(L);
  }
  function Oe(D, L) {
    return D == null ? void 0 : D[L];
  }
  function Ne(D) {
    var L = -1, te = Array(D.size);
    return D.forEach(function(pe, ct) {
      te[++L] = [ct, pe];
    }), te;
  }
  function $e(D, L) {
    return function(te) {
      return D(L(te));
    };
  }
  function qe(D) {
    var L = -1, te = Array(D.size);
    return D.forEach(function(pe) {
      te[++L] = pe;
    }), te;
  }
  var Pe = Array.prototype, Fe = Function.prototype, Se = Object.prototype, Ce = q["__core-js_shared__"], ze = Fe.toString, Ie = Se.hasOwnProperty, Ve = function() {
    var D = /[^.]+$/.exec(Ce && Ce.keys && Ce.keys.IE_PROTO || "");
    return D ? "Symbol(src)_1." + D : "";
  }(), We = Se.toString, et = RegExp(
    "^" + ze.call(Ie).replace(me, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), tt = A ? q.Buffer : void 0, Je = q.Symbol, tr = q.Uint8Array, lr = Se.propertyIsEnumerable, Yr = Pe.splice, rr = Je ? Je.toStringTag : void 0, sn = Object.getOwnPropertySymbols, Sn = tt ? tt.isBuffer : void 0, qn = $e(Object.keys, Object), Dt = wr(q, "DataView"), vt = wr(q, "Map"), St = wr(q, "Promise"), xt = wr(q, "Set"), wt = wr(q, "WeakMap"), _t = wr(Object, "create"), Ft = an(Dt), Lt = an(vt), Ot = an(St), jt = an(xt), It = an(wt), At = Je ? Je.prototype : void 0, Pt = At ? At.valueOf : void 0;
  function lt(D) {
    var L = -1, te = D == null ? 0 : D.length;
    for (this.clear(); ++L < te; ) {
      var pe = D[L];
      this.set(pe[0], pe[1]);
    }
  }
  function Ut() {
    this.__data__ = _t ? _t(null) : {}, this.size = 0;
  }
  function Mt(D) {
    var L = this.has(D) && delete this.__data__[D];
    return this.size -= L ? 1 : 0, L;
  }
  function Da(D) {
    var L = this.__data__;
    if (_t) {
      var te = L[D];
      return te === i ? void 0 : te;
    }
    return Ie.call(L, D) ? L[D] : void 0;
  }
  function Sa(D) {
    var L = this.__data__;
    return _t ? L[D] !== void 0 : Ie.call(L, D);
  }
  function xa(D, L) {
    var te = this.__data__;
    return this.size += this.has(D) ? 0 : 1, te[D] = _t && L === void 0 ? i : L, this;
  }
  lt.prototype.clear = Ut, lt.prototype.delete = Mt, lt.prototype.get = Da, lt.prototype.has = Sa, lt.prototype.set = xa;
  function Ar(D) {
    var L = -1, te = D == null ? 0 : D.length;
    for (this.clear(); ++L < te; ) {
      var pe = D[L];
      this.set(pe[0], pe[1]);
    }
  }
  function Oa() {
    this.__data__ = [], this.size = 0;
  }
  function Ia(D) {
    var L = this.__data__, te = Bn(L, D);
    if (te < 0)
      return !1;
    var pe = L.length - 1;
    return te == pe ? L.pop() : Yr.call(L, te, 1), --this.size, !0;
  }
  function Pa(D) {
    var L = this.__data__, te = Bn(L, D);
    return te < 0 ? void 0 : L[te][1];
  }
  function Ca(D) {
    return Bn(this.__data__, D) > -1;
  }
  function Aa(D, L) {
    var te = this.__data__, pe = Bn(te, D);
    return pe < 0 ? (++this.size, te.push([D, L])) : te[pe][1] = L, this;
  }
  Ar.prototype.clear = Oa, Ar.prototype.delete = Ia, Ar.prototype.get = Pa, Ar.prototype.has = Ca, Ar.prototype.set = Aa;
  function on(D) {
    var L = -1, te = D == null ? 0 : D.length;
    for (this.clear(); ++L < te; ) {
      var pe = D[L];
      this.set(pe[0], pe[1]);
    }
  }
  function hi() {
    this.size = 0, this.__data__ = {
      hash: new lt(),
      map: new (vt || Ar)(),
      string: new lt()
    };
  }
  function Ta(D) {
    var L = xn(this, D).delete(D);
    return this.size -= L ? 1 : 0, L;
  }
  function li(D) {
    return xn(this, D).get(D);
  }
  function Ra(D) {
    return xn(this, D).has(D);
  }
  function Na(D, L) {
    var te = xn(this, D), pe = te.size;
    return te.set(D, L), this.size += te.size == pe ? 0 : 1, this;
  }
  on.prototype.clear = hi, on.prototype.delete = Ta, on.prototype.get = li, on.prototype.has = Ra, on.prototype.set = Na;
  function fi(D) {
    var L = -1, te = D == null ? 0 : D.length;
    for (this.__data__ = new on(); ++L < te; )
      this.add(D[L]);
  }
  function Hs(D) {
    return this.__data__.set(D, i), this;
  }
  function zs(D) {
    return this.__data__.has(D);
  }
  fi.prototype.add = fi.prototype.push = Hs, fi.prototype.has = zs;
  function qr(D) {
    var L = this.__data__ = new Ar(D);
    this.size = L.size;
  }
  function $a() {
    this.__data__ = new Ar(), this.size = 0;
  }
  function Fa(D) {
    var L = this.__data__, te = L.delete(D);
    return this.size = L.size, te;
  }
  function La(D) {
    return this.__data__.get(D);
  }
  function ja(D) {
    return this.__data__.has(D);
  }
  function Ks(D, L) {
    var te = this.__data__;
    if (te instanceof Ar) {
      var pe = te.__data__;
      if (!vt || pe.length < t - 1)
        return pe.push([D, L]), this.size = ++te.size, this;
      te = this.__data__ = new on(pe);
    }
    return te.set(D, L), this.size = te.size, this;
  }
  qr.prototype.clear = $a, qr.prototype.delete = Fa, qr.prototype.get = La, qr.prototype.has = ja, qr.prototype.set = Ks;
  function ks(D, L) {
    var te = gi(D), pe = !te && no(D), ct = !te && !pe && Vi(D), Te = !te && !pe && !ct && oo(D), dt = te || pe || ct || Te, qt = dt ? gt(D.length, String) : [], Qe = qt.length;
    for (var ut in D)
      (L || Ie.call(D, ut)) && !(dt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ut == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ct && (ut == "offset" || ut == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Te && (ut == "buffer" || ut == "byteLength" || ut == "byteOffset") || // Skip index properties.
      Xs(ut, Qe))) && qt.push(ut);
    return qt;
  }
  function Bn(D, L) {
    for (var te = D.length; te--; )
      if (ro(D[te][0], L))
        return te;
    return -1;
  }
  function Ki(D, L, te) {
    var pe = L(D);
    return gi(D) ? pe : ke(pe, te(D));
  }
  function Hn(D) {
    return D == null ? D === void 0 ? G : se : rr && rr in Object(D) ? Js(D) : qa(D);
  }
  function ki(D) {
    return Kn(D) && Hn(D) == f;
  }
  function zn(D, L, te, pe, ct) {
    return D === L ? !0 : D == null || L == null || !Kn(D) && !Kn(L) ? D !== D && L !== L : Vs(D, L, te, pe, zn, ct);
  }
  function Vs(D, L, te, pe, ct, Te) {
    var dt = gi(D), qt = gi(L), Qe = dt ? y : Jr(D), ut = qt ? y : Jr(L);
    Qe = Qe == f ? $ : Qe, ut = ut == f ? $ : ut;
    var Tt = Qe == $, fr = ut == $, Bt = Qe == ut;
    if (Bt && Vi(D)) {
      if (!Vi(L))
        return !1;
      dt = !0, Tt = !1;
    }
    if (Bt && !Tt)
      return Te || (Te = new qr()), dt || oo(D) ? di(D, L, te, pe, ct, Te) : Ma(D, L, Qe, te, pe, ct, Te);
    if (!(te & o)) {
      var pt = Tt && Ie.call(D, "__wrapped__"), nr = fr && Ie.call(L, "__wrapped__");
      if (pt || nr) {
        var Br = pt ? D.value() : D, Tr = nr ? L.value() : L;
        return Te || (Te = new qr()), ct(Br, Tr, te, pe, Te);
      }
    }
    return Bt ? (Te || (Te = new qr()), Ys(D, L, te, pe, ct, Te)) : !1;
  }
  function Ua(D) {
    if (!so(D) || eo(D))
      return !1;
    var L = yi(D) ? et : oe;
    return L.test(an(D));
  }
  function Gs(D) {
    return Kn(D) && io(D.length) && !!le[Hn(D)];
  }
  function Ws(D) {
    if (!to(D))
      return qn(D);
    var L = [];
    for (var te in Object(D))
      Ie.call(D, te) && te != "constructor" && L.push(te);
    return L;
  }
  function di(D, L, te, pe, ct, Te) {
    var dt = te & o, qt = D.length, Qe = L.length;
    if (qt != Qe && !(dt && Qe > qt))
      return !1;
    var ut = Te.get(D);
    if (ut && Te.get(L))
      return ut == L;
    var Tt = -1, fr = !0, Bt = te & c ? new fi() : void 0;
    for (Te.set(D, L), Te.set(L, D); ++Tt < qt; ) {
      var pt = D[Tt], nr = L[Tt];
      if (pe)
        var Br = dt ? pe(nr, pt, Tt, L, D, Te) : pe(pt, nr, Tt, D, L, Te);
      if (Br !== void 0) {
        if (Br)
          continue;
        fr = !1;
        break;
      }
      if (Bt) {
        if (!je(L, function(Tr, Qr) {
          if (!Me(Bt, Qr) && (pt === Tr || ct(pt, Tr, te, pe, Te)))
            return Bt.push(Qr);
        })) {
          fr = !1;
          break;
        }
      } else if (!(pt === nr || ct(pt, nr, te, pe, Te))) {
        fr = !1;
        break;
      }
    }
    return Te.delete(D), Te.delete(L), fr;
  }
  function Ma(D, L, te, pe, ct, Te, dt) {
    switch (te) {
      case ce:
        if (D.byteLength != L.byteLength || D.byteOffset != L.byteOffset)
          return !1;
        D = D.buffer, L = L.buffer;
      case ie:
        return !(D.byteLength != L.byteLength || !Te(new tr(D), new tr(L)));
      case m:
      case x:
      case K:
        return ro(+D, +L);
      case S:
        return D.name == L.name && D.message == L.message;
      case T:
      case h:
        return D == L + "";
      case H:
        var qt = Ne;
      case E:
        var Qe = pe & o;
        if (qt || (qt = qe), D.size != L.size && !Qe)
          return !1;
        var ut = dt.get(D);
        if (ut)
          return ut == L;
        pe |= c, dt.set(D, L);
        var Tt = di(qt(D), qt(L), pe, ct, Te, dt);
        return dt.delete(D), Tt;
      case b:
        if (Pt)
          return Pt.call(D) == Pt.call(L);
    }
    return !1;
  }
  function Ys(D, L, te, pe, ct, Te) {
    var dt = te & o, qt = pi(D), Qe = qt.length, ut = pi(L), Tt = ut.length;
    if (Qe != Tt && !dt)
      return !1;
    for (var fr = Qe; fr--; ) {
      var Bt = qt[fr];
      if (!(dt ? Bt in L : Ie.call(L, Bt)))
        return !1;
    }
    var pt = Te.get(D);
    if (pt && Te.get(L))
      return pt == L;
    var nr = !0;
    Te.set(D, L), Te.set(L, D);
    for (var Br = dt; ++fr < Qe; ) {
      Bt = qt[fr];
      var Tr = D[Bt], Qr = L[Bt];
      if (pe)
        var Gi = dt ? pe(Qr, Tr, Bt, L, D, Te) : pe(Tr, Qr, Bt, D, L, Te);
      if (!(Gi === void 0 ? Tr === Qr || ct(Tr, Qr, te, pe, Te) : Gi)) {
        nr = !1;
        break;
      }
      Br || (Br = Bt == "constructor");
    }
    if (nr && !Br) {
      var kn = D.constructor, kt = L.constructor;
      kn != kt && "constructor" in D && "constructor" in L && !(typeof kn == "function" && kn instanceof kn && typeof kt == "function" && kt instanceof kt) && (nr = !1);
    }
    return Te.delete(D), Te.delete(L), nr;
  }
  function pi(D) {
    return Ki(D, za, Qs);
  }
  function xn(D, L) {
    var te = D.__data__;
    return Zs(L) ? te[typeof L == "string" ? "string" : "hash"] : te.map;
  }
  function wr(D, L) {
    var te = Oe(D, L);
    return Ua(te) ? te : void 0;
  }
  function Js(D) {
    var L = Ie.call(D, rr), te = D[rr];
    try {
      D[rr] = void 0;
      var pe = !0;
    } catch {
    }
    var ct = We.call(D);
    return pe && (L ? D[rr] = te : delete D[rr]), ct;
  }
  var Qs = sn ? function(D) {
    return D == null ? [] : (D = Object(D), He(sn(D), function(L) {
      return lr.call(D, L);
    }));
  } : at, Jr = Hn;
  (Dt && Jr(new Dt(new ArrayBuffer(1))) != ce || vt && Jr(new vt()) != H || St && Jr(St.resolve()) != j || xt && Jr(new xt()) != E || wt && Jr(new wt()) != W) && (Jr = function(D) {
    var L = Hn(D), te = L == $ ? D.constructor : void 0, pe = te ? an(te) : "";
    if (pe)
      switch (pe) {
        case Ft:
          return ce;
        case Lt:
          return H;
        case Ot:
          return j;
        case jt:
          return E;
        case It:
          return W;
      }
    return L;
  });
  function Xs(D, L) {
    return L = L ?? u, !!L && (typeof D == "number" || we.test(D)) && D > -1 && D % 1 == 0 && D < L;
  }
  function Zs(D) {
    var L = typeof D;
    return L == "string" || L == "number" || L == "symbol" || L == "boolean" ? D !== "__proto__" : D === null;
  }
  function eo(D) {
    return !!Ve && Ve in D;
  }
  function to(D) {
    var L = D && D.constructor, te = typeof L == "function" && L.prototype || Se;
    return D === te;
  }
  function qa(D) {
    return We.call(D);
  }
  function an(D) {
    if (D != null) {
      try {
        return ze.call(D);
      } catch {
      }
      try {
        return D + "";
      } catch {
      }
    }
    return "";
  }
  function ro(D, L) {
    return D === L || D !== D && L !== L;
  }
  var no = ki(function() {
    return arguments;
  }()) ? ki : function(D) {
    return Kn(D) && Ie.call(D, "callee") && !lr.call(D, "callee");
  }, gi = Array.isArray;
  function Ba(D) {
    return D != null && io(D.length) && !yi(D);
  }
  var Vi = Sn || st;
  function Ha(D, L) {
    return zn(D, L);
  }
  function yi(D) {
    if (!so(D))
      return !1;
    var L = Hn(D);
    return L == C || L == R || L == p || L == O;
  }
  function io(D) {
    return typeof D == "number" && D > -1 && D % 1 == 0 && D <= u;
  }
  function so(D) {
    var L = typeof D;
    return D != null && (L == "object" || L == "function");
  }
  function Kn(D) {
    return D != null && typeof D == "object";
  }
  var oo = xe ? yt(xe) : Gs;
  function za(D) {
    return Ba(D) ? ks(D) : Ws(D);
  }
  function at() {
    return [];
  }
  function st() {
    return !1;
  }
  r.exports = Ha;
})(oa, oa.exports);
var FS = oa.exports;
const LS = /* @__PURE__ */ Xu(FS);
function jS(r, e) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
    t[i] = 255;
  for (var o = 0; o < r.length; o++) {
    var c = r.charAt(o), u = c.charCodeAt(0);
    if (t[u] !== 255)
      throw new TypeError(c + " is ambiguous");
    t[u] = o;
  }
  var f = r.length, y = r.charAt(0), p = Math.log(f) / Math.log(256), m = Math.log(256) / Math.log(f);
  function x(R) {
    if (R instanceof Uint8Array || (ArrayBuffer.isView(R) ? R = new Uint8Array(R.buffer, R.byteOffset, R.byteLength) : Array.isArray(R) && (R = Uint8Array.from(R))), !(R instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (R.length === 0)
      return "";
    for (var H = 0, K = 0, se = 0, $ = R.length; se !== $ && R[se] === 0; )
      se++, H++;
    for (var j = ($ - se) * m + 1 >>> 0, O = new Uint8Array(j); se !== $; ) {
      for (var T = R[se], E = 0, h = j - 1; (T !== 0 || E < K) && h !== -1; h--, E++)
        T += 256 * O[h] >>> 0, O[h] = T % f >>> 0, T = T / f >>> 0;
      if (T !== 0)
        throw new Error("Non-zero carry");
      K = E, se++;
    }
    for (var b = j - K; b !== j && O[b] === 0; )
      b++;
    for (var G = y.repeat(H); b < j; ++b)
      G += r.charAt(O[b]);
    return G;
  }
  function S(R) {
    if (typeof R != "string")
      throw new TypeError("Expected String");
    if (R.length === 0)
      return new Uint8Array();
    var H = 0;
    if (R[H] !== " ") {
      for (var K = 0, se = 0; R[H] === y; )
        K++, H++;
      for (var $ = (R.length - H) * p + 1 >>> 0, j = new Uint8Array($); R[H]; ) {
        var O = t[R.charCodeAt(H)];
        if (O === 255)
          return;
        for (var T = 0, E = $ - 1; (O !== 0 || T < se) && E !== -1; E--, T++)
          O += f * j[E] >>> 0, j[E] = O % 256 >>> 0, O = O / 256 >>> 0;
        if (O !== 0)
          throw new Error("Non-zero carry");
        se = T, H++;
      }
      if (R[H] !== " ") {
        for (var h = $ - se; h !== $ && j[h] === 0; )
          h++;
        for (var b = new Uint8Array(K + ($ - h)), G = K; h !== $; )
          b[G++] = j[h++];
        return b;
      }
    }
  }
  function C(R) {
    var H = S(R);
    if (H)
      return H;
    throw new Error(`Non-${e} character`);
  }
  return { encode: x, decodeUnsafe: S, decode: C };
}
var US = jS, MS = US;
const mg = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
    return r;
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, qS = (r) => new TextEncoder().encode(r), BS = (r) => new TextDecoder().decode(r);
class HS {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class zS {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return wg(this, e);
  }
}
class KS {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return wg(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const wg = (r, e) => new KS({ ...r.decoders || { [r.prefix]: r }, ...e.decoders || { [e.prefix]: e } });
class kS {
  constructor(e, t, i, o) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = o, this.encoder = new HS(e, t, i), this.decoder = new zS(e, t, o);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const wa = ({ name: r, prefix: e, encode: t, decode: i }) => new kS(r, e, t, i), Bs = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: o } = MS(t, e);
  return wa({ prefix: r, name: e, encode: i, decode: (c) => mg(o(c)) });
}, VS = (r, e, t, i) => {
  const o = {};
  for (let m = 0; m < e.length; ++m)
    o[e[m]] = m;
  let c = r.length;
  for (; r[c - 1] === "="; )
    --c;
  const u = new Uint8Array(c * t / 8 | 0);
  let f = 0, y = 0, p = 0;
  for (let m = 0; m < c; ++m) {
    const x = o[r[m]];
    if (x === void 0)
      throw new SyntaxError(`Non-${i} character`);
    y = y << t | x, f += t, f >= 8 && (f -= 8, u[p++] = 255 & y >> f);
  }
  if (f >= t || 255 & y << 8 - f)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, GS = (r, e, t) => {
  const i = e[e.length - 1] === "=", o = (1 << t) - 1;
  let c = "", u = 0, f = 0;
  for (let y = 0; y < r.length; ++y)
    for (f = f << 8 | r[y], u += 8; u > t; )
      u -= t, c += e[o & f >> u];
  if (u && (c += e[o & f << t - u]), i)
    for (; c.length * t & 7; )
      c += "=";
  return c;
}, Jt = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => wa({ prefix: e, name: r, encode(o) {
  return GS(o, i, t);
}, decode(o) {
  return VS(o, i, t, r);
} }), WS = wa({ prefix: "\0", name: "identity", encode: (r) => BS(r), decode: (r) => qS(r) });
var YS = Object.freeze({ __proto__: null, identity: WS });
const JS = Jt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var QS = Object.freeze({ __proto__: null, base2: JS });
const XS = Jt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ZS = Object.freeze({ __proto__: null, base8: XS });
const e5 = Bs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var t5 = Object.freeze({ __proto__: null, base10: e5 });
const r5 = Jt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), n5 = Jt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var i5 = Object.freeze({ __proto__: null, base16: r5, base16upper: n5 });
const s5 = Jt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), o5 = Jt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), a5 = Jt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), c5 = Jt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), u5 = Jt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), h5 = Jt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), l5 = Jt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), f5 = Jt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), d5 = Jt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var p5 = Object.freeze({ __proto__: null, base32: s5, base32upper: o5, base32pad: a5, base32padupper: c5, base32hex: u5, base32hexupper: h5, base32hexpad: l5, base32hexpadupper: f5, base32z: d5 });
const g5 = Bs({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), y5 = Bs({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var v5 = Object.freeze({ __proto__: null, base36: g5, base36upper: y5 });
const _5 = Bs({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), b5 = Bs({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var m5 = Object.freeze({ __proto__: null, base58btc: _5, base58flickr: b5 });
const w5 = Jt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), E5 = Jt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), D5 = Jt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), S5 = Jt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var x5 = Object.freeze({ __proto__: null, base64: w5, base64pad: E5, base64url: D5, base64urlpad: S5 });
const Eg = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), O5 = Eg.reduce((r, e, t) => (r[t] = e, r), []), I5 = Eg.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function P5(r) {
  return r.reduce((e, t) => (e += O5[t], e), "");
}
function C5(r) {
  const e = [];
  for (const t of r) {
    const i = I5[t.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const A5 = wa({ prefix: "🚀", name: "base256emoji", encode: P5, decode: C5 });
var T5 = Object.freeze({ __proto__: null, base256emoji: A5 }), R5 = Dg, Ad = 128, N5 = 127, $5 = ~N5, F5 = Math.pow(2, 31);
function Dg(r, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; r >= F5; )
    e[t++] = r & 255 | Ad, r /= 128;
  for (; r & $5; )
    e[t++] = r & 255 | Ad, r >>>= 7;
  return e[t] = r | 0, Dg.bytes = t - i + 1, e;
}
var L5 = ku, j5 = 128, Td = 127;
function ku(r, i) {
  var t = 0, i = i || 0, o = 0, c = i, u, f = r.length;
  do {
    if (c >= f)
      throw ku.bytes = 0, new RangeError("Could not decode varint");
    u = r[c++], t += o < 28 ? (u & Td) << o : (u & Td) * Math.pow(2, o), o += 7;
  } while (u >= j5);
  return ku.bytes = c - i, t;
}
var U5 = Math.pow(2, 7), M5 = Math.pow(2, 14), q5 = Math.pow(2, 21), B5 = Math.pow(2, 28), H5 = Math.pow(2, 35), z5 = Math.pow(2, 42), K5 = Math.pow(2, 49), k5 = Math.pow(2, 56), V5 = Math.pow(2, 63), G5 = function(r) {
  return r < U5 ? 1 : r < M5 ? 2 : r < q5 ? 3 : r < B5 ? 4 : r < H5 ? 5 : r < z5 ? 6 : r < K5 ? 7 : r < k5 ? 8 : r < V5 ? 9 : 10;
}, W5 = { encode: R5, decode: L5, encodingLength: G5 }, Sg = W5;
const Rd = (r, e, t = 0) => (Sg.encode(r, e, t), e), Nd = (r) => Sg.encodingLength(r), Vu = (r, e) => {
  const t = e.byteLength, i = Nd(r), o = i + Nd(t), c = new Uint8Array(o + t);
  return Rd(r, c, 0), Rd(t, c, i), c.set(e, o), new Y5(r, t, e, c);
};
class Y5 {
  constructor(e, t, i, o) {
    this.code = e, this.size = t, this.digest = i, this.bytes = o;
  }
}
const xg = ({ name: r, code: e, encode: t }) => new J5(r, e, t);
class J5 {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? Vu(this.code, t) : t.then((i) => Vu(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Og = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)), Q5 = xg({ name: "sha2-256", code: 18, encode: Og("SHA-256") }), X5 = xg({ name: "sha2-512", code: 19, encode: Og("SHA-512") });
var Z5 = Object.freeze({ __proto__: null, sha256: Q5, sha512: X5 });
const Ig = 0, ex = "identity", Pg = mg, tx = (r) => Vu(Ig, Pg(r)), rx = { code: Ig, name: ex, encode: Pg, digest: tx };
var nx = Object.freeze({ __proto__: null, identity: rx });
new TextEncoder(), new TextDecoder();
const $d = { ...YS, ...QS, ...ZS, ...t5, ...i5, ...p5, ...v5, ...m5, ...x5, ...T5 };
({ ...Z5, ...nx });
function Cg(r) {
  return globalThis.Buffer != null ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r;
}
function ix(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Cg(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r);
}
function Ag(r, e, t, i) {
  return { name: r, prefix: e, encoder: { name: r, prefix: e, encode: t }, decoder: { decode: i } };
}
const Fd = Ag("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), au = Ag("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = ix(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
}), sx = { utf8: Fd, "utf-8": Fd, hex: $d.base16, latin1: au, ascii: au, binary: au, ...$d };
function ox(r, e = "utf8") {
  const t = sx[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Cg(globalThis.Buffer.from(r, "utf-8")) : t.decoder.decode(`${t.prefix}${r}`);
}
const Tg = "wc", ax = 2, _h = "core", Ln = `${Tg}@2:${_h}:`, cx = { name: _h, logger: "error" }, ux = { database: ":memory:" }, hx = "crypto", Ld = "client_ed25519_seed", lx = ve.ONE_DAY, fx = "keychain", dx = "0.3", px = "messages", gx = "0.3", yx = ve.SIX_HOURS, vx = "publisher", Rg = "irn", _x = "error", Ng = "wss://relay.walletconnect.com", jd = "wss://relay.walletconnect.org", bx = "relayer", er = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, mx = "_subscription", bn = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, wx = ve.ONE_SECOND, Ex = "2.10.2", Dx = 1e4, Sx = "0.3", xx = "WALLETCONNECT_CLIENT_ID", Vr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Ox = "subscription", Ix = "0.3", Px = ve.FIVE_SECONDS * 1e3, Cx = "pairing", Ax = "0.3", ys = { wc_pairingDelete: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 } } }, Es = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, rn = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Tx = "history", Rx = "0.3", Nx = "expirer", Mr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, $x = "0.3", cu = "verify-api", ea = "https://verify.walletconnect.com", Ud = "https://verify.walletconnect.org";
class Fx {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = fx, this.version = dx, this.initialized = !1, this.storagePrefix = Ln, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, o) => {
      this.isInitialized(), this.keychain.set(i, o), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const o = this.keychain.get(i);
      if (typeof o > "u") {
        const { message: c } = he("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(c);
      }
      return o;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = Ze.generateChildLogger(t, this.name);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Wp(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Yp(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Lx {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.name = hx, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o)), this.getClientId = async () => {
      this.isInitialized();
      const o = await this.getClientSeed(), c = Ed(o);
      return lg(c.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const o = j3();
      return this.setPrivateKey(o.publicKey, o.privateKey);
    }, this.signJWT = async (o) => {
      this.isInitialized();
      const c = await this.getClientSeed(), u = Ed(c), f = Tu();
      return await VD(f, o, lx, u);
    }, this.generateSharedKey = (o, c, u) => {
      this.isInitialized();
      const f = this.getPrivateKey(o), y = U3(f, c);
      return this.setSymKey(y, u);
    }, this.setSymKey = async (o, c) => {
      this.isInitialized();
      const u = c || M3(o);
      return await this.keychain.set(u, o), u;
    }, this.deleteKeyPair = async (o) => {
      this.isInitialized(), await this.keychain.del(o);
    }, this.deleteSymKey = async (o) => {
      this.isInitialized(), await this.keychain.del(o);
    }, this.encode = async (o, c, u) => {
      this.isInitialized();
      const f = Gp(u), y = Rs(c);
      if (Jf(f)) {
        const S = f.senderPublicKey, C = f.receiverPublicKey;
        o = await this.generateSharedKey(S, C);
      }
      const p = this.getSymKey(o), { type: m, senderPublicKey: x } = f;
      return B3({ type: m, symKey: p, message: y, senderPublicKey: x });
    }, this.decode = async (o, c, u) => {
      this.isInitialized();
      const f = K3(c, u);
      if (Jf(f)) {
        const y = f.receiverPublicKey, p = f.senderPublicKey;
        o = await this.generateSharedKey(y, p);
      }
      try {
        const y = this.getSymKey(o), p = H3({ symKey: y, encoded: c });
        return fh(p);
      } catch (y) {
        this.logger.error(`Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`), this.logger.error(y);
      }
    }, this.getPayloadType = (o) => {
      const c = na(o);
      return Ls(c.type);
    }, this.getPayloadSenderPublicKey = (o) => {
      const c = na(o);
      return c.senderPublicKey ? hr(c.senderPublicKey, ur) : void 0;
    }, this.core = e, this.logger = Ze.generateChildLogger(t, this.name), this.keychain = i || new Fx(this.core, this.logger);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Ld);
    } catch {
      e = Tu(), await this.keychain.set(Ld, e);
    }
    return ox(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class jx extends ED {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = px, this.version = gx, this.initialized = !1, this.storagePrefix = Ln, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, o) => {
      this.isInitialized();
      const c = ji(o);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[c] < "u" || (u[c] = o, this.messages.set(i, u), await this.persist()), c;
    }, this.get = (i) => {
      this.isInitialized();
      let o = this.messages.get(i);
      return typeof o > "u" && (o = {}), o;
    }, this.has = (i, o) => {
      this.isInitialized();
      const c = this.get(i), u = ji(o);
      return typeof c[u] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = Ze.generateChildLogger(e, this.name), this.core = t;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Wp(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Yp(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ux extends DD {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new Pr.EventEmitter(), this.name = vx, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, o, c) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: o, opts: c } });
      try {
        const f = (c == null ? void 0 : c.ttl) || yx, y = Ru(c), p = (c == null ? void 0 : c.prompt) || !1, m = (c == null ? void 0 : c.tag) || 0, x = (c == null ? void 0 : c.id) || vg().toString(), S = { topic: i, message: o, opts: { ttl: f, relay: y, prompt: p, tag: m, id: x } }, C = setTimeout(() => this.queue.set(x, S), this.publishTimeout);
        try {
          await await Ps(this.rpcPublish(i, o, f, y, p, m, x), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(x), this.relayer.events.emit(er.publish, S);
        } catch (R) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (u = c == null ? void 0 : c.internal) != null && u.throwOnFailedPublish)
            throw this.removeRequestFromQueue(x), R;
          return;
        } finally {
          clearTimeout(C);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: o, opts: c } });
      } catch (f) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(f), f;
      }
    }, this.on = (i, o) => {
      this.events.on(i, o);
    }, this.once = (i, o) => {
      this.events.once(i, o);
    }, this.off = (i, o) => {
      this.events.off(i, o);
    }, this.removeListener = (i, o) => {
      this.events.removeListener(i, o);
    }, this.relayer = e, this.logger = Ze.generateChildLogger(t, this.name), this.registerEventListeners();
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, i, o, c, u, f) {
    var y, p, m, x;
    const S = { method: Xo(o.protocol).publish, params: { topic: e, message: t, ttl: i, prompt: c, tag: u }, id: f };
    return cr((y = S.params) == null ? void 0 : y.prompt) && ((p = S.params) == null || delete p.prompt), cr((m = S.params) == null ? void 0 : m.tag) && ((x = S.params) == null || delete x.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: S }), this.relayer.request(S);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: o } = e;
      await this.publish(t, i, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(zi.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(er.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(er.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Mx {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i = this.get(e);
      if (!this.exists(e, t))
        return;
      const o = i.filter((c) => c !== t);
      if (!o.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, o);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var qx = Object.defineProperty, Bx = Object.defineProperties, Hx = Object.getOwnPropertyDescriptors, Md = Object.getOwnPropertySymbols, zx = Object.prototype.hasOwnProperty, Kx = Object.prototype.propertyIsEnumerable, qd = (r, e, t) => e in r ? qx(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, vs = (r, e) => {
  for (var t in e || (e = {}))
    zx.call(e, t) && qd(r, t, e[t]);
  if (Md)
    for (var t of Md(e))
      Kx.call(e, t) && qd(r, t, e[t]);
  return r;
}, uu = (r, e) => Bx(r, Hx(e));
class kx extends OD {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Mx(), this.events = new Pr.EventEmitter(), this.name = Ox, this.version = Ix, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ln, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, o) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: o } });
      try {
        const c = Ru(o), u = { topic: i, relay: c };
        this.pending.set(i, u);
        const f = await this.rpcSubscribe(i, c);
        return this.onSubscribe(f, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: o } }), f;
      } catch (c) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(c), c;
      }
    }, this.unsubscribe = async (i, o) => {
      await this.restartToComplete(), this.isInitialized(), typeof (o == null ? void 0 : o.id) < "u" ? await this.unsubscribeById(i, o.id, o) : await this.unsubscribeByTopic(i, o);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? !0 : await new Promise((o, c) => {
      const u = new ve.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const f = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(f), u.stop(this.pendingSubscriptionWatchLabel), o(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= Px && (clearInterval(f), u.stop(this.pendingSubscriptionWatchLabel), c(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (i, o) => {
      this.events.on(i, o);
    }, this.once = (i, o) => {
      this.events.once(i, o);
    }, this.off = (i, o) => {
      this.events.off(i, o);
    }, this.removeListener = (i, o) => {
      this.events.removeListener(i, o);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Ze.generateChildLogger(t, this.name), this.clientId = "";
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (o) => await this.unsubscribeById(e, o, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    try {
      const o = Ru(i);
      await this.rpcUnsubscribe(e, t, o);
      const c = $t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, c), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    } catch (o) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(o), o;
    }
  }
  async rpcSubscribe(e, t) {
    const i = { method: Xo(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await Ps(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(er.connection_stalled);
    }
    return ji(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, i = { method: Xo(t.protocol).batchSubscribe, params: { topics: e.map((o) => o.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await Ps(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(er.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, i) {
    const o = { method: Xo(i.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: o }), this.relayer.request(o);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, uu(vs({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, vs({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, vs({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Vr.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = he("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(Vr.deleted, uu(vs({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Vr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(Vr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = he("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    nn(t) && this.onBatchSubscribe(t.map((i, o) => uu(vs({}, e[o]), { id: i })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(zi.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(er.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(er.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Vr.created, async (e) => {
      const t = Vr.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(Vr.deleted, async (e) => {
      const t = Vr.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
}
var Vx = Object.defineProperty, Bd = Object.getOwnPropertySymbols, Gx = Object.prototype.hasOwnProperty, Wx = Object.prototype.propertyIsEnumerable, Hd = (r, e, t) => e in r ? Vx(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Yx = (r, e) => {
  for (var t in e || (e = {}))
    Gx.call(e, t) && Hd(r, t, e[t]);
  if (Bd)
    for (var t of Bd(e))
      Wx.call(e, t) && Hd(r, t, e[t]);
  return r;
};
class Jx extends SD {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Pr.EventEmitter(), this.name = bx, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(t);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t);
    }, this.onConnectHandler = () => {
      this.events.emit(er.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(er.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(bn.payload, this.onPayloadHandler), this.provider.on(bn.connect, this.onConnectHandler), this.provider.on(bn.disconnect, this.onDisconnectHandler), this.provider.on(bn.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Ze.generateChildLogger(e.logger, this.name) : Ze.pino(Ze.getDefaultLoggerOptions({ level: e.logger || _x })), this.messages = new jx(this.logger, e.core), this.subscriber = new kx(this, this.logger), this.publisher = new Ux(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ng, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${jd}...`), await this.restartTransport(jd);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Dx);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var i;
    this.isInitialized();
    let o = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "";
    if (o)
      return o;
    let c;
    const u = (f) => {
      f.topic === e && (this.subscriber.off(Vr.created, u), c());
    };
    return await Promise.all([new Promise((f) => {
      c = f, this.subscriber.on(Vr.created, u);
    }), new Promise(async (f) => {
      o = await this.subscriber.subscribe(e, t), f();
    })]), o;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Ps(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((t) => {
          if (!this.initialized)
            return t();
          this.subscriber.once(Vr.resubscribed, () => {
            t();
          });
        }), new Promise(async (t, i) => {
          try {
            await Ps(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (o) {
            i(o);
            return;
          }
          t();
        })]);
      } catch (t) {
        this.logger.error(t);
        const i = t;
        if (!this.isConnectionStalled(i.message))
          throw t;
        this.provider.events.emit(bn.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await od())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new En(new $S(t6({ sdkVersion: Ex, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
    const o = this.messages.has(t, i);
    return o && this.logger.debug(`Ignoring duplicate message: ${i}`), o;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), vh(e)) {
      if (!e.method.endsWith(mx))
        return;
      const t = e.params, { topic: i, message: o, publishedAt: c } = t.data, u = { topic: i, message: o, publishedAt: c };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Yx({ type: "event", event: t.id }, u)), this.events.emit(t.id, u), await this.acknowledgePayload(e), await this.onMessageEvent(u);
    } else
      ma(e) && this.events.emit(er.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(er.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = yh(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(bn.payload, this.onPayloadHandler), this.provider.off(bn.connect, this.onConnectHandler), this.provider.off(bn.disconnect, this.onDisconnectHandler), this.provider.off(bn.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(er.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await od();
    G6(async (t) => {
      this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(er.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ve.toMiliseconds(wx)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var Qx = Object.defineProperty, zd = Object.getOwnPropertySymbols, Xx = Object.prototype.hasOwnProperty, Zx = Object.prototype.propertyIsEnumerable, Kd = (r, e, t) => e in r ? Qx(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, kd = (r, e) => {
  for (var t in e || (e = {}))
    Xx.call(e, t) && Kd(r, t, e[t]);
  if (zd)
    for (var t of zd(e))
      Zx.call(e, t) && Kd(r, t, e[t]);
  return r;
};
class Ea extends xD {
  constructor(e, t, i, o = Ln, c = void 0) {
    super(e, t, i, o), this.core = e, this.logger = t, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = Sx, this.cached = [], this.initialized = !1, this.storagePrefix = Ln, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !cr(u) ? this.map.set(this.getKey(u), u) : S6(u) ? this.map.set(u.id, u) : x6(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, f) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, f) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: f }), this.map.set(u, f), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((f) => Object.keys(u).every((y) => LS(f[y], u[y]))) : this.values), this.update = async (u, f) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: f });
      const y = kd(kd({}, this.getData(u)), f);
      this.map.set(u, y), await this.persist();
    }, this.delete = async (u, f) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: f }), this.map.delete(u), await this.persist());
    }, this.logger = Ze.generateChildLogger(t, this.name), this.storagePrefix = o, this.getKey = c;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: i } = he("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = he("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class eO {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = Cx, this.version = Ax, this.events = new eh(), this.initialized = !1, this.storagePrefix = Ln, this.ignoredPayloadTypes = [ai], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = Tu(), o = await this.core.crypto.setSymKey(i), c = Gr(ve.FIVE_MINUTES), u = { protocol: Rg }, f = { topic: o, expiry: c, relay: u, active: !1 }, y = p6({ protocol: this.core.protocol, version: this.core.version, topic: o, symKey: i, relay: u });
      return await this.pairings.set(o, f), await this.core.relayer.subscribe(o), this.core.expirer.set(o, c), { topic: o, uri: y };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: o, symKey: c, relay: u } = l6(i.uri);
      let f;
      if (this.pairings.keys.includes(o) && (f = this.pairings.get(o), f.active))
        throw new Error(`Pairing already exists: ${o}. Please try again with a new connection URI.`);
      this.core.crypto.keychain.has(o) || (await this.core.crypto.setSymKey(c, o), await this.core.relayer.subscribe(o, { relay: u }));
      const y = Gr(ve.FIVE_MINUTES), p = { topic: o, relay: u, expiry: y, active: !1 };
      return await this.pairings.set(o, p), this.core.expirer.set(o, y), i.activatePairing && await this.activate({ topic: o }), this.events.emit(Es.create, p), p;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const o = Gr(ve.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: o }), this.core.expirer.set(i, o);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: o } = i;
      if (this.pairings.keys.includes(o)) {
        const c = await this.sendRequest(o, "wc_pairingPing", {}), { done: u, resolve: f, reject: y } = Ni();
        this.events.once(Ht("pairing_ping", c), ({ error: p }) => {
          p ? y(p) : f();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: o }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: o });
    }, this.updateMetadata = async ({ topic: i, metadata: o }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: o });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: o } = i;
      this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", $t("USER_DISCONNECTED")), await this.deletePairing(o));
    }, this.sendRequest = async (i, o, c) => {
      const u = Mi(o, c), f = await this.core.crypto.encode(i, u), y = ys[o].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, f, y), u.id;
    }, this.sendResult = async (i, o, c) => {
      const u = yh(i, c), f = await this.core.crypto.encode(o, u), y = await this.core.history.get(o, i), p = ys[y.request.method].res;
      await this.core.relayer.publish(o, f, p), await this.core.history.resolve(u);
    }, this.sendError = async (i, o, c) => {
      const u = ba(i, c), f = await this.core.crypto.encode(o, u), y = await this.core.history.get(o, i), p = ys[y.request.method] ? ys[y.request.method].res : ys.unregistered_method.res;
      await this.core.relayer.publish(o, f, p), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, o) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, $t("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), o ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((o) => Fn(o.expiry));
      await Promise.all(i.map((o) => this.deletePairing(o.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: o, payload: c } = i;
      switch (c.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(o, c);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(o, c);
        default:
          return this.onUnknownRpcMethodRequest(o, c);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: o, payload: c } = i, u = (await this.core.history.get(o, c.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(o, c);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (i, o) => {
      const { id: c } = o;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(c, i, !0), this.events.emit(Es.ping, { id: c, topic: i });
      } catch (u) {
        await this.sendError(c, i, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (i, o) => {
      const { id: c } = o;
      setTimeout(() => {
        wn(o) ? this.events.emit(Ht("pairing_ping", c), {}) : Wr(o) && this.events.emit(Ht("pairing_ping", c), { error: o.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, o) => {
      const { id: c } = o;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(Es.delete, { id: c, topic: i });
      } catch (u) {
        await this.sendError(c, i, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (i, o) => {
      const { id: c, method: u } = o;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const f = $t("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(c, i, f), this.logger.error(f);
      } catch (f) {
        await this.sendError(c, i, f), this.logger.error(f);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error($t("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!_r(i)) {
        const { message: o } = he("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(o);
      }
      if (!D6(i.uri)) {
        const { message: o } = he("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(o);
      }
    }, this.isValidPing = async (i) => {
      if (!_r(i)) {
        const { message: c } = he("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(c);
      }
      const { topic: o } = i;
      await this.isValidPairingTopic(o);
    }, this.isValidDisconnect = async (i) => {
      if (!_r(i)) {
        const { message: c } = he("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(c);
      }
      const { topic: o } = i;
      await this.isValidPairingTopic(o);
    }, this.isValidPairingTopic = async (i) => {
      if (!Gt(i, !1)) {
        const { message: o } = he("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(o);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: o } = he("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(o);
      }
      if (Fn(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: o } = he("EXPIRED", `pairing topic: ${i}`);
        throw new Error(o);
      }
    }, this.core = e, this.logger = Ze.generateChildLogger(t, this.name), this.pairings = new Ea(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: i } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const o = await this.core.crypto.decode(t, i);
      try {
        vh(o) ? (this.core.history.set(t, o), this.onRelayEventRequest({ topic: t, payload: o })) : ma(o) && (await this.core.history.resolve(o), await this.onRelayEventResponse({ topic: t, payload: o }), this.core.history.delete(t, o.id));
      } catch (c) {
        this.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Mr.expired, async (e) => {
      const { topic: t } = Qp(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(Es.expire, { topic: t }));
    });
  }
}
class tO extends wD {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new Pr.EventEmitter(), this.name = Tx, this.version = Rx, this.cached = [], this.initialized = !1, this.storagePrefix = Ln, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, o, c) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: o, chainId: c }), this.records.has(o.id))
        return;
      const u = { id: o.id, topic: i, request: { method: o.method, params: o.params || null }, chainId: c, expiry: Gr(ve.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(rn.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const o = await this.getRecord(i.id);
      typeof o.response > "u" && (o.response = Wr(i) ? { error: i.error } : { result: i.result }, this.records.set(o.id, o), this.events.emit(rn.updated, o));
    }, this.get = async (i, o) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: o }), await this.getRecord(o)), this.delete = (i, o) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: o }), this.values.forEach((c) => {
        if (c.topic === i) {
          if (typeof o < "u" && c.id !== o)
            return;
          this.records.delete(c.id), this.events.emit(rn.deleted, c);
        }
      });
    }, this.exists = async (i, o) => (this.isInitialized(), this.records.has(o) ? (await this.getRecord(o)).topic === i : !1), this.on = (i, o) => {
      this.events.on(i, o);
    }, this.once = (i, o) => {
      this.events.once(i, o);
    }, this.off = (i, o) => {
      this.events.off(i, o);
    }, this.removeListener = (i, o) => {
      this.events.removeListener(i, o);
    }, this.logger = Ze.generateChildLogger(t, this.name);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const i = { topic: t.topic, request: Mi(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = he("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(rn.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = he("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(rn.created, (e) => {
      const t = rn.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(rn.updated, (e) => {
      const t = rn.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(rn.deleted, (e) => {
      const t = rn.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.core.heartbeat.on(zi.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class rO extends ID {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new Pr.EventEmitter(), this.name = Nx, this.version = $x, this.cached = [], this.initialized = !1, this.storagePrefix = Ln, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const o = this.formatTarget(i);
        return typeof this.getExpiration(o) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, o) => {
      this.isInitialized();
      const c = this.formatTarget(i), u = { target: c, expiry: o };
      this.expirations.set(c, u), this.checkExpiry(c, u), this.events.emit(Mr.created, { target: c, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const o = this.formatTarget(i);
      return this.getExpiration(o);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const o = this.formatTarget(i), c = this.getExpiration(o);
        this.expirations.delete(o), this.events.emit(Mr.deleted, { target: o, expiration: c });
      }
    }, this.on = (i, o) => {
      this.events.on(i, o);
    }, this.once = (i, o) => {
      this.events.once(i, o);
    }, this.off = (i, o) => {
      this.events.off(i, o);
    }, this.removeListener = (i, o) => {
      this.events.removeListener(i, o);
    }, this.logger = Ze.generateChildLogger(t, this.name);
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return r6(e);
    if (typeof e == "number")
      return n6(e);
    const { message: t } = he("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Mr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = he("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = he("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    ve.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(Mr.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(zi.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Mr.created, (e) => {
      const t = Mr.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Mr.expired, (e) => {
      const t = Mr.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(Mr.deleted, (e) => {
      const t = Mr.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class nO extends PD {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = cu, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async () => {
      if (this.verifyDisabled || js() || !Us())
        return;
      const i = ea;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (o) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(o);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ud;
        try {
          await this.createIframe();
        } catch (o) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(o), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (i) => {
      this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
    }, this.resolve = async (i) => {
      if (this.isDevEnv)
        return "";
      const o = (i == null ? void 0 : i.verifyUrl) || ea;
      let c;
      try {
        c = await this.fetchAttestation(i.attestationId, o);
      } catch (u) {
        this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${o}`), this.logger.info(u), c = await this.fetchAttestation(i.attestationId, Ud);
      }
      return c;
    }, this.fetchAttestation = async (i, o) => {
      this.logger.info(`resolving attestation: ${i} from url: ${o}`);
      const c = this.startAbortTimer(ve.ONE_SECOND * 2), u = await fetch(`${o}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(c), u.status === 200 ? await u.json() : void 0;
    }, this.addToQueue = (i) => {
      this.queue.push(i);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i) => this.sendPost(i)), this.queue = []);
    }, this.sendPost = (i) => {
      var o;
      try {
        if (!this.iframe)
          return;
        (o = this.iframe.contentWindow) == null || o.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i;
      const o = (c) => {
        c.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", o), i());
      };
      await Promise.race([new Promise((c) => {
        if (document.getElementById(cu))
          return c();
        window.addEventListener("message", o);
        const u = document.createElement("iframe");
        u.id = cu, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, i = c;
      }), new Promise((c, u) => setTimeout(() => {
        window.removeEventListener("message", o), u("verify iframe load timeout");
      }, ve.toMiliseconds(ve.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Ze.generateChildLogger(t, this.name), this.verifyUrl = ea, this.abortController = new AbortController(), this.isDevEnv = uh() && process.env.IS_VITEST;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ve.toMiliseconds(e));
  }
}
var iO = Object.defineProperty, Vd = Object.getOwnPropertySymbols, sO = Object.prototype.hasOwnProperty, oO = Object.prototype.propertyIsEnumerable, Gd = (r, e, t) => e in r ? iO(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Wd = (r, e) => {
  for (var t in e || (e = {}))
    sO.call(e, t) && Gd(r, t, e[t]);
  if (Vd)
    for (var t of Vd(e))
      oO.call(e, t) && Gd(r, t, e[t]);
  return r;
};
class bh extends mD {
  constructor(e) {
    super(e), this.protocol = Tg, this.version = ax, this.name = _h, this.events = new Pr.EventEmitter(), this.initialized = !1, this.on = (i, o) => this.events.on(i, o), this.once = (i, o) => this.events.once(i, o), this.off = (i, o) => this.events.off(i, o), this.removeListener = (i, o) => this.events.removeListener(i, o), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ng, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ze.pino(Ze.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || cx.logger }));
    this.logger = Ze.generateChildLogger(t, this.name), this.heartbeat = new zi.HeartBeat(), this.crypto = new Lx(this, this.logger, e == null ? void 0 : e.keychain), this.history = new tO(this, this.logger), this.expirer = new rO(this, this.logger), this.storage = e != null && e.storage ? e.storage : new S2(Wd(Wd({}, ux), e == null ? void 0 : e.storageOptions)), this.relayer = new Jx({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new eO(this, this.logger), this.verify = new nO(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new bh(e);
    await t.initialize();
    const i = await t.crypto.getClientId();
    return await t.storage.setItem(xx, i), t;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const aO = bh, $g = "wc", Fg = 2, Lg = "client", mh = `${$g}@${Fg}:${Lg}:`, hu = { name: Lg, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Yd = "WALLETCONNECT_DEEPLINK_CHOICE", cO = "proposal", jg = "Proposal expired", uO = "session", Wo = ve.SEVEN_DAYS, hO = "engine", _s = { wc_sessionPropose: { req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, lu = { min: ve.FIVE_MINUTES, max: ve.SEVEN_DAYS }, mn = { idle: "IDLE", active: "ACTIVE" }, lO = "request", fO = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var dO = Object.defineProperty, pO = Object.defineProperties, gO = Object.getOwnPropertyDescriptors, Jd = Object.getOwnPropertySymbols, yO = Object.prototype.hasOwnProperty, vO = Object.prototype.propertyIsEnumerable, Qd = (r, e, t) => e in r ? dO(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, vr = (r, e) => {
  for (var t in e || (e = {}))
    yO.call(e, t) && Qd(r, t, e[t]);
  if (Jd)
    for (var t of Jd(e))
      vO.call(e, t) && Qd(r, t, e[t]);
  return r;
}, bs = (r, e) => pO(r, gO(e));
class _O extends AD {
  constructor(e) {
    super(e), this.name = hO, this.events = new eh(), this.initialized = !1, this.ignoredPayloadTypes = [ai], this.requestQueue = { state: mn.idle, queue: [] }, this.sessionRequestQueue = { state: mn.idle, queue: [] }, this.requestQueueDelay = ve.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(_s) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ve.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (t) => {
      await this.isInitialized();
      const i = bs(vr({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: o, requiredNamespaces: c, optionalNamespaces: u, sessionProperties: f, relays: y } = i;
      let p = o, m, x = !1;
      if (p && (x = this.client.core.pairing.pairings.get(p).active), !p || !x) {
        const { topic: j, uri: O } = await this.client.core.pairing.create();
        p = j, m = O;
      }
      const S = await this.client.core.crypto.generateKeyPair(), C = vr({ requiredNamespaces: c, optionalNamespaces: u, relays: y ?? [{ protocol: Rg }], proposer: { publicKey: S, metadata: this.client.metadata } }, f && { sessionProperties: f }), { reject: R, resolve: H, done: K } = Ni(ve.FIVE_MINUTES, jg);
      if (this.events.once(Ht("session_connect"), async ({ error: j, session: O }) => {
        if (j)
          R(j);
        else if (O) {
          O.self.publicKey = S;
          const T = bs(vr({}, O), { requiredNamespaces: O.requiredNamespaces, optionalNamespaces: O.optionalNamespaces });
          await this.client.session.set(O.topic, T), await this.setExpiry(O.topic, O.expiry), p && await this.client.core.pairing.updateMetadata({ topic: p, metadata: O.peer.metadata }), H(T);
        }
      }), !p) {
        const { message: j } = he("NO_MATCHING_KEY", `connect() pairing topic: ${p}`);
        throw new Error(j);
      }
      const se = await this.sendRequest({ topic: p, method: "wc_sessionPropose", params: C }), $ = Gr(ve.FIVE_MINUTES);
      return await this.setProposal(se, vr({ id: se, expiry: $ }, C)), { uri: m, approval: K };
    }, this.pair = async (t) => (await this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async (t) => {
      await this.isInitialized(), await this.isValidApprove(t);
      const { id: i, relayProtocol: o, namespaces: c, sessionProperties: u } = t, f = this.client.proposal.get(i);
      let { pairingTopic: y, proposer: p, requiredNamespaces: m, optionalNamespaces: x } = f;
      y = y || "", Ui(m) || (m = _6(c, "approve()"));
      const S = await this.client.core.crypto.generateKeyPair(), C = p.publicKey, R = await this.client.core.crypto.generateSharedKey(S, C);
      y && i && (await this.client.core.pairing.updateMetadata({ topic: y, metadata: p.metadata }), await this.sendResult({ id: i, topic: y, result: { relay: { protocol: o ?? "irn" }, responderPublicKey: S } }), await this.client.proposal.delete(i, $t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: y }));
      const H = vr({ relay: { protocol: o ?? "irn" }, namespaces: c, requiredNamespaces: m, optionalNamespaces: x, pairingTopic: y, controller: { publicKey: S, metadata: this.client.metadata }, expiry: Gr(Wo) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(R), await this.sendRequest({ topic: R, method: "wc_sessionSettle", params: H, throwOnFailedPublish: !0 });
      const K = bs(vr({}, H), { topic: R, pairingTopic: y, acknowledged: !1, self: H.controller, peer: { publicKey: p.publicKey, metadata: p.metadata }, controller: S });
      return await this.client.session.set(R, K), await this.setExpiry(R, Gr(Wo)), { topic: R, acknowledged: () => new Promise((se) => setTimeout(() => se(this.client.session.get(R)), 500)) };
    }, this.reject = async (t) => {
      await this.isInitialized(), await this.isValidReject(t);
      const { id: i, reason: o } = t, { pairingTopic: c } = this.client.proposal.get(i);
      c && (await this.sendError(i, c, o), await this.client.proposal.delete(i, $t("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      await this.isInitialized(), await this.isValidUpdate(t);
      const { topic: i, namespaces: o } = t, c = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: o } }), { done: u, resolve: f, reject: y } = Ni();
      return this.events.once(Ht("session_update", c), ({ error: p }) => {
        p ? y(p) : f();
      }), await this.client.session.update(i, { namespaces: o }), { acknowledged: u };
    }, this.extend = async (t) => {
      await this.isInitialized(), await this.isValidExtend(t);
      const { topic: i } = t, o = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: c, resolve: u, reject: f } = Ni();
      return this.events.once(Ht("session_extend", o), ({ error: y }) => {
        y ? f(y) : u();
      }), await this.setExpiry(i, Gr(Wo)), { acknowledged: c };
    }, this.request = async (t) => {
      await this.isInitialized(), await this.isValidRequest(t);
      const { chainId: i, request: o, topic: c, expiry: u } = t, f = gh(), { done: y, resolve: p, reject: m } = Ni(u, "Request expired. Please try again.");
      return this.events.once(Ht("session_request", f), ({ error: x, result: S }) => {
        x ? m(x) : p(S);
      }), await Promise.all([new Promise(async (x) => {
        await this.sendRequest({ clientRpcId: f, topic: c, method: "wc_sessionRequest", params: { request: o, chainId: i }, expiry: u, throwOnFailedPublish: !0 }).catch((S) => m(S)), this.client.events.emit("session_request_sent", { topic: c, request: o, chainId: i, id: f }), x();
      }), new Promise(async (x) => {
        const S = await this.client.core.storage.getItem(Yd);
        i6({ id: f, topic: c, wcDeepLink: S }), x();
      }), y()]).then((x) => x[2]);
    }, this.respond = async (t) => {
      await this.isInitialized(), await this.isValidRespond(t);
      const { topic: i, response: o } = t, { id: c } = o;
      wn(o) ? await this.sendResult({ id: c, topic: i, result: o.result, throwOnFailedPublish: !0 }) : Wr(o) && await this.sendError(c, i, o.error), this.cleanupAfterResponse(t);
    }, this.ping = async (t) => {
      await this.isInitialized(), await this.isValidPing(t);
      const { topic: i } = t;
      if (this.client.session.keys.includes(i)) {
        const o = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: c, resolve: u, reject: f } = Ni();
        this.events.once(Ht("session_ping", o), ({ error: y }) => {
          y ? f(y) : u();
        }), await c();
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (t) => {
      await this.isInitialized(), await this.isValidEmit(t);
      const { topic: i, event: o, chainId: c } = t;
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: o, chainId: c } });
    }, this.disconnect = async (t) => {
      await this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: i } = t;
      this.client.session.keys.includes(i) ? (await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: $t("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((i) => w6(i, t))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (t) => {
      if (t.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(t.pairingTopic), o = this.client.core.pairing.pairings.getAll().filter((c) => {
            var u, f;
            return ((u = c.peerMetadata) == null ? void 0 : u.url) && ((f = c.peerMetadata) == null ? void 0 : f.url) === t.peer.metadata.url && c.topic && c.topic !== i.topic;
          });
          if (o.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`), await Promise.all(o.map((c) => this.client.core.pairing.disconnect({ topic: c.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (t, i) => {
      const { self: o } = this.client.session.get(t);
      await this.client.core.relayer.unsubscribe(t), this.client.session.delete(t, $t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), i || this.client.core.expirer.del(t), this.client.core.storage.removeItem(Yd).catch((c) => this.client.logger.warn(c));
    }, this.deleteProposal = async (t, i) => {
      await Promise.all([this.client.proposal.delete(t, $t("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.deletePendingSessionRequest = async (t, i, o = !1) => {
      await Promise.all([this.client.pendingRequest.delete(t, i), o ? Promise.resolve() : this.client.core.expirer.del(t)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((c) => c.id !== t), o && (this.sessionRequestQueue.state = mn.idle);
    }, this.setExpiry = async (t, i) => {
      this.client.session.keys.includes(t) && await this.client.session.update(t, { expiry: i }), this.client.core.expirer.set(t, i);
    }, this.setProposal = async (t, i) => {
      await this.client.proposal.set(t, i), this.client.core.expirer.set(t, i.expiry);
    }, this.setPendingSessionRequest = async (t) => {
      const i = _s.wc_sessionRequest.req.ttl, { id: o, topic: c, params: u, verifyContext: f } = t;
      await this.client.pendingRequest.set(o, { id: o, topic: c, params: u, verifyContext: f }), i && this.client.core.expirer.set(o, Gr(i));
    }, this.sendRequest = async (t) => {
      const { topic: i, method: o, params: c, expiry: u, relayRpcId: f, clientRpcId: y, throwOnFailedPublish: p } = t, m = Mi(o, c, y);
      if (Us() && fO.includes(o)) {
        const C = ji(JSON.stringify(m));
        this.client.core.verify.register({ attestationId: C });
      }
      const x = await this.client.core.crypto.encode(i, m), S = _s[o].req;
      return u && (S.ttl = u), f && (S.id = f), this.client.core.history.set(i, m), p ? (S.internal = bs(vr({}, S.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, x, S)) : this.client.core.relayer.publish(i, x, S).catch((C) => this.client.logger.error(C)), m.id;
    }, this.sendResult = async (t) => {
      const { id: i, topic: o, result: c, throwOnFailedPublish: u } = t, f = yh(i, c), y = await this.client.core.crypto.encode(o, f), p = await this.client.core.history.get(o, i), m = _s[p.request.method].res;
      u ? (m.internal = bs(vr({}, m.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(o, y, m)) : this.client.core.relayer.publish(o, y, m).catch((x) => this.client.logger.error(x)), await this.client.core.history.resolve(f);
    }, this.sendError = async (t, i, o) => {
      const c = ba(t, o), u = await this.client.core.crypto.encode(i, c), f = await this.client.core.history.get(i, t), y = _s[f.request.method].res;
      this.client.core.relayer.publish(i, u, y), await this.client.core.history.resolve(c);
    }, this.cleanup = async () => {
      const t = [], i = [];
      this.client.session.getAll().forEach((o) => {
        Fn(o.expiry) && t.push(o.topic);
      }), this.client.proposal.getAll().forEach((o) => {
        Fn(o.expiry) && i.push(o.id);
      }), await Promise.all([...t.map((o) => this.deleteSession(o)), ...i.map((o) => this.deleteProposal(o))]);
    }, this.onRelayEventRequest = async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === mn.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = mn.active;
        const t = this.requestQueue.queue.shift();
        if (t)
          try {
            this.processRequest(t), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = mn.idle;
    }, this.processRequest = (t) => {
      const { topic: i, payload: o } = t, c = o.method;
      switch (c) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(i, o);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(i, o);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(i, o);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(i, o);
        case "wc_sessionPing":
          return this.onSessionPingRequest(i, o);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(i, o);
        case "wc_sessionRequest":
          return this.onSessionRequest(i, o);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(i, o);
        default:
          return this.client.logger.info(`Unsupported request method ${c}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: i, payload: o } = t, c = (await this.client.core.history.get(i, o.id)).request.method;
      switch (c) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, o);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, o);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, o);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, o);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, o);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, o);
        default:
          return this.client.logger.info(`Unsupported response method ${c}`);
      }
    }, this.onRelayEventUnknownPayload = (t) => {
      const { topic: i } = t, { message: o } = he("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(o);
    }, this.onSessionProposeRequest = async (t, i) => {
      const { params: o, id: c } = i;
      try {
        this.isValidConnect(vr({}, i.params));
        const u = Gr(ve.FIVE_MINUTES), f = vr({ id: c, pairingTopic: t, expiry: u }, o);
        await this.setProposal(c, f);
        const y = ji(JSON.stringify(i)), p = await this.getVerifyContext(y, f.proposer.metadata);
        this.client.events.emit("session_proposal", { id: c, params: f, verifyContext: p });
      } catch (u) {
        await this.sendError(c, t, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (t, i) => {
      const { id: o } = i;
      if (wn(i)) {
        const { result: c } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: c });
        const u = this.client.proposal.get(o);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const f = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: f });
        const y = c.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: y });
        const p = await this.client.core.crypto.generateSharedKey(f, y);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: p });
        const m = await this.client.core.relayer.subscribe(p);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: m }), await this.client.core.pairing.activate({ topic: t });
      } else
        Wr(i) && (await this.client.proposal.delete(o, $t("USER_DISCONNECTED")), this.events.emit(Ht("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (t, i) => {
      const { id: o, params: c } = i;
      try {
        this.isValidSessionSettleRequest(c);
        const { relay: u, controller: f, expiry: y, namespaces: p, requiredNamespaces: m, optionalNamespaces: x, sessionProperties: S, pairingTopic: C } = i.params, R = vr({ topic: t, relay: u, expiry: y, namespaces: p, acknowledged: !0, pairingTopic: C, requiredNamespaces: m, optionalNamespaces: x, controller: f.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: f.publicKey, metadata: f.metadata } }, S && { sessionProperties: S });
        await this.sendResult({ id: i.id, topic: t, result: !0 }), this.events.emit(Ht("session_connect"), { session: R }), this.cleanupDuplicatePairings(R);
      } catch (u) {
        await this.sendError(o, t, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (t, i) => {
      const { id: o } = i;
      wn(i) ? (await this.client.session.update(t, { acknowledged: !0 }), this.events.emit(Ht("session_approve", o), {})) : Wr(i) && (await this.client.session.delete(t, $t("USER_DISCONNECTED")), this.events.emit(Ht("session_approve", o), { error: i.error }));
    }, this.onSessionUpdateRequest = async (t, i) => {
      const { params: o, id: c } = i;
      try {
        const u = `${t}_session_update`, f = Go.get(u);
        if (f && this.isRequestOutOfSync(f, c)) {
          this.client.logger.info(`Discarding out of sync request - ${c}`);
          return;
        }
        this.isValidUpdate(vr({ topic: t }, o)), await this.client.session.update(t, { namespaces: o.namespaces }), await this.sendResult({ id: c, topic: t, result: !0 }), this.client.events.emit("session_update", { id: c, topic: t, params: o }), Go.set(u, c);
      } catch (u) {
        await this.sendError(c, t, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (t, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, i) => {
      const { id: o } = i;
      wn(i) ? this.events.emit(Ht("session_update", o), {}) : Wr(i) && this.events.emit(Ht("session_update", o), { error: i.error });
    }, this.onSessionExtendRequest = async (t, i) => {
      const { id: o } = i;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, Gr(Wo)), await this.sendResult({ id: o, topic: t, result: !0 }), this.client.events.emit("session_extend", { id: o, topic: t });
      } catch (c) {
        await this.sendError(o, t, c), this.client.logger.error(c);
      }
    }, this.onSessionExtendResponse = (t, i) => {
      const { id: o } = i;
      wn(i) ? this.events.emit(Ht("session_extend", o), {}) : Wr(i) && this.events.emit(Ht("session_extend", o), { error: i.error });
    }, this.onSessionPingRequest = async (t, i) => {
      const { id: o } = i;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: o, topic: t, result: !0 }), this.client.events.emit("session_ping", { id: o, topic: t });
      } catch (c) {
        await this.sendError(o, t, c), this.client.logger.error(c);
      }
    }, this.onSessionPingResponse = (t, i) => {
      const { id: o } = i;
      setTimeout(() => {
        wn(i) ? this.events.emit(Ht("session_ping", o), {}) : Wr(i) && this.events.emit(Ht("session_ping", o), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, i) => {
      const { id: o } = i;
      try {
        this.isValidDisconnect({ topic: t, reason: i.params }), await Promise.all([new Promise((c) => {
          this.client.core.relayer.once(er.publish, async () => {
            c(await this.deleteSession(t));
          });
        }), this.sendResult({ id: o, topic: t, result: !0 })]), this.client.events.emit("session_delete", { id: o, topic: t });
      } catch (c) {
        this.client.logger.error(c);
      }
    }, this.onSessionRequest = async (t, i) => {
      const { id: o, params: c } = i;
      try {
        this.isValidRequest(vr({ topic: t }, c));
        const u = ji(JSON.stringify(Mi("wc_sessionRequest", c, o))), f = this.client.session.get(t), y = await this.getVerifyContext(u, f.peer.metadata), p = { id: o, topic: t, params: c, verifyContext: y };
        await this.setPendingSessionRequest(p), this.addSessionRequestToSessionRequestQueue(p), this.processSessionRequestQueue();
      } catch (u) {
        await this.sendError(o, t, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (t, i) => {
      const { id: o } = i;
      wn(i) ? this.events.emit(Ht("session_request", o), { result: i.result }) : Wr(i) && this.events.emit(Ht("session_request", o), { error: i.error });
    }, this.onSessionEventRequest = async (t, i) => {
      const { id: o, params: c } = i;
      try {
        const u = `${t}_session_event_${c.event.name}`, f = Go.get(u);
        if (f && this.isRequestOutOfSync(f, o)) {
          this.client.logger.info(`Discarding out of sync request - ${o}`);
          return;
        }
        this.isValidEmit(vr({ topic: t }, c)), this.client.events.emit("session_event", { id: o, topic: t, params: c }), Go.set(u, o);
      } catch (u) {
        await this.sendError(o, t, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (t) => {
      this.sessionRequestQueue.queue.push(t);
    }, this.cleanupAfterResponse = (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = mn.idle, this.processSessionRequestQueue();
      }, ve.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === mn.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = mn.active, this.client.events.emit("session_request", t);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onPairingCreated = (t) => {
      if (t.active)
        return;
      const i = this.client.proposal.getAll().find((o) => o.pairingTopic === t.topic);
      i && this.onSessionProposeRequest(t.topic, Mi("wc_sessionPropose", { requiredNamespaces: i.requiredNamespaces, optionalNamespaces: i.optionalNamespaces, relays: i.relays, proposer: i.proposer }, i.id));
    }, this.isValidConnect = async (t) => {
      if (!_r(t)) {
        const { message: y } = he("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(y);
      }
      const { pairingTopic: i, requiredNamespaces: o, optionalNamespaces: c, sessionProperties: u, relays: f } = t;
      if (cr(i) || await this.isValidPairingTopic(i), !N6(f, !0)) {
        const { message: y } = he("MISSING_OR_INVALID", `connect() relays: ${f}`);
        throw new Error(y);
      }
      !cr(o) && Ui(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"), !cr(c) && Ui(c) !== 0 && this.validateNamespaces(c, "optionalNamespaces"), cr(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (t, i) => {
      const o = R6(t, "connect()", i);
      if (o)
        throw new Error(o.message);
    }, this.isValidApprove = async (t) => {
      if (!_r(t))
        throw new Error(he("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: i, namespaces: o, relayProtocol: c, sessionProperties: u } = t;
      await this.isValidProposalId(i);
      const f = this.client.proposal.get(i), y = Zo(o, "approve()");
      if (y)
        throw new Error(y.message);
      const p = id(f.requiredNamespaces, o, "approve()");
      if (p)
        throw new Error(p.message);
      if (!Gt(c, !0)) {
        const { message: m } = he("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
        throw new Error(m);
      }
      cr(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!_r(t)) {
        const { message: c } = he("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(c);
      }
      const { id: i, reason: o } = t;
      if (await this.isValidProposalId(i), !F6(o)) {
        const { message: c } = he("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
        throw new Error(c);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!_r(t)) {
        const { message: p } = he("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(p);
      }
      const { relay: i, controller: o, namespaces: c, expiry: u } = t;
      if (!Zp(i)) {
        const { message: p } = he("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(p);
      }
      const f = O6(o, "onSessionSettleRequest()");
      if (f)
        throw new Error(f.message);
      const y = Zo(c, "onSessionSettleRequest()");
      if (y)
        throw new Error(y.message);
      if (Fn(u)) {
        const { message: p } = he("EXPIRED", "onSessionSettleRequest()");
        throw new Error(p);
      }
    }, this.isValidUpdate = async (t) => {
      if (!_r(t)) {
        const { message: y } = he("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(y);
      }
      const { topic: i, namespaces: o } = t;
      await this.isValidSessionTopic(i);
      const c = this.client.session.get(i), u = Zo(o, "update()");
      if (u)
        throw new Error(u.message);
      const f = id(c.requiredNamespaces, o, "update()");
      if (f)
        throw new Error(f.message);
    }, this.isValidExtend = async (t) => {
      if (!_r(t)) {
        const { message: o } = he("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(o);
      }
      const { topic: i } = t;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (t) => {
      if (!_r(t)) {
        const { message: y } = he("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(y);
      }
      const { topic: i, request: o, chainId: c, expiry: u } = t;
      await this.isValidSessionTopic(i);
      const { namespaces: f } = this.client.session.get(i);
      if (!nd(f, c)) {
        const { message: y } = he("MISSING_OR_INVALID", `request() chainId: ${c}`);
        throw new Error(y);
      }
      if (!L6(o)) {
        const { message: y } = he("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
        throw new Error(y);
      }
      if (!M6(f, c, o.method)) {
        const { message: y } = he("MISSING_OR_INVALID", `request() method: ${o.method}`);
        throw new Error(y);
      }
      if (u && !z6(u, lu)) {
        const { message: y } = he("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${lu.min} and ${lu.max}`);
        throw new Error(y);
      }
    }, this.isValidRespond = async (t) => {
      if (!_r(t)) {
        const { message: c } = he("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(c);
      }
      const { topic: i, response: o } = t;
      if (await this.isValidSessionTopic(i), !j6(o)) {
        const { message: c } = he("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(o)}`);
        throw new Error(c);
      }
    }, this.isValidPing = async (t) => {
      if (!_r(t)) {
        const { message: o } = he("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(o);
      }
      const { topic: i } = t;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (t) => {
      if (!_r(t)) {
        const { message: f } = he("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(f);
      }
      const { topic: i, event: o, chainId: c } = t;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!nd(u, c)) {
        const { message: f } = he("MISSING_OR_INVALID", `emit() chainId: ${c}`);
        throw new Error(f);
      }
      if (!U6(o)) {
        const { message: f } = he("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
        throw new Error(f);
      }
      if (!q6(u, c, o.name)) {
        const { message: f } = he("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
        throw new Error(f);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!_r(t)) {
        const { message: o } = he("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(o);
      }
      const { topic: i } = t;
      await this.isValidSessionOrPairingTopic(i);
    }, this.getVerifyContext = async (t, i) => {
      const o = { verified: { verifyUrl: i.verifyUrl || ea, validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const c = await this.client.core.verify.resolve({ attestationId: t, verifyUrl: i.verifyUrl });
        c && (o.verified.origin = c.origin, o.verified.isScam = c.isScam, o.verified.validation = c.origin === new URL(i.url).origin ? "VALID" : "INVALID");
      } catch (c) {
        this.client.logger.info(c);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o;
    }, this.validateSessionProps = (t, i) => {
      Object.values(t).forEach((o) => {
        if (!Gt(o, !1)) {
          const { message: c } = he("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
          throw new Error(c);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = he("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const o = await this.client.core.crypto.decode(t, i);
      try {
        vh(o) ? (this.client.core.history.set(t, o), this.onRelayEventRequest({ topic: t, payload: o })) : ma(o) ? (await this.client.core.history.resolve(o), await this.onRelayEventResponse({ topic: t, payload: o }), this.client.core.history.delete(t, o.id)) : this.onRelayEventUnknownPayload({ topic: t, payload: o });
      } catch (c) {
        this.client.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Mr.expired, async (e) => {
      const { topic: t, id: i } = Qp(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, he("EXPIRED"), !0);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", { topic: t })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Es.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Gt(e, !1)) {
      const { message: t } = he("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = he("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Fn(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = he("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Gt(e, !1)) {
      const { message: t } = he("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = he("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Fn(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: t } = he("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Gt(e, !1)) {
      const { message: t } = he("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    } else {
      const { message: t } = he("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!$6(e)) {
      const { message: t } = he("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = he("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Fn(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: t } = he("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class bO extends Ea {
  constructor(e, t) {
    super(e, t, cO, mh), this.core = e, this.logger = t;
  }
}
class mO extends Ea {
  constructor(e, t) {
    super(e, t, uO, mh), this.core = e, this.logger = t;
  }
}
class wO extends Ea {
  constructor(e, t) {
    super(e, t, lO, mh, (i) => i.id), this.core = e, this.logger = t;
  }
}
let EO = class Ug extends CD {
  constructor(e) {
    super(e), this.protocol = $g, this.version = Fg, this.name = hu.name, this.events = new Pr.EventEmitter(), this.on = (i, o) => this.events.on(i, o), this.once = (i, o) => this.events.once(i, o), this.off = (i, o) => this.events.off(i, o), this.removeListener = (i, o) => this.events.removeListener(i, o), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (o) {
        throw this.logger.error(o.message), o;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.name = (e == null ? void 0 : e.name) || hu.name, this.metadata = (e == null ? void 0 : e.metadata) || Q3();
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ze.pino(Ze.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || hu.logger }));
    this.core = (e == null ? void 0 : e.core) || new aO(e), this.logger = Ze.generateChildLogger(t, this.name), this.session = new mO(this.core, this.logger), this.proposal = new bO(this.core, this.logger), this.pendingRequest = new wO(this.core, this.logger), this.engine = new _O(this);
  }
  static async init(e) {
    const t = new Ug(e);
    return await t.initialize(), t;
  }
  get context() {
    return Ze.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
var Gu = { exports: {} };
(function(r, e) {
  var t = typeof self < "u" ? self : br, i = function() {
    function c() {
      this.fetch = !1, this.DOMException = t.DOMException;
    }
    return c.prototype = t, new c();
  }();
  (function(c) {
    (function(u) {
      var f = {
        searchParams: "URLSearchParams" in c,
        iterable: "Symbol" in c && "iterator" in Symbol,
        blob: "FileReader" in c && "Blob" in c && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in c,
        arrayBuffer: "ArrayBuffer" in c
      };
      function y(w) {
        return w && DataView.prototype.isPrototypeOf(w);
      }
      if (f.arrayBuffer)
        var p = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], m = ArrayBuffer.isView || function(w) {
          return w && p.indexOf(Object.prototype.toString.call(w)) > -1;
        };
      function x(w) {
        if (typeof w != "string" && (w = String(w)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(w))
          throw new TypeError("Invalid character in header field name");
        return w.toLowerCase();
      }
      function S(w) {
        return typeof w != "string" && (w = String(w)), w;
      }
      function C(w) {
        var P = {
          next: function() {
            var ee = w.shift();
            return { done: ee === void 0, value: ee };
          }
        };
        return f.iterable && (P[Symbol.iterator] = function() {
          return P;
        }), P;
      }
      function R(w) {
        this.map = {}, w instanceof R ? w.forEach(function(P, ee) {
          this.append(ee, P);
        }, this) : Array.isArray(w) ? w.forEach(function(P) {
          this.append(P[0], P[1]);
        }, this) : w && Object.getOwnPropertyNames(w).forEach(function(P) {
          this.append(P, w[P]);
        }, this);
      }
      R.prototype.append = function(w, P) {
        w = x(w), P = S(P);
        var ee = this.map[w];
        this.map[w] = ee ? ee + ", " + P : P;
      }, R.prototype.delete = function(w) {
        delete this.map[x(w)];
      }, R.prototype.get = function(w) {
        return w = x(w), this.has(w) ? this.map[w] : null;
      }, R.prototype.has = function(w) {
        return this.map.hasOwnProperty(x(w));
      }, R.prototype.set = function(w, P) {
        this.map[x(w)] = S(P);
      }, R.prototype.forEach = function(w, P) {
        for (var ee in this.map)
          this.map.hasOwnProperty(ee) && w.call(P, this.map[ee], ee, this);
      }, R.prototype.keys = function() {
        var w = [];
        return this.forEach(function(P, ee) {
          w.push(ee);
        }), C(w);
      }, R.prototype.values = function() {
        var w = [];
        return this.forEach(function(P) {
          w.push(P);
        }), C(w);
      }, R.prototype.entries = function() {
        var w = [];
        return this.forEach(function(P, ee) {
          w.push([ee, P]);
        }), C(w);
      }, f.iterable && (R.prototype[Symbol.iterator] = R.prototype.entries);
      function H(w) {
        if (w.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        w.bodyUsed = !0;
      }
      function K(w) {
        return new Promise(function(P, ee) {
          w.onload = function() {
            P(w.result);
          }, w.onerror = function() {
            ee(w.error);
          };
        });
      }
      function se(w) {
        var P = new FileReader(), ee = K(P);
        return P.readAsArrayBuffer(w), ee;
      }
      function $(w) {
        var P = new FileReader(), ee = K(P);
        return P.readAsText(w), ee;
      }
      function j(w) {
        for (var P = new Uint8Array(w), ee = new Array(P.length), Q = 0; Q < P.length; Q++)
          ee[Q] = String.fromCharCode(P[Q]);
        return ee.join("");
      }
      function O(w) {
        if (w.slice)
          return w.slice(0);
        var P = new Uint8Array(w.byteLength);
        return P.set(new Uint8Array(w)), P.buffer;
      }
      function T() {
        return this.bodyUsed = !1, this._initBody = function(w) {
          this._bodyInit = w, w ? typeof w == "string" ? this._bodyText = w : f.blob && Blob.prototype.isPrototypeOf(w) ? this._bodyBlob = w : f.formData && FormData.prototype.isPrototypeOf(w) ? this._bodyFormData = w : f.searchParams && URLSearchParams.prototype.isPrototypeOf(w) ? this._bodyText = w.toString() : f.arrayBuffer && f.blob && y(w) ? (this._bodyArrayBuffer = O(w.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(w) || m(w)) ? this._bodyArrayBuffer = O(w) : this._bodyText = w = Object.prototype.toString.call(w) : this._bodyText = "", this.headers.get("content-type") || (typeof w == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(w) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, f.blob && (this.blob = function() {
          var w = H(this);
          if (w)
            return w;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? H(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(se);
        }), this.text = function() {
          var w = H(this);
          if (w)
            return w;
          if (this._bodyBlob)
            return $(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(j(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, f.formData && (this.formData = function() {
          return this.text().then(G);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function h(w) {
        var P = w.toUpperCase();
        return E.indexOf(P) > -1 ? P : w;
      }
      function b(w, P) {
        P = P || {};
        var ee = P.body;
        if (w instanceof b) {
          if (w.bodyUsed)
            throw new TypeError("Already read");
          this.url = w.url, this.credentials = w.credentials, P.headers || (this.headers = new R(w.headers)), this.method = w.method, this.mode = w.mode, this.signal = w.signal, !ee && w._bodyInit != null && (ee = w._bodyInit, w.bodyUsed = !0);
        } else
          this.url = String(w);
        if (this.credentials = P.credentials || this.credentials || "same-origin", (P.headers || !this.headers) && (this.headers = new R(P.headers)), this.method = h(P.method || this.method || "GET"), this.mode = P.mode || this.mode || null, this.signal = P.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && ee)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(ee);
      }
      b.prototype.clone = function() {
        return new b(this, { body: this._bodyInit });
      };
      function G(w) {
        var P = new FormData();
        return w.trim().split("&").forEach(function(ee) {
          if (ee) {
            var Q = ee.split("="), k = Q.shift().replace(/\+/g, " "), V = Q.join("=").replace(/\+/g, " ");
            P.append(decodeURIComponent(k), decodeURIComponent(V));
          }
        }), P;
      }
      function W(w) {
        var P = new R(), ee = w.replace(/\r?\n[\t ]+/g, " ");
        return ee.split(/\r?\n/).forEach(function(Q) {
          var k = Q.split(":"), V = k.shift().trim();
          if (V) {
            var J = k.join(":").trim();
            P.append(V, J);
          }
        }), P;
      }
      T.call(b.prototype);
      function ie(w, P) {
        P || (P = {}), this.type = "default", this.status = P.status === void 0 ? 200 : P.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in P ? P.statusText : "OK", this.headers = new R(P.headers), this.url = P.url || "", this._initBody(w);
      }
      T.call(ie.prototype), ie.prototype.clone = function() {
        return new ie(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new R(this.headers),
          url: this.url
        });
      }, ie.error = function() {
        var w = new ie(null, { status: 0, statusText: "" });
        return w.type = "error", w;
      };
      var ce = [301, 302, 303, 307, 308];
      ie.redirect = function(w, P) {
        if (ce.indexOf(P) === -1)
          throw new RangeError("Invalid status code");
        return new ie(null, { status: P, headers: { location: w } });
      }, u.DOMException = c.DOMException;
      try {
        new u.DOMException();
      } catch {
        u.DOMException = function(P, ee) {
          this.message = P, this.name = ee;
          var Q = Error(P);
          this.stack = Q.stack;
        }, u.DOMException.prototype = Object.create(Error.prototype), u.DOMException.prototype.constructor = u.DOMException;
      }
      function de(w, P) {
        return new Promise(function(ee, Q) {
          var k = new b(w, P);
          if (k.signal && k.signal.aborted)
            return Q(new u.DOMException("Aborted", "AbortError"));
          var V = new XMLHttpRequest();
          function J() {
            V.abort();
          }
          V.onload = function() {
            var re = {
              status: V.status,
              statusText: V.statusText,
              headers: W(V.getAllResponseHeaders() || "")
            };
            re.url = "responseURL" in V ? V.responseURL : re.headers.get("X-Request-URL");
            var me = "response" in V ? V.response : V.responseText;
            ee(new ie(me, re));
          }, V.onerror = function() {
            Q(new TypeError("Network request failed"));
          }, V.ontimeout = function() {
            Q(new TypeError("Network request failed"));
          }, V.onabort = function() {
            Q(new u.DOMException("Aborted", "AbortError"));
          }, V.open(k.method, k.url, !0), k.credentials === "include" ? V.withCredentials = !0 : k.credentials === "omit" && (V.withCredentials = !1), "responseType" in V && f.blob && (V.responseType = "blob"), k.headers.forEach(function(re, me) {
            V.setRequestHeader(me, re);
          }), k.signal && (k.signal.addEventListener("abort", J), V.onreadystatechange = function() {
            V.readyState === 4 && k.signal.removeEventListener("abort", J);
          }), V.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return de.polyfill = !0, c.fetch || (c.fetch = de, c.Headers = R, c.Request = b, c.Response = ie), u.Headers = R, u.Request = b, u.Response = ie, u.fetch = de, Object.defineProperty(u, "__esModule", { value: !0 }), u;
    })({});
  })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
  var o = i;
  e = o.fetch, e.default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, r.exports = e;
})(Gu, Gu.exports);
var DO = Gu.exports;
const Xd = /* @__PURE__ */ Xu(DO), SO = {
  Accept: "application/json",
  "Content-Type": "application/json"
}, xO = "POST", Zd = {
  headers: SO,
  method: xO
}, ep = 10;
class Mn {
  constructor(e, t = !1) {
    if (this.url = e, this.disableProviderPing = t, this.events = new Pr.EventEmitter(), this.isAvailable = !1, this.registering = !1, !Od(e))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    this.url = e, this.disableProviderPing = t;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable)
      throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e, t) {
    this.isAvailable || await this.register();
    try {
      const i = Rs(e), c = await (await Xd(this.url, Object.assign(Object.assign({}, Zd), { body: i }))).json();
      this.onPayload({ data: c });
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  async register(e = this.url) {
    if (!Od(e))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((i, o) => {
        this.events.once("register_error", (c) => {
          this.resetMaxListeners(), o(c);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u")
            return o(new Error("HTTP connection is missing or invalid"));
          i();
        });
      });
    }
    this.url = e, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const t = Rs({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Xd(e, Object.assign(Object.assign({}, Zd), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const i = this.parseError(t);
      throw this.events.emit("register_error", i), this.onClose(), i;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t = typeof e.data == "string" ? fh(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t), o = i.message || i.toString(), c = ba(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return pg(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ep && this.events.setMaxListeners(ep);
  }
}
const tp = "error", OO = "wss://relay.walletconnect.com", IO = "wc", PO = "universal_provider", rp = `${IO}@2:${PO}:`, CO = "https://rpc.walletconnect.com/v1/", Dn = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ms = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wu = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(r, e) {
  (function() {
    var t, i = "4.17.21", o = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", p = 500, m = "__lodash_placeholder__", x = 1, S = 2, C = 4, R = 1, H = 2, K = 1, se = 2, $ = 4, j = 8, O = 16, T = 32, E = 64, h = 128, b = 256, G = 512, W = 30, ie = "...", ce = 800, de = 16, w = 1, P = 2, ee = 3, Q = 1 / 0, k = 9007199254740991, V = 17976931348623157e292, J = 0 / 0, re = 4294967295, me = re - 1, oe = re >>> 1, we = [["ary", h], ["bind", K], ["bindKey", se], ["curry", j], ["curryRight", O], ["flip", G], ["partial", T], ["partialRight", E], ["rearg", b]], le = "[object Arguments]", _e = "[object Array]", B = "[object AsyncFunction]", q = "[object Boolean]", F = "[object Date]", d = "[object DOMException]", A = "[object Error]", ae = "[object Function]", fe = "[object GeneratorFunction]", xe = "[object Map]", He = "[object Number]", ke = "[object Null]", je = "[object Object]", gt = "[object Promise]", yt = "[object Proxy]", Me = "[object RegExp]", Oe = "[object Set]", Ne = "[object String]", $e = "[object Symbol]", qe = "[object Undefined]", Pe = "[object WeakMap]", Fe = "[object WeakSet]", Se = "[object ArrayBuffer]", Ce = "[object DataView]", ze = "[object Float32Array]", Ie = "[object Float64Array]", Ve = "[object Int8Array]", We = "[object Int16Array]", et = "[object Int32Array]", tt = "[object Uint8Array]", Je = "[object Uint8ClampedArray]", tr = "[object Uint16Array]", lr = "[object Uint32Array]", Yr = /\b__p \+= '';/g, rr = /\b(__p \+=) '' \+/g, sn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Sn = /&(?:amp|lt|gt|quot|#39);/g, qn = /[&<>"']/g, Dt = RegExp(Sn.source), vt = RegExp(qn.source), St = /<%-([\s\S]+?)%>/g, xt = /<%([\s\S]+?)%>/g, wt = /<%=([\s\S]+?)%>/g, _t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ft = /^\w*$/, Lt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ot = /[\\^$.*+?()[\]{}|]/g, jt = RegExp(Ot.source), It = /^\s+/, At = /\s/, Pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, lt = /\{\n\/\* \[wrapped with (.+)\] \*/, Ut = /,? & /, Mt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Da = /[()=,{}\[\]\/\s]/, Sa = /\\(\\)?/g, xa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ar = /\w*$/, Oa = /^[-+]0x[0-9a-f]+$/i, Ia = /^0b[01]+$/i, Pa = /^\[object .+?Constructor\]$/, Ca = /^0o[0-7]+$/i, Aa = /^(?:0|[1-9]\d*)$/, on = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, hi = /($^)/, Ta = /['\n\r\u2028\u2029\\]/g, li = "\\ud800-\\udfff", Ra = "\\u0300-\\u036f", Na = "\\ufe20-\\ufe2f", fi = "\\u20d0-\\u20ff", Hs = Ra + Na + fi, zs = "\\u2700-\\u27bf", qr = "a-z\\xdf-\\xf6\\xf8-\\xff", $a = "\\xac\\xb1\\xd7\\xf7", Fa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", La = "\\u2000-\\u206f", ja = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ks = "A-Z\\xc0-\\xd6\\xd8-\\xde", ks = "\\ufe0e\\ufe0f", Bn = $a + Fa + La + ja, Ki = "['’]", Hn = "[" + li + "]", ki = "[" + Bn + "]", zn = "[" + Hs + "]", Vs = "\\d+", Ua = "[" + zs + "]", Gs = "[" + qr + "]", Ws = "[^" + li + Bn + Vs + zs + qr + Ks + "]", di = "\\ud83c[\\udffb-\\udfff]", Ma = "(?:" + zn + "|" + di + ")", Ys = "[^" + li + "]", pi = "(?:\\ud83c[\\udde6-\\uddff]){2}", xn = "[\\ud800-\\udbff][\\udc00-\\udfff]", wr = "[" + Ks + "]", Js = "\\u200d", Qs = "(?:" + Gs + "|" + Ws + ")", Jr = "(?:" + wr + "|" + Ws + ")", Xs = "(?:" + Ki + "(?:d|ll|m|re|s|t|ve))?", Zs = "(?:" + Ki + "(?:D|LL|M|RE|S|T|VE))?", eo = Ma + "?", to = "[" + ks + "]?", qa = "(?:" + Js + "(?:" + [Ys, pi, xn].join("|") + ")" + to + eo + ")*", an = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ro = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", no = to + eo + qa, gi = "(?:" + [Ua, pi, xn].join("|") + ")" + no, Ba = "(?:" + [Ys + zn + "?", zn, pi, xn, Hn].join("|") + ")", Vi = RegExp(Ki, "g"), Ha = RegExp(zn, "g"), yi = RegExp(di + "(?=" + di + ")|" + Ba + no, "g"), io = RegExp([wr + "?" + Gs + "+" + Xs + "(?=" + [ki, wr, "$"].join("|") + ")", Jr + "+" + Zs + "(?=" + [ki, wr + Qs, "$"].join("|") + ")", wr + "?" + Qs + "+" + Xs, wr + "+" + Zs, ro, an, Vs, gi].join("|"), "g"), so = RegExp("[" + Js + li + Hs + ks + "]"), Kn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, oo = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], za = -1, at = {};
    at[ze] = at[Ie] = at[Ve] = at[We] = at[et] = at[tt] = at[Je] = at[tr] = at[lr] = !0, at[le] = at[_e] = at[Se] = at[q] = at[Ce] = at[F] = at[A] = at[ae] = at[xe] = at[He] = at[je] = at[Me] = at[Oe] = at[Ne] = at[Pe] = !1;
    var st = {};
    st[le] = st[_e] = st[Se] = st[Ce] = st[q] = st[F] = st[ze] = st[Ie] = st[Ve] = st[We] = st[et] = st[xe] = st[He] = st[je] = st[Me] = st[Oe] = st[Ne] = st[$e] = st[tt] = st[Je] = st[tr] = st[lr] = !0, st[A] = st[ae] = st[Pe] = !1;
    var D = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, L = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, te = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, pe = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, ct = parseFloat, Te = parseInt, dt = typeof ms == "object" && ms && ms.Object === Object && ms, qt = typeof self == "object" && self && self.Object === Object && self, Qe = dt || qt || Function("return this")(), ut = e && !e.nodeType && e, Tt = ut && !0 && r && !r.nodeType && r, fr = Tt && Tt.exports === ut, Bt = fr && dt.process, pt = function() {
      try {
        var U = Tt && Tt.require && Tt.require("util").types;
        return U || Bt && Bt.binding && Bt.binding("util");
      } catch {
      }
    }(), nr = pt && pt.isArrayBuffer, Br = pt && pt.isDate, Tr = pt && pt.isMap, Qr = pt && pt.isRegExp, Gi = pt && pt.isSet, kn = pt && pt.isTypedArray;
    function kt(U, Y, z) {
      switch (z.length) {
        case 0:
          return U.call(Y);
        case 1:
          return U.call(Y, z[0]);
        case 2:
          return U.call(Y, z[0], z[1]);
        case 3:
          return U.call(Y, z[0], z[1], z[2]);
      }
      return U.apply(Y, z);
    }
    function Bg(U, Y, z, ge) {
      for (var Ae = -1, rt = U == null ? 0 : U.length; ++Ae < rt; ) {
        var zt = U[Ae];
        Y(ge, zt, z(zt), U);
      }
      return ge;
    }
    function Rr(U, Y) {
      for (var z = -1, ge = U == null ? 0 : U.length; ++z < ge && Y(U[z], z, U) !== !1; )
        ;
      return U;
    }
    function Hg(U, Y) {
      for (var z = U == null ? 0 : U.length; z-- && Y(U[z], z, U) !== !1; )
        ;
      return U;
    }
    function Dh(U, Y) {
      for (var z = -1, ge = U == null ? 0 : U.length; ++z < ge; )
        if (!Y(U[z], z, U))
          return !1;
      return !0;
    }
    function On(U, Y) {
      for (var z = -1, ge = U == null ? 0 : U.length, Ae = 0, rt = []; ++z < ge; ) {
        var zt = U[z];
        Y(zt, z, U) && (rt[Ae++] = zt);
      }
      return rt;
    }
    function ao(U, Y) {
      var z = U == null ? 0 : U.length;
      return !!z && vi(U, Y, 0) > -1;
    }
    function Ka(U, Y, z) {
      for (var ge = -1, Ae = U == null ? 0 : U.length; ++ge < Ae; )
        if (z(Y, U[ge]))
          return !0;
      return !1;
    }
    function bt(U, Y) {
      for (var z = -1, ge = U == null ? 0 : U.length, Ae = Array(ge); ++z < ge; )
        Ae[z] = Y(U[z], z, U);
      return Ae;
    }
    function In(U, Y) {
      for (var z = -1, ge = Y.length, Ae = U.length; ++z < ge; )
        U[Ae + z] = Y[z];
      return U;
    }
    function ka(U, Y, z, ge) {
      var Ae = -1, rt = U == null ? 0 : U.length;
      for (ge && rt && (z = U[++Ae]); ++Ae < rt; )
        z = Y(z, U[Ae], Ae, U);
      return z;
    }
    function zg(U, Y, z, ge) {
      var Ae = U == null ? 0 : U.length;
      for (ge && Ae && (z = U[--Ae]); Ae--; )
        z = Y(z, U[Ae], Ae, U);
      return z;
    }
    function Va(U, Y) {
      for (var z = -1, ge = U == null ? 0 : U.length; ++z < ge; )
        if (Y(U[z], z, U))
          return !0;
      return !1;
    }
    var Kg = Ga("length");
    function kg(U) {
      return U.split("");
    }
    function Vg(U) {
      return U.match(Mt) || [];
    }
    function Sh(U, Y, z) {
      var ge;
      return z(U, function(Ae, rt, zt) {
        if (Y(Ae, rt, zt))
          return ge = rt, !1;
      }), ge;
    }
    function co(U, Y, z, ge) {
      for (var Ae = U.length, rt = z + (ge ? 1 : -1); ge ? rt-- : ++rt < Ae; )
        if (Y(U[rt], rt, U))
          return rt;
      return -1;
    }
    function vi(U, Y, z) {
      return Y === Y ? i0(U, Y, z) : co(U, xh, z);
    }
    function Gg(U, Y, z, ge) {
      for (var Ae = z - 1, rt = U.length; ++Ae < rt; )
        if (ge(U[Ae], Y))
          return Ae;
      return -1;
    }
    function xh(U) {
      return U !== U;
    }
    function Oh(U, Y) {
      var z = U == null ? 0 : U.length;
      return z ? Ya(U, Y) / z : J;
    }
    function Ga(U) {
      return function(Y) {
        return Y == null ? t : Y[U];
      };
    }
    function Wa(U) {
      return function(Y) {
        return U == null ? t : U[Y];
      };
    }
    function Ih(U, Y, z, ge, Ae) {
      return Ae(U, function(rt, zt, ht) {
        z = ge ? (ge = !1, rt) : Y(z, rt, zt, ht);
      }), z;
    }
    function Wg(U, Y) {
      var z = U.length;
      for (U.sort(Y); z--; )
        U[z] = U[z].value;
      return U;
    }
    function Ya(U, Y) {
      for (var z, ge = -1, Ae = U.length; ++ge < Ae; ) {
        var rt = Y(U[ge]);
        rt !== t && (z = z === t ? rt : z + rt);
      }
      return z;
    }
    function Ja(U, Y) {
      for (var z = -1, ge = Array(U); ++z < U; )
        ge[z] = Y(z);
      return ge;
    }
    function Yg(U, Y) {
      return bt(Y, function(z) {
        return [z, U[z]];
      });
    }
    function Ph(U) {
      return U && U.slice(0, Rh(U) + 1).replace(It, "");
    }
    function Er(U) {
      return function(Y) {
        return U(Y);
      };
    }
    function Qa(U, Y) {
      return bt(Y, function(z) {
        return U[z];
      });
    }
    function Wi(U, Y) {
      return U.has(Y);
    }
    function Ch(U, Y) {
      for (var z = -1, ge = U.length; ++z < ge && vi(Y, U[z], 0) > -1; )
        ;
      return z;
    }
    function Ah(U, Y) {
      for (var z = U.length; z-- && vi(Y, U[z], 0) > -1; )
        ;
      return z;
    }
    function Jg(U, Y) {
      for (var z = U.length, ge = 0; z--; )
        U[z] === Y && ++ge;
      return ge;
    }
    var Qg = Wa(D), Xg = Wa(L);
    function Zg(U) {
      return "\\" + pe[U];
    }
    function e0(U, Y) {
      return U == null ? t : U[Y];
    }
    function _i(U) {
      return so.test(U);
    }
    function t0(U) {
      return Kn.test(U);
    }
    function r0(U) {
      for (var Y, z = []; !(Y = U.next()).done; )
        z.push(Y.value);
      return z;
    }
    function Xa(U) {
      var Y = -1, z = Array(U.size);
      return U.forEach(function(ge, Ae) {
        z[++Y] = [Ae, ge];
      }), z;
    }
    function Th(U, Y) {
      return function(z) {
        return U(Y(z));
      };
    }
    function Pn(U, Y) {
      for (var z = -1, ge = U.length, Ae = 0, rt = []; ++z < ge; ) {
        var zt = U[z];
        (zt === Y || zt === m) && (U[z] = m, rt[Ae++] = z);
      }
      return rt;
    }
    function uo(U) {
      var Y = -1, z = Array(U.size);
      return U.forEach(function(ge) {
        z[++Y] = ge;
      }), z;
    }
    function n0(U) {
      var Y = -1, z = Array(U.size);
      return U.forEach(function(ge) {
        z[++Y] = [ge, ge];
      }), z;
    }
    function i0(U, Y, z) {
      for (var ge = z - 1, Ae = U.length; ++ge < Ae; )
        if (U[ge] === Y)
          return ge;
      return -1;
    }
    function s0(U, Y, z) {
      for (var ge = z + 1; ge--; )
        if (U[ge] === Y)
          return ge;
      return ge;
    }
    function bi(U) {
      return _i(U) ? a0(U) : Kg(U);
    }
    function Hr(U) {
      return _i(U) ? c0(U) : kg(U);
    }
    function Rh(U) {
      for (var Y = U.length; Y-- && At.test(U.charAt(Y)); )
        ;
      return Y;
    }
    var o0 = Wa(te);
    function a0(U) {
      for (var Y = yi.lastIndex = 0; yi.test(U); )
        ++Y;
      return Y;
    }
    function c0(U) {
      return U.match(yi) || [];
    }
    function u0(U) {
      return U.match(io) || [];
    }
    var h0 = function U(Y) {
      Y = Y == null ? Qe : mi.defaults(Qe.Object(), Y, mi.pick(Qe, oo));
      var z = Y.Array, ge = Y.Date, Ae = Y.Error, rt = Y.Function, zt = Y.Math, ht = Y.Object, Za = Y.RegExp, l0 = Y.String, Nr = Y.TypeError, ho = z.prototype, f0 = rt.prototype, wi = ht.prototype, lo = Y["__core-js_shared__"], fo = f0.toString, it = wi.hasOwnProperty, d0 = 0, Nh = function() {
        var n = /[^.]+$/.exec(lo && lo.keys && lo.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), po = wi.toString, p0 = fo.call(ht), g0 = Qe._, y0 = Za("^" + fo.call(it).replace(Ot, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), go = fr ? Y.Buffer : t, Cn = Y.Symbol, yo = Y.Uint8Array, $h = go ? go.allocUnsafe : t, vo = Th(ht.getPrototypeOf, ht), Fh = ht.create, Lh = wi.propertyIsEnumerable, _o = ho.splice, jh = Cn ? Cn.isConcatSpreadable : t, Yi = Cn ? Cn.iterator : t, Vn = Cn ? Cn.toStringTag : t, bo = function() {
        try {
          var n = Qn(ht, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), v0 = Y.clearTimeout !== Qe.clearTimeout && Y.clearTimeout, _0 = ge && ge.now !== Qe.Date.now && ge.now, b0 = Y.setTimeout !== Qe.setTimeout && Y.setTimeout, mo = zt.ceil, wo = zt.floor, ec = ht.getOwnPropertySymbols, m0 = go ? go.isBuffer : t, Uh = Y.isFinite, w0 = ho.join, E0 = Th(ht.keys, ht), Kt = zt.max, Qt = zt.min, D0 = ge.now, S0 = Y.parseInt, Mh = zt.random, x0 = ho.reverse, tc = Qn(Y, "DataView"), Ji = Qn(Y, "Map"), rc = Qn(Y, "Promise"), Ei = Qn(Y, "Set"), Qi = Qn(Y, "WeakMap"), Xi = Qn(ht, "create"), Eo = Qi && new Qi(), Di = {}, O0 = Xn(tc), I0 = Xn(Ji), P0 = Xn(rc), C0 = Xn(Ei), A0 = Xn(Qi), Do = Cn ? Cn.prototype : t, Zi = Do ? Do.valueOf : t, qh = Do ? Do.toString : t;
      function v(n) {
        if (Ct(n) && !Re(n) && !(n instanceof Ye)) {
          if (n instanceof $r)
            return n;
          if (it.call(n, "__wrapped__"))
            return Bl(n);
        }
        return new $r(n);
      }
      var Si = function() {
        function n() {
        }
        return function(s) {
          if (!Et(s))
            return {};
          if (Fh)
            return Fh(s);
          n.prototype = s;
          var a = new n();
          return n.prototype = t, a;
        };
      }();
      function So() {
      }
      function $r(n, s) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = t;
      }
      v.templateSettings = { escape: St, evaluate: xt, interpolate: wt, variable: "", imports: { _: v } }, v.prototype = So.prototype, v.prototype.constructor = v, $r.prototype = Si(So.prototype), $r.prototype.constructor = $r;
      function Ye(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = re, this.__views__ = [];
      }
      function T0() {
        var n = new Ye(this.__wrapped__);
        return n.__actions__ = dr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = dr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = dr(this.__views__), n;
      }
      function R0() {
        if (this.__filtered__) {
          var n = new Ye(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function N0() {
        var n = this.__wrapped__.value(), s = this.__dir__, a = Re(n), l = s < 0, g = a ? n.length : 0, _ = ky(0, g, this.__views__), I = _.start, N = _.end, M = N - I, X = l ? N : I - 1, Z = this.__iteratees__, ne = Z.length, ue = 0, ye = Qt(M, this.__takeCount__);
        if (!a || !l && g == M && ye == M)
          return hl(n, this.__actions__);
        var Ee = [];
        e:
          for (; M-- && ue < ye; ) {
            X += s;
            for (var Be = -1, De = n[X]; ++Be < ne; ) {
              var Ge = Z[Be], Xe = Ge.iteratee, xr = Ge.type, or = Xe(De);
              if (xr == P)
                De = or;
              else if (!or) {
                if (xr == w)
                  continue e;
                break e;
              }
            }
            Ee[ue++] = De;
          }
        return Ee;
      }
      Ye.prototype = Si(So.prototype), Ye.prototype.constructor = Ye;
      function Gn(n) {
        var s = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++s < a; ) {
          var l = n[s];
          this.set(l[0], l[1]);
        }
      }
      function $0() {
        this.__data__ = Xi ? Xi(null) : {}, this.size = 0;
      }
      function F0(n) {
        var s = this.has(n) && delete this.__data__[n];
        return this.size -= s ? 1 : 0, s;
      }
      function L0(n) {
        var s = this.__data__;
        if (Xi) {
          var a = s[n];
          return a === y ? t : a;
        }
        return it.call(s, n) ? s[n] : t;
      }
      function j0(n) {
        var s = this.__data__;
        return Xi ? s[n] !== t : it.call(s, n);
      }
      function U0(n, s) {
        var a = this.__data__;
        return this.size += this.has(n) ? 0 : 1, a[n] = Xi && s === t ? y : s, this;
      }
      Gn.prototype.clear = $0, Gn.prototype.delete = F0, Gn.prototype.get = L0, Gn.prototype.has = j0, Gn.prototype.set = U0;
      function cn(n) {
        var s = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++s < a; ) {
          var l = n[s];
          this.set(l[0], l[1]);
        }
      }
      function M0() {
        this.__data__ = [], this.size = 0;
      }
      function q0(n) {
        var s = this.__data__, a = xo(s, n);
        if (a < 0)
          return !1;
        var l = s.length - 1;
        return a == l ? s.pop() : _o.call(s, a, 1), --this.size, !0;
      }
      function B0(n) {
        var s = this.__data__, a = xo(s, n);
        return a < 0 ? t : s[a][1];
      }
      function H0(n) {
        return xo(this.__data__, n) > -1;
      }
      function z0(n, s) {
        var a = this.__data__, l = xo(a, n);
        return l < 0 ? (++this.size, a.push([n, s])) : a[l][1] = s, this;
      }
      cn.prototype.clear = M0, cn.prototype.delete = q0, cn.prototype.get = B0, cn.prototype.has = H0, cn.prototype.set = z0;
      function un(n) {
        var s = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++s < a; ) {
          var l = n[s];
          this.set(l[0], l[1]);
        }
      }
      function K0() {
        this.size = 0, this.__data__ = { hash: new Gn(), map: new (Ji || cn)(), string: new Gn() };
      }
      function k0(n) {
        var s = jo(this, n).delete(n);
        return this.size -= s ? 1 : 0, s;
      }
      function V0(n) {
        return jo(this, n).get(n);
      }
      function G0(n) {
        return jo(this, n).has(n);
      }
      function W0(n, s) {
        var a = jo(this, n), l = a.size;
        return a.set(n, s), this.size += a.size == l ? 0 : 1, this;
      }
      un.prototype.clear = K0, un.prototype.delete = k0, un.prototype.get = V0, un.prototype.has = G0, un.prototype.set = W0;
      function Wn(n) {
        var s = -1, a = n == null ? 0 : n.length;
        for (this.__data__ = new un(); ++s < a; )
          this.add(n[s]);
      }
      function Y0(n) {
        return this.__data__.set(n, y), this;
      }
      function J0(n) {
        return this.__data__.has(n);
      }
      Wn.prototype.add = Wn.prototype.push = Y0, Wn.prototype.has = J0;
      function zr(n) {
        var s = this.__data__ = new cn(n);
        this.size = s.size;
      }
      function Q0() {
        this.__data__ = new cn(), this.size = 0;
      }
      function X0(n) {
        var s = this.__data__, a = s.delete(n);
        return this.size = s.size, a;
      }
      function Z0(n) {
        return this.__data__.get(n);
      }
      function ey(n) {
        return this.__data__.has(n);
      }
      function ty(n, s) {
        var a = this.__data__;
        if (a instanceof cn) {
          var l = a.__data__;
          if (!Ji || l.length < o - 1)
            return l.push([n, s]), this.size = ++a.size, this;
          a = this.__data__ = new un(l);
        }
        return a.set(n, s), this.size = a.size, this;
      }
      zr.prototype.clear = Q0, zr.prototype.delete = X0, zr.prototype.get = Z0, zr.prototype.has = ey, zr.prototype.set = ty;
      function Bh(n, s) {
        var a = Re(n), l = !a && Zn(n), g = !a && !l && $n(n), _ = !a && !l && !g && Pi(n), I = a || l || g || _, N = I ? Ja(n.length, l0) : [], M = N.length;
        for (var X in n)
          (s || it.call(n, X)) && !(I && (X == "length" || g && (X == "offset" || X == "parent") || _ && (X == "buffer" || X == "byteLength" || X == "byteOffset") || dn(X, M))) && N.push(X);
        return N;
      }
      function Hh(n) {
        var s = n.length;
        return s ? n[dc(0, s - 1)] : t;
      }
      function ry(n, s) {
        return Uo(dr(n), Yn(s, 0, n.length));
      }
      function ny(n) {
        return Uo(dr(n));
      }
      function nc(n, s, a) {
        (a !== t && !Kr(n[s], a) || a === t && !(s in n)) && hn(n, s, a);
      }
      function es(n, s, a) {
        var l = n[s];
        (!(it.call(n, s) && Kr(l, a)) || a === t && !(s in n)) && hn(n, s, a);
      }
      function xo(n, s) {
        for (var a = n.length; a--; )
          if (Kr(n[a][0], s))
            return a;
        return -1;
      }
      function iy(n, s, a, l) {
        return An(n, function(g, _, I) {
          s(l, g, a(g), I);
        }), l;
      }
      function zh(n, s) {
        return n && Zr(s, Vt(s), n);
      }
      function sy(n, s) {
        return n && Zr(s, gr(s), n);
      }
      function hn(n, s, a) {
        s == "__proto__" && bo ? bo(n, s, { configurable: !0, enumerable: !0, value: a, writable: !0 }) : n[s] = a;
      }
      function ic(n, s) {
        for (var a = -1, l = s.length, g = z(l), _ = n == null; ++a < l; )
          g[a] = _ ? t : Uc(n, s[a]);
        return g;
      }
      function Yn(n, s, a) {
        return n === n && (a !== t && (n = n <= a ? n : a), s !== t && (n = n >= s ? n : s)), n;
      }
      function Fr(n, s, a, l, g, _) {
        var I, N = s & x, M = s & S, X = s & C;
        if (a && (I = g ? a(n, l, g, _) : a(n)), I !== t)
          return I;
        if (!Et(n))
          return n;
        var Z = Re(n);
        if (Z) {
          if (I = Gy(n), !N)
            return dr(n, I);
        } else {
          var ne = Xt(n), ue = ne == ae || ne == fe;
          if ($n(n))
            return dl(n, N);
          if (ne == je || ne == le || ue && !g) {
            if (I = M || ue ? {} : Rl(n), !N)
              return M ? Ly(n, sy(I, n)) : Fy(n, zh(I, n));
          } else {
            if (!st[ne])
              return g ? n : {};
            I = Wy(n, ne, N);
          }
        }
        _ || (_ = new zr());
        var ye = _.get(n);
        if (ye)
          return ye;
        _.set(n, I), cf(n) ? n.forEach(function(De) {
          I.add(Fr(De, s, a, De, n, _));
        }) : of(n) && n.forEach(function(De, Ge) {
          I.set(Ge, Fr(De, s, a, Ge, n, _));
        });
        var Ee = X ? M ? Sc : Dc : M ? gr : Vt, Be = Z ? t : Ee(n);
        return Rr(Be || n, function(De, Ge) {
          Be && (Ge = De, De = n[Ge]), es(I, Ge, Fr(De, s, a, Ge, n, _));
        }), I;
      }
      function oy(n) {
        var s = Vt(n);
        return function(a) {
          return Kh(a, n, s);
        };
      }
      function Kh(n, s, a) {
        var l = a.length;
        if (n == null)
          return !l;
        for (n = ht(n); l--; ) {
          var g = a[l], _ = s[g], I = n[g];
          if (I === t && !(g in n) || !_(I))
            return !1;
        }
        return !0;
      }
      function kh(n, s, a) {
        if (typeof n != "function")
          throw new Nr(u);
        return as(function() {
          n.apply(t, a);
        }, s);
      }
      function ts(n, s, a, l) {
        var g = -1, _ = ao, I = !0, N = n.length, M = [], X = s.length;
        if (!N)
          return M;
        a && (s = bt(s, Er(a))), l ? (_ = Ka, I = !1) : s.length >= o && (_ = Wi, I = !1, s = new Wn(s));
        e:
          for (; ++g < N; ) {
            var Z = n[g], ne = a == null ? Z : a(Z);
            if (Z = l || Z !== 0 ? Z : 0, I && ne === ne) {
              for (var ue = X; ue--; )
                if (s[ue] === ne)
                  continue e;
              M.push(Z);
            } else
              _(s, ne, l) || M.push(Z);
          }
        return M;
      }
      var An = _l(Xr), Vh = _l(oc, !0);
      function ay(n, s) {
        var a = !0;
        return An(n, function(l, g, _) {
          return a = !!s(l, g, _), a;
        }), a;
      }
      function Oo(n, s, a) {
        for (var l = -1, g = n.length; ++l < g; ) {
          var _ = n[l], I = s(_);
          if (I != null && (N === t ? I === I && !Sr(I) : a(I, N)))
            var N = I, M = _;
        }
        return M;
      }
      function cy(n, s, a, l) {
        var g = n.length;
        for (a = Ue(a), a < 0 && (a = -a > g ? 0 : g + a), l = l === t || l > g ? g : Ue(l), l < 0 && (l += g), l = a > l ? 0 : hf(l); a < l; )
          n[a++] = s;
        return n;
      }
      function Gh(n, s) {
        var a = [];
        return An(n, function(l, g, _) {
          s(l, g, _) && a.push(l);
        }), a;
      }
      function Wt(n, s, a, l, g) {
        var _ = -1, I = n.length;
        for (a || (a = Jy), g || (g = []); ++_ < I; ) {
          var N = n[_];
          s > 0 && a(N) ? s > 1 ? Wt(N, s - 1, a, l, g) : In(g, N) : l || (g[g.length] = N);
        }
        return g;
      }
      var sc = bl(), Wh = bl(!0);
      function Xr(n, s) {
        return n && sc(n, s, Vt);
      }
      function oc(n, s) {
        return n && Wh(n, s, Vt);
      }
      function Io(n, s) {
        return On(s, function(a) {
          return pn(n[a]);
        });
      }
      function Jn(n, s) {
        s = Rn(s, n);
        for (var a = 0, l = s.length; n != null && a < l; )
          n = n[en(s[a++])];
        return a && a == l ? n : t;
      }
      function Yh(n, s, a) {
        var l = s(n);
        return Re(n) ? l : In(l, a(n));
      }
      function ir(n) {
        return n == null ? n === t ? qe : ke : Vn && Vn in ht(n) ? Ky(n) : nv(n);
      }
      function ac(n, s) {
        return n > s;
      }
      function uy(n, s) {
        return n != null && it.call(n, s);
      }
      function hy(n, s) {
        return n != null && s in ht(n);
      }
      function ly(n, s, a) {
        return n >= Qt(s, a) && n < Kt(s, a);
      }
      function cc(n, s, a) {
        for (var l = a ? Ka : ao, g = n[0].length, _ = n.length, I = _, N = z(_), M = 1 / 0, X = []; I--; ) {
          var Z = n[I];
          I && s && (Z = bt(Z, Er(s))), M = Qt(Z.length, M), N[I] = !a && (s || g >= 120 && Z.length >= 120) ? new Wn(I && Z) : t;
        }
        Z = n[0];
        var ne = -1, ue = N[0];
        e:
          for (; ++ne < g && X.length < M; ) {
            var ye = Z[ne], Ee = s ? s(ye) : ye;
            if (ye = a || ye !== 0 ? ye : 0, !(ue ? Wi(ue, Ee) : l(X, Ee, a))) {
              for (I = _; --I; ) {
                var Be = N[I];
                if (!(Be ? Wi(Be, Ee) : l(n[I], Ee, a)))
                  continue e;
              }
              ue && ue.push(Ee), X.push(ye);
            }
          }
        return X;
      }
      function fy(n, s, a, l) {
        return Xr(n, function(g, _, I) {
          s(l, a(g), _, I);
        }), l;
      }
      function rs(n, s, a) {
        s = Rn(s, n), n = Ll(n, s);
        var l = n == null ? n : n[en(jr(s))];
        return l == null ? t : kt(l, n, a);
      }
      function Jh(n) {
        return Ct(n) && ir(n) == le;
      }
      function dy(n) {
        return Ct(n) && ir(n) == Se;
      }
      function py(n) {
        return Ct(n) && ir(n) == F;
      }
      function ns(n, s, a, l, g) {
        return n === s ? !0 : n == null || s == null || !Ct(n) && !Ct(s) ? n !== n && s !== s : gy(n, s, a, l, ns, g);
      }
      function gy(n, s, a, l, g, _) {
        var I = Re(n), N = Re(s), M = I ? _e : Xt(n), X = N ? _e : Xt(s);
        M = M == le ? je : M, X = X == le ? je : X;
        var Z = M == je, ne = X == je, ue = M == X;
        if (ue && $n(n)) {
          if (!$n(s))
            return !1;
          I = !0, Z = !1;
        }
        if (ue && !Z)
          return _ || (_ = new zr()), I || Pi(n) ? Cl(n, s, a, l, g, _) : Hy(n, s, M, a, l, g, _);
        if (!(a & R)) {
          var ye = Z && it.call(n, "__wrapped__"), Ee = ne && it.call(s, "__wrapped__");
          if (ye || Ee) {
            var Be = ye ? n.value() : n, De = Ee ? s.value() : s;
            return _ || (_ = new zr()), g(Be, De, a, l, _);
          }
        }
        return ue ? (_ || (_ = new zr()), zy(n, s, a, l, g, _)) : !1;
      }
      function yy(n) {
        return Ct(n) && Xt(n) == xe;
      }
      function uc(n, s, a, l) {
        var g = a.length, _ = g, I = !l;
        if (n == null)
          return !_;
        for (n = ht(n); g--; ) {
          var N = a[g];
          if (I && N[2] ? N[1] !== n[N[0]] : !(N[0] in n))
            return !1;
        }
        for (; ++g < _; ) {
          N = a[g];
          var M = N[0], X = n[M], Z = N[1];
          if (I && N[2]) {
            if (X === t && !(M in n))
              return !1;
          } else {
            var ne = new zr();
            if (l)
              var ue = l(X, Z, M, n, s, ne);
            if (!(ue === t ? ns(Z, X, R | H, l, ne) : ue))
              return !1;
          }
        }
        return !0;
      }
      function Qh(n) {
        if (!Et(n) || Xy(n))
          return !1;
        var s = pn(n) ? y0 : Pa;
        return s.test(Xn(n));
      }
      function vy(n) {
        return Ct(n) && ir(n) == Me;
      }
      function _y(n) {
        return Ct(n) && Xt(n) == Oe;
      }
      function by(n) {
        return Ct(n) && Ko(n.length) && !!at[ir(n)];
      }
      function Xh(n) {
        return typeof n == "function" ? n : n == null ? yr : typeof n == "object" ? Re(n) ? tl(n[0], n[1]) : el(n) : wf(n);
      }
      function hc(n) {
        if (!os(n))
          return E0(n);
        var s = [];
        for (var a in ht(n))
          it.call(n, a) && a != "constructor" && s.push(a);
        return s;
      }
      function my(n) {
        if (!Et(n))
          return rv(n);
        var s = os(n), a = [];
        for (var l in n)
          l == "constructor" && (s || !it.call(n, l)) || a.push(l);
        return a;
      }
      function lc(n, s) {
        return n < s;
      }
      function Zh(n, s) {
        var a = -1, l = pr(n) ? z(n.length) : [];
        return An(n, function(g, _, I) {
          l[++a] = s(g, _, I);
        }), l;
      }
      function el(n) {
        var s = Oc(n);
        return s.length == 1 && s[0][2] ? $l(s[0][0], s[0][1]) : function(a) {
          return a === n || uc(a, n, s);
        };
      }
      function tl(n, s) {
        return Pc(n) && Nl(s) ? $l(en(n), s) : function(a) {
          var l = Uc(a, n);
          return l === t && l === s ? Mc(a, n) : ns(s, l, R | H);
        };
      }
      function Po(n, s, a, l, g) {
        n !== s && sc(s, function(_, I) {
          if (g || (g = new zr()), Et(_))
            wy(n, s, I, a, Po, l, g);
          else {
            var N = l ? l(Ac(n, I), _, I + "", n, s, g) : t;
            N === t && (N = _), nc(n, I, N);
          }
        }, gr);
      }
      function wy(n, s, a, l, g, _, I) {
        var N = Ac(n, a), M = Ac(s, a), X = I.get(M);
        if (X) {
          nc(n, a, X);
          return;
        }
        var Z = _ ? _(N, M, a + "", n, s, I) : t, ne = Z === t;
        if (ne) {
          var ue = Re(M), ye = !ue && $n(M), Ee = !ue && !ye && Pi(M);
          Z = M, ue || ye || Ee ? Re(N) ? Z = N : Rt(N) ? Z = dr(N) : ye ? (ne = !1, Z = dl(M, !0)) : Ee ? (ne = !1, Z = pl(M, !0)) : Z = [] : cs(M) || Zn(M) ? (Z = N, Zn(N) ? Z = lf(N) : (!Et(N) || pn(N)) && (Z = Rl(M))) : ne = !1;
        }
        ne && (I.set(M, Z), g(Z, M, l, _, I), I.delete(M)), nc(n, a, Z);
      }
      function rl(n, s) {
        var a = n.length;
        if (a)
          return s += s < 0 ? a : 0, dn(s, a) ? n[s] : t;
      }
      function nl(n, s, a) {
        s.length ? s = bt(s, function(_) {
          return Re(_) ? function(I) {
            return Jn(I, _.length === 1 ? _[0] : _);
          } : _;
        }) : s = [yr];
        var l = -1;
        s = bt(s, Er(be()));
        var g = Zh(n, function(_, I, N) {
          var M = bt(s, function(X) {
            return X(_);
          });
          return { criteria: M, index: ++l, value: _ };
        });
        return Wg(g, function(_, I) {
          return $y(_, I, a);
        });
      }
      function Ey(n, s) {
        return il(n, s, function(a, l) {
          return Mc(n, l);
        });
      }
      function il(n, s, a) {
        for (var l = -1, g = s.length, _ = {}; ++l < g; ) {
          var I = s[l], N = Jn(n, I);
          a(N, I) && is(_, Rn(I, n), N);
        }
        return _;
      }
      function Dy(n) {
        return function(s) {
          return Jn(s, n);
        };
      }
      function fc(n, s, a, l) {
        var g = l ? Gg : vi, _ = -1, I = s.length, N = n;
        for (n === s && (s = dr(s)), a && (N = bt(n, Er(a))); ++_ < I; )
          for (var M = 0, X = s[_], Z = a ? a(X) : X; (M = g(N, Z, M, l)) > -1; )
            N !== n && _o.call(N, M, 1), _o.call(n, M, 1);
        return n;
      }
      function sl(n, s) {
        for (var a = n ? s.length : 0, l = a - 1; a--; ) {
          var g = s[a];
          if (a == l || g !== _) {
            var _ = g;
            dn(g) ? _o.call(n, g, 1) : yc(n, g);
          }
        }
        return n;
      }
      function dc(n, s) {
        return n + wo(Mh() * (s - n + 1));
      }
      function Sy(n, s, a, l) {
        for (var g = -1, _ = Kt(mo((s - n) / (a || 1)), 0), I = z(_); _--; )
          I[l ? _ : ++g] = n, n += a;
        return I;
      }
      function pc(n, s) {
        var a = "";
        if (!n || s < 1 || s > k)
          return a;
        do
          s % 2 && (a += n), s = wo(s / 2), s && (n += n);
        while (s);
        return a;
      }
      function Ke(n, s) {
        return Tc(Fl(n, s, yr), n + "");
      }
      function xy(n) {
        return Hh(Ci(n));
      }
      function Oy(n, s) {
        var a = Ci(n);
        return Uo(a, Yn(s, 0, a.length));
      }
      function is(n, s, a, l) {
        if (!Et(n))
          return n;
        s = Rn(s, n);
        for (var g = -1, _ = s.length, I = _ - 1, N = n; N != null && ++g < _; ) {
          var M = en(s[g]), X = a;
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return n;
          if (g != I) {
            var Z = N[M];
            X = l ? l(Z, M, N) : t, X === t && (X = Et(Z) ? Z : dn(s[g + 1]) ? [] : {});
          }
          es(N, M, X), N = N[M];
        }
        return n;
      }
      var ol = Eo ? function(n, s) {
        return Eo.set(n, s), n;
      } : yr, Iy = bo ? function(n, s) {
        return bo(n, "toString", { configurable: !0, enumerable: !1, value: Bc(s), writable: !0 });
      } : yr;
      function Py(n) {
        return Uo(Ci(n));
      }
      function Lr(n, s, a) {
        var l = -1, g = n.length;
        s < 0 && (s = -s > g ? 0 : g + s), a = a > g ? g : a, a < 0 && (a += g), g = s > a ? 0 : a - s >>> 0, s >>>= 0;
        for (var _ = z(g); ++l < g; )
          _[l] = n[l + s];
        return _;
      }
      function Cy(n, s) {
        var a;
        return An(n, function(l, g, _) {
          return a = s(l, g, _), !a;
        }), !!a;
      }
      function Co(n, s, a) {
        var l = 0, g = n == null ? l : n.length;
        if (typeof s == "number" && s === s && g <= oe) {
          for (; l < g; ) {
            var _ = l + g >>> 1, I = n[_];
            I !== null && !Sr(I) && (a ? I <= s : I < s) ? l = _ + 1 : g = _;
          }
          return g;
        }
        return gc(n, s, yr, a);
      }
      function gc(n, s, a, l) {
        var g = 0, _ = n == null ? 0 : n.length;
        if (_ === 0)
          return 0;
        s = a(s);
        for (var I = s !== s, N = s === null, M = Sr(s), X = s === t; g < _; ) {
          var Z = wo((g + _) / 2), ne = a(n[Z]), ue = ne !== t, ye = ne === null, Ee = ne === ne, Be = Sr(ne);
          if (I)
            var De = l || Ee;
          else
            X ? De = Ee && (l || ue) : N ? De = Ee && ue && (l || !ye) : M ? De = Ee && ue && !ye && (l || !Be) : ye || Be ? De = !1 : De = l ? ne <= s : ne < s;
          De ? g = Z + 1 : _ = Z;
        }
        return Qt(_, me);
      }
      function al(n, s) {
        for (var a = -1, l = n.length, g = 0, _ = []; ++a < l; ) {
          var I = n[a], N = s ? s(I) : I;
          if (!a || !Kr(N, M)) {
            var M = N;
            _[g++] = I === 0 ? 0 : I;
          }
        }
        return _;
      }
      function cl(n) {
        return typeof n == "number" ? n : Sr(n) ? J : +n;
      }
      function Dr(n) {
        if (typeof n == "string")
          return n;
        if (Re(n))
          return bt(n, Dr) + "";
        if (Sr(n))
          return qh ? qh.call(n) : "";
        var s = n + "";
        return s == "0" && 1 / n == -Q ? "-0" : s;
      }
      function Tn(n, s, a) {
        var l = -1, g = ao, _ = n.length, I = !0, N = [], M = N;
        if (a)
          I = !1, g = Ka;
        else if (_ >= o) {
          var X = s ? null : qy(n);
          if (X)
            return uo(X);
          I = !1, g = Wi, M = new Wn();
        } else
          M = s ? [] : N;
        e:
          for (; ++l < _; ) {
            var Z = n[l], ne = s ? s(Z) : Z;
            if (Z = a || Z !== 0 ? Z : 0, I && ne === ne) {
              for (var ue = M.length; ue--; )
                if (M[ue] === ne)
                  continue e;
              s && M.push(ne), N.push(Z);
            } else
              g(M, ne, a) || (M !== N && M.push(ne), N.push(Z));
          }
        return N;
      }
      function yc(n, s) {
        return s = Rn(s, n), n = Ll(n, s), n == null || delete n[en(jr(s))];
      }
      function ul(n, s, a, l) {
        return is(n, s, a(Jn(n, s)), l);
      }
      function Ao(n, s, a, l) {
        for (var g = n.length, _ = l ? g : -1; (l ? _-- : ++_ < g) && s(n[_], _, n); )
          ;
        return a ? Lr(n, l ? 0 : _, l ? _ + 1 : g) : Lr(n, l ? _ + 1 : 0, l ? g : _);
      }
      function hl(n, s) {
        var a = n;
        return a instanceof Ye && (a = a.value()), ka(s, function(l, g) {
          return g.func.apply(g.thisArg, In([l], g.args));
        }, a);
      }
      function vc(n, s, a) {
        var l = n.length;
        if (l < 2)
          return l ? Tn(n[0]) : [];
        for (var g = -1, _ = z(l); ++g < l; )
          for (var I = n[g], N = -1; ++N < l; )
            N != g && (_[g] = ts(_[g] || I, n[N], s, a));
        return Tn(Wt(_, 1), s, a);
      }
      function ll(n, s, a) {
        for (var l = -1, g = n.length, _ = s.length, I = {}; ++l < g; ) {
          var N = l < _ ? s[l] : t;
          a(I, n[l], N);
        }
        return I;
      }
      function _c(n) {
        return Rt(n) ? n : [];
      }
      function bc(n) {
        return typeof n == "function" ? n : yr;
      }
      function Rn(n, s) {
        return Re(n) ? n : Pc(n, s) ? [n] : ql(nt(n));
      }
      var Ay = Ke;
      function Nn(n, s, a) {
        var l = n.length;
        return a = a === t ? l : a, !s && a >= l ? n : Lr(n, s, a);
      }
      var fl = v0 || function(n) {
        return Qe.clearTimeout(n);
      };
      function dl(n, s) {
        if (s)
          return n.slice();
        var a = n.length, l = $h ? $h(a) : new n.constructor(a);
        return n.copy(l), l;
      }
      function mc(n) {
        var s = new n.constructor(n.byteLength);
        return new yo(s).set(new yo(n)), s;
      }
      function Ty(n, s) {
        var a = s ? mc(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.byteLength);
      }
      function Ry(n) {
        var s = new n.constructor(n.source, Ar.exec(n));
        return s.lastIndex = n.lastIndex, s;
      }
      function Ny(n) {
        return Zi ? ht(Zi.call(n)) : {};
      }
      function pl(n, s) {
        var a = s ? mc(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.length);
      }
      function gl(n, s) {
        if (n !== s) {
          var a = n !== t, l = n === null, g = n === n, _ = Sr(n), I = s !== t, N = s === null, M = s === s, X = Sr(s);
          if (!N && !X && !_ && n > s || _ && I && M && !N && !X || l && I && M || !a && M || !g)
            return 1;
          if (!l && !_ && !X && n < s || X && a && g && !l && !_ || N && a && g || !I && g || !M)
            return -1;
        }
        return 0;
      }
      function $y(n, s, a) {
        for (var l = -1, g = n.criteria, _ = s.criteria, I = g.length, N = a.length; ++l < I; ) {
          var M = gl(g[l], _[l]);
          if (M) {
            if (l >= N)
              return M;
            var X = a[l];
            return M * (X == "desc" ? -1 : 1);
          }
        }
        return n.index - s.index;
      }
      function yl(n, s, a, l) {
        for (var g = -1, _ = n.length, I = a.length, N = -1, M = s.length, X = Kt(_ - I, 0), Z = z(M + X), ne = !l; ++N < M; )
          Z[N] = s[N];
        for (; ++g < I; )
          (ne || g < _) && (Z[a[g]] = n[g]);
        for (; X--; )
          Z[N++] = n[g++];
        return Z;
      }
      function vl(n, s, a, l) {
        for (var g = -1, _ = n.length, I = -1, N = a.length, M = -1, X = s.length, Z = Kt(_ - N, 0), ne = z(Z + X), ue = !l; ++g < Z; )
          ne[g] = n[g];
        for (var ye = g; ++M < X; )
          ne[ye + M] = s[M];
        for (; ++I < N; )
          (ue || g < _) && (ne[ye + a[I]] = n[g++]);
        return ne;
      }
      function dr(n, s) {
        var a = -1, l = n.length;
        for (s || (s = z(l)); ++a < l; )
          s[a] = n[a];
        return s;
      }
      function Zr(n, s, a, l) {
        var g = !a;
        a || (a = {});
        for (var _ = -1, I = s.length; ++_ < I; ) {
          var N = s[_], M = l ? l(a[N], n[N], N, a, n) : t;
          M === t && (M = n[N]), g ? hn(a, N, M) : es(a, N, M);
        }
        return a;
      }
      function Fy(n, s) {
        return Zr(n, Ic(n), s);
      }
      function Ly(n, s) {
        return Zr(n, Al(n), s);
      }
      function To(n, s) {
        return function(a, l) {
          var g = Re(a) ? Bg : iy, _ = s ? s() : {};
          return g(a, n, be(l, 2), _);
        };
      }
      function xi(n) {
        return Ke(function(s, a) {
          var l = -1, g = a.length, _ = g > 1 ? a[g - 1] : t, I = g > 2 ? a[2] : t;
          for (_ = n.length > 3 && typeof _ == "function" ? (g--, _) : t, I && sr(a[0], a[1], I) && (_ = g < 3 ? t : _, g = 1), s = ht(s); ++l < g; ) {
            var N = a[l];
            N && n(s, N, l, _);
          }
          return s;
        });
      }
      function _l(n, s) {
        return function(a, l) {
          if (a == null)
            return a;
          if (!pr(a))
            return n(a, l);
          for (var g = a.length, _ = s ? g : -1, I = ht(a); (s ? _-- : ++_ < g) && l(I[_], _, I) !== !1; )
            ;
          return a;
        };
      }
      function bl(n) {
        return function(s, a, l) {
          for (var g = -1, _ = ht(s), I = l(s), N = I.length; N--; ) {
            var M = I[n ? N : ++g];
            if (a(_[M], M, _) === !1)
              break;
          }
          return s;
        };
      }
      function jy(n, s, a) {
        var l = s & K, g = ss(n);
        function _() {
          var I = this && this !== Qe && this instanceof _ ? g : n;
          return I.apply(l ? a : this, arguments);
        }
        return _;
      }
      function ml(n) {
        return function(s) {
          s = nt(s);
          var a = _i(s) ? Hr(s) : t, l = a ? a[0] : s.charAt(0), g = a ? Nn(a, 1).join("") : s.slice(1);
          return l[n]() + g;
        };
      }
      function Oi(n) {
        return function(s) {
          return ka(bf(_f(s).replace(Vi, "")), n, "");
        };
      }
      function ss(n) {
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return new n();
            case 1:
              return new n(s[0]);
            case 2:
              return new n(s[0], s[1]);
            case 3:
              return new n(s[0], s[1], s[2]);
            case 4:
              return new n(s[0], s[1], s[2], s[3]);
            case 5:
              return new n(s[0], s[1], s[2], s[3], s[4]);
            case 6:
              return new n(s[0], s[1], s[2], s[3], s[4], s[5]);
            case 7:
              return new n(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
          }
          var a = Si(n.prototype), l = n.apply(a, s);
          return Et(l) ? l : a;
        };
      }
      function Uy(n, s, a) {
        var l = ss(n);
        function g() {
          for (var _ = arguments.length, I = z(_), N = _, M = Ii(g); N--; )
            I[N] = arguments[N];
          var X = _ < 3 && I[0] !== M && I[_ - 1] !== M ? [] : Pn(I, M);
          if (_ -= X.length, _ < a)
            return xl(n, s, Ro, g.placeholder, t, I, X, t, t, a - _);
          var Z = this && this !== Qe && this instanceof g ? l : n;
          return kt(Z, this, I);
        }
        return g;
      }
      function wl(n) {
        return function(s, a, l) {
          var g = ht(s);
          if (!pr(s)) {
            var _ = be(a, 3);
            s = Vt(s), a = function(N) {
              return _(g[N], N, g);
            };
          }
          var I = n(s, a, l);
          return I > -1 ? g[_ ? s[I] : I] : t;
        };
      }
      function El(n) {
        return fn(function(s) {
          var a = s.length, l = a, g = $r.prototype.thru;
          for (n && s.reverse(); l--; ) {
            var _ = s[l];
            if (typeof _ != "function")
              throw new Nr(u);
            if (g && !I && Lo(_) == "wrapper")
              var I = new $r([], !0);
          }
          for (l = I ? l : a; ++l < a; ) {
            _ = s[l];
            var N = Lo(_), M = N == "wrapper" ? xc(_) : t;
            M && Cc(M[0]) && M[1] == (h | j | T | b) && !M[4].length && M[9] == 1 ? I = I[Lo(M[0])].apply(I, M[3]) : I = _.length == 1 && Cc(_) ? I[N]() : I.thru(_);
          }
          return function() {
            var X = arguments, Z = X[0];
            if (I && X.length == 1 && Re(Z))
              return I.plant(Z).value();
            for (var ne = 0, ue = a ? s[ne].apply(this, X) : Z; ++ne < a; )
              ue = s[ne].call(this, ue);
            return ue;
          };
        });
      }
      function Ro(n, s, a, l, g, _, I, N, M, X) {
        var Z = s & h, ne = s & K, ue = s & se, ye = s & (j | O), Ee = s & G, Be = ue ? t : ss(n);
        function De() {
          for (var Ge = arguments.length, Xe = z(Ge), xr = Ge; xr--; )
            Xe[xr] = arguments[xr];
          if (ye)
            var or = Ii(De), Or = Jg(Xe, or);
          if (l && (Xe = yl(Xe, l, g, ye)), _ && (Xe = vl(Xe, _, I, ye)), Ge -= Or, ye && Ge < X) {
            var Nt = Pn(Xe, or);
            return xl(n, s, Ro, De.placeholder, a, Xe, Nt, N, M, X - Ge);
          }
          var kr = ne ? a : this, yn = ue ? kr[n] : n;
          return Ge = Xe.length, N ? Xe = iv(Xe, N) : Ee && Ge > 1 && Xe.reverse(), Z && M < Ge && (Xe.length = M), this && this !== Qe && this instanceof De && (yn = Be || ss(yn)), yn.apply(kr, Xe);
        }
        return De;
      }
      function Dl(n, s) {
        return function(a, l) {
          return fy(a, n, s(l), {});
        };
      }
      function No(n, s) {
        return function(a, l) {
          var g;
          if (a === t && l === t)
            return s;
          if (a !== t && (g = a), l !== t) {
            if (g === t)
              return l;
            typeof a == "string" || typeof l == "string" ? (a = Dr(a), l = Dr(l)) : (a = cl(a), l = cl(l)), g = n(a, l);
          }
          return g;
        };
      }
      function wc(n) {
        return fn(function(s) {
          return s = bt(s, Er(be())), Ke(function(a) {
            var l = this;
            return n(s, function(g) {
              return kt(g, l, a);
            });
          });
        });
      }
      function $o(n, s) {
        s = s === t ? " " : Dr(s);
        var a = s.length;
        if (a < 2)
          return a ? pc(s, n) : s;
        var l = pc(s, mo(n / bi(s)));
        return _i(s) ? Nn(Hr(l), 0, n).join("") : l.slice(0, n);
      }
      function My(n, s, a, l) {
        var g = s & K, _ = ss(n);
        function I() {
          for (var N = -1, M = arguments.length, X = -1, Z = l.length, ne = z(Z + M), ue = this && this !== Qe && this instanceof I ? _ : n; ++X < Z; )
            ne[X] = l[X];
          for (; M--; )
            ne[X++] = arguments[++N];
          return kt(ue, g ? a : this, ne);
        }
        return I;
      }
      function Sl(n) {
        return function(s, a, l) {
          return l && typeof l != "number" && sr(s, a, l) && (a = l = t), s = gn(s), a === t ? (a = s, s = 0) : a = gn(a), l = l === t ? s < a ? 1 : -1 : gn(l), Sy(s, a, l, n);
        };
      }
      function Fo(n) {
        return function(s, a) {
          return typeof s == "string" && typeof a == "string" || (s = Ur(s), a = Ur(a)), n(s, a);
        };
      }
      function xl(n, s, a, l, g, _, I, N, M, X) {
        var Z = s & j, ne = Z ? I : t, ue = Z ? t : I, ye = Z ? _ : t, Ee = Z ? t : _;
        s |= Z ? T : E, s &= ~(Z ? E : T), s & $ || (s &= ~(K | se));
        var Be = [n, s, g, ye, ne, Ee, ue, N, M, X], De = a.apply(t, Be);
        return Cc(n) && jl(De, Be), De.placeholder = l, Ul(De, n, s);
      }
      function Ec(n) {
        var s = zt[n];
        return function(a, l) {
          if (a = Ur(a), l = l == null ? 0 : Qt(Ue(l), 292), l && Uh(a)) {
            var g = (nt(a) + "e").split("e"), _ = s(g[0] + "e" + (+g[1] + l));
            return g = (nt(_) + "e").split("e"), +(g[0] + "e" + (+g[1] - l));
          }
          return s(a);
        };
      }
      var qy = Ei && 1 / uo(new Ei([, -0]))[1] == Q ? function(n) {
        return new Ei(n);
      } : Kc;
      function Ol(n) {
        return function(s) {
          var a = Xt(s);
          return a == xe ? Xa(s) : a == Oe ? n0(s) : Yg(s, n(s));
        };
      }
      function ln(n, s, a, l, g, _, I, N) {
        var M = s & se;
        if (!M && typeof n != "function")
          throw new Nr(u);
        var X = l ? l.length : 0;
        if (X || (s &= ~(T | E), l = g = t), I = I === t ? I : Kt(Ue(I), 0), N = N === t ? N : Ue(N), X -= g ? g.length : 0, s & E) {
          var Z = l, ne = g;
          l = g = t;
        }
        var ue = M ? t : xc(n), ye = [n, s, a, l, g, Z, ne, _, I, N];
        if (ue && tv(ye, ue), n = ye[0], s = ye[1], a = ye[2], l = ye[3], g = ye[4], N = ye[9] = ye[9] === t ? M ? 0 : n.length : Kt(ye[9] - X, 0), !N && s & (j | O) && (s &= ~(j | O)), !s || s == K)
          var Ee = jy(n, s, a);
        else
          s == j || s == O ? Ee = Uy(n, s, N) : (s == T || s == (K | T)) && !g.length ? Ee = My(n, s, a, l) : Ee = Ro.apply(t, ye);
        var Be = ue ? ol : jl;
        return Ul(Be(Ee, ye), n, s);
      }
      function Il(n, s, a, l) {
        return n === t || Kr(n, wi[a]) && !it.call(l, a) ? s : n;
      }
      function Pl(n, s, a, l, g, _) {
        return Et(n) && Et(s) && (_.set(s, n), Po(n, s, t, Pl, _), _.delete(s)), n;
      }
      function By(n) {
        return cs(n) ? t : n;
      }
      function Cl(n, s, a, l, g, _) {
        var I = a & R, N = n.length, M = s.length;
        if (N != M && !(I && M > N))
          return !1;
        var X = _.get(n), Z = _.get(s);
        if (X && Z)
          return X == s && Z == n;
        var ne = -1, ue = !0, ye = a & H ? new Wn() : t;
        for (_.set(n, s), _.set(s, n); ++ne < N; ) {
          var Ee = n[ne], Be = s[ne];
          if (l)
            var De = I ? l(Be, Ee, ne, s, n, _) : l(Ee, Be, ne, n, s, _);
          if (De !== t) {
            if (De)
              continue;
            ue = !1;
            break;
          }
          if (ye) {
            if (!Va(s, function(Ge, Xe) {
              if (!Wi(ye, Xe) && (Ee === Ge || g(Ee, Ge, a, l, _)))
                return ye.push(Xe);
            })) {
              ue = !1;
              break;
            }
          } else if (!(Ee === Be || g(Ee, Be, a, l, _))) {
            ue = !1;
            break;
          }
        }
        return _.delete(n), _.delete(s), ue;
      }
      function Hy(n, s, a, l, g, _, I) {
        switch (a) {
          case Ce:
            if (n.byteLength != s.byteLength || n.byteOffset != s.byteOffset)
              return !1;
            n = n.buffer, s = s.buffer;
          case Se:
            return !(n.byteLength != s.byteLength || !_(new yo(n), new yo(s)));
          case q:
          case F:
          case He:
            return Kr(+n, +s);
          case A:
            return n.name == s.name && n.message == s.message;
          case Me:
          case Ne:
            return n == s + "";
          case xe:
            var N = Xa;
          case Oe:
            var M = l & R;
            if (N || (N = uo), n.size != s.size && !M)
              return !1;
            var X = I.get(n);
            if (X)
              return X == s;
            l |= H, I.set(n, s);
            var Z = Cl(N(n), N(s), l, g, _, I);
            return I.delete(n), Z;
          case $e:
            if (Zi)
              return Zi.call(n) == Zi.call(s);
        }
        return !1;
      }
      function zy(n, s, a, l, g, _) {
        var I = a & R, N = Dc(n), M = N.length, X = Dc(s), Z = X.length;
        if (M != Z && !I)
          return !1;
        for (var ne = M; ne--; ) {
          var ue = N[ne];
          if (!(I ? ue in s : it.call(s, ue)))
            return !1;
        }
        var ye = _.get(n), Ee = _.get(s);
        if (ye && Ee)
          return ye == s && Ee == n;
        var Be = !0;
        _.set(n, s), _.set(s, n);
        for (var De = I; ++ne < M; ) {
          ue = N[ne];
          var Ge = n[ue], Xe = s[ue];
          if (l)
            var xr = I ? l(Xe, Ge, ue, s, n, _) : l(Ge, Xe, ue, n, s, _);
          if (!(xr === t ? Ge === Xe || g(Ge, Xe, a, l, _) : xr)) {
            Be = !1;
            break;
          }
          De || (De = ue == "constructor");
        }
        if (Be && !De) {
          var or = n.constructor, Or = s.constructor;
          or != Or && "constructor" in n && "constructor" in s && !(typeof or == "function" && or instanceof or && typeof Or == "function" && Or instanceof Or) && (Be = !1);
        }
        return _.delete(n), _.delete(s), Be;
      }
      function fn(n) {
        return Tc(Fl(n, t, Kl), n + "");
      }
      function Dc(n) {
        return Yh(n, Vt, Ic);
      }
      function Sc(n) {
        return Yh(n, gr, Al);
      }
      var xc = Eo ? function(n) {
        return Eo.get(n);
      } : Kc;
      function Lo(n) {
        for (var s = n.name + "", a = Di[s], l = it.call(Di, s) ? a.length : 0; l--; ) {
          var g = a[l], _ = g.func;
          if (_ == null || _ == n)
            return g.name;
        }
        return s;
      }
      function Ii(n) {
        var s = it.call(v, "placeholder") ? v : n;
        return s.placeholder;
      }
      function be() {
        var n = v.iteratee || Hc;
        return n = n === Hc ? Xh : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function jo(n, s) {
        var a = n.__data__;
        return Qy(s) ? a[typeof s == "string" ? "string" : "hash"] : a.map;
      }
      function Oc(n) {
        for (var s = Vt(n), a = s.length; a--; ) {
          var l = s[a], g = n[l];
          s[a] = [l, g, Nl(g)];
        }
        return s;
      }
      function Qn(n, s) {
        var a = e0(n, s);
        return Qh(a) ? a : t;
      }
      function Ky(n) {
        var s = it.call(n, Vn), a = n[Vn];
        try {
          n[Vn] = t;
          var l = !0;
        } catch {
        }
        var g = po.call(n);
        return l && (s ? n[Vn] = a : delete n[Vn]), g;
      }
      var Ic = ec ? function(n) {
        return n == null ? [] : (n = ht(n), On(ec(n), function(s) {
          return Lh.call(n, s);
        }));
      } : kc, Al = ec ? function(n) {
        for (var s = []; n; )
          In(s, Ic(n)), n = vo(n);
        return s;
      } : kc, Xt = ir;
      (tc && Xt(new tc(new ArrayBuffer(1))) != Ce || Ji && Xt(new Ji()) != xe || rc && Xt(rc.resolve()) != gt || Ei && Xt(new Ei()) != Oe || Qi && Xt(new Qi()) != Pe) && (Xt = function(n) {
        var s = ir(n), a = s == je ? n.constructor : t, l = a ? Xn(a) : "";
        if (l)
          switch (l) {
            case O0:
              return Ce;
            case I0:
              return xe;
            case P0:
              return gt;
            case C0:
              return Oe;
            case A0:
              return Pe;
          }
        return s;
      });
      function ky(n, s, a) {
        for (var l = -1, g = a.length; ++l < g; ) {
          var _ = a[l], I = _.size;
          switch (_.type) {
            case "drop":
              n += I;
              break;
            case "dropRight":
              s -= I;
              break;
            case "take":
              s = Qt(s, n + I);
              break;
            case "takeRight":
              n = Kt(n, s - I);
              break;
          }
        }
        return { start: n, end: s };
      }
      function Vy(n) {
        var s = n.match(lt);
        return s ? s[1].split(Ut) : [];
      }
      function Tl(n, s, a) {
        s = Rn(s, n);
        for (var l = -1, g = s.length, _ = !1; ++l < g; ) {
          var I = en(s[l]);
          if (!(_ = n != null && a(n, I)))
            break;
          n = n[I];
        }
        return _ || ++l != g ? _ : (g = n == null ? 0 : n.length, !!g && Ko(g) && dn(I, g) && (Re(n) || Zn(n)));
      }
      function Gy(n) {
        var s = n.length, a = new n.constructor(s);
        return s && typeof n[0] == "string" && it.call(n, "index") && (a.index = n.index, a.input = n.input), a;
      }
      function Rl(n) {
        return typeof n.constructor == "function" && !os(n) ? Si(vo(n)) : {};
      }
      function Wy(n, s, a) {
        var l = n.constructor;
        switch (s) {
          case Se:
            return mc(n);
          case q:
          case F:
            return new l(+n);
          case Ce:
            return Ty(n, a);
          case ze:
          case Ie:
          case Ve:
          case We:
          case et:
          case tt:
          case Je:
          case tr:
          case lr:
            return pl(n, a);
          case xe:
            return new l();
          case He:
          case Ne:
            return new l(n);
          case Me:
            return Ry(n);
          case Oe:
            return new l();
          case $e:
            return Ny(n);
        }
      }
      function Yy(n, s) {
        var a = s.length;
        if (!a)
          return n;
        var l = a - 1;
        return s[l] = (a > 1 ? "& " : "") + s[l], s = s.join(a > 2 ? ", " : " "), n.replace(Pt, `{
/* [wrapped with ` + s + `] */
`);
      }
      function Jy(n) {
        return Re(n) || Zn(n) || !!(jh && n && n[jh]);
      }
      function dn(n, s) {
        var a = typeof n;
        return s = s ?? k, !!s && (a == "number" || a != "symbol" && Aa.test(n)) && n > -1 && n % 1 == 0 && n < s;
      }
      function sr(n, s, a) {
        if (!Et(a))
          return !1;
        var l = typeof s;
        return (l == "number" ? pr(a) && dn(s, a.length) : l == "string" && s in a) ? Kr(a[s], n) : !1;
      }
      function Pc(n, s) {
        if (Re(n))
          return !1;
        var a = typeof n;
        return a == "number" || a == "symbol" || a == "boolean" || n == null || Sr(n) ? !0 : Ft.test(n) || !_t.test(n) || s != null && n in ht(s);
      }
      function Qy(n) {
        var s = typeof n;
        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? n !== "__proto__" : n === null;
      }
      function Cc(n) {
        var s = Lo(n), a = v[s];
        if (typeof a != "function" || !(s in Ye.prototype))
          return !1;
        if (n === a)
          return !0;
        var l = xc(a);
        return !!l && n === l[0];
      }
      function Xy(n) {
        return !!Nh && Nh in n;
      }
      var Zy = lo ? pn : Vc;
      function os(n) {
        var s = n && n.constructor, a = typeof s == "function" && s.prototype || wi;
        return n === a;
      }
      function Nl(n) {
        return n === n && !Et(n);
      }
      function $l(n, s) {
        return function(a) {
          return a == null ? !1 : a[n] === s && (s !== t || n in ht(a));
        };
      }
      function ev(n) {
        var s = Ho(n, function(l) {
          return a.size === p && a.clear(), l;
        }), a = s.cache;
        return s;
      }
      function tv(n, s) {
        var a = n[1], l = s[1], g = a | l, _ = g < (K | se | h), I = l == h && a == j || l == h && a == b && n[7].length <= s[8] || l == (h | b) && s[7].length <= s[8] && a == j;
        if (!(_ || I))
          return n;
        l & K && (n[2] = s[2], g |= a & K ? 0 : $);
        var N = s[3];
        if (N) {
          var M = n[3];
          n[3] = M ? yl(M, N, s[4]) : N, n[4] = M ? Pn(n[3], m) : s[4];
        }
        return N = s[5], N && (M = n[5], n[5] = M ? vl(M, N, s[6]) : N, n[6] = M ? Pn(n[5], m) : s[6]), N = s[7], N && (n[7] = N), l & h && (n[8] = n[8] == null ? s[8] : Qt(n[8], s[8])), n[9] == null && (n[9] = s[9]), n[0] = s[0], n[1] = g, n;
      }
      function rv(n) {
        var s = [];
        if (n != null)
          for (var a in ht(n))
            s.push(a);
        return s;
      }
      function nv(n) {
        return po.call(n);
      }
      function Fl(n, s, a) {
        return s = Kt(s === t ? n.length - 1 : s, 0), function() {
          for (var l = arguments, g = -1, _ = Kt(l.length - s, 0), I = z(_); ++g < _; )
            I[g] = l[s + g];
          g = -1;
          for (var N = z(s + 1); ++g < s; )
            N[g] = l[g];
          return N[s] = a(I), kt(n, this, N);
        };
      }
      function Ll(n, s) {
        return s.length < 2 ? n : Jn(n, Lr(s, 0, -1));
      }
      function iv(n, s) {
        for (var a = n.length, l = Qt(s.length, a), g = dr(n); l--; ) {
          var _ = s[l];
          n[l] = dn(_, a) ? g[_] : t;
        }
        return n;
      }
      function Ac(n, s) {
        if (!(s === "constructor" && typeof n[s] == "function") && s != "__proto__")
          return n[s];
      }
      var jl = Ml(ol), as = b0 || function(n, s) {
        return Qe.setTimeout(n, s);
      }, Tc = Ml(Iy);
      function Ul(n, s, a) {
        var l = s + "";
        return Tc(n, Yy(l, sv(Vy(l), a)));
      }
      function Ml(n) {
        var s = 0, a = 0;
        return function() {
          var l = D0(), g = de - (l - a);
          if (a = l, g > 0) {
            if (++s >= ce)
              return arguments[0];
          } else
            s = 0;
          return n.apply(t, arguments);
        };
      }
      function Uo(n, s) {
        var a = -1, l = n.length, g = l - 1;
        for (s = s === t ? l : s; ++a < s; ) {
          var _ = dc(a, g), I = n[_];
          n[_] = n[a], n[a] = I;
        }
        return n.length = s, n;
      }
      var ql = ev(function(n) {
        var s = [];
        return n.charCodeAt(0) === 46 && s.push(""), n.replace(Lt, function(a, l, g, _) {
          s.push(g ? _.replace(Sa, "$1") : l || a);
        }), s;
      });
      function en(n) {
        if (typeof n == "string" || Sr(n))
          return n;
        var s = n + "";
        return s == "0" && 1 / n == -Q ? "-0" : s;
      }
      function Xn(n) {
        if (n != null) {
          try {
            return fo.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function sv(n, s) {
        return Rr(we, function(a) {
          var l = "_." + a[0];
          s & a[1] && !ao(n, l) && n.push(l);
        }), n.sort();
      }
      function Bl(n) {
        if (n instanceof Ye)
          return n.clone();
        var s = new $r(n.__wrapped__, n.__chain__);
        return s.__actions__ = dr(n.__actions__), s.__index__ = n.__index__, s.__values__ = n.__values__, s;
      }
      function ov(n, s, a) {
        (a ? sr(n, s, a) : s === t) ? s = 1 : s = Kt(Ue(s), 0);
        var l = n == null ? 0 : n.length;
        if (!l || s < 1)
          return [];
        for (var g = 0, _ = 0, I = z(mo(l / s)); g < l; )
          I[_++] = Lr(n, g, g += s);
        return I;
      }
      function av(n) {
        for (var s = -1, a = n == null ? 0 : n.length, l = 0, g = []; ++s < a; ) {
          var _ = n[s];
          _ && (g[l++] = _);
        }
        return g;
      }
      function cv() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var s = z(n - 1), a = arguments[0], l = n; l--; )
          s[l - 1] = arguments[l];
        return In(Re(a) ? dr(a) : [a], Wt(s, 1));
      }
      var uv = Ke(function(n, s) {
        return Rt(n) ? ts(n, Wt(s, 1, Rt, !0)) : [];
      }), hv = Ke(function(n, s) {
        var a = jr(s);
        return Rt(a) && (a = t), Rt(n) ? ts(n, Wt(s, 1, Rt, !0), be(a, 2)) : [];
      }), lv = Ke(function(n, s) {
        var a = jr(s);
        return Rt(a) && (a = t), Rt(n) ? ts(n, Wt(s, 1, Rt, !0), t, a) : [];
      });
      function fv(n, s, a) {
        var l = n == null ? 0 : n.length;
        return l ? (s = a || s === t ? 1 : Ue(s), Lr(n, s < 0 ? 0 : s, l)) : [];
      }
      function dv(n, s, a) {
        var l = n == null ? 0 : n.length;
        return l ? (s = a || s === t ? 1 : Ue(s), s = l - s, Lr(n, 0, s < 0 ? 0 : s)) : [];
      }
      function pv(n, s) {
        return n && n.length ? Ao(n, be(s, 3), !0, !0) : [];
      }
      function gv(n, s) {
        return n && n.length ? Ao(n, be(s, 3), !0) : [];
      }
      function yv(n, s, a, l) {
        var g = n == null ? 0 : n.length;
        return g ? (a && typeof a != "number" && sr(n, s, a) && (a = 0, l = g), cy(n, s, a, l)) : [];
      }
      function Hl(n, s, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var g = a == null ? 0 : Ue(a);
        return g < 0 && (g = Kt(l + g, 0)), co(n, be(s, 3), g);
      }
      function zl(n, s, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var g = l - 1;
        return a !== t && (g = Ue(a), g = a < 0 ? Kt(l + g, 0) : Qt(g, l - 1)), co(n, be(s, 3), g, !0);
      }
      function Kl(n) {
        var s = n == null ? 0 : n.length;
        return s ? Wt(n, 1) : [];
      }
      function vv(n) {
        var s = n == null ? 0 : n.length;
        return s ? Wt(n, Q) : [];
      }
      function _v(n, s) {
        var a = n == null ? 0 : n.length;
        return a ? (s = s === t ? 1 : Ue(s), Wt(n, s)) : [];
      }
      function bv(n) {
        for (var s = -1, a = n == null ? 0 : n.length, l = {}; ++s < a; ) {
          var g = n[s];
          l[g[0]] = g[1];
        }
        return l;
      }
      function kl(n) {
        return n && n.length ? n[0] : t;
      }
      function mv(n, s, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var g = a == null ? 0 : Ue(a);
        return g < 0 && (g = Kt(l + g, 0)), vi(n, s, g);
      }
      function wv(n) {
        var s = n == null ? 0 : n.length;
        return s ? Lr(n, 0, -1) : [];
      }
      var Ev = Ke(function(n) {
        var s = bt(n, _c);
        return s.length && s[0] === n[0] ? cc(s) : [];
      }), Dv = Ke(function(n) {
        var s = jr(n), a = bt(n, _c);
        return s === jr(a) ? s = t : a.pop(), a.length && a[0] === n[0] ? cc(a, be(s, 2)) : [];
      }), Sv = Ke(function(n) {
        var s = jr(n), a = bt(n, _c);
        return s = typeof s == "function" ? s : t, s && a.pop(), a.length && a[0] === n[0] ? cc(a, t, s) : [];
      });
      function xv(n, s) {
        return n == null ? "" : w0.call(n, s);
      }
      function jr(n) {
        var s = n == null ? 0 : n.length;
        return s ? n[s - 1] : t;
      }
      function Ov(n, s, a) {
        var l = n == null ? 0 : n.length;
        if (!l)
          return -1;
        var g = l;
        return a !== t && (g = Ue(a), g = g < 0 ? Kt(l + g, 0) : Qt(g, l - 1)), s === s ? s0(n, s, g) : co(n, xh, g, !0);
      }
      function Iv(n, s) {
        return n && n.length ? rl(n, Ue(s)) : t;
      }
      var Pv = Ke(Vl);
      function Vl(n, s) {
        return n && n.length && s && s.length ? fc(n, s) : n;
      }
      function Cv(n, s, a) {
        return n && n.length && s && s.length ? fc(n, s, be(a, 2)) : n;
      }
      function Av(n, s, a) {
        return n && n.length && s && s.length ? fc(n, s, t, a) : n;
      }
      var Tv = fn(function(n, s) {
        var a = n == null ? 0 : n.length, l = ic(n, s);
        return sl(n, bt(s, function(g) {
          return dn(g, a) ? +g : g;
        }).sort(gl)), l;
      });
      function Rv(n, s) {
        var a = [];
        if (!(n && n.length))
          return a;
        var l = -1, g = [], _ = n.length;
        for (s = be(s, 3); ++l < _; ) {
          var I = n[l];
          s(I, l, n) && (a.push(I), g.push(l));
        }
        return sl(n, g), a;
      }
      function Rc(n) {
        return n == null ? n : x0.call(n);
      }
      function Nv(n, s, a) {
        var l = n == null ? 0 : n.length;
        return l ? (a && typeof a != "number" && sr(n, s, a) ? (s = 0, a = l) : (s = s == null ? 0 : Ue(s), a = a === t ? l : Ue(a)), Lr(n, s, a)) : [];
      }
      function $v(n, s) {
        return Co(n, s);
      }
      function Fv(n, s, a) {
        return gc(n, s, be(a, 2));
      }
      function Lv(n, s) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var l = Co(n, s);
          if (l < a && Kr(n[l], s))
            return l;
        }
        return -1;
      }
      function jv(n, s) {
        return Co(n, s, !0);
      }
      function Uv(n, s, a) {
        return gc(n, s, be(a, 2), !0);
      }
      function Mv(n, s) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var l = Co(n, s, !0) - 1;
          if (Kr(n[l], s))
            return l;
        }
        return -1;
      }
      function qv(n) {
        return n && n.length ? al(n) : [];
      }
      function Bv(n, s) {
        return n && n.length ? al(n, be(s, 2)) : [];
      }
      function Hv(n) {
        var s = n == null ? 0 : n.length;
        return s ? Lr(n, 1, s) : [];
      }
      function zv(n, s, a) {
        return n && n.length ? (s = a || s === t ? 1 : Ue(s), Lr(n, 0, s < 0 ? 0 : s)) : [];
      }
      function Kv(n, s, a) {
        var l = n == null ? 0 : n.length;
        return l ? (s = a || s === t ? 1 : Ue(s), s = l - s, Lr(n, s < 0 ? 0 : s, l)) : [];
      }
      function kv(n, s) {
        return n && n.length ? Ao(n, be(s, 3), !1, !0) : [];
      }
      function Vv(n, s) {
        return n && n.length ? Ao(n, be(s, 3)) : [];
      }
      var Gv = Ke(function(n) {
        return Tn(Wt(n, 1, Rt, !0));
      }), Wv = Ke(function(n) {
        var s = jr(n);
        return Rt(s) && (s = t), Tn(Wt(n, 1, Rt, !0), be(s, 2));
      }), Yv = Ke(function(n) {
        var s = jr(n);
        return s = typeof s == "function" ? s : t, Tn(Wt(n, 1, Rt, !0), t, s);
      });
      function Jv(n) {
        return n && n.length ? Tn(n) : [];
      }
      function Qv(n, s) {
        return n && n.length ? Tn(n, be(s, 2)) : [];
      }
      function Xv(n, s) {
        return s = typeof s == "function" ? s : t, n && n.length ? Tn(n, t, s) : [];
      }
      function Nc(n) {
        if (!(n && n.length))
          return [];
        var s = 0;
        return n = On(n, function(a) {
          if (Rt(a))
            return s = Kt(a.length, s), !0;
        }), Ja(s, function(a) {
          return bt(n, Ga(a));
        });
      }
      function Gl(n, s) {
        if (!(n && n.length))
          return [];
        var a = Nc(n);
        return s == null ? a : bt(a, function(l) {
          return kt(s, t, l);
        });
      }
      var Zv = Ke(function(n, s) {
        return Rt(n) ? ts(n, s) : [];
      }), e_ = Ke(function(n) {
        return vc(On(n, Rt));
      }), t_ = Ke(function(n) {
        var s = jr(n);
        return Rt(s) && (s = t), vc(On(n, Rt), be(s, 2));
      }), r_ = Ke(function(n) {
        var s = jr(n);
        return s = typeof s == "function" ? s : t, vc(On(n, Rt), t, s);
      }), n_ = Ke(Nc);
      function i_(n, s) {
        return ll(n || [], s || [], es);
      }
      function s_(n, s) {
        return ll(n || [], s || [], is);
      }
      var o_ = Ke(function(n) {
        var s = n.length, a = s > 1 ? n[s - 1] : t;
        return a = typeof a == "function" ? (n.pop(), a) : t, Gl(n, a);
      });
      function Wl(n) {
        var s = v(n);
        return s.__chain__ = !0, s;
      }
      function a_(n, s) {
        return s(n), n;
      }
      function Mo(n, s) {
        return s(n);
      }
      var c_ = fn(function(n) {
        var s = n.length, a = s ? n[0] : 0, l = this.__wrapped__, g = function(_) {
          return ic(_, n);
        };
        return s > 1 || this.__actions__.length || !(l instanceof Ye) || !dn(a) ? this.thru(g) : (l = l.slice(a, +a + (s ? 1 : 0)), l.__actions__.push({ func: Mo, args: [g], thisArg: t }), new $r(l, this.__chain__).thru(function(_) {
          return s && !_.length && _.push(t), _;
        }));
      });
      function u_() {
        return Wl(this);
      }
      function h_() {
        return new $r(this.value(), this.__chain__);
      }
      function l_() {
        this.__values__ === t && (this.__values__ = uf(this.value()));
        var n = this.__index__ >= this.__values__.length, s = n ? t : this.__values__[this.__index__++];
        return { done: n, value: s };
      }
      function f_() {
        return this;
      }
      function d_(n) {
        for (var s, a = this; a instanceof So; ) {
          var l = Bl(a);
          l.__index__ = 0, l.__values__ = t, s ? g.__wrapped__ = l : s = l;
          var g = l;
          a = a.__wrapped__;
        }
        return g.__wrapped__ = n, s;
      }
      function p_() {
        var n = this.__wrapped__;
        if (n instanceof Ye) {
          var s = n;
          return this.__actions__.length && (s = new Ye(this)), s = s.reverse(), s.__actions__.push({ func: Mo, args: [Rc], thisArg: t }), new $r(s, this.__chain__);
        }
        return this.thru(Rc);
      }
      function g_() {
        return hl(this.__wrapped__, this.__actions__);
      }
      var y_ = To(function(n, s, a) {
        it.call(n, a) ? ++n[a] : hn(n, a, 1);
      });
      function v_(n, s, a) {
        var l = Re(n) ? Dh : ay;
        return a && sr(n, s, a) && (s = t), l(n, be(s, 3));
      }
      function __(n, s) {
        var a = Re(n) ? On : Gh;
        return a(n, be(s, 3));
      }
      var b_ = wl(Hl), m_ = wl(zl);
      function w_(n, s) {
        return Wt(qo(n, s), 1);
      }
      function E_(n, s) {
        return Wt(qo(n, s), Q);
      }
      function D_(n, s, a) {
        return a = a === t ? 1 : Ue(a), Wt(qo(n, s), a);
      }
      function Yl(n, s) {
        var a = Re(n) ? Rr : An;
        return a(n, be(s, 3));
      }
      function Jl(n, s) {
        var a = Re(n) ? Hg : Vh;
        return a(n, be(s, 3));
      }
      var S_ = To(function(n, s, a) {
        it.call(n, a) ? n[a].push(s) : hn(n, a, [s]);
      });
      function x_(n, s, a, l) {
        n = pr(n) ? n : Ci(n), a = a && !l ? Ue(a) : 0;
        var g = n.length;
        return a < 0 && (a = Kt(g + a, 0)), ko(n) ? a <= g && n.indexOf(s, a) > -1 : !!g && vi(n, s, a) > -1;
      }
      var O_ = Ke(function(n, s, a) {
        var l = -1, g = typeof s == "function", _ = pr(n) ? z(n.length) : [];
        return An(n, function(I) {
          _[++l] = g ? kt(s, I, a) : rs(I, s, a);
        }), _;
      }), I_ = To(function(n, s, a) {
        hn(n, a, s);
      });
      function qo(n, s) {
        var a = Re(n) ? bt : Zh;
        return a(n, be(s, 3));
      }
      function P_(n, s, a, l) {
        return n == null ? [] : (Re(s) || (s = s == null ? [] : [s]), a = l ? t : a, Re(a) || (a = a == null ? [] : [a]), nl(n, s, a));
      }
      var C_ = To(function(n, s, a) {
        n[a ? 0 : 1].push(s);
      }, function() {
        return [[], []];
      });
      function A_(n, s, a) {
        var l = Re(n) ? ka : Ih, g = arguments.length < 3;
        return l(n, be(s, 4), a, g, An);
      }
      function T_(n, s, a) {
        var l = Re(n) ? zg : Ih, g = arguments.length < 3;
        return l(n, be(s, 4), a, g, Vh);
      }
      function R_(n, s) {
        var a = Re(n) ? On : Gh;
        return a(n, zo(be(s, 3)));
      }
      function N_(n) {
        var s = Re(n) ? Hh : xy;
        return s(n);
      }
      function $_(n, s, a) {
        (a ? sr(n, s, a) : s === t) ? s = 1 : s = Ue(s);
        var l = Re(n) ? ry : Oy;
        return l(n, s);
      }
      function F_(n) {
        var s = Re(n) ? ny : Py;
        return s(n);
      }
      function L_(n) {
        if (n == null)
          return 0;
        if (pr(n))
          return ko(n) ? bi(n) : n.length;
        var s = Xt(n);
        return s == xe || s == Oe ? n.size : hc(n).length;
      }
      function j_(n, s, a) {
        var l = Re(n) ? Va : Cy;
        return a && sr(n, s, a) && (s = t), l(n, be(s, 3));
      }
      var U_ = Ke(function(n, s) {
        if (n == null)
          return [];
        var a = s.length;
        return a > 1 && sr(n, s[0], s[1]) ? s = [] : a > 2 && sr(s[0], s[1], s[2]) && (s = [s[0]]), nl(n, Wt(s, 1), []);
      }), Bo = _0 || function() {
        return Qe.Date.now();
      };
      function M_(n, s) {
        if (typeof s != "function")
          throw new Nr(u);
        return n = Ue(n), function() {
          if (--n < 1)
            return s.apply(this, arguments);
        };
      }
      function Ql(n, s, a) {
        return s = a ? t : s, s = n && s == null ? n.length : s, ln(n, h, t, t, t, t, s);
      }
      function Xl(n, s) {
        var a;
        if (typeof s != "function")
          throw new Nr(u);
        return n = Ue(n), function() {
          return --n > 0 && (a = s.apply(this, arguments)), n <= 1 && (s = t), a;
        };
      }
      var $c = Ke(function(n, s, a) {
        var l = K;
        if (a.length) {
          var g = Pn(a, Ii($c));
          l |= T;
        }
        return ln(n, l, s, a, g);
      }), Zl = Ke(function(n, s, a) {
        var l = K | se;
        if (a.length) {
          var g = Pn(a, Ii(Zl));
          l |= T;
        }
        return ln(s, l, n, a, g);
      });
      function ef(n, s, a) {
        s = a ? t : s;
        var l = ln(n, j, t, t, t, t, t, s);
        return l.placeholder = ef.placeholder, l;
      }
      function tf(n, s, a) {
        s = a ? t : s;
        var l = ln(n, O, t, t, t, t, t, s);
        return l.placeholder = tf.placeholder, l;
      }
      function rf(n, s, a) {
        var l, g, _, I, N, M, X = 0, Z = !1, ne = !1, ue = !0;
        if (typeof n != "function")
          throw new Nr(u);
        s = Ur(s) || 0, Et(a) && (Z = !!a.leading, ne = "maxWait" in a, _ = ne ? Kt(Ur(a.maxWait) || 0, s) : _, ue = "trailing" in a ? !!a.trailing : ue);
        function ye(Nt) {
          var kr = l, yn = g;
          return l = g = t, X = Nt, I = n.apply(yn, kr), I;
        }
        function Ee(Nt) {
          return X = Nt, N = as(Ge, s), Z ? ye(Nt) : I;
        }
        function Be(Nt) {
          var kr = Nt - M, yn = Nt - X, Ef = s - kr;
          return ne ? Qt(Ef, _ - yn) : Ef;
        }
        function De(Nt) {
          var kr = Nt - M, yn = Nt - X;
          return M === t || kr >= s || kr < 0 || ne && yn >= _;
        }
        function Ge() {
          var Nt = Bo();
          if (De(Nt))
            return Xe(Nt);
          N = as(Ge, Be(Nt));
        }
        function Xe(Nt) {
          return N = t, ue && l ? ye(Nt) : (l = g = t, I);
        }
        function xr() {
          N !== t && fl(N), X = 0, l = M = g = N = t;
        }
        function or() {
          return N === t ? I : Xe(Bo());
        }
        function Or() {
          var Nt = Bo(), kr = De(Nt);
          if (l = arguments, g = this, M = Nt, kr) {
            if (N === t)
              return Ee(M);
            if (ne)
              return fl(N), N = as(Ge, s), ye(M);
          }
          return N === t && (N = as(Ge, s)), I;
        }
        return Or.cancel = xr, Or.flush = or, Or;
      }
      var q_ = Ke(function(n, s) {
        return kh(n, 1, s);
      }), B_ = Ke(function(n, s, a) {
        return kh(n, Ur(s) || 0, a);
      });
      function H_(n) {
        return ln(n, G);
      }
      function Ho(n, s) {
        if (typeof n != "function" || s != null && typeof s != "function")
          throw new Nr(u);
        var a = function() {
          var l = arguments, g = s ? s.apply(this, l) : l[0], _ = a.cache;
          if (_.has(g))
            return _.get(g);
          var I = n.apply(this, l);
          return a.cache = _.set(g, I) || _, I;
        };
        return a.cache = new (Ho.Cache || un)(), a;
      }
      Ho.Cache = un;
      function zo(n) {
        if (typeof n != "function")
          throw new Nr(u);
        return function() {
          var s = arguments;
          switch (s.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, s[0]);
            case 2:
              return !n.call(this, s[0], s[1]);
            case 3:
              return !n.call(this, s[0], s[1], s[2]);
          }
          return !n.apply(this, s);
        };
      }
      function z_(n) {
        return Xl(2, n);
      }
      var K_ = Ay(function(n, s) {
        s = s.length == 1 && Re(s[0]) ? bt(s[0], Er(be())) : bt(Wt(s, 1), Er(be()));
        var a = s.length;
        return Ke(function(l) {
          for (var g = -1, _ = Qt(l.length, a); ++g < _; )
            l[g] = s[g].call(this, l[g]);
          return kt(n, this, l);
        });
      }), Fc = Ke(function(n, s) {
        var a = Pn(s, Ii(Fc));
        return ln(n, T, t, s, a);
      }), nf = Ke(function(n, s) {
        var a = Pn(s, Ii(nf));
        return ln(n, E, t, s, a);
      }), k_ = fn(function(n, s) {
        return ln(n, b, t, t, t, s);
      });
      function V_(n, s) {
        if (typeof n != "function")
          throw new Nr(u);
        return s = s === t ? s : Ue(s), Ke(n, s);
      }
      function G_(n, s) {
        if (typeof n != "function")
          throw new Nr(u);
        return s = s == null ? 0 : Kt(Ue(s), 0), Ke(function(a) {
          var l = a[s], g = Nn(a, 0, s);
          return l && In(g, l), kt(n, this, g);
        });
      }
      function W_(n, s, a) {
        var l = !0, g = !0;
        if (typeof n != "function")
          throw new Nr(u);
        return Et(a) && (l = "leading" in a ? !!a.leading : l, g = "trailing" in a ? !!a.trailing : g), rf(n, s, { leading: l, maxWait: s, trailing: g });
      }
      function Y_(n) {
        return Ql(n, 1);
      }
      function J_(n, s) {
        return Fc(bc(s), n);
      }
      function Q_() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return Re(n) ? n : [n];
      }
      function X_(n) {
        return Fr(n, C);
      }
      function Z_(n, s) {
        return s = typeof s == "function" ? s : t, Fr(n, C, s);
      }
      function e1(n) {
        return Fr(n, x | C);
      }
      function t1(n, s) {
        return s = typeof s == "function" ? s : t, Fr(n, x | C, s);
      }
      function r1(n, s) {
        return s == null || Kh(n, s, Vt(s));
      }
      function Kr(n, s) {
        return n === s || n !== n && s !== s;
      }
      var n1 = Fo(ac), i1 = Fo(function(n, s) {
        return n >= s;
      }), Zn = Jh(function() {
        return arguments;
      }()) ? Jh : function(n) {
        return Ct(n) && it.call(n, "callee") && !Lh.call(n, "callee");
      }, Re = z.isArray, s1 = nr ? Er(nr) : dy;
      function pr(n) {
        return n != null && Ko(n.length) && !pn(n);
      }
      function Rt(n) {
        return Ct(n) && pr(n);
      }
      function o1(n) {
        return n === !0 || n === !1 || Ct(n) && ir(n) == q;
      }
      var $n = m0 || Vc, a1 = Br ? Er(Br) : py;
      function c1(n) {
        return Ct(n) && n.nodeType === 1 && !cs(n);
      }
      function u1(n) {
        if (n == null)
          return !0;
        if (pr(n) && (Re(n) || typeof n == "string" || typeof n.splice == "function" || $n(n) || Pi(n) || Zn(n)))
          return !n.length;
        var s = Xt(n);
        if (s == xe || s == Oe)
          return !n.size;
        if (os(n))
          return !hc(n).length;
        for (var a in n)
          if (it.call(n, a))
            return !1;
        return !0;
      }
      function h1(n, s) {
        return ns(n, s);
      }
      function l1(n, s, a) {
        a = typeof a == "function" ? a : t;
        var l = a ? a(n, s) : t;
        return l === t ? ns(n, s, t, a) : !!l;
      }
      function Lc(n) {
        if (!Ct(n))
          return !1;
        var s = ir(n);
        return s == A || s == d || typeof n.message == "string" && typeof n.name == "string" && !cs(n);
      }
      function f1(n) {
        return typeof n == "number" && Uh(n);
      }
      function pn(n) {
        if (!Et(n))
          return !1;
        var s = ir(n);
        return s == ae || s == fe || s == B || s == yt;
      }
      function sf(n) {
        return typeof n == "number" && n == Ue(n);
      }
      function Ko(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= k;
      }
      function Et(n) {
        var s = typeof n;
        return n != null && (s == "object" || s == "function");
      }
      function Ct(n) {
        return n != null && typeof n == "object";
      }
      var of = Tr ? Er(Tr) : yy;
      function d1(n, s) {
        return n === s || uc(n, s, Oc(s));
      }
      function p1(n, s, a) {
        return a = typeof a == "function" ? a : t, uc(n, s, Oc(s), a);
      }
      function g1(n) {
        return af(n) && n != +n;
      }
      function y1(n) {
        if (Zy(n))
          throw new Ae(c);
        return Qh(n);
      }
      function v1(n) {
        return n === null;
      }
      function _1(n) {
        return n == null;
      }
      function af(n) {
        return typeof n == "number" || Ct(n) && ir(n) == He;
      }
      function cs(n) {
        if (!Ct(n) || ir(n) != je)
          return !1;
        var s = vo(n);
        if (s === null)
          return !0;
        var a = it.call(s, "constructor") && s.constructor;
        return typeof a == "function" && a instanceof a && fo.call(a) == p0;
      }
      var jc = Qr ? Er(Qr) : vy;
      function b1(n) {
        return sf(n) && n >= -k && n <= k;
      }
      var cf = Gi ? Er(Gi) : _y;
      function ko(n) {
        return typeof n == "string" || !Re(n) && Ct(n) && ir(n) == Ne;
      }
      function Sr(n) {
        return typeof n == "symbol" || Ct(n) && ir(n) == $e;
      }
      var Pi = kn ? Er(kn) : by;
      function m1(n) {
        return n === t;
      }
      function w1(n) {
        return Ct(n) && Xt(n) == Pe;
      }
      function E1(n) {
        return Ct(n) && ir(n) == Fe;
      }
      var D1 = Fo(lc), S1 = Fo(function(n, s) {
        return n <= s;
      });
      function uf(n) {
        if (!n)
          return [];
        if (pr(n))
          return ko(n) ? Hr(n) : dr(n);
        if (Yi && n[Yi])
          return r0(n[Yi]());
        var s = Xt(n), a = s == xe ? Xa : s == Oe ? uo : Ci;
        return a(n);
      }
      function gn(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Ur(n), n === Q || n === -Q) {
          var s = n < 0 ? -1 : 1;
          return s * V;
        }
        return n === n ? n : 0;
      }
      function Ue(n) {
        var s = gn(n), a = s % 1;
        return s === s ? a ? s - a : s : 0;
      }
      function hf(n) {
        return n ? Yn(Ue(n), 0, re) : 0;
      }
      function Ur(n) {
        if (typeof n == "number")
          return n;
        if (Sr(n))
          return J;
        if (Et(n)) {
          var s = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = Et(s) ? s + "" : s;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = Ph(n);
        var a = Ia.test(n);
        return a || Ca.test(n) ? Te(n.slice(2), a ? 2 : 8) : Oa.test(n) ? J : +n;
      }
      function lf(n) {
        return Zr(n, gr(n));
      }
      function x1(n) {
        return n ? Yn(Ue(n), -k, k) : n === 0 ? n : 0;
      }
      function nt(n) {
        return n == null ? "" : Dr(n);
      }
      var O1 = xi(function(n, s) {
        if (os(s) || pr(s)) {
          Zr(s, Vt(s), n);
          return;
        }
        for (var a in s)
          it.call(s, a) && es(n, a, s[a]);
      }), ff = xi(function(n, s) {
        Zr(s, gr(s), n);
      }), Vo = xi(function(n, s, a, l) {
        Zr(s, gr(s), n, l);
      }), I1 = xi(function(n, s, a, l) {
        Zr(s, Vt(s), n, l);
      }), P1 = fn(ic);
      function C1(n, s) {
        var a = Si(n);
        return s == null ? a : zh(a, s);
      }
      var A1 = Ke(function(n, s) {
        n = ht(n);
        var a = -1, l = s.length, g = l > 2 ? s[2] : t;
        for (g && sr(s[0], s[1], g) && (l = 1); ++a < l; )
          for (var _ = s[a], I = gr(_), N = -1, M = I.length; ++N < M; ) {
            var X = I[N], Z = n[X];
            (Z === t || Kr(Z, wi[X]) && !it.call(n, X)) && (n[X] = _[X]);
          }
        return n;
      }), T1 = Ke(function(n) {
        return n.push(t, Pl), kt(df, t, n);
      });
      function R1(n, s) {
        return Sh(n, be(s, 3), Xr);
      }
      function N1(n, s) {
        return Sh(n, be(s, 3), oc);
      }
      function $1(n, s) {
        return n == null ? n : sc(n, be(s, 3), gr);
      }
      function F1(n, s) {
        return n == null ? n : Wh(n, be(s, 3), gr);
      }
      function L1(n, s) {
        return n && Xr(n, be(s, 3));
      }
      function j1(n, s) {
        return n && oc(n, be(s, 3));
      }
      function U1(n) {
        return n == null ? [] : Io(n, Vt(n));
      }
      function M1(n) {
        return n == null ? [] : Io(n, gr(n));
      }
      function Uc(n, s, a) {
        var l = n == null ? t : Jn(n, s);
        return l === t ? a : l;
      }
      function q1(n, s) {
        return n != null && Tl(n, s, uy);
      }
      function Mc(n, s) {
        return n != null && Tl(n, s, hy);
      }
      var B1 = Dl(function(n, s, a) {
        s != null && typeof s.toString != "function" && (s = po.call(s)), n[s] = a;
      }, Bc(yr)), H1 = Dl(function(n, s, a) {
        s != null && typeof s.toString != "function" && (s = po.call(s)), it.call(n, s) ? n[s].push(a) : n[s] = [a];
      }, be), z1 = Ke(rs);
      function Vt(n) {
        return pr(n) ? Bh(n) : hc(n);
      }
      function gr(n) {
        return pr(n) ? Bh(n, !0) : my(n);
      }
      function K1(n, s) {
        var a = {};
        return s = be(s, 3), Xr(n, function(l, g, _) {
          hn(a, s(l, g, _), l);
        }), a;
      }
      function k1(n, s) {
        var a = {};
        return s = be(s, 3), Xr(n, function(l, g, _) {
          hn(a, g, s(l, g, _));
        }), a;
      }
      var V1 = xi(function(n, s, a) {
        Po(n, s, a);
      }), df = xi(function(n, s, a, l) {
        Po(n, s, a, l);
      }), G1 = fn(function(n, s) {
        var a = {};
        if (n == null)
          return a;
        var l = !1;
        s = bt(s, function(_) {
          return _ = Rn(_, n), l || (l = _.length > 1), _;
        }), Zr(n, Sc(n), a), l && (a = Fr(a, x | S | C, By));
        for (var g = s.length; g--; )
          yc(a, s[g]);
        return a;
      });
      function W1(n, s) {
        return pf(n, zo(be(s)));
      }
      var Y1 = fn(function(n, s) {
        return n == null ? {} : Ey(n, s);
      });
      function pf(n, s) {
        if (n == null)
          return {};
        var a = bt(Sc(n), function(l) {
          return [l];
        });
        return s = be(s), il(n, a, function(l, g) {
          return s(l, g[0]);
        });
      }
      function J1(n, s, a) {
        s = Rn(s, n);
        var l = -1, g = s.length;
        for (g || (g = 1, n = t); ++l < g; ) {
          var _ = n == null ? t : n[en(s[l])];
          _ === t && (l = g, _ = a), n = pn(_) ? _.call(n) : _;
        }
        return n;
      }
      function Q1(n, s, a) {
        return n == null ? n : is(n, s, a);
      }
      function X1(n, s, a, l) {
        return l = typeof l == "function" ? l : t, n == null ? n : is(n, s, a, l);
      }
      var gf = Ol(Vt), yf = Ol(gr);
      function Z1(n, s, a) {
        var l = Re(n), g = l || $n(n) || Pi(n);
        if (s = be(s, 4), a == null) {
          var _ = n && n.constructor;
          g ? a = l ? new _() : [] : Et(n) ? a = pn(_) ? Si(vo(n)) : {} : a = {};
        }
        return (g ? Rr : Xr)(n, function(I, N, M) {
          return s(a, I, N, M);
        }), a;
      }
      function eb(n, s) {
        return n == null ? !0 : yc(n, s);
      }
      function tb(n, s, a) {
        return n == null ? n : ul(n, s, bc(a));
      }
      function rb(n, s, a, l) {
        return l = typeof l == "function" ? l : t, n == null ? n : ul(n, s, bc(a), l);
      }
      function Ci(n) {
        return n == null ? [] : Qa(n, Vt(n));
      }
      function nb(n) {
        return n == null ? [] : Qa(n, gr(n));
      }
      function ib(n, s, a) {
        return a === t && (a = s, s = t), a !== t && (a = Ur(a), a = a === a ? a : 0), s !== t && (s = Ur(s), s = s === s ? s : 0), Yn(Ur(n), s, a);
      }
      function sb(n, s, a) {
        return s = gn(s), a === t ? (a = s, s = 0) : a = gn(a), n = Ur(n), ly(n, s, a);
      }
      function ob(n, s, a) {
        if (a && typeof a != "boolean" && sr(n, s, a) && (s = a = t), a === t && (typeof s == "boolean" ? (a = s, s = t) : typeof n == "boolean" && (a = n, n = t)), n === t && s === t ? (n = 0, s = 1) : (n = gn(n), s === t ? (s = n, n = 0) : s = gn(s)), n > s) {
          var l = n;
          n = s, s = l;
        }
        if (a || n % 1 || s % 1) {
          var g = Mh();
          return Qt(n + g * (s - n + ct("1e-" + ((g + "").length - 1))), s);
        }
        return dc(n, s);
      }
      var ab = Oi(function(n, s, a) {
        return s = s.toLowerCase(), n + (a ? vf(s) : s);
      });
      function vf(n) {
        return qc(nt(n).toLowerCase());
      }
      function _f(n) {
        return n = nt(n), n && n.replace(on, Qg).replace(Ha, "");
      }
      function cb(n, s, a) {
        n = nt(n), s = Dr(s);
        var l = n.length;
        a = a === t ? l : Yn(Ue(a), 0, l);
        var g = a;
        return a -= s.length, a >= 0 && n.slice(a, g) == s;
      }
      function ub(n) {
        return n = nt(n), n && vt.test(n) ? n.replace(qn, Xg) : n;
      }
      function hb(n) {
        return n = nt(n), n && jt.test(n) ? n.replace(Ot, "\\$&") : n;
      }
      var lb = Oi(function(n, s, a) {
        return n + (a ? "-" : "") + s.toLowerCase();
      }), fb = Oi(function(n, s, a) {
        return n + (a ? " " : "") + s.toLowerCase();
      }), db = ml("toLowerCase");
      function pb(n, s, a) {
        n = nt(n), s = Ue(s);
        var l = s ? bi(n) : 0;
        if (!s || l >= s)
          return n;
        var g = (s - l) / 2;
        return $o(wo(g), a) + n + $o(mo(g), a);
      }
      function gb(n, s, a) {
        n = nt(n), s = Ue(s);
        var l = s ? bi(n) : 0;
        return s && l < s ? n + $o(s - l, a) : n;
      }
      function yb(n, s, a) {
        n = nt(n), s = Ue(s);
        var l = s ? bi(n) : 0;
        return s && l < s ? $o(s - l, a) + n : n;
      }
      function vb(n, s, a) {
        return a || s == null ? s = 0 : s && (s = +s), S0(nt(n).replace(It, ""), s || 0);
      }
      function _b(n, s, a) {
        return (a ? sr(n, s, a) : s === t) ? s = 1 : s = Ue(s), pc(nt(n), s);
      }
      function bb() {
        var n = arguments, s = nt(n[0]);
        return n.length < 3 ? s : s.replace(n[1], n[2]);
      }
      var mb = Oi(function(n, s, a) {
        return n + (a ? "_" : "") + s.toLowerCase();
      });
      function wb(n, s, a) {
        return a && typeof a != "number" && sr(n, s, a) && (s = a = t), a = a === t ? re : a >>> 0, a ? (n = nt(n), n && (typeof s == "string" || s != null && !jc(s)) && (s = Dr(s), !s && _i(n)) ? Nn(Hr(n), 0, a) : n.split(s, a)) : [];
      }
      var Eb = Oi(function(n, s, a) {
        return n + (a ? " " : "") + qc(s);
      });
      function Db(n, s, a) {
        return n = nt(n), a = a == null ? 0 : Yn(Ue(a), 0, n.length), s = Dr(s), n.slice(a, a + s.length) == s;
      }
      function Sb(n, s, a) {
        var l = v.templateSettings;
        a && sr(n, s, a) && (s = t), n = nt(n), s = Vo({}, s, l, Il);
        var g = Vo({}, s.imports, l.imports, Il), _ = Vt(g), I = Qa(g, _), N, M, X = 0, Z = s.interpolate || hi, ne = "__p += '", ue = Za((s.escape || hi).source + "|" + Z.source + "|" + (Z === wt ? xa : hi).source + "|" + (s.evaluate || hi).source + "|$", "g"), ye = "//# sourceURL=" + (it.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++za + "]") + `
`;
        n.replace(ue, function(De, Ge, Xe, xr, or, Or) {
          return Xe || (Xe = xr), ne += n.slice(X, Or).replace(Ta, Zg), Ge && (N = !0, ne += `' +
__e(` + Ge + `) +
'`), or && (M = !0, ne += `';
` + or + `;
__p += '`), Xe && (ne += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), X = Or + De.length, De;
        }), ne += `';
`;
        var Ee = it.call(s, "variable") && s.variable;
        if (!Ee)
          ne = `with (obj) {
` + ne + `
}
`;
        else if (Da.test(Ee))
          throw new Ae(f);
        ne = (M ? ne.replace(Yr, "") : ne).replace(rr, "$1").replace(sn, "$1;"), ne = "function(" + (Ee || "obj") + `) {
` + (Ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ne + `return __p
}`;
        var Be = mf(function() {
          return rt(_, ye + "return " + ne).apply(t, I);
        });
        if (Be.source = ne, Lc(Be))
          throw Be;
        return Be;
      }
      function xb(n) {
        return nt(n).toLowerCase();
      }
      function Ob(n) {
        return nt(n).toUpperCase();
      }
      function Ib(n, s, a) {
        if (n = nt(n), n && (a || s === t))
          return Ph(n);
        if (!n || !(s = Dr(s)))
          return n;
        var l = Hr(n), g = Hr(s), _ = Ch(l, g), I = Ah(l, g) + 1;
        return Nn(l, _, I).join("");
      }
      function Pb(n, s, a) {
        if (n = nt(n), n && (a || s === t))
          return n.slice(0, Rh(n) + 1);
        if (!n || !(s = Dr(s)))
          return n;
        var l = Hr(n), g = Ah(l, Hr(s)) + 1;
        return Nn(l, 0, g).join("");
      }
      function Cb(n, s, a) {
        if (n = nt(n), n && (a || s === t))
          return n.replace(It, "");
        if (!n || !(s = Dr(s)))
          return n;
        var l = Hr(n), g = Ch(l, Hr(s));
        return Nn(l, g).join("");
      }
      function Ab(n, s) {
        var a = W, l = ie;
        if (Et(s)) {
          var g = "separator" in s ? s.separator : g;
          a = "length" in s ? Ue(s.length) : a, l = "omission" in s ? Dr(s.omission) : l;
        }
        n = nt(n);
        var _ = n.length;
        if (_i(n)) {
          var I = Hr(n);
          _ = I.length;
        }
        if (a >= _)
          return n;
        var N = a - bi(l);
        if (N < 1)
          return l;
        var M = I ? Nn(I, 0, N).join("") : n.slice(0, N);
        if (g === t)
          return M + l;
        if (I && (N += M.length - N), jc(g)) {
          if (n.slice(N).search(g)) {
            var X, Z = M;
            for (g.global || (g = Za(g.source, nt(Ar.exec(g)) + "g")), g.lastIndex = 0; X = g.exec(Z); )
              var ne = X.index;
            M = M.slice(0, ne === t ? N : ne);
          }
        } else if (n.indexOf(Dr(g), N) != N) {
          var ue = M.lastIndexOf(g);
          ue > -1 && (M = M.slice(0, ue));
        }
        return M + l;
      }
      function Tb(n) {
        return n = nt(n), n && Dt.test(n) ? n.replace(Sn, o0) : n;
      }
      var Rb = Oi(function(n, s, a) {
        return n + (a ? " " : "") + s.toUpperCase();
      }), qc = ml("toUpperCase");
      function bf(n, s, a) {
        return n = nt(n), s = a ? t : s, s === t ? t0(n) ? u0(n) : Vg(n) : n.match(s) || [];
      }
      var mf = Ke(function(n, s) {
        try {
          return kt(n, t, s);
        } catch (a) {
          return Lc(a) ? a : new Ae(a);
        }
      }), Nb = fn(function(n, s) {
        return Rr(s, function(a) {
          a = en(a), hn(n, a, $c(n[a], n));
        }), n;
      });
      function $b(n) {
        var s = n == null ? 0 : n.length, a = be();
        return n = s ? bt(n, function(l) {
          if (typeof l[1] != "function")
            throw new Nr(u);
          return [a(l[0]), l[1]];
        }) : [], Ke(function(l) {
          for (var g = -1; ++g < s; ) {
            var _ = n[g];
            if (kt(_[0], this, l))
              return kt(_[1], this, l);
          }
        });
      }
      function Fb(n) {
        return oy(Fr(n, x));
      }
      function Bc(n) {
        return function() {
          return n;
        };
      }
      function Lb(n, s) {
        return n == null || n !== n ? s : n;
      }
      var jb = El(), Ub = El(!0);
      function yr(n) {
        return n;
      }
      function Hc(n) {
        return Xh(typeof n == "function" ? n : Fr(n, x));
      }
      function Mb(n) {
        return el(Fr(n, x));
      }
      function qb(n, s) {
        return tl(n, Fr(s, x));
      }
      var Bb = Ke(function(n, s) {
        return function(a) {
          return rs(a, n, s);
        };
      }), Hb = Ke(function(n, s) {
        return function(a) {
          return rs(n, a, s);
        };
      });
      function zc(n, s, a) {
        var l = Vt(s), g = Io(s, l);
        a == null && !(Et(s) && (g.length || !l.length)) && (a = s, s = n, n = this, g = Io(s, Vt(s)));
        var _ = !(Et(a) && "chain" in a) || !!a.chain, I = pn(n);
        return Rr(g, function(N) {
          var M = s[N];
          n[N] = M, I && (n.prototype[N] = function() {
            var X = this.__chain__;
            if (_ || X) {
              var Z = n(this.__wrapped__), ne = Z.__actions__ = dr(this.__actions__);
              return ne.push({ func: M, args: arguments, thisArg: n }), Z.__chain__ = X, Z;
            }
            return M.apply(n, In([this.value()], arguments));
          });
        }), n;
      }
      function zb() {
        return Qe._ === this && (Qe._ = g0), this;
      }
      function Kc() {
      }
      function Kb(n) {
        return n = Ue(n), Ke(function(s) {
          return rl(s, n);
        });
      }
      var kb = wc(bt), Vb = wc(Dh), Gb = wc(Va);
      function wf(n) {
        return Pc(n) ? Ga(en(n)) : Dy(n);
      }
      function Wb(n) {
        return function(s) {
          return n == null ? t : Jn(n, s);
        };
      }
      var Yb = Sl(), Jb = Sl(!0);
      function kc() {
        return [];
      }
      function Vc() {
        return !1;
      }
      function Qb() {
        return {};
      }
      function Xb() {
        return "";
      }
      function Zb() {
        return !0;
      }
      function em(n, s) {
        if (n = Ue(n), n < 1 || n > k)
          return [];
        var a = re, l = Qt(n, re);
        s = be(s), n -= re;
        for (var g = Ja(l, s); ++a < n; )
          s(a);
        return g;
      }
      function tm(n) {
        return Re(n) ? bt(n, en) : Sr(n) ? [n] : dr(ql(nt(n)));
      }
      function rm(n) {
        var s = ++d0;
        return nt(n) + s;
      }
      var nm = No(function(n, s) {
        return n + s;
      }, 0), im = Ec("ceil"), sm = No(function(n, s) {
        return n / s;
      }, 1), om = Ec("floor");
      function am(n) {
        return n && n.length ? Oo(n, yr, ac) : t;
      }
      function cm(n, s) {
        return n && n.length ? Oo(n, be(s, 2), ac) : t;
      }
      function um(n) {
        return Oh(n, yr);
      }
      function hm(n, s) {
        return Oh(n, be(s, 2));
      }
      function lm(n) {
        return n && n.length ? Oo(n, yr, lc) : t;
      }
      function fm(n, s) {
        return n && n.length ? Oo(n, be(s, 2), lc) : t;
      }
      var dm = No(function(n, s) {
        return n * s;
      }, 1), pm = Ec("round"), gm = No(function(n, s) {
        return n - s;
      }, 0);
      function ym(n) {
        return n && n.length ? Ya(n, yr) : 0;
      }
      function vm(n, s) {
        return n && n.length ? Ya(n, be(s, 2)) : 0;
      }
      return v.after = M_, v.ary = Ql, v.assign = O1, v.assignIn = ff, v.assignInWith = Vo, v.assignWith = I1, v.at = P1, v.before = Xl, v.bind = $c, v.bindAll = Nb, v.bindKey = Zl, v.castArray = Q_, v.chain = Wl, v.chunk = ov, v.compact = av, v.concat = cv, v.cond = $b, v.conforms = Fb, v.constant = Bc, v.countBy = y_, v.create = C1, v.curry = ef, v.curryRight = tf, v.debounce = rf, v.defaults = A1, v.defaultsDeep = T1, v.defer = q_, v.delay = B_, v.difference = uv, v.differenceBy = hv, v.differenceWith = lv, v.drop = fv, v.dropRight = dv, v.dropRightWhile = pv, v.dropWhile = gv, v.fill = yv, v.filter = __, v.flatMap = w_, v.flatMapDeep = E_, v.flatMapDepth = D_, v.flatten = Kl, v.flattenDeep = vv, v.flattenDepth = _v, v.flip = H_, v.flow = jb, v.flowRight = Ub, v.fromPairs = bv, v.functions = U1, v.functionsIn = M1, v.groupBy = S_, v.initial = wv, v.intersection = Ev, v.intersectionBy = Dv, v.intersectionWith = Sv, v.invert = B1, v.invertBy = H1, v.invokeMap = O_, v.iteratee = Hc, v.keyBy = I_, v.keys = Vt, v.keysIn = gr, v.map = qo, v.mapKeys = K1, v.mapValues = k1, v.matches = Mb, v.matchesProperty = qb, v.memoize = Ho, v.merge = V1, v.mergeWith = df, v.method = Bb, v.methodOf = Hb, v.mixin = zc, v.negate = zo, v.nthArg = Kb, v.omit = G1, v.omitBy = W1, v.once = z_, v.orderBy = P_, v.over = kb, v.overArgs = K_, v.overEvery = Vb, v.overSome = Gb, v.partial = Fc, v.partialRight = nf, v.partition = C_, v.pick = Y1, v.pickBy = pf, v.property = wf, v.propertyOf = Wb, v.pull = Pv, v.pullAll = Vl, v.pullAllBy = Cv, v.pullAllWith = Av, v.pullAt = Tv, v.range = Yb, v.rangeRight = Jb, v.rearg = k_, v.reject = R_, v.remove = Rv, v.rest = V_, v.reverse = Rc, v.sampleSize = $_, v.set = Q1, v.setWith = X1, v.shuffle = F_, v.slice = Nv, v.sortBy = U_, v.sortedUniq = qv, v.sortedUniqBy = Bv, v.split = wb, v.spread = G_, v.tail = Hv, v.take = zv, v.takeRight = Kv, v.takeRightWhile = kv, v.takeWhile = Vv, v.tap = a_, v.throttle = W_, v.thru = Mo, v.toArray = uf, v.toPairs = gf, v.toPairsIn = yf, v.toPath = tm, v.toPlainObject = lf, v.transform = Z1, v.unary = Y_, v.union = Gv, v.unionBy = Wv, v.unionWith = Yv, v.uniq = Jv, v.uniqBy = Qv, v.uniqWith = Xv, v.unset = eb, v.unzip = Nc, v.unzipWith = Gl, v.update = tb, v.updateWith = rb, v.values = Ci, v.valuesIn = nb, v.without = Zv, v.words = bf, v.wrap = J_, v.xor = e_, v.xorBy = t_, v.xorWith = r_, v.zip = n_, v.zipObject = i_, v.zipObjectDeep = s_, v.zipWith = o_, v.entries = gf, v.entriesIn = yf, v.extend = ff, v.extendWith = Vo, zc(v, v), v.add = nm, v.attempt = mf, v.camelCase = ab, v.capitalize = vf, v.ceil = im, v.clamp = ib, v.clone = X_, v.cloneDeep = e1, v.cloneDeepWith = t1, v.cloneWith = Z_, v.conformsTo = r1, v.deburr = _f, v.defaultTo = Lb, v.divide = sm, v.endsWith = cb, v.eq = Kr, v.escape = ub, v.escapeRegExp = hb, v.every = v_, v.find = b_, v.findIndex = Hl, v.findKey = R1, v.findLast = m_, v.findLastIndex = zl, v.findLastKey = N1, v.floor = om, v.forEach = Yl, v.forEachRight = Jl, v.forIn = $1, v.forInRight = F1, v.forOwn = L1, v.forOwnRight = j1, v.get = Uc, v.gt = n1, v.gte = i1, v.has = q1, v.hasIn = Mc, v.head = kl, v.identity = yr, v.includes = x_, v.indexOf = mv, v.inRange = sb, v.invoke = z1, v.isArguments = Zn, v.isArray = Re, v.isArrayBuffer = s1, v.isArrayLike = pr, v.isArrayLikeObject = Rt, v.isBoolean = o1, v.isBuffer = $n, v.isDate = a1, v.isElement = c1, v.isEmpty = u1, v.isEqual = h1, v.isEqualWith = l1, v.isError = Lc, v.isFinite = f1, v.isFunction = pn, v.isInteger = sf, v.isLength = Ko, v.isMap = of, v.isMatch = d1, v.isMatchWith = p1, v.isNaN = g1, v.isNative = y1, v.isNil = _1, v.isNull = v1, v.isNumber = af, v.isObject = Et, v.isObjectLike = Ct, v.isPlainObject = cs, v.isRegExp = jc, v.isSafeInteger = b1, v.isSet = cf, v.isString = ko, v.isSymbol = Sr, v.isTypedArray = Pi, v.isUndefined = m1, v.isWeakMap = w1, v.isWeakSet = E1, v.join = xv, v.kebabCase = lb, v.last = jr, v.lastIndexOf = Ov, v.lowerCase = fb, v.lowerFirst = db, v.lt = D1, v.lte = S1, v.max = am, v.maxBy = cm, v.mean = um, v.meanBy = hm, v.min = lm, v.minBy = fm, v.stubArray = kc, v.stubFalse = Vc, v.stubObject = Qb, v.stubString = Xb, v.stubTrue = Zb, v.multiply = dm, v.nth = Iv, v.noConflict = zb, v.noop = Kc, v.now = Bo, v.pad = pb, v.padEnd = gb, v.padStart = yb, v.parseInt = vb, v.random = ob, v.reduce = A_, v.reduceRight = T_, v.repeat = _b, v.replace = bb, v.result = J1, v.round = pm, v.runInContext = U, v.sample = N_, v.size = L_, v.snakeCase = mb, v.some = j_, v.sortedIndex = $v, v.sortedIndexBy = Fv, v.sortedIndexOf = Lv, v.sortedLastIndex = jv, v.sortedLastIndexBy = Uv, v.sortedLastIndexOf = Mv, v.startCase = Eb, v.startsWith = Db, v.subtract = gm, v.sum = ym, v.sumBy = vm, v.template = Sb, v.times = em, v.toFinite = gn, v.toInteger = Ue, v.toLength = hf, v.toLower = xb, v.toNumber = Ur, v.toSafeInteger = x1, v.toString = nt, v.toUpper = Ob, v.trim = Ib, v.trimEnd = Pb, v.trimStart = Cb, v.truncate = Ab, v.unescape = Tb, v.uniqueId = rm, v.upperCase = Rb, v.upperFirst = qc, v.each = Yl, v.eachRight = Jl, v.first = kl, zc(v, function() {
        var n = {};
        return Xr(v, function(s, a) {
          it.call(v.prototype, a) || (n[a] = s);
        }), n;
      }(), { chain: !1 }), v.VERSION = i, Rr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        v[n].placeholder = v;
      }), Rr(["drop", "take"], function(n, s) {
        Ye.prototype[n] = function(a) {
          a = a === t ? 1 : Kt(Ue(a), 0);
          var l = this.__filtered__ && !s ? new Ye(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Qt(a, l.__takeCount__) : l.__views__.push({ size: Qt(a, re), type: n + (l.__dir__ < 0 ? "Right" : "") }), l;
        }, Ye.prototype[n + "Right"] = function(a) {
          return this.reverse()[n](a).reverse();
        };
      }), Rr(["filter", "map", "takeWhile"], function(n, s) {
        var a = s + 1, l = a == w || a == ee;
        Ye.prototype[n] = function(g) {
          var _ = this.clone();
          return _.__iteratees__.push({ iteratee: be(g, 3), type: a }), _.__filtered__ = _.__filtered__ || l, _;
        };
      }), Rr(["head", "last"], function(n, s) {
        var a = "take" + (s ? "Right" : "");
        Ye.prototype[n] = function() {
          return this[a](1).value()[0];
        };
      }), Rr(["initial", "tail"], function(n, s) {
        var a = "drop" + (s ? "" : "Right");
        Ye.prototype[n] = function() {
          return this.__filtered__ ? new Ye(this) : this[a](1);
        };
      }), Ye.prototype.compact = function() {
        return this.filter(yr);
      }, Ye.prototype.find = function(n) {
        return this.filter(n).head();
      }, Ye.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Ye.prototype.invokeMap = Ke(function(n, s) {
        return typeof n == "function" ? new Ye(this) : this.map(function(a) {
          return rs(a, n, s);
        });
      }), Ye.prototype.reject = function(n) {
        return this.filter(zo(be(n)));
      }, Ye.prototype.slice = function(n, s) {
        n = Ue(n);
        var a = this;
        return a.__filtered__ && (n > 0 || s < 0) ? new Ye(a) : (n < 0 ? a = a.takeRight(-n) : n && (a = a.drop(n)), s !== t && (s = Ue(s), a = s < 0 ? a.dropRight(-s) : a.take(s - n)), a);
      }, Ye.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Ye.prototype.toArray = function() {
        return this.take(re);
      }, Xr(Ye.prototype, function(n, s) {
        var a = /^(?:filter|find|map|reject)|While$/.test(s), l = /^(?:head|last)$/.test(s), g = v[l ? "take" + (s == "last" ? "Right" : "") : s], _ = l || /^find/.test(s);
        g && (v.prototype[s] = function() {
          var I = this.__wrapped__, N = l ? [1] : arguments, M = I instanceof Ye, X = N[0], Z = M || Re(I), ne = function(Ge) {
            var Xe = g.apply(v, In([Ge], N));
            return l && ue ? Xe[0] : Xe;
          };
          Z && a && typeof X == "function" && X.length != 1 && (M = Z = !1);
          var ue = this.__chain__, ye = !!this.__actions__.length, Ee = _ && !ue, Be = M && !ye;
          if (!_ && Z) {
            I = Be ? I : new Ye(this);
            var De = n.apply(I, N);
            return De.__actions__.push({ func: Mo, args: [ne], thisArg: t }), new $r(De, ue);
          }
          return Ee && Be ? n.apply(this, N) : (De = this.thru(ne), Ee ? l ? De.value()[0] : De.value() : De);
        });
      }), Rr(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var s = ho[n], a = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(n);
        v.prototype[n] = function() {
          var g = arguments;
          if (l && !this.__chain__) {
            var _ = this.value();
            return s.apply(Re(_) ? _ : [], g);
          }
          return this[a](function(I) {
            return s.apply(Re(I) ? I : [], g);
          });
        };
      }), Xr(Ye.prototype, function(n, s) {
        var a = v[s];
        if (a) {
          var l = a.name + "";
          it.call(Di, l) || (Di[l] = []), Di[l].push({ name: s, func: a });
        }
      }), Di[Ro(t, se).name] = [{ name: "wrapper", func: t }], Ye.prototype.clone = T0, Ye.prototype.reverse = R0, Ye.prototype.value = N0, v.prototype.at = c_, v.prototype.chain = u_, v.prototype.commit = h_, v.prototype.next = l_, v.prototype.plant = d_, v.prototype.reverse = p_, v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = g_, v.prototype.first = v.prototype.head, Yi && (v.prototype[Yi] = f_), v;
    }, mi = h0();
    Tt ? ((Tt.exports = mi)._ = mi, ut._ = mi) : Qe._ = mi;
  }).call(ms);
})(Wu, Wu.exports);
var AO = Object.defineProperty, TO = Object.defineProperties, RO = Object.getOwnPropertyDescriptors, np = Object.getOwnPropertySymbols, NO = Object.prototype.hasOwnProperty, $O = Object.prototype.propertyIsEnumerable, ip = (r, e, t) => e in r ? AO(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Yo = (r, e) => {
  for (var t in e || (e = {}))
    NO.call(e, t) && ip(r, t, e[t]);
  if (np)
    for (var t of np(e))
      $O.call(e, t) && ip(r, t, e[t]);
  return r;
}, FO = (r, e) => TO(r, RO(e));
function jn(r, e, t) {
  var i;
  const o = $3(r);
  return ((i = e.rpcMap) == null ? void 0 : i[o.reference]) || `${CO}?chainId=${o.namespace}:${o.reference}&projectId=${t}`;
}
function ui(r) {
  return r.includes(":") ? r.split(":")[1] : r;
}
function Mg(r) {
  return r.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function LO(r, e) {
  const t = Object.keys(e.namespaces).filter((o) => o.includes(r));
  if (!t.length)
    return [];
  const i = [];
  return t.forEach((o) => {
    const c = e.namespaces[o].accounts;
    i.push(...c);
  }), i;
}
function jO(r = {}, e = {}) {
  const t = sp(r), i = sp(e);
  return Wu.exports.merge(t, i);
}
function sp(r) {
  var e, t, i, o;
  const c = {};
  if (!Ui(r))
    return c;
  for (const [u, f] of Object.entries(r)) {
    const y = hh(u) ? [u] : f.chains, p = f.methods || [], m = f.events || [], x = f.rpcMap || {}, S = ws(u);
    c[S] = FO(Yo(Yo({}, c[S]), f), { chains: eu(y, (e = c[S]) == null ? void 0 : e.chains), methods: eu(p, (t = c[S]) == null ? void 0 : t.methods), events: eu(m, (i = c[S]) == null ? void 0 : i.events), rpcMap: Yo(Yo({}, x), (o = c[S]) == null ? void 0 : o.rpcMap) });
  }
  return c;
}
function UO(r) {
  return r.includes(":") ? r.split(":")[2] : r;
}
function MO(r) {
  const e = {};
  for (const [t, i] of Object.entries(r)) {
    const o = i.methods || [], c = i.events || [], u = i.accounts || [], f = hh(t) ? [t] : i.chains ? i.chains : Mg(i.accounts);
    e[t] = { chains: f, methods: o, events: c, accounts: u };
  }
  return e;
}
function fu(r) {
  return typeof r == "number" ? r : r.includes("0x") ? parseInt(r, 16) : r.includes(":") ? Number(r.split(":")[1]) : Number(r);
}
const qg = {}, mt = (r) => qg[r], du = (r, e) => {
  qg[r] = e;
};
class qO {
  constructor(e) {
    this.name = "polkadot", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const o = ui(t);
      e[o] = this.createHttpProvider(o, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || jn(e, this.namespace, this.client.core.projectId);
    if (!i)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new En(new Mn(i, mt("disableProviderPing")));
  }
}
class BO {
  constructor(e) {
    this.name = "eip155", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const i = t || jn(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!i)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new En(new Mn(i, mt("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const o = parseInt(ui(t));
      e[o] = this.createHttpProvider(o, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e = this.chainId, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, i;
    let o = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const c = parseInt(o, 16);
    if (this.isChainApproved(c))
      this.setDefaultChain(`${c}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: e.topic, request: { method: e.request.method, params: [{ chainId: o }] }, chainId: (i = this.namespace.chains) == null ? void 0 : i[0] }), this.setDefaultChain(`${c}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
}
class HO {
  constructor(e) {
    this.name = "solana", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const o = ui(t);
      e[o] = this.createHttpProvider(o, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || jn(e, this.namespace, this.client.core.projectId);
    if (!i)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new En(new Mn(i, mt("disableProviderPing")));
  }
}
class zO {
  constructor(e) {
    this.name = "cosmos", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const o = ui(t);
      e[o] = this.createHttpProvider(o, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || jn(e, this.namespace, this.client.core.projectId);
    if (!i)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new En(new Mn(i, mt("disableProviderPing")));
  }
}
class KO {
  constructor(e) {
    this.name = "cip34", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      const i = this.getCardanoRPCUrl(t), o = ui(t);
      e[o] = this.createHttpProvider(o, i);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t)
      return t[e];
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || this.getCardanoRPCUrl(e);
    if (!i)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new En(new Mn(i, mt("disableProviderPing")));
  }
}
class kO {
  constructor(e) {
    this.name = "elrond", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const o = ui(t);
      e[o] = this.createHttpProvider(o, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || jn(e, this.namespace, this.client.core.projectId);
    if (!i)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new En(new Mn(i, mt("disableProviderPing")));
  }
}
class VO {
  constructor(e) {
    this.name = "multiversx", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const o = ui(t);
      e[o] = this.createHttpProvider(o, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || jn(e, this.namespace, this.client.core.projectId);
    if (!i)
      throw new Error(`No RPC url provided for chainId: ${e}`);
    return new En(new Mn(i, mt("disableProviderPing")));
  }
}
class GO {
  constructor(e) {
    this.name = "near", this.namespace = e.namespace, this.events = mt("events"), this.client = mt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const i = t || jn(`${this.name}:${e}`, this.namespace);
      if (!i)
        throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit(Dn.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || jn(e, this.namespace);
    return typeof i > "u" ? void 0 : new En(new Mn(i, mt("disableProviderPing")));
  }
}
var WO = Object.defineProperty, YO = Object.defineProperties, JO = Object.getOwnPropertyDescriptors, op = Object.getOwnPropertySymbols, QO = Object.prototype.hasOwnProperty, XO = Object.prototype.propertyIsEnumerable, ap = (r, e, t) => e in r ? WO(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Jo = (r, e) => {
  for (var t in e || (e = {}))
    QO.call(e, t) && ap(r, t, e[t]);
  if (op)
    for (var t of op(e))
      XO.call(e, t) && ap(r, t, e[t]);
  return r;
}, pu = (r, e) => YO(r, JO(e));
class wh {
  constructor(e) {
    this.events = new eh(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ze.pino(Ze.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || tp })), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1;
  }
  static async init(e) {
    const t = new wh(e);
    return await t.initialize(), t;
  }
  async request(e, t) {
    const [i, o] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(i).request({ request: Jo({}, e), chainId: `${i}:${o}`, topic: this.session.topic });
  }
  sendAsync(e, t, i) {
    this.request(e, i).then((o) => t(null, o)).catch((o) => t(o, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: $t("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing)
      return await this.pair(e.pairingTopic);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: i, approval: o } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      i && (this.uri = i, this.events.emit("display_uri", i)), await o().then((c) => {
        this.session = c, this.namespaces || (this.namespaces = MO(c.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((c) => {
        if (c.message !== jg)
          throw c;
        t++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session)
        return;
      const [i, o] = this.validateChain(e);
      this.getProvider(i).setDefaultChain(o, t);
    } catch (i) {
      if (!/Please call connect/.test(i.message))
        throw i;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (nn(t)) {
      for (const i of t)
        e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const e = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await EO.init({ logger: this.providerOpts.logger || tp, relayUrl: this.providerOpts.relayUrl || OO, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const e = [...new Set(Object.keys(this.session.namespaces).map((t) => ws(t)))];
    du("client", this.client), du("events", this.events), du("disableProviderPing", this.disableProviderPing), e.forEach((t) => {
      if (!this.session)
        return;
      const i = LO(t, this.session), o = Mg(i), c = jO(this.namespaces, this.optionalNamespaces), u = pu(Jo({}, c[t]), { accounts: i, chains: o });
      switch (t) {
        case "eip155":
          this.rpcProviders[t] = new BO({ namespace: u });
          break;
        case "solana":
          this.rpcProviders[t] = new HO({ namespace: u });
          break;
        case "cosmos":
          this.rpcProviders[t] = new zO({ namespace: u });
          break;
        case "polkadot":
          this.rpcProviders[t] = new qO({ namespace: u });
          break;
        case "cip34":
          this.rpcProviders[t] = new KO({ namespace: u });
          break;
        case "elrond":
          this.rpcProviders[t] = new kO({ namespace: u });
          break;
        case "multiversx":
          this.rpcProviders[t] = new VO({ namespace: u });
          break;
        case "near":
          this.rpcProviders[t] = new GO({ namespace: u });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      const { params: t } = e, { event: i } = t;
      if (i.name === "accountsChanged") {
        const o = i.data;
        o && nn(o) && this.events.emit("accountsChanged", o.map(UO));
      } else if (i.name === "chainChanged") {
        const o = t.chainId, c = t.event.data, u = ws(o), f = fu(o) !== fu(c) ? `${u}:${fu(c)}` : o;
        this.onChainChanged(f);
      } else
        this.events.emit(i.name, i.data);
      this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: t }) => {
      var i;
      const { namespaces: o } = t, c = (i = this.client) == null ? void 0 : i.session.get(e);
      this.session = pu(Jo({}, c), { namespaces: o }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: t });
    }), this.client.on("session_delete", async (e) => {
      await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", pu(Jo({}, $t("USER_DISCONNECTED")), { data: e.topic }));
    }), this.on(Dn.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(e, !0);
    });
  }
  getProvider(e) {
    if (!this.rpcProviders[e])
      throw new Error(`Provider not found: ${e}`);
    return this.rpcProviders[e];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: i, sessionProperties: o } = e;
    t && Object.keys(t).length && (this.namespaces = t), i && Object.keys(i).length && (this.optionalNamespaces = i), this.sessionProperties = o, this.persist("namespaces", t), this.persist("optionalNamespaces", i);
  }
  validateChain(e) {
    const [t, i] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [t, i];
    if (t && !Object.keys(this.namespaces || {}).map((u) => ws(u)).includes(t))
      throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
    if (t && i)
      return [t, i];
    const o = ws(Object.keys(this.namespaces)[0]), c = this.rpcProviders[o].getDefaultChain();
    return [o, c];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    var i;
    if (!this.namespaces)
      return;
    const [o, c] = this.validateChain(e);
    t || this.getProvider(o).setDefaultChain(c), ((i = this.namespaces[o]) != null ? i : this.namespaces[`${o}:${c}`]).defaultChain = c, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", c);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${rp}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${rp}/${e}`);
  }
}
const ZO = wh, eI = "wc", tI = "ethereum_provider", rI = `${eI}@2:${tI}:`, nI = "https://rpc.walletconnect.com/v1/", Yu = ["eth_sendTransaction", "personal_sign"], iI = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], Ju = ["chainChanged", "accountsChanged"], sI = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var oI = Object.defineProperty, aI = Object.defineProperties, cI = Object.getOwnPropertyDescriptors, cp = Object.getOwnPropertySymbols, uI = Object.prototype.hasOwnProperty, hI = Object.prototype.propertyIsEnumerable, up = (r, e, t) => e in r ? oI(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ds = (r, e) => {
  for (var t in e || (e = {}))
    uI.call(e, t) && up(r, t, e[t]);
  if (cp)
    for (var t of cp(e))
      hI.call(e, t) && up(r, t, e[t]);
  return r;
}, hp = (r, e) => aI(r, cI(e));
function aa(r) {
  return Number(r[0].split(":")[1]);
}
function gu(r) {
  return `0x${r.toString(16)}`;
}
function lI(r) {
  const { chains: e, optionalChains: t, methods: i, optionalMethods: o, events: c, optionalEvents: u, rpcMap: f } = r;
  if (!nn(e))
    throw new Error("Invalid chains");
  const y = { chains: e, methods: i || Yu, events: c || Ju, rpcMap: Ds({}, e.length ? { [aa(e)]: f[aa(e)] } : {}) }, p = c == null ? void 0 : c.filter((C) => !Ju.includes(C)), m = i == null ? void 0 : i.filter((C) => !Yu.includes(C));
  if (!t && !u && !o && !(p != null && p.length) && !(m != null && m.length))
    return { required: e.length ? y : void 0 };
  const x = (p == null ? void 0 : p.length) && (m == null ? void 0 : m.length) || !t, S = { chains: [...new Set(x ? y.chains.concat(t || []) : t)], methods: [...new Set(y.methods.concat(o != null && o.length ? o : iI))], events: [...new Set(y.events.concat(u != null && u.length ? u : sI))], rpcMap: f };
  return { required: e.length ? y : void 0, optional: t.length ? S : void 0 };
}
class Eh {
  constructor() {
    this.events = new Pr.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = rI, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const t = new Eh();
    return await t.initialize(e), t;
  }
  async request(e) {
    return await this.signer.request(e, this.formatChainId(this.chainId));
  }
  sendAsync(e, t) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: i } = lI(this.rpc);
    try {
      const o = await new Promise(async (u, f) => {
        var y;
        this.rpc.showQrModal && ((y = this.modal) == null || y.subscribeModal((p) => {
          !p.open && !this.signer.session && (this.signer.abortPairingAttempt(), f(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(hp(Ds({ namespaces: Ds({}, t && { [this.namespace]: t }) }, i && { optionalNamespaces: { [this.namespace]: i } }), { pairingTopic: e == null ? void 0 : e.pairingTopic })).then((p) => {
          u(p);
        }).catch((p) => {
          f(new Error(p.message));
        });
      });
      if (!o)
        return;
      const c = F3(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c), this.setAccounts(c), this.events.emit("connect", { chainId: gu(this.chainId) });
    } catch (o) {
      throw this.signer.logger.error(o), o;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e, { event: i } = t;
      i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", e);
    }), this.signer.on("chainChanged", (e) => {
      const t = parseInt(e);
      this.chainId = t, this.events.emit("chainChanged", gu(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", hp(Ds({}, $t("USER_DISCONNECTED")), { data: e.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (e) => {
      var t, i;
      this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(), (i = this.modal) == null || i.openModal({ uri: e })), this.events.emit("display_uri", e);
    });
  }
  switchEthereumChain(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e.filter((i) => this.isCompatibleChainId(i)).map((i) => this.parseChainId(i));
    t.length && (this.chainId = t[0], this.events.emit("chainChanged", gu(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      this.chainId = t, this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, i, o] = e.split(":");
    return { chainId: `${t}:${i}`, address: o };
  }
  setAccounts(e) {
    this.accounts = e.filter((t) => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map((t) => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, i;
    const o = (t = e == null ? void 0 : e.chains) != null ? t : [], c = (i = e == null ? void 0 : e.optionalChains) != null ? i : [], u = o.concat(c);
    if (!u.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const f = o.length ? (e == null ? void 0 : e.methods) || Yu : [], y = o.length ? (e == null ? void 0 : e.events) || Ju : [], p = (e == null ? void 0 : e.optionalMethods) || [], m = (e == null ? void 0 : e.optionalEvents) || [], x = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(u, e.projectId), S = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return { chains: o == null ? void 0 : o.map((C) => this.formatChainId(C)), optionalChains: c.map((C) => this.formatChainId(C)), methods: f, events: y, optionalMethods: p, optionalEvents: m, rpcMap: x, showQrModal: !!(e != null && e.showQrModal), qrModalOptions: S, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, t) {
    const i = {};
    return e.forEach((o) => {
      i[o] = this.getRpcUrl(o, t);
    }), i;
  }
  async initialize(e) {
    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? aa(this.rpc.chains) : aa(this.rpc.optionalChains), this.signer = await ZO.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: e.disableProviderPing, relayUrl: e.relayUrl, storageOptions: e.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let t;
      try {
        const { WalletConnectModal: i } = await import("./index-628565d7.js").then((o) => o.i);
        t = i;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (t)
        try {
          this.modal = new t(Ds({ walletConnectVersion: 2, projectId: this.rpc.projectId, standaloneChains: this.rpc.chains }, this.rpc.qrModalOptions));
        } catch (i) {
          throw this.signer.logger.error(i), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(e) {
    if (!e)
      return;
    const { chains: t, optionalChains: i, rpcMap: o } = e;
    t && nn(t) && (this.rpc.chains = t.map((c) => this.formatChainId(c)), t.forEach((c) => {
      this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
    })), i && nn(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i == null ? void 0 : i.map((c) => this.formatChainId(c)), i.forEach((c) => {
      this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
    }));
  }
  getRpcUrl(e, t) {
    var i;
    return ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) || `${nI}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
    this.setChainIds(e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts), this.setAccounts(t == null ? void 0 : t.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((t) => this.parseAccount(t));
  }
}
const fI = Eh, dI = "8b41140544e112e480eca0fa42777d30";
function pI(r) {
  typeof process > "u" && (window.process = { env: { NODE_ENV: "development" } });
  let e;
  const t = {
    name: "CryptoPunks",
    description: "CryptoPunks: 10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.",
    url: "https://cryptopunks.app/",
    icons: ["https://cryptopunks.app/public/images/cryptopunks/shareimage.png"]
  };
  return (async () => {
    e = await fI.init({
      projectId: dI,
      chains: [1],
      showQrModal: !0,
      qrModalOptions: {
        themeMode: "light",
        themeVariables: {
          "--wcm-accent-color": "#FF04B4",
          "--wcm-background-color": "#FF04B4"
        }
      },
      metadata: t,
      disableProviderPing: !0,
      rpcMap: {
        1: "https://rpc.flashbots.net/?builder=flashbots&builder=f1b.io&builder=rsync&builder=beaverbuild.org&builder=builder0x69&builder=titan&builder=eigenphi&builder=boba-builder&builder=gambit+labs&builder=payload"
      }
    }), window.WalletConnectModalProvider = e;
    const o = new CustomEvent("WalletConnectModalProviderLoaded");
    window.dispatchEvent(o);
  })(), [];
}
class gI extends $m {
  constructor(e) {
    super(), Nm(this, e, pI, null, mm, {});
  }
}
const OI = new gI({
  target: document.body
});
export {
  OI as default
};
