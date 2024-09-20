(() => {
    var X = Object.create;
    var B = Object.defineProperty;
    var tt = Object.getOwnPropertyDescriptor;
    var et = Object.getOwnPropertyNames;
    var nt = Object.getPrototypeOf,
        rt = Object.prototype.hasOwnProperty;
    var it = (h, c) => () => (c || h((c = {
        exports: {}
    }).exports, c), c.exports);
    var st = (h, c, g, _) => {
        if (c && typeof c == "object" || typeof c == "function")
            for (let y of et(c)) !rt.call(h, y) && y !== g && B(h, y, {
                get: () => c[y],
                enumerable: !(_ = tt(c, y)) || _.enumerable
            });
        return h
    };
    var ut = (h, c, g) => (g = h != null ? X(nt(h)) : {}, st(c || !h || !h.__esModule ? B(g, "default", {
        value: h,
        enumerable: !0
    }) : g, h));
    var E = it((F, J) => {
        (function(h, c) {
            typeof F == "object" && typeof J < "u" ? J.exports = c() : typeof define == "function" && define.amd ? define(c) : (h = typeof globalThis < "u" ? globalThis : h || self).dayjs = c()
        })(F, function() {
            "use strict";
            var h = 1e3,
                c = 6e4,
                g = 36e5,
                _ = "millisecond",
                y = "second",
                k = "minute",
                T = "hour",
                D = "day",
                x = "week",
                v = "month",
                Z = "quarter",
                p = "year",
                Y = "date",
                z = "Invalid Date",
                Q = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                G = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                K = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function(i) {
                        var n = ["th", "st", "nd", "rd"],
                            t = i % 100;
                        return "[" + i + (n[(t - 20) % 10] || n[t] || n[0]) + "]"
                    }
                },
                N = function(i, n, t) {
                    var r = String(i);
                    return !r || r.length >= n ? i : "" + Array(n + 1 - r.length).join(t) + i
                },
                R = {
                    s: N,
                    z: function(i) {
                        var n = -i.utcOffset(),
                            t = Math.abs(n),
                            r = Math.floor(t / 60),
                            e = t % 60;
                        return (n <= 0 ? "+" : "-") + N(r, 2, "0") + ":" + N(e, 2, "0")
                    },
                    m: function i(n, t) {
                        if (n.date() < t.date()) return -i(t, n);
                        var r = 12 * (t.year() - n.year()) + (t.month() - n.month()),
                            e = n.clone().add(r, v),
                            s = t - e < 0,
                            u = n.clone().add(r + (s ? -1 : 1), v);
                        return +(-(r + (t - e) / (s ? e - u : u - e)) || 0)
                    },
                    a: function(i) {
                        return i < 0 ? Math.ceil(i) || 0 : Math.floor(i)
                    },
                    p: function(i) {
                        return {
                            M: v,
                            y: p,
                            w: x,
                            d: D,
                            D: Y,
                            h: T,
                            m: k,
                            s: y,
                            ms: _,
                            Q: Z
                        }[i] || String(i || "").toLowerCase().replace(/s$/, "")
                    },
                    u: function(i) {
                        return i === void 0
                    }
                },
                j = "en",
                w = {};
            w[j] = K;
            var V = "$isDayjsObject",
                U = function(i) {
                    return i instanceof A || !(!i || !i[V])
                },
                C = function i(n, t, r) {
                    var e;
                    if (!n) return j;
                    if (typeof n == "string") {
                        var s = n.toLowerCase();
                        w[s] && (e = s), t && (w[s] = t, e = s);
                        var u = n.split("-");
                        if (!e && u.length > 1) return i(u[0])
                    } else {
                        var o = n.name;
                        w[o] = n, e = o
                    }
                    return !r && e && (j = e), e || !r && j
                },
                d = function(i, n) {
                    if (U(i)) return i.clone();
                    var t = typeof n == "object" ? n : {};
                    return t.date = i, t.args = arguments, new A(t)
                },
                a = R;
            a.l = C, a.i = U, a.w = function(i, n) {
                return d(i, {
                    locale: n.$L,
                    utc: n.$u,
                    x: n.$x,
                    $offset: n.$offset
                })
            };
            var A = function() {
                    function i(t) {
                        this.$L = C(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[V] = !0
                    }
                    var n = i.prototype;
                    return n.parse = function(t) {
                        this.$d = function(r) {
                            var e = r.date,
                                s = r.utc;
                            if (e === null) return new Date(NaN);
                            if (a.u(e)) return new Date;
                            if (e instanceof Date) return new Date(e);
                            if (typeof e == "string" && !/Z$/i.test(e)) {
                                var u = e.match(Q);
                                if (u) {
                                    var o = u[2] - 1 || 0,
                                        f = (u[7] || "0").substring(0, 3);
                                    return s ? new Date(Date.UTC(u[1], o, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, f)) : new Date(u[1], o, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, f)
                                }
                            }
                            return new Date(e)
                        }(t), this.init()
                    }, n.init = function() {
                        var t = this.$d;
                        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                    }, n.$utils = function() {
                        return a
                    }, n.isValid = function() {
                        return this.$d.toString() !== z
                    }, n.isSame = function(t, r) {
                        var e = d(t);
                        return this.startOf(r) <= e && e <= this.endOf(r)
                    }, n.isAfter = function(t, r) {
                        return d(t) < this.startOf(r)
                    }, n.isBefore = function(t, r) {
                        return this.endOf(r) < d(t)
                    }, n.$g = function(t, r, e) {
                        return a.u(t) ? this[r] : this.set(e, t)
                    }, n.unix = function() {
                        return Math.floor(this.valueOf() / 1e3)
                    }, n.valueOf = function() {
                        return this.$d.getTime()
                    }, n.startOf = function(t, r) {
                        var e = this,
                            s = !!a.u(r) || r,
                            u = a.p(t),
                            o = function(b, m) {
                                var S = a.w(e.$u ? Date.UTC(e.$y, m, b) : new Date(e.$y, m, b), e);
                                return s ? S : S.endOf(D)
                            },
                            f = function(b, m) {
                                return a.w(e.toDate()[b].apply(e.toDate("s"), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(m)), e)
                            },
                            $ = this.$W,
                            l = this.$M,
                            M = this.$D,
                            H = "set" + (this.$u ? "UTC" : "");
                        switch (u) {
                            case p:
                                return s ? o(1, 0) : o(31, 11);
                            case v:
                                return s ? o(1, l) : o(0, l + 1);
                            case x:
                                var O = this.$locale().weekStart || 0,
                                    L = ($ < O ? $ + 7 : $) - O;
                                return o(s ? M - L : M + (6 - L), l);
                            case D:
                            case Y:
                                return f(H + "Hours", 0);
                            case T:
                                return f(H + "Minutes", 1);
                            case k:
                                return f(H + "Seconds", 2);
                            case y:
                                return f(H + "Milliseconds", 3);
                            default:
                                return this.clone()
                        }
                    }, n.endOf = function(t) {
                        return this.startOf(t, !1)
                    }, n.$set = function(t, r) {
                        var e, s = a.p(t),
                            u = "set" + (this.$u ? "UTC" : ""),
                            o = (e = {}, e[D] = u + "Date", e[Y] = u + "Date", e[v] = u + "Month", e[p] = u + "FullYear", e[T] = u + "Hours", e[k] = u + "Minutes", e[y] = u + "Seconds", e[_] = u + "Milliseconds", e)[s],
                            f = s === D ? this.$D + (r - this.$W) : r;
                        if (s === v || s === p) {
                            var $ = this.clone().set(Y, 1);
                            $.$d[o](f), $.init(), this.$d = $.set(Y, Math.min(this.$D, $.daysInMonth())).$d
                        } else o && this.$d[o](f);
                        return this.init(), this
                    }, n.set = function(t, r) {
                        return this.clone().$set(t, r)
                    }, n.get = function(t) {
                        return this[a.p(t)]()
                    }, n.add = function(t, r) {
                        var e, s = this;
                        t = Number(t);
                        var u = a.p(r),
                            o = function(l) {
                                var M = d(s);
                                return a.w(M.date(M.date() + Math.round(l * t)), s)
                            };
                        if (u === v) return this.set(v, this.$M + t);
                        if (u === p) return this.set(p, this.$y + t);
                        if (u === D) return o(1);
                        if (u === x) return o(7);
                        var f = (e = {}, e[k] = c, e[T] = g, e[y] = h, e)[u] || 1,
                            $ = this.$d.getTime() + t * f;
                        return a.w($, this)
                    }, n.subtract = function(t, r) {
                        return this.add(-1 * t, r)
                    }, n.format = function(t) {
                        var r = this,
                            e = this.$locale();
                        if (!this.isValid()) return e.invalidDate || z;
                        var s = t || "YYYY-MM-DDTHH:mm:ssZ",
                            u = a.z(this),
                            o = this.$H,
                            f = this.$m,
                            $ = this.$M,
                            l = e.weekdays,
                            M = e.months,
                            H = e.meridiem,
                            O = function(m, S, W, I) {
                                return m && (m[S] || m(r, s)) || W[S].slice(0, I)
                            },
                            L = function(m) {
                                return a.s(o % 12 || 12, m, "0")
                            },
                            b = H || function(m, S, W) {
                                var I = m < 12 ? "AM" : "PM";
                                return W ? I.toLowerCase() : I
                            };
                        return s.replace(G, function(m, S) {
                            return S || function(W) {
                                switch (W) {
                                    case "YY":
                                        return String(r.$y).slice(-2);
                                    case "YYYY":
                                        return a.s(r.$y, 4, "0");
                                    case "M":
                                        return $ + 1;
                                    case "MM":
                                        return a.s($ + 1, 2, "0");
                                    case "MMM":
                                        return O(e.monthsShort, $, M, 3);
                                    case "MMMM":
                                        return O(M, $);
                                    case "D":
                                        return r.$D;
                                    case "DD":
                                        return a.s(r.$D, 2, "0");
                                    case "d":
                                        return String(r.$W);
                                    case "dd":
                                        return O(e.weekdaysMin, r.$W, l, 2);
                                    case "ddd":
                                        return O(e.weekdaysShort, r.$W, l, 3);
                                    case "dddd":
                                        return l[r.$W];
                                    case "H":
                                        return String(o);
                                    case "HH":
                                        return a.s(o, 2, "0");
                                    case "h":
                                        return L(1);
                                    case "hh":
                                        return L(2);
                                    case "a":
                                        return b(o, f, !0);
                                    case "A":
                                        return b(o, f, !1);
                                    case "m":
                                        return String(f);
                                    case "mm":
                                        return a.s(f, 2, "0");
                                    case "s":
                                        return String(r.$s);
                                    case "ss":
                                        return a.s(r.$s, 2, "0");
                                    case "SSS":
                                        return a.s(r.$ms, 3, "0");
                                    case "Z":
                                        return u
                                }
                                return null
                            }(m) || u.replace(":", "")
                        })
                    }, n.utcOffset = function() {
                        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                    }, n.diff = function(t, r, e) {
                        var s, u = this,
                            o = a.p(r),
                            f = d(t),
                            $ = (f.utcOffset() - this.utcOffset()) * c,
                            l = this - f,
                            M = function() {
                                return a.m(u, f)
                            };
                        switch (o) {
                            case p:
                                s = M() / 12;
                                break;
                            case v:
                                s = M();
                                break;
                            case Z:
                                s = M() / 3;
                                break;
                            case x:
                                s = (l - $) / 6048e5;
                                break;
                            case D:
                                s = (l - $) / 864e5;
                                break;
                            case T:
                                s = l / g;
                                break;
                            case k:
                                s = l / c;
                                break;
                            case y:
                                s = l / h;
                                break;
                            default:
                                s = l
                        }
                        return e ? s : a.a(s)
                    }, n.daysInMonth = function() {
                        return this.endOf(v).$D
                    }, n.$locale = function() {
                        return w[this.$L]
                    }, n.locale = function(t, r) {
                        if (!t) return this.$L;
                        var e = this.clone(),
                            s = C(t, r, !0);
                        return s && (e.$L = s), e
                    }, n.clone = function() {
                        return a.w(this.$d, this)
                    }, n.toDate = function() {
                        return new Date(this.valueOf())
                    }, n.toJSON = function() {
                        return this.isValid() ? this.toISOString() : null
                    }, n.toISOString = function() {
                        return this.$d.toISOString()
                    }, n.toString = function() {
                        return this.$d.toUTCString()
                    }, i
                }(),
                q = A.prototype;
            return d.prototype = q, [
                ["$ms", _],
                ["$s", y],
                ["$m", k],
                ["$H", T],
                ["$W", D],
                ["$M", v],
                ["$y", p],
                ["$D", Y]
            ].forEach(function(i) {
                q[i[1]] = function(n) {
                    return this.$g(n, i[0], i[1])
                }
            }), d.extend = function(i, n) {
                return i.$i || (i(n, A, d), i.$i = !0), d
            }, d.locale = C, d.isDayjs = U, d.unix = function(i) {
                return d(1e3 * i)
            }, d.en = w[j], d.Ls = w, d.p = {}, d
        })
    });
    var P = ut(E());
    window.dayjs = P.default;
})();