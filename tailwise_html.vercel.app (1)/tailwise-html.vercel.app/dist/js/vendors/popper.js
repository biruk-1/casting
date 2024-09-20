(() => {
    var Ke = Object.defineProperty;
    var Qe = (t, e) => {
        for (var r in e) Ke(t, r, {
            get: e[r],
            enumerable: !0
        })
    };
    var de = {};
    Qe(de, {
        afterMain: () => De,
        afterRead: () => Se,
        afterWrite: () => Le,
        applyStyles: () => ht,
        arrow: () => Ft,
        auto: () => St,
        basePlacements: () => J,
        beforeMain: () => Re,
        beforeRead: () => Ee,
        beforeWrite: () => Ce,
        bottom: () => B,
        clippingParents: () => _t,
        computeStyles: () => yt,
        createPopper: () => qe,
        createPopperBase: () => Fe,
        createPopperLite: () => Xe,
        detectOverflow: () => V,
        end: () => _,
        eventListeners: () => wt,
        flip: () => Ut,
        hide: () => Yt,
        left: () => E,
        main: () => Be,
        modifierPhases: () => ee,
        offset: () => zt,
        placements: () => Bt,
        popper: () => nt,
        popperGenerator: () => dt,
        popperOffsets: () => Pt,
        preventOverflow: () => Gt,
        read: () => Ae,
        reference: () => te,
        right: () => R,
        start: () => G,
        top: () => O,
        variationPlacements: () => $t,
        viewport: () => Rt,
        write: () => Me
    });
    var O = "top",
        B = "bottom",
        R = "right",
        E = "left",
        St = "auto",
        J = [O, B, R, E],
        G = "start",
        _ = "end",
        _t = "clippingParents",
        Rt = "viewport",
        nt = "popper",
        te = "reference",
        $t = J.reduce(function(t, e) {
            return t.concat([e + "-" + G, e + "-" + _])
        }, []),
        Bt = [].concat(J, [St]).reduce(function(t, e) {
            return t.concat([e, e + "-" + G, e + "-" + _])
        }, []),
        Ee = "beforeRead",
        Ae = "read",
        Se = "afterRead",
        Re = "beforeMain",
        Be = "main",
        De = "afterMain",
        Ce = "beforeWrite",
        Me = "write",
        Le = "afterWrite",
        ee = [Ee, Ae, Se, Re, Be, De, Ce, Me, Le];

    function L(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function b(t) {
        if (t == null) return window;
        if (t.toString() !== "[object Window]") {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function F(t) {
        var e = b(t).Element;
        return t instanceof e || t instanceof Element
    }

    function C(t) {
        var e = b(t).HTMLElement;
        return t instanceof e || t instanceof HTMLElement
    }

    function gt(t) {
        if (typeof ShadowRoot > "u") return !1;
        var e = b(t).ShadowRoot;
        return t instanceof e || t instanceof ShadowRoot
    }

    function Ze(t) {
        var e = t.state;
        Object.keys(e.elements).forEach(function(r) {
            var o = e.styles[r] || {},
                i = e.attributes[r] || {},
                a = e.elements[r];
            !C(a) || !L(a) || (Object.assign(a.style, o), Object.keys(i).forEach(function(s) {
                var p = i[s];
                p === !1 ? a.removeAttribute(s) : a.setAttribute(s, p === !0 ? "" : p)
            }))
        })
    }

    function _e(t) {
        var e = t.state,
            r = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow),
            function() {
                Object.keys(e.elements).forEach(function(o) {
                    var i = e.elements[o],
                        a = e.attributes[o] || {},
                        s = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : r[o]),
                        p = s.reduce(function(n, m) {
                            return n[m] = "", n
                        }, {});
                    !C(i) || !L(i) || (Object.assign(i.style, p), Object.keys(a).forEach(function(n) {
                        i.removeAttribute(n)
                    }))
                })
            }
    }
    var ht = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: Ze,
        effect: _e,
        requires: ["computeStyles"]
    };

    function j(t) {
        return t.split("-")[0]
    }
    var Y = Math.max,
        pt = Math.min,
        K = Math.round;

    function xt() {
        var t = navigator.userAgentData;
        return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
            return e.brand + "/" + e.version
        }).join(" ") : navigator.userAgent
    }

    function Dt() {
        return !/^((?!chrome|android).)*safari/i.test(xt())
    }

    function X(t, e, r) {
        e === void 0 && (e = !1), r === void 0 && (r = !1);
        var o = t.getBoundingClientRect(),
            i = 1,
            a = 1;
        e && C(t) && (i = t.offsetWidth > 0 && K(o.width) / t.offsetWidth || 1, a = t.offsetHeight > 0 && K(o.height) / t.offsetHeight || 1);
        var s = F(t) ? b(t) : window,
            p = s.visualViewport,
            n = !Dt() && r,
            m = (o.left + (n && p ? p.offsetLeft : 0)) / i,
            f = (o.top + (n && p ? p.offsetTop : 0)) / a,
            v = o.width / i,
            x = o.height / a;
        return {
            width: v,
            height: x,
            top: f,
            right: m + v,
            bottom: f + x,
            left: m,
            x: m,
            y: f
        }
    }

    function ft(t) {
        var e = X(t),
            r = t.offsetWidth,
            o = t.offsetHeight;
        return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: r,
            height: o
        }
    }

    function Ct(t, e) {
        var r = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (r && gt(r)) {
            var o = e;
            do {
                if (o && t.isSameNode(o)) return !0;
                o = o.parentNode || o.host
            } while (o)
        }
        return !1
    }

    function k(t) {
        return b(t).getComputedStyle(t)
    }

    function re(t) {
        return ["table", "td", "th"].indexOf(L(t)) >= 0
    }

    function W(t) {
        return ((F(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Q(t) {
        return L(t) === "html" ? t : t.assignedSlot || t.parentNode || (gt(t) ? t.host : null) || W(t)
    }

    function je(t) {
        return !C(t) || k(t).position === "fixed" ? null : t.offsetParent
    }

    function tr(t) {
        var e = /firefox/i.test(xt()),
            r = /Trident/i.test(xt());
        if (r && C(t)) {
            var o = k(t);
            if (o.position === "fixed") return null
        }
        var i = Q(t);
        for (gt(i) && (i = i.host); C(i) && ["html", "body"].indexOf(L(i)) < 0;) {
            var a = k(i);
            if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || e && a.willChange === "filter" || e && a.filter && a.filter !== "none") return i;
            i = i.parentNode
        }
        return null
    }

    function z(t) {
        for (var e = b(t), r = je(t); r && re(r) && k(r).position === "static";) r = je(r);
        return r && (L(r) === "html" || L(r) === "body" && k(r).position === "static") ? e : r || tr(t) || e
    }

    function st(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function mt(t, e, r) {
        return Y(t, pt(e, r))
    }

    function Te(t, e, r) {
        var o = mt(t, e, r);
        return o > r ? r : o
    }

    function Mt() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    function Lt(t) {
        return Object.assign({}, Mt(), t)
    }

    function jt(t, e) {
        return e.reduce(function(r, o) {
            return r[o] = t, r
        }, {})
    }
    var er = function(e, r) {
        return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
            placement: r.placement
        })) : e, Lt(typeof e != "number" ? e : jt(e, J))
    };

    function rr(t) {
        var e, r = t.state,
            o = t.name,
            i = t.options,
            a = r.elements.arrow,
            s = r.modifiersData.popperOffsets,
            p = j(r.placement),
            n = st(p),
            m = [E, R].indexOf(p) >= 0,
            f = m ? "height" : "width";
        if (!(!a || !s)) {
            var v = er(i.padding, r),
                x = ft(a),
                l = n === "y" ? O : E,
                w = n === "y" ? B : R,
                d = r.rects.reference[f] + r.rects.reference[n] - s[n] - r.rects.popper[f],
                u = s[n] - r.rects.reference[n],
                y = z(a),
                A = y ? n === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                S = d / 2 - u / 2,
                c = v[l],
                g = A - x[f] - v[w],
                h = A / 2 - x[f] / 2 + S,
                P = mt(c, h, g),
                T = n;
            r.modifiersData[o] = (e = {}, e[T] = P, e.centerOffset = P - h, e)
        }
    }

    function or(t) {
        var e = t.state,
            r = t.options,
            o = r.element,
            i = o === void 0 ? "[data-popper-arrow]" : o;
        i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Ct(e.elements.popper, i) && (e.elements.arrow = i))
    }
    var Ft = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: rr,
        effect: or,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function q(t) {
        return t.split("-")[1]
    }
    var ir = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function ar(t, e) {
        var r = t.x,
            o = t.y,
            i = e.devicePixelRatio || 1;
        return {
            x: K(r * i) / i || 0,
            y: K(o * i) / i || 0
        }
    }

    function We(t) {
        var e, r = t.popper,
            o = t.popperRect,
            i = t.placement,
            a = t.variation,
            s = t.offsets,
            p = t.position,
            n = t.gpuAcceleration,
            m = t.adaptive,
            f = t.roundOffsets,
            v = t.isFixed,
            x = s.x,
            l = x === void 0 ? 0 : x,
            w = s.y,
            d = w === void 0 ? 0 : w,
            u = typeof f == "function" ? f({
                x: l,
                y: d
            }) : {
                x: l,
                y: d
            };
        l = u.x, d = u.y;
        var y = s.hasOwnProperty("x"),
            A = s.hasOwnProperty("y"),
            S = E,
            c = O,
            g = window;
        if (m) {
            var h = z(r),
                P = "clientHeight",
                T = "clientWidth";
            if (h === b(r) && (h = W(r), k(h).position !== "static" && p === "absolute" && (P = "scrollHeight", T = "scrollWidth")), h = h, i === O || (i === E || i === R) && a === _) {
                c = B;
                var M = v && h === g && g.visualViewport ? g.visualViewport.height : h[P];
                d -= M - o.height, d *= n ? 1 : -1
            }
            if (i === E || (i === O || i === B) && a === _) {
                S = R;
                var D = v && h === g && g.visualViewport ? g.visualViewport.width : h[T];
                l -= D - o.width, l *= n ? 1 : -1
            }
        }
        var N = Object.assign({
                position: p
            }, m && ir),
            I = f === !0 ? ar({
                x: l,
                y: d
            }, b(r)) : {
                x: l,
                y: d
            };
        if (l = I.x, d = I.y, n) {
            var H;
            return Object.assign({}, N, (H = {}, H[c] = A ? "0" : "", H[S] = y ? "0" : "", H.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + d + "px)" : "translate3d(" + l + "px, " + d + "px, 0)", H))
        }
        return Object.assign({}, N, (e = {}, e[c] = A ? d + "px" : "", e[S] = y ? l + "px" : "", e.transform = "", e))
    }

    function nr(t) {
        var e = t.state,
            r = t.options,
            o = r.gpuAcceleration,
            i = o === void 0 ? !0 : o,
            a = r.adaptive,
            s = a === void 0 ? !0 : a,
            p = r.roundOffsets,
            n = p === void 0 ? !0 : p,
            m = {
                placement: j(e.placement),
                variation: q(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: i,
                isFixed: e.options.strategy === "fixed"
            };
        e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, m, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: s,
            roundOffsets: n
        })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, m, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: n
        })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement
        })
    }
    var yt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: nr,
        data: {}
    };
    var Xt = {
        passive: !0
    };

    function pr(t) {
        var e = t.state,
            r = t.instance,
            o = t.options,
            i = o.scroll,
            a = i === void 0 ? !0 : i,
            s = o.resize,
            p = s === void 0 ? !0 : s,
            n = b(e.elements.popper),
            m = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return a && m.forEach(function(f) {
                f.addEventListener("scroll", r.update, Xt)
            }), p && n.addEventListener("resize", r.update, Xt),
            function() {
                a && m.forEach(function(f) {
                    f.removeEventListener("scroll", r.update, Xt)
                }), p && n.removeEventListener("resize", r.update, Xt)
            }
    }
    var wt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: pr,
        data: {}
    };
    var fr = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function bt(t) {
        return t.replace(/left|right|bottom|top/g, function(e) {
            return fr[e]
        })
    }
    var sr = {
        start: "end",
        end: "start"
    };

    function qt(t) {
        return t.replace(/start|end/g, function(e) {
            return sr[e]
        })
    }

    function lt(t) {
        var e = b(t),
            r = e.pageXOffset,
            o = e.pageYOffset;
        return {
            scrollLeft: r,
            scrollTop: o
        }
    }

    function ct(t) {
        return X(W(t)).left + lt(t).scrollLeft
    }

    function oe(t, e) {
        var r = b(t),
            o = W(t),
            i = r.visualViewport,
            a = o.clientWidth,
            s = o.clientHeight,
            p = 0,
            n = 0;
        if (i) {
            a = i.width, s = i.height;
            var m = Dt();
            (m || !m && e === "fixed") && (p = i.offsetLeft, n = i.offsetTop)
        }
        return {
            width: a,
            height: s,
            x: p + ct(t),
            y: n
        }
    }

    function ie(t) {
        var e, r = W(t),
            o = lt(t),
            i = (e = t.ownerDocument) == null ? void 0 : e.body,
            a = Y(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
            s = Y(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
            p = -o.scrollLeft + ct(t),
            n = -o.scrollTop;
        return k(i || r).direction === "rtl" && (p += Y(r.clientWidth, i ? i.clientWidth : 0) - a), {
            width: a,
            height: s,
            x: p,
            y: n
        }
    }

    function ut(t) {
        var e = k(t),
            r = e.overflow,
            o = e.overflowX,
            i = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + o)
    }

    function It(t) {
        return ["html", "body", "#document"].indexOf(L(t)) >= 0 ? t.ownerDocument.body : C(t) && ut(t) ? t : It(Q(t))
    }

    function tt(t, e) {
        var r;
        e === void 0 && (e = []);
        var o = It(t),
            i = o === ((r = t.ownerDocument) == null ? void 0 : r.body),
            a = b(o),
            s = i ? [a].concat(a.visualViewport || [], ut(o) ? o : []) : o,
            p = e.concat(s);
        return i ? p : p.concat(tt(Q(s)))
    }

    function Ot(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function mr(t, e) {
        var r = X(t, !1, e === "fixed");
        return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r
    }

    function Ne(t, e, r) {
        return e === Rt ? Ot(oe(t, r)) : F(e) ? mr(e, r) : Ot(ie(W(t)))
    }

    function lr(t) {
        var e = tt(Q(t)),
            r = ["absolute", "fixed"].indexOf(k(t).position) >= 0,
            o = r && C(t) ? z(t) : t;
        return F(o) ? e.filter(function(i) {
            return F(i) && Ct(i, o) && L(i) !== "body"
        }) : []
    }

    function ae(t, e, r, o) {
        var i = e === "clippingParents" ? lr(t) : [].concat(e),
            a = [].concat(i, [r]),
            s = a[0],
            p = a.reduce(function(n, m) {
                var f = Ne(t, m, o);
                return n.top = Y(f.top, n.top), n.right = pt(f.right, n.right), n.bottom = pt(f.bottom, n.bottom), n.left = Y(f.left, n.left), n
            }, Ne(t, s, o));
        return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p
    }

    function Tt(t) {
        var e = t.reference,
            r = t.element,
            o = t.placement,
            i = o ? j(o) : null,
            a = o ? q(o) : null,
            s = e.x + e.width / 2 - r.width / 2,
            p = e.y + e.height / 2 - r.height / 2,
            n;
        switch (i) {
            case O:
                n = {
                    x: s,
                    y: e.y - r.height
                };
                break;
            case B:
                n = {
                    x: s,
                    y: e.y + e.height
                };
                break;
            case R:
                n = {
                    x: e.x + e.width,
                    y: p
                };
                break;
            case E:
                n = {
                    x: e.x - r.width,
                    y: p
                };
                break;
            default:
                n = {
                    x: e.x,
                    y: e.y
                }
        }
        var m = i ? st(i) : null;
        if (m != null) {
            var f = m === "y" ? "height" : "width";
            switch (a) {
                case G:
                    n[m] = n[m] - (e[f] / 2 - r[f] / 2);
                    break;
                case _:
                    n[m] = n[m] + (e[f] / 2 - r[f] / 2);
                    break;
                default:
            }
        }
        return n
    }

    function V(t, e) {
        e === void 0 && (e = {});
        var r = e,
            o = r.placement,
            i = o === void 0 ? t.placement : o,
            a = r.strategy,
            s = a === void 0 ? t.strategy : a,
            p = r.boundary,
            n = p === void 0 ? _t : p,
            m = r.rootBoundary,
            f = m === void 0 ? Rt : m,
            v = r.elementContext,
            x = v === void 0 ? nt : v,
            l = r.altBoundary,
            w = l === void 0 ? !1 : l,
            d = r.padding,
            u = d === void 0 ? 0 : d,
            y = Lt(typeof u != "number" ? u : jt(u, J)),
            A = x === nt ? te : nt,
            S = t.rects.popper,
            c = t.elements[w ? A : x],
            g = ae(F(c) ? c : c.contextElement || W(t.elements.popper), n, f, s),
            h = X(t.elements.reference),
            P = Tt({
                reference: h,
                element: S,
                strategy: "absolute",
                placement: i
            }),
            T = Ot(Object.assign({}, S, P)),
            M = x === nt ? T : h,
            D = {
                top: g.top - M.top + y.top,
                bottom: M.bottom - g.bottom + y.bottom,
                left: g.left - M.left + y.left,
                right: M.right - g.right + y.right
            },
            N = t.modifiersData.offset;
        if (x === nt && N) {
            var I = N[i];
            Object.keys(D).forEach(function(H) {
                var et = [R, B].indexOf(H) >= 0 ? 1 : -1,
                    rt = [O, B].indexOf(H) >= 0 ? "y" : "x";
                D[H] += I[rt] * et
            })
        }
        return D
    }

    function ne(t, e) {
        e === void 0 && (e = {});
        var r = e,
            o = r.placement,
            i = r.boundary,
            a = r.rootBoundary,
            s = r.padding,
            p = r.flipVariations,
            n = r.allowedAutoPlacements,
            m = n === void 0 ? Bt : n,
            f = q(o),
            v = f ? p ? $t : $t.filter(function(w) {
                return q(w) === f
            }) : J,
            x = v.filter(function(w) {
                return m.indexOf(w) >= 0
            });
        x.length === 0 && (x = v);
        var l = x.reduce(function(w, d) {
            return w[d] = V(t, {
                placement: d,
                boundary: i,
                rootBoundary: a,
                padding: s
            })[j(d)], w
        }, {});
        return Object.keys(l).sort(function(w, d) {
            return l[w] - l[d]
        })
    }

    function cr(t) {
        if (j(t) === St) return [];
        var e = bt(t);
        return [qt(t), e, qt(e)]
    }

    function ur(t) {
        var e = t.state,
            r = t.options,
            o = t.name;
        if (!e.modifiersData[o]._skip) {
            for (var i = r.mainAxis, a = i === void 0 ? !0 : i, s = r.altAxis, p = s === void 0 ? !0 : s, n = r.fallbackPlacements, m = r.padding, f = r.boundary, v = r.rootBoundary, x = r.altBoundary, l = r.flipVariations, w = l === void 0 ? !0 : l, d = r.allowedAutoPlacements, u = e.options.placement, y = j(u), A = y === u, S = n || (A || !w ? [bt(u)] : cr(u)), c = [u].concat(S).reduce(function(vt, Z) {
                    return vt.concat(j(Z) === St ? ne(e, {
                        placement: Z,
                        boundary: f,
                        rootBoundary: v,
                        padding: m,
                        flipVariations: w,
                        allowedAutoPlacements: d
                    }) : Z)
                }, []), g = e.rects.reference, h = e.rects.popper, P = new Map, T = !0, M = c[0], D = 0; D < c.length; D++) {
                var N = c[D],
                    I = j(N),
                    H = q(N) === G,
                    et = [O, B].indexOf(I) >= 0,
                    rt = et ? "width" : "height",
                    $ = V(e, {
                        placement: N,
                        boundary: f,
                        rootBoundary: v,
                        altBoundary: x,
                        padding: m
                    }),
                    U = et ? H ? R : E : H ? B : O;
                g[rt] > h[rt] && (U = bt(U));
                var Wt = bt(U),
                    ot = [];
                if (a && ot.push($[I] <= 0), p && ot.push($[U] <= 0, $[Wt] <= 0), ot.every(function(vt) {
                        return vt
                    })) {
                    M = N, T = !1;
                    break
                }
                P.set(N, ot)
            }
            if (T)
                for (var Nt = w ? 3 : 1, Jt = function(Z) {
                        var At = c.find(function(kt) {
                            var it = P.get(kt);
                            if (it) return it.slice(0, Z).every(function(Kt) {
                                return Kt
                            })
                        });
                        if (At) return M = At, "break"
                    }, Et = Nt; Et > 0; Et--) {
                    var Ht = Jt(Et);
                    if (Ht === "break") break
                }
            e.placement !== M && (e.modifiersData[o]._skip = !0, e.placement = M, e.reset = !0)
        }
    }
    var Ut = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: ur,
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function He(t, e, r) {
        return r === void 0 && (r = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - r.y,
            right: t.right - e.width + r.x,
            bottom: t.bottom - e.height + r.y,
            left: t.left - e.width - r.x
        }
    }

    function ke(t) {
        return [O, R, B, E].some(function(e) {
            return t[e] >= 0
        })
    }

    function dr(t) {
        var e = t.state,
            r = t.name,
            o = e.rects.reference,
            i = e.rects.popper,
            a = e.modifiersData.preventOverflow,
            s = V(e, {
                elementContext: "reference"
            }),
            p = V(e, {
                altBoundary: !0
            }),
            n = He(s, o),
            m = He(p, i, a),
            f = ke(n),
            v = ke(m);
        e.modifiersData[r] = {
            referenceClippingOffsets: n,
            popperEscapeOffsets: m,
            isReferenceHidden: f,
            hasPopperEscaped: v
        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": f,
            "data-popper-escaped": v
        })
    }
    var Yt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: dr
    };

    function vr(t, e, r) {
        var o = j(t),
            i = [E, O].indexOf(o) >= 0 ? -1 : 1,
            a = typeof r == "function" ? r(Object.assign({}, e, {
                placement: t
            })) : r,
            s = a[0],
            p = a[1];
        return s = s || 0, p = (p || 0) * i, [E, R].indexOf(o) >= 0 ? {
            x: p,
            y: s
        } : {
            x: s,
            y: p
        }
    }

    function gr(t) {
        var e = t.state,
            r = t.options,
            o = t.name,
            i = r.offset,
            a = i === void 0 ? [0, 0] : i,
            s = Bt.reduce(function(f, v) {
                return f[v] = vr(v, e.rects, a), f
            }, {}),
            p = s[e.placement],
            n = p.x,
            m = p.y;
        e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += n, e.modifiersData.popperOffsets.y += m), e.modifiersData[o] = s
    }
    var zt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: gr
    };

    function hr(t) {
        var e = t.state,
            r = t.name;
        e.modifiersData[r] = Tt({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement
        })
    }
    var Pt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: hr,
        data: {}
    };

    function pe(t) {
        return t === "x" ? "y" : "x"
    }

    function xr(t) {
        var e = t.state,
            r = t.options,
            o = t.name,
            i = r.mainAxis,
            a = i === void 0 ? !0 : i,
            s = r.altAxis,
            p = s === void 0 ? !1 : s,
            n = r.boundary,
            m = r.rootBoundary,
            f = r.altBoundary,
            v = r.padding,
            x = r.tether,
            l = x === void 0 ? !0 : x,
            w = r.tetherOffset,
            d = w === void 0 ? 0 : w,
            u = V(e, {
                boundary: n,
                rootBoundary: m,
                padding: v,
                altBoundary: f
            }),
            y = j(e.placement),
            A = q(e.placement),
            S = !A,
            c = st(y),
            g = pe(c),
            h = e.modifiersData.popperOffsets,
            P = e.rects.reference,
            T = e.rects.popper,
            M = typeof d == "function" ? d(Object.assign({}, e.rects, {
                placement: e.placement
            })) : d,
            D = typeof M == "number" ? {
                mainAxis: M,
                altAxis: M
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, M),
            N = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
            I = {
                x: 0,
                y: 0
            };
        if (h) {
            if (a) {
                var H, et = c === "y" ? O : E,
                    rt = c === "y" ? B : R,
                    $ = c === "y" ? "height" : "width",
                    U = h[c],
                    Wt = U + u[et],
                    ot = U - u[rt],
                    Nt = l ? -T[$] / 2 : 0,
                    Jt = A === G ? P[$] : T[$],
                    Et = A === G ? -T[$] : -P[$],
                    Ht = e.elements.arrow,
                    vt = l && Ht ? ft(Ht) : {
                        width: 0,
                        height: 0
                    },
                    Z = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Mt(),
                    At = Z[et],
                    kt = Z[rt],
                    it = mt(0, P[$], vt[$]),
                    Kt = S ? P[$] / 2 - Nt - it - At - D.mainAxis : Jt - it - At - D.mainAxis,
                    Ie = S ? -P[$] / 2 + Nt + it + kt + D.mainAxis : Et + it + kt + D.mainAxis,
                    Qt = e.elements.arrow && z(e.elements.arrow),
                    Ue = Qt ? c === "y" ? Qt.clientTop || 0 : Qt.clientLeft || 0 : 0,
                    ve = (H = N ? .[c]) != null ? H : 0,
                    Ye = U + Kt - ve - Ue,
                    ze = U + Ie - ve,
                    ge = mt(l ? pt(Wt, Ye) : Wt, U, l ? Y(ot, ze) : ot);
                h[c] = ge, I[c] = ge - U
            }
            if (p) {
                var he, Ge = c === "x" ? O : E,
                    Je = c === "x" ? B : R,
                    at = h[g],
                    Vt = g === "y" ? "height" : "width",
                    xe = at + u[Ge],
                    ye = at - u[Je],
                    Zt = [O, E].indexOf(y) !== -1,
                    we = (he = N ? .[g]) != null ? he : 0,
                    be = Zt ? xe : at - P[Vt] - T[Vt] - we + D.altAxis,
                    Oe = Zt ? at + P[Vt] + T[Vt] - we - D.altAxis : ye,
                    Pe = l && Zt ? Te(be, at, Oe) : mt(l ? be : xe, at, l ? Oe : ye);
                h[g] = Pe, I[g] = Pe - at
            }
            e.modifiersData[o] = I
        }
    }
    var Gt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: xr,
        requiresIfExists: ["offset"]
    };

    function fe(t) {
        return {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
        }
    }

    function se(t) {
        return t === b(t) || !C(t) ? lt(t) : fe(t)
    }

    function yr(t) {
        var e = t.getBoundingClientRect(),
            r = K(e.width) / t.offsetWidth || 1,
            o = K(e.height) / t.offsetHeight || 1;
        return r !== 1 || o !== 1
    }

    function me(t, e, r) {
        r === void 0 && (r = !1);
        var o = C(e),
            i = C(e) && yr(e),
            a = W(e),
            s = X(t, i, r),
            p = {
                scrollLeft: 0,
                scrollTop: 0
            },
            n = {
                x: 0,
                y: 0
            };
        return (o || !o && !r) && ((L(e) !== "body" || ut(a)) && (p = se(e)), C(e) ? (n = X(e, !0), n.x += e.clientLeft, n.y += e.clientTop) : a && (n.x = ct(a))), {
            x: s.left + p.scrollLeft - n.x,
            y: s.top + p.scrollTop - n.y,
            width: s.width,
            height: s.height
        }
    }

    function wr(t) {
        var e = new Map,
            r = new Set,
            o = [];
        t.forEach(function(a) {
            e.set(a.name, a)
        });

        function i(a) {
            r.add(a.name);
            var s = [].concat(a.requires || [], a.requiresIfExists || []);
            s.forEach(function(p) {
                if (!r.has(p)) {
                    var n = e.get(p);
                    n && i(n)
                }
            }), o.push(a)
        }
        return t.forEach(function(a) {
            r.has(a.name) || i(a)
        }), o
    }

    function le(t) {
        var e = wr(t);
        return ee.reduce(function(r, o) {
            return r.concat(e.filter(function(i) {
                return i.phase === o
            }))
        }, [])
    }

    function ce(t) {
        var e;
        return function() {
            return e || (e = new Promise(function(r) {
                Promise.resolve().then(function() {
                    e = void 0, r(t())
                })
            })), e
        }
    }

    function ue(t) {
        var e = t.reduce(function(r, o) {
            var i = r[o.name];
            return r[o.name] = i ? Object.assign({}, i, o, {
                options: Object.assign({}, i.options, o.options),
                data: Object.assign({}, i.data, o.data)
            }) : o, r
        }, {});
        return Object.keys(e).map(function(r) {
            return e[r]
        })
    }
    var Ve = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function $e() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return !e.some(function(o) {
            return !(o && typeof o.getBoundingClientRect == "function")
        })
    }

    function dt(t) {
        t === void 0 && (t = {});
        var e = t,
            r = e.defaultModifiers,
            o = r === void 0 ? [] : r,
            i = e.defaultOptions,
            a = i === void 0 ? Ve : i;
        return function(p, n, m) {
            m === void 0 && (m = a);
            var f = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Ve, a),
                    modifiersData: {},
                    elements: {
                        reference: p,
                        popper: n
                    },
                    attributes: {},
                    styles: {}
                },
                v = [],
                x = !1,
                l = {
                    state: f,
                    setOptions: function(y) {
                        var A = typeof y == "function" ? y(f.options) : y;
                        d(), f.options = Object.assign({}, a, f.options, A), f.scrollParents = {
                            reference: F(p) ? tt(p) : p.contextElement ? tt(p.contextElement) : [],
                            popper: tt(n)
                        };
                        var S = le(ue([].concat(o, f.options.modifiers)));
                        return f.orderedModifiers = S.filter(function(c) {
                            return c.enabled
                        }), w(), l.update()
                    },
                    forceUpdate: function() {
                        if (!x) {
                            var y = f.elements,
                                A = y.reference,
                                S = y.popper;
                            if ($e(A, S)) {
                                f.rects = {
                                    reference: me(A, z(S), f.options.strategy === "fixed"),
                                    popper: ft(S)
                                }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(D) {
                                    return f.modifiersData[D.name] = Object.assign({}, D.data)
                                });
                                for (var c = 0; c < f.orderedModifiers.length; c++) {
                                    if (f.reset === !0) {
                                        f.reset = !1, c = -1;
                                        continue
                                    }
                                    var g = f.orderedModifiers[c],
                                        h = g.fn,
                                        P = g.options,
                                        T = P === void 0 ? {} : P,
                                        M = g.name;
                                    typeof h == "function" && (f = h({
                                        state: f,
                                        options: T,
                                        name: M,
                                        instance: l
                                    }) || f)
                                }
                            }
                        }
                    },
                    update: ce(function() {
                        return new Promise(function(u) {
                            l.forceUpdate(), u(f)
                        })
                    }),
                    destroy: function() {
                        d(), x = !0
                    }
                };
            if (!$e(p, n)) return l;
            l.setOptions(m).then(function(u) {
                !x && m.onFirstUpdate && m.onFirstUpdate(u)
            });

            function w() {
                f.orderedModifiers.forEach(function(u) {
                    var y = u.name,
                        A = u.options,
                        S = A === void 0 ? {} : A,
                        c = u.effect;
                    if (typeof c == "function") {
                        var g = c({
                                state: f,
                                name: y,
                                instance: l,
                                options: S
                            }),
                            h = function() {};
                        v.push(g || h)
                    }
                })
            }

            function d() {
                v.forEach(function(u) {
                    return u()
                }), v = []
            }
            return l
        }
    }
    var Fe = dt();
    var br = [wt, Pt, yt, ht],
        Xe = dt({
            defaultModifiers: br
        });
    var Or = [wt, Pt, yt, ht, zt, Ut, Gt, Ft, Yt],
        qe = dt({
            defaultModifiers: Or
        });
    window.Popper = de;
})();