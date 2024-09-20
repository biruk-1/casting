(() => {
    var N = "top",
        I = "bottom",
        W = "right",
        j = "left",
        ht = "auto",
        be = [N, I, W, j],
        me = "start",
        Ce = "end",
        Kt = "clippingParents",
        yt = "viewport",
        Ie = "popper",
        Jt = "reference",
        St = be.reduce(function(e, t) {
            return e.concat([t + "-" + me, t + "-" + Ce])
        }, []),
        bt = [].concat(be, [ht]).reduce(function(e, t) {
            return e.concat([t, t + "-" + me, t + "-" + Ce])
        }, []),
        Ur = "beforeRead",
        $r = "read",
        Xr = "afterRead",
        Yr = "beforeMain",
        _r = "main",
        qr = "afterMain",
        zr = "beforeWrite",
        Gr = "write",
        Kr = "afterWrite",
        Qt = [Ur, $r, Xr, Yr, _r, qr, zr, Gr, Kr];

    function F(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function D(e) {
        if (e == null) return window;
        if (e.toString() !== "[object Window]") {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }

    function Q(e) {
        var t = D(e).Element;
        return e instanceof t || e instanceof Element
    }

    function H(e) {
        var t = D(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement
    }

    function He(e) {
        if (typeof ShadowRoot > "u") return !1;
        var t = D(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot
    }

    function Jr(e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function(r) {
            var n = t.styles[r] || {},
                i = t.attributes[r] || {},
                f = t.elements[r];
            !H(f) || !F(f) || (Object.assign(f.style, n), Object.keys(i).forEach(function(p) {
                var u = i[p];
                u === !1 ? f.removeAttribute(p) : f.setAttribute(p, u === !0 ? "" : u)
            }))
        })
    }

    function Qr(e) {
        var t = e.state,
            r = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
            function() {
                Object.keys(t.elements).forEach(function(n) {
                    var i = t.elements[n],
                        f = t.attributes[n] || {},
                        p = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
                        u = p.reduce(function(s, l) {
                            return s[l] = "", s
                        }, {});
                    !H(i) || !F(i) || (Object.assign(i.style, u), Object.keys(f).forEach(function(s) {
                        i.removeAttribute(s)
                    }))
                })
            }
    }
    var Je = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: Jr,
        effect: Qr,
        requires: ["computeStyles"]
    };

    function U(e) {
        return e.split("-")[0]
    }
    var re = Math.max,
        Pe = Math.min,
        ve = Math.round;

    function Fe() {
        var e = navigator.userAgentData;
        return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
            return t.brand + "/" + t.version
        }).join(" ") : navigator.userAgent
    }

    function Qe() {
        return !/^((?!chrome|android).)*safari/i.test(Fe())
    }

    function Z(e, t, r) {
        t === void 0 && (t = !1), r === void 0 && (r = !1);
        var n = e.getBoundingClientRect(),
            i = 1,
            f = 1;
        t && H(e) && (i = e.offsetWidth > 0 && ve(n.width) / e.offsetWidth || 1, f = e.offsetHeight > 0 && ve(n.height) / e.offsetHeight || 1);
        var p = Q(e) ? D(e) : window,
            u = p.visualViewport,
            s = !Qe() && r,
            l = (n.left + (s && u ? u.offsetLeft : 0)) / i,
            c = (n.top + (s && u ? u.offsetTop : 0)) / f,
            b = n.width / i,
            O = n.height / f;
        return {
            width: b,
            height: O,
            top: c,
            right: l + b,
            bottom: c + O,
            left: l,
            x: l,
            y: c
        }
    }

    function Ae(e) {
        var t = Z(e),
            r = e.offsetWidth,
            n = e.offsetHeight;
        return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: r,
            height: n
        }
    }

    function Ze(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && He(r)) {
            var n = t;
            do {
                if (n && e.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function z(e) {
        return D(e).getComputedStyle(e)
    }

    function Mt(e) {
        return ["table", "td", "th"].indexOf(F(e)) >= 0
    }

    function X(e) {
        return ((Q(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function ge(e) {
        return F(e) === "html" ? e : e.assignedSlot || e.parentNode || (He(e) ? e.host : null) || X(e)
    }

    function Zt(e) {
        return !H(e) || z(e).position === "fixed" ? null : e.offsetParent
    }

    function Zr(e) {
        var t = /firefox/i.test(Fe()),
            r = /Trident/i.test(Fe());
        if (r && H(e)) {
            var n = z(e);
            if (n.position === "fixed") return null
        }
        var i = ge(e);
        for (He(i) && (i = i.host); H(i) && ["html", "body"].indexOf(F(i)) < 0;) {
            var f = z(i);
            if (f.transform !== "none" || f.perspective !== "none" || f.contain === "paint" || ["transform", "perspective"].indexOf(f.willChange) !== -1 || t && f.willChange === "filter" || t && f.filter && f.filter !== "none") return i;
            i = i.parentNode
        }
        return null
    }

    function ne(e) {
        for (var t = D(e), r = Zt(e); r && Mt(r) && z(r).position === "static";) r = Zt(r);
        return r && (F(r) === "html" || F(r) === "body" && z(r).position === "static") ? t : r || Zr(e) || t
    }

    function De(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }

    function Se(e, t, r) {
        return re(e, Pe(t, r))
    }

    function er(e, t, r) {
        var n = Se(e, t, r);
        return n > r ? r : n
    }

    function et() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    function tt(e) {
        return Object.assign({}, et(), e)
    }

    function rt(e, t) {
        return t.reduce(function(r, n) {
            return r[n] = e, r
        }, {})
    }
    var en = function(t, r) {
        return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
            placement: r.placement
        })) : t, tt(typeof t != "number" ? t : rt(t, be))
    };

    function tn(e) {
        var t, r = e.state,
            n = e.name,
            i = e.options,
            f = r.elements.arrow,
            p = r.modifiersData.popperOffsets,
            u = U(r.placement),
            s = De(u),
            l = [j, W].indexOf(u) >= 0,
            c = l ? "height" : "width";
        if (!(!f || !p)) {
            var b = en(i.padding, r),
                O = Ae(f),
                g = s === "y" ? N : j,
                w = s === "y" ? I : W,
                h = r.rects.reference[c] + r.rects.reference[s] - p[s] - r.rects.popper[c],
                y = p[s] - r.rects.reference[s],
                T = ne(f),
                P = T ? s === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0,
                S = h / 2 - y / 2,
                o = b[g],
                E = P - O[c] - b[w],
                m = P / 2 - O[c] / 2 + S,
                A = Se(o, m, E),
                V = s;
            r.modifiersData[n] = (t = {}, t[V] = A, t.centerOffset = A - m, t)
        }
    }

    function rn(e) {
        var t = e.state,
            r = e.options,
            n = r.element,
            i = n === void 0 ? "[data-popper-arrow]" : n;
        i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Ze(t.elements.popper, i) && (t.elements.arrow = i))
    }
    var tr = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: tn,
        effect: rn,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function ee(e) {
        return e.split("-")[1]
    }
    var nn = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function on(e, t) {
        var r = e.x,
            n = e.y,
            i = t.devicePixelRatio || 1;
        return {
            x: ve(r * i) / i || 0,
            y: ve(n * i) / i || 0
        }
    }

    function rr(e) {
        var t, r = e.popper,
            n = e.popperRect,
            i = e.placement,
            f = e.variation,
            p = e.offsets,
            u = e.position,
            s = e.gpuAcceleration,
            l = e.adaptive,
            c = e.roundOffsets,
            b = e.isFixed,
            O = p.x,
            g = O === void 0 ? 0 : O,
            w = p.y,
            h = w === void 0 ? 0 : w,
            y = typeof c == "function" ? c({
                x: g,
                y: h
            }) : {
                x: g,
                y: h
            };
        g = y.x, h = y.y;
        var T = p.hasOwnProperty("x"),
            P = p.hasOwnProperty("y"),
            S = j,
            o = N,
            E = window;
        if (l) {
            var m = ne(r),
                A = "clientHeight",
                V = "clientWidth";
            if (m === D(r) && (m = X(r), z(m).position !== "static" && u === "absolute" && (A = "scrollHeight", V = "scrollWidth")), m = m, i === N || (i === j || i === W) && f === Ce) {
                o = I;
                var B = b && m === E && E.visualViewport ? E.visualViewport.height : m[A];
                h -= B - n.height, h *= s ? 1 : -1
            }
            if (i === j || (i === N || i === I) && f === Ce) {
                S = W;
                var L = b && m === E && E.visualViewport ? E.visualViewport.width : m[V];
                g -= L - n.width, g *= s ? 1 : -1
            }
        }
        var k = Object.assign({
                position: u
            }, l && nn),
            R = c === !0 ? on({
                x: g,
                y: h
            }, D(r)) : {
                x: g,
                y: h
            };
        if (g = R.x, h = R.y, s) {
            var M;
            return Object.assign({}, k, (M = {}, M[o] = P ? "0" : "", M[S] = T ? "0" : "", M.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + h + "px)" : "translate3d(" + g + "px, " + h + "px, 0)", M))
        }
        return Object.assign({}, k, (t = {}, t[o] = P ? h + "px" : "", t[S] = T ? g + "px" : "", t.transform = "", t))
    }

    function an(e) {
        var t = e.state,
            r = e.options,
            n = r.gpuAcceleration,
            i = n === void 0 ? !0 : n,
            f = r.adaptive,
            p = f === void 0 ? !0 : f,
            u = r.roundOffsets,
            s = u === void 0 ? !0 : u,
            l = {
                placement: U(t.placement),
                variation: ee(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: t.options.strategy === "fixed"
            };
        t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, rr(Object.assign({}, l, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: p,
            roundOffsets: s
        })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, rr(Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement
        })
    }
    var nr = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: an,
        data: {}
    };
    var wt = {
        passive: !0
    };

    function sn(e) {
        var t = e.state,
            r = e.instance,
            n = e.options,
            i = n.scroll,
            f = i === void 0 ? !0 : i,
            p = n.resize,
            u = p === void 0 ? !0 : p,
            s = D(t.elements.popper),
            l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return f && l.forEach(function(c) {
                c.addEventListener("scroll", r.update, wt)
            }), u && s.addEventListener("resize", r.update, wt),
            function() {
                f && l.forEach(function(c) {
                    c.removeEventListener("scroll", r.update, wt)
                }), u && s.removeEventListener("resize", r.update, wt)
            }
    }
    var or = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: sn,
        data: {}
    };
    var fn = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function Ue(e) {
        return e.replace(/left|right|bottom|top/g, function(t) {
            return fn[t]
        })
    }
    var pn = {
        start: "end",
        end: "start"
    };

    function xt(e) {
        return e.replace(/start|end/g, function(t) {
            return pn[t]
        })
    }

    function Me(e) {
        var t = D(e),
            r = t.pageXOffset,
            n = t.pageYOffset;
        return {
            scrollLeft: r,
            scrollTop: n
        }
    }

    function Le(e) {
        return Z(X(e)).left + Me(e).scrollLeft
    }

    function Lt(e, t) {
        var r = D(e),
            n = X(e),
            i = r.visualViewport,
            f = n.clientWidth,
            p = n.clientHeight,
            u = 0,
            s = 0;
        if (i) {
            f = i.width, p = i.height;
            var l = Qe();
            (l || !l && t === "fixed") && (u = i.offsetLeft, s = i.offsetTop)
        }
        return {
            width: f,
            height: p,
            x: u + Le(e),
            y: s
        }
    }

    function Rt(e) {
        var t, r = X(e),
            n = Me(e),
            i = (t = e.ownerDocument) == null ? void 0 : t.body,
            f = re(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
            p = re(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
            u = -n.scrollLeft + Le(e),
            s = -n.scrollTop;
        return z(i || r).direction === "rtl" && (u += re(r.clientWidth, i ? i.clientWidth : 0) - f), {
            width: f,
            height: p,
            x: u,
            y: s
        }
    }

    function Re(e) {
        var t = z(e),
            r = t.overflow,
            n = t.overflowX,
            i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + n)
    }

    function Ot(e) {
        return ["html", "body", "#document"].indexOf(F(e)) >= 0 ? e.ownerDocument.body : H(e) && Re(e) ? e : Ot(ge(e))
    }

    function we(e, t) {
        var r;
        t === void 0 && (t = []);
        var n = Ot(e),
            i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
            f = D(n),
            p = i ? [f].concat(f.visualViewport || [], Re(n) ? n : []) : n,
            u = t.concat(p);
        return i ? u : u.concat(we(ge(p)))
    }

    function $e(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function un(e, t) {
        var r = Z(e, !1, t === "fixed");
        return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r
    }

    function ir(e, t, r) {
        return t === yt ? $e(Lt(e, r)) : Q(t) ? un(t, r) : $e(Rt(X(e)))
    }

    function cn(e) {
        var t = we(ge(e)),
            r = ["absolute", "fixed"].indexOf(z(e).position) >= 0,
            n = r && H(e) ? ne(e) : e;
        return Q(n) ? t.filter(function(i) {
            return Q(i) && Ze(i, n) && F(i) !== "body"
        }) : []
    }

    function Nt(e, t, r, n) {
        var i = t === "clippingParents" ? cn(e) : [].concat(t),
            f = [].concat(i, [r]),
            p = f[0],
            u = f.reduce(function(s, l) {
                var c = ir(e, l, n);
                return s.top = re(c.top, s.top), s.right = Pe(c.right, s.right), s.bottom = Pe(c.bottom, s.bottom), s.left = re(c.left, s.left), s
            }, ir(e, p, n));
        return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u
    }

    function nt(e) {
        var t = e.reference,
            r = e.element,
            n = e.placement,
            i = n ? U(n) : null,
            f = n ? ee(n) : null,
            p = t.x + t.width / 2 - r.width / 2,
            u = t.y + t.height / 2 - r.height / 2,
            s;
        switch (i) {
            case N:
                s = {
                    x: p,
                    y: t.y - r.height
                };
                break;
            case I:
                s = {
                    x: p,
                    y: t.y + t.height
                };
                break;
            case W:
                s = {
                    x: t.x + t.width,
                    y: u
                };
                break;
            case j:
                s = {
                    x: t.x - r.width,
                    y: u
                };
                break;
            default:
                s = {
                    x: t.x,
                    y: t.y
                }
        }
        var l = i ? De(i) : null;
        if (l != null) {
            var c = l === "y" ? "height" : "width";
            switch (f) {
                case me:
                    s[l] = s[l] - (t[c] / 2 - r[c] / 2);
                    break;
                case Ce:
                    s[l] = s[l] + (t[c] / 2 - r[c] / 2);
                    break;
                default:
            }
        }
        return s
    }

    function oe(e, t) {
        t === void 0 && (t = {});
        var r = t,
            n = r.placement,
            i = n === void 0 ? e.placement : n,
            f = r.strategy,
            p = f === void 0 ? e.strategy : f,
            u = r.boundary,
            s = u === void 0 ? Kt : u,
            l = r.rootBoundary,
            c = l === void 0 ? yt : l,
            b = r.elementContext,
            O = b === void 0 ? Ie : b,
            g = r.altBoundary,
            w = g === void 0 ? !1 : g,
            h = r.padding,
            y = h === void 0 ? 0 : h,
            T = tt(typeof y != "number" ? y : rt(y, be)),
            P = O === Ie ? Jt : Ie,
            S = e.rects.popper,
            o = e.elements[w ? P : O],
            E = Nt(Q(o) ? o : o.contextElement || X(e.elements.popper), s, c, p),
            m = Z(e.elements.reference),
            A = nt({
                reference: m,
                element: S,
                strategy: "absolute",
                placement: i
            }),
            V = $e(Object.assign({}, S, A)),
            B = O === Ie ? V : m,
            L = {
                top: E.top - B.top + T.top,
                bottom: B.bottom - E.bottom + T.bottom,
                left: E.left - B.left + T.left,
                right: B.right - E.right + T.right
            },
            k = e.modifiersData.offset;
        if (O === Ie && k) {
            var R = k[i];
            Object.keys(L).forEach(function(M) {
                var G = [W, I].indexOf(M) >= 0 ? 1 : -1,
                    K = [N, I].indexOf(M) >= 0 ? "y" : "x";
                L[M] += R[K] * G
            })
        }
        return L
    }

    function jt(e, t) {
        t === void 0 && (t = {});
        var r = t,
            n = r.placement,
            i = r.boundary,
            f = r.rootBoundary,
            p = r.padding,
            u = r.flipVariations,
            s = r.allowedAutoPlacements,
            l = s === void 0 ? bt : s,
            c = ee(n),
            b = c ? u ? St : St.filter(function(w) {
                return ee(w) === c
            }) : be,
            O = b.filter(function(w) {
                return l.indexOf(w) >= 0
            });
        O.length === 0 && (O = b);
        var g = O.reduce(function(w, h) {
            return w[h] = oe(e, {
                placement: h,
                boundary: i,
                rootBoundary: f,
                padding: p
            })[U(h)], w
        }, {});
        return Object.keys(g).sort(function(w, h) {
            return g[w] - g[h]
        })
    }

    function ln(e) {
        if (U(e) === ht) return [];
        var t = Ue(e);
        return [xt(e), t, xt(t)]
    }

    function dn(e) {
        var t = e.state,
            r = e.options,
            n = e.name;
        if (!t.modifiersData[n]._skip) {
            for (var i = r.mainAxis, f = i === void 0 ? !0 : i, p = r.altAxis, u = p === void 0 ? !0 : p, s = r.fallbackPlacements, l = r.padding, c = r.boundary, b = r.rootBoundary, O = r.altBoundary, g = r.flipVariations, w = g === void 0 ? !0 : g, h = r.allowedAutoPlacements, y = t.options.placement, T = U(y), P = T === y, S = s || (P || !w ? [Ue(y)] : ln(y)), o = [y].concat(S).reduce(function(ue, te) {
                    return ue.concat(U(te) === ht ? jt(t, {
                        placement: te,
                        boundary: c,
                        rootBoundary: b,
                        padding: l,
                        flipVariations: w,
                        allowedAutoPlacements: h
                    }) : te)
                }, []), E = t.rects.reference, m = t.rects.popper, A = new Map, V = !0, B = o[0], L = 0; L < o.length; L++) {
                var k = o[L],
                    R = U(k),
                    M = ee(k) === me,
                    G = [N, I].indexOf(R) >= 0,
                    K = G ? "width" : "height",
                    Y = oe(t, {
                        placement: k,
                        boundary: c,
                        rootBoundary: b,
                        altBoundary: O,
                        padding: l
                    }),
                    _ = G ? M ? W : j : M ? I : N;
                E[K] > m[K] && (_ = Ue(_));
                var $ = Ue(_),
                    ae = [];
                if (f && ae.push(Y[R] <= 0), u && ae.push(Y[_] <= 0, Y[$] <= 0), ae.every(function(ue) {
                        return ue
                    })) {
                    B = k, V = !1;
                    break
                }
                A.set(k, ae)
            }
            if (V)
                for (var se = w ? 3 : 1, xe = function(te) {
                        var ce = o.find(function(je) {
                            var le = A.get(je);
                            if (le) return le.slice(0, te).every(function(Be) {
                                return Be
                            })
                        });
                        if (ce) return B = ce, "break"
                    }, fe = se; fe > 0; fe--) {
                    var Oe = xe(fe);
                    if (Oe === "break") break
                }
            t.placement !== B && (t.modifiersData[n]._skip = !0, t.placement = B, t.reset = !0)
        }
    }
    var ar = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: dn,
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function sr(e, t, r) {
        return r === void 0 && (r = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x
        }
    }

    function fr(e) {
        return [N, W, I, j].some(function(t) {
            return e[t] >= 0
        })
    }

    function mn(e) {
        var t = e.state,
            r = e.name,
            n = t.rects.reference,
            i = t.rects.popper,
            f = t.modifiersData.preventOverflow,
            p = oe(t, {
                elementContext: "reference"
            }),
            u = oe(t, {
                altBoundary: !0
            }),
            s = sr(p, n),
            l = sr(u, i, f),
            c = fr(s),
            b = fr(l);
        t.modifiersData[r] = {
            referenceClippingOffsets: s,
            popperEscapeOffsets: l,
            isReferenceHidden: c,
            hasPopperEscaped: b
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": c,
            "data-popper-escaped": b
        })
    }
    var pr = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: mn
    };

    function vn(e, t, r) {
        var n = U(e),
            i = [j, N].indexOf(n) >= 0 ? -1 : 1,
            f = typeof r == "function" ? r(Object.assign({}, t, {
                placement: e
            })) : r,
            p = f[0],
            u = f[1];
        return p = p || 0, u = (u || 0) * i, [j, W].indexOf(n) >= 0 ? {
            x: u,
            y: p
        } : {
            x: p,
            y: u
        }
    }

    function gn(e) {
        var t = e.state,
            r = e.options,
            n = e.name,
            i = r.offset,
            f = i === void 0 ? [0, 0] : i,
            p = bt.reduce(function(c, b) {
                return c[b] = vn(b, t.rects, f), c
            }, {}),
            u = p[t.placement],
            s = u.x,
            l = u.y;
        t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += l), t.modifiersData[n] = p
    }
    var ur = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: gn
    };

    function hn(e) {
        var t = e.state,
            r = e.name;
        t.modifiersData[r] = nt({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
        })
    }
    var cr = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: hn,
        data: {}
    };

    function Bt(e) {
        return e === "x" ? "y" : "x"
    }

    function yn(e) {
        var t = e.state,
            r = e.options,
            n = e.name,
            i = r.mainAxis,
            f = i === void 0 ? !0 : i,
            p = r.altAxis,
            u = p === void 0 ? !1 : p,
            s = r.boundary,
            l = r.rootBoundary,
            c = r.altBoundary,
            b = r.padding,
            O = r.tether,
            g = O === void 0 ? !0 : O,
            w = r.tetherOffset,
            h = w === void 0 ? 0 : w,
            y = oe(t, {
                boundary: s,
                rootBoundary: l,
                padding: b,
                altBoundary: c
            }),
            T = U(t.placement),
            P = ee(t.placement),
            S = !P,
            o = De(T),
            E = Bt(o),
            m = t.modifiersData.popperOffsets,
            A = t.rects.reference,
            V = t.rects.popper,
            B = typeof h == "function" ? h(Object.assign({}, t.rects, {
                placement: t.placement
            })) : h,
            L = typeof B == "number" ? {
                mainAxis: B,
                altAxis: B
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, B),
            k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            R = {
                x: 0,
                y: 0
            };
        if (m) {
            if (f) {
                var M, G = o === "y" ? N : j,
                    K = o === "y" ? I : W,
                    Y = o === "y" ? "height" : "width",
                    _ = m[o],
                    $ = _ + y[G],
                    ae = _ - y[K],
                    se = g ? -V[Y] / 2 : 0,
                    xe = P === me ? A[Y] : V[Y],
                    fe = P === me ? -V[Y] : -A[Y],
                    Oe = t.elements.arrow,
                    ue = g && Oe ? Ae(Oe) : {
                        width: 0,
                        height: 0
                    },
                    te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : et(),
                    ce = te[G],
                    je = te[K],
                    le = Se(0, A[Y], ue[Y]),
                    Be = S ? A[Y] / 2 - se - le - ce - L.mainAxis : xe - le - ce - L.mainAxis,
                    he = S ? -A[Y] / 2 + se + le + je + L.mainAxis : fe + le + je + L.mainAxis,
                    We = t.elements.arrow && ne(t.elements.arrow),
                    at = We ? o === "y" ? We.clientTop || 0 : We.clientLeft || 0 : 0,
                    _e = (M = k ? .[o]) != null ? M : 0,
                    st = _ + Be - _e - at,
                    ft = _ + he - _e,
                    qe = Se(g ? Pe($, st) : $, _, g ? re(ae, ft) : ae);
                m[o] = qe, R[o] = qe - _
            }
            if (u) {
                var ze, pt = o === "x" ? N : j,
                    ut = o === "x" ? I : W,
                    de = m[E],
                    ye = E === "y" ? "height" : "width",
                    Ge = de + y[pt],
                    Ee = de - y[ut],
                    Ke = [N, j].indexOf(T) !== -1,
                    ct = (ze = k ? .[E]) != null ? ze : 0,
                    lt = Ke ? Ge : de - A[ye] - V[ye] - ct + L.altAxis,
                    dt = Ke ? de + A[ye] + V[ye] - ct - L.altAxis : Ee,
                    mt = g && Ke ? er(lt, de, dt) : Se(g ? lt : Ge, de, g ? dt : Ee);
                m[E] = mt, R[E] = mt - de
            }
            t.modifiersData[n] = R
        }
    }
    var lr = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: yn,
        requiresIfExists: ["offset"]
    };

    function Wt(e) {
        return {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        }
    }

    function Vt(e) {
        return e === D(e) || !H(e) ? Me(e) : Wt(e)
    }

    function bn(e) {
        var t = e.getBoundingClientRect(),
            r = ve(t.width) / e.offsetWidth || 1,
            n = ve(t.height) / e.offsetHeight || 1;
        return r !== 1 || n !== 1
    }

    function kt(e, t, r) {
        r === void 0 && (r = !1);
        var n = H(t),
            i = H(t) && bn(t),
            f = X(t),
            p = Z(e, i, r),
            u = {
                scrollLeft: 0,
                scrollTop: 0
            },
            s = {
                x: 0,
                y: 0
            };
        return (n || !n && !r) && ((F(t) !== "body" || Re(f)) && (u = Vt(t)), H(t) ? (s = Z(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : f && (s.x = Le(f))), {
            x: p.left + u.scrollLeft - s.x,
            y: p.top + u.scrollTop - s.y,
            width: p.width,
            height: p.height
        }
    }

    function wn(e) {
        var t = new Map,
            r = new Set,
            n = [];
        e.forEach(function(f) {
            t.set(f.name, f)
        });

        function i(f) {
            r.add(f.name);
            var p = [].concat(f.requires || [], f.requiresIfExists || []);
            p.forEach(function(u) {
                if (!r.has(u)) {
                    var s = t.get(u);
                    s && i(s)
                }
            }), n.push(f)
        }
        return e.forEach(function(f) {
            r.has(f.name) || i(f)
        }), n
    }

    function It(e) {
        var t = wn(e);
        return Qt.reduce(function(r, n) {
            return r.concat(t.filter(function(i) {
                return i.phase === n
            }))
        }, [])
    }

    function Ht(e) {
        var t;
        return function() {
            return t || (t = new Promise(function(r) {
                Promise.resolve().then(function() {
                    t = void 0, r(e())
                })
            })), t
        }
    }

    function Ft(e) {
        var t = e.reduce(function(r, n) {
            var i = r[n.name];
            return r[n.name] = i ? Object.assign({}, i, n, {
                options: Object.assign({}, i.options, n.options),
                data: Object.assign({}, i.data, n.data)
            }) : n, r
        }, {});
        return Object.keys(t).map(function(r) {
            return t[r]
        })
    }
    var dr = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function mr() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return !t.some(function(n) {
            return !(n && typeof n.getBoundingClientRect == "function")
        })
    }

    function vr(e) {
        e === void 0 && (e = {});
        var t = e,
            r = t.defaultModifiers,
            n = r === void 0 ? [] : r,
            i = t.defaultOptions,
            f = i === void 0 ? dr : i;
        return function(u, s, l) {
            l === void 0 && (l = f);
            var c = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, dr, f),
                    modifiersData: {},
                    elements: {
                        reference: u,
                        popper: s
                    },
                    attributes: {},
                    styles: {}
                },
                b = [],
                O = !1,
                g = {
                    state: c,
                    setOptions: function(T) {
                        var P = typeof T == "function" ? T(c.options) : T;
                        h(), c.options = Object.assign({}, f, c.options, P), c.scrollParents = {
                            reference: Q(u) ? we(u) : u.contextElement ? we(u.contextElement) : [],
                            popper: we(s)
                        };
                        var S = It(Ft([].concat(n, c.options.modifiers)));
                        return c.orderedModifiers = S.filter(function(o) {
                            return o.enabled
                        }), w(), g.update()
                    },
                    forceUpdate: function() {
                        if (!O) {
                            var T = c.elements,
                                P = T.reference,
                                S = T.popper;
                            if (mr(P, S)) {
                                c.rects = {
                                    reference: kt(P, ne(S), c.options.strategy === "fixed"),
                                    popper: Ae(S)
                                }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(L) {
                                    return c.modifiersData[L.name] = Object.assign({}, L.data)
                                });
                                for (var o = 0; o < c.orderedModifiers.length; o++) {
                                    if (c.reset === !0) {
                                        c.reset = !1, o = -1;
                                        continue
                                    }
                                    var E = c.orderedModifiers[o],
                                        m = E.fn,
                                        A = E.options,
                                        V = A === void 0 ? {} : A,
                                        B = E.name;
                                    typeof m == "function" && (c = m({
                                        state: c,
                                        options: V,
                                        name: B,
                                        instance: g
                                    }) || c)
                                }
                            }
                        }
                    },
                    update: Ht(function() {
                        return new Promise(function(y) {
                            g.forceUpdate(), y(c)
                        })
                    }),
                    destroy: function() {
                        h(), O = !0
                    }
                };
            if (!mr(u, s)) return g;
            g.setOptions(l).then(function(y) {
                !O && l.onFirstUpdate && l.onFirstUpdate(y)
            });

            function w() {
                c.orderedModifiers.forEach(function(y) {
                    var T = y.name,
                        P = y.options,
                        S = P === void 0 ? {} : P,
                        o = y.effect;
                    if (typeof o == "function") {
                        var E = o({
                                state: c,
                                name: T,
                                instance: g,
                                options: S
                            }),
                            m = function() {};
                        b.push(E || m)
                    }
                })
            }

            function h() {
                b.forEach(function(y) {
                    return y()
                }), b = []
            }
            return g
        }
    }
    var xn = [or, cr, nr, Je, ur, ar, lr, tr, pr],
        Ut = vr({
            defaultModifiers: xn
        });
    var Tr = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
        On = "tippy-box",
        Cr = "tippy-content",
        Pr = "tippy-backdrop",
        Ar = "tippy-arrow",
        Dr = "tippy-svg-arrow",
        Ne = {
            passive: !0,
            capture: !0
        },
        Sr = function() {
            return document.body
        };

    function $t(e, t, r) {
        if (Array.isArray(e)) {
            var n = e[t];
            return n ? ? (Array.isArray(r) ? r[t] : r)
        }
        return e
    }

    function zt(e, t) {
        var r = {}.toString.call(e);
        return r.indexOf("[object") === 0 && r.indexOf(t + "]") > -1
    }

    function Mr(e, t) {
        return typeof e == "function" ? e.apply(void 0, t) : e
    }

    function gr(e, t) {
        if (t === 0) return e;
        var r;
        return function(n) {
            clearTimeout(r), r = setTimeout(function() {
                e(n)
            }, t)
        }
    }

    function En(e) {
        return e.split(/\s+/).filter(Boolean)
    }

    function Xe(e) {
        return [].concat(e)
    }

    function hr(e, t) {
        e.indexOf(t) === -1 && e.push(t)
    }

    function Tn(e) {
        return e.filter(function(t, r) {
            return e.indexOf(t) === r
        })
    }

    function Cn(e) {
        return e.split("-")[0]
    }

    function Tt(e) {
        return [].slice.call(e)
    }

    function yr(e) {
        return Object.keys(e).reduce(function(t, r) {
            return e[r] !== void 0 && (t[r] = e[r]), t
        }, {})
    }

    function Ye() {
        return document.createElement("div")
    }

    function Pt(e) {
        return ["Element", "Fragment"].some(function(t) {
            return zt(e, t)
        })
    }

    function Pn(e) {
        return zt(e, "NodeList")
    }

    function An(e) {
        return zt(e, "MouseEvent")
    }

    function Dn(e) {
        return !!(e && e._tippy && e._tippy.reference === e)
    }

    function Sn(e) {
        return Pt(e) ? [e] : Pn(e) ? Tt(e) : Array.isArray(e) ? e : Tt(document.querySelectorAll(e))
    }

    function Xt(e, t) {
        e.forEach(function(r) {
            r && (r.style.transitionDuration = t + "ms")
        })
    }

    function ot(e, t) {
        e.forEach(function(r) {
            r && r.setAttribute("data-state", t)
        })
    }

    function Mn(e) {
        var t, r = Xe(e),
            n = r[0];
        return n != null && (t = n.ownerDocument) != null && t.body ? n.ownerDocument : document
    }

    function Ln(e, t) {
        var r = t.clientX,
            n = t.clientY;
        return e.every(function(i) {
            var f = i.popperRect,
                p = i.popperState,
                u = i.props,
                s = u.interactiveBorder,
                l = Cn(p.placement),
                c = p.modifiersData.offset;
            if (!c) return !0;
            var b = l === "bottom" ? c.top.y : 0,
                O = l === "top" ? c.bottom.y : 0,
                g = l === "right" ? c.left.x : 0,
                w = l === "left" ? c.right.x : 0,
                h = f.top - n + b > s,
                y = n - f.bottom - O > s,
                T = f.left - r + g > s,
                P = r - f.right - w > s;
            return h || y || T || P
        })
    }

    function Yt(e, t, r) {
        var n = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
            e[n](i, r)
        })
    }

    function br(e, t) {
        for (var r = t; r;) {
            var n;
            if (e.contains(r)) return !0;
            r = r.getRootNode == null || (n = r.getRootNode()) == null ? void 0 : n.host
        }
        return !1
    }
    var pe = {
            isTouch: !1
        },
        wr = 0;

    function Rn() {
        pe.isTouch || (pe.isTouch = !0, window.performance && document.addEventListener("mousemove", Lr))
    }

    function Lr() {
        var e = performance.now();
        e - wr < 20 && (pe.isTouch = !1, document.removeEventListener("mousemove", Lr)), wr = e
    }

    function Nn() {
        var e = document.activeElement;
        if (Dn(e)) {
            var t = e._tippy;
            e.blur && !t.state.isVisible && e.blur()
        }
    }

    function jn() {
        document.addEventListener("touchstart", Rn, Ne), window.addEventListener("blur", Nn)
    }
    var Bn = typeof window < "u" && typeof document < "u",
        Wn = Bn ? !!window.msCrypto : !1;
    var Vn = {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1
        },
        kn = {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999
        },
        ie = Object.assign({
            appendTo: Sr,
            aria: {
                content: "auto",
                expanded: "auto"
            },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function() {},
            onBeforeUpdate: function() {},
            onCreate: function() {},
            onDestroy: function() {},
            onHidden: function() {},
            onHide: function() {},
            onMount: function() {},
            onShow: function() {},
            onShown: function() {},
            onTrigger: function() {},
            onUntrigger: function() {},
            onClickOutside: function() {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null
        }, Vn, kn),
        In = Object.keys(ie),
        Hn = function(t) {
            var r = Object.keys(t);
            r.forEach(function(n) {
                ie[n] = t[n]
            })
        };

    function Rr(e) {
        var t = e.plugins || [],
            r = t.reduce(function(n, i) {
                var f = i.name,
                    p = i.defaultValue;
                if (f) {
                    var u;
                    n[f] = e[f] !== void 0 ? e[f] : (u = ie[f]) != null ? u : p
                }
                return n
            }, {});
        return Object.assign({}, e, r)
    }

    function Fn(e, t) {
        var r = t ? Object.keys(Rr(Object.assign({}, ie, {
                plugins: t
            }))) : In,
            n = r.reduce(function(i, f) {
                var p = (e.getAttribute("data-tippy-" + f) || "").trim();
                if (!p) return i;
                if (f === "content") i[f] = p;
                else try {
                    i[f] = JSON.parse(p)
                } catch {
                    i[f] = p
                }
                return i
            }, {});
        return n
    }

    function xr(e, t) {
        var r = Object.assign({}, t, {
            content: Mr(t.content, [e])
        }, t.ignoreAttributes ? {} : Fn(e, t.plugins));
        return r.aria = Object.assign({}, ie.aria, r.aria), r.aria = {
            expanded: r.aria.expanded === "auto" ? t.interactive : r.aria.expanded,
            content: r.aria.content === "auto" ? t.interactive ? null : "describedby" : r.aria.content
        }, r
    }
    var Un = function() {
        return "innerHTML"
    };

    function qt(e, t) {
        e[Un()] = t
    }

    function Or(e) {
        var t = Ye();
        return e === !0 ? t.className = Ar : (t.className = Dr, Pt(e) ? t.appendChild(e) : qt(t, e)), t
    }

    function Er(e, t) {
        Pt(t.content) ? (qt(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? qt(e, t.content) : e.textContent = t.content)
    }

    function Ct(e) {
        var t = e.firstElementChild,
            r = Tt(t.children);
        return {
            box: t,
            content: r.find(function(n) {
                return n.classList.contains(Cr)
            }),
            arrow: r.find(function(n) {
                return n.classList.contains(Ar) || n.classList.contains(Dr)
            }),
            backdrop: r.find(function(n) {
                return n.classList.contains(Pr)
            })
        }
    }

    function Nr(e) {
        var t = Ye(),
            r = Ye();
        r.className = On, r.setAttribute("data-state", "hidden"), r.setAttribute("tabindex", "-1");
        var n = Ye();
        n.className = Cr, n.setAttribute("data-state", "hidden"), Er(n, e.props), t.appendChild(r), r.appendChild(n), i(e.props, e.props);

        function i(f, p) {
            var u = Ct(t),
                s = u.box,
                l = u.content,
                c = u.arrow;
            p.theme ? s.setAttribute("data-theme", p.theme) : s.removeAttribute("data-theme"), typeof p.animation == "string" ? s.setAttribute("data-animation", p.animation) : s.removeAttribute("data-animation"), p.inertia ? s.setAttribute("data-inertia", "") : s.removeAttribute("data-inertia"), s.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? s.setAttribute("role", p.role) : s.removeAttribute("role"), (f.content !== p.content || f.allowHTML !== p.allowHTML) && Er(l, e.props), p.arrow ? c ? f.arrow !== p.arrow && (s.removeChild(c), s.appendChild(Or(p.arrow))) : s.appendChild(Or(p.arrow)) : c && s.removeChild(c)
        }
        return {
            popper: t,
            onUpdate: i
        }
    }
    Nr.$$tippy = !0;
    var $n = 1,
        Et = [],
        _t = [];

    function Xn(e, t) {
        var r = xr(e, Object.assign({}, ie, Rr(yr(t)))),
            n, i, f, p = !1,
            u = !1,
            s = !1,
            l = !1,
            c, b, O, g = [],
            w = gr(st, r.interactiveDebounce),
            h, y = $n++,
            T = null,
            P = Tn(r.plugins),
            S = {
                isEnabled: !0,
                isVisible: !1,
                isDestroyed: !1,
                isMounted: !1,
                isShown: !1
            },
            o = {
                id: y,
                reference: e,
                popper: Ye(),
                popperInstance: T,
                props: r,
                state: S,
                plugins: P,
                clearDelayTimeouts: lt,
                setProps: dt,
                setContent: mt,
                show: Wr,
                hide: Vr,
                hideWithInteractivity: kr,
                enable: Ke,
                disable: ct,
                unmount: Ir,
                destroy: Hr
            };
        if (!r.render) return o;
        var E = r.render(o),
            m = E.popper,
            A = E.onUpdate;
        m.setAttribute("data-tippy-root", ""), m.id = "tippy-" + o.id, o.popper = m, e._tippy = o, m._tippy = o;
        var V = P.map(function(a) {
                return a.fn(o)
            }),
            B = e.hasAttribute("aria-expanded");
        return We(), se(), _(), $("onCreate", [o]), r.showOnCreate && Ge(), m.addEventListener("mouseenter", function() {
            o.props.interactive && o.state.isVisible && o.clearDelayTimeouts()
        }), m.addEventListener("mouseleave", function() {
            o.props.interactive && o.props.trigger.indexOf("mouseenter") >= 0 && G().addEventListener("mousemove", w)
        }), o;

        function L() {
            var a = o.props.touch;
            return Array.isArray(a) ? a : [a, 0]
        }

        function k() {
            return L()[0] === "hold"
        }

        function R() {
            var a;
            return !!((a = o.props.render) != null && a.$$tippy)
        }

        function M() {
            return h || e
        }

        function G() {
            var a = M().parentNode;
            return a ? Mn(a) : document
        }

        function K() {
            return Ct(m)
        }

        function Y(a) {
            return o.state.isMounted && !o.state.isVisible || pe.isTouch || c && c.type === "focus" ? 0 : $t(o.props.delay, a ? 0 : 1, ie.delay)
        }

        function _(a) {
            a === void 0 && (a = !1), m.style.pointerEvents = o.props.interactive && !a ? "" : "none", m.style.zIndex = "" + o.props.zIndex
        }

        function $(a, d, v) {
            if (v === void 0 && (v = !0), V.forEach(function(x) {
                    x[a] && x[a].apply(x, d)
                }), v) {
                var C;
                (C = o.props)[a].apply(C, d)
            }
        }

        function ae() {
            var a = o.props.aria;
            if (a.content) {
                var d = "aria-" + a.content,
                    v = m.id,
                    C = Xe(o.props.triggerTarget || e);
                C.forEach(function(x) {
                    var q = x.getAttribute(d);
                    if (o.state.isVisible) x.setAttribute(d, q ? q + " " + v : v);
                    else {
                        var J = q && q.replace(v, "").trim();
                        J ? x.setAttribute(d, J) : x.removeAttribute(d)
                    }
                })
            }
        }

        function se() {
            if (!(B || !o.props.aria.expanded)) {
                var a = Xe(o.props.triggerTarget || e);
                a.forEach(function(d) {
                    o.props.interactive ? d.setAttribute("aria-expanded", o.state.isVisible && d === M() ? "true" : "false") : d.removeAttribute("aria-expanded")
                })
            }
        }

        function xe() {
            G().removeEventListener("mousemove", w), Et = Et.filter(function(a) {
                return a !== w
            })
        }

        function fe(a) {
            if (!(pe.isTouch && (s || a.type === "mousedown"))) {
                var d = a.composedPath && a.composedPath()[0] || a.target;
                if (!(o.props.interactive && br(m, d))) {
                    if (Xe(o.props.triggerTarget || e).some(function(v) {
                            return br(v, d)
                        })) {
                        if (pe.isTouch || o.state.isVisible && o.props.trigger.indexOf("click") >= 0) return
                    } else $("onClickOutside", [o, a]);
                    o.props.hideOnClick === !0 && (o.clearDelayTimeouts(), o.hide(), u = !0, setTimeout(function() {
                        u = !1
                    }), o.state.isMounted || ce())
                }
            }
        }

        function Oe() {
            s = !0
        }

        function ue() {
            s = !1
        }

        function te() {
            var a = G();
            a.addEventListener("mousedown", fe, !0), a.addEventListener("touchend", fe, Ne), a.addEventListener("touchstart", ue, Ne), a.addEventListener("touchmove", Oe, Ne)
        }

        function ce() {
            var a = G();
            a.removeEventListener("mousedown", fe, !0), a.removeEventListener("touchend", fe, Ne), a.removeEventListener("touchstart", ue, Ne), a.removeEventListener("touchmove", Oe, Ne)
        }

        function je(a, d) {
            Be(a, function() {
                !o.state.isVisible && m.parentNode && m.parentNode.contains(m) && d()
            })
        }

        function le(a, d) {
            Be(a, d)
        }

        function Be(a, d) {
            var v = K().box;

            function C(x) {
                x.target === v && (Yt(v, "remove", C), d())
            }
            if (a === 0) return d();
            Yt(v, "remove", b), Yt(v, "add", C), b = C
        }

        function he(a, d, v) {
            v === void 0 && (v = !1);
            var C = Xe(o.props.triggerTarget || e);
            C.forEach(function(x) {
                x.addEventListener(a, d, v), g.push({
                    node: x,
                    eventType: a,
                    handler: d,
                    options: v
                })
            })
        }

        function We() {
            k() && (he("touchstart", _e, {
                passive: !0
            }), he("touchend", ft, {
                passive: !0
            })), En(o.props.trigger).forEach(function(a) {
                if (a !== "manual") switch (he(a, _e), a) {
                    case "mouseenter":
                        he("mouseleave", ft);
                        break;
                    case "focus":
                        he(Wn ? "focusout" : "blur", qe);
                        break;
                    case "focusin":
                        he("focusout", qe);
                        break
                }
            })
        }

        function at() {
            g.forEach(function(a) {
                var d = a.node,
                    v = a.eventType,
                    C = a.handler,
                    x = a.options;
                d.removeEventListener(v, C, x)
            }), g = []
        }

        function _e(a) {
            var d, v = !1;
            if (!(!o.state.isEnabled || ze(a) || u)) {
                var C = ((d = c) == null ? void 0 : d.type) === "focus";
                c = a, h = a.currentTarget, se(), !o.state.isVisible && An(a) && Et.forEach(function(x) {
                    return x(a)
                }), a.type === "click" && (o.props.trigger.indexOf("mouseenter") < 0 || p) && o.props.hideOnClick !== !1 && o.state.isVisible ? v = !0 : Ge(a), a.type === "click" && (p = !v), v && !C && Ee(a)
            }
        }

        function st(a) {
            var d = a.target,
                v = M().contains(d) || m.contains(d);
            if (!(a.type === "mousemove" && v)) {
                var C = ye().concat(m).map(function(x) {
                    var q, J = x._tippy,
                        Ve = (q = J.popperInstance) == null ? void 0 : q.state;
                    return Ve ? {
                        popperRect: x.getBoundingClientRect(),
                        popperState: Ve,
                        props: r
                    } : null
                }).filter(Boolean);
                Ln(C, a) && (xe(), Ee(a))
            }
        }

        function ft(a) {
            var d = ze(a) || o.props.trigger.indexOf("click") >= 0 && p;
            if (!d) {
                if (o.props.interactive) {
                    o.hideWithInteractivity(a);
                    return
                }
                Ee(a)
            }
        }

        function qe(a) {
            o.props.trigger.indexOf("focusin") < 0 && a.target !== M() || o.props.interactive && a.relatedTarget && m.contains(a.relatedTarget) || Ee(a)
        }

        function ze(a) {
            return pe.isTouch ? k() !== a.type.indexOf("touch") >= 0 : !1
        }

        function pt() {
            ut();
            var a = o.props,
                d = a.popperOptions,
                v = a.placement,
                C = a.offset,
                x = a.getReferenceClientRect,
                q = a.moveTransition,
                J = R() ? Ct(m).arrow : null,
                Ve = x ? {
                    getBoundingClientRect: x,
                    contextElement: x.contextElement || M()
                } : e,
                Gt = {
                    name: "$$tippy",
                    enabled: !0,
                    phase: "beforeWrite",
                    requires: ["computeStyles"],
                    fn: function(vt) {
                        var ke = vt.state;
                        if (R()) {
                            var Fr = K(),
                                Dt = Fr.box;
                            ["placement", "reference-hidden", "escaped"].forEach(function(gt) {
                                gt === "placement" ? Dt.setAttribute("data-placement", ke.placement) : ke.attributes.popper["data-popper-" + gt] ? Dt.setAttribute("data-" + gt, "") : Dt.removeAttribute("data-" + gt)
                            }), ke.attributes.popper = {}
                        }
                    }
                },
                Te = [{
                    name: "offset",
                    options: {
                        offset: C
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 5,
                            right: 5
                        }
                    }
                }, {
                    name: "flip",
                    options: {
                        padding: 5
                    }
                }, {
                    name: "computeStyles",
                    options: {
                        adaptive: !q
                    }
                }, Gt];
            R() && J && Te.push({
                name: "arrow",
                options: {
                    element: J,
                    padding: 3
                }
            }), Te.push.apply(Te, d ? .modifiers || []), o.popperInstance = Ut(Ve, m, Object.assign({}, d, {
                placement: v,
                onFirstUpdate: O,
                modifiers: Te
            }))
        }

        function ut() {
            o.popperInstance && (o.popperInstance.destroy(), o.popperInstance = null)
        }

        function de() {
            var a = o.props.appendTo,
                d, v = M();
            o.props.interactive && a === Sr || a === "parent" ? d = v.parentNode : d = Mr(a, [v]), d.contains(m) || d.appendChild(m), o.state.isMounted = !0, pt()
        }

        function ye() {
            return Tt(m.querySelectorAll("[data-tippy-root]"))
        }

        function Ge(a) {
            o.clearDelayTimeouts(), a && $("onTrigger", [o, a]), te();
            var d = Y(!0),
                v = L(),
                C = v[0],
                x = v[1];
            pe.isTouch && C === "hold" && x && (d = x), d ? n = setTimeout(function() {
                o.show()
            }, d) : o.show()
        }

        function Ee(a) {
            if (o.clearDelayTimeouts(), $("onUntrigger", [o, a]), !o.state.isVisible) {
                ce();
                return
            }
            if (!(o.props.trigger.indexOf("mouseenter") >= 0 && o.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(a.type) >= 0 && p)) {
                var d = Y(!1);
                d ? i = setTimeout(function() {
                    o.state.isVisible && o.hide()
                }, d) : f = requestAnimationFrame(function() {
                    o.hide()
                })
            }
        }

        function Ke() {
            o.state.isEnabled = !0
        }

        function ct() {
            o.hide(), o.state.isEnabled = !1
        }

        function lt() {
            clearTimeout(n), clearTimeout(i), cancelAnimationFrame(f)
        }

        function dt(a) {
            if (!o.state.isDestroyed) {
                $("onBeforeUpdate", [o, a]), at();
                var d = o.props,
                    v = xr(e, Object.assign({}, d, yr(a), {
                        ignoreAttributes: !0
                    }));
                o.props = v, We(), d.interactiveDebounce !== v.interactiveDebounce && (xe(), w = gr(st, v.interactiveDebounce)), d.triggerTarget && !v.triggerTarget ? Xe(d.triggerTarget).forEach(function(C) {
                    C.removeAttribute("aria-expanded")
                }) : v.triggerTarget && e.removeAttribute("aria-expanded"), se(), _(), A && A(d, v), o.popperInstance && (pt(), ye().forEach(function(C) {
                    requestAnimationFrame(C._tippy.popperInstance.forceUpdate)
                })), $("onAfterUpdate", [o, a])
            }
        }

        function mt(a) {
            o.setProps({
                content: a
            })
        }

        function Wr() {
            var a = o.state.isVisible,
                d = o.state.isDestroyed,
                v = !o.state.isEnabled,
                C = pe.isTouch && !o.props.touch,
                x = $t(o.props.duration, 0, ie.duration);
            if (!(a || d || v || C) && !M().hasAttribute("disabled") && ($("onShow", [o], !1), o.props.onShow(o) !== !1)) {
                if (o.state.isVisible = !0, R() && (m.style.visibility = "visible"), _(), te(), o.state.isMounted || (m.style.transition = "none"), R()) {
                    var q = K(),
                        J = q.box,
                        Ve = q.content;
                    Xt([J, Ve], 0)
                }
                O = function() {
                    var Te;
                    if (!(!o.state.isVisible || l)) {
                        if (l = !0, m.offsetHeight, m.style.transition = o.props.moveTransition, R() && o.props.animation) {
                            var At = K(),
                                vt = At.box,
                                ke = At.content;
                            Xt([vt, ke], x), ot([vt, ke], "visible")
                        }
                        ae(), se(), hr(_t, o), (Te = o.popperInstance) == null || Te.forceUpdate(), $("onMount", [o]), o.props.animation && R() && le(x, function() {
                            o.state.isShown = !0, $("onShown", [o])
                        })
                    }
                }, de()
            }
        }

        function Vr() {
            var a = !o.state.isVisible,
                d = o.state.isDestroyed,
                v = !o.state.isEnabled,
                C = $t(o.props.duration, 1, ie.duration);
            if (!(a || d || v) && ($("onHide", [o], !1), o.props.onHide(o) !== !1)) {
                if (o.state.isVisible = !1, o.state.isShown = !1, l = !1, p = !1, R() && (m.style.visibility = "hidden"), xe(), ce(), _(!0), R()) {
                    var x = K(),
                        q = x.box,
                        J = x.content;
                    o.props.animation && (Xt([q, J], C), ot([q, J], "hidden"))
                }
                ae(), se(), o.props.animation ? R() && je(C, o.unmount) : o.unmount()
            }
        }

        function kr(a) {
            G().addEventListener("mousemove", w), hr(Et, w), w(a)
        }

        function Ir() {
            o.state.isVisible && o.hide(), o.state.isMounted && (ut(), ye().forEach(function(a) {
                a._tippy.unmount()
            }), m.parentNode && m.parentNode.removeChild(m), _t = _t.filter(function(a) {
                return a !== o
            }), o.state.isMounted = !1, $("onHidden", [o]))
        }

        function Hr() {
            o.state.isDestroyed || (o.clearDelayTimeouts(), o.unmount(), at(), delete e._tippy, o.state.isDestroyed = !0, $("onDestroy", [o]))
        }
    }

    function it(e, t) {
        t === void 0 && (t = {});
        var r = ie.plugins.concat(t.plugins || []);
        jn();
        var n = Object.assign({}, t, {
                plugins: r
            }),
            i = Sn(e);
        if (0) var f, p;
        var u = i.reduce(function(s, l) {
            var c = l && Xn(l, n);
            return c && s.push(c), s
        }, []);
        return Pt(e) ? u[0] : u
    }
    it.defaultProps = ie;
    it.setDefaultProps = Hn;
    it.currentInput = pe;
    var $s = Object.assign({}, Je, {
        effect: function(t) {
            var r = t.state,
                n = {
                    popper: {
                        position: r.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow)
        }
    });
    var jr = {
        name: "animateFill",
        defaultValue: !1,
        fn: function(t) {
            var r;
            if (!((r = t.props.render) != null && r.$$tippy)) return {};
            var n = Ct(t.popper),
                i = n.box,
                f = n.content,
                p = t.props.animateFill ? Yn() : null;
            return {
                onCreate: function() {
                    p && (i.insertBefore(p, i.firstElementChild), i.setAttribute("data-animatefill", ""), i.style.overflow = "hidden", t.setProps({
                        arrow: !1,
                        animation: "shift-away"
                    }))
                },
                onMount: function() {
                    if (p) {
                        var s = i.style.transitionDuration,
                            l = Number(s.replace("ms", ""));
                        f.style.transitionDelay = Math.round(l / 10) + "ms", p.style.transitionDuration = s, ot([p], "visible")
                    }
                },
                onShow: function() {
                    p && (p.style.transitionDuration = "0ms")
                },
                onHide: function() {
                    p && ot([p], "hidden")
                }
            }
        }
    };

    function Yn() {
        var e = Ye();
        return e.className = Pr, ot([e], "hidden"), e
    }
    it.setDefaultProps({
        render: Nr
    });
    var Br = it;
    window.tippy = Br;
    window.roundArrow = Tr;
    window.animateFillPlugin = jr;
})();