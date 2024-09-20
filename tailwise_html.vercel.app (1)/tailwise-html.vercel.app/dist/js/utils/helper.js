(() => {
    var j = Object.create;
    var b = Object.defineProperty;
    var D = Object.getOwnPropertyDescriptor;
    var Y = Object.getOwnPropertyNames;
    var q = Object.getPrototypeOf,
        P = Object.prototype.hasOwnProperty;
    var $ = (e, r) => () => (r || e((r = {
        exports: {}
    }).exports, r), r.exports);
    var C = (e, r, t, o) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let l of Y(r)) !P.call(e, l) && l !== t && b(e, l, {
                get: () => r[l],
                enumerable: !(o = D(r, l)) || o.enumerable
            });
        return e
    };
    var O = (e, r, t) => (t = e != null ? j(q(e)) : {}, C(r || !e || !e.__esModule ? b(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
    var w = $(h => {
        "use strict";
        Object.defineProperty(h, "__esModule", {
            value: !0
        });
        Object.defineProperty(h, "default", {
            enumerable: !0,
            get: function() {
                return E
            }
        });
        var E = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        }
    });
    var S = $(f => {
        "use strict";
        Object.defineProperty(f, "__esModule", {
            value: !0
        });

        function T(e, r) {
            for (var t in r) Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
        }
        T(f, {
            parseColor: function() {
                return V
            },
            formatColor: function() {
                return B
            }
        });
        var k = H(w());

        function H(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var R = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
            A = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
            u = /(?:\d+|\d*\.\d+)%?/,
            c = /(?:\s*,\s*|\s+)/,
            M = /\s*[,/]\s*/,
            d = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/,
            x = new RegExp(`^(rgba?)\\(\\s*(${u.source}|${d.source})(?:${c.source}(${u.source}|${d.source}))?(?:${c.source}(${u.source}|${d.source}))?(?:${M.source}(${u.source}|${d.source}))?\\s*\\)$`),
            N = new RegExp(`^(hsla?)\\(\\s*((?:${u.source})(?:deg|rad|grad|turn)?|${d.source})(?:${c.source}(${u.source}|${d.source}))?(?:${c.source}(${u.source}|${d.source}))?(?:${M.source}(${u.source}|${d.source}))?\\s*\\)$`);

        function V(e, {
            loose: r = !1
        } = {}) {
            var t, o;
            if (typeof e != "string") return null;
            if (e = e.trim(), e === "transparent") return {
                mode: "rgb",
                color: ["0", "0", "0"],
                alpha: "0"
            };
            if (e in k.default) return {
                mode: "rgb",
                color: k.default[e].map(n => n.toString())
            };
            let l = e.replace(A, (n, g, p, y, m) => ["#", g, g, p, p, y, y, m ? m + m : ""].join("")).match(R);
            if (l !== null) return {
                mode: "rgb",
                color: [parseInt(l[1], 16), parseInt(l[2], 16), parseInt(l[3], 16)].map(n => n.toString()),
                alpha: l[4] ? (parseInt(l[4], 16) / 255).toString() : void 0
            };
            var s;
            let i = (s = e.match(x)) !== null && s !== void 0 ? s : e.match(N);
            if (i === null) return null;
            let a = [i[2], i[3], i[4]].filter(Boolean).map(n => n.toString());
            return a.length === 2 && a[0].startsWith("var(") ? {
                mode: i[1],
                color: [a[0]],
                alpha: a[1]
            } : !r && a.length !== 3 || a.length < 3 && !a.some(n => /^var\(.*?\)$/.test(n)) ? null : {
                mode: i[1],
                color: a,
                alpha: (t = i[5]) === null || t === void 0 || (o = t.toString) === null || o === void 0 ? void 0 : o.call(t)
            }
        }

        function B({
            mode: e,
            color: r,
            alpha: t
        }) {
            let o = t !== void 0;
            return e === "rgba" || e === "hsla" ? `${e}(${r.join(", ")}${o?`, ${t}`:""})` : `${e}(${r.join(" ")}${o?` / ${t}`:""})`
        }
    });
    var _ = O(S()),
        v = {
            cutText(e, r) {
                if (e.split(" ").length > 1) {
                    let o = e.substring(0, r).split(" ");
                    return o.pop(), o.join(" ") + "..."
                } else return e
            },
            formatDate(e, r) {
                return dayjs(e).format(r)
            },
            capitalizeFirstLetter(e) {
                if (e) return e.charAt(0).toUpperCase() + e.slice(1)
            },
            onlyNumber(e) {
                return e ? e.replace(/\D/g, "") : ""
            },
            formatCurrency(e) {
                if (e) {
                    let r = e.toString().replace(/\D/g, ""),
                        t = r.length % 3,
                        o = r.substr(0, t),
                        l = r.substr(t).match(/\d{3}/g),
                        s;
                    return l && (s = t ? "." : "", o += s + l.join(".")), o
                } else return ""
            },
            timeAgo(e) {
                let r = new Date((e || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
                    t = (new Date().getTime() - r.getTime()) / 1e3,
                    o = Math.floor(t / 86400);
                return isNaN(o) || o < 0 || o >= 31 ? dayjs(e).format("MMMM DD, YYYY") : o == 0 && (t < 60 && "just now" || t < 120 && "1 minute ago" || t < 3600 && Math.floor(t / 60) + " minutes ago" || t < 7200 && "1 hour ago" || t < 86400 && Math.floor(t / 3600) + " hours ago") || o == 1 && "Yesterday" || o < 7 && o + " days ago" || o < 31 && Math.ceil(o / 7) + " weeks ago"
            },
            diffTimeByNow(e) {
                let r = dayjs(dayjs().format("YYYY-MM-DD HH:mm:ss").toString()),
                    t = dayjs(dayjs(e).format("YYYY-MM-DD HH:mm:ss").toString()),
                    o = dayjs.duration(t.diff(r)),
                    l = Math.floor(o.asMilliseconds()),
                    s = Math.round(l / 864e5),
                    i = Math.round(l % 864e5 / 36e5),
                    a = Math.round(l % 864e5 % 36e5 / 6e4),
                    n = Math.round(l % 864e5 % 36e5 % 6e4 / 1e3);
                return n < 30 && n >= 0 && (a += 1), {
                    days: s.toString().length < 2 ? "0" + s : s,
                    hours: i.toString().length < 2 ? "0" + i : i,
                    minutes: a.toString().length < 2 ? "0" + a : a,
                    seconds: n.toString().length < 2 ? "0" + n : n
                }
            },
            isset(e) {
                return Object.keys(e).length
            },
            assign(e) {
                return JSON.parse(JSON.stringify(e))
            },
            delay(e) {
                return new Promise((r, t) => {
                    setTimeout(() => {
                        r()
                    }, e)
                })
            },
            randomNumbers(e, r, t) {
                let o = [0];
                for (let l = 1; l < t; l++) o.push(Math.ceil(Math.random() * (e - r) + r));
                return o
            },
            replaceAll(e, r, t) {
                return e.replace(new RegExp(r, "g"), t)
            },
            toRGB(e) {
                return (0, _.parseColor)(e).color.join(" ")
            },
            watchCssVariables(e, r, t) {
                let o = typeof e == "string" ? document.querySelector(e) : e,
                    l = new MutationObserver(() => {
                        let i = getComputedStyle(o),
                            a = r.reduce((n, g) => (n[g] = i.getPropertyValue(`--${g}`).trim(), n), {});
                        t(a)
                    });
                l.observe(o, {
                    attributes: !0
                });
                let s = r.reduce((i, a) => (i[a] = getComputedStyle(o).getPropertyValue(`--${a}`).trim(), i), {});
                return t(s), l
            }
        };
    window.helper = v;
    var z = v;
})();