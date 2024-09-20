(() => {
    var X = Object.create;
    var V = Object.defineProperty;
    var $ = Object.getOwnPropertyDescriptor;
    var G = Object.getOwnPropertyNames;
    var Q = Object.getPrototypeOf,
        tt = Object.prototype.hasOwnProperty;
    var et = (x, k) => () => (k || x((k = {
        exports: {}
    }).exports, k), k.exports);
    var it = (x, k, D, d) => {
        if (k && typeof k == "object" || typeof k == "function")
            for (let s of G(k)) !tt.call(x, s) && s !== D && V(x, s, {
                get: () => k[s],
                enumerable: !(d = $(k, s)) || d.enumerable
            });
        return x
    };
    var nt = (x, k, D) => (D = x != null ? X(Q(x)) : {}, it(k || !x || !x.__esModule ? V(D, "default", {
        value: x,
        enumerable: !0
    }) : D, x));
    var J = et((H, W) => {
        (function(x, k) {
            typeof H == "object" && typeof W == "object" ? W.exports = k() : typeof define == "function" && define.amd ? define("Litepicker", [], k) : typeof H == "object" ? H.Litepicker = k() : x.Litepicker = k()
        })(window, function() {
            return function(x) {
                var k = {};

                function D(d) {
                    if (k[d]) return k[d].exports;
                    var s = k[d] = {
                        i: d,
                        l: !1,
                        exports: {}
                    };
                    return x[d].call(s.exports, s, s.exports, D), s.l = !0, s.exports
                }
                return D.m = x, D.c = k, D.d = function(d, s, i) {
                    D.o(d, s) || Object.defineProperty(d, s, {
                        enumerable: !0,
                        get: i
                    })
                }, D.r = function(d) {
                    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(d, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(d, "__esModule", {
                        value: !0
                    })
                }, D.t = function(d, s) {
                    if (1 & s && (d = D(d)), 8 & s || 4 & s && typeof d == "object" && d && d.__esModule) return d;
                    var i = Object.create(null);
                    if (D.r(i), Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: d
                        }), 2 & s && typeof d != "string")
                        for (var l in d) D.d(i, l, function(e) {
                            return d[e]
                        }.bind(null, l));
                    return i
                }, D.n = function(d) {
                    var s = d && d.__esModule ? function() {
                        return d.default
                    } : function() {
                        return d
                    };
                    return D.d(s, "a", s), s
                }, D.o = function(d, s) {
                    return Object.prototype.hasOwnProperty.call(d, s)
                }, D.p = "", D(D.s = 4)
            }([function(x, k, D) {
                "use strict";
                Object.defineProperty(k, "__esModule", {
                    value: !0
                });
                var d = function() {
                    function s(i, l, e) {
                        i === void 0 && (i = null), l === void 0 && (l = null), e === void 0 && (e = "en-US"), this.dateInstance = typeof l == "object" && l !== null ? l.parse(i instanceof s ? i.clone().toJSDate() : i) : typeof l == "string" ? s.parseDateTime(i, l, e) : i ? s.parseDateTime(i) : s.parseDateTime(new Date), this.lang = e
                    }
                    return s.parseDateTime = function(i, l, e) {
                        if (l === void 0 && (l = "YYYY-MM-DD"), e === void 0 && (e = "en-US"), !i) return new Date(NaN);
                        if (i instanceof Date) return new Date(i);
                        if (i instanceof s) return i.clone().toJSDate();
                        if (/^-?\d{10,}$/.test(i)) return s.getDateZeroTime(new Date(Number(i)));
                        if (typeof i == "string") {
                            for (var g = [], w = null;
                                (w = s.regex.exec(l)) != null;) w[1] !== "\\" && g.push(w);
                            if (g.length) {
                                var y = {
                                    year: null,
                                    month: null,
                                    shortMonth: null,
                                    longMonth: null,
                                    day: null,
                                    value: ""
                                };
                                g[0].index > 0 && (y.value += ".*?");
                                for (var v = 0, n = Object.entries(g); v < n.length; v++) {
                                    var t = n[v],
                                        c = t[0],
                                        u = t[1],
                                        r = Number(c),
                                        o = s.formatPatterns(u[0], e),
                                        a = o.group,
                                        h = o.pattern;
                                    y[a] = r + 1, y.value += h, y.value += ".*?"
                                }
                                var m = new RegExp("^" + y.value + "$");
                                if (m.test(i)) {
                                    var p = m.exec(i),
                                        f = Number(p[y.year]),
                                        b = null;
                                    y.month ? b = Number(p[y.month]) - 1 : y.shortMonth ? b = s.shortMonths(e).indexOf(p[y.shortMonth]) : y.longMonth && (b = s.longMonths(e).indexOf(p[y.longMonth]));
                                    var M = Number(p[y.day]) || 1;
                                    return new Date(f, b, M, 0, 0, 0, 0)
                                }
                            }
                        }
                        return s.getDateZeroTime(new Date(i))
                    }, s.convertArray = function(i, l) {
                        return i.map(function(e) {
                            return e instanceof Array ? e.map(function(g) {
                                return new s(g, l)
                            }) : new s(e, l)
                        })
                    }, s.getDateZeroTime = function(i) {
                        return new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0)
                    }, s.shortMonths = function(i) {
                        return s.MONTH_JS.map(function(l) {
                            return new Date(2019, l).toLocaleString(i, {
                                month: "short"
                            })
                        })
                    }, s.longMonths = function(i) {
                        return s.MONTH_JS.map(function(l) {
                            return new Date(2019, l).toLocaleString(i, {
                                month: "long"
                            })
                        })
                    }, s.formatPatterns = function(i, l) {
                        switch (i) {
                            case "YY":
                            case "YYYY":
                                return {
                                    group: "year",
                                    pattern: "(\\d{" + i.length + "})"
                                };
                            case "M":
                                return {
                                    group: "month",
                                    pattern: "(\\d{1,2})"
                                };
                            case "MM":
                                return {
                                    group: "month",
                                    pattern: "(\\d{2})"
                                };
                            case "MMM":
                                return {
                                    group: "shortMonth",
                                    pattern: "(" + s.shortMonths(l).join("|") + ")"
                                };
                            case "MMMM":
                                return {
                                    group: "longMonth",
                                    pattern: "(" + s.longMonths(l).join("|") + ")"
                                };
                            case "D":
                                return {
                                    group: "day",
                                    pattern: "(\\d{1,2})"
                                };
                            case "DD":
                                return {
                                    group: "day",
                                    pattern: "(\\d{2})"
                                }
                        }
                    }, s.prototype.toJSDate = function() {
                        return this.dateInstance
                    }, s.prototype.toLocaleString = function(i, l) {
                        return this.dateInstance.toLocaleString(i, l)
                    }, s.prototype.toDateString = function() {
                        return this.dateInstance.toDateString()
                    }, s.prototype.getSeconds = function() {
                        return this.dateInstance.getSeconds()
                    }, s.prototype.getDay = function() {
                        return this.dateInstance.getDay()
                    }, s.prototype.getTime = function() {
                        return this.dateInstance.getTime()
                    }, s.prototype.getDate = function() {
                        return this.dateInstance.getDate()
                    }, s.prototype.getMonth = function() {
                        return this.dateInstance.getMonth()
                    }, s.prototype.getFullYear = function() {
                        return this.dateInstance.getFullYear()
                    }, s.prototype.setMonth = function(i) {
                        return this.dateInstance.setMonth(i)
                    }, s.prototype.setHours = function(i, l, e, g) {
                        i === void 0 && (i = 0), l === void 0 && (l = 0), e === void 0 && (e = 0), g === void 0 && (g = 0), this.dateInstance.setHours(i, l, e, g)
                    }, s.prototype.setSeconds = function(i) {
                        return this.dateInstance.setSeconds(i)
                    }, s.prototype.setDate = function(i) {
                        return this.dateInstance.setDate(i)
                    }, s.prototype.setFullYear = function(i) {
                        return this.dateInstance.setFullYear(i)
                    }, s.prototype.getWeek = function(i) {
                        var l = new Date(this.timestamp()),
                            e = (this.getDay() + (7 - i)) % 7;
                        l.setDate(l.getDate() - e);
                        var g = l.getTime();
                        return l.setMonth(0, 1), l.getDay() !== i && l.setMonth(0, 1 + (4 - l.getDay() + 7) % 7), 1 + Math.ceil((g - l.getTime()) / 6048e5)
                    }, s.prototype.clone = function() {
                        return new s(this.toJSDate())
                    }, s.prototype.isBetween = function(i, l, e) {
                        switch (e === void 0 && (e = "()"), e) {
                            default:
                                case "()":
                                return this.timestamp() > i.getTime() && this.timestamp() < l.getTime();
                            case "[)":
                                    return this.timestamp() >= i.getTime() && this.timestamp() < l.getTime();
                            case "(]":
                                    return this.timestamp() > i.getTime() && this.timestamp() <= l.getTime();
                            case "[]":
                                    return this.timestamp() >= i.getTime() && this.timestamp() <= l.getTime()
                        }
                    }, s.prototype.isBefore = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            case "second":
                            case "seconds":
                                return i.getTime() > this.getTime();
                            case "day":
                            case "days":
                                return new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime() > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                            case "month":
                            case "months":
                                return new Date(i.getFullYear(), i.getMonth(), 1).getTime() > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
                            case "year":
                            case "years":
                                return i.getFullYear() > this.getFullYear()
                        }
                        throw new Error("isBefore: Invalid unit!")
                    }, s.prototype.isSameOrBefore = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            case "second":
                            case "seconds":
                                return i.getTime() >= this.getTime();
                            case "day":
                            case "days":
                                return new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime() >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                            case "month":
                            case "months":
                                return new Date(i.getFullYear(), i.getMonth(), 1).getTime() >= new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                        }
                        throw new Error("isSameOrBefore: Invalid unit!")
                    }, s.prototype.isAfter = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            case "second":
                            case "seconds":
                                return this.getTime() > i.getTime();
                            case "day":
                            case "days":
                                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() > new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
                            case "month":
                            case "months":
                                return new Date(this.getFullYear(), this.getMonth(), 1).getTime() > new Date(i.getFullYear(), i.getMonth(), 1).getTime();
                            case "year":
                            case "years":
                                return this.getFullYear() > i.getFullYear()
                        }
                        throw new Error("isAfter: Invalid unit!")
                    }, s.prototype.isSameOrAfter = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            case "second":
                            case "seconds":
                                return this.getTime() >= i.getTime();
                            case "day":
                            case "days":
                                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >= new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
                            case "month":
                            case "months":
                                return new Date(this.getFullYear(), this.getMonth(), 1).getTime() >= new Date(i.getFullYear(), i.getMonth(), 1).getTime()
                        }
                        throw new Error("isSameOrAfter: Invalid unit!")
                    }, s.prototype.isSame = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            case "second":
                            case "seconds":
                                return this.getTime() === i.getTime();
                            case "day":
                            case "days":
                                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() === new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
                            case "month":
                            case "months":
                                return new Date(this.getFullYear(), this.getMonth(), 1).getTime() === new Date(i.getFullYear(), i.getMonth(), 1).getTime()
                        }
                        throw new Error("isSame: Invalid unit!")
                    }, s.prototype.add = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            case "second":
                            case "seconds":
                                this.setSeconds(this.getSeconds() + i);
                                break;
                            case "day":
                            case "days":
                                this.setDate(this.getDate() + i);
                                break;
                            case "month":
                            case "months":
                                this.setMonth(this.getMonth() + i)
                        }
                        return this
                    }, s.prototype.subtract = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            case "second":
                            case "seconds":
                                this.setSeconds(this.getSeconds() - i);
                                break;
                            case "day":
                            case "days":
                                this.setDate(this.getDate() - i);
                                break;
                            case "month":
                            case "months":
                                this.setMonth(this.getMonth() - i)
                        }
                        return this
                    }, s.prototype.diff = function(i, l) {
                        switch (l === void 0 && (l = "seconds"), l) {
                            default:
                                case "second":
                                case "seconds":
                                return this.getTime() - i.getTime();
                            case "day":
                                    case "days":
                                    return Math.round((this.timestamp() - i.getTime()) / 864e5);
                            case "month":
                                    case "months":
                        }
                    }, s.prototype.format = function(i, l) {
                        if (l === void 0 && (l = "en-US"), typeof i == "object") return i.output(this.clone().toJSDate());
                        for (var e = "", g = [], w = null;
                            (w = s.regex.exec(i)) != null;) w[1] !== "\\" && g.push(w);
                        if (g.length) {
                            g[0].index > 0 && (e += i.substring(0, g[0].index));
                            for (var y = 0, v = Object.entries(g); y < v.length; y++) {
                                var n = v[y],
                                    t = n[0],
                                    c = n[1],
                                    u = Number(t);
                                e += this.formatTokens(c[0], l), g[u + 1] && (e += i.substring(c.index + c[0].length, g[u + 1].index)), u === g.length - 1 && (e += i.substring(c.index + c[0].length))
                            }
                        }
                        return e.replace(/\\/g, "")
                    }, s.prototype.timestamp = function() {
                        return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime()
                    }, s.prototype.formatTokens = function(i, l) {
                        switch (i) {
                            case "YY":
                                return String(this.getFullYear()).slice(-2);
                            case "YYYY":
                                return String(this.getFullYear());
                            case "M":
                                return String(this.getMonth() + 1);
                            case "MM":
                                return ("0" + (this.getMonth() + 1)).slice(-2);
                            case "MMM":
                                return s.shortMonths(l)[this.getMonth()];
                            case "MMMM":
                                return s.longMonths(l)[this.getMonth()];
                            case "D":
                                return String(this.getDate());
                            case "DD":
                                return ("0" + this.getDate()).slice(-2);
                            default:
                                return ""
                        }
                    }, s.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g, s.MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], s
                }();
                k.DateTime = d
            }, function(x, k, D) {
                "use strict";
                var d, s = this && this.__extends || (d = function(v, n) {
                        return (d = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, c) {
                                t.__proto__ = c
                            } || function(t, c) {
                                for (var u in c) c.hasOwnProperty(u) && (t[u] = c[u])
                            })(v, n)
                    }, function(v, n) {
                        function t() {
                            this.constructor = v
                        }
                        d(v, n), v.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t)
                    }),
                    i = this && this.__spreadArrays || function() {
                        for (var v = 0, n = 0, t = arguments.length; n < t; n++) v += arguments[n].length;
                        var c = Array(v),
                            u = 0;
                        for (n = 0; n < t; n++)
                            for (var r = arguments[n], o = 0, a = r.length; o < a; o++, u++) c[u] = r[o];
                        return c
                    };
                Object.defineProperty(k, "__esModule", {
                    value: !0
                });
                var l = D(5),
                    e = D(0),
                    g = D(3),
                    w = D(2),
                    y = function(v) {
                        function n(t) {
                            var c = v.call(this, t) || this;
                            return c.preventClick = !1, c.bindEvents(), c
                        }
                        return s(n, v), n.prototype.scrollToDate = function(t) {
                            if (this.options.scrollToDate) {
                                var c = this.options.startDate instanceof e.DateTime ? this.options.startDate.clone() : null,
                                    u = this.options.endDate instanceof e.DateTime ? this.options.endDate.clone() : null;
                                !this.options.startDate || t && t !== this.options.element ? t && this.options.endDate && t === this.options.elementEnd && (u.setDate(1), this.options.numberOfMonths > 1 && u.isAfter(c) && u.setMonth(u.getMonth() - (this.options.numberOfMonths - 1)), this.calendars[0] = u.clone()) : (c.setDate(1), this.calendars[0] = c.clone())
                            }
                        }, n.prototype.bindEvents = function() {
                            document.addEventListener("click", this.onClick.bind(this), !0), this.ui = document.createElement("div"), this.ui.className = g.litepicker, this.ui.style.display = "none", this.ui.addEventListener("mouseenter", this.onMouseEnter.bind(this), !0), this.ui.addEventListener("mouseleave", this.onMouseLeave.bind(this), !1), this.options.autoRefresh ? (this.options.element instanceof HTMLElement && this.options.element.addEventListener("keyup", this.onInput.bind(this), !0), this.options.elementEnd instanceof HTMLElement && this.options.elementEnd.addEventListener("keyup", this.onInput.bind(this), !0)) : (this.options.element instanceof HTMLElement && this.options.element.addEventListener("change", this.onInput.bind(this), !0), this.options.elementEnd instanceof HTMLElement && this.options.elementEnd.addEventListener("change", this.onInput.bind(this), !0)), this.options.parentEl ? this.options.parentEl instanceof HTMLElement ? this.options.parentEl.appendChild(this.ui) : document.querySelector(this.options.parentEl).appendChild(this.ui) : this.options.inlineMode ? this.options.element instanceof HTMLInputElement ? this.options.element.parentNode.appendChild(this.ui) : this.options.element.appendChild(this.ui) : document.body.appendChild(this.ui), this.updateInput(), this.init(), typeof this.options.setup == "function" && this.options.setup.call(this, this), this.render(), this.options.inlineMode && this.show()
                        }, n.prototype.updateInput = function() {
                            if (this.options.element instanceof HTMLInputElement) {
                                var t = this.options.startDate,
                                    c = this.options.endDate;
                                if (this.options.singleMode && t) this.options.element.value = t.format(this.options.format, this.options.lang);
                                else if (!this.options.singleMode && t && c) {
                                    var u = t.format(this.options.format, this.options.lang),
                                        r = c.format(this.options.format, this.options.lang);
                                    this.options.elementEnd instanceof HTMLInputElement ? (this.options.element.value = u, this.options.elementEnd.value = r) : this.options.element.value = "" + u + this.options.delimiter + r
                                }
                                t || c || (this.options.element.value = "", this.options.elementEnd instanceof HTMLInputElement && (this.options.elementEnd.value = ""))
                            }
                        }, n.prototype.isSamePicker = function(t) {
                            return t.closest("." + g.litepicker) === this.ui
                        }, n.prototype.shouldShown = function(t) {
                            return !t.disabled && (t === this.options.element || this.options.elementEnd && t === this.options.elementEnd)
                        }, n.prototype.shouldResetDatePicked = function() {
                            return this.options.singleMode || this.datePicked.length === 2
                        }, n.prototype.shouldSwapDatePicked = function() {
                            return this.datePicked.length === 2 && this.datePicked[0].getTime() > this.datePicked[1].getTime()
                        }, n.prototype.shouldCheckLockDays = function() {
                            return this.options.disallowLockDaysInRange && this.datePicked.length === 2
                        }, n.prototype.onClick = function(t) {
                            var c = t.target;
                            if (t.target.shadowRoot && (c = t.composedPath()[0]), c && this.ui)
                                if (this.shouldShown(c)) this.show(c);
                                else if (c.closest("." + g.litepicker) || !this.isShowning()) {
                                if (this.isSamePicker(c))
                                    if (this.emit("before:click", c), this.preventClick) this.preventClick = !1;
                                    else {
                                        if (c.classList.contains(g.dayItem)) {
                                            if (t.preventDefault(), c.classList.contains(g.isLocked)) return;
                                            if (this.shouldResetDatePicked() && (this.datePicked.length = 0), this.datePicked[this.datePicked.length] = new e.DateTime(c.dataset.time), this.shouldSwapDatePicked()) {
                                                var u = this.datePicked[1].clone();
                                                this.datePicked[1] = this.datePicked[0].clone(), this.datePicked[0] = u.clone()
                                            }
                                            return this.shouldCheckLockDays() && w.rangeIsLocked(this.datePicked, this.options) && (this.emit("error:range", this.datePicked), this.datePicked.length = 0), this.render(), this.emit.apply(this, i(["preselect"], i(this.datePicked).map(function(h) {
                                                return h.clone()
                                            }))), void(this.options.autoApply && (this.options.singleMode && this.datePicked.length ? (this.setDate(this.datePicked[0]), this.hide()) : this.options.singleMode || this.datePicked.length !== 2 || (this.setDateRange(this.datePicked[0], this.datePicked[1]), this.hide())))
                                        }
                                        if (c.classList.contains(g.buttonPreviousMonth)) {
                                            t.preventDefault();
                                            var r = 0,
                                                o = this.options.switchingMonths || this.options.numberOfMonths;
                                            if (this.options.splitView) {
                                                var a = c.closest("." + g.monthItem);
                                                r = w.findNestedMonthItem(a), o = 1
                                            }
                                            return this.calendars[r].setMonth(this.calendars[r].getMonth() - o), this.gotoDate(this.calendars[r], r), void this.emit("change:month", this.calendars[r], r)
                                        }
                                        if (c.classList.contains(g.buttonNextMonth)) return t.preventDefault(), r = 0, o = this.options.switchingMonths || this.options.numberOfMonths, this.options.splitView && (a = c.closest("." + g.monthItem), r = w.findNestedMonthItem(a), o = 1), this.calendars[r].setMonth(this.calendars[r].getMonth() + o), this.gotoDate(this.calendars[r], r), void this.emit("change:month", this.calendars[r], r);
                                        c.classList.contains(g.buttonCancel) && (t.preventDefault(), this.hide(), this.emit("button:cancel")), c.classList.contains(g.buttonApply) && (t.preventDefault(), this.options.singleMode && this.datePicked.length ? this.setDate(this.datePicked[0]) : this.options.singleMode || this.datePicked.length !== 2 || this.setDateRange(this.datePicked[0], this.datePicked[1]), this.hide(), this.emit("button:apply", this.options.startDate, this.options.endDate))
                                    }
                            } else this.hide()
                        }, n.prototype.showTooltip = function(t, c) {
                            var u = this.ui.querySelector("." + g.containerTooltip);
                            u.style.visibility = "visible", u.innerHTML = c;
                            var r = this.ui.getBoundingClientRect(),
                                o = u.getBoundingClientRect(),
                                a = t.getBoundingClientRect(),
                                h = a.top,
                                m = a.left;
                            if (this.options.inlineMode && this.options.parentEl) {
                                var p = this.ui.parentNode.getBoundingClientRect();
                                h -= p.top, m -= p.left
                            } else h -= r.top, m -= r.left;
                            h -= o.height, m -= o.width / 2, m += a.width / 2, u.style.top = h + "px", u.style.left = m + "px", this.emit("tooltip", u, t)
                        }, n.prototype.hideTooltip = function() {
                            this.ui.querySelector("." + g.containerTooltip).style.visibility = "hidden"
                        }, n.prototype.shouldAllowMouseEnter = function(t) {
                            return !this.options.singleMode && !t.classList.contains(g.isLocked)
                        }, n.prototype.shouldAllowRepick = function() {
                            return this.options.elementEnd && this.options.allowRepick && this.options.startDate && this.options.endDate
                        }, n.prototype.isDayItem = function(t) {
                            return t.classList.contains(g.dayItem)
                        }, n.prototype.onMouseEnter = function(t) {
                            var c = this,
                                u = t.target;
                            if (this.isDayItem(u) && this.shouldAllowMouseEnter(u)) {
                                if (this.shouldAllowRepick() && (this.triggerElement === this.options.element ? this.datePicked[0] = this.options.endDate.clone() : this.triggerElement === this.options.elementEnd && (this.datePicked[0] = this.options.startDate.clone())), this.datePicked.length !== 1) return;
                                var r = this.ui.querySelector("." + g.dayItem + '[data-time="' + this.datePicked[0].getTime() + '"]'),
                                    o = this.datePicked[0].clone(),
                                    a = new e.DateTime(u.dataset.time),
                                    h = !1;
                                if (o.getTime() > a.getTime()) {
                                    var m = o.clone();
                                    o = a.clone(), a = m.clone(), h = !0
                                }
                                if (Array.prototype.slice.call(this.ui.querySelectorAll("." + g.dayItem)).forEach(function(L) {
                                        var N = new e.DateTime(L.dataset.time),
                                            Y = c.renderDay(N);
                                        N.isBetween(o, a) && Y.classList.add(g.isInRange), L.className = Y.className
                                    }), u.classList.add(g.isEndDate), h ? (r && r.classList.add(g.isFlipped), u.classList.add(g.isFlipped)) : (r && r.classList.remove(g.isFlipped), u.classList.remove(g.isFlipped)), this.options.showTooltip) {
                                    var p = a.diff(o, "day") + 1;
                                    if (typeof this.options.tooltipNumber == "function" && (p = this.options.tooltipNumber.call(this, p)), p > 0) {
                                        var f = this.pluralSelector(p),
                                            b = p + " " + (this.options.tooltipText[f] ? this.options.tooltipText[f] : "[" + f + "]");
                                        this.showTooltip(u, b);
                                        var M = window.navigator.userAgent,
                                            _ = /(iphone|ipad)/i.test(M),
                                            T = /OS 1([0-2])/i.test(M);
                                        _ && T && u.dispatchEvent(new Event("click"))
                                    } else this.hideTooltip()
                                }
                            }
                        }, n.prototype.onMouseLeave = function(t) {
                            t.target, this.options.allowRepick && (!this.options.allowRepick || this.options.startDate || this.options.endDate) && (this.datePicked.length = 0, this.render())
                        }, n.prototype.onInput = function(t) {
                            var c = this.parseInput(),
                                u = c[0],
                                r = c[1],
                                o = this.options.format;
                            if (this.options.elementEnd ? u instanceof e.DateTime && r instanceof e.DateTime && u.format(o) === this.options.element.value && r.format(o) === this.options.elementEnd.value : this.options.singleMode ? u instanceof e.DateTime && u.format(o) === this.options.element.value : u instanceof e.DateTime && r instanceof e.DateTime && "" + u.format(o) + this.options.delimiter + r.format(o) === this.options.element.value) {
                                if (r && u.getTime() > r.getTime()) {
                                    var a = u.clone();
                                    u = r.clone(), r = a.clone()
                                }
                                this.options.startDate = new e.DateTime(u, this.options.format, this.options.lang), r && (this.options.endDate = new e.DateTime(r, this.options.format, this.options.lang)), this.updateInput(), this.render();
                                var h = u.clone(),
                                    m = 0;
                                (this.options.elementEnd ? u.format(o) === t.target.value : t.target.value.startsWith(u.format(o))) || (h = r.clone(), m = this.options.numberOfMonths - 1), this.emit("selected", this.getStartDate(), this.getEndDate()), this.gotoDate(h, m)
                            }
                        }, n
                    }(l.Calendar);
                k.Litepicker = y
            }, function(x, k, D) {
                "use strict";
                Object.defineProperty(k, "__esModule", {
                    value: !0
                }), k.findNestedMonthItem = function(d) {
                    for (var s = d.parentNode.childNodes, i = 0; i < s.length; i += 1)
                        if (s.item(i) === d) return i;
                    return 0
                }, k.dateIsLocked = function(d, s, i) {
                    var l = !1;
                    return s.lockDays.length && (l = s.lockDays.filter(function(e) {
                        return e instanceof Array ? d.isBetween(e[0], e[1], s.lockDaysInclusivity) : e.isSame(d, "day")
                    }).length), l || typeof s.lockDaysFilter != "function" || (l = s.lockDaysFilter.call(this, d.clone(), null, i)), l
                }, k.rangeIsLocked = function(d, s) {
                    var i = !1;
                    return s.lockDays.length && (i = s.lockDays.filter(function(l) {
                        if (l instanceof Array) {
                            var e = d[0].toDateString() === l[0].toDateString() && d[1].toDateString() === l[1].toDateString();
                            return l[0].isBetween(d[0], d[1], s.lockDaysInclusivity) || l[1].isBetween(d[0], d[1], s.lockDaysInclusivity) || e
                        }
                        return l.isBetween(d[0], d[1], s.lockDaysInclusivity)
                    }).length), i || typeof s.lockDaysFilter != "function" || (i = s.lockDaysFilter.call(this, d[0].clone(), d[1].clone(), d)), i
                }
            }, function(x, k, D) {
                var d = D(8);
                typeof d == "string" && (d = [
                    [x.i, d, ""]
                ]);
                var s = {
                    insert: function(i) {
                        var l = document.querySelector("head"),
                            e = window._lastElementInsertedByStyleLoader;
                        window.disableLitepickerStyles || (e ? e.nextSibling ? l.insertBefore(i, e.nextSibling) : l.appendChild(i) : l.insertBefore(i, l.firstChild), window._lastElementInsertedByStyleLoader = i)
                    },
                    singleton: !1
                };
                D(10)(d, s), d.locals && (x.exports = d.locals)
            }, function(x, k, D) {
                "use strict";
                Object.defineProperty(k, "__esModule", {
                    value: !0
                });
                var d = D(1);
                k.Litepicker = d.Litepicker, D(11), window.Litepicker = d.Litepicker, k.default = d.Litepicker
            }, function(x, k, D) {
                "use strict";
                var d, s = this && this.__extends || (d = function(y, v) {
                    return (d = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(n, t) {
                            n.__proto__ = t
                        } || function(n, t) {
                            for (var c in t) t.hasOwnProperty(c) && (n[c] = t[c])
                        })(y, v)
                }, function(y, v) {
                    function n() {
                        this.constructor = y
                    }
                    d(y, v), y.prototype = v === null ? Object.create(v) : (n.prototype = v.prototype, new n)
                });
                Object.defineProperty(k, "__esModule", {
                    value: !0
                });
                var i = D(6),
                    l = D(0),
                    e = D(3),
                    g = D(2),
                    w = function(y) {
                        function v(n) {
                            return y.call(this, n) || this
                        }
                        return s(v, y), v.prototype.render = function() {
                            var n = this;
                            this.emit("before:render", this.ui);
                            var t = document.createElement("div");
                            t.className = e.containerMain;
                            var c = document.createElement("div");
                            c.className = e.containerMonths, e["columns" + this.options.numberOfColumns] && (c.classList.remove(e.columns2, e.columns3, e.columns4), c.classList.add(e["columns" + this.options.numberOfColumns])), this.options.splitView && c.classList.add(e.splitView), this.options.showWeekNumbers && c.classList.add(e.showWeekNumbers);
                            for (var u = this.calendars[0].clone(), r = u.getMonth(), o = u.getMonth() + this.options.numberOfMonths, a = 0, h = r; h < o; h += 1) {
                                var m = u.clone();
                                m.setDate(1), m.setHours(0, 0, 0, 0), this.options.splitView ? m = this.calendars[a].clone() : m.setMonth(h), c.appendChild(this.renderMonth(m, a)), a += 1
                            }
                            if (this.ui.innerHTML = "", t.appendChild(c), this.options.resetButton) {
                                var p = void 0;
                                typeof this.options.resetButton == "function" ? p = this.options.resetButton.call(this) : ((p = document.createElement("button")).type = "button", p.className = e.resetButton, p.innerHTML = this.options.buttonText.reset), p.addEventListener("click", function(f) {
                                    f.preventDefault(), n.clearSelection()
                                }), t.querySelector("." + e.monthItem + ":last-child").querySelector("." + e.monthItemHeader).appendChild(p)
                            }
                            this.ui.appendChild(t), this.options.autoApply && !this.options.footerHTML || this.ui.appendChild(this.renderFooter()), this.options.showTooltip && this.ui.appendChild(this.renderTooltip()), this.ui.dataset.plugins = (this.options.plugins || []).join("|"), this.emit("render", this.ui)
                        }, v.prototype.renderMonth = function(n, t) {
                            var c = this,
                                u = n.clone(),
                                r = 32 - new Date(u.getFullYear(), u.getMonth(), 32).getDate(),
                                o = document.createElement("div");
                            o.className = e.monthItem;
                            var a = document.createElement("div");
                            a.className = e.monthItemHeader;
                            var h = document.createElement("div");
                            if (this.options.dropdowns.months) {
                                var m = document.createElement("select");
                                m.className = e.monthItemName;
                                for (var p = 0; p < 12; p += 1) {
                                    var f = document.createElement("option"),
                                        b = new l.DateTime(new Date(n.getFullYear(), p, 2, 0, 0, 0)),
                                        M = new l.DateTime(new Date(n.getFullYear(), p, 1, 0, 0, 0));
                                    f.value = String(p), f.text = b.toLocaleString(this.options.lang, {
                                        month: "long"
                                    }), f.disabled = this.options.minDate && M.isBefore(new l.DateTime(this.options.minDate), "month") || this.options.maxDate && M.isAfter(new l.DateTime(this.options.maxDate), "month"), f.selected = M.getMonth() === n.getMonth(), m.appendChild(f)
                                }
                                m.addEventListener("change", function(E) {
                                    var O = E.target,
                                        S = 0;
                                    if (c.options.splitView) {
                                        var z = O.closest("." + e.monthItem);
                                        S = g.findNestedMonthItem(z)
                                    }
                                    c.calendars[S].setMonth(Number(O.value)), c.render(), c.emit("change:month", c.calendars[S], S, E)
                                }), h.appendChild(m)
                            } else(b = document.createElement("strong")).className = e.monthItemName, b.innerHTML = n.toLocaleString(this.options.lang, {
                                month: "long"
                            }), h.appendChild(b);
                            if (this.options.dropdowns.years) {
                                var _ = document.createElement("select");
                                _.className = e.monthItemYear;
                                var T = this.options.dropdowns.minYear,
                                    L = this.options.dropdowns.maxYear ? this.options.dropdowns.maxYear : new Date().getFullYear();
                                for (n.getFullYear() > L && ((f = document.createElement("option")).value = String(n.getFullYear()), f.text = String(n.getFullYear()), f.selected = !0, f.disabled = !0, _.appendChild(f)), p = L; p >= T; p -= 1) {
                                    var f = document.createElement("option"),
                                        N = new l.DateTime(new Date(p, 0, 1, 0, 0, 0));
                                    f.value = String(p), f.text = String(p), f.disabled = this.options.minDate && N.isBefore(new l.DateTime(this.options.minDate), "year") || this.options.maxDate && N.isAfter(new l.DateTime(this.options.maxDate), "year"), f.selected = n.getFullYear() === p, _.appendChild(f)
                                }
                                if (n.getFullYear() < T && ((f = document.createElement("option")).value = String(n.getFullYear()), f.text = String(n.getFullYear()), f.selected = !0, f.disabled = !0, _.appendChild(f)), this.options.dropdowns.years === "asc") {
                                    var Y = Array.prototype.slice.call(_.childNodes).reverse();
                                    _.innerHTML = "", Y.forEach(function(E) {
                                        E.innerHTML = E.value, _.appendChild(E)
                                    })
                                }
                                _.addEventListener("change", function(E) {
                                    var O = E.target,
                                        S = 0;
                                    if (c.options.splitView) {
                                        var z = O.closest("." + e.monthItem);
                                        S = g.findNestedMonthItem(z)
                                    }
                                    c.calendars[S].setFullYear(Number(O.value)), c.render(), c.emit("change:year", c.calendars[S], S, E)
                                }), h.appendChild(_)
                            } else {
                                var A = document.createElement("span");
                                A.className = e.monthItemYear, A.innerHTML = String(n.getFullYear()), h.appendChild(A)
                            }
                            var C = document.createElement("button");
                            C.type = "button", C.className = e.buttonPreviousMonth, C.innerHTML = this.options.buttonText.previousMonth;
                            var F = document.createElement("button");
                            F.type = "button", F.className = e.buttonNextMonth, F.innerHTML = this.options.buttonText.nextMonth, a.appendChild(C), a.appendChild(h), a.appendChild(F), this.options.minDate && u.isSameOrBefore(new l.DateTime(this.options.minDate), "month") && o.classList.add(e.noPreviousMonth), this.options.maxDate && u.isSameOrAfter(new l.DateTime(this.options.maxDate), "month") && o.classList.add(e.noNextMonth);
                            var j = document.createElement("div");
                            j.className = e.monthItemWeekdaysRow, this.options.showWeekNumbers && (j.innerHTML = "<div>W</div>");
                            for (var R = 1; R <= 7; R += 1) {
                                var q = 3 + this.options.firstDay + R,
                                    B = document.createElement("div");
                                B.innerHTML = this.weekdayName(q), B.title = this.weekdayName(q, "long"), j.appendChild(B)
                            }
                            var P = document.createElement("div");
                            P.className = e.containerDays;
                            var U = this.calcSkipDays(u);
                            this.options.showWeekNumbers && U && P.appendChild(this.renderWeekNumber(u));
                            for (var I = 0; I < U; I += 1) {
                                var K = document.createElement("div");
                                P.appendChild(K)
                            }
                            for (I = 1; I <= r; I += 1) u.setDate(I), this.options.showWeekNumbers && u.getDay() === this.options.firstDay && P.appendChild(this.renderWeekNumber(u)), P.appendChild(this.renderDay(u));
                            return o.appendChild(a), o.appendChild(j), o.appendChild(P), this.emit("render:month", o, n), o
                        }, v.prototype.renderDay = function(n) {
                            n.setHours();
                            var t = document.createElement("div");
                            if (t.className = e.dayItem, t.innerHTML = String(n.getDate()), t.dataset.time = String(n.getTime()), n.toDateString() === new Date().toDateString() && t.classList.add(e.isToday), this.datePicked.length) this.datePicked[0].toDateString() === n.toDateString() && (t.classList.add(e.isStartDate), this.options.singleMode && t.classList.add(e.isEndDate)), this.datePicked.length === 2 && this.datePicked[1].toDateString() === n.toDateString() && t.classList.add(e.isEndDate), this.datePicked.length === 2 && n.isBetween(this.datePicked[0], this.datePicked[1]) && t.classList.add(e.isInRange);
                            else if (this.options.startDate) {
                                var c = this.options.startDate,
                                    u = this.options.endDate;
                                c.toDateString() === n.toDateString() && (t.classList.add(e.isStartDate), this.options.singleMode && t.classList.add(e.isEndDate)), u && u.toDateString() === n.toDateString() && t.classList.add(e.isEndDate), c && u && n.isBetween(c, u) && t.classList.add(e.isInRange)
                            }
                            if (this.options.minDate && n.isBefore(new l.DateTime(this.options.minDate)) && t.classList.add(e.isLocked), this.options.maxDate && n.isAfter(new l.DateTime(this.options.maxDate)) && t.classList.add(e.isLocked), this.options.minDays > 1 && this.datePicked.length === 1) {
                                var r = this.options.minDays - 1,
                                    o = this.datePicked[0].clone().subtract(r, "day"),
                                    a = this.datePicked[0].clone().add(r, "day");
                                n.isBetween(o, this.datePicked[0], "(]") && t.classList.add(e.isLocked), n.isBetween(this.datePicked[0], a, "[)") && t.classList.add(e.isLocked)
                            }
                            if (this.options.maxDays && this.datePicked.length === 1) {
                                var h = this.options.maxDays;
                                o = this.datePicked[0].clone().subtract(h, "day"), a = this.datePicked[0].clone().add(h, "day"), n.isSameOrBefore(o) && t.classList.add(e.isLocked), n.isSameOrAfter(a) && t.classList.add(e.isLocked)
                            }
                            return this.options.selectForward && this.datePicked.length === 1 && n.isBefore(this.datePicked[0]) && t.classList.add(e.isLocked), this.options.selectBackward && this.datePicked.length === 1 && n.isAfter(this.datePicked[0]) && t.classList.add(e.isLocked), g.dateIsLocked(n, this.options, this.datePicked) && t.classList.add(e.isLocked), this.options.highlightedDays.length && this.options.highlightedDays.filter(function(m) {
                                return m instanceof Array ? n.isBetween(m[0], m[1], "[]") : m.isSame(n, "day")
                            }).length && t.classList.add(e.isHighlighted), t.tabIndex = t.classList.contains("is-locked") ? -1 : 0, this.emit("render:day", t, n), t
                        }, v.prototype.renderFooter = function() {
                            var n = document.createElement("div");
                            if (n.className = e.containerFooter, this.options.footerHTML ? n.innerHTML = this.options.footerHTML : n.innerHTML = `
      <span class="` + e.previewDateRange + `"></span>
      <button type="button" class="` + e.buttonCancel + '">' + this.options.buttonText.cancel + `</button>
      <button type="button" class="` + e.buttonApply + '">' + this.options.buttonText.apply + `</button>
      `, this.options.singleMode) {
                                if (this.datePicked.length === 1) {
                                    var t = this.datePicked[0].format(this.options.format, this.options.lang);
                                    n.querySelector("." + e.previewDateRange).innerHTML = t
                                }
                            } else if (this.datePicked.length === 1 && n.querySelector("." + e.buttonApply).setAttribute("disabled", ""), this.datePicked.length === 2) {
                                t = this.datePicked[0].format(this.options.format, this.options.lang);
                                var c = this.datePicked[1].format(this.options.format, this.options.lang);
                                n.querySelector("." + e.previewDateRange).innerHTML = "" + t + this.options.delimiter + c
                            }
                            return this.emit("render:footer", n), n
                        }, v.prototype.renderWeekNumber = function(n) {
                            var t = document.createElement("div"),
                                c = n.getWeek(this.options.firstDay);
                            return t.className = e.weekNumber, t.innerHTML = c === 53 && n.getMonth() === 0 ? "53 / 1" : c, t
                        }, v.prototype.renderTooltip = function() {
                            var n = document.createElement("div");
                            return n.className = e.containerTooltip, n
                        }, v.prototype.weekdayName = function(n, t) {
                            return t === void 0 && (t = "short"), new Date(1970, 0, n, 12, 0, 0, 0).toLocaleString(this.options.lang, {
                                weekday: t
                            })
                        }, v.prototype.calcSkipDays = function(n) {
                            var t = n.getDay() - this.options.firstDay;
                            return t < 0 && (t += 7), t
                        }, v
                    }(i.LPCore);
                k.Calendar = w
            }, function(x, k, D) {
                "use strict";
                var d, s = this && this.__extends || (d = function(y, v) {
                        return (d = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(n, t) {
                                n.__proto__ = t
                            } || function(n, t) {
                                for (var c in t) t.hasOwnProperty(c) && (n[c] = t[c])
                            })(y, v)
                    }, function(y, v) {
                        function n() {
                            this.constructor = y
                        }
                        d(y, v), y.prototype = v === null ? Object.create(v) : (n.prototype = v.prototype, new n)
                    }),
                    i = this && this.__assign || function() {
                        return (i = Object.assign || function(y) {
                            for (var v, n = 1, t = arguments.length; n < t; n++)
                                for (var c in v = arguments[n]) Object.prototype.hasOwnProperty.call(v, c) && (y[c] = v[c]);
                            return y
                        }).apply(this, arguments)
                    };
                Object.defineProperty(k, "__esModule", {
                    value: !0
                });
                var l = D(7),
                    e = D(0),
                    g = D(1),
                    w = function(y) {
                        function v(n) {
                            var t = y.call(this) || this;
                            t.datePicked = [], t.calendars = [], t.options = {
                                element: null,
                                elementEnd: null,
                                parentEl: null,
                                firstDay: 1,
                                format: "YYYY-MM-DD",
                                lang: "en-US",
                                delimiter: " - ",
                                numberOfMonths: 1,
                                numberOfColumns: 1,
                                startDate: null,
                                endDate: null,
                                zIndex: 9999,
                                position: "auto",
                                selectForward: !1,
                                selectBackward: !1,
                                splitView: !1,
                                inlineMode: !1,
                                singleMode: !0,
                                autoApply: !0,
                                allowRepick: !1,
                                showWeekNumbers: !1,
                                showTooltip: !0,
                                scrollToDate: !0,
                                mobileFriendly: !0,
                                resetButton: !1,
                                autoRefresh: !1,
                                lockDaysFormat: "YYYY-MM-DD",
                                lockDays: [],
                                disallowLockDaysInRange: !1,
                                lockDaysInclusivity: "[]",
                                highlightedDaysFormat: "YYYY-MM-DD",
                                highlightedDays: [],
                                dropdowns: {
                                    minYear: 1990,
                                    maxYear: null,
                                    months: !1,
                                    years: !1
                                },
                                buttonText: {
                                    apply: "Apply",
                                    cancel: "Cancel",
                                    previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                                    nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                                    reset: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
      </svg>`
                                },
                                tooltipText: {
                                    one: "day",
                                    other: "days"
                                }
                            }, t.options = i(i({}, t.options), n.element.dataset), Object.keys(t.options).forEach(function(T) {
                                t.options[T] !== "true" && t.options[T] !== "false" || (t.options[T] = t.options[T] === "true")
                            });
                            var c = i(i({}, t.options.dropdowns), n.dropdowns),
                                u = i(i({}, t.options.buttonText), n.buttonText),
                                r = i(i({}, t.options.tooltipText), n.tooltipText);
                            t.options = i(i({}, t.options), n), t.options.dropdowns = i({}, c), t.options.buttonText = i({}, u), t.options.tooltipText = i({}, r), t.options.elementEnd || (t.options.allowRepick = !1), t.options.lockDays.length && (t.options.lockDays = e.DateTime.convertArray(t.options.lockDays, t.options.lockDaysFormat)), t.options.highlightedDays.length && (t.options.highlightedDays = e.DateTime.convertArray(t.options.highlightedDays, t.options.highlightedDaysFormat));
                            var o = t.parseInput(),
                                a = o[0],
                                h = o[1];
                            t.options.startDate && (t.options.singleMode || t.options.endDate) && (a = new e.DateTime(t.options.startDate, t.options.format, t.options.lang)), a && t.options.endDate && (h = new e.DateTime(t.options.endDate, t.options.format, t.options.lang)), a instanceof e.DateTime && !isNaN(a.getTime()) && (t.options.startDate = a), t.options.startDate && h instanceof e.DateTime && !isNaN(h.getTime()) && (t.options.endDate = h), !t.options.singleMode || t.options.startDate instanceof e.DateTime || (t.options.startDate = null), t.options.singleMode || t.options.startDate instanceof e.DateTime && t.options.endDate instanceof e.DateTime || (t.options.startDate = null, t.options.endDate = null);
                            for (var m = 0; m < t.options.numberOfMonths; m += 1) {
                                var p = t.options.startDate instanceof e.DateTime ? t.options.startDate.clone() : new e.DateTime;
                                if (!t.options.startDate && (m === 0 || t.options.splitView)) {
                                    var f = t.options.maxDate ? new e.DateTime(t.options.maxDate) : null,
                                        b = t.options.minDate ? new e.DateTime(t.options.minDate) : null,
                                        M = t.options.numberOfMonths - 1;
                                    b && f && p.isAfter(f) ? (p = b.clone()).setDate(1) : !b && f && p.isAfter(f) && ((p = f.clone()).setDate(1), p.setMonth(p.getMonth() - M))
                                }
                                p.setDate(1), p.setMonth(p.getMonth() + m), t.calendars[m] = p
                            }
                            if (t.options.showTooltip)
                                if (t.options.tooltipPluralSelector) t.pluralSelector = t.options.tooltipPluralSelector;
                                else try {
                                    var _ = new Intl.PluralRules(t.options.lang);
                                    t.pluralSelector = _.select.bind(_)
                                } catch {
                                    t.pluralSelector = function(L) {
                                        return Math.abs(L) === 0 ? "one" : "other"
                                    }
                                }
                            return t
                        }
                        return s(v, y), v.add = function(n, t) {
                            g.Litepicker.prototype[n] = t
                        }, v.prototype.DateTime = function(n, t) {
                            return n ? new e.DateTime(n, t) : new e.DateTime
                        }, v.prototype.init = function() {
                            var n = this;
                            this.options.plugins && this.options.plugins.length && this.options.plugins.forEach(function(t) {
                                g.Litepicker.prototype.hasOwnProperty(t) ? g.Litepicker.prototype[t].init.call(n, n) : console.warn("Litepicker: plugin \xAB" + t + "\xBB not found.")
                            })
                        }, v.prototype.parseInput = function() {
                            var n = this.options.delimiter,
                                t = new RegExp("" + n),
                                c = this.options.element instanceof HTMLInputElement ? this.options.element.value.split(n) : [];
                            if (this.options.elementEnd) {
                                if (this.options.element instanceof HTMLInputElement && this.options.element.value.length && this.options.elementEnd instanceof HTMLInputElement && this.options.elementEnd.value.length) return [new e.DateTime(this.options.element.value, this.options.format), new e.DateTime(this.options.elementEnd.value, this.options.format)]
                            } else if (this.options.singleMode) {
                                if (this.options.element instanceof HTMLInputElement && this.options.element.value.length) return [new e.DateTime(this.options.element.value, this.options.format)]
                            } else if (this.options.element instanceof HTMLInputElement && t.test(this.options.element.value) && c.length && c.length % 2 == 0) {
                                var u = c.slice(0, c.length / 2).join(n),
                                    r = c.slice(c.length / 2).join(n);
                                return [new e.DateTime(u, this.options.format), new e.DateTime(r, this.options.format)]
                            }
                            return []
                        }, v.prototype.isShowning = function() {
                            return this.ui && this.ui.style.display !== "none"
                        }, v.prototype.findPosition = function(n) {
                            var t = n.getBoundingClientRect(),
                                c = this.ui.getBoundingClientRect(),
                                u = this.options.position.split(" "),
                                r = window.scrollX || window.pageXOffset,
                                o = window.scrollY || window.pageYOffset,
                                a = 0,
                                h = 0;
                            if (u[0] !== "auto" && /top|bottom/.test(u[0])) a = t[u[0]] + o, u[0] === "top" && (a -= c.height);
                            else {
                                a = t.bottom + o;
                                var m = t.bottom + c.height > window.innerHeight,
                                    p = t.top + o - c.height >= c.height;
                                m && p && (a = t.top + o - c.height)
                            }
                            if (/left|right/.test(u[0]) || u[1] && u[1] !== "auto" && /left|right/.test(u[1])) h = /left|right/.test(u[0]) ? t[u[0]] + r : t[u[1]] + r, u[0] !== "right" && u[1] !== "right" || (h -= c.width);
                            else {
                                h = t.left + r, m = t.left + c.width > window.innerWidth;
                                var f = t.right + r - c.width >= 0;
                                m && f && (h = t.right + r - c.width)
                            }
                            return {
                                left: h,
                                top: a
                            }
                        }, v
                    }(l.EventEmitter);
                k.LPCore = w
            }, function(x, k, D) {
                "use strict";
                var d, s = typeof Reflect == "object" ? Reflect : null,
                    i = s && typeof s.apply == "function" ? s.apply : function(r, o, a) {
                        return Function.prototype.apply.call(r, o, a)
                    };
                d = s && typeof s.ownKeys == "function" ? s.ownKeys : Object.getOwnPropertySymbols ? function(r) {
                    return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))
                } : function(r) {
                    return Object.getOwnPropertyNames(r)
                };
                var l = Number.isNaN || function(r) {
                    return r != r
                };

                function e() {
                    e.init.call(this)
                }
                x.exports = e, e.EventEmitter = e, e.prototype._events = void 0, e.prototype._eventsCount = 0, e.prototype._maxListeners = void 0;
                var g = 10;

                function w(r) {
                    return r._maxListeners === void 0 ? e.defaultMaxListeners : r._maxListeners
                }

                function y(r, o, a, h) {
                    var m, p, f, b;
                    if (typeof a != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof a);
                    if ((p = r._events) === void 0 ? (p = r._events = Object.create(null), r._eventsCount = 0) : (p.newListener !== void 0 && (r.emit("newListener", o, a.listener ? a.listener : a), p = r._events), f = p[o]), f === void 0) f = p[o] = a, ++r._eventsCount;
                    else if (typeof f == "function" ? f = p[o] = h ? [a, f] : [f, a] : h ? f.unshift(a) : f.push(a), (m = w(r)) > 0 && f.length > m && !f.warned) {
                        f.warned = !0;
                        var M = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(o) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        M.name = "MaxListenersExceededWarning", M.emitter = r, M.type = o, M.count = f.length, b = M, console && console.warn && console.warn(b)
                    }
                    return r
                }

                function v() {
                    for (var r = [], o = 0; o < arguments.length; o++) r.push(arguments[o]);
                    this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, i(this.listener, this.target, r))
                }

                function n(r, o, a) {
                    var h = {
                            fired: !1,
                            wrapFn: void 0,
                            target: r,
                            type: o,
                            listener: a
                        },
                        m = v.bind(h);
                    return m.listener = a, h.wrapFn = m, m
                }

                function t(r, o, a) {
                    var h = r._events;
                    if (h === void 0) return [];
                    var m = h[o];
                    return m === void 0 ? [] : typeof m == "function" ? a ? [m.listener || m] : [m] : a ? function(p) {
                        for (var f = new Array(p.length), b = 0; b < f.length; ++b) f[b] = p[b].listener || p[b];
                        return f
                    }(m) : u(m, m.length)
                }

                function c(r) {
                    var o = this._events;
                    if (o !== void 0) {
                        var a = o[r];
                        if (typeof a == "function") return 1;
                        if (a !== void 0) return a.length
                    }
                    return 0
                }

                function u(r, o) {
                    for (var a = new Array(o), h = 0; h < o; ++h) a[h] = r[h];
                    return a
                }
                Object.defineProperty(e, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function() {
                        return g
                    },
                    set: function(r) {
                        if (typeof r != "number" || r < 0 || l(r)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
                        g = r
                    }
                }), e.init = function() {
                    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                }, e.prototype.setMaxListeners = function(r) {
                    if (typeof r != "number" || r < 0 || l(r)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
                    return this._maxListeners = r, this
                }, e.prototype.getMaxListeners = function() {
                    return w(this)
                }, e.prototype.emit = function(r) {
                    for (var o = [], a = 1; a < arguments.length; a++) o.push(arguments[a]);
                    var h = r === "error",
                        m = this._events;
                    if (m !== void 0) h = h && m.error === void 0;
                    else if (!h) return !1;
                    if (h) {
                        var p;
                        if (o.length > 0 && (p = o[0]), p instanceof Error) throw p;
                        var f = new Error("Unhandled error." + (p ? " (" + p.message + ")" : ""));
                        throw f.context = p, f
                    }
                    var b = m[r];
                    if (b === void 0) return !1;
                    if (typeof b == "function") i(b, this, o);
                    else {
                        var M = b.length,
                            _ = u(b, M);
                        for (a = 0; a < M; ++a) i(_[a], this, o)
                    }
                    return !0
                }, e.prototype.addListener = function(r, o) {
                    return y(this, r, o, !1)
                }, e.prototype.on = e.prototype.addListener, e.prototype.prependListener = function(r, o) {
                    return y(this, r, o, !0)
                }, e.prototype.once = function(r, o) {
                    if (typeof o != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o);
                    return this.on(r, n(this, r, o)), this
                }, e.prototype.prependOnceListener = function(r, o) {
                    if (typeof o != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o);
                    return this.prependListener(r, n(this, r, o)), this
                }, e.prototype.removeListener = function(r, o) {
                    var a, h, m, p, f;
                    if (typeof o != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o);
                    if ((h = this._events) === void 0) return this;
                    if ((a = h[r]) === void 0) return this;
                    if (a === o || a.listener === o) --this._eventsCount == 0 ? this._events = Object.create(null) : (delete h[r], h.removeListener && this.emit("removeListener", r, a.listener || o));
                    else if (typeof a != "function") {
                        for (m = -1, p = a.length - 1; p >= 0; p--)
                            if (a[p] === o || a[p].listener === o) {
                                f = a[p].listener, m = p;
                                break
                            }
                        if (m < 0) return this;
                        m === 0 ? a.shift() : function(b, M) {
                            for (; M + 1 < b.length; M++) b[M] = b[M + 1];
                            b.pop()
                        }(a, m), a.length === 1 && (h[r] = a[0]), h.removeListener !== void 0 && this.emit("removeListener", r, f || o)
                    }
                    return this
                }, e.prototype.off = e.prototype.removeListener, e.prototype.removeAllListeners = function(r) {
                    var o, a, h;
                    if ((a = this._events) === void 0) return this;
                    if (a.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : a[r] !== void 0 && (--this._eventsCount == 0 ? this._events = Object.create(null) : delete a[r]), this;
                    if (arguments.length === 0) {
                        var m, p = Object.keys(a);
                        for (h = 0; h < p.length; ++h)(m = p[h]) !== "removeListener" && this.removeAllListeners(m);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                    }
                    if (typeof(o = a[r]) == "function") this.removeListener(r, o);
                    else if (o !== void 0)
                        for (h = o.length - 1; h >= 0; h--) this.removeListener(r, o[h]);
                    return this
                }, e.prototype.listeners = function(r) {
                    return t(this, r, !0)
                }, e.prototype.rawListeners = function(r) {
                    return t(this, r, !1)
                }, e.listenerCount = function(r, o) {
                    return typeof r.listenerCount == "function" ? r.listenerCount(o) : c.call(r, o)
                }, e.prototype.listenerCount = c, e.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? d(this._events) : []
                }
            }, function(x, k, D) {
                (k = D(9)(!1)).push([x.i, `:root{--litepicker-container-months-color-bg: #fff;--litepicker-container-months-box-shadow-color: #ddd;--litepicker-footer-color-bg: #fafafa;--litepicker-footer-box-shadow-color: #ddd;--litepicker-tooltip-color-bg: #fff;--litepicker-month-header-color: #333;--litepicker-button-prev-month-color: #9e9e9e;--litepicker-button-next-month-color: #9e9e9e;--litepicker-button-prev-month-color-hover: #2196f3;--litepicker-button-next-month-color-hover: #2196f3;--litepicker-month-width: calc(var(--litepicker-day-width) * 7);--litepicker-month-weekday-color: #9e9e9e;--litepicker-month-week-number-color: #9e9e9e;--litepicker-day-width: 38px;--litepicker-day-color: #333;--litepicker-day-color-hover: #2196f3;--litepicker-is-today-color: #f44336;--litepicker-is-in-range-color: #bbdefb;--litepicker-is-locked-color: #9e9e9e;--litepicker-is-start-color: #fff;--litepicker-is-start-color-bg: #2196f3;--litepicker-is-end-color: #fff;--litepicker-is-end-color-bg: #2196f3;--litepicker-button-cancel-color: #fff;--litepicker-button-cancel-color-bg: #9e9e9e;--litepicker-button-apply-color: #fff;--litepicker-button-apply-color-bg: #2196f3;--litepicker-button-reset-color: #909090;--litepicker-button-reset-color-hover: #2196f3;--litepicker-highlighted-day-color: #333;--litepicker-highlighted-day-color-bg: #ffeb3b}.show-week-numbers{--litepicker-month-width: calc(var(--litepicker-day-width) * 8)}.litepicker{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;font-size:0.8em;display:none}.litepicker button{border:none;background:none}.litepicker .container__main{display:-webkit-box;display:-ms-flexbox;display:flex}.litepicker .container__months{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:var(--litepicker-container-months-color-bg);border-radius:5px;-webkit-box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);width:calc(var(--litepicker-month-width) + 10px);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months.columns-2{width:calc((var(--litepicker-month-width) * 2) + 20px)}.litepicker .container__months.columns-3{width:calc((var(--litepicker-month-width) * 3) + 30px)}.litepicker .container__months.columns-4{width:calc((var(--litepicker-month-width) * 4) + 40px)}.litepicker .container__months.split-view .month-item-header .button-previous-month,.litepicker .container__months.split-view .month-item-header .button-next-month{visibility:visible}.litepicker .container__months .month-item{padding:5px;width:var(--litepicker-month-width);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months .month-item-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-weight:500;padding:10px 5px;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--litepicker-month-header-color)}.litepicker .container__months .month-item-header div{-webkit-box-flex:1;-ms-flex:1;flex:1}.litepicker .container__months .month-item-header div>.month-item-name{margin-right:5px}.litepicker .container__months .month-item-header div>.month-item-year{padding:0}.litepicker .container__months .month-item-header .reset-button{color:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button>svg{fill:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button *{pointer-events:none}.litepicker .container__months .month-item-header .reset-button:hover{color:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .reset-button:hover>svg{fill:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .button-previous-month,.litepicker .container__months .month-item-header .button-next-month{visibility:hidden;text-decoration:none;padding:3px 5px;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__months .month-item-header .button-previous-month *,.litepicker .container__months .month-item-header .button-next-month *{pointer-events:none}.litepicker .container__months .month-item-header .button-previous-month{color:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month>svg,.litepicker .container__months .month-item-header .button-previous-month>img{fill:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month:hover{color:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-previous-month:hover>svg{fill:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month{color:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month>svg,.litepicker .container__months .month-item-header .button-next-month>img{fill:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month:hover{color:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month:hover>svg{fill:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-weekdays-row{display:-webkit-box;display:-ms-flexbox;display:flex;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:var(--litepicker-month-weekday-color)}.litepicker .container__months .month-item-weekdays-row>div{padding:5px 0;font-size:85%;-webkit-box-flex:1;-ms-flex:1;flex:1;width:var(--litepicker-day-width);text-align:center}.litepicker .container__months .month-item:first-child .button-previous-month{visibility:visible}.litepicker .container__months .month-item:last-child .button-next-month{visibility:visible}.litepicker .container__months .month-item.no-previous-month .button-previous-month{visibility:hidden}.litepicker .container__months .month-item.no-next-month .button-next-month{visibility:hidden}.litepicker .container__days{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__days>div,.litepicker .container__days>a{padding:5px 0;width:var(--litepicker-day-width)}.litepicker .container__days .day-item{color:var(--litepicker-day-color);text-align:center;text-decoration:none;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__days .day-item:hover{color:var(--litepicker-day-color-hover);-webkit-box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover);box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover)}.litepicker .container__days .day-item.is-today{color:var(--litepicker-is-today-color)}.litepicker .container__days .day-item.is-locked{color:var(--litepicker-is-locked-color)}.litepicker .container__days .day-item.is-locked:hover{color:var(--litepicker-is-locked-color);-webkit-box-shadow:none;box-shadow:none;cursor:default}.litepicker .container__days .day-item.is-in-range{background-color:var(--litepicker-is-in-range-color);border-radius:0}.litepicker .container__days .day-item.is-start-date{color:var(--litepicker-is-start-color);background-color:var(--litepicker-is-start-color-bg);border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-flipped{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date{color:var(--litepicker-is-end-color);background-color:var(--litepicker-is-end-color-bg);border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date.is-flipped{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-end-date{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-highlighted{color:var(--litepicker-highlighted-day-color);background-color:var(--litepicker-highlighted-day-color-bg)}.litepicker .container__days .week-number{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--litepicker-month-week-number-color);font-size:85%}.litepicker .container__footer{text-align:right;padding:10px 5px;margin:0 5px;background-color:var(--litepicker-footer-color-bg);-webkit-box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.litepicker .container__footer .preview-date-range{margin-right:10px;font-size:90%}.litepicker .container__footer .button-cancel{background-color:var(--litepicker-button-cancel-color-bg);color:var(--litepicker-button-cancel-color);border:0;padding:3px 7px 4px;border-radius:3px}.litepicker .container__footer .button-cancel *{pointer-events:none}.litepicker .container__footer .button-apply{background-color:var(--litepicker-button-apply-color-bg);color:var(--litepicker-button-apply-color);border:0;padding:3px 7px 4px;border-radius:3px;margin-left:10px;margin-right:10px}.litepicker .container__footer .button-apply:disabled{opacity:0.7}.litepicker .container__footer .button-apply *{pointer-events:none}.litepicker .container__tooltip{position:absolute;margin-top:-4px;padding:4px 8px;border-radius:4px;background-color:var(--litepicker-tooltip-color-bg);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.25);box-shadow:0 1px 3px rgba(0,0,0,0.25);white-space:nowrap;font-size:11px;pointer-events:none;visibility:hidden}.litepicker .container__tooltip:before{position:absolute;bottom:-5px;left:calc(50% - 5px);border-top:5px solid rgba(0,0,0,0.12);border-right:5px solid transparent;border-left:5px solid transparent;content:""}.litepicker .container__tooltip:after{position:absolute;bottom:-4px;left:calc(50% - 4px);border-top:4px solid var(--litepicker-tooltip-color-bg);border-right:4px solid transparent;border-left:4px solid transparent;content:""}
`, ""]), k.locals = {
                    showWeekNumbers: "show-week-numbers",
                    litepicker: "litepicker",
                    containerMain: "container__main",
                    containerMonths: "container__months",
                    columns2: "columns-2",
                    columns3: "columns-3",
                    columns4: "columns-4",
                    splitView: "split-view",
                    monthItemHeader: "month-item-header",
                    buttonPreviousMonth: "button-previous-month",
                    buttonNextMonth: "button-next-month",
                    monthItem: "month-item",
                    monthItemName: "month-item-name",
                    monthItemYear: "month-item-year",
                    resetButton: "reset-button",
                    monthItemWeekdaysRow: "month-item-weekdays-row",
                    noPreviousMonth: "no-previous-month",
                    noNextMonth: "no-next-month",
                    containerDays: "container__days",
                    dayItem: "day-item",
                    isToday: "is-today",
                    isLocked: "is-locked",
                    isInRange: "is-in-range",
                    isStartDate: "is-start-date",
                    isFlipped: "is-flipped",
                    isEndDate: "is-end-date",
                    isHighlighted: "is-highlighted",
                    weekNumber: "week-number",
                    containerFooter: "container__footer",
                    previewDateRange: "preview-date-range",
                    buttonCancel: "button-cancel",
                    buttonApply: "button-apply",
                    containerTooltip: "container__tooltip"
                }, x.exports = k
            }, function(x, k, D) {
                "use strict";
                x.exports = function(d) {
                    var s = [];
                    return s.toString = function() {
                        return this.map(function(i) {
                            var l = function(e, g) {
                                var w = e[1] || "",
                                    y = e[3];
                                if (!y) return w;
                                if (g && typeof btoa == "function") {
                                    var v = (t = y, c = btoa(unescape(encodeURIComponent(JSON.stringify(t)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(u, " */")),
                                        n = y.sources.map(function(r) {
                                            return "/*# sourceURL=".concat(y.sourceRoot || "").concat(r, " */")
                                        });
                                    return [w].concat(n).concat([v]).join(`
`)
                                }
                                var t, c, u;
                                return [w].join(`
`)
                            }(i, d);
                            return i[2] ? "@media ".concat(i[2], " {").concat(l, "}") : l
                        }).join("")
                    }, s.i = function(i, l, e) {
                        typeof i == "string" && (i = [
                            [null, i, ""]
                        ]);
                        var g = {};
                        if (e)
                            for (var w = 0; w < this.length; w++) {
                                var y = this[w][0];
                                y != null && (g[y] = !0)
                            }
                        for (var v = 0; v < i.length; v++) {
                            var n = [].concat(i[v]);
                            e && g[n[0]] || (l && (n[2] ? n[2] = "".concat(l, " and ").concat(n[2]) : n[2] = l), s.push(n))
                        }
                    }, s
                }
            }, function(x, k, D) {
                "use strict";
                var d, s = {},
                    i = function() {
                        return d === void 0 && (d = !!(window && document && document.all && !window.atob)), d
                    },
                    l = function() {
                        var o = {};
                        return function(a) {
                            if (o[a] === void 0) {
                                var h = document.querySelector(a);
                                if (window.HTMLIFrameElement && h instanceof window.HTMLIFrameElement) try {
                                    h = h.contentDocument.head
                                } catch {
                                    h = null
                                }
                                o[a] = h
                            }
                            return o[a]
                        }
                    }();

                function e(o, a) {
                    for (var h = [], m = {}, p = 0; p < o.length; p++) {
                        var f = o[p],
                            b = a.base ? f[0] + a.base : f[0],
                            M = {
                                css: f[1],
                                media: f[2],
                                sourceMap: f[3]
                            };
                        m[b] ? m[b].parts.push(M) : h.push(m[b] = {
                            id: b,
                            parts: [M]
                        })
                    }
                    return h
                }

                function g(o, a) {
                    for (var h = 0; h < o.length; h++) {
                        var m = o[h],
                            p = s[m.id],
                            f = 0;
                        if (p) {
                            for (p.refs++; f < p.parts.length; f++) p.parts[f](m.parts[f]);
                            for (; f < m.parts.length; f++) p.parts.push(r(m.parts[f], a))
                        } else {
                            for (var b = []; f < m.parts.length; f++) b.push(r(m.parts[f], a));
                            s[m.id] = {
                                id: m.id,
                                refs: 1,
                                parts: b
                            }
                        }
                    }
                }

                function w(o) {
                    var a = document.createElement("style");
                    if (o.attributes.nonce === void 0) {
                        var h = D.nc;
                        h && (o.attributes.nonce = h)
                    }
                    if (Object.keys(o.attributes).forEach(function(p) {
                            a.setAttribute(p, o.attributes[p])
                        }), typeof o.insert == "function") o.insert(a);
                    else {
                        var m = l(o.insert || "head");
                        if (!m) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        m.appendChild(a)
                    }
                    return a
                }
                var y, v = (y = [], function(o, a) {
                    return y[o] = a, y.filter(Boolean).join(`
`)
                });

                function n(o, a, h, m) {
                    var p = h ? "" : m.css;
                    if (o.styleSheet) o.styleSheet.cssText = v(a, p);
                    else {
                        var f = document.createTextNode(p),
                            b = o.childNodes;
                        b[a] && o.removeChild(b[a]), b.length ? o.insertBefore(f, b[a]) : o.appendChild(f)
                    }
                }

                function t(o, a, h) {
                    var m = h.css,
                        p = h.media,
                        f = h.sourceMap;
                    if (p && o.setAttribute("media", p), f && btoa && (m += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))), " */")), o.styleSheet) o.styleSheet.cssText = m;
                    else {
                        for (; o.firstChild;) o.removeChild(o.firstChild);
                        o.appendChild(document.createTextNode(m))
                    }
                }
                var c = null,
                    u = 0;

                function r(o, a) {
                    var h, m, p;
                    if (a.singleton) {
                        var f = u++;
                        h = c || (c = w(a)), m = n.bind(null, h, f, !1), p = n.bind(null, h, f, !0)
                    } else h = w(a), m = t.bind(null, h, a), p = function() {
                        (function(b) {
                            if (b.parentNode === null) return !1;
                            b.parentNode.removeChild(b)
                        })(h)
                    };
                    return m(o),
                        function(b) {
                            if (b) {
                                if (b.css === o.css && b.media === o.media && b.sourceMap === o.sourceMap) return;
                                m(o = b)
                            } else p()
                        }
                }
                x.exports = function(o, a) {
                    (a = a || {}).attributes = typeof a.attributes == "object" ? a.attributes : {}, a.singleton || typeof a.singleton == "boolean" || (a.singleton = i());
                    var h = e(o, a);
                    return g(h, a),
                        function(m) {
                            for (var p = [], f = 0; f < h.length; f++) {
                                var b = h[f],
                                    M = s[b.id];
                                M && (M.refs--, p.push(M))
                            }
                            m && g(e(m, a), a);
                            for (var _ = 0; _ < p.length; _++) {
                                var T = p[_];
                                if (T.refs === 0) {
                                    for (var L = 0; L < T.parts.length; L++) T.parts[L]();
                                    delete s[T.id]
                                }
                            }
                        }
                }
            }, function(x, k, D) {
                "use strict";
                var d = this && this.__assign || function() {
                    return (d = Object.assign || function(e) {
                        for (var g, w = 1, y = arguments.length; w < y; w++)
                            for (var v in g = arguments[w]) Object.prototype.hasOwnProperty.call(g, v) && (e[v] = g[v]);
                        return e
                    }).apply(this, arguments)
                };
                Object.defineProperty(k, "__esModule", {
                    value: !0
                });
                var s = D(0),
                    i = D(1),
                    l = D(2);
                i.Litepicker.prototype.show = function(e) {
                    e === void 0 && (e = null), this.emit("before:show", e);
                    var g = e || this.options.element;
                    if (this.triggerElement = g, !this.isShowning()) {
                        if (this.options.inlineMode) return this.ui.style.position = "relative", this.ui.style.display = "inline-block", this.ui.style.top = null, this.ui.style.left = null, this.ui.style.bottom = null, void(this.ui.style.right = null);
                        this.scrollToDate(e), this.render(), this.ui.style.position = "absolute", this.ui.style.display = "block", this.ui.style.zIndex = this.options.zIndex;
                        var w = this.findPosition(g);
                        this.ui.style.top = w.top + "px", this.ui.style.left = w.left + "px", this.ui.style.right = null, this.ui.style.bottom = null, this.emit("show", e)
                    }
                }, i.Litepicker.prototype.hide = function() {
                    this.isShowning() && (this.datePicked.length = 0, this.updateInput(), this.options.inlineMode ? this.render() : (this.ui.style.display = "none", this.emit("hide")))
                }, i.Litepicker.prototype.getDate = function() {
                    return this.getStartDate()
                }, i.Litepicker.prototype.getStartDate = function() {
                    return this.options.startDate ? this.options.startDate.clone() : null
                }, i.Litepicker.prototype.getEndDate = function() {
                    return this.options.endDate ? this.options.endDate.clone() : null
                }, i.Litepicker.prototype.setDate = function(e, g) {
                    g === void 0 && (g = !1);
                    var w = new s.DateTime(e, this.options.format, this.options.lang);
                    l.dateIsLocked(w, this.options, [w]) && !g ? this.emit("error:date", w) : (this.setStartDate(e), this.options.inlineMode && this.render(), this.emit("selected", this.getDate()))
                }, i.Litepicker.prototype.setStartDate = function(e) {
                    e && (this.options.startDate = new s.DateTime(e, this.options.format, this.options.lang), this.updateInput())
                }, i.Litepicker.prototype.setEndDate = function(e) {
                    e && (this.options.endDate = new s.DateTime(e, this.options.format, this.options.lang), this.options.startDate.getTime() > this.options.endDate.getTime() && (this.options.endDate = this.options.startDate.clone(), this.options.startDate = new s.DateTime(e, this.options.format, this.options.lang)), this.updateInput())
                }, i.Litepicker.prototype.setDateRange = function(e, g, w) {
                    w === void 0 && (w = !1), this.triggerElement = void 0;
                    var y = new s.DateTime(e, this.options.format, this.options.lang),
                        v = new s.DateTime(g, this.options.format, this.options.lang);
                    (this.options.disallowLockDaysInRange ? l.rangeIsLocked([y, v], this.options) : l.dateIsLocked(y, this.options, [y, v]) || l.dateIsLocked(v, this.options, [y, v])) && !w ? this.emit("error:range", [y, v]) : (this.setStartDate(y), this.setEndDate(v), this.options.inlineMode && this.render(), this.updateInput(), this.emit("selected", this.getStartDate(), this.getEndDate()))
                }, i.Litepicker.prototype.gotoDate = function(e, g) {
                    g === void 0 && (g = 0);
                    var w = new s.DateTime(e);
                    w.setDate(1), this.calendars[g] = w.clone(), this.render()
                }, i.Litepicker.prototype.setLockDays = function(e) {
                    this.options.lockDays = s.DateTime.convertArray(e, this.options.lockDaysFormat), this.render()
                }, i.Litepicker.prototype.setHighlightedDays = function(e) {
                    this.options.highlightedDays = s.DateTime.convertArray(e, this.options.highlightedDaysFormat), this.render()
                }, i.Litepicker.prototype.setOptions = function(e) {
                    delete e.element, delete e.elementEnd, delete e.parentEl, e.startDate && (e.startDate = new s.DateTime(e.startDate, this.options.format, this.options.lang)), e.endDate && (e.endDate = new s.DateTime(e.endDate, this.options.format, this.options.lang));
                    var g = d(d({}, this.options.dropdowns), e.dropdowns),
                        w = d(d({}, this.options.buttonText), e.buttonText),
                        y = d(d({}, this.options.tooltipText), e.tooltipText);
                    this.options = d(d({}, this.options), e), this.options.dropdowns = d({}, g), this.options.buttonText = d({}, w), this.options.tooltipText = d({}, y), !this.options.singleMode || this.options.startDate instanceof s.DateTime || (this.options.startDate = null, this.options.endDate = null), this.options.singleMode || this.options.startDate instanceof s.DateTime && this.options.endDate instanceof s.DateTime || (this.options.startDate = null, this.options.endDate = null);
                    for (var v = 0; v < this.options.numberOfMonths; v += 1) {
                        var n = this.options.startDate ? this.options.startDate.clone() : new s.DateTime;
                        n.setDate(1), n.setMonth(n.getMonth() + v), this.calendars[v] = n
                    }
                    this.options.lockDays.length && (this.options.lockDays = s.DateTime.convertArray(this.options.lockDays, this.options.lockDaysFormat)), this.options.highlightedDays.length && (this.options.highlightedDays = s.DateTime.convertArray(this.options.highlightedDays, this.options.highlightedDaysFormat)), this.render(), this.options.inlineMode && this.show(), this.updateInput()
                }, i.Litepicker.prototype.clearSelection = function() {
                    this.options.startDate = null, this.options.endDate = null, this.datePicked.length = 0, this.updateInput(), this.isShowning() && this.render(), this.emit("clear:selection")
                }, i.Litepicker.prototype.destroy = function() {
                    this.ui && this.ui.parentNode && (this.ui.parentNode.removeChild(this.ui), this.ui = null), this.emit("destroy")
                }
            }])
        })
    });
    var Z = nt(J());
    window.Litepicker = Z.default;
})();
/*! Bundled license information:

litepicker/dist/litepicker.umd.js:
  (*!
   * 
   * litepicker.umd.js
   * Litepicker v2.0.12 (https://github.com/wakirin/Litepicker)
   * Package: litepicker (https://www.npmjs.com/package/litepicker)
   * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
   * Copyright 2019-2021 Rinat G.
   *     
   * Hash: 504eef9c08cb42543660
   * 
   *)
*/