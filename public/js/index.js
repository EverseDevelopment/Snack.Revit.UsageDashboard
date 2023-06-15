var tt = Object.defineProperty;
var et = (e, t, n) => t in e ? tt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var v = (e, t, n) => (et(e, typeof t != "symbol" ? t + "" : t, n), n);
function B() {
}
function Z(e) {
  return e();
}
function I() {
  return /* @__PURE__ */ Object.create(null);
}
function j(e) {
  e.forEach(Z);
}
function N(e) {
  return typeof e == "function";
}
function nt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function it(e) {
  return Object.keys(e).length === 0;
}
function d(e, t) {
  e.appendChild(t);
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function W(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function _(e) {
  return document.createElement(e);
}
function w(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function R(e) {
  return document.createTextNode(e);
}
function T() {
  return R(" ");
}
function ot() {
  return R("");
}
function A(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function r(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function lt(e) {
  return Array.from(e.childNodes);
}
function J(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function g(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
let G;
function z(e) {
  G = e;
}
const D = [], K = [];
let x = [];
const Q = [], st = /* @__PURE__ */ Promise.resolve();
let V = !1;
function rt() {
  V || (V = !0, st.then($));
}
function U(e) {
  x.push(e);
}
const q = /* @__PURE__ */ new Set();
let L = 0;
function $() {
  if (L !== 0)
    return;
  const e = G;
  do {
    try {
      for (; L < D.length; ) {
        const t = D[L];
        L++, z(t), ct(t.$$);
      }
    } catch (t) {
      throw D.length = 0, L = 0, t;
    }
    for (z(null), D.length = 0, L = 0; K.length; )
      K.pop()();
    for (let t = 0; t < x.length; t += 1) {
      const n = x[t];
      q.has(n) || (q.add(n), n());
    }
    x.length = 0;
  } while (D.length);
  for (; Q.length; )
    Q.pop()();
  V = !1, q.clear(), z(e);
}
function ct(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(U);
  }
}
function ft(e) {
  const t = [], n = [];
  x.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), x = t;
}
const at = /* @__PURE__ */ new Set();
function ht(e, t) {
  e && e.i && (at.delete(e), e.i(t));
}
function ut(e, t, n, i) {
  const { fragment: s, after_update: o } = e.$$;
  s && s.m(t, n), i || U(() => {
    const c = e.$$.on_mount.map(Z).filter(N);
    e.$$.on_destroy ? e.$$.on_destroy.push(...c) : j(c), e.$$.on_mount = [];
  }), o.forEach(U);
}
function dt(e, t) {
  const n = e.$$;
  n.fragment !== null && (ft(n.after_update), j(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function mt(e, t) {
  e.$$.dirty[0] === -1 && (D.push(e), rt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function pt(e, t, n, i, s, o, c, u = [-1]) {
  const f = G;
  z(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: B,
    not_equal: s,
    bound: I(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: I(),
    dirty: u,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  c && c(l.root);
  let m = !1;
  if (l.ctx = n ? n(e, t.props || {}, (h, b, ...p) => {
    const S = p.length ? p[0] : b;
    return l.ctx && s(l.ctx[h], l.ctx[h] = S) && (!l.skip_bound && l.bound[h] && l.bound[h](S), m && mt(e, h)), b;
  }) : [], l.update(), m = !0, j(l.before_update), l.fragment = i ? i(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = lt(t.target);
      l.fragment && l.fragment.l(h), h.forEach(W);
    } else
      l.fragment && l.fragment.c();
    t.intro && ht(e.$$.fragment), ut(e, t.target, t.anchor, t.customElement), $();
  }
  z(f);
}
class gt {
  $destroy() {
    dt(this, 1), this.$destroy = B;
  }
  $on(t, n) {
    if (!N(n))
      return B;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const s = i.indexOf(n);
      s !== -1 && i.splice(s, 1);
    };
  }
  $set(t) {
    this.$$set && !it(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function X(e) {
  let t, n, i, s, o, c, u, f, l, m, h, b, p, S, P, H, O, y = (
    /*currentStep*/
    e[9] > 1 && Y(e)
  );
  function a(C, E) {
    return (
      /*totalSteps*/
      C[8] === /*currentStep*/
      C[9] ? yt : bt
    );
  }
  let F = a(e), k = F(e);
  return {
    c() {
      t = _("div"), n = _("div"), i = _("button"), s = T(), o = _("h2"), c = R(
        /*title*/
        e[1]
      ), u = T(), f = _("p"), l = R(
        /*message*/
        e[0]
      ), m = T(), h = _("i"), b = T(), p = _("div"), y && y.c(), S = T(), k.c(), r(i, "class", "close svelte-1s48xn1"), g(
        o,
        "--title-color",
        /*titleColor*/
        e[7]
      ), r(o, "class", "svelte-1s48xn1"), r(h, "class", "svelte-1s48xn1"), r(p, "class", "container-tooltip-buttons svelte-1s48xn1"), r(n, "class", P = "container " + /*position*/
      e[5] + " svelte-1s48xn1"), g(
        n,
        "--bg-color",
        /*backgroundColor*/
        e[6]
      ), r(t, "class", "everse-tooltip svelte-1s48xn1"), r(t, "name", "tooltip"), g(
        t,
        "left",
        /*left*/
        e[2]
      ), g(
        t,
        "top",
        /*top*/
        e[3]
      ), g(
        t,
        "margin-left",
        /*marginLeft*/
        e[4]
      );
    },
    m(C, E) {
      M(C, t, E), d(t, n), d(n, i), d(n, s), d(n, o), d(o, c), d(n, u), d(n, f), d(f, l), d(n, m), d(n, h), d(n, b), d(n, p), y && y.m(p, null), d(p, S), k.m(p, null), H || (O = A(i, "click", function() {
        N(
          /*handelClose*/
          e[12]
        ) && e[12].apply(this, arguments);
      }), H = !0);
    },
    p(C, E) {
      e = C, E & /*title*/
      2 && J(
        c,
        /*title*/
        e[1]
      ), E & /*titleColor*/
      128 && g(
        o,
        "--title-color",
        /*titleColor*/
        e[7]
      ), E & /*message*/
      1 && J(
        l,
        /*message*/
        e[0]
      ), /*currentStep*/
      e[9] > 1 ? y ? y.p(e, E) : (y = Y(e), y.c(), y.m(p, S)) : y && (y.d(1), y = null), F === (F = a(e)) && k ? k.p(e, E) : (k.d(1), k = F(e), k && (k.c(), k.m(p, null))), E & /*position*/
      32 && P !== (P = "container " + /*position*/
      e[5] + " svelte-1s48xn1") && r(n, "class", P), E & /*backgroundColor*/
      64 && g(
        n,
        "--bg-color",
        /*backgroundColor*/
        e[6]
      ), E & /*left*/
      4 && g(
        t,
        "left",
        /*left*/
        e[2]
      ), E & /*top*/
      8 && g(
        t,
        "top",
        /*top*/
        e[3]
      ), E & /*marginLeft*/
      16 && g(
        t,
        "margin-left",
        /*marginLeft*/
        e[4]
      );
    },
    d(C) {
      C && W(t), y && y.d(), k.d(), H = !1, O();
    }
  };
}
function Y(e) {
  let t, n, i, s, o, c, u, f, l, m, h;
  return {
    c() {
      t = _("button"), n = _("div"), i = _("span"), i.textContent = "Prev", s = T(), o = w("svg"), c = w("path"), u = w("path"), f = w("path"), l = w("path"), r(c, "stroke", "none"), r(c, "d", "M0 0h24v24H0z"), r(c, "fill", "none"), r(u, "d", "M5 12l14 0"), r(f, "d", "M5 12l4 4"), r(l, "d", "M5 12l4 -4"), r(o, "xmlns", "http://www.w3.org/2000/svg"), r(o, "class", "icon icon-tabler icon-tabler-arrow-narrow-left"), r(o, "width", "28"), r(o, "height", "28"), r(o, "viewBox", "0 0 24 24"), r(o, "stroke-width", "1.5"), r(
        o,
        "stroke",
        /*titleColor*/
        e[7]
      ), r(o, "fill", "none"), r(o, "stroke-linecap", "round"), r(o, "stroke-linejoin", "round"), g(n, "display", "flex"), g(n, "flex-direction", "column"), g(
        t,
        "--title-color",
        /*titleColor*/
        e[7]
      ), r(t, "class", "tooltip-button svelte-1s48xn1");
    },
    m(b, p) {
      M(b, t, p), d(t, n), d(n, i), d(n, s), d(n, o), d(o, c), d(o, u), d(o, f), d(o, l), m || (h = A(t, "click", function() {
        N(
          /*handlePrev*/
          e[10]
        ) && e[10].apply(this, arguments);
      }), m = !0);
    },
    p(b, p) {
      e = b, p & /*titleColor*/
      128 && r(
        o,
        "stroke",
        /*titleColor*/
        e[7]
      ), p & /*titleColor*/
      128 && g(
        t,
        "--title-color",
        /*titleColor*/
        e[7]
      );
    },
    d(b) {
      b && W(t), m = !1, h();
    }
  };
}
function bt(e) {
  let t, n, i, s, o, c, u, f, l, m, h;
  return {
    c() {
      t = _("button"), n = _("div"), i = _("span"), i.textContent = "Next", s = T(), o = w("svg"), c = w("path"), u = w("path"), f = w("path"), l = w("path"), r(c, "stroke", "none"), r(c, "d", "M0 0h24v24H0z"), r(c, "fill", "none"), r(u, "d", "M5 12l14 0"), r(f, "d", "M15 16l4 -4"), r(l, "d", "M15 8l4 4"), r(o, "xmlns", "http://www.w3.org/2000/svg"), r(o, "class", "icon icon-tabler icon-tabler-arrow-narrow-right"), r(o, "width", "28"), r(o, "height", "28"), r(o, "viewBox", "0 0 24 24"), r(o, "stroke-width", "1.5"), r(
        o,
        "stroke",
        /*titleColor*/
        e[7]
      ), r(o, "fill", "none"), r(o, "stroke-linecap", "round"), r(o, "stroke-linejoin", "round"), g(n, "display", "flex"), g(n, "flex-direction", "column"), g(
        t,
        "--title-color",
        /*titleColor*/
        e[7]
      ), r(t, "class", "tooltip-button svelte-1s48xn1");
    },
    m(b, p) {
      M(b, t, p), d(t, n), d(n, i), d(n, s), d(n, o), d(o, c), d(o, u), d(o, f), d(o, l), m || (h = A(t, "click", function() {
        N(
          /*handleNext*/
          e[11]
        ) && e[11].apply(this, arguments);
      }), m = !0);
    },
    p(b, p) {
      e = b, p & /*titleColor*/
      128 && r(
        o,
        "stroke",
        /*titleColor*/
        e[7]
      ), p & /*titleColor*/
      128 && g(
        t,
        "--title-color",
        /*titleColor*/
        e[7]
      );
    },
    d(b) {
      b && W(t), m = !1, h();
    }
  };
}
function yt(e) {
  let t, n, i, s;
  return {
    c() {
      t = _("button"), n = _("div"), n.innerHTML = '<span style="margin-bottom: 28px">Finish</span>', g(n, "display", "flex"), g(n, "flex-direction", "column"), g(
        t,
        "--title-color",
        /*titleColor*/
        e[7]
      ), r(t, "class", "tooltip-button svelte-1s48xn1");
    },
    m(o, c) {
      M(o, t, c), d(t, n), i || (s = A(t, "click", function() {
        N(
          /*handelFinish*/
          e[13]
        ) && e[13].apply(this, arguments);
      }), i = !0);
    },
    p(o, c) {
      e = o, c & /*titleColor*/
      128 && g(
        t,
        "--title-color",
        /*titleColor*/
        e[7]
      );
    },
    d(o) {
      o && W(t), i = !1, s();
    }
  };
}
function _t(e) {
  let t, n = (
    /*display*/
    e[14] && X(e)
  );
  return {
    c() {
      n && n.c(), t = ot();
    },
    m(i, s) {
      n && n.m(i, s), M(i, t, s);
    },
    p(i, [s]) {
      /*display*/
      i[14] ? n ? n.p(i, s) : (n = X(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: B,
    o: B,
    d(i) {
      n && n.d(i), i && W(t);
    }
  };
}
function Et(e, t, n) {
  let { activator: i = null } = t, { message: s = "" } = t, { title: o = "" } = t, { left: c = "-500px" } = t, { top: u = "-5555" } = t, { marginLeft: f = 0 } = t, { position: l = "top" } = t, { backgroundColor: m = "#E2D8CC" } = t, { titleColor: h = "black" } = t, { totalSteps: b = 0 } = t, { currentStep: p = 0 } = t, { handlePrev: S = () => {
  } } = t, { handleNext: P = () => {
  } } = t, { handelClose: H = () => {
  } } = t, { handelFinish: O = () => {
  } } = t, { display: y = !1 } = t;
  return e.$$set = (a) => {
    "activator" in a && n(15, i = a.activator), "message" in a && n(0, s = a.message), "title" in a && n(1, o = a.title), "left" in a && n(2, c = a.left), "top" in a && n(3, u = a.top), "marginLeft" in a && n(4, f = a.marginLeft), "position" in a && n(5, l = a.position), "backgroundColor" in a && n(6, m = a.backgroundColor), "titleColor" in a && n(7, h = a.titleColor), "totalSteps" in a && n(8, b = a.totalSteps), "currentStep" in a && n(9, p = a.currentStep), "handlePrev" in a && n(10, S = a.handlePrev), "handleNext" in a && n(11, P = a.handleNext), "handelClose" in a && n(12, H = a.handelClose), "handelFinish" in a && n(13, O = a.handelFinish), "display" in a && n(14, y = a.display);
  }, [
    s,
    o,
    c,
    u,
    f,
    l,
    m,
    h,
    b,
    p,
    S,
    P,
    H,
    O,
    y,
    i
  ];
}
class vt extends gt {
  constructor(t) {
    super(), pt(this, t, Et, _t, nt, {
      activator: 15,
      message: 0,
      title: 1,
      left: 2,
      top: 3,
      marginLeft: 4,
      position: 5,
      backgroundColor: 6,
      titleColor: 7,
      totalSteps: 8,
      currentStep: 9,
      handlePrev: 10,
      handleNext: 11,
      handelClose: 12,
      handelFinish: 13,
      display: 14
    });
  }
}
function kt(e, t) {
  let n;
  return function() {
    clearTimeout(n), n = setTimeout(e, t);
  };
}
class St {
  constructor(t, n, i, s, o) {
    v(this, "steps");
    v(this, "currentStep");
    v(this, "currentStepPosition");
    v(this, "myElement");
    v(this, "tooltipDomElement");
    v(this, "display");
    v(this, "tooltip");
    v(this, "backgroundColor");
    v(this, "titleColor");
    v(this, "resizeObserver");
    v(this, "handelFinish");
    this.steps = t, this.backgroundColor = i, this.titleColor = s, this.handelFinish = o, this.currentStepPosition = n, this.currentStep = t[n], this.myElement = null, this.resizeObserver = null, this.display = !1, this.tooltipDomElement = null, this.tooltip = new vt({
      target: document.body
    });
  }
  init() {
    this.currentStepPosition = 0, window.addEventListener("scroll", this.debouncedHandleResize.bind(this)), window.addEventListener("resize", this.debouncedHandleResize.bind(this)), this.display = !0, this.resizeObserver = new ResizeObserver(this.debouncedHandleResize.bind(this)), this.tooltip.$set({ display: this.display }), setTimeout(() => {
      var n;
      let t = document.getElementsByName("tooltip");
      (n = this.resizeObserver) == null || n.observe(t[0]);
    });
  }
  debouncedHandleResize() {
    kt(() => {
      this.calculatePosition();
    }, 10)();
  }
  nextStep() {
    this.currentStepPosition < this.steps.length - 1 && (this.currentStepPosition += 1, this.setValues(), this.calculatePosition());
  }
  prevStep() {
    this.currentStepPosition > 0 && (this.currentStepPosition -= 1, this.setValues(), this.calculatePosition());
  }
  showOnboarding() {
    this.setValues(), this.init();
  }
  closeOnboarding() {
    var t;
    (t = this.resizeObserver) == null || t.disconnect(), this.display = !1, this.tooltip.$set({ display: this.display });
  }
  setValues() {
    this.currentStep = this.steps[this.currentStepPosition], this.myElement = this.currentStep.element ? this.currentStep.element : document.querySelector(`[tooltip-code="${this.currentStep.code}"]`), this.scrollToElement();
  }
  calculatePosition() {
    if (this.tooltipDomElement = document.getElementsByName("tooltip"), !this.myElement || !this.display)
      return !1;
    setTimeout(() => {
      switch (this.currentStep.position) {
        case "bottom":
          this.positionBottom();
          break;
        case "top":
          this.positionTop();
          break;
        case "left":
          this.positionLeft();
          break;
        case "right":
          this.positionRight();
          break;
        default:
          this.positionBottom();
      }
    });
  }
  setTooltipProps(t, n, i) {
    this.tooltip.$set({
      display: this.display,
      totalSteps: this.steps.length,
      currentStep: this.currentStepPosition + 1,
      message: this.currentStep.message,
      title: this.currentStep.title,
      position: this.currentStep.position,
      backgroundColor: this.backgroundColor,
      titleColor: this.titleColor,
      left: t,
      top: n,
      marginLeft: i,
      handelClose: () => this.closeOnboarding(),
      handelFinish: () => this.handelFinish(),
      handleNext: () => this.nextStep(),
      handlePrev: () => this.prevStep()
    });
  }
  positionBottom() {
    var u, f, l, m, h;
    const t = ((u = this.myElement) == null ? void 0 : u.clientWidth) || 0, n = (((f = this.myElement) == null ? void 0 : f.clientHeight) || 0) + 10, s = `-${(this.tooltipDomElement && ((l = this.tooltipDomElement[0]) == null ? void 0 : l.clientWidth) || 0) / 2}px`, o = (((m = this.myElement) == null ? void 0 : m.offsetLeft) || 0) + t / 2 + "px", c = (((h = this.myElement) == null ? void 0 : h.offsetTop) || 0) + n + "px";
    this.setTooltipProps(o, c, s);
  }
  positionTop() {
    var u, f, l, m, h;
    const t = ((u = this.myElement) == null ? void 0 : u.clientWidth) || 0, n = this.tooltipDomElement && ((f = this.tooltipDomElement[0]) == null ? void 0 : f.clientWidth) || 0, i = this.tooltipDomElement && ((l = this.tooltipDomElement[0]) == null ? void 0 : l.clientHeight) || 0, s = `-${n / 2}px`, o = (((m = this.myElement) == null ? void 0 : m.offsetLeft) || 0) + t / 2 + "px", c = (((h = this.myElement) == null ? void 0 : h.offsetTop) || 0) - (i + 10) + "px";
    this.setTooltipProps(o, c, s);
  }
  positionRight() {
    var u, f, l, m, h;
    const t = ((u = this.myElement) == null ? void 0 : u.clientWidth) || 0, n = ((f = this.myElement) == null ? void 0 : f.clientHeight) || 0, i = this.tooltipDomElement && ((l = this.tooltipDomElement[0]) == null ? void 0 : l.clientHeight) || 0, s = 10, o = (((m = this.myElement) == null ? void 0 : m.offsetLeft) || 0) + t + s + "px", c = (((h = this.myElement) == null ? void 0 : h.offsetTop) || 0) - i / 2 + n / 2 + "px";
    this.setTooltipProps(o, c, "auto");
  }
  positionLeft() {
    var u, f, l, m, h;
    const t = ((u = this.myElement) == null ? void 0 : u.clientHeight) || 0, n = this.tooltipDomElement && ((f = this.tooltipDomElement[0]) == null ? void 0 : f.clientHeight) || 0, i = this.tooltipDomElement && ((l = this.tooltipDomElement[0]) == null ? void 0 : l.clientWidth) || 0, s = 10, o = (((m = this.myElement) == null ? void 0 : m.offsetLeft) || 0) - i - s + "px", c = (((h = this.myElement) == null ? void 0 : h.offsetTop) || 0) - n / 2 + t / 2 + "px";
    this.setTooltipProps(o, c, "auto");
  }
  scrollToElement() {
    var t, n;
    window.scrollTo({
      top: (t = this.myElement) != null && t.offsetTop ? ((n = this.myElement) == null ? void 0 : n.offsetTop) - 300 : 0,
      behavior: "smooth"
    });
  }
}
function Ct(e, t) {
  const n = document.getElementsByTagName(t);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.textContent && s.textContent.includes(e))
      return s;
  }
  return null;
}
function Pt(e, t, n) {
  var s, o;
  const i = document.querySelector(`#${n}`);
  if (i) {
    console.log(">>>", (s = i.contentWindow) == null ? void 0 : s.document);
    const c = (o = i.contentWindow) == null ? void 0 : o.document;
    if (c) {
      const u = c.querySelectorAll(t);
      console.log("...", u);
      for (let f = 0; f < u.length; f++) {
        const l = u[f];
        if (l.textContent && l.textContent.includes(e))
          return l;
      }
    }
  }
  return null;
}
function Tt(e) {
  return new Promise((t) => {
    const n = document.querySelector(`#${e}`);
    n ? n.addEventListener("load", () => {
      t();
    }) : t();
  });
}
export {
  St as UserOnboarding,
  Tt as elementLoaded,
  Ct as findElementByContent,
  Pt as findElementByContentAtEframe
};
