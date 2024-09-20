(() => {
    var Ei = window,
        Oe = Ei.requestAnimationFrame || Ei.webkitRequestAnimationFrame || Ei.mozRequestAnimationFrame || Ei.msRequestAnimationFrame || function(t) {
            return setTimeout(t, 16)
        };
    var wn = window,
        Mi = wn.cancelAnimationFrame || wn.mozCancelAnimationFrame || function(t) {
            clearTimeout(t)
        };

    function Ai() {
        for (var t, f, a, u = arguments[0] || {}, o = 1, y = arguments.length; o < y; o++)
            if ((t = arguments[o]) !== null)
                for (f in t) a = t[f], u !== a && a !== void 0 && (u[f] = a);
        return u
    }

    function ve(t) {
        return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
    }

    function pe(t, f, a, u) {
        if (u) try {
            t.setItem(f, a)
        } catch {}
        return a
    }

    function bn() {
        var t = window.tnsId;
        return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId
    }

    function Ie() {
        var t = document,
            f = t.body;
        return f || (f = t.createElement("body"), f.fake = !0), f
    }
    var lt = document.documentElement;

    function Ue(t) {
        var f = "";
        return t.fake && (f = lt.style.overflow, t.style.background = "", t.style.overflow = lt.style.overflow = "hidden", lt.appendChild(t)), f
    }

    function Ge(t, f) {
        t.fake && (t.remove(), lt.style.overflow = f, lt.offsetHeight)
    }

    function Tn() {
        var t = document,
            f = Ie(),
            a = Ue(f),
            u = t.createElement("div"),
            o = !1;
        f.appendChild(u);
        try {
            for (var y = "(10px * 10)", q = ["calc" + y, "-moz-calc" + y, "-webkit-calc" + y], P, H = 0; H < 3; H++)
                if (P = q[H], u.style.width = P, u.offsetWidth === 100) {
                    o = P.replace(y, "");
                    break
                }
        } catch {}
        return f.fake ? Ge(f, a) : u.remove(), o
    }

    function xn() {
        var t = document,
            f = Ie(),
            a = Ue(f),
            u = t.createElement("div"),
            o = t.createElement("div"),
            y = "",
            q = 70,
            P = 3,
            H = !1;
        u.className = "tns-t-subp2", o.className = "tns-t-ct";
        for (var ge = 0; ge < q; ge++) y += "<div></div>";
        return o.innerHTML = y, u.appendChild(o), f.appendChild(u), H = Math.abs(u.getBoundingClientRect().left - o.children[q - P].getBoundingClientRect().left) < 2, f.fake ? Ge(f, a) : u.remove(), H
    }

    function En() {
        if (window.matchMedia || window.msMatchMedia) return !0;
        var t = document,
            f = Ie(),
            a = Ue(f),
            u = t.createElement("div"),
            o = t.createElement("style"),
            y = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}",
            q;
        return o.type = "text/css", u.className = "tns-mq-test", f.appendChild(o), f.appendChild(u), o.styleSheet ? o.styleSheet.cssText = y : o.appendChild(t.createTextNode(y)), q = window.getComputedStyle ? window.getComputedStyle(u).position : u.currentStyle.position, f.fake ? Ge(f, a) : u.remove(), q === "absolute"
    }

    function Mn(t, f) {
        var a = document.createElement("style");
        return t && a.setAttribute("media", t), f && a.setAttribute("nonce", f), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet
    }

    function Ce(t, f, a, u) {
        "insertRule" in t ? t.insertRule(f + "{" + a + "}", u) : t.addRule(f, a, u)
    }

    function An(t, f) {
        "deleteRule" in t ? t.deleteRule(f) : t.removeRule(f)
    }

    function we(t) {
        var f = "insertRule" in t ? t.cssRules : t.rules;
        return f.length
    }

    function Sn(t, f) {
        return Math.atan2(t, f) * (180 / Math.PI)
    }

    function Ln(t, f) {
        var a = !1,
            u = Math.abs(90 - Math.abs(t));
        return u >= 90 - f ? a = "horizontal" : u <= f && (a = "vertical"), a
    }

    function Re(t, f, a) {
        for (var u = 0, o = t.length; u < o; u++) f.call(a, t[u], u)
    }
    var wt = "classList" in document.createElement("_");
    var ke = wt ? function(t, f) {
        return t.classList.contains(f)
    } : function(t, f) {
        return t.className.indexOf(f) >= 0
    };
    var k = wt ? function(t, f) {
        ke(t, f) || t.classList.add(f)
    } : function(t, f) {
        ke(t, f) || (t.className += " " + f)
    };
    var ee = wt ? function(t, f) {
        ke(t, f) && t.classList.remove(f)
    } : function(t, f) {
        ke(t, f) && (t.className = t.className.replace(f, ""))
    };

    function bt(t, f) {
        return t.hasAttribute(f)
    }

    function Zt(t, f) {
        return t.getAttribute(f)
    }

    function Si(t) {
        return typeof t.item < "u"
    }

    function fe(t, f) {
        if (t = Si(t) || t instanceof Array ? t : [t], Object.prototype.toString.call(f) === "[object Object]")
            for (var a = t.length; a--;)
                for (var u in f) t[a].setAttribute(u, f[u])
    }

    function He(t, f) {
        t = Si(t) || t instanceof Array ? t : [t], f = f instanceof Array ? f : [f];
        for (var a = f.length, u = t.length; u--;)
            for (var o = a; o--;) t[u].removeAttribute(f[o])
    }

    function cr(t) {
        for (var f = [], a = 0, u = t.length; a < u; a++) f.push(t[a]);
        return f
    }

    function ae(t, f) {
        t.style.display !== "none" && (t.style.display = "none")
    }

    function oe(t, f) {
        t.style.display === "none" && (t.style.display = "")
    }

    function dr(t) {
        return window.getComputedStyle(t).display !== "none"
    }

    function Tt(t) {
        if (typeof t == "string") {
            var f = [t],
                a = t.charAt(0).toUpperCase() + t.substr(1),
                u = ["Webkit", "Moz", "ms", "O"];
            u.forEach(function(H) {
                (H !== "ms" || t === "transform") && f.push(H + a)
            }), t = f
        }
        for (var o = document.createElement("fakeelement"), y = t.length, q = 0; q < t.length; q++) {
            var P = t[q];
            if (o.style[P] !== void 0) return P
        }
        return !1
    }

    function Cn(t) {
        if (!t || !window.getComputedStyle) return !1;
        var f = document,
            a = Ie(),
            u = Ue(a),
            o = f.createElement("p"),
            y, q = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
        return q += "transform", a.insertBefore(o, null), o.style[t] = "translate3d(1px,1px,1px)", y = window.getComputedStyle(o).getPropertyValue(q), a.fake ? Ge(a, u) : o.remove(), y !== void 0 && y.length > 0 && y !== "none"
    }

    function hr(t, f) {
        var a = !1;
        return /^Webkit/.test(t) ? a = "webkit" + f + "End" : /^O/.test(t) ? a = "o" + f + "End" : t && (a = f.toLowerCase() + "end"), a
    }
    var Dn = !1;
    try {
        Nn = Object.defineProperty({}, "passive", {
            get: function() {
                Dn = !0
            }
        }), window.addEventListener("test", null, Nn)
    } catch {}
    var Nn, Li = Dn ? {
        passive: !0
    } : !1;

    function R(t, f, a) {
        for (var u in f) {
            var o = ["touchstart", "touchmove"].indexOf(u) >= 0 && !a ? Li : !1;
            t.addEventListener(u, f[u], o)
        }
    }

    function Q(t, f) {
        for (var a in f) {
            var u = ["touchstart", "touchmove"].indexOf(a) >= 0 ? Li : !1;
            t.removeEventListener(a, f[a], u)
        }
    }

    function On() {
        return {
            topics: {},
            on: function(t, f) {
                this.topics[t] = this.topics[t] || [], this.topics[t].push(f)
            },
            off: function(t, f) {
                if (this.topics[t]) {
                    for (var a = 0; a < this.topics[t].length; a++)
                        if (this.topics[t][a] === f) {
                            this.topics[t].splice(a, 1);
                            break
                        }
                }
            },
            emit: function(t, f) {
                f.type = t, this.topics[t] && this.topics[t].forEach(function(a) {
                    a(f, t)
                })
            }
        }
    }

    function Rn(t, f, a, u, ge, y, q) {
        var P = Math.min(y, 10),
            H = ge.indexOf("%") >= 0 ? "%" : "px",
            ge = ge.replace(H, ""),
            be = Number(t.style[f].replace(a, "").replace(u, "").replace(H, "")),
            Je = (ge - be) / y * P,
            vr;
        setTimeout(V, P);

        function V() {
            y -= P, be += Je, t.style[f] = a + be + H + u, y > 0 ? setTimeout(V, P) : q()
        }
    }
    Object.keys || (Object.keys = function(t) {
        var f = [];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && f.push(a);
        return f
    });
    "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    });
    var mr = function(t) {
        t = Ai({
            container: ".slider",
            mode: "carousel",
            axis: "horizontal",
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            autoWidth: !1,
            viewportMax: !1,
            slideBy: 1,
            center: !1,
            controls: !0,
            controlsPosition: "top",
            controlsText: ["prev", "next"],
            controlsContainer: !1,
            prevButton: !1,
            nextButton: !1,
            nav: !0,
            navPosition: "top",
            navContainer: !1,
            navAsThumbnails: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayPosition: "top",
            autoplayTimeout: 5e3,
            autoplayDirection: "forward",
            autoplayText: ["start", "stop"],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            autoplayButtonOutput: !0,
            autoplayResetOnVisibility: !0,
            animateIn: "tns-fadeIn",
            animateOut: "tns-fadeOut",
            animateNormal: "tns-normal",
            animateDelay: !1,
            loop: !0,
            rewind: !1,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            lazyloadSelector: ".tns-lazy-img",
            touch: !0,
            mouseDrag: !1,
            swipeAngle: 15,
            nested: !1,
            preventActionWhenRunning: !1,
            preventScrollOnTouch: !1,
            freezable: !0,
            onInit: !1,
            useLocalStorage: !0,
            nonce: !1
        }, t || {});
        var f = document,
            a = window,
            u = {
                ENTER: 13,
                SPACE: 32,
                LEFT: 37,
                RIGHT: 39
            },
            o = {},
            y = t.useLocalStorage;
        if (y) {
            var q = navigator.userAgent,
                P = new Date;
            try {
                o = a.localStorage, o ? (o.setItem(P, P), y = o.getItem(P) == P, o.removeItem(P)) : y = !1, y || (o = {})
            } catch {
                y = !1
            }
            y && (o.tnsApp && o.tnsApp !== q && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
                o.removeItem(e)
            }), localStorage.tnsApp = q)
        }
        var H = o.tC ? ve(o.tC) : pe(o, "tC", Tn(), y),
            ge = o.tPL ? ve(o.tPL) : pe(o, "tPL", xn(), y),
            be = o.tMQ ? ve(o.tMQ) : pe(o, "tMQ", En(), y),
            Je = o.tTf ? ve(o.tTf) : pe(o, "tTf", Tt("transform"), y),
            vr = o.t3D ? ve(o.t3D) : pe(o, "t3D", Cn(Je), y),
            V = o.tTDu ? ve(o.tTDu) : pe(o, "tTDu", Tt("transitionDuration"), y),
            _t = o.tTDe ? ve(o.tTDe) : pe(o, "tTDe", Tt("transitionDelay"), y),
            jt = o.tADu ? ve(o.tADu) : pe(o, "tADu", Tt("animationDuration"), y),
            Ci = o.tADe ? ve(o.tADe) : pe(o, "tADe", Tt("animationDelay"), y),
            $e = o.tTE ? ve(o.tTE) : pe(o, "tTE", hr(V, "Transition"), y),
            pr = o.tAE ? ve(o.tAE) : pe(o, "tAE", hr(jt, "Animation"), y),
            gr = a.console && typeof a.console.warn == "function",
            Ni = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
            yr = {};
        if (Ni.forEach(function(e) {
                if (typeof t[e] == "string") {
                    var i = t[e],
                        r = f.querySelector(i);
                    if (yr[e] = i, r && r.nodeName) t[e] = r;
                    else {
                        gr && console.warn("Can't find", t[e]);
                        return
                    }
                }
            }), t.container.children.length < 1) {
            gr && console.warn("No slides found in", t.container);
            return
        }
        var C = t.responsive,
            st = t.nested,
            c = t.mode === "carousel";
        if (C) {
            0 in C && (t = Ai(t, C[0]), delete C[0]);
            var Di = {};
            for (var wr in C) {
                var xt = C[wr];
                xt = typeof xt == "number" ? {
                    items: xt
                } : xt, Di[wr] = xt
            }
            C = Di, Di = null
        }

        function br(e) {
            for (var i in e) c || (i === "slideBy" && (e[i] = "page"), i === "edgePadding" && (e[i] = !1), i === "autoHeight" && (e[i] = !1)), i === "responsive" && br(e[i])
        }
        if (c || br(t), !c) {
            t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
            var ze = t.animateIn,
                It = t.animateOut,
                Oi = t.animateDelay,
                Te = t.animateNormal
        }
        var M = t.axis === "horizontal",
            $ = f.createElement("div"),
            B = f.createElement("div"),
            te, m = t.container,
            Ri = m.parentNode,
            Tr = m.outerHTML,
            x = m.children,
            v = x.length,
            Et, Ut = kr(),
            Mt = !1;
        C && Zr(), c && (m.className += " tns-vpfix");
        var g = t.autoWidth,
            d = p("fixedWidth"),
            D = p("edgePadding"),
            T = p("gutter"),
            K = zr(),
            _ = p("center"),
            w = g ? 1 : Math.floor(p("items")),
            ut = p("slideBy"),
            ki = t.viewportMax || t.fixedWidthViewportWidth,
            We = p("arrowKeys"),
            ce = p("speed"),
            At = t.rewind,
            j = At ? !1 : t.loop,
            ie = p("autoHeight"),
            xe = p("controls"),
            Fe = p("controlsText"),
            Ee = p("nav"),
            qe = p("touch"),
            Pe = p("mouseDrag"),
            G = p("autoplay"),
            Hi = p("autoplayTimeout"),
            Ve = p("autoplayText"),
            Ke = p("autoplayHoverPause"),
            Ye = p("autoplayResetOnVisibility"),
            A = Mn(null, p("nonce")),
            St = t.lazyload,
            kn = t.lazyloadSelector,
            z, ct = [],
            X = j ? Vn() : 0,
            E = c ? v + X * 2 : v + X,
            xr = !!((d || g) && !j),
            dt = d ? Bi() : null,
            zi = !c || !j,
            Be = M ? "left" : "top",
            Qe = "",
            ht = "",
            Lt = function() {
                return d ? function() {
                    return _ && !j ? v - 1 : Math.ceil(-dt / (d + T))
                } : g ? function() {
                    for (var e = 0; e < E; e++)
                        if (z[e] >= -dt) return e
                } : function() {
                    return _ && c && !j ? v - 1 : j || c ? Math.max(0, E - Math.ceil(w)) : E - 1
                }
            }(),
            l = Or(p("startIndex")),
            Xe = l,
            yf = Dr(),
            Me = 0,
            le = g ? null : Lt(),
            Hn, Gt = t.preventActionWhenRunning,
            Jt = t.swipeAngle,
            Ae = Jt ? "?" : !0,
            Ze = !1,
            Wi = t.onInit,
            Y = new On,
            _e = " tns-slider tns-" + t.mode,
            N = m.id || bn(),
            re = p("disable"),
            Ct = !1,
            $t = t.freezable,
            de = $t && !g ? _i() : !1,
            Nt = !1,
            Dt = {
                click: je,
                keydown: sf
            },
            Fi = {
                click: tf,
                keydown: uf
            },
            Ot = {
                mouseover: af,
                mouseout: of
            },
            Rt = {
                visibilitychange: ff
            },
            kt = {
                keydown: lf
            },
            Ht = {
                touchstart: mn,
                touchmove: vn,
                touchend: xi,
                touchcancel: xi
            },
            zt = {
                mousedown: mn,
                mousemove: vn,
                mouseup: xi,
                mouseleave: xi
            },
            Bt = Ne("controls"),
            qi = Ne("nav"),
            Wt = g ? !0 : t.navAsThumbnails,
            Pi = Ne("autoplay"),
            Er = Ne("touch"),
            Mr = Ne("mouseDrag"),
            Vi = "tns-slide-active",
            Ar = "tns-slide-cloned",
            ei = "tns-complete",
            ti = {
                load: jn,
                error: In
            },
            Ki, Yi, Ft = t.preventScrollOnTouch === "force";
        if (Bt) var W = t.controlsContainer,
            Sr = t.controlsContainer ? t.controlsContainer.outerHTML : "",
            S = t.prevButton,
            L = t.nextButton,
            zn = t.prevButton ? t.prevButton.outerHTML : "",
            Wn = t.nextButton ? t.nextButton.outerHTML : "",
            qt, Pt;
        if (qi) var I = t.navContainer,
            Lr = t.navContainer ? t.navContainer.outerHTML : "",
            se, he = g ? v : gn(),
            et = 0,
            tt = -1,
            ue = Rr(),
            mt = ue,
            ii = "tns-nav-active",
            vt = "Carousel Page ",
            Qi = " (Current Slide)";
        if (Pi) var Cr = t.autoplayDirection === "forward" ? 1 : -1,
            O = t.autoplayButton,
            Nr = t.autoplayButton ? t.autoplayButton.outerHTML : "",
            Vt = ["<span class='tns-visually-hidden'>", " animation</span>"],
            ri, ne, ni, pt, fi;
        if (Er || Mr) var it = {},
            ye = {},
            ai, Fn, qn, rt = !1,
            me, Xi = M ? function(e, i) {
                return e.x - i.x
            } : function(e, i) {
                return e.y - i.y
            };
        g || oi(re || de), Je && (Be = Je, Qe = "translate", vr ? (Qe += M ? "3d(" : "3d(0px, ", ht = M ? ", 0px, 0px)" : ", 0px)") : (Qe += M ? "X(" : "Y(", ht = ")")), c && (m.className = m.className.replace("tns-vpfix", "")), Yn(), Qn(), qr();

        function oi(e) {
            e && (xe = Ee = qe = Pe = We = G = Ke = Ye = !1)
        }

        function Dr() {
            for (var e = c ? l - X : l; e < 0;) e += v;
            return e % v + 1
        }

        function Or(e) {
            return e = e ? Math.max(0, Math.min(j ? v - 1 : v - w, e)) : 0, c ? e + X : e
        }

        function li(e) {
            for (e == null && (e = l), c && (e -= X); e < 0;) e += v;
            return Math.floor(e % v)
        }

        function Rr() {
            var e = li(),
                i;
            return i = Wt ? e : d || g ? Math.ceil((e + 1) * he / v - 1) : Math.floor(e / w), !j && c && l === le && (i = he - 1), i
        }

        function Pn() {
            if (g || d && !ki) return v - 1;
            var e = d ? "fixedWidth" : "items",
                i = [];
            if ((d || t[e] < v) && i.push(t[e]), C)
                for (var r in C) {
                    var n = C[r][e];
                    n && (d || n < v) && i.push(n)
                }
            return i.length || i.push(0), Math.ceil(d ? ki / Math.min.apply(null, i) : Math.max.apply(null, i))
        }

        function Vn() {
            var e = Pn(),
                i = c ? Math.ceil((e * 5 - v) / 2) : e * 4 - v;
            return i = Math.max(e, i), Ne("edgePadding") ? i + 1 : i
        }

        function kr() {
            return a.innerWidth || f.documentElement.clientWidth || f.body.clientWidth
        }

        function Zi(e) {
            return e === "top" ? "afterbegin" : "beforeend"
        }

        function Hr(e) {
            if (e != null) {
                var i = f.createElement("div"),
                    r, n;
                return e.appendChild(i), r = i.getBoundingClientRect(), n = r.right - r.left, i.remove(), n || Hr(e.parentNode)
            }
        }

        function zr() {
            var e = D ? D * 2 - T : 0;
            return Hr(Ri) - e
        }

        function Ne(e) {
            if (t[e]) return !0;
            if (C) {
                for (var i in C)
                    if (C[i][e]) return !0
            }
            return !1
        }

        function p(e, i) {
            if (i == null && (i = Ut), e === "items" && d) return Math.floor((K + T) / (d + T)) || 1;
            var r = t[e];
            if (C)
                for (var n in C) i >= parseInt(n) && e in C[n] && (r = C[n][e]);
            return e === "slideBy" && r === "page" && (r = p("items")), !c && (e === "slideBy" || e === "items") && (r = Math.floor(r)), r
        }

        function Kn(e) {
            return H ? H + "(" + e * 100 + "% / " + E + ")" : e * 100 / E + "%"
        }

        function si(e, i, r, n, s) {
            var h = "";
            if (e !== void 0) {
                var b = e;
                i && (b -= i), h = M ? "margin: 0 " + b + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + b + "px 0;"
            } else if (i && !r) {
                var U = "-" + i + "px",
                    F = M ? U + " 0 0" : "0 " + U + " 0";
                h = "margin: 0 " + F + ";"
            }
            return !c && s && V && n && (h += nt(n)), h
        }

        function ui(e, i, r) {
            return e ? (e + i) * E + "px" : H ? H + "(" + E * 100 + "% / " + r + ")" : E * 100 / r + "%"
        }

        function ci(e, i, r) {
            var n;
            if (e) n = e + i + "px";
            else {
                c || (r = Math.floor(r));
                var s = c ? E : r;
                n = H ? H + "(100% / " + s + ")" : 100 / s + "%"
            }
            return n = "width:" + n, st !== "inner" ? n + ";" : n + " !important;"
        }

        function di(e) {
            var i = "";
            if (e !== !1) {
                var r = M ? "padding-" : "margin-",
                    n = M ? "right" : "bottom";
                i = r + n + ": " + e + "px;"
            }
            return i
        }

        function Wr(e, i) {
            var r = e.substring(0, e.length - i).toLowerCase();
            return r && (r = "-" + r + "-"), r
        }

        function nt(e) {
            return Wr(V, 18) + "transition-duration:" + e / 1e3 + "s;"
        }

        function Fr(e) {
            return Wr(jt, 17) + "animation-duration:" + e / 1e3 + "s;"
        }

        function Yn() {
            var e = "tns-outer",
                i = "tns-inner",
                r = Ne("gutter");
            if ($.className = e, B.className = i, $.id = N + "-ow", B.id = N + "-iw", m.id === "" && (m.id = N), _e += ge || g ? " tns-subpixel" : " tns-no-subpixel", _e += H ? " tns-calc" : " tns-no-calc", g && (_e += " tns-autowidth"), _e += " tns-" + t.axis, m.className += _e, c ? (te = f.createElement("div"), te.id = N + "-mw", te.className = "tns-ovh", $.appendChild(te), te.appendChild(B)) : $.appendChild(B), ie) {
                var n = te || B;
                n.className += " tns-ah"
            }
            if (Ri.insertBefore($, m), B.appendChild(m), Re(x, function(Le, at) {
                    k(Le, "tns-item"), Le.id || (Le.id = N + "-item" + at), !c && Te && k(Le, Te), fe(Le, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    })
                }), X) {
                for (var s = f.createDocumentFragment(), h = f.createDocumentFragment(), b = X; b--;) {
                    var U = b % v,
                        F = x[U].cloneNode(!0);
                    if (k(F, Ar), He(F, "id"), h.insertBefore(F, h.firstChild), c) {
                        var Z = x[v - 1 - U].cloneNode(!0);
                        k(Z, Ar), He(Z, "id"), s.appendChild(Z)
                    }
                }
                m.insertBefore(s, m.firstChild), m.appendChild(h), x = m.children
            }
        }

        function qr() {
            if (Ne("autoHeight") || g || !M) {
                var e = m.querySelectorAll("img");
                Re(e, function(i) {
                    var r = i.src;
                    St || (r && r.indexOf("data:image") < 0 ? (i.src = "", R(i, ti), k(i, "loading"), i.src = r) : Jr(i))
                }), Oe(function() {
                    vi(cr(e), function() {
                        Ki = !0
                    })
                }), Ne("autoHeight") && (e = Ji(l, Math.min(l + w - 1, E - 1))), St ? Pr() : Oe(function() {
                    vi(cr(e), Pr)
                })
            } else c && Yt(), Kr(), Yr()
        }

        function Pr() {
            if (g && v > 1) {
                var e = j ? l : v - 1;
                (function i() {
                    var r = x[e].getBoundingClientRect().left,
                        n = x[e - 1].getBoundingClientRect().right;
                    Math.abs(r - n) <= 1 ? Vr() : setTimeout(function() {
                        i()
                    }, 16)
                })()
            } else Vr()
        }

        function Vr() {
            (!M || g) && (tn(), g ? (dt = Bi(), $t && (de = _i()), le = Lt(), oi(re || de)) : ir()), c && Yt(), Kr(), Yr()
        }

        function Qn() {
            if (!c)
                for (var e = l, i = l + Math.min(v, w); e < i; e++) {
                    var r = x[e];
                    r.style.left = (e - l) * 100 / w + "%", k(r, ze), ee(r, Te)
                }
            if (M && (ge || g ? (Ce(A, "#" + N + " > .tns-item", "font-size:" + a.getComputedStyle(x[0]).fontSize + ";", we(A)), Ce(A, "#" + N, "font-size:0;", we(A))) : c && Re(x, function(ar, or) {
                    ar.style.marginLeft = Kn(or)
                })), be) {
                if (V) {
                    var n = te && t.autoHeight ? nt(t.speed) : "";
                    Ce(A, "#" + N + "-mw", n, we(A))
                }
                n = si(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), Ce(A, "#" + N + "-iw", n, we(A)), c && (n = M && !g ? "width:" + ui(t.fixedWidth, t.gutter, t.items) + ";" : "", V && (n += nt(ce)), Ce(A, "#" + N, n, we(A))), n = M && !g ? ci(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (n += di(t.gutter)), c || (V && (n += nt(ce)), jt && (n += Fr(ce))), n && Ce(A, "#" + N + " > .tns-item", n, we(A))
            } else {
                Gn(), B.style.cssText = si(D, T, d, ie), c && M && !g && (m.style.width = ui(d, T, w));
                var n = M && !g ? ci(d, T, w) : "";
                T && (n += di(T)), n && Ce(A, "#" + N + " > .tns-item", n, we(A))
            }
            if (C && be)
                for (var s in C) {
                    s = parseInt(s);
                    var h = C[s],
                        n = "",
                        b = "",
                        U = "",
                        F = "",
                        Z = "",
                        Le = g ? null : p("items", s),
                        at = p("fixedWidth", s),
                        ot = p("speed", s),
                        nr = p("edgePadding", s),
                        fr = p("autoHeight", s),
                        yt = p("gutter", s);
                    V && te && p("autoHeight", s) && "speed" in h && (b = "#" + N + "-mw{" + nt(ot) + "}"), ("edgePadding" in h || "gutter" in h) && (U = "#" + N + "-iw{" + si(nr, yt, at, ot, fr) + "}"), c && M && !g && ("fixedWidth" in h || "items" in h || d && "gutter" in h) && (F = "width:" + ui(at, yt, Le) + ";"), V && "speed" in h && (F += nt(ot)), F && (F = "#" + N + "{" + F + "}"), ("fixedWidth" in h || d && "gutter" in h || !c && "items" in h) && (Z += ci(at, yt, Le)), "gutter" in h && (Z += di(yt)), !c && "speed" in h && (V && (Z += nt(ot)), jt && (Z += Fr(ot))), Z && (Z = "#" + N + " > .tns-item{" + Z + "}"), n = b + U + F + Z, n && A.insertRule("@media (min-width: " + s / 16 + "em) {" + n + "}", A.cssRules.length)
                }
        }

        function Kr() {
            if ($i(), $.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Gr() + "</span>  of " + v + "</div>"), Yi = $.querySelector(".tns-liveregion .current"), Pi) {
                var e = G ? "stop" : "start";
                O ? fe(O, {
                    "data-action": e
                }) : t.autoplayButtonOutput && ($.insertAdjacentHTML(Zi(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + Vt[0] + e + Vt[1] + Ve[0] + "</button>"), O = $.querySelector("[data-action]")), O && R(O, {
                    click: un
                }), G && (Ti(), Ke && R(m, Ot), Ye && R(m, Rt))
            }
            if (qi) {
                var i = c ? X : 0;
                if (I) fe(I, {
                    "aria-label": "Carousel Pagination"
                }), se = I.children, Re(se, function(U, F) {
                    fe(U, {
                        "data-nav": F,
                        tabindex: "-1",
                        "aria-label": vt + (F + 1),
                        "aria-controls": N
                    })
                });
                else {
                    for (var r = "", n = Wt ? "" : 'style="display:none"', s = 0; s < v; s++) r += '<button type="button" data-nav="' + s + '" tabindex="-1" aria-controls="' + N + '" ' + n + ' aria-label="' + vt + (s + 1) + '"></button>';
                    r = '<div class="tns-nav" aria-label="Carousel Pagination">' + r + "</div>", $.insertAdjacentHTML(Zi(t.navPosition), r), I = $.querySelector(".tns-nav"), se = I.children
                }
                if (rr(), V) {
                    var h = V.substring(0, V.length - 18).toLowerCase(),
                        b = "transition: all " + ce / 1e3 + "s";
                    h && (b = "-" + h + "-" + b), Ce(A, "[aria-controls^=" + N + "-item]", b, we(A))
                }
                fe(se[ue], {
                    "aria-label": vt + (ue + 1) + Qi
                }), He(se[ue], "tabindex"), k(se[ue], ii), R(I, Fi)
            }
            Bt && (!W && (!S || !L) && ($.insertAdjacentHTML(Zi(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + N + '">' + Fe[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + N + '">' + Fe[1] + "</button></div>"), W = $.querySelector(".tns-controls")), (!S || !L) && (S = W.children[0], L = W.children[1]), t.controlsContainer && fe(W, {
                "aria-label": "Carousel Navigation",
                tabindex: "0"
            }), (t.controlsContainer || t.prevButton && t.nextButton) && fe([S, L], {
                "aria-controls": N,
                tabindex: "-1"
            }), (t.controlsContainer || t.prevButton && t.nextButton) && (fe(S, {
                "data-controls": "prev"
            }), fe(L, {
                "data-controls": "next"
            })), qt = nn(S), Pt = nn(L), an(), W ? R(W, Dt) : (R(S, Dt), R(L, Dt))), Ii()
        }

        function Yr() {
            if (c && $e) {
                var e = {};
                e[$e] = Se, R(m, e)
            }
            qe && R(m, Ht, t.preventScrollOnTouch), Pe && R(m, zt), We && R(f, kt), st === "inner" ? Y.on("outerResized", function() {
                Xr(), Y.emit("innerLoaded", J())
            }) : (C || d || g || ie || !M) && R(a, {
                resize: Qr
            }), ie && (st === "outer" ? Y.on("innerLoaded", mi) : re || mi()), Ui(), re ? Ir() : de && jr(), Y.on("indexChanged", $r), st === "inner" && Y.emit("innerLoaded", J()), typeof Wi == "function" && Wi(J()), Mt = !0
        }

        function Xn() {
            if (A.disabled = !0, A.ownerNode && A.ownerNode.remove(), Q(a, {
                    resize: Qr
                }), We && Q(f, kt), W && Q(W, Dt), I && Q(I, Fi), Q(m, Ot), Q(m, Rt), O && Q(O, {
                    click: un
                }), G && clearInterval(ri), c && $e) {
                var e = {};
                e[$e] = Se, Q(m, e)
            }
            qe && Q(m, Ht), Pe && Q(m, zt);
            var i = [Tr, Sr, zn, Wn, Lr, Nr];
            Ni.forEach(function(n, s) {
                var h = n === "container" ? $ : t[n];
                if (typeof h == "object" && h) {
                    var b = h.previousElementSibling ? h.previousElementSibling : !1,
                        U = h.parentNode;
                    h.outerHTML = i[s], t[n] = b ? b.nextElementSibling : U.firstElementChild
                }
            }), Ni = ze = It = Oi = Te = M = $ = B = m = Ri = Tr = x = v = Et = Ut = g = d = D = T = K = w = ut = ki = We = ce = At = j = ie = A = St = z = ct = X = E = xr = dt = zi = Be = Qe = ht = Lt = l = Xe = Me = le = Hn = Jt = Ae = Ze = Wi = Y = _e = N = re = Ct = $t = de = Nt = Dt = Fi = Ot = Rt = kt = Ht = zt = Bt = qi = Wt = Pi = Er = Mr = Vi = ei = ti = Ki = xe = Fe = W = Sr = S = L = qt = Pt = Ee = I = Lr = se = he = et = tt = ue = mt = ii = vt = Qi = G = Hi = Cr = Ve = Ke = O = Nr = Ye = Vt = ri = ne = ni = pt = fi = it = ye = ai = Fn = qn = rt = me = Xi = qe = Pe = null;
            for (var r in this) r !== "rebuild" && (this[r] = null);
            Mt = !1
        }

        function Qr(e) {
            Oe(function() {
                Xr(De(e))
            })
        }

        function Xr(e) {
            if (Mt) {
                st === "outer" && Y.emit("outerResized", J(e)), Ut = kr();
                var i, r = Et,
                    n = !1;
                C && (Zr(), i = r !== Et, i && Y.emit("newBreakpointStart", J(e)));
                var s, h, b = w,
                    U = re,
                    F = de,
                    Z = We,
                    Le = xe,
                    at = Ee,
                    ot = qe,
                    nr = Pe,
                    fr = G,
                    yt = Ke,
                    ar = Ye,
                    or = l;
                if (i) {
                    var cf = d,
                        df = ie,
                        hf = Fe,
                        mf = _,
                        lr = Ve;
                    if (!be) var vf = T,
                        pf = D
                }
                if (We = p("arrowKeys"), xe = p("controls"), Ee = p("nav"), qe = p("touch"), _ = p("center"), Pe = p("mouseDrag"), G = p("autoplay"), Ke = p("autoplayHoverPause"), Ye = p("autoplayResetOnVisibility"), i && (re = p("disable"), d = p("fixedWidth"), ce = p("speed"), ie = p("autoHeight"), Fe = p("controlsText"), Ve = p("autoplayText"), Hi = p("autoplayTimeout"), be || (D = p("edgePadding"), T = p("gutter"))), oi(re), K = zr(), (!M || g) && !re && (tn(), M || (ir(), n = !0)), (d || g) && (dt = Bi(), le = Lt()), (i || d) && (w = p("items"), ut = p("slideBy"), h = w !== b, h && (!d && !g && (le = Lt()), ji())), i && re !== U && (re ? Ir() : _n()), $t && (i || d || g) && (de = _i(), de !== F && (de ? (er(yi(Or(0))), jr()) : (Zn(), n = !0))), oi(re || de), G || (Ke = Ye = !1), We !== Z && (We ? R(f, kt) : Q(f, kt)), xe !== Le && (xe ? W ? oe(W) : (S && oe(S), L && oe(L)) : W ? ae(W) : (S && ae(S), L && ae(L))), Ee !== at && (Ee ? (oe(I), rr()) : ae(I)), qe !== ot && (qe ? R(m, Ht, t.preventScrollOnTouch) : Q(m, Ht)), Pe !== nr && (Pe ? R(m, zt) : Q(m, zt)), G !== fr && (G ? (O && oe(O), !ne && !pt && Ti()) : (O && ae(O), ne && Xt())), Ke !== yt && (Ke ? R(m, Ot) : Q(m, Ot)), Ye !== ar && (Ye ? R(f, Rt) : Q(f, Rt)), i) {
                    if ((d !== cf || _ !== mf) && (n = !0), ie !== df && (ie || (B.style.height = "")), xe && Fe !== hf && (S.innerHTML = Fe[0], L.innerHTML = Fe[1]), O && Ve !== lr) {
                        var sr = G ? 1 : 0,
                            ur = O.innerHTML,
                            yn = ur.length - lr[sr].length;
                        ur.substring(yn) === lr[sr] && (O.innerHTML = ur.substring(0, yn) + Ve[sr])
                    }
                } else _ && (d || g) && (n = !0);
                if ((h || d && !g) && (he = gn(), rr()), s = l !== or, s ? (Y.emit("indexChanged", J()), n = !0) : h ? s || $r() : (d || g) && (Ui(), $i(), Ur()), h && !c && Jn(), !re && !de) {
                    if (i && !be && ((D !== pf || T !== vf) && (B.style.cssText = si(D, T, d, ce, ie)), M)) {
                        c && (m.style.width = ui(d, T, w));
                        var gf = ci(d, T, w) + di(T);
                        An(A, we(A) - 1), Ce(A, "#" + N + " > .tns-item", gf, we(A))
                    }
                    ie && mi(), n && (Yt(), Xe = l)
                }
                i && Y.emit("newBreakpointEnd", J(e))
            }
        }

        function _i() {
            if (!d && !g) {
                var e = _ ? w - (w - 1) / 2 : w;
                return v <= e
            }
            var i = d ? (d + T) * v : z[v],
                r = D ? K + D * 2 : K + T;
            return _ && (r -= d ? (K - d) / 2 : (K - (z[l + 1] - z[l] - T)) / 2), i <= r
        }

        function Zr() {
            Et = 0;
            for (var e in C) e = parseInt(e), Ut >= e && (Et = e)
        }
        var ji = function() {
            return j ? c ? function() {
                var e = Me,
                    i = le;
                e += ut, i -= ut, D ? (e += 1, i -= 1) : d && (K + T) % (d + T) && (i -= 1), X && (l > i ? l -= v : l < e && (l += v))
            } : function() {
                if (l > le)
                    for (; l >= Me + v;) l -= v;
                else if (l < Me)
                    for (; l <= le - v;) l += v
            } : function() {
                l = Math.max(Me, Math.min(le, l))
            }
        }();

        function Ii() {
            !G && O && ae(O), !Ee && I && ae(I), xe || (W ? ae(W) : (S && ae(S), L && ae(L)))
        }

        function _r() {
            G && O && oe(O), Ee && I && oe(I), xe && (W ? oe(W) : (S && oe(S), L && oe(L)))
        }

        function jr() {
            if (!Nt) {
                if (D && (B.style.margin = "0px"), X)
                    for (var e = "tns-transparent", i = X; i--;) c && k(x[i], e), k(x[E - i - 1], e);
                Ii(), Nt = !0
            }
        }

        function Zn() {
            if (Nt) {
                if (D && be && (B.style.margin = ""), X)
                    for (var e = "tns-transparent", i = X; i--;) c && ee(x[i], e), ee(x[E - i - 1], e);
                _r(), Nt = !1
            }
        }

        function Ir() {
            if (!Ct) {
                if (A.disabled = !0, m.className = m.className.replace(_e.substring(1), ""), He(m, ["style"]), j)
                    for (var e = X; e--;) c && ae(x[e]), ae(x[E - e - 1]);
                if ((!M || !c) && He(B, ["style"]), !c)
                    for (var i = l, r = l + v; i < r; i++) {
                        var n = x[i];
                        He(n, ["style"]), ee(n, ze), ee(n, Te)
                    }
                Ii(), Ct = !0
            }
        }

        function _n() {
            if (Ct) {
                if (A.disabled = !1, m.className += _e, Yt(), j)
                    for (var e = X; e--;) c && oe(x[e]), oe(x[E - e - 1]);
                if (!c)
                    for (var i = l, r = l + v; i < r; i++) {
                        var n = x[i],
                            s = i < l + w ? ze : Te;
                        n.style.left = (i - l) * 100 / w + "%", k(n, s)
                    }
                _r(), Ct = !1
            }
        }

        function Ur() {
            var e = Gr();
            Yi.innerHTML !== e && (Yi.innerHTML = e)
        }

        function Gr() {
            var e = hi(),
                i = e[0] + 1,
                r = e[1] + 1;
            return i === r ? i + "" : i + " to " + r
        }

        function hi(e) {
            e == null && (e = yi());
            var i = l,
                r, n, s;
            if (_ || D ? (g || d) && (n = -(parseFloat(e) + D), s = n + K + D * 2) : g && (n = z[l], s = n + K), g) z.forEach(function(F, Z) {
                Z < E && ((_ || D) && F <= n + .5 && (i = Z), s - F >= .5 && (r = Z))
            });
            else {
                if (d) {
                    var h = d + T;
                    _ || D ? (i = Math.floor(n / h), r = Math.ceil(s / h - 1)) : r = i + Math.ceil(K / h) - 1
                } else if (_ || D) {
                    var b = w - 1;
                    if (_ ? (i -= b / 2, r = l + b / 2) : r = l + b, D) {
                        var U = D * w / K;
                        i -= U, r += U
                    }
                    i = Math.floor(i), r = Math.ceil(r)
                } else r = i + w - 1;
                i = Math.max(i, 0), r = Math.min(r, E - 1)
            }
            return [i, r]
        }

        function Ui() {
            if (St && !re) {
                var e = hi();
                e.push(kn), Ji.apply(null, e).forEach(function(i) {
                    if (!ke(i, ei)) {
                        var r = {};
                        r[$e] = function(s) {
                            s.stopPropagation()
                        }, R(i, r), R(i, ti), i.src = Zt(i, "data-src");
                        var n = Zt(i, "data-srcset");
                        n && (i.srcset = n), k(i, "loading")
                    }
                })
            }
        }

        function jn(e) {
            Jr(gt(e))
        }

        function In(e) {
            Un(gt(e))
        }

        function Jr(e) {
            k(e, "loaded"), Gi(e)
        }

        function Un(e) {
            k(e, "failed"), Gi(e)
        }

        function Gi(e) {
            k(e, ei), ee(e, "loading"), Q(e, ti)
        }

        function Ji(e, i, r) {
            var n = [];
            for (r || (r = "img"); e <= i;) Re(x[e].querySelectorAll(r), function(s) {
                n.push(s)
            }), e++;
            return n
        }

        function mi() {
            var e = Ji.apply(null, hi());
            Oe(function() {
                vi(e, en)
            })
        }

        function vi(e, i) {
            if (Ki || (e.forEach(function(r, n) {
                    !St && r.complete && Gi(r), ke(r, ei) && e.splice(n, 1)
                }), !e.length)) return i();
            Oe(function() {
                vi(e, i)
            })
        }

        function $r() {
            Ui(), $i(), Ur(), an(), $n()
        }

        function Gn() {
            c && ie && (te.style[V] = ce / 1e3 + "s")
        }

        function Br(e, i) {
            for (var r = [], n = e, s = Math.min(e + i, E); n < s; n++) r.push(x[n].offsetHeight);
            return Math.max.apply(null, r)
        }

        function en() {
            var e = ie ? Br(l, w) : Br(X, v),
                i = te || B;
            i.style.height !== e && (i.style.height = e + "px")
        }

        function tn() {
            z = [0];
            var e = M ? "left" : "top",
                i = M ? "right" : "bottom",
                r = x[0].getBoundingClientRect()[e];
            Re(x, function(n, s) {
                s && z.push(n.getBoundingClientRect()[e] - r), s === E - 1 && z.push(n.getBoundingClientRect()[i] - r)
            })
        }

        function $i() {
            var e = hi(),
                i = e[0],
                r = e[1];
            Re(x, function(n, s) {
                s >= i && s <= r ? bt(n, "aria-hidden") && (He(n, ["aria-hidden", "tabindex"]), k(n, Vi)) : bt(n, "aria-hidden") || (fe(n, {
                    "aria-hidden": "true",
                    tabindex: "-1"
                }), ee(n, Vi))
            })
        }

        function Jn() {
            for (var e = l + Math.min(v, w), i = E; i--;) {
                var r = x[i];
                i >= l && i < e ? (k(r, "tns-moving"), r.style.left = (i - l) * 100 / w + "%", k(r, ze), ee(r, Te)) : r.style.left && (r.style.left = "", k(r, Te), ee(r, ze)), ee(r, It)
            }
            setTimeout(function() {
                Re(x, function(n) {
                    ee(n, "tns-moving")
                })
            }, 300)
        }

        function $n() {
            if (Ee && (ue = tt >= 0 ? tt : Rr(), tt = -1, ue !== mt)) {
                var e = se[mt],
                    i = se[ue];
                fe(e, {
                    tabindex: "-1",
                    "aria-label": vt + (mt + 1)
                }), ee(e, ii), fe(i, {
                    "aria-label": vt + (ue + 1) + Qi
                }), He(i, "tabindex"), k(i, ii), mt = ue
            }
        }

        function rn(e) {
            return e.nodeName.toLowerCase()
        }

        function nn(e) {
            return rn(e) === "button"
        }

        function fn(e) {
            return e.getAttribute("aria-disabled") === "true"
        }

        function pi(e, i, r) {
            e ? i.disabled = r : i.setAttribute("aria-disabled", r.toString())
        }

        function an() {
            if (!(!xe || At || j)) {
                var e = qt ? S.disabled : fn(S),
                    i = Pt ? L.disabled : fn(L),
                    r = l <= Me,
                    n = !At && l >= le;
                r && !e && pi(qt, S, !0), !r && e && pi(qt, S, !1), n && !i && pi(Pt, L, !0), !n && i && pi(Pt, L, !1)
            }
        }

        function gi(e, i) {
            V && (e.style[V] = i)
        }

        function Bn() {
            return d ? (d + T) * E : z[E]
        }

        function Kt(e) {
            e == null && (e = l);
            var i = D ? T : 0;
            return g ? (K - i - (z[e + 1] - z[e] - T)) / 2 : d ? (K - d) / 2 : (w - 1) / 2
        }

        function Bi() {
            var e = D ? T : 0,
                i = K + e - Bn();
            return _ && !j && (i = d ? -(d + T) * (E - 1) - Kt() : Kt(E - 1) - z[E - 1]), i > 0 && (i = 0), i
        }

        function yi(e) {
            e == null && (e = l);
            var i;
            if (M && !g)
                if (d) i = -(d + T) * e, _ && (i += Kt());
                else {
                    var r = Je ? E : w;
                    _ && (e -= Kt()), i = -e * 100 / r
                }
            else i = -z[e], _ && g && (i += Kt());
            return xr && (i = Math.max(i, dt)), i += M && !g && !d ? "%" : "px", i
        }

        function Yt(e) {
            gi(m, "0s"), er(e)
        }

        function er(e) {
            e == null && (e = yi()), m.style[Be] = Qe + e + ht
        }

        function on(e, i, r, n) {
            var s = e + w;
            j || (s = Math.min(s, E));
            for (var h = e; h < s; h++) {
                var b = x[h];
                n || (b.style.left = (h - l) * 100 / w + "%"), Oi && _t && (b.style[_t] = b.style[Ci] = Oi * (h - e) / 1e3 + "s"), ee(b, i), k(b, r), n && ct.push(b)
            }
        }
        var ef = function() {
            return c ? function() {
                gi(m, ""), V || !ce ? (er(), (!ce || !dr(m)) && Se()) : Rn(m, Be, Qe, ht, yi(), ce, Se), M || ir()
            } : function() {
                ct = [];
                var e = {};
                e[$e] = e[pr] = Se, Q(x[Xe], e), R(x[l], e), on(Xe, ze, It, !0), on(l, Te, ze), (!$e || !pr || !ce || !dr(m)) && Se()
            }
        }();

        function tr(e, i) {
            zi && ji(), (l !== Xe || i) && (Y.emit("indexChanged", J()), Y.emit("transitionStart", J()), ie && mi(), ne && e && ["click", "keydown"].indexOf(e.type) >= 0 && Xt(), Ze = !0, ef())
        }

        function ln(e) {
            return e.toLowerCase().replace(/-/g, "")
        }

        function Se(e) {
            if (c || Ze) {
                if (Y.emit("transitionEnd", J(e)), !c && ct.length > 0)
                    for (var i = 0; i < ct.length; i++) {
                        var r = ct[i];
                        r.style.left = "", Ci && _t && (r.style[Ci] = "", r.style[_t] = ""), ee(r, It), k(r, Te)
                    }
                if (!e || !c && e.target.parentNode === m || e.target === m && ln(e.propertyName) === ln(Be)) {
                    if (!zi) {
                        var n = l;
                        ji(), l !== n && (Y.emit("indexChanged", J()), Yt())
                    }
                    st === "inner" && Y.emit("innerLoaded", J()), Ze = !1, Xe = l
                }
            }
        }

        function Qt(e, i) {
            if (!de)
                if (e === "prev") je(i, -1);
                else if (e === "next") je(i, 1);
            else {
                if (Ze) {
                    if (Gt) return;
                    Se()
                }
                var r = li(),
                    n = 0;
                if (e === "first" ? n = -r : e === "last" ? n = c ? v - w - r : v - 1 - r : (typeof e != "number" && (e = parseInt(e)), isNaN(e) || (i || (e = Math.max(0, Math.min(v - 1, e))), n = e - r)), !c && n && Math.abs(n) < w) {
                    var s = n > 0 ? 1 : -1;
                    n += l + n - v >= Me ? v * s : v * 2 * s * -1
                }
                l += n, c && j && (l < Me && (l += v), l > le && (l -= v)), li(l) !== li(Xe) && tr(i)
            }
        }

        function je(e, i) {
            if (Ze) {
                if (Gt) return;
                Se()
            }
            var r;
            if (!i) {
                e = De(e);
                for (var n = gt(e); n !== W && [S, L].indexOf(n) < 0;) n = n.parentNode;
                var s = [S, L].indexOf(n);
                s >= 0 && (r = !0, i = s === 0 ? -1 : 1)
            }
            if (At) {
                if (l === Me && i === -1) {
                    Qt("last", e);
                    return
                } else if (l === le && i === 1) {
                    Qt("first", e);
                    return
                }
            }
            i && (l += ut * i, g && (l = Math.floor(l)), tr(r || e && e.type === "keydown" ? e : null))
        }

        function tf(e) {
            if (Ze) {
                if (Gt) return;
                Se()
            }
            e = De(e);
            for (var i = gt(e), r; i !== I && !bt(i, "data-nav");) i = i.parentNode;
            if (bt(i, "data-nav")) {
                var r = tt = Number(Zt(i, "data-nav")),
                    n = d || g ? r * v / he : r * w,
                    s = Wt ? r : Math.min(Math.ceil(n), v - 1);
                Qt(s, e), ue === r && (ne && Xt(), tt = -1)
            }
        }

        function wi() {
            ri = setInterval(function() {
                je(null, Cr)
            }, Hi), ne = !0
        }

        function bi() {
            clearInterval(ri), ne = !1
        }

        function sn(e, i) {
            fe(O, {
                "data-action": e
            }), O.innerHTML = Vt[0] + e + Vt[1] + i
        }

        function Ti() {
            wi(), O && sn("stop", Ve[1])
        }

        function Xt() {
            bi(), O && sn("start", Ve[0])
        }

        function rf() {
            G && !ne && (Ti(), pt = !1)
        }

        function nf() {
            ne && (Xt(), pt = !0)
        }

        function un() {
            ne ? (Xt(), pt = !0) : (Ti(), pt = !1)
        }

        function ff() {
            f.hidden ? ne && (bi(), fi = !0) : fi && (wi(), fi = !1)
        }

        function af() {
            ne && (bi(), ni = !0)
        }

        function of () {
            ni && (wi(), ni = !1)
        }

        function lf(e) {
            e = De(e);
            var i = [u.LEFT, u.RIGHT].indexOf(e.keyCode);
            i >= 0 && je(e, i === 0 ? -1 : 1)
        }

        function sf(e) {
            e = De(e);
            var i = [u.LEFT, u.RIGHT].indexOf(e.keyCode);
            i >= 0 && (i === 0 ? S.disabled || je(e, -1) : L.disabled || je(e, 1))
        }

        function cn(e) {
            e.focus()
        }

        function uf(e) {
            e = De(e);
            var i = f.activeElement;
            if (bt(i, "data-nav")) {
                var r = [u.LEFT, u.RIGHT, u.ENTER, u.SPACE].indexOf(e.keyCode),
                    n = Number(Zt(i, "data-nav"));
                r >= 0 && (r === 0 ? n > 0 && cn(se[n - 1]) : r === 1 ? n < he - 1 && cn(se[n + 1]) : (tt = n, Qt(n, e)))
            }
        }

        function De(e) {
            return e = e || a.event, ft(e) ? e.changedTouches[0] : e
        }

        function gt(e) {
            return e.target || a.event.srcElement
        }

        function ft(e) {
            return e.type.indexOf("touch") >= 0
        }

        function dn(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }

        function hn() {
            return Ln(Sn(ye.y - it.y, ye.x - it.x), Jt) === t.axis
        }

        function mn(e) {
            if (Ze) {
                if (Gt) return;
                Se()
            }
            G && ne && bi(), rt = !0, me && (Mi(me), me = null);
            var i = De(e);
            Y.emit(ft(e) ? "touchStart" : "dragStart", J(e)), !ft(e) && ["img", "a"].indexOf(rn(gt(e))) >= 0 && dn(e), ye.x = it.x = i.clientX, ye.y = it.y = i.clientY, c && (ai = parseFloat(m.style[Be].replace(Qe, "")), gi(m, "0s"))
        }

        function vn(e) {
            if (rt) {
                var i = De(e);
                ye.x = i.clientX, ye.y = i.clientY, c ? me || (me = Oe(function() {
                    pn(e)
                })) : (Ae === "?" && (Ae = hn()), Ae && (Ft = !0)), (typeof e.cancelable != "boolean" || e.cancelable) && Ft && e.preventDefault()
            }
        }

        function pn(e) {
            if (!Ae) {
                rt = !1;
                return
            }
            if (Mi(me), rt && (me = Oe(function() {
                    pn(e)
                })), Ae === "?" && (Ae = hn()), Ae) {
                !Ft && ft(e) && (Ft = !0);
                try {
                    e.type && Y.emit(ft(e) ? "touchMove" : "dragMove", J(e))
                } catch {}
                var i = ai,
                    r = Xi(ye, it);
                if (!M || d || g) i += r, i += "px";
                else {
                    var n = Je ? r * w * 100 / ((K + T) * E) : r * 100 / (K + T);
                    i += n, i += "%"
                }
                m.style[Be] = Qe + i + ht
            }
        }

        function xi(e) {
            if (rt) {
                me && (Mi(me), me = null), c && gi(m, ""), rt = !1;
                var i = De(e);
                ye.x = i.clientX, ye.y = i.clientY;
                var r = Xi(ye, it);
                if (Math.abs(r)) {
                    if (!ft(e)) {
                        var n = gt(e);
                        R(n, {
                            click: function s(h) {
                                dn(h), Q(n, {
                                    click: s
                                })
                            }
                        })
                    }
                    c ? me = Oe(function() {
                        if (M && !g) {
                            var s = -r * w / (K + T);
                            s = r > 0 ? Math.floor(s) : Math.ceil(s), l += s
                        } else {
                            var h = -(ai + r);
                            if (h <= 0) l = Me;
                            else if (h >= z[E - 1]) l = le;
                            else
                                for (var b = 0; b < E && h >= z[b];) l = b, h > z[b] && r < 0 && (l += 1), b++
                        }
                        tr(e, r), Y.emit(ft(e) ? "touchEnd" : "dragEnd", J(e))
                    }) : Ae && je(e, r > 0 ? -1 : 1)
                }
            }
            t.preventScrollOnTouch === "auto" && (Ft = !1), Jt && (Ae = "?"), G && !ne && wi()
        }

        function ir() {
            var e = te || B;
            e.style.height = z[l + w] - z[l] + "px"
        }

        function gn() {
            var e = d ? (d + T) * v / K : v / w;
            return Math.min(Math.ceil(e), v)
        }

        function rr() {
            if (!(!Ee || Wt) && he !== et) {
                var e = et,
                    i = he,
                    r = oe;
                for (et > he && (e = he, i = et, r = ae); e < i;) r(se[e]), e++;
                et = he
            }
        }

        function J(e) {
            return {
                container: m,
                slideItems: x,
                navContainer: I,
                navItems: se,
                controlsContainer: W,
                hasControls: Bt,
                prevButton: S,
                nextButton: L,
                items: w,
                slideBy: ut,
                cloneCount: X,
                slideCount: v,
                slideCountNew: E,
                index: l,
                indexCached: Xe,
                displayIndex: Dr(),
                navCurrentIndex: ue,
                navCurrentIndexCached: mt,
                pages: he,
                pagesCached: et,
                sheet: A,
                isOn: Mt,
                event: e || {}
            }
        }
        return {
            version: "2.9.4",
            getInfo: J,
            events: Y,
            goTo: Qt,
            play: rf,
            pause: nf,
            isOn: Mt,
            updateSliderHeight: en,
            refresh: qr,
            destroy: Xn,
            rebuild: function() {
                return mr(Ai(t, yr))
            }
        }
    };
    window.tns = mr;
})();