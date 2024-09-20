(() => {
    function re(i) {
        return i + .5 | 0
    }
    var yt = (i, t, e) => Math.max(Math.min(i, e), t);

    function oe(i) {
        return yt(re(i * 2.55), 0, 255)
    }

    function vt(i) {
        return yt(re(i * 255), 0, 255)
    }

    function ft(i) {
        return yt(re(i / 2.55) / 100, 0, 1)
    }

    function Ls(i) {
        return yt(re(i * 100), 0, 100)
    }
    var et = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
        },
        gi = [..."0123456789ABCDEF"],
        Ko = i => gi[i & 15],
        qo = i => gi[(i & 240) >> 4] + gi[i & 15],
        Ce = i => (i & 240) >> 4 === (i & 15),
        Go = i => Ce(i.r) && Ce(i.g) && Ce(i.b) && Ce(i.a);

    function Zo(i) {
        var t = i.length,
            e;
        return i[0] === "#" && (t === 4 || t === 5 ? e = {
            r: 255 & et[i[1]] * 17,
            g: 255 & et[i[2]] * 17,
            b: 255 & et[i[3]] * 17,
            a: t === 5 ? et[i[4]] * 17 : 255
        } : (t === 7 || t === 9) && (e = {
            r: et[i[1]] << 4 | et[i[2]],
            g: et[i[3]] << 4 | et[i[4]],
            b: et[i[5]] << 4 | et[i[6]],
            a: t === 9 ? et[i[7]] << 4 | et[i[8]] : 255
        })), e
    }
    var Jo = (i, t) => i < 255 ? t(i) : "";

    function Qo(i) {
        var t = Go(i) ? Ko : qo;
        return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Jo(i.a, t) : void 0
    }
    var ta = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function Is(i, t, e) {
        let s = t * Math.min(e, 1 - e),
            n = (o, a = (o + i / 30) % 12) => e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
        return [n(0), n(8), n(4)]
    }

    function ea(i, t, e) {
        let s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
        return [s(5), s(3), s(1)]
    }

    function ia(i, t, e) {
        let s = Is(i, 1, .5),
            n;
        for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++) s[n] *= 1 - t - e, s[n] += t;
        return s
    }

    function sa(i, t, e, s, n) {
        return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4
    }

    function pi(i) {
        let e = i.r / 255,
            s = i.g / 255,
            n = i.b / 255,
            o = Math.max(e, s, n),
            a = Math.min(e, s, n),
            r = (o + a) / 2,
            l, c, h;
        return o !== a && (h = o - a, c = r > .5 ? h / (2 - o - a) : h / (o + a), l = sa(e, s, n, h, o), l = l * 60 + .5), [l | 0, c || 0, r]
    }

    function mi(i, t, e, s) {
        return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(vt)
    }

    function bi(i, t, e) {
        return mi(Is, i, t, e)
    }

    function na(i, t, e) {
        return mi(ia, i, t, e)
    }

    function oa(i, t, e) {
        return mi(ea, i, t, e)
    }

    function zs(i) {
        return (i % 360 + 360) % 360
    }

    function aa(i) {
        let t = ta.exec(i),
            e = 255,
            s;
        if (!t) return;
        t[5] !== s && (e = t[6] ? oe(+t[5]) : vt(+t[5]));
        let n = zs(+t[2]),
            o = +t[3] / 100,
            a = +t[4] / 100;
        return t[1] === "hwb" ? s = na(n, o, a) : t[1] === "hsv" ? s = oa(n, o, a) : s = bi(n, o, a), {
            r: s[0],
            g: s[1],
            b: s[2],
            a: e
        }
    }

    function ra(i, t) {
        var e = pi(i);
        e[0] = zs(e[0] + t), e = bi(e), i.r = e[0], i.g = e[1], i.b = e[2]
    }

    function la(i) {
        if (!i) return;
        let t = pi(i),
            e = t[0],
            s = Ls(t[1]),
            n = Ls(t[2]);
        return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${ft(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`
    }
    var Rs = {
            x: "dark",
            Z: "light",
            Y: "re",
            X: "blu",
            W: "gr",
            V: "medium",
            U: "slate",
            A: "ee",
            T: "ol",
            S: "or",
            B: "ra",
            C: "lateg",
            D: "ights",
            R: "in",
            Q: "turquois",
            E: "hi",
            P: "ro",
            O: "al",
            N: "le",
            M: "de",
            L: "yello",
            F: "en",
            K: "ch",
            G: "arks",
            H: "ea",
            I: "ightg",
            J: "wh"
        },
        Es = {
            OiceXe: "f0f8ff",
            antiquewEte: "faebd7",
            aqua: "ffff",
            aquamarRe: "7fffd4",
            azuY: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "0",
            blanKedOmond: "ffebcd",
            Xe: "ff",
            XeviTet: "8a2be2",
            bPwn: "a52a2a",
            burlywood: "deb887",
            caMtXe: "5f9ea0",
            KartYuse: "7fff00",
            KocTate: "d2691e",
            cSO: "ff7f50",
            cSnflowerXe: "6495ed",
            cSnsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "ffff",
            xXe: "8b",
            xcyan: "8b8b",
            xgTMnPd: "b8860b",
            xWay: "a9a9a9",
            xgYF: "6400",
            xgYy: "a9a9a9",
            xkhaki: "bdb76b",
            xmagFta: "8b008b",
            xTivegYF: "556b2f",
            xSange: "ff8c00",
            xScEd: "9932cc",
            xYd: "8b0000",
            xsOmon: "e9967a",
            xsHgYF: "8fbc8f",
            xUXe: "483d8b",
            xUWay: "2f4f4f",
            xUgYy: "2f4f4f",
            xQe: "ced1",
            xviTet: "9400d3",
            dAppRk: "ff1493",
            dApskyXe: "bfff",
            dimWay: "696969",
            dimgYy: "696969",
            dodgerXe: "1e90ff",
            fiYbrick: "b22222",
            flSOwEte: "fffaf0",
            foYstWAn: "228b22",
            fuKsia: "ff00ff",
            gaRsbSo: "dcdcdc",
            ghostwEte: "f8f8ff",
            gTd: "ffd700",
            gTMnPd: "daa520",
            Way: "808080",
            gYF: "8000",
            gYFLw: "adff2f",
            gYy: "808080",
            honeyMw: "f0fff0",
            hotpRk: "ff69b4",
            RdianYd: "cd5c5c",
            Rdigo: "4b0082",
            ivSy: "fffff0",
            khaki: "f0e68c",
            lavFMr: "e6e6fa",
            lavFMrXsh: "fff0f5",
            lawngYF: "7cfc00",
            NmoncEffon: "fffacd",
            ZXe: "add8e6",
            ZcSO: "f08080",
            Zcyan: "e0ffff",
            ZgTMnPdLw: "fafad2",
            ZWay: "d3d3d3",
            ZgYF: "90ee90",
            ZgYy: "d3d3d3",
            ZpRk: "ffb6c1",
            ZsOmon: "ffa07a",
            ZsHgYF: "20b2aa",
            ZskyXe: "87cefa",
            ZUWay: "778899",
            ZUgYy: "778899",
            ZstAlXe: "b0c4de",
            ZLw: "ffffe0",
            lime: "ff00",
            limegYF: "32cd32",
            lRF: "faf0e6",
            magFta: "ff00ff",
            maPon: "800000",
            VaquamarRe: "66cdaa",
            VXe: "cd",
            VScEd: "ba55d3",
            VpurpN: "9370db",
            VsHgYF: "3cb371",
            VUXe: "7b68ee",
            VsprRggYF: "fa9a",
            VQe: "48d1cc",
            VviTetYd: "c71585",
            midnightXe: "191970",
            mRtcYam: "f5fffa",
            mistyPse: "ffe4e1",
            moccasR: "ffe4b5",
            navajowEte: "ffdead",
            navy: "80",
            Tdlace: "fdf5e6",
            Tive: "808000",
            TivedBb: "6b8e23",
            Sange: "ffa500",
            SangeYd: "ff4500",
            ScEd: "da70d6",
            pOegTMnPd: "eee8aa",
            pOegYF: "98fb98",
            pOeQe: "afeeee",
            pOeviTetYd: "db7093",
            papayawEp: "ffefd5",
            pHKpuff: "ffdab9",
            peru: "cd853f",
            pRk: "ffc0cb",
            plum: "dda0dd",
            powMrXe: "b0e0e6",
            purpN: "800080",
            YbeccapurpN: "663399",
            Yd: "ff0000",
            Psybrown: "bc8f8f",
            PyOXe: "4169e1",
            saddNbPwn: "8b4513",
            sOmon: "fa8072",
            sandybPwn: "f4a460",
            sHgYF: "2e8b57",
            sHshell: "fff5ee",
            siFna: "a0522d",
            silver: "c0c0c0",
            skyXe: "87ceeb",
            UXe: "6a5acd",
            UWay: "708090",
            UgYy: "708090",
            snow: "fffafa",
            sprRggYF: "ff7f",
            stAlXe: "4682b4",
            tan: "d2b48c",
            teO: "8080",
            tEstN: "d8bfd8",
            tomato: "ff6347",
            Qe: "40e0d0",
            viTet: "ee82ee",
            JHt: "f5deb3",
            wEte: "ffffff",
            wEtesmoke: "f5f5f5",
            Lw: "ffff00",
            LwgYF: "9acd32"
        };

    function ca() {
        let i = {},
            t = Object.keys(Es),
            e = Object.keys(Rs),
            s, n, o, a, r;
        for (s = 0; s < t.length; s++) {
            for (a = r = t[s], n = 0; n < e.length; n++) o = e[n], r = r.replace(o, Rs[o]);
            o = parseInt(Es[a], 16), i[r] = [o >> 16 & 255, o >> 8 & 255, o & 255]
        }
        return i
    }
    var Oe;

    function ha(i) {
        Oe || (Oe = ca(), Oe.transparent = [0, 0, 0, 0]);
        let t = Oe[i.toLowerCase()];
        return t && {
            r: t[0],
            g: t[1],
            b: t[2],
            a: t.length === 4 ? t[3] : 255
        }
    }
    var da = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

    function ua(i) {
        let t = da.exec(i),
            e = 255,
            s, n, o;
        if (t) {
            if (t[7] !== s) {
                let a = +t[7];
                e = t[8] ? oe(a) : yt(a * 255, 0, 255)
            }
            return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? oe(s) : yt(s, 0, 255)), n = 255 & (t[4] ? oe(n) : yt(n, 0, 255)), o = 255 & (t[6] ? oe(o) : yt(o, 0, 255)), {
                r: s,
                g: n,
                b: o,
                a: e
            }
        }
    }

    function fa(i) {
        return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ft(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`)
    }
    var fi = i => i <= .0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - .055,
        Nt = i => i <= .04045 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);

    function ga(i, t, e) {
        let s = Nt(ft(i.r)),
            n = Nt(ft(i.g)),
            o = Nt(ft(i.b));
        return {
            r: vt(fi(s + e * (Nt(ft(t.r)) - s))),
            g: vt(fi(n + e * (Nt(ft(t.g)) - n))),
            b: vt(fi(o + e * (Nt(ft(t.b)) - o))),
            a: i.a + e * (t.a - i.a)
        }
    }

    function Ae(i, t, e) {
        if (i) {
            let s = pi(i);
            s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = bi(s), i.r = s[0], i.g = s[1], i.b = s[2]
        }
    }

    function Bs(i, t) {
        return i && Object.assign(t || {}, i)
    }

    function Fs(i) {
        var t = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(i) ? i.length >= 3 && (t = {
            r: i[0],
            g: i[1],
            b: i[2],
            a: 255
        }, i.length > 3 && (t.a = vt(i[3]))) : (t = Bs(i, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }), t.a = vt(t.a)), t
    }

    function pa(i) {
        return i.charAt(0) === "r" ? ua(i) : aa(i)
    }
    var ae = class i {
        constructor(t) {
            if (t instanceof i) return t;
            let e = typeof t,
                s;
            e === "object" ? s = Fs(t) : e === "string" && (s = Zo(t) || ha(t) || pa(t)), this._rgb = s, this._valid = !!s
        }
        get valid() {
            return this._valid
        }
        get rgb() {
            var t = Bs(this._rgb);
            return t && (t.a = ft(t.a)), t
        }
        set rgb(t) {
            this._rgb = Fs(t)
        }
        rgbString() {
            return this._valid ? fa(this._rgb) : void 0
        }
        hexString() {
            return this._valid ? Qo(this._rgb) : void 0
        }
        hslString() {
            return this._valid ? la(this._rgb) : void 0
        }
        mix(t, e) {
            if (t) {
                let s = this.rgb,
                    n = t.rgb,
                    o, a = e === o ? .5 : e,
                    r = 2 * a - 1,
                    l = s.a - n.a,
                    c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
                o = 1 - c, s.r = 255 & c * s.r + o * n.r + .5, s.g = 255 & c * s.g + o * n.g + .5, s.b = 255 & c * s.b + o * n.b + .5, s.a = a * s.a + (1 - a) * n.a, this.rgb = s
            }
            return this
        }
        interpolate(t, e) {
            return t && (this._rgb = ga(this._rgb, t._rgb, e)), this
        }
        clone() {
            return new i(this.rgb)
        }
        alpha(t) {
            return this._rgb.a = vt(t), this
        }
        clearer(t) {
            let e = this._rgb;
            return e.a *= 1 - t, this
        }
        greyscale() {
            let t = this._rgb,
                e = re(t.r * .3 + t.g * .59 + t.b * .11);
            return t.r = t.g = t.b = e, this
        }
        opaquer(t) {
            let e = this._rgb;
            return e.a *= 1 + t, this
        }
        negate() {
            let t = this._rgb;
            return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
        }
        lighten(t) {
            return Ae(this._rgb, 2, t), this
        }
        darken(t) {
            return Ae(this._rgb, 2, -t), this
        }
        saturate(t) {
            return Ae(this._rgb, 1, t), this
        }
        desaturate(t) {
            return Ae(this._rgb, 1, -t), this
        }
        rotate(t) {
            return ra(this._rgb, t), this
        }
    };

    function lt() {}
    var qs = (() => {
        let i = 0;
        return () => i++
    })();

    function T(i) {
        return i === null || typeof i > "u"
    }

    function F(i) {
        if (Array.isArray && Array.isArray(i)) return !0;
        let t = Object.prototype.toString.call(i);
        return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]"
    }

    function O(i) {
        return i !== null && Object.prototype.toString.call(i) === "[object Object]"
    }

    function V(i) {
        return (typeof i == "number" || i instanceof Number) && isFinite(+i)
    }

    function Z(i, t) {
        return V(i) ? i : t
    }

    function P(i, t) {
        return typeof i > "u" ? t : i
    }
    var Gs = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t,
        vi = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;

    function E(i, t, e) {
        if (i && typeof i.call == "function") return i.apply(e, t)
    }

    function L(i, t, e, s) {
        let n, o, a;
        if (F(i))
            if (o = i.length, s)
                for (n = o - 1; n >= 0; n--) t.call(e, i[n], n);
            else
                for (n = 0; n < o; n++) t.call(e, i[n], n);
        else if (O(i))
            for (a = Object.keys(i), o = a.length, n = 0; n < o; n++) t.call(e, i[a[n]], a[n])
    }

    function he(i, t) {
        let e, s, n, o;
        if (!i || !t || i.length !== t.length) return !1;
        for (e = 0, s = i.length; e < s; ++e)
            if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
        return !0
    }

    function Ee(i) {
        if (F(i)) return i.map(Ee);
        if (O(i)) {
            let t = Object.create(null),
                e = Object.keys(i),
                s = e.length,
                n = 0;
            for (; n < s; ++n) t[e[n]] = Ee(i[e[n]]);
            return t
        }
        return i
    }

    function Zs(i) {
        return ["__proto__", "prototype", "constructor"].indexOf(i) === -1
    }

    function ma(i, t, e, s) {
        if (!Zs(i)) return;
        let n = t[i],
            o = e[i];
        O(n) && O(o) ? jt(n, o, s) : t[i] = Ee(o)
    }

    function jt(i, t, e) {
        let s = F(t) ? t : [t],
            n = s.length;
        if (!O(i)) return i;
        e = e || {};
        let o = e.merger || ma,
            a;
        for (let r = 0; r < n; ++r) {
            if (a = s[r], !O(a)) continue;
            let l = Object.keys(a);
            for (let c = 0, h = l.length; c < h; ++c) o(l[c], i, a, e)
        }
        return i
    }

    function Yt(i, t) {
        return jt(i, t, {
            merger: ba
        })
    }

    function ba(i, t, e) {
        if (!Zs(i)) return;
        let s = t[i],
            n = e[i];
        O(s) && O(n) ? Yt(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Ee(n))
    }
    var Vs = {
        "": i => i,
        x: i => i.x,
        y: i => i.y
    };

    function xa(i) {
        let t = i.split("."),
            e = [],
            s = "";
        for (let n of t) s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
        return e
    }

    function _a(i) {
        let t = xa(i);
        return e => {
            for (let s of t) {
                if (s === "") break;
                e = e && e[s]
            }
            return e
        }
    }

    function mt(i, t) {
        return (Vs[t] || (Vs[t] = _a(t)))(i)
    }

    function Be(i) {
        return i.charAt(0).toUpperCase() + i.slice(1)
    }
    var Ut = i => typeof i < "u",
        gt = i => typeof i == "function",
        Mi = (i, t) => {
            if (i.size !== t.size) return !1;
            for (let e of i)
                if (!t.has(e)) return !1;
            return !0
        };

    function Js(i) {
        return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu"
    }
    var I = Math.PI,
        z = 2 * I,
        ya = z + I,
        Fe = Number.POSITIVE_INFINITY,
        va = I / 180,
        N = I / 2,
        Tt = I / 4,
        Ws = I * 2 / 3,
        pt = Math.log10,
        nt = Math.sign;

    function Xt(i, t, e) {
        return Math.abs(i - t) < e
    }

    function ki(i) {
        let t = Math.round(i);
        i = Xt(i, t, i / 1e3) ? t : i;
        let e = Math.pow(10, Math.floor(pt(i))),
            s = i / e;
        return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e
    }

    function Qs(i) {
        let t = [],
            e = Math.sqrt(i),
            s;
        for (s = 1; s < e; s++) i % s === 0 && (t.push(s), t.push(i / s));
        return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t
    }

    function Et(i) {
        return !isNaN(parseFloat(i)) && isFinite(i)
    }

    function tn(i, t) {
        let e = Math.round(i);
        return e - t <= i && e + t >= i
    }

    function wi(i, t, e) {
        let s, n, o;
        for (s = 0, n = i.length; s < n; s++) o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o))
    }

    function it(i) {
        return i * (I / 180)
    }

    function Ve(i) {
        return i * (180 / I)
    }

    function Si(i) {
        if (!V(i)) return;
        let t = 1,
            e = 0;
        for (; Math.round(i * t) / t !== i;) t *= 10, e++;
        return e
    }

    function Pi(i, t) {
        let e = t.x - i.x,
            s = t.y - i.y,
            n = Math.sqrt(e * e + s * s),
            o = Math.atan2(s, e);
        return o < -.5 * I && (o += z), {
            angle: o,
            distance: n
        }
    }

    function Ie(i, t) {
        return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2))
    }

    function Ma(i, t) {
        return (i - t + ya) % z - I
    }

    function G(i) {
        return (i % z + z) % z
    }

    function Kt(i, t, e, s) {
        let n = G(i),
            o = G(t),
            a = G(e),
            r = G(o - n),
            l = G(a - n),
            c = G(n - o),
            h = G(n - a);
        return n === o || n === a || s && o === a || r > l && c < h
    }

    function $(i, t, e) {
        return Math.max(t, Math.min(e, i))
    }

    function en(i) {
        return $(i, -32768, 32767)
    }

    function ct(i, t, e, s = 1e-6) {
        return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s
    }

    function We(i, t, e) {
        e = e || (a => i[a] < t);
        let s = i.length - 1,
            n = 0,
            o;
        for (; s - n > 1;) o = n + s >> 1, e(o) ? n = o : s = o;
        return {
            lo: n,
            hi: s
        }
    }
    var at = (i, t, e, s) => We(i, e, s ? n => {
            let o = i[n][t];
            return o < e || o === e && i[n + 1][t] === e
        } : n => i[n][t] < e),
        sn = (i, t, e) => We(i, e, s => i[s][t] >= e);

    function nn(i, t, e) {
        let s = 0,
            n = i.length;
        for (; s < n && i[s] < t;) s++;
        for (; n > s && i[n - 1] > e;) n--;
        return s > 0 || n < i.length ? i.slice(s, n) : i
    }
    var on = ["push", "pop", "shift", "splice", "unshift"];

    function an(i, t) {
        if (i._chartjs) {
            i._chartjs.listeners.push(t);
            return
        }
        Object.defineProperty(i, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [t]
            }
        }), on.forEach(e => {
            let s = "_onData" + Be(e),
                n = i[e];
            Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !1,
                value(...o) {
                    let a = n.apply(this, o);
                    return i._chartjs.listeners.forEach(r => {
                        typeof r[s] == "function" && r[s](...o)
                    }), a
                }
            })
        })
    }

    function Di(i, t) {
        let e = i._chartjs;
        if (!e) return;
        let s = e.listeners,
            n = s.indexOf(t);
        n !== -1 && s.splice(n, 1), !(s.length > 0) && (on.forEach(o => {
            delete i[o]
        }), delete i._chartjs)
    }

    function Ci(i) {
        let t = new Set(i);
        return t.size === i.length ? i : Array.from(t)
    }
    var Oi = function() {
        return typeof window > "u" ? function(i) {
            return i()
        } : window.requestAnimationFrame
    }();

    function Ai(i, t) {
        let e = [],
            s = !1;
        return function(...n) {
            e = n, s || (s = !0, Oi.call(window, () => {
                s = !1, i.apply(t, e)
            }))
        }
    }

    function rn(i, t) {
        let e;
        return function(...s) {
            return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t
        }
    }
    var Ne = i => i === "start" ? "left" : i === "end" ? "right" : "center",
        U = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2,
        ln = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;

    function Ti(i, t, e) {
        let s = t.length,
            n = 0,
            o = s;
        if (i._sorted) {
            let {
                iScale: a,
                _parsed: r
            } = i, l = a.axis, {
                min: c,
                max: h,
                minDefined: d,
                maxDefined: u
            } = a.getUserBounds();
            d && (n = $(Math.min(at(r, l, c).lo, e ? s : at(t, l, a.getPixelForValue(c)).lo), 0, s - 1)), u ? o = $(Math.max(at(r, a.axis, h, !0).hi + 1, e ? 0 : at(t, l, a.getPixelForValue(h), !0).hi + 1), n, s) - n : o = s - n
        }
        return {
            start: n,
            count: o
        }
    }

    function Li(i) {
        let {
            xScale: t,
            yScale: e,
            _scaleRanges: s
        } = i, n = {
            xmin: t.min,
            xmax: t.max,
            ymin: e.min,
            ymax: e.max
        };
        if (!s) return i._scaleRanges = n, !0;
        let o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
        return Object.assign(s, n), o
    }
    var Te = i => i === 0 || i === 1,
        Ns = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * z / e)),
        Hs = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * z / e) + 1,
        Ht = {
            linear: i => i,
            easeInQuad: i => i * i,
            easeOutQuad: i => -i * (i - 2),
            easeInOutQuad: i => (i /= .5) < 1 ? .5 * i * i : -.5 * (--i * (i - 2) - 1),
            easeInCubic: i => i * i * i,
            easeOutCubic: i => (i -= 1) * i * i + 1,
            easeInOutCubic: i => (i /= .5) < 1 ? .5 * i * i * i : .5 * ((i -= 2) * i * i + 2),
            easeInQuart: i => i * i * i * i,
            easeOutQuart: i => -((i -= 1) * i * i * i - 1),
            easeInOutQuart: i => (i /= .5) < 1 ? .5 * i * i * i * i : -.5 * ((i -= 2) * i * i * i - 2),
            easeInQuint: i => i * i * i * i * i,
            easeOutQuint: i => (i -= 1) * i * i * i * i + 1,
            easeInOutQuint: i => (i /= .5) < 1 ? .5 * i * i * i * i * i : .5 * ((i -= 2) * i * i * i * i + 2),
            easeInSine: i => -Math.cos(i * N) + 1,
            easeOutSine: i => Math.sin(i * N),
            easeInOutSine: i => -.5 * (Math.cos(I * i) - 1),
            easeInExpo: i => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
            easeOutExpo: i => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
            easeInOutExpo: i => Te(i) ? i : i < .5 ? .5 * Math.pow(2, 10 * (i * 2 - 1)) : .5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
            easeInCirc: i => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
            easeOutCirc: i => Math.sqrt(1 - (i -= 1) * i),
            easeInOutCirc: i => (i /= .5) < 1 ? -.5 * (Math.sqrt(1 - i * i) - 1) : .5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
            easeInElastic: i => Te(i) ? i : Ns(i, .075, .3),
            easeOutElastic: i => Te(i) ? i : Hs(i, .075, .3),
            easeInOutElastic(i) {
                return Te(i) ? i : i < .5 ? .5 * Ns(i * 2, .1125, .45) : .5 + .5 * Hs(i * 2 - 1, .1125, .45)
            },
            easeInBack(i) {
                return i * i * ((1.70158 + 1) * i - 1.70158)
            },
            easeOutBack(i) {
                return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1
            },
            easeInOutBack(i) {
                let t = 1.70158;
                return (i /= .5) < 1 ? .5 * (i * i * (((t *= 1.525) + 1) * i - t)) : .5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2)
            },
            easeInBounce: i => 1 - Ht.easeOutBounce(1 - i),
            easeOutBounce(i) {
                return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + .75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + .9375 : 7.5625 * (i -= 2.625 / 2.75) * i + .984375
            },
            easeInOutBounce: i => i < .5 ? Ht.easeInBounce(i * 2) * .5 : Ht.easeOutBounce(i * 2 - 1) * .5 + .5
        };

    function Ri(i) {
        if (i && typeof i == "object") {
            let t = i.toString();
            return t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
        }
        return !1
    }

    function Ei(i) {
        return Ri(i) ? i : new ae(i)
    }

    function xi(i) {
        return Ri(i) ? i : new ae(i).saturate(.5).darken(.1).hexString()
    }
    var ka = ["x", "y", "borderWidth", "radius", "tension"],
        wa = ["color", "borderColor", "backgroundColor"];

    function Sa(i) {
        i.set("animation", {
            delay: void 0,
            duration: 1e3,
            easing: "easeOutQuart",
            fn: void 0,
            from: void 0,
            loop: void 0,
            to: void 0,
            type: void 0
        }), i.describe("animation", {
            _fallback: !1,
            _indexable: !1,
            _scriptable: t => t !== "onProgress" && t !== "onComplete" && t !== "fn"
        }), i.set("animations", {
            colors: {
                type: "color",
                properties: wa
            },
            numbers: {
                type: "number",
                properties: ka
            }
        }), i.describe("animations", {
            _fallback: "animation"
        }), i.set("transitions", {
            active: {
                animation: {
                    duration: 400
                }
            },
            resize: {
                animation: {
                    duration: 0
                }
            },
            show: {
                animations: {
                    colors: {
                        from: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        duration: 0
                    }
                }
            },
            hide: {
                animations: {
                    colors: {
                        to: "transparent"
                    },
                    visible: {
                        type: "boolean",
                        easing: "linear",
                        fn: t => t | 0
                    }
                }
            }
        })
    }

    function Pa(i) {
        i.set("layout", {
            autoPadding: !0,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        })
    }
    var js = new Map;

    function Da(i, t) {
        t = t || {};
        let e = i + JSON.stringify(t),
            s = js.get(e);
        return s || (s = new Intl.NumberFormat(i, t), js.set(e, s)), s
    }

    function qt(i, t, e) {
        return Da(t, e).format(i)
    }
    var cn = {
        values(i) {
            return F(i) ? i : "" + i
        },
        numeric(i, t, e) {
            if (i === 0) return "0";
            let s = this.chart.options.locale,
                n, o = i;
            if (e.length > 1) {
                let c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
                (c < 1e-4 || c > 1e15) && (n = "scientific"), o = Ca(i, e)
            }
            let a = pt(Math.abs(o)),
                r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
                l = {
                    notation: n,
                    minimumFractionDigits: r,
                    maximumFractionDigits: r
                };
            return Object.assign(l, this.options.ticks.format), qt(i, s, l)
        },
        logarithmic(i, t, e) {
            if (i === 0) return "0";
            let s = e[t].significand || i / Math.pow(10, Math.floor(pt(i)));
            return [1, 2, 3, 5, 10, 15].includes(s) || t > .8 * e.length ? cn.numeric.call(this, i, t, e) : ""
        }
    };

    function Ca(i, t) {
        let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
        return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e
    }
    var de = {
        formatters: cn
    };

    function Oa(i) {
        i.set("scale", {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: "ticks",
            clip: !0,
            grace: 0,
            grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1
            },
            border: {
                display: !0,
                dash: [],
                dashOffset: 0,
                width: 1
            },
            title: {
                display: !1,
                text: "",
                padding: {
                    top: 4,
                    bottom: 4
                }
            },
            ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: de.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2
            }
        }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
            _fallback: !1,
            _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
            _indexable: t => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
        }), i.describe("scales", {
            _fallback: "scale"
        }), i.describe("scale.ticks", {
            _scriptable: t => t !== "backdropPadding" && t !== "callback",
            _indexable: t => t !== "backdropPadding"
        })
    }
    var kt = Object.create(null),
        He = Object.create(null);

    function le(i, t) {
        if (!t) return i;
        let e = t.split(".");
        for (let s = 0, n = e.length; s < n; ++s) {
            let o = e[s];
            i = i[o] || (i[o] = Object.create(null))
        }
        return i
    }

    function _i(i, t, e) {
        return typeof t == "string" ? jt(le(i, t), e) : jt(le(i, ""), t)
    }
    var yi = class {
            constructor(t, e) {
                this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = s => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 12,
                    style: "normal",
                    lineHeight: 1.2,
                    weight: null
                }, this.hover = {}, this.hoverBackgroundColor = (s, n) => xi(n.backgroundColor), this.hoverBorderColor = (s, n) => xi(n.borderColor), this.hoverColor = (s, n) => xi(n.color), this.indexAxis = "x", this.interaction = {
                    mode: "nearest",
                    intersect: !0,
                    includeInvisible: !1
                }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e)
            }
            set(t, e) {
                return _i(this, t, e)
            }
            get(t) {
                return le(this, t)
            }
            describe(t, e) {
                return _i(He, t, e)
            }
            override(t, e) {
                return _i(kt, t, e)
            }
            route(t, e, s, n) {
                let o = le(this, t),
                    a = le(this, s),
                    r = "_" + e;
                Object.defineProperties(o, {
                    [r]: {
                        value: o[e],
                        writable: !0
                    },
                    [e]: {
                        enumerable: !0,
                        get() {
                            let l = this[r],
                                c = a[n];
                            return O(l) ? Object.assign({}, c, l) : P(l, c)
                        },
                        set(l) {
                            this[r] = l
                        }
                    }
                })
            }
            apply(t) {
                t.forEach(e => e(this))
            }
        },
        W = new yi({
            _scriptable: i => !i.startsWith("on"),
            _indexable: i => i !== "events",
            hover: {
                _fallback: "interaction"
            },
            interaction: {
                _scriptable: !1,
                _indexable: !1
            }
        }, [Sa, Pa, Oa]);

    function Aa(i) {
        return !i || T(i.size) || T(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family
    }

    function ce(i, t, e, s, n) {
        let o = t[n];
        return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s
    }

    function hn(i, t, e, s) {
        s = s || {};
        let n = s.data = s.data || {},
            o = s.garbageCollect = s.garbageCollect || [];
        s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
        let a = 0,
            r = e.length,
            l, c, h, d, u;
        for (l = 0; l < r; l++)
            if (d = e[l], d != null && !F(d)) a = ce(i, n, o, a, d);
            else if (F(d))
            for (c = 0, h = d.length; c < h; c++) u = d[c], u != null && !F(u) && (a = ce(i, n, o, a, u));
        i.restore();
        let f = o.length / 2;
        if (f > e.length) {
            for (l = 0; l < f; l++) delete n[o[l]];
            o.splice(0, f)
        }
        return a
    }

    function wt(i, t, e) {
        let s = i.currentDevicePixelRatio,
            n = e !== 0 ? Math.max(e / 2, .5) : 0;
        return Math.round((t - n) * s) / s + n
    }

    function Fi(i, t) {
        t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore()
    }

    function je(i, t, e, s) {
        Ii(i, t, e, s, null)
    }

    function Ii(i, t, e, s, n) {
        let o, a, r, l, c, h, d, u, f = t.pointStyle,
            g = t.rotation,
            p = t.radius,
            m = (g || 0) * va;
        if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
            i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
            return
        }
        if (!(isNaN(p) || p <= 0)) {
            switch (i.beginPath(), f) {
                default: n ? i.ellipse(e, s, n / 2, p, 0, 0, z) : i.arc(e, s, p, 0, z),
                i.closePath();
                break;
                case "triangle":
                        h = n ? n / 2 : p,
                    i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
                    m += Ws,
                    i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
                    m += Ws,
                    i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * p),
                    i.closePath();
                    break;
                case "rectRounded":
                        c = p * .516,
                    l = p - c,
                    a = Math.cos(m + Tt) * l,
                    d = Math.cos(m + Tt) * (n ? n / 2 - c : l),
                    r = Math.sin(m + Tt) * l,
                    u = Math.sin(m + Tt) * (n ? n / 2 - c : l),
                    i.arc(e - d, s - r, c, m - I, m - N),
                    i.arc(e + u, s - a, c, m - N, m),
                    i.arc(e + d, s + r, c, m, m + N),
                    i.arc(e - u, s + a, c, m + N, m + I),
                    i.closePath();
                    break;
                case "rect":
                        if (!g) {
                        l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
                        break
                    }m += Tt;
                case "rectRot":
                        d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    i.moveTo(e - d, s - r),
                    i.lineTo(e + u, s - a),
                    i.lineTo(e + d, s + r),
                    i.lineTo(e - u, s + a),
                    i.closePath();
                    break;
                case "crossRot":
                        m += Tt;
                case "cross":
                        d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    i.moveTo(e - d, s - r),
                    i.lineTo(e + d, s + r),
                    i.moveTo(e + u, s - a),
                    i.lineTo(e - u, s + a);
                    break;
                case "star":
                        d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    i.moveTo(e - d, s - r),
                    i.lineTo(e + d, s + r),
                    i.moveTo(e + u, s - a),
                    i.lineTo(e - u, s + a),
                    m += Tt,
                    d = Math.cos(m) * (n ? n / 2 : p),
                    a = Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    u = Math.sin(m) * (n ? n / 2 : p),
                    i.moveTo(e - d, s - r),
                    i.lineTo(e + d, s + r),
                    i.moveTo(e + u, s - a),
                    i.lineTo(e - u, s + a);
                    break;
                case "line":
                        a = n ? n / 2 : Math.cos(m) * p,
                    r = Math.sin(m) * p,
                    i.moveTo(e - a, s - r),
                    i.lineTo(e + a, s + r);
                    break;
                case "dash":
                        i.moveTo(e, s),
                    i.lineTo(e + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                    break;
                case !1:
                        i.closePath();
                    break
            }
            i.fill(), t.borderWidth > 0 && i.stroke()
        }
    }

    function rt(i, t, e) {
        return e = e || .5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e
    }

    function ue(i, t) {
        i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip()
    }

    function fe(i) {
        i.restore()
    }

    function dn(i, t, e, s, n) {
        if (!t) return i.lineTo(e.x, e.y);
        if (n === "middle") {
            let o = (t.x + e.x) / 2;
            i.lineTo(o, t.y), i.lineTo(o, e.y)
        } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
        i.lineTo(e.x, e.y)
    }

    function un(i, t, e, s) {
        if (!t) return i.lineTo(e.x, e.y);
        i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y)
    }

    function Ta(i, t) {
        t.translation && i.translate(t.translation[0], t.translation[1]), T(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline)
    }

    function La(i, t, e, s, n) {
        if (n.strikethrough || n.underline) {
            let o = i.measureText(s),
                a = t - o.actualBoundingBoxLeft,
                r = t + o.actualBoundingBoxRight,
                l = e - o.actualBoundingBoxAscent,
                c = e + o.actualBoundingBoxDescent,
                h = n.strikethrough ? (l + c) / 2 : c;
            i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(a, h), i.lineTo(r, h), i.stroke()
        }
    }

    function Ra(i, t) {
        let e = i.fillStyle;
        i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e
    }

    function St(i, t, e, s, n, o = {}) {
        let a = F(t) ? t : [t],
            r = o.strokeWidth > 0 && o.strokeColor !== "",
            l, c;
        for (i.save(), i.font = n.string, Ta(i, o), l = 0; l < a.length; ++l) c = a[l], o.backdrop && Ra(i, o.backdrop), r && (o.strokeColor && (i.strokeStyle = o.strokeColor), T(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), La(i, e, s, c, o), s += Number(n.lineHeight);
        i.restore()
    }

    function Gt(i, t) {
        let {
            x: e,
            y: s,
            w: n,
            h: o,
            radius: a
        } = t;
        i.arc(e + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * I, I, !0), i.lineTo(e, s + o - a.bottomLeft), i.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, I, N, !0), i.lineTo(e + n - a.bottomRight, s + o), i.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, N, 0, !0), i.lineTo(e + n, s + a.topRight), i.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -N, !0), i.lineTo(e + a.topLeft, s)
    }
    var Ea = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Fa = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;

    function Ia(i, t) {
        let e = ("" + i).match(Ea);
        if (!e || e[1] === "normal") return t * 1.2;
        switch (i = +e[2], e[3]) {
            case "px":
                return i;
            case "%":
                i /= 100;
                break
        }
        return t * i
    }
    var za = i => +i || 0;

    function $e(i, t) {
        let e = {},
            s = O(t),
            n = s ? Object.keys(t) : t,
            o = O(i) ? s ? a => P(i[a], i[t[a]]) : a => i[a] : () => i;
        for (let a of n) e[a] = za(o(a));
        return e
    }

    function zi(i) {
        return $e(i, {
            top: "y",
            right: "x",
            bottom: "y",
            left: "x"
        })
    }

    function Pt(i) {
        return $e(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
    }

    function X(i) {
        let t = zi(i);
        return t.width = t.left + t.right, t.height = t.top + t.bottom, t
    }

    function j(i, t) {
        i = i || {}, t = t || W.font;
        let e = P(i.size, t.size);
        typeof e == "string" && (e = parseInt(e, 10));
        let s = P(i.style, t.style);
        s && !("" + s).match(Fa) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
        let n = {
            family: P(i.family, t.family),
            lineHeight: Ia(P(i.lineHeight, t.lineHeight), e),
            size: e,
            style: s,
            weight: P(i.weight, t.weight),
            string: ""
        };
        return n.string = Aa(n), n
    }

    function Zt(i, t, e, s) {
        let n = !0,
            o, a, r;
        for (o = 0, a = i.length; o < a; ++o)
            if (r = i[o], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n = !1), e !== void 0 && F(r) && (r = r[e % r.length], n = !1), r !== void 0)) return s && !n && (s.cacheable = !1), r
    }

    function fn(i, t, e) {
        let {
            min: s,
            max: n
        } = i, o = vi(t, (n - s) / 2), a = (r, l) => e && r === 0 ? 0 : r + l;
        return {
            min: a(s, -Math.abs(o)),
            max: a(n, o)
        }
    }

    function bt(i, t) {
        return Object.assign(Object.create(i), t)
    }

    function Ye(i, t = [""], e, s, n = () => i[0]) {
        let o = e || i;
        typeof s > "u" && (s = mn("_fallback", i));
        let a = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: i,
            _rootScopes: o,
            _fallback: s,
            _getTarget: n,
            override: r => Ye([r, ...i], t, o, s)
        };
        return new Proxy(a, {
            deleteProperty(r, l) {
                return delete r[l], delete r._keys, delete i[0][l], !0
            },
            get(r, l) {
                return gn(r, l, () => Ya(l, t, i, r))
            },
            getOwnPropertyDescriptor(r, l) {
                return Reflect.getOwnPropertyDescriptor(r._scopes[0], l)
            },
            getPrototypeOf() {
                return Reflect.getPrototypeOf(i[0])
            },
            has(r, l) {
                return Ys(r).includes(l)
            },
            ownKeys(r) {
                return Ys(r)
            },
            set(r, l, c) {
                let h = r._storage || (r._storage = n());
                return r[l] = h[l] = c, delete r._keys, !0
            }
        })
    }

    function Rt(i, t, e, s) {
        let n = {
            _cacheable: !1,
            _proxy: i,
            _context: t,
            _subProxy: e,
            _stack: new Set,
            _descriptors: Bi(i, s),
            setContext: o => Rt(i, o, e, s),
            override: o => Rt(i.override(o), t, e, s)
        };
        return new Proxy(n, {
            deleteProperty(o, a) {
                return delete o[a], delete i[a], !0
            },
            get(o, a, r) {
                return gn(o, a, () => Va(o, a, r))
            },
            getOwnPropertyDescriptor(o, a) {
                return o._descriptors.allKeys ? Reflect.has(i, a) ? {
                    enumerable: !0,
                    configurable: !0
                } : void 0 : Reflect.getOwnPropertyDescriptor(i, a)
            },
            getPrototypeOf() {
                return Reflect.getPrototypeOf(i)
            },
            has(o, a) {
                return Reflect.has(i, a)
            },
            ownKeys() {
                return Reflect.ownKeys(i)
            },
            set(o, a, r) {
                return i[a] = r, delete o[a], !0
            }
        })
    }

    function Bi(i, t = {
        scriptable: !0,
        indexable: !0
    }) {
        let {
            _scriptable: e = t.scriptable,
            _indexable: s = t.indexable,
            _allKeys: n = t.allKeys
        } = i;
        return {
            allKeys: n,
            scriptable: e,
            indexable: s,
            isScriptable: gt(e) ? e : () => e,
            isIndexable: gt(s) ? s : () => s
        }
    }
    var Ba = (i, t) => i ? i + Be(t) : t,
        Vi = (i, t) => O(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);

    function gn(i, t, e) {
        if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
        let s = e();
        return i[t] = s, s
    }

    function Va(i, t, e) {
        let {
            _proxy: s,
            _context: n,
            _subProxy: o,
            _descriptors: a
        } = i, r = s[t];
        return gt(r) && a.isScriptable(t) && (r = Wa(t, r, i, e)), F(r) && r.length && (r = Na(t, r, i, a.isIndexable)), Vi(t, r) && (r = Rt(r, n, o && o[t], a)), r
    }

    function Wa(i, t, e, s) {
        let {
            _proxy: n,
            _context: o,
            _subProxy: a,
            _stack: r
        } = e;
        if (r.has(i)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i);
        r.add(i);
        let l = t(o, a || s);
        return r.delete(i), Vi(i, l) && (l = Wi(n._scopes, n, i, l)), l
    }

    function Na(i, t, e, s) {
        let {
            _proxy: n,
            _context: o,
            _subProxy: a,
            _descriptors: r
        } = e;
        if (typeof o.index < "u" && s(i)) return t[o.index % t.length];
        if (O(t[0])) {
            let l = t,
                c = n._scopes.filter(h => h !== l);
            t = [];
            for (let h of l) {
                let d = Wi(c, n, i, h);
                t.push(Rt(d, o, a && a[i], r))
            }
        }
        return t
    }

    function pn(i, t, e) {
        return gt(i) ? i(t, e) : i
    }
    var Ha = (i, t) => i === !0 ? t : typeof i == "string" ? mt(t, i) : void 0;

    function ja(i, t, e, s, n) {
        for (let o of t) {
            let a = Ha(e, o);
            if (a) {
                i.add(a);
                let r = pn(a._fallback, e, n);
                if (typeof r < "u" && r !== e && r !== s) return r
            } else if (a === !1 && typeof s < "u" && e !== s) return null
        }
        return !1
    }

    function Wi(i, t, e, s) {
        let n = t._rootScopes,
            o = pn(t._fallback, e, s),
            a = [...i, ...n],
            r = new Set;
        r.add(s);
        let l = $s(r, a, e, o || e, s);
        return l === null || typeof o < "u" && o !== e && (l = $s(r, a, o, l, s), l === null) ? !1 : Ye(Array.from(r), [""], n, o, () => $a(t, e, s))
    }

    function $s(i, t, e, s, n) {
        for (; e;) e = ja(i, t, e, s, n);
        return e
    }

    function $a(i, t, e) {
        let s = i._getTarget();
        t in s || (s[t] = {});
        let n = s[t];
        return F(n) && O(e) ? e : n || {}
    }

    function Ya(i, t, e, s) {
        let n;
        for (let o of t)
            if (n = mn(Ba(o, i), e), typeof n < "u") return Vi(i, n) ? Wi(e, s, i, n) : n
    }

    function mn(i, t) {
        for (let e of t) {
            if (!e) continue;
            let s = e[i];
            if (typeof s < "u") return s
        }
    }

    function Ys(i) {
        let t = i._keys;
        return t || (t = i._keys = Ua(i._scopes)), t
    }

    function Ua(i) {
        let t = new Set;
        for (let e of i)
            for (let s of Object.keys(e).filter(n => !n.startsWith("_"))) t.add(s);
        return Array.from(t)
    }

    function Ni(i, t, e, s) {
        let {
            iScale: n
        } = i, {
            key: o = "r"
        } = this._parsing, a = new Array(s), r, l, c, h;
        for (r = 0, l = s; r < l; ++r) c = r + e, h = t[c], a[r] = {
            r: n.parse(mt(h, o), c)
        };
        return a
    }
    var Xa = Number.EPSILON || 1e-14,
        $t = (i, t) => t < i.length && !i[t].skip && i[t],
        bn = i => i === "x" ? "y" : "x";

    function Ka(i, t, e, s) {
        let n = i.skip ? t : i,
            o = t,
            a = e.skip ? t : e,
            r = Ie(o, n),
            l = Ie(a, o),
            c = r / (r + l),
            h = l / (r + l);
        c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
        let d = s * c,
            u = s * h;
        return {
            previous: {
                x: o.x - d * (a.x - n.x),
                y: o.y - d * (a.y - n.y)
            },
            next: {
                x: o.x + u * (a.x - n.x),
                y: o.y + u * (a.y - n.y)
            }
        }
    }

    function qa(i, t, e) {
        let s = i.length,
            n, o, a, r, l, c = $t(i, 0);
        for (let h = 0; h < s - 1; ++h)
            if (l = c, c = $t(i, h + 1), !(!l || !c)) {
                if (Xt(t[h], 0, Xa)) {
                    e[h] = e[h + 1] = 0;
                    continue
                }
                n = e[h] / t[h], o = e[h + 1] / t[h], r = Math.pow(n, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[h] = n * a * t[h], e[h + 1] = o * a * t[h])
            }
    }

    function Ga(i, t, e = "x") {
        let s = bn(e),
            n = i.length,
            o, a, r, l = $t(i, 0);
        for (let c = 0; c < n; ++c) {
            if (a = r, r = l, l = $t(i, c + 1), !r) continue;
            let h = r[e],
                d = r[s];
            a && (o = (h - a[e]) / 3, r[`cp1${e}`] = h - o, r[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, r[`cp2${e}`] = h + o, r[`cp2${s}`] = d + o * t[c])
        }
    }

    function Za(i, t = "x") {
        let e = bn(t),
            s = i.length,
            n = Array(s).fill(0),
            o = Array(s),
            a, r, l, c = $t(i, 0);
        for (a = 0; a < s; ++a)
            if (r = l, l = c, c = $t(i, a + 1), !!l) {
                if (c) {
                    let h = c[t] - l[t];
                    n[a] = h !== 0 ? (c[e] - l[e]) / h : 0
                }
                o[a] = r ? c ? nt(n[a - 1]) !== nt(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a]
            }
        qa(i, n, o), Ga(i, o, t)
    }

    function Le(i, t, e) {
        return Math.max(Math.min(i, e), t)
    }

    function Ja(i, t) {
        let e, s, n, o, a, r = rt(i[0], t);
        for (e = 0, s = i.length; e < s; ++e) a = o, o = r, r = e < s - 1 && rt(i[e + 1], t), o && (n = i[e], a && (n.cp1x = Le(n.cp1x, t.left, t.right), n.cp1y = Le(n.cp1y, t.top, t.bottom)), r && (n.cp2x = Le(n.cp2x, t.left, t.right), n.cp2y = Le(n.cp2y, t.top, t.bottom)))
    }

    function xn(i, t, e, s, n) {
        let o, a, r, l;
        if (t.spanGaps && (i = i.filter(c => !c.skip)), t.cubicInterpolationMode === "monotone") Za(i, n);
        else {
            let c = s ? i[i.length - 1] : i[0];
            for (o = 0, a = i.length; o < a; ++o) r = i[o], l = Ka(c, r, i[Math.min(o + 1, a - (s ? 0 : 1)) % a], t.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r
        }
        t.capBezierPoints && Ja(i, e)
    }

    function Ue() {
        return typeof window < "u" && typeof document < "u"
    }

    function Xe(i) {
        let t = i.parentNode;
        return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t
    }

    function ze(i, t, e) {
        let s;
        return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s
    }
    var Ke = i => i.ownerDocument.defaultView.getComputedStyle(i, null);

    function Qa(i, t) {
        return Ke(i).getPropertyValue(t)
    }
    var tr = ["top", "right", "bottom", "left"];

    function Lt(i, t, e) {
        let s = {};
        e = e ? "-" + e : "";
        for (let n = 0; n < 4; n++) {
            let o = tr[n];
            s[o] = parseFloat(i[t + "-" + o + e]) || 0
        }
        return s.width = s.left + s.right, s.height = s.top + s.bottom, s
    }
    var er = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);

    function ir(i, t) {
        let e = i.touches,
            s = e && e.length ? e[0] : i,
            {
                offsetX: n,
                offsetY: o
            } = s,
            a = !1,
            r, l;
        if (er(n, o, i.target)) r = n, l = o;
        else {
            let c = t.getBoundingClientRect();
            r = s.clientX - c.left, l = s.clientY - c.top, a = !0
        }
        return {
            x: r,
            y: l,
            box: a
        }
    }

    function Dt(i, t) {
        if ("native" in i) return i;
        let {
            canvas: e,
            currentDevicePixelRatio: s
        } = t, n = Ke(e), o = n.boxSizing === "border-box", a = Lt(n, "padding"), r = Lt(n, "border", "width"), {
            x: l,
            y: c,
            box: h
        } = ir(i, e), d = a.left + (h && r.left), u = a.top + (h && r.top), {
            width: f,
            height: g
        } = t;
        return o && (f -= a.width + r.width, g -= a.height + r.height), {
            x: Math.round((l - d) / f * e.width / s),
            y: Math.round((c - u) / g * e.height / s)
        }
    }

    function sr(i, t, e) {
        let s, n;
        if (t === void 0 || e === void 0) {
            let o = Xe(i);
            if (!o) t = i.clientWidth, e = i.clientHeight;
            else {
                let a = o.getBoundingClientRect(),
                    r = Ke(o),
                    l = Lt(r, "border", "width"),
                    c = Lt(r, "padding");
                t = a.width - c.width - l.width, e = a.height - c.height - l.height, s = ze(r.maxWidth, o, "clientWidth"), n = ze(r.maxHeight, o, "clientHeight")
            }
        }
        return {
            width: t,
            height: e,
            maxWidth: s || Fe,
            maxHeight: n || Fe
        }
    }
    var Re = i => Math.round(i * 10) / 10;

    function _n(i, t, e, s) {
        let n = Ke(i),
            o = Lt(n, "margin"),
            a = ze(n.maxWidth, i, "clientWidth") || Fe,
            r = ze(n.maxHeight, i, "clientHeight") || Fe,
            l = sr(i, t, e),
            {
                width: c,
                height: h
            } = l;
        if (n.boxSizing === "content-box") {
            let u = Lt(n, "border", "width"),
                f = Lt(n, "padding");
            c -= f.width + u.width, h -= f.height + u.height
        }
        return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = Re(Math.min(c, a, l.maxWidth)), h = Re(Math.min(h, r, l.maxHeight)), c && !h && (h = Re(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Re(Math.floor(h * s))), {
            width: c,
            height: h
        }
    }

    function Hi(i, t, e) {
        let s = t || 1,
            n = Math.floor(i.height * s),
            o = Math.floor(i.width * s);
        i.height = Math.floor(i.height), i.width = Math.floor(i.width);
        let a = i.canvas;
        return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${i.height}px`, a.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || a.height !== n || a.width !== o ? (i.currentDevicePixelRatio = s, a.height = n, a.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1
    }
    var yn = function() {
        let i = !1;
        try {
            let t = {
                get passive() {
                    return i = !0, !1
                }
            };
            Ue() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t))
        } catch {}
        return i
    }();

    function ji(i, t) {
        let e = Qa(i, t),
            s = e && e.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0
    }

    function Mt(i, t, e, s) {
        return {
            x: i.x + e * (t.x - i.x),
            y: i.y + e * (t.y - i.y)
        }
    }

    function vn(i, t, e, s) {
        return {
            x: i.x + e * (t.x - i.x),
            y: s === "middle" ? e < .5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
        }
    }

    function Mn(i, t, e, s) {
        let n = {
                x: i.cp2x,
                y: i.cp2y
            },
            o = {
                x: t.cp1x,
                y: t.cp1y
            },
            a = Mt(i, n, e),
            r = Mt(n, o, e),
            l = Mt(o, t, e),
            c = Mt(a, r, e),
            h = Mt(r, l, e);
        return Mt(c, h, e)
    }
    var nr = function(i, t) {
            return {
                x(e) {
                    return i + i + t - e
                },
                setWidth(e) {
                    t = e
                },
                textAlign(e) {
                    return e === "center" ? e : e === "right" ? "left" : "right"
                },
                xPlus(e, s) {
                    return e - s
                },
                leftForLtr(e, s) {
                    return e - s
                }
            }
        },
        or = function() {
            return {
                x(i) {
                    return i
                },
                setWidth(i) {},
                textAlign(i) {
                    return i
                },
                xPlus(i, t) {
                    return i + t
                },
                leftForLtr(i, t) {
                    return i
                }
            }
        };

    function Ft(i, t, e) {
        return i ? nr(t, e) : or()
    }

    function $i(i, t) {
        let e, s;
        (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", t, "important"), i.prevTextDirection = s)
    }

    function Yi(i, t) {
        t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]))
    }

    function kn(i) {
        return i === "angle" ? {
            between: Kt,
            compare: Ma,
            normalize: G
        } : {
            between: ct,
            compare: (t, e) => t - e,
            normalize: t => t
        }
    }

    function Us({
        start: i,
        end: t,
        count: e,
        loop: s,
        style: n
    }) {
        return {
            start: i % e,
            end: t % e,
            loop: s && (t - i + 1) % e === 0,
            style: n
        }
    }

    function ar(i, t, e) {
        let {
            property: s,
            start: n,
            end: o
        } = e, {
            between: a,
            normalize: r
        } = kn(s), l = t.length, {
            start: c,
            end: h,
            loop: d
        } = i, u, f;
        if (d) {
            for (c += l, h += l, u = 0, f = l; u < f && a(r(t[c % l][s]), n, o); ++u) c--, h--;
            c %= l, h %= l
        }
        return h < c && (h += l), {
            start: c,
            end: h,
            loop: d,
            style: i.style
        }
    }

    function Ui(i, t, e) {
        if (!e) return [i];
        let {
            property: s,
            start: n,
            end: o
        } = e, a = t.length, {
            compare: r,
            between: l,
            normalize: c
        } = kn(s), {
            start: h,
            end: d,
            loop: u,
            style: f
        } = ar(i, t, e), g = [], p = !1, m = null, b, x, v, y = () => l(n, v, b) && r(n, v) !== 0, _ = () => r(o, b) === 0 || l(o, v, b), M = () => p || y(), k = () => !p || _();
        for (let w = h, S = h; w <= d; ++w) x = t[w % a], !x.skip && (b = c(x[s]), b !== v && (p = l(b, n, o), m === null && M() && (m = r(b, n) === 0 ? w : S), m !== null && k() && (g.push(Us({
            start: m,
            end: w,
            loop: u,
            count: a,
            style: f
        })), m = null), S = w, v = b));
        return m !== null && g.push(Us({
            start: m,
            end: d,
            loop: u,
            count: a,
            style: f
        })), g
    }

    function Xi(i, t) {
        let e = [],
            s = i.segments;
        for (let n = 0; n < s.length; n++) {
            let o = Ui(s[n], i.points, t);
            o.length && e.push(...o)
        }
        return e
    }

    function rr(i, t, e, s) {
        let n = 0,
            o = t - 1;
        if (e && !s)
            for (; n < t && !i[n].skip;) n++;
        for (; n < t && i[n].skip;) n++;
        for (n %= t, e && (o += n); o > n && i[o % t].skip;) o--;
        return o %= t, {
            start: n,
            end: o
        }
    }

    function lr(i, t, e, s) {
        let n = i.length,
            o = [],
            a = t,
            r = i[t],
            l;
        for (l = t + 1; l <= e; ++l) {
            let c = i[l % n];
            c.skip || c.stop ? r.skip || (s = !1, o.push({
                start: t % n,
                end: (l - 1) % n,
                loop: s
            }), t = a = c.stop ? l : null) : (a = l, r.skip && (t = l)), r = c
        }
        return a !== null && o.push({
            start: t % n,
            end: a % n,
            loop: s
        }), o
    }

    function wn(i, t) {
        let e = i.points,
            s = i.options.spanGaps,
            n = e.length;
        if (!n) return [];
        let o = !!i._loop,
            {
                start: a,
                end: r
            } = rr(e, n, o, s);
        if (s === !0) return Xs(i, [{
            start: a,
            end: r,
            loop: o
        }], e, t);
        let l = r < a ? r + n : r,
            c = !!i._fullLoop && a === 0 && r === n - 1;
        return Xs(i, lr(e, a, l, c), e, t)
    }

    function Xs(i, t, e, s) {
        return !s || !s.setContext || !e ? t : cr(i, t, e, s)
    }

    function cr(i, t, e, s) {
        let n = i._chart.getContext(),
            o = Ks(i.options),
            {
                _datasetIndex: a,
                options: {
                    spanGaps: r
                }
            } = i,
            l = e.length,
            c = [],
            h = o,
            d = t[0].start,
            u = d;

        function f(g, p, m, b) {
            let x = r ? -1 : 1;
            if (g !== p) {
                for (g += l; e[g % l].skip;) g -= x;
                for (; e[p % l].skip;) p += x;
                g % l !== p % l && (c.push({
                    start: g % l,
                    end: p % l,
                    loop: m,
                    style: b
                }), h = b, d = p % l)
            }
        }
        for (let g of t) {
            d = r ? d : g.start;
            let p = e[d % l],
                m;
            for (u = d + 1; u <= g.end; u++) {
                let b = e[u % l];
                m = Ks(s.setContext(bt(n, {
                    type: "segment",
                    p0: p,
                    p1: b,
                    p0DataIndex: (u - 1) % l,
                    p1DataIndex: u % l,
                    datasetIndex: a
                }))), hr(m, h) && f(d, u - 1, g.loop, h), p = b, h = m
            }
            d < u - 1 && f(d, u - 1, g.loop, h)
        }
        return c
    }

    function Ks(i) {
        return {
            backgroundColor: i.backgroundColor,
            borderCapStyle: i.borderCapStyle,
            borderDash: i.borderDash,
            borderDashOffset: i.borderDashOffset,
            borderJoinStyle: i.borderJoinStyle,
            borderWidth: i.borderWidth,
            borderColor: i.borderColor
        }
    }

    function hr(i, t) {
        if (!t) return !1;
        let e = [],
            s = function(n, o) {
                return Ri(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o
            };
        return JSON.stringify(i, s) !== JSON.stringify(t, s)
    }
    var ss = class {
            constructor() {
                this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
            }
            _notify(t, e, s, n) {
                let o = e.listeners[n],
                    a = e.duration;
                o.forEach(r => r({
                    chart: t,
                    initial: e.initial,
                    numSteps: a,
                    currentStep: Math.min(s - e.start, a)
                }))
            }
            _refresh() {
                this._request || (this._running = !0, this._request = Oi.call(window, () => {
                    this._update(), this._request = null, this._running && this._refresh()
                }))
            }
            _update(t = Date.now()) {
                let e = 0;
                this._charts.forEach((s, n) => {
                    if (!s.running || !s.items.length) return;
                    let o = s.items,
                        a = o.length - 1,
                        r = !1,
                        l;
                    for (; a >= 0; --a) l = o[a], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
                    r && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length
                }), this._lastDate = t, e === 0 && (this._running = !1)
            }
            _getAnims(t) {
                let e = this._charts,
                    s = e.get(t);
                return s || (s = {
                    running: !1,
                    initial: !0,
                    items: [],
                    listeners: {
                        complete: [],
                        progress: []
                    }
                }, e.set(t, s)), s
            }
            listen(t, e, s) {
                this._getAnims(t).listeners[e].push(s)
            }
            add(t, e) {
                !e || !e.length || this._getAnims(t).items.push(...e)
            }
            has(t) {
                return this._getAnims(t).items.length > 0
            }
            start(t) {
                let e = this._charts.get(t);
                e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh())
            }
            running(t) {
                if (!this._running) return !1;
                let e = this._charts.get(t);
                return !(!e || !e.running || !e.items.length)
            }
            stop(t) {
                let e = this._charts.get(t);
                if (!e || !e.items.length) return;
                let s = e.items,
                    n = s.length - 1;
                for (; n >= 0; --n) s[n].cancel();
                e.items = [], this._notify(t, e, Date.now(), "complete")
            }
            remove(t) {
                return this._charts.delete(t)
            }
        },
        xt = new ss,
        Sn = "transparent",
        dr = {
            boolean(i, t, e) {
                return e > .5 ? t : i
            },
            color(i, t, e) {
                let s = Ei(i || Sn),
                    n = s.valid && Ei(t || Sn);
                return n && n.valid ? n.mix(s, e).hexString() : t
            },
            number(i, t, e) {
                return i + (t - i) * e
            }
        },
        ns = class {
            constructor(t, e, s, n) {
                let o = e[s];
                n = Zt([t.to, n, o, t.from]);
                let a = Zt([t.from, o, n]);
                this._active = !0, this._fn = t.fn || dr[t.type || typeof a], this._easing = Ht[t.easing] || Ht.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = a, this._to = n, this._promises = void 0
            }
            active() {
                return this._active
            }
            update(t, e, s) {
                if (this._active) {
                    this._notify(!1);
                    let n = this._target[this._prop],
                        o = s - this._start,
                        a = this._duration - o;
                    this._start = s, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Zt([t.to, e, n, t.from]), this._from = Zt([t.from, n, e])
                }
            }
            cancel() {
                this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
            }
            tick(t) {
                let e = t - this._start,
                    s = this._duration,
                    n = this._prop,
                    o = this._from,
                    a = this._loop,
                    r = this._to,
                    l;
                if (this._active = o !== r && (a || e < s), !this._active) {
                    this._target[n] = r, this._notify(!0);
                    return
                }
                if (e < 0) {
                    this._target[n] = o;
                    return
                }
                l = e / s % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, r, l)
            }
            wait() {
                let t = this._promises || (this._promises = []);
                return new Promise((e, s) => {
                    t.push({
                        res: e,
                        rej: s
                    })
                })
            }
            _notify(t) {
                let e = t ? "res" : "rej",
                    s = this._promises || [];
                for (let n = 0; n < s.length; n++) s[n][e]()
            }
        },
        ni = class {
            constructor(t, e) {
                this._chart = t, this._properties = new Map, this.configure(e)
            }
            configure(t) {
                if (!O(t)) return;
                let e = Object.keys(W.animation),
                    s = this._properties;
                Object.getOwnPropertyNames(t).forEach(n => {
                    let o = t[n];
                    if (!O(o)) return;
                    let a = {};
                    for (let r of e) a[r] = o[r];
                    (F(o.properties) && o.properties || [n]).forEach(r => {
                        (r === n || !s.has(r)) && s.set(r, a)
                    })
                })
            }
            _animateOptions(t, e) {
                let s = e.options,
                    n = fr(t, s);
                if (!n) return [];
                let o = this._createAnimations(n, s);
                return s.$shared && ur(t.options.$animations, s).then(() => {
                    t.options = s
                }, () => {}), o
            }
            _createAnimations(t, e) {
                let s = this._properties,
                    n = [],
                    o = t.$animations || (t.$animations = {}),
                    a = Object.keys(e),
                    r = Date.now(),
                    l;
                for (l = a.length - 1; l >= 0; --l) {
                    let c = a[l];
                    if (c.charAt(0) === "$") continue;
                    if (c === "options") {
                        n.push(...this._animateOptions(t, e));
                        continue
                    }
                    let h = e[c],
                        d = o[c],
                        u = s.get(c);
                    if (d)
                        if (u && d.active()) {
                            d.update(u, h, r);
                            continue
                        } else d.cancel();
                    if (!u || !u.duration) {
                        t[c] = h;
                        continue
                    }
                    o[c] = d = new ns(u, t, c, h), n.push(d)
                }
                return n
            }
            update(t, e) {
                if (this._properties.size === 0) {
                    Object.assign(t, e);
                    return
                }
                let s = this._createAnimations(t, e);
                if (s.length) return xt.add(this._chart, s), !0
            }
        };

    function ur(i, t) {
        let e = [],
            s = Object.keys(t);
        for (let n = 0; n < s.length; n++) {
            let o = i[s[n]];
            o && o.active() && e.push(o.wait())
        }
        return Promise.all(e)
    }

    function fr(i, t) {
        if (!t) return;
        let e = i.options;
        if (!e) {
            i.options = t;
            return
        }
        return e.$shared && (i.options = e = Object.assign({}, e, {
            $shared: !1,
            $animations: {}
        })), e
    }

    function Pn(i, t) {
        let e = i && i.options || {},
            s = e.reverse,
            n = e.min === void 0 ? t : 0,
            o = e.max === void 0 ? t : 0;
        return {
            start: s ? o : n,
            end: s ? n : o
        }
    }

    function gr(i, t, e) {
        if (e === !1) return !1;
        let s = Pn(i, e),
            n = Pn(t, e);
        return {
            top: n.end,
            right: s.end,
            bottom: n.start,
            left: s.start
        }
    }

    function pr(i) {
        let t, e, s, n;
        return O(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
            top: t,
            right: e,
            bottom: s,
            left: n,
            disabled: i === !1
        }
    }

    function Po(i, t) {
        let e = [],
            s = i._getSortedDatasetMetas(t),
            n, o;
        for (n = 0, o = s.length; n < o; ++n) e.push(s[n].index);
        return e
    }

    function Dn(i, t, e, s = {}) {
        let n = i.keys,
            o = s.mode === "single",
            a, r, l, c;
        if (t !== null) {
            for (a = 0, r = n.length; a < r; ++a) {
                if (l = +n[a], l === e) {
                    if (s.all) continue;
                    break
                }
                c = i.values[l], V(c) && (o || t === 0 || nt(t) === nt(c)) && (t += c)
            }
            return t
        }
    }

    function mr(i) {
        let t = Object.keys(i),
            e = new Array(t.length),
            s, n, o;
        for (s = 0, n = t.length; s < n; ++s) o = t[s], e[s] = {
            x: o,
            y: i[o]
        };
        return e
    }

    function Cn(i, t) {
        let e = i && i.options.stacked;
        return e || e === void 0 && t.stack !== void 0
    }

    function br(i, t, e) {
        return `${i.id}.${t.id}.${e.stack||e.type}`
    }

    function xr(i) {
        let {
            min: t,
            max: e,
            minDefined: s,
            maxDefined: n
        } = i.getUserBounds();
        return {
            min: s ? t : Number.NEGATIVE_INFINITY,
            max: n ? e : Number.POSITIVE_INFINITY
        }
    }

    function _r(i, t, e) {
        let s = i[t] || (i[t] = {});
        return s[e] || (s[e] = {})
    }

    function On(i, t, e, s) {
        for (let n of t.getMatchingVisibleMetas(s).reverse()) {
            let o = i[n.index];
            if (e && o > 0 || !e && o < 0) return n.index
        }
        return null
    }

    function An(i, t) {
        let {
            chart: e,
            _cachedMeta: s
        } = i, n = e._stacks || (e._stacks = {}), {
            iScale: o,
            vScale: a,
            index: r
        } = s, l = o.axis, c = a.axis, h = br(o, a, s), d = t.length, u;
        for (let f = 0; f < d; ++f) {
            let g = t[f],
                {
                    [l]: p,
                    [c]: m
                } = g,
                b = g._stacks || (g._stacks = {});
            u = b[c] = _r(n, h, p), u[r] = m, u._top = On(u, a, !0, s.type), u._bottom = On(u, a, !1, s.type);
            let x = u._visualValues || (u._visualValues = {});
            x[r] = m
        }
    }

    function Ki(i, t) {
        let e = i.scales;
        return Object.keys(e).filter(s => e[s].axis === t).shift()
    }

    function yr(i, t) {
        return bt(i, {
            active: !1,
            dataset: void 0,
            datasetIndex: t,
            index: t,
            mode: "default",
            type: "dataset"
        })
    }

    function vr(i, t, e) {
        return bt(i, {
            active: !1,
            dataIndex: t,
            parsed: void 0,
            raw: void 0,
            element: e,
            index: t,
            mode: "default",
            type: "data"
        })
    }

    function ge(i, t) {
        let e = i.controller.index,
            s = i.vScale && i.vScale.axis;
        if (s) {
            t = t || i._parsed;
            for (let n of t) {
                let o = n._stacks;
                if (!o || o[s] === void 0 || o[s][e] === void 0) return;
                delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e]
            }
        }
    }
    var qi = i => i === "reset" || i === "none",
        Tn = (i, t) => t ? i : Object.assign({}, i),
        Mr = (i, t, e) => i && !t.hidden && t._stacked && {
            keys: Po(e, !0),
            values: null
        },
        ut = class {
            static defaults = {};
            static datasetElementType = null;
            static dataElementType = null;
            constructor(t, e) {
                this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize()
            }
            initialize() {
                let t = this._cachedMeta;
                this.configure(), this.linkScales(), t._stacked = Cn(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
            }
            updateIndex(t) {
                this.index !== t && ge(this._cachedMeta), this.index = t
            }
            linkScales() {
                let t = this.chart,
                    e = this._cachedMeta,
                    s = this.getDataset(),
                    n = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f,
                    o = e.xAxisID = P(s.xAxisID, Ki(t, "x")),
                    a = e.yAxisID = P(s.yAxisID, Ki(t, "y")),
                    r = e.rAxisID = P(s.rAxisID, Ki(t, "r")),
                    l = e.indexAxis,
                    c = e.iAxisID = n(l, o, a, r),
                    h = e.vAxisID = n(l, a, o, r);
                e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h)
            }
            getDataset() {
                return this.chart.data.datasets[this.index]
            }
            getMeta() {
                return this.chart.getDatasetMeta(this.index)
            }
            getScaleForId(t) {
                return this.chart.scales[t]
            }
            _getOtherScale(t) {
                let e = this._cachedMeta;
                return t === e.iScale ? e.vScale : e.iScale
            }
            reset() {
                this._update("reset")
            }
            _destroy() {
                let t = this._cachedMeta;
                this._data && Di(this._data, this), t._stacked && ge(t)
            }
            _dataCheck() {
                let t = this.getDataset(),
                    e = t.data || (t.data = []),
                    s = this._data;
                if (O(e)) this._data = mr(e);
                else if (s !== e) {
                    if (s) {
                        Di(s, this);
                        let n = this._cachedMeta;
                        ge(n), n._parsed = []
                    }
                    e && Object.isExtensible(e) && an(e, this), this._syncList = [], this._data = e
                }
            }
            addElements() {
                let t = this._cachedMeta;
                this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType)
            }
            buildOrUpdateElements(t) {
                let e = this._cachedMeta,
                    s = this.getDataset(),
                    n = !1;
                this._dataCheck();
                let o = e._stacked;
                e._stacked = Cn(e.vScale, e), e.stack !== s.stack && (n = !0, ge(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && An(this, e._parsed)
            }
            configure() {
                let t = this.chart.config,
                    e = t.datasetScopeKeys(this._type),
                    s = t.getOptionScopes(this.getDataset(), e, !0);
                this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}
            }
            parse(t, e) {
                let {
                    _cachedMeta: s,
                    _data: n
                } = this, {
                    iScale: o,
                    _stacked: a
                } = s, r = o.axis, l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
                if (this._parsing === !1) s._parsed = n, s._sorted = !0, u = n;
                else {
                    F(n[t]) ? u = this.parseArrayData(s, n, t, e) : O(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
                    let f = () => d[r] === null || c && d[r] < c[r];
                    for (h = 0; h < e; ++h) s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
                    s._sorted = l
                }
                a && An(this, u)
            }
            parsePrimitiveData(t, e, s, n) {
                let {
                    iScale: o,
                    vScale: a
                } = t, r = o.axis, l = a.axis, c = o.getLabels(), h = o === a, d = new Array(n), u, f, g;
                for (u = 0, f = n; u < f; ++u) g = u + s, d[u] = {
                    [r]: h || o.parse(c[g], g),
                    [l]: a.parse(e[g], g)
                };
                return d
            }
            parseArrayData(t, e, s, n) {
                let {
                    xScale: o,
                    yScale: a
                } = t, r = new Array(n), l, c, h, d;
                for (l = 0, c = n; l < c; ++l) h = l + s, d = e[h], r[l] = {
                    x: o.parse(d[0], h),
                    y: a.parse(d[1], h)
                };
                return r
            }
            parseObjectData(t, e, s, n) {
                let {
                    xScale: o,
                    yScale: a
                } = t, {
                    xAxisKey: r = "x",
                    yAxisKey: l = "y"
                } = this._parsing, c = new Array(n), h, d, u, f;
                for (h = 0, d = n; h < d; ++h) u = h + s, f = e[u], c[h] = {
                    x: o.parse(mt(f, r), u),
                    y: a.parse(mt(f, l), u)
                };
                return c
            }
            getParsed(t) {
                return this._cachedMeta._parsed[t]
            }
            getDataElement(t) {
                return this._cachedMeta.data[t]
            }
            applyStack(t, e, s) {
                let n = this.chart,
                    o = this._cachedMeta,
                    a = e[t.axis],
                    r = {
                        keys: Po(n, !0),
                        values: e._stacks[t.axis]._visualValues
                    };
                return Dn(r, a, o.index, {
                    mode: s
                })
            }
            updateRangeFromParsed(t, e, s, n) {
                let o = s[e.axis],
                    a = o === null ? NaN : o,
                    r = n && s._stacks[e.axis];
                n && r && (n.values = r, a = Dn(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a)
            }
            getMinMax(t, e) {
                let s = this._cachedMeta,
                    n = s._parsed,
                    o = s._sorted && t === s.iScale,
                    a = n.length,
                    r = this._getOtherScale(t),
                    l = Mr(e, s, this.chart),
                    c = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY
                    },
                    {
                        min: h,
                        max: d
                    } = xr(r),
                    u, f;

                function g() {
                    f = n[u];
                    let p = f[r.axis];
                    return !V(f[t.axis]) || h > p || d < p
                }
                for (u = 0; u < a && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u);
                if (o) {
                    for (u = a - 1; u >= 0; --u)
                        if (!g()) {
                            this.updateRangeFromParsed(c, t, f, l);
                            break
                        }
                }
                return c
            }
            getAllParsedValues(t) {
                let e = this._cachedMeta._parsed,
                    s = [],
                    n, o, a;
                for (n = 0, o = e.length; n < o; ++n) a = e[n][t.axis], V(a) && s.push(a);
                return s
            }
            getMaxOverflow() {
                return !1
            }
            getLabelAndValue(t) {
                let e = this._cachedMeta,
                    s = e.iScale,
                    n = e.vScale,
                    o = this.getParsed(t);
                return {
                    label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
                    value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
                }
            }
            _update(t) {
                let e = this._cachedMeta;
                this.update(t || "default"), e._clip = pr(P(this.options.clip, gr(e.xScale, e.yScale, this.getMaxOverflow())))
            }
            update(t) {}
            draw() {
                let t = this._ctx,
                    e = this.chart,
                    s = this._cachedMeta,
                    n = s.data || [],
                    o = e.chartArea,
                    a = [],
                    r = this._drawStart || 0,
                    l = this._drawCount || n.length - r,
                    c = this.options.drawActiveElementsOnTop,
                    h;
                for (s.dataset && s.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
                    let d = n[h];
                    d.hidden || (d.active && c ? a.push(d) : d.draw(t, o))
                }
                for (h = 0; h < a.length; ++h) a[h].draw(t, o)
            }
            getStyle(t, e) {
                let s = e ? "active" : "default";
                return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s)
            }
            getContext(t, e, s) {
                let n = this.getDataset(),
                    o;
                if (t >= 0 && t < this._cachedMeta.data.length) {
                    let a = this._cachedMeta.data[t];
                    o = a.$context || (a.$context = vr(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t
                } else o = this.$context || (this.$context = yr(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
                return o.active = !!e, o.mode = s, o
            }
            resolveDatasetElementOptions(t) {
                return this._resolveElementOptions(this.datasetElementType.id, t)
            }
            resolveDataElementOptions(t, e) {
                return this._resolveElementOptions(this.dataElementType.id, e, t)
            }
            _resolveElementOptions(t, e = "default", s) {
                let n = e === "active",
                    o = this._cachedDataOpts,
                    a = t + "-" + e,
                    r = o[a],
                    l = this.enableOptionSharing && Ut(s);
                if (r) return Tn(r, l);
                let c = this.chart.config,
                    h = c.datasetElementScopeKeys(this._type, t),
                    d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                    u = c.getOptionScopes(this.getDataset(), h),
                    f = Object.keys(W.elements[t]),
                    g = () => this.getContext(s, n, e),
                    p = c.resolveNamedOptions(u, f, g, d);
                return p.$shared && (p.$shared = l, o[a] = Object.freeze(Tn(p, l))), p
            }
            _resolveAnimations(t, e, s) {
                let n = this.chart,
                    o = this._cachedDataOpts,
                    a = `animation-${e}`,
                    r = o[a];
                if (r) return r;
                let l;
                if (n.options.animation !== !1) {
                    let h = this.chart.config,
                        d = h.datasetAnimationScopeKeys(this._type, e),
                        u = h.getOptionScopes(this.getDataset(), d);
                    l = h.createResolver(u, this.getContext(t, s, e))
                }
                let c = new ni(n, l && l.animations);
                return l && l._cacheable && (o[a] = Object.freeze(c)), c
            }
            getSharedOptions(t) {
                if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
            }
            includeOptions(t, e) {
                return !e || qi(t) || this.chart._animationsDisabled
            }
            _getSharedOptions(t, e) {
                let s = this.resolveDataElementOptions(t, e),
                    n = this._sharedOptions,
                    o = this.getSharedOptions(s),
                    a = this.includeOptions(e, o) || o !== n;
                return this.updateSharedOptions(o, e, s), {
                    sharedOptions: o,
                    includeOptions: a
                }
            }
            updateElement(t, e, s, n) {
                qi(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s)
            }
            updateSharedOptions(t, e, s) {
                t && !qi(e) && this._resolveAnimations(void 0, e).update(t, s)
            }
            _setStyle(t, e, s, n) {
                t.active = n;
                let o = this.getStyle(e, n);
                this._resolveAnimations(e, s, n).update(t, {
                    options: !n && this.getSharedOptions(o) || o
                })
            }
            removeHoverStyle(t, e, s) {
                this._setStyle(t, s, "active", !1)
            }
            setHoverStyle(t, e, s) {
                this._setStyle(t, s, "active", !0)
            }
            _removeDatasetHoverStyle() {
                let t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !1)
            }
            _setDatasetHoverStyle() {
                let t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !0)
            }
            _resyncElements(t) {
                let e = this._data,
                    s = this._cachedMeta.data;
                for (let [r, l, c] of this._syncList) this[r](l, c);
                this._syncList = [];
                let n = s.length,
                    o = e.length,
                    a = Math.min(o, n);
                a && this.parse(0, a), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o)
            }
            _insertElements(t, e, s = !0) {
                let n = this._cachedMeta,
                    o = n.data,
                    a = t + e,
                    r, l = c => {
                        for (c.length += e, r = c.length - 1; r >= a; r--) c[r] = c[r - e]
                    };
                for (l(o), r = t; r < a; ++r) o[r] = new this.dataElementType;
                this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset")
            }
            updateElements(t, e, s, n) {}
            _removeElements(t, e) {
                let s = this._cachedMeta;
                if (this._parsing) {
                    let n = s._parsed.splice(t, e);
                    s._stacked && ge(s, n)
                }
                s.data.splice(t, e)
            }
            _sync(t) {
                if (this._parsing) this._syncList.push(t);
                else {
                    let [e, s, n] = t;
                    this[e](s, n)
                }
                this.chart._dataChanges.push([this.index, ...t])
            }
            _onDataPush() {
                let t = arguments.length;
                this._sync(["_insertElements", this.getDataset().data.length - t, t])
            }
            _onDataPop() {
                this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
            }
            _onDataShift() {
                this._sync(["_removeElements", 0, 1])
            }
            _onDataSplice(t, e) {
                e && this._sync(["_removeElements", t, e]);
                let s = arguments.length - 2;
                s && this._sync(["_insertElements", t, s])
            }
            _onDataUnshift() {
                this._sync(["_insertElements", 0, arguments.length])
            }
        };

    function kr(i, t) {
        if (!i._cache.$bar) {
            let e = i.getMatchingVisibleMetas(t),
                s = [];
            for (let n = 0, o = e.length; n < o; n++) s = s.concat(e[n].controller.getAllParsedValues(i));
            i._cache.$bar = Ci(s.sort((n, o) => n - o))
        }
        return i._cache.$bar
    }

    function wr(i) {
        let t = i.iScale,
            e = kr(t, i.type),
            s = t._length,
            n, o, a, r, l = () => {
                a === 32767 || a === -32768 || (Ut(r) && (s = Math.min(s, Math.abs(a - r) || s)), r = a)
            };
        for (n = 0, o = e.length; n < o; ++n) a = t.getPixelForValue(e[n]), l();
        for (r = void 0, n = 0, o = t.ticks.length; n < o; ++n) a = t.getPixelForTick(n), l();
        return s
    }

    function Sr(i, t, e, s) {
        let n = e.barThickness,
            o, a;
        return T(n) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = n * s, a = 1), {
            chunk: o / s,
            ratio: a,
            start: t.pixels[i] - o / 2
        }
    }

    function Pr(i, t, e, s) {
        let n = t.pixels,
            o = n[i],
            a = i > 0 ? n[i - 1] : null,
            r = i < n.length - 1 ? n[i + 1] : null,
            l = e.categoryPercentage;
        a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
        let c = o - (o - Math.min(a, r)) / 2 * l;
        return {
            chunk: Math.abs(r - a) / 2 * l / s,
            ratio: e.barPercentage,
            start: c
        }
    }

    function Dr(i, t, e, s) {
        let n = e.parse(i[0], s),
            o = e.parse(i[1], s),
            a = Math.min(n, o),
            r = Math.max(n, o),
            l = a,
            c = r;
        Math.abs(a) > Math.abs(r) && (l = r, c = a), t[e.axis] = c, t._custom = {
            barStart: l,
            barEnd: c,
            start: n,
            end: o,
            min: a,
            max: r
        }
    }

    function Do(i, t, e, s) {
        return F(i) ? Dr(i, t, e, s) : t[e.axis] = e.parse(i, s), t
    }

    function Ln(i, t, e, s) {
        let n = i.iScale,
            o = i.vScale,
            a = n.getLabels(),
            r = n === o,
            l = [],
            c, h, d, u;
        for (c = e, h = e + s; c < h; ++c) u = t[c], d = {}, d[n.axis] = r || n.parse(a[c], c), l.push(Do(u, d, o, c));
        return l
    }

    function Gi(i) {
        return i && i.barStart !== void 0 && i.barEnd !== void 0
    }

    function Cr(i, t, e) {
        return i !== 0 ? nt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1)
    }

    function Or(i) {
        let t, e, s, n, o;
        return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
            start: e,
            end: s,
            reverse: t,
            top: n,
            bottom: o
        }
    }

    function Ar(i, t, e, s) {
        let n = t.borderSkipped,
            o = {};
        if (!n) {
            i.borderSkipped = o;
            return
        }
        if (n === !0) {
            i.borderSkipped = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0
            };
            return
        }
        let {
            start: a,
            end: r,
            reverse: l,
            top: c,
            bottom: h
        } = Or(i);
        n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[Rn(h, a, r, l)] = !0, n = c)), o[Rn(n, a, r, l)] = !0, i.borderSkipped = o
    }

    function Rn(i, t, e, s) {
        return s ? (i = Tr(i, t, e), i = En(i, e, t)) : i = En(i, t, e), i
    }

    function Tr(i, t, e) {
        return i === t ? e : i === e ? t : i
    }

    function En(i, t, e) {
        return i === "start" ? t : i === "end" ? e : i
    }

    function Lr(i, {
        inflateAmount: t
    }, e) {
        i.inflateAmount = t === "auto" ? e === 1 ? .33 : 0 : t
    }
    var os = class extends ut {
            static id = "bar";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: !0,
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "base", "width", "height"]
                    }
                }
            };
            static overrides = {
                scales: {
                    _index_: {
                        type: "category",
                        offset: !0,
                        grid: {
                            offset: !0
                        }
                    },
                    _value_: {
                        type: "linear",
                        beginAtZero: !0
                    }
                }
            };
            parsePrimitiveData(t, e, s, n) {
                return Ln(t, e, s, n)
            }
            parseArrayData(t, e, s, n) {
                return Ln(t, e, s, n)
            }
            parseObjectData(t, e, s, n) {
                let {
                    iScale: o,
                    vScale: a
                } = t, {
                    xAxisKey: r = "x",
                    yAxisKey: l = "y"
                } = this._parsing, c = o.axis === "x" ? r : l, h = a.axis === "x" ? r : l, d = [], u, f, g, p;
                for (u = s, f = s + n; u < f; ++u) p = e[u], g = {}, g[o.axis] = o.parse(mt(p, c), u), d.push(Do(mt(p, h), g, a, u));
                return d
            }
            updateRangeFromParsed(t, e, s, n) {
                super.updateRangeFromParsed(t, e, s, n);
                let o = s._custom;
                o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max))
            }
            getMaxOverflow() {
                return 0
            }
            getLabelAndValue(t) {
                let e = this._cachedMeta,
                    {
                        iScale: s,
                        vScale: n
                    } = e,
                    o = this.getParsed(t),
                    a = o._custom,
                    r = Gi(a) ? "[" + a.start + ", " + a.end + "]" : "" + n.getLabelForValue(o[n.axis]);
                return {
                    label: "" + s.getLabelForValue(o[s.axis]),
                    value: r
                }
            }
            initialize() {
                this.enableOptionSharing = !0, super.initialize();
                let t = this._cachedMeta;
                t.stack = this.getDataset().stack
            }
            update(t) {
                let e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t)
            }
            updateElements(t, e, s, n) {
                let o = n === "reset",
                    {
                        index: a,
                        _cachedMeta: {
                            vScale: r
                        }
                    } = this,
                    l = r.getBasePixel(),
                    c = r.isHorizontal(),
                    h = this._getRuler(),
                    {
                        sharedOptions: d,
                        includeOptions: u
                    } = this._getSharedOptions(e, n);
                for (let f = e; f < e + s; f++) {
                    let g = this.getParsed(f),
                        p = o || T(g[r.axis]) ? {
                            base: l,
                            head: l
                        } : this._calculateBarValuePixels(f),
                        m = this._calculateBarIndexPixels(f, h),
                        b = (g._stacks || {})[r.axis],
                        x = {
                            horizontal: c,
                            base: p.base,
                            enableBorderRadius: !b || Gi(g._custom) || a === b._top || a === b._bottom,
                            x: c ? p.head : m.center,
                            y: c ? m.center : p.head,
                            height: c ? m.size : Math.abs(p.size),
                            width: c ? Math.abs(p.size) : m.size
                        };
                    u && (x.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
                    let v = x.options || t[f].options;
                    Ar(x, v, b, a), Lr(x, v, h.ratio), this.updateElement(t[f], f, x, n)
                }
            }
            _getStacks(t, e) {
                let {
                    iScale: s
                } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter(l => l.controller.options.grouped), o = s.options.stacked, a = [], r = l => {
                    let c = l.controller.getParsed(e),
                        h = c && c[l.vScale.axis];
                    if (T(h) || isNaN(h)) return !0
                };
                for (let l of n)
                    if (!(e !== void 0 && r(l)) && ((o === !1 || a.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && a.push(l.stack), l.index === t)) break;
                return a.length || a.push(void 0), a
            }
            _getStackCount(t) {
                return this._getStacks(void 0, t).length
            }
            _getStackIndex(t, e, s) {
                let n = this._getStacks(t, s),
                    o = e !== void 0 ? n.indexOf(e) : -1;
                return o === -1 ? n.length - 1 : o
            }
            _getRuler() {
                let t = this.options,
                    e = this._cachedMeta,
                    s = e.iScale,
                    n = [],
                    o, a;
                for (o = 0, a = e.data.length; o < a; ++o) n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
                let r = t.barThickness;
                return {
                    min: r || wr(e),
                    pixels: n,
                    start: s._startPixel,
                    end: s._endPixel,
                    stackCount: this._getStackCount(),
                    scale: s,
                    grouped: t.grouped,
                    ratio: r ? 1 : t.categoryPercentage * t.barPercentage
                }
            }
            _calculateBarValuePixels(t) {
                let {
                    _cachedMeta: {
                        vScale: e,
                        _stacked: s,
                        index: n
                    },
                    options: {
                        base: o,
                        minBarLength: a
                    }
                } = this, r = o || 0, l = this.getParsed(t), c = l._custom, h = Gi(c), d = l[e.axis], u = 0, f = s ? this.applyStack(e, l, s) : d, g, p;
                f !== d && (u = f - d, f = d), h && (d = c.barStart, f = c.barEnd - c.barStart, d !== 0 && nt(d) !== nt(c.barEnd) && (u = 0), u += d);
                let m = !T(o) && !h ? o : u,
                    b = e.getPixelForValue(m);
                if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = b, p = g - b, Math.abs(p) < a) {
                    p = Cr(p, e, r) * a, d === r && (b -= p / 2);
                    let x = e.getPixelForDecimal(0),
                        v = e.getPixelForDecimal(1),
                        y = Math.min(x, v),
                        _ = Math.max(x, v);
                    b = Math.max(Math.min(b, _), y), g = b + p, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(b))
                }
                if (b === e.getPixelForValue(r)) {
                    let x = nt(p) * e.getLineWidthForValue(r) / 2;
                    b += x, p -= x
                }
                return {
                    size: p,
                    base: b,
                    head: g,
                    center: g + p / 2
                }
            }
            _calculateBarIndexPixels(t, e) {
                let s = e.scale,
                    n = this.options,
                    o = n.skipNull,
                    a = P(n.maxBarThickness, 1 / 0),
                    r, l;
                if (e.grouped) {
                    let c = o ? this._getStackCount(t) : e.stackCount,
                        h = n.barThickness === "flex" ? Pr(t, e, n, c) : Sr(t, e, n, c),
                        d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
                    r = h.start + h.chunk * d + h.chunk / 2, l = Math.min(a, h.chunk * h.ratio)
                } else r = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(a, e.min * e.ratio);
                return {
                    base: r - l / 2,
                    head: r + l / 2,
                    center: r,
                    size: l
                }
            }
            draw() {
                let t = this._cachedMeta,
                    e = t.vScale,
                    s = t.data,
                    n = s.length,
                    o = 0;
                for (; o < n; ++o) this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx)
            }
        },
        as = class extends ut {
            static id = "bubble";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "borderWidth", "radius"]
                    }
                }
            };
            static overrides = {
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            initialize() {
                this.enableOptionSharing = !0, super.initialize()
            }
            parsePrimitiveData(t, e, s, n) {
                let o = super.parsePrimitiveData(t, e, s, n);
                for (let a = 0; a < o.length; a++) o[a]._custom = this.resolveDataElementOptions(a + s).radius;
                return o
            }
            parseArrayData(t, e, s, n) {
                let o = super.parseArrayData(t, e, s, n);
                for (let a = 0; a < o.length; a++) {
                    let r = e[s + a];
                    o[a]._custom = P(r[2], this.resolveDataElementOptions(a + s).radius)
                }
                return o
            }
            parseObjectData(t, e, s, n) {
                let o = super.parseObjectData(t, e, s, n);
                for (let a = 0; a < o.length; a++) {
                    let r = e[s + a];
                    o[a]._custom = P(r && r.r && +r.r, this.resolveDataElementOptions(a + s).radius)
                }
                return o
            }
            getMaxOverflow() {
                let t = this._cachedMeta.data,
                    e = 0;
                for (let s = t.length - 1; s >= 0; --s) e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
                return e > 0 && e
            }
            getLabelAndValue(t) {
                let e = this._cachedMeta,
                    s = this.chart.data.labels || [],
                    {
                        xScale: n,
                        yScale: o
                    } = e,
                    a = this.getParsed(t),
                    r = n.getLabelForValue(a.x),
                    l = o.getLabelForValue(a.y),
                    c = a._custom;
                return {
                    label: s[t] || "",
                    value: "(" + r + ", " + l + (c ? ", " + c : "") + ")"
                }
            }
            update(t) {
                let e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t)
            }
            updateElements(t, e, s, n) {
                let o = n === "reset",
                    {
                        iScale: a,
                        vScale: r
                    } = this._cachedMeta,
                    {
                        sharedOptions: l,
                        includeOptions: c
                    } = this._getSharedOptions(e, n),
                    h = a.axis,
                    d = r.axis;
                for (let u = e; u < e + s; u++) {
                    let f = t[u],
                        g = !o && this.getParsed(u),
                        p = {},
                        m = p[h] = o ? a.getPixelForDecimal(.5) : a.getPixelForValue(g[h]),
                        b = p[d] = o ? r.getBasePixel() : r.getPixelForValue(g[d]);
                    p.skip = isNaN(m) || isNaN(b), c && (p.options = l || this.resolveDataElementOptions(u, f.active ? "active" : n), o && (p.options.radius = 0)), this.updateElement(f, u, p, n)
                }
            }
            resolveDataElementOptions(t, e) {
                let s = this.getParsed(t),
                    n = super.resolveDataElementOptions(t, e);
                n.$shared && (n = Object.assign({}, n, {
                    $shared: !1
                }));
                let o = n.radius;
                return e !== "active" && (n.radius = 0), n.radius += P(s && s._custom, o), n
            }
        };

    function Rr(i, t, e) {
        let s = 1,
            n = 1,
            o = 0,
            a = 0;
        if (t < z) {
            let r = i,
                l = r + t,
                c = Math.cos(r),
                h = Math.sin(r),
                d = Math.cos(l),
                u = Math.sin(l),
                f = (v, y, _) => Kt(v, r, l, !0) ? 1 : Math.max(y, y * e, _, _ * e),
                g = (v, y, _) => Kt(v, r, l, !0) ? -1 : Math.min(y, y * e, _, _ * e),
                p = f(0, c, d),
                m = f(N, h, u),
                b = g(I, c, d),
                x = g(I + N, h, u);
            s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2
        }
        return {
            ratioX: s,
            ratioY: n,
            offsetX: o,
            offsetY: a
        }
    }
    var ve = class extends ut {
            static id = "doughnut";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
                    }
                },
                cutout: "50%",
                rotation: 0,
                circumference: 360,
                radius: "100%",
                spacing: 0,
                indexAxis: "r"
            };
            static descriptors = {
                _scriptable: t => t !== "spacing",
                _indexable: t => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
            };
            static overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                let e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    let {
                                        labels: {
                                            pointStyle: s,
                                            color: n
                                        }
                                    } = t.legend.options;
                                    return e.labels.map((o, a) => {
                                        let l = t.getDatasetMeta(0).controller.getStyle(a);
                                        return {
                                            text: o,
                                            fillStyle: l.backgroundColor,
                                            strokeStyle: l.borderColor,
                                            fontColor: n,
                                            lineWidth: l.borderWidth,
                                            pointStyle: s,
                                            hidden: !t.getDataVisibility(a),
                                            index: a
                                        }
                                    })
                                }
                                return []
                            }
                        },
                        onClick(t, e, s) {
                            s.chart.toggleDataVisibility(e.index), s.chart.update()
                        }
                    }
                }
            };
            constructor(t, e) {
                super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
            }
            linkScales() {}
            parse(t, e) {
                let s = this.getDataset().data,
                    n = this._cachedMeta;
                if (this._parsing === !1) n._parsed = s;
                else {
                    let o = l => +s[l];
                    if (O(s[t])) {
                        let {
                            key: l = "value"
                        } = this._parsing;
                        o = c => +mt(s[c], l)
                    }
                    let a, r;
                    for (a = t, r = t + e; a < r; ++a) n._parsed[a] = o(a)
                }
            }
            _getRotation() {
                return it(this.options.rotation - 90)
            }
            _getCircumference() {
                return it(this.options.circumference)
            }
            _getRotationExtents() {
                let t = z,
                    e = -z;
                for (let s = 0; s < this.chart.data.datasets.length; ++s)
                    if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
                        let n = this.chart.getDatasetMeta(s).controller,
                            o = n._getRotation(),
                            a = n._getCircumference();
                        t = Math.min(t, o), e = Math.max(e, o + a)
                    }
                return {
                    rotation: t,
                    circumference: e - t
                }
            }
            update(t) {
                let e = this.chart,
                    {
                        chartArea: s
                    } = e,
                    n = this._cachedMeta,
                    o = n.data,
                    a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
                    r = Math.max((Math.min(s.width, s.height) - a) / 2, 0),
                    l = Math.min(Gs(this.options.cutout, r), 1),
                    c = this._getRingWeight(this.index),
                    {
                        circumference: h,
                        rotation: d
                    } = this._getRotationExtents(),
                    {
                        ratioX: u,
                        ratioY: f,
                        offsetX: g,
                        offsetY: p
                    } = Rr(d, h, l),
                    m = (s.width - a) / u,
                    b = (s.height - a) / f,
                    x = Math.max(Math.min(m, b) / 2, 0),
                    v = vi(this.options.radius, x),
                    y = Math.max(v * l, 0),
                    _ = (v - y) / this._getVisibleDatasetWeightTotal();
                this.offsetX = g * v, this.offsetY = p * v, n.total = this.calculateTotal(), this.outerRadius = v - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t)
            }
            _circumference(t, e) {
                let s = this.options,
                    n = this._cachedMeta,
                    o = this._getCircumference();
                return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / z)
            }
            updateElements(t, e, s, n) {
                let o = n === "reset",
                    a = this.chart,
                    r = a.chartArea,
                    c = a.options.animation,
                    h = (r.left + r.right) / 2,
                    d = (r.top + r.bottom) / 2,
                    u = o && c.animateScale,
                    f = u ? 0 : this.innerRadius,
                    g = u ? 0 : this.outerRadius,
                    {
                        sharedOptions: p,
                        includeOptions: m
                    } = this._getSharedOptions(e, n),
                    b = this._getRotation(),
                    x;
                for (x = 0; x < e; ++x) b += this._circumference(x, o);
                for (x = e; x < e + s; ++x) {
                    let v = this._circumference(x, o),
                        y = t[x],
                        _ = {
                            x: h + this.offsetX,
                            y: d + this.offsetY,
                            startAngle: b,
                            endAngle: b + v,
                            circumference: v,
                            outerRadius: g,
                            innerRadius: f
                        };
                    m && (_.options = p || this.resolveDataElementOptions(x, y.active ? "active" : n)), b += v, this.updateElement(y, x, _, n)
                }
            }
            calculateTotal() {
                let t = this._cachedMeta,
                    e = t.data,
                    s = 0,
                    n;
                for (n = 0; n < e.length; n++) {
                    let o = t._parsed[n];
                    o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o))
                }
                return s
            }
            calculateCircumference(t) {
                let e = this._cachedMeta.total;
                return e > 0 && !isNaN(t) ? z * (Math.abs(t) / e) : 0
            }
            getLabelAndValue(t) {
                let e = this._cachedMeta,
                    s = this.chart,
                    n = s.data.labels || [],
                    o = qt(e._parsed[t], s.options.locale);
                return {
                    label: n[t] || "",
                    value: o
                }
            }
            getMaxBorderWidth(t) {
                let e = 0,
                    s = this.chart,
                    n, o, a, r, l;
                if (!t) {
                    for (n = 0, o = s.data.datasets.length; n < o; ++n)
                        if (s.isDatasetVisible(n)) {
                            a = s.getDatasetMeta(n), t = a.data, r = a.controller;
                            break
                        }
                }
                if (!t) return 0;
                for (n = 0, o = t.length; n < o; ++n) l = r.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
                return e
            }
            getMaxOffset(t) {
                let e = 0;
                for (let s = 0, n = t.length; s < n; ++s) {
                    let o = this.resolveDataElementOptions(s);
                    e = Math.max(e, o.offset || 0, o.hoverOffset || 0)
                }
                return e
            }
            _getRingWeightOffset(t) {
                let e = 0;
                for (let s = 0; s < t; ++s) this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
                return e
            }
            _getRingWeight(t) {
                return Math.max(P(this.chart.data.datasets[t].weight, 1), 0)
            }
            _getVisibleDatasetWeightTotal() {
                return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            }
        },
        rs = class extends ut {
            static id = "line";
            static defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                showLine: !0,
                spanGaps: !1
            };
            static overrides = {
                scales: {
                    _index_: {
                        type: "category"
                    },
                    _value_: {
                        type: "linear"
                    }
                }
            };
            initialize() {
                this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize()
            }
            update(t) {
                let e = this._cachedMeta,
                    {
                        dataset: s,
                        data: n = [],
                        _dataset: o
                    } = e,
                    a = this.chart._animationsDisabled,
                    {
                        start: r,
                        count: l
                    } = Ti(e, n, a);
                this._drawStart = r, this._drawCount = l, Li(e) && (r = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
                let c = this.resolveDatasetElementOptions(t);
                this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
                    animated: !a,
                    options: c
                }, t), this.updateElements(n, r, l, t)
            }
            updateElements(t, e, s, n) {
                let o = n === "reset",
                    {
                        iScale: a,
                        vScale: r,
                        _stacked: l,
                        _dataset: c
                    } = this._cachedMeta,
                    {
                        sharedOptions: h,
                        includeOptions: d
                    } = this._getSharedOptions(e, n),
                    u = a.axis,
                    f = r.axis,
                    {
                        spanGaps: g,
                        segment: p
                    } = this.options,
                    m = Et(g) ? g : Number.POSITIVE_INFINITY,
                    b = this.chart._animationsDisabled || o || n === "none",
                    x = e + s,
                    v = t.length,
                    y = e > 0 && this.getParsed(e - 1);
                for (let _ = 0; _ < v; ++_) {
                    let M = t[_],
                        k = b ? M : {};
                    if (_ < e || _ >= x) {
                        k.skip = !0;
                        continue
                    }
                    let w = this.getParsed(_),
                        S = T(w[f]),
                        D = k[u] = a.getPixelForValue(w[u], _),
                        C = k[f] = o || S ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, w, l) : w[f], _);
                    k.skip = isNaN(D) || isNaN(C) || S, k.stop = _ > 0 && Math.abs(w[u] - y[u]) > m, p && (k.parsed = w, k.raw = c.data[_]), d && (k.options = h || this.resolveDataElementOptions(_, M.active ? "active" : n)), b || this.updateElement(M, _, k, n), y = w
                }
            }
            getMaxOverflow() {
                let t = this._cachedMeta,
                    e = t.dataset,
                    s = e.options && e.options.borderWidth || 0,
                    n = t.data || [];
                if (!n.length) return s;
                let o = n[0].size(this.resolveDataElementOptions(0)),
                    a = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
                return Math.max(s, o, a) / 2
            }
            draw() {
                let t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
            }
        },
        oi = class extends ut {
            static id = "polarArea";
            static defaults = {
                dataElementType: "arc",
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
                    }
                },
                indexAxis: "r",
                startAngle: 0
            };
            static overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                let e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    let {
                                        labels: {
                                            pointStyle: s,
                                            color: n
                                        }
                                    } = t.legend.options;
                                    return e.labels.map((o, a) => {
                                        let l = t.getDatasetMeta(0).controller.getStyle(a);
                                        return {
                                            text: o,
                                            fillStyle: l.backgroundColor,
                                            strokeStyle: l.borderColor,
                                            fontColor: n,
                                            lineWidth: l.borderWidth,
                                            pointStyle: s,
                                            hidden: !t.getDataVisibility(a),
                                            index: a
                                        }
                                    })
                                }
                                return []
                            }
                        },
                        onClick(t, e, s) {
                            s.chart.toggleDataVisibility(e.index), s.chart.update()
                        }
                    }
                },
                scales: {
                    r: {
                        type: "radialLinear",
                        angleLines: {
                            display: !1
                        },
                        beginAtZero: !0,
                        grid: {
                            circular: !0
                        },
                        pointLabels: {
                            display: !1
                        },
                        startAngle: 0
                    }
                }
            };
            constructor(t, e) {
                super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
            }
            getLabelAndValue(t) {
                let e = this._cachedMeta,
                    s = this.chart,
                    n = s.data.labels || [],
                    o = qt(e._parsed[t].r, s.options.locale);
                return {
                    label: n[t] || "",
                    value: o
                }
            }
            parseObjectData(t, e, s, n) {
                return Ni.bind(this)(t, e, s, n)
            }
            update(t) {
                let e = this._cachedMeta.data;
                this._updateRadius(), this.updateElements(e, 0, e.length, t)
            }
            getMinMax() {
                let t = this._cachedMeta,
                    e = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY
                    };
                return t.data.forEach((s, n) => {
                    let o = this.getParsed(n).r;
                    !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o))
                }), e
            }
            _updateRadius() {
                let t = this.chart,
                    e = t.chartArea,
                    s = t.options,
                    n = Math.min(e.right - e.left, e.bottom - e.top),
                    o = Math.max(n / 2, 0),
                    a = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0),
                    r = (o - a) / t.getVisibleDatasetCount();
                this.outerRadius = o - r * this.index, this.innerRadius = this.outerRadius - r
            }
            updateElements(t, e, s, n) {
                let o = n === "reset",
                    a = this.chart,
                    l = a.options.animation,
                    c = this._cachedMeta.rScale,
                    h = c.xCenter,
                    d = c.yCenter,
                    u = c.getIndexAngle(0) - .5 * I,
                    f = u,
                    g, p = 360 / this.countVisibleElements();
                for (g = 0; g < e; ++g) f += this._computeAngle(g, n, p);
                for (g = e; g < e + s; g++) {
                    let m = t[g],
                        b = f,
                        x = f + this._computeAngle(g, n, p),
                        v = a.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
                    f = x, o && (l.animateScale && (v = 0), l.animateRotate && (b = x = u));
                    let y = {
                        x: h,
                        y: d,
                        innerRadius: 0,
                        outerRadius: v,
                        startAngle: b,
                        endAngle: x,
                        options: this.resolveDataElementOptions(g, m.active ? "active" : n)
                    };
                    this.updateElement(m, g, y, n)
                }
            }
            countVisibleElements() {
                let t = this._cachedMeta,
                    e = 0;
                return t.data.forEach((s, n) => {
                    !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++
                }), e
            }
            _computeAngle(t, e, s) {
                return this.chart.getDataVisibility(t) ? it(this.resolveDataElementOptions(t, e).angle || s) : 0
            }
        },
        ls = class extends ve {
            static id = "pie";
            static defaults = {
                cutout: 0,
                rotation: 0,
                circumference: 360,
                radius: "100%"
            }
        },
        cs = class extends ut {
            static id = "radar";
            static defaults = {
                datasetElementType: "line",
                dataElementType: "point",
                indexAxis: "r",
                showLine: !0,
                elements: {
                    line: {
                        fill: "start"
                    }
                }
            };
            static overrides = {
                aspectRatio: 1,
                scales: {
                    r: {
                        type: "radialLinear"
                    }
                }
            };
            getLabelAndValue(t) {
                let e = this._cachedMeta.vScale,
                    s = this.getParsed(t);
                return {
                    label: e.getLabels()[t],
                    value: "" + e.getLabelForValue(s[e.axis])
                }
            }
            parseObjectData(t, e, s, n) {
                return Ni.bind(this)(t, e, s, n)
            }
            update(t) {
                let e = this._cachedMeta,
                    s = e.dataset,
                    n = e.data || [],
                    o = e.iScale.getLabels();
                if (s.points = n, t !== "resize") {
                    let a = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (a.borderWidth = 0);
                    let r = {
                        _loop: !0,
                        _fullLoop: o.length === n.length,
                        options: a
                    };
                    this.updateElement(s, void 0, r, t)
                }
                this.updateElements(n, 0, n.length, t)
            }
            updateElements(t, e, s, n) {
                let o = this._cachedMeta.rScale,
                    a = n === "reset";
                for (let r = e; r < e + s; r++) {
                    let l = t[r],
                        c = this.resolveDataElementOptions(r, l.active ? "active" : n),
                        h = o.getPointPositionForValue(r, this.getParsed(r).r),
                        d = a ? o.xCenter : h.x,
                        u = a ? o.yCenter : h.y,
                        f = {
                            x: d,
                            y: u,
                            angle: h.angle,
                            skip: isNaN(d) || isNaN(u),
                            options: c
                        };
                    this.updateElement(l, r, f, n)
                }
            }
        },
        hs = class extends ut {
            static id = "scatter";
            static defaults = {
                datasetElementType: !1,
                dataElementType: "point",
                showLine: !1,
                fill: !1
            };
            static overrides = {
                interaction: {
                    mode: "point"
                },
                scales: {
                    x: {
                        type: "linear"
                    },
                    y: {
                        type: "linear"
                    }
                }
            };
            getLabelAndValue(t) {
                let e = this._cachedMeta,
                    s = this.chart.data.labels || [],
                    {
                        xScale: n,
                        yScale: o
                    } = e,
                    a = this.getParsed(t),
                    r = n.getLabelForValue(a.x),
                    l = o.getLabelForValue(a.y);
                return {
                    label: s[t] || "",
                    value: "(" + r + ", " + l + ")"
                }
            }
            update(t) {
                let e = this._cachedMeta,
                    {
                        data: s = []
                    } = e,
                    n = this.chart._animationsDisabled,
                    {
                        start: o,
                        count: a
                    } = Ti(e, s, n);
                if (this._drawStart = o, this._drawCount = a, Li(e) && (o = 0, a = s.length), this.options.showLine) {
                    this.datasetElementType || this.addElements();
                    let {
                        dataset: r,
                        _dataset: l
                    } = e;
                    r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l._decimated, r.points = s;
                    let c = this.resolveDatasetElementOptions(t);
                    c.segment = this.options.segment, this.updateElement(r, void 0, {
                        animated: !n,
                        options: c
                    }, t)
                } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
                this.updateElements(s, o, a, t)
            }
            addElements() {
                let {
                    showLine: t
                } = this.options;
                !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements()
            }
            updateElements(t, e, s, n) {
                let o = n === "reset",
                    {
                        iScale: a,
                        vScale: r,
                        _stacked: l,
                        _dataset: c
                    } = this._cachedMeta,
                    h = this.resolveDataElementOptions(e, n),
                    d = this.getSharedOptions(h),
                    u = this.includeOptions(n, d),
                    f = a.axis,
                    g = r.axis,
                    {
                        spanGaps: p,
                        segment: m
                    } = this.options,
                    b = Et(p) ? p : Number.POSITIVE_INFINITY,
                    x = this.chart._animationsDisabled || o || n === "none",
                    v = e > 0 && this.getParsed(e - 1);
                for (let y = e; y < e + s; ++y) {
                    let _ = t[y],
                        M = this.getParsed(y),
                        k = x ? _ : {},
                        w = T(M[g]),
                        S = k[f] = a.getPixelForValue(M[f], y),
                        D = k[g] = o || w ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, M, l) : M[g], y);
                    k.skip = isNaN(S) || isNaN(D) || w, k.stop = y > 0 && Math.abs(M[f] - v[f]) > b, m && (k.parsed = M, k.raw = c.data[y]), u && (k.options = d || this.resolveDataElementOptions(y, _.active ? "active" : n)), x || this.updateElement(_, y, k, n), v = M
                }
                this.updateSharedOptions(d, n, h)
            }
            getMaxOverflow() {
                let t = this._cachedMeta,
                    e = t.data || [];
                if (!this.options.showLine) {
                    let r = 0;
                    for (let l = e.length - 1; l >= 0; --l) r = Math.max(r, e[l].size(this.resolveDataElementOptions(l)) / 2);
                    return r > 0 && r
                }
                let s = t.dataset,
                    n = s.options && s.options.borderWidth || 0;
                if (!e.length) return n;
                let o = e[0].size(this.resolveDataElementOptions(0)),
                    a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                return Math.max(n, o, a) / 2
            }
        },
        Er = Object.freeze({
            __proto__: null,
            BarController: os,
            BubbleController: as,
            DoughnutController: ve,
            LineController: rs,
            PieController: ls,
            PolarAreaController: oi,
            RadarController: cs,
            ScatterController: hs
        });

    function It() {
        throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
    }
    var ds = class i {
            static override(t) {
                Object.assign(i.prototype, t)
            }
            options;
            constructor(t) {
                this.options = t || {}
            }
            init() {}
            formats() {
                return It()
            }
            parse() {
                return It()
            }
            format() {
                return It()
            }
            add() {
                return It()
            }
            diff() {
                return It()
            }
            startOf() {
                return It()
            }
            endOf() {
                return It()
            }
        },
        Fr = {
            _date: ds
        };

    function Ir(i, t, e, s) {
        let {
            controller: n,
            data: o,
            _sorted: a
        } = i, r = n._cachedMeta.iScale;
        if (r && t === r.axis && t !== "r" && a && o.length) {
            let l = r._reversePixels ? sn : at;
            if (s) {
                if (n._sharedOptions) {
                    let c = o[0],
                        h = typeof c.getRange == "function" && c.getRange(t);
                    if (h) {
                        let d = l(o, t, e - h),
                            u = l(o, t, e + h);
                        return {
                            lo: d.lo,
                            hi: u.hi
                        }
                    }
                }
            } else return l(o, t, e)
        }
        return {
            lo: 0,
            hi: o.length - 1
        }
    }

    function Pe(i, t, e, s, n) {
        let o = i.getSortedVisibleDatasetMetas(),
            a = e[t];
        for (let r = 0, l = o.length; r < l; ++r) {
            let {
                index: c,
                data: h
            } = o[r], {
                lo: d,
                hi: u
            } = Ir(o[r], t, a, n);
            for (let f = d; f <= u; ++f) {
                let g = h[f];
                g.skip || s(g, c, f)
            }
        }
    }

    function zr(i) {
        let t = i.indexOf("x") !== -1,
            e = i.indexOf("y") !== -1;
        return function(s, n) {
            let o = t ? Math.abs(s.x - n.x) : 0,
                a = e ? Math.abs(s.y - n.y) : 0;
            return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
        }
    }

    function Zi(i, t, e, s, n) {
        let o = [];
        return !n && !i.isPointInArea(t) || Pe(i, e, t, function(r, l, c) {
            !n && !rt(r, i.chartArea, 0) || r.inRange(t.x, t.y, s) && o.push({
                element: r,
                datasetIndex: l,
                index: c
            })
        }, !0), o
    }

    function Br(i, t, e, s) {
        let n = [];

        function o(a, r, l) {
            let {
                startAngle: c,
                endAngle: h
            } = a.getProps(["startAngle", "endAngle"], s), {
                angle: d
            } = Pi(a, {
                x: t.x,
                y: t.y
            });
            Kt(d, c, h) && n.push({
                element: a,
                datasetIndex: r,
                index: l
            })
        }
        return Pe(i, e, t, o), n
    }

    function Vr(i, t, e, s, n, o) {
        let a = [],
            r = zr(e),
            l = Number.POSITIVE_INFINITY;

        function c(h, d, u) {
            let f = h.inRange(t.x, t.y, n);
            if (s && !f) return;
            let g = h.getCenterPoint(n);
            if (!(!!o || i.isPointInArea(g)) && !f) return;
            let m = r(t, g);
            m < l ? (a = [{
                element: h,
                datasetIndex: d,
                index: u
            }], l = m) : m === l && a.push({
                element: h,
                datasetIndex: d,
                index: u
            })
        }
        return Pe(i, e, t, c), a
    }

    function Ji(i, t, e, s, n, o) {
        return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Br(i, t, e, n) : Vr(i, t, e, s, n, o)
    }

    function Fn(i, t, e, s, n) {
        let o = [],
            a = e === "x" ? "inXRange" : "inYRange",
            r = !1;
        return Pe(i, e, t, (l, c, h) => {
            l[a](t[e], n) && (o.push({
                element: l,
                datasetIndex: c,
                index: h
            }), r = r || l.inRange(t.x, t.y, n))
        }), s && !r ? [] : o
    }
    var Wr = {
            evaluateInteractionItems: Pe,
            modes: {
                index(i, t, e, s) {
                    let n = Dt(t, i),
                        o = e.axis || "x",
                        a = e.includeInvisible || !1,
                        r = e.intersect ? Zi(i, n, o, s, a) : Ji(i, n, o, !1, s, a),
                        l = [];
                    return r.length ? (i.getSortedVisibleDatasetMetas().forEach(c => {
                        let h = r[0].index,
                            d = c.data[h];
                        d && !d.skip && l.push({
                            element: d,
                            datasetIndex: c.index,
                            index: h
                        })
                    }), l) : []
                },
                dataset(i, t, e, s) {
                    let n = Dt(t, i),
                        o = e.axis || "xy",
                        a = e.includeInvisible || !1,
                        r = e.intersect ? Zi(i, n, o, s, a) : Ji(i, n, o, !1, s, a);
                    if (r.length > 0) {
                        let l = r[0].datasetIndex,
                            c = i.getDatasetMeta(l).data;
                        r = [];
                        for (let h = 0; h < c.length; ++h) r.push({
                            element: c[h],
                            datasetIndex: l,
                            index: h
                        })
                    }
                    return r
                },
                point(i, t, e, s) {
                    let n = Dt(t, i),
                        o = e.axis || "xy",
                        a = e.includeInvisible || !1;
                    return Zi(i, n, o, s, a)
                },
                nearest(i, t, e, s) {
                    let n = Dt(t, i),
                        o = e.axis || "xy",
                        a = e.includeInvisible || !1;
                    return Ji(i, n, o, e.intersect, s, a)
                },
                x(i, t, e, s) {
                    let n = Dt(t, i);
                    return Fn(i, n, "x", e.intersect, s)
                },
                y(i, t, e, s) {
                    let n = Dt(t, i);
                    return Fn(i, n, "y", e.intersect, s)
                }
            }
        },
        Co = ["left", "top", "right", "bottom"];

    function pe(i, t) {
        return i.filter(e => e.pos === t)
    }

    function In(i, t) {
        return i.filter(e => Co.indexOf(e.pos) === -1 && e.box.axis === t)
    }

    function me(i, t) {
        return i.sort((e, s) => {
            let n = t ? s : e,
                o = t ? e : s;
            return n.weight === o.weight ? n.index - o.index : n.weight - o.weight
        })
    }

    function Nr(i) {
        let t = [],
            e, s, n, o, a, r;
        for (e = 0, s = (i || []).length; e < s; ++e) n = i[e], {
            position: o,
            options: {
                stack: a,
                stackWeight: r = 1
            }
        } = n, t.push({
            index: e,
            box: n,
            pos: o,
            horizontal: n.isHorizontal(),
            weight: n.weight,
            stack: a && o + a,
            stackWeight: r
        });
        return t
    }

    function Hr(i) {
        let t = {};
        for (let e of i) {
            let {
                stack: s,
                pos: n,
                stackWeight: o
            } = e;
            if (!s || !Co.includes(n)) continue;
            let a = t[s] || (t[s] = {
                count: 0,
                placed: 0,
                weight: 0,
                size: 0
            });
            a.count++, a.weight += o
        }
        return t
    }

    function jr(i, t) {
        let e = Hr(i),
            {
                vBoxMaxWidth: s,
                hBoxMaxHeight: n
            } = t,
            o, a, r;
        for (o = 0, a = i.length; o < a; ++o) {
            r = i[o];
            let {
                fullSize: l
            } = r.box, c = e[r.stack], h = c && r.stackWeight / c.weight;
            r.horizontal ? (r.width = h ? h * s : l && t.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : l && t.availableHeight)
        }
        return e
    }

    function $r(i) {
        let t = Nr(i),
            e = me(t.filter(c => c.box.fullSize), !0),
            s = me(pe(t, "left"), !0),
            n = me(pe(t, "right")),
            o = me(pe(t, "top"), !0),
            a = me(pe(t, "bottom")),
            r = In(t, "x"),
            l = In(t, "y");
        return {
            fullSize: e,
            leftAndTop: s.concat(o),
            rightAndBottom: n.concat(l).concat(a).concat(r),
            chartArea: pe(t, "chartArea"),
            vertical: s.concat(n).concat(l),
            horizontal: o.concat(a).concat(r)
        }
    }

    function zn(i, t, e, s) {
        return Math.max(i[e], t[e]) + Math.max(i[s], t[s])
    }

    function Oo(i, t) {
        i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right)
    }

    function Yr(i, t, e, s) {
        let {
            pos: n,
            box: o
        } = e, a = i.maxPadding;
        if (!O(n)) {
            e.size && (i[n] -= e.size);
            let d = s[e.stack] || {
                size: 0,
                count: 1
            };
            d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size
        }
        o.getPadding && Oo(a, o.getPadding());
        let r = Math.max(0, t.outerWidth - zn(a, i, "left", "right")),
            l = Math.max(0, t.outerHeight - zn(a, i, "top", "bottom")),
            c = r !== i.w,
            h = l !== i.h;
        return i.w = r, i.h = l, e.horizontal ? {
            same: c,
            other: h
        } : {
            same: h,
            other: c
        }
    }

    function Ur(i) {
        let t = i.maxPadding;

        function e(s) {
            let n = Math.max(t[s] - i[s], 0);
            return i[s] += n, n
        }
        i.y += e("top"), i.x += e("left"), e("right"), e("bottom")
    }

    function Xr(i, t) {
        let e = t.maxPadding;

        function s(n) {
            let o = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return n.forEach(a => {
                o[a] = Math.max(t[a], e[a])
            }), o
        }
        return s(i ? ["left", "right"] : ["top", "bottom"])
    }

    function _e(i, t, e, s) {
        let n = [],
            o, a, r, l, c, h;
        for (o = 0, a = i.length, c = 0; o < a; ++o) {
            r = i[o], l = r.box, l.update(r.width || t.w, r.height || t.h, Xr(r.horizontal, t));
            let {
                same: d,
                other: u
            } = Yr(t, e, r, s);
            c |= d && n.length, h = h || u, l.fullSize || n.push(r)
        }
        return c && _e(n, t, e, s) || h
    }

    function qe(i, t, e, s, n) {
        i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n
    }

    function Bn(i, t, e, s) {
        let n = e.padding,
            {
                x: o,
                y: a
            } = t;
        for (let r of i) {
            let l = r.box,
                c = s[r.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                },
                h = r.stackWeight / c.weight || 1;
            if (r.horizontal) {
                let d = t.w * h,
                    u = c.size || l.height;
                Ut(c.start) && (a = c.start), l.fullSize ? qe(l, n.left, a, e.outerWidth - n.right - n.left, u) : qe(l, t.left + c.placed, a, d, u), c.start = a, c.placed += d, a = l.bottom
            } else {
                let d = t.h * h,
                    u = c.size || l.width;
                Ut(c.start) && (o = c.start), l.fullSize ? qe(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : qe(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right
            }
        }
        t.x = o, t.y = a
    }
    var q = {
            addBox(i, t) {
                i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
                    return [{
                        z: 0,
                        draw(e) {
                            t.draw(e)
                        }
                    }]
                }, i.boxes.push(t)
            },
            removeBox(i, t) {
                let e = i.boxes ? i.boxes.indexOf(t) : -1;
                e !== -1 && i.boxes.splice(e, 1)
            },
            configure(i, t, e) {
                t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight
            },
            update(i, t, e, s) {
                if (!i) return;
                let n = X(i.options.layout.padding),
                    o = Math.max(t - n.width, 0),
                    a = Math.max(e - n.height, 0),
                    r = $r(i.boxes),
                    l = r.vertical,
                    c = r.horizontal;
                L(i.boxes, p => {
                    typeof p.beforeLayout == "function" && p.beforeLayout()
                });
                let h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1,
                    d = Object.freeze({
                        outerWidth: t,
                        outerHeight: e,
                        padding: n,
                        availableWidth: o,
                        availableHeight: a,
                        vBoxMaxWidth: o / 2 / h,
                        hBoxMaxHeight: a / 2
                    }),
                    u = Object.assign({}, n);
                Oo(u, X(s));
                let f = Object.assign({
                        maxPadding: u,
                        w: o,
                        h: a,
                        x: n.left,
                        y: n.top
                    }, n),
                    g = jr(l.concat(c), d);
                _e(r.fullSize, f, d, g), _e(l, f, d, g), _e(c, f, d, g) && _e(l, f, d, g), Ur(f), Bn(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, Bn(r.rightAndBottom, f, d, g), i.chartArea = {
                    left: f.left,
                    top: f.top,
                    right: f.left + f.w,
                    bottom: f.top + f.h,
                    height: f.h,
                    width: f.w
                }, L(r.chartArea, p => {
                    let m = p.box;
                    Object.assign(m, i.chartArea), m.update(f.w, f.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    })
                })
            }
        },
        ai = class {
            acquireContext(t, e) {}
            releaseContext(t) {
                return !1
            }
            addEventListener(t, e, s) {}
            removeEventListener(t, e, s) {}
            getDevicePixelRatio() {
                return 1
            }
            getMaximumSize(t, e, s, n) {
                return e = Math.max(0, e || t.width), s = s || t.height, {
                    width: e,
                    height: Math.max(0, n ? Math.floor(e / n) : s)
                }
            }
            isAttached(t) {
                return !0
            }
            updateConfig(t) {}
        },
        us = class extends ai {
            acquireContext(t) {
                return t && t.getContext && t.getContext("2d") || null
            }
            updateConfig(t) {
                t.options.animation = !1
            }
        },
        ii = "$chartjs",
        Kr = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        },
        Vn = i => i === null || i === "";

    function qr(i, t) {
        let e = i.style,
            s = i.getAttribute("height"),
            n = i.getAttribute("width");
        if (i[ii] = {
                initial: {
                    height: s,
                    width: n,
                    style: {
                        display: e.display,
                        height: e.height,
                        width: e.width
                    }
                }
            }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Vn(n)) {
            let o = ji(i, "width");
            o !== void 0 && (i.width = o)
        }
        if (Vn(s))
            if (i.style.height === "") i.height = i.width / (t || 2);
            else {
                let o = ji(i, "height");
                o !== void 0 && (i.height = o)
            }
        return i
    }
    var Ao = yn ? {
        passive: !0
    } : !1;

    function Gr(i, t, e) {
        i && i.addEventListener(t, e, Ao)
    }

    function Zr(i, t, e) {
        i && i.canvas && i.canvas.removeEventListener(t, e, Ao)
    }

    function Jr(i, t) {
        let e = Kr[i.type] || i.type,
            {
                x: s,
                y: n
            } = Dt(i, t);
        return {
            type: e,
            chart: t,
            native: i,
            x: s !== void 0 ? s : null,
            y: n !== void 0 ? n : null
        }
    }

    function ri(i, t) {
        for (let e of i)
            if (e === t || e.contains(t)) return !0
    }

    function Qr(i, t, e) {
        let s = i.canvas,
            n = new MutationObserver(o => {
                let a = !1;
                for (let r of o) a = a || ri(r.addedNodes, s), a = a && !ri(r.removedNodes, s);
                a && e()
            });
        return n.observe(document, {
            childList: !0,
            subtree: !0
        }), n
    }

    function tl(i, t, e) {
        let s = i.canvas,
            n = new MutationObserver(o => {
                let a = !1;
                for (let r of o) a = a || ri(r.removedNodes, s), a = a && !ri(r.addedNodes, s);
                a && e()
            });
        return n.observe(document, {
            childList: !0,
            subtree: !0
        }), n
    }
    var Me = new Map,
        Wn = 0;

    function To() {
        let i = window.devicePixelRatio;
        i !== Wn && (Wn = i, Me.forEach((t, e) => {
            e.currentDevicePixelRatio !== i && t()
        }))
    }

    function el(i, t) {
        Me.size || window.addEventListener("resize", To), Me.set(i, t)
    }

    function il(i) {
        Me.delete(i), Me.size || window.removeEventListener("resize", To)
    }

    function sl(i, t, e) {
        let s = i.canvas,
            n = s && Xe(s);
        if (!n) return;
        let o = Ai((r, l) => {
                let c = n.clientWidth;
                e(r, l), c < n.clientWidth && e()
            }, window),
            a = new ResizeObserver(r => {
                let l = r[0],
                    c = l.contentRect.width,
                    h = l.contentRect.height;
                c === 0 && h === 0 || o(c, h)
            });
        return a.observe(n), el(i, o), a
    }

    function Qi(i, t, e) {
        e && e.disconnect(), t === "resize" && il(i)
    }

    function nl(i, t, e) {
        let s = i.canvas,
            n = Ai(o => {
                i.ctx !== null && e(Jr(o, i))
            }, i);
        return Gr(s, t, n), n
    }
    var fs = class extends ai {
        acquireContext(t, e) {
            let s = t && t.getContext && t.getContext("2d");
            return s && s.canvas === t ? (qr(t, e), s) : null
        }
        releaseContext(t) {
            let e = t.canvas;
            if (!e[ii]) return !1;
            let s = e[ii].initial;
            ["height", "width"].forEach(o => {
                let a = s[o];
                T(a) ? e.removeAttribute(o) : e.setAttribute(o, a)
            });
            let n = s.style || {};
            return Object.keys(n).forEach(o => {
                e.style[o] = n[o]
            }), e.width = e.width, delete e[ii], !0
        }
        addEventListener(t, e, s) {
            this.removeEventListener(t, e);
            let n = t.$proxies || (t.$proxies = {}),
                a = {
                    attach: Qr,
                    detach: tl,
                    resize: sl
                }[e] || nl;
            n[e] = a(t, e, s)
        }
        removeEventListener(t, e) {
            let s = t.$proxies || (t.$proxies = {}),
                n = s[e];
            if (!n) return;
            ({
                attach: Qi,
                detach: Qi,
                resize: Qi
            }[e] || Zr)(t, e, n), s[e] = void 0
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio
        }
        getMaximumSize(t, e, s, n) {
            return _n(t, e, s, n)
        }
        isAttached(t) {
            let e = Xe(t);
            return !!(e && e.isConnected)
        }
    };

    function ol(i) {
        return !Ue() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? us : fs
    }
    var ot = class {
        static defaults = {};
        static defaultRoutes = void 0;
        x;
        y;
        active = !1;
        options;
        $animations;
        tooltipPosition(t) {
            let {
                x: e,
                y: s
            } = this.getProps(["x", "y"], t);
            return {
                x: e,
                y: s
            }
        }
        hasValue() {
            return Et(this.x) && Et(this.y)
        }
        getProps(t, e) {
            let s = this.$animations;
            if (!e || !s) return this;
            let n = {};
            return t.forEach(o => {
                n[o] = s[o] && s[o].active() ? s[o]._to : this[o]
            }), n
        }
    };

    function al(i, t) {
        let e = i.options.ticks,
            s = rl(i),
            n = Math.min(e.maxTicksLimit || s, s),
            o = e.major.enabled ? cl(t) : [],
            a = o.length,
            r = o[0],
            l = o[a - 1],
            c = [];
        if (a > n) return hl(t, c, o, a / n), c;
        let h = ll(o, t, n);
        if (a > 0) {
            let d, u, f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
            for (Ge(t, c, h, T(f) ? 0 : r - f, r), d = 0, u = a - 1; d < u; d++) Ge(t, c, h, o[d], o[d + 1]);
            return Ge(t, c, h, l, T(f) ? t.length : l + f), c
        }
        return Ge(t, c, h), c
    }

    function rl(i) {
        let t = i.options.offset,
            e = i._tickSize(),
            s = i._length / e + (t ? 0 : 1),
            n = i._maxLength / e;
        return Math.floor(Math.min(s, n))
    }

    function ll(i, t, e) {
        let s = dl(i),
            n = t.length / e;
        if (!s) return Math.max(n, 1);
        let o = Qs(s);
        for (let a = 0, r = o.length - 1; a < r; a++) {
            let l = o[a];
            if (l > n) return l
        }
        return Math.max(n, 1)
    }

    function cl(i) {
        let t = [],
            e, s;
        for (e = 0, s = i.length; e < s; e++) i[e].major && t.push(e);
        return t
    }

    function hl(i, t, e, s) {
        let n = 0,
            o = e[0],
            a;
        for (s = Math.ceil(s), a = 0; a < i.length; a++) a === o && (t.push(i[a]), n++, o = e[n * s])
    }

    function Ge(i, t, e, s, n) {
        let o = P(s, 0),
            a = Math.min(P(n, i.length), i.length),
            r = 0,
            l, c, h;
        for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0;) r++, h = Math.round(o + r * e);
        for (c = Math.max(o, 0); c < a; c++) c === h && (t.push(i[c]), r++, h = Math.round(o + r * e))
    }

    function dl(i) {
        let t = i.length,
            e, s;
        if (t < 2) return !1;
        for (s = i[0], e = 1; e < t; ++e)
            if (i[e] - i[e - 1] !== s) return !1;
        return s
    }
    var ul = i => i === "left" ? "right" : i === "right" ? "left" : i,
        Nn = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e,
        Hn = (i, t) => Math.min(t || i, i);

    function jn(i, t) {
        let e = [],
            s = i.length / t,
            n = i.length,
            o = 0;
        for (; o < n; o += s) e.push(i[Math.floor(o)]);
        return e
    }

    function fl(i, t, e) {
        let s = i.ticks.length,
            n = Math.min(t, s - 1),
            o = i._startPixel,
            a = i._endPixel,
            r = 1e-6,
            l = i.getPixelForTick(n),
            c;
        if (!(e && (s === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - r || l > a + r))) return l
    }

    function gl(i, t) {
        L(i, e => {
            let s = e.gc,
                n = s.length / 2,
                o;
            if (n > t) {
                for (o = 0; o < n; ++o) delete e.data[s[o]];
                s.splice(0, n)
            }
        })
    }

    function be(i) {
        return i.drawTicks ? i.tickLength : 0
    }

    function $n(i, t) {
        if (!i.display) return 0;
        let e = j(i.font, t),
            s = X(i.padding);
        return (F(i.text) ? i.text.length : 1) * e.lineHeight + s.height
    }

    function pl(i, t) {
        return bt(i, {
            scale: t,
            type: "scale"
        })
    }

    function ml(i, t, e) {
        return bt(i, {
            tick: e,
            index: t,
            type: "tick"
        })
    }

    function bl(i, t, e) {
        let s = Ne(i);
        return (e && t !== "right" || !e && t === "right") && (s = ul(s)), s
    }

    function xl(i, t, e, s) {
        let {
            top: n,
            left: o,
            bottom: a,
            right: r,
            chart: l
        } = i, {
            chartArea: c,
            scales: h
        } = l, d = 0, u, f, g, p = a - n, m = r - o;
        if (i.isHorizontal()) {
            if (f = U(s, o, r), O(e)) {
                let b = Object.keys(e)[0],
                    x = e[b];
                g = h[b].getPixelForValue(x) + p - t
            } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = Nn(i, e, t);
            u = r - o
        } else {
            if (O(e)) {
                let b = Object.keys(e)[0],
                    x = e[b];
                f = h[b].getPixelForValue(x) - m + t
            } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Nn(i, e, t);
            g = U(s, a, n), d = e === "left" ? -N : N
        }
        return {
            titleX: f,
            titleY: g,
            maxWidth: u,
            rotation: d
        }
    }
    var Bt = class i extends ot {
            constructor(t) {
                super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
            }
            init(t) {
                this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax)
            }
            parse(t, e) {
                return t
            }
            getUserBounds() {
                let {
                    _userMin: t,
                    _userMax: e,
                    _suggestedMin: s,
                    _suggestedMax: n
                } = this;
                return t = Z(t, Number.POSITIVE_INFINITY), e = Z(e, Number.NEGATIVE_INFINITY), s = Z(s, Number.POSITIVE_INFINITY), n = Z(n, Number.NEGATIVE_INFINITY), {
                    min: Z(t, s),
                    max: Z(e, n),
                    minDefined: V(t),
                    maxDefined: V(e)
                }
            }
            getMinMax(t) {
                let {
                    min: e,
                    max: s,
                    minDefined: n,
                    maxDefined: o
                } = this.getUserBounds(), a;
                if (n && o) return {
                    min: e,
                    max: s
                };
                let r = this.getMatchingVisibleMetas();
                for (let l = 0, c = r.length; l < c; ++l) a = r[l].controller.getMinMax(this, t), n || (e = Math.min(e, a.min)), o || (s = Math.max(s, a.max));
                return e = o && e > s ? s : e, s = n && e > s ? e : s, {
                    min: Z(e, Z(s, e)),
                    max: Z(s, Z(e, s))
                }
            }
            getPadding() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            }
            getTicks() {
                return this.ticks
            }
            getLabels() {
                let t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
            }
            getLabelItems(t = this.chart.chartArea) {
                return this._labelItems || (this._labelItems = this._computeLabelItems(t))
            }
            beforeLayout() {
                this._cache = {}, this._dataLimitsCached = !1
            }
            beforeUpdate() {
                E(this.options.beforeUpdate, [this])
            }
            update(t, e, s) {
                let {
                    beginAtZero: n,
                    grace: o,
                    ticks: a
                } = this.options, r = a.sampleSize;
                this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = fn(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
                let l = r < this.ticks.length;
                this._convertTicksToLabels(l ? jn(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = al(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate()
            }
            configure() {
                let t = this.options.reverse,
                    e, s;
                this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels
            }
            afterUpdate() {
                E(this.options.afterUpdate, [this])
            }
            beforeSetDimensions() {
                E(this.options.beforeSetDimensions, [this])
            }
            setDimensions() {
                this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0
            }
            afterSetDimensions() {
                E(this.options.afterSetDimensions, [this])
            }
            _callHooks(t) {
                this.chart.notifyPlugins(t, this.getContext()), E(this.options[t], [this])
            }
            beforeDataLimits() {
                this._callHooks("beforeDataLimits")
            }
            determineDataLimits() {}
            afterDataLimits() {
                this._callHooks("afterDataLimits")
            }
            beforeBuildTicks() {
                this._callHooks("beforeBuildTicks")
            }
            buildTicks() {
                return []
            }
            afterBuildTicks() {
                this._callHooks("afterBuildTicks")
            }
            beforeTickToLabelConversion() {
                E(this.options.beforeTickToLabelConversion, [this])
            }
            generateTickLabels(t) {
                let e = this.options.ticks,
                    s, n, o;
                for (s = 0, n = t.length; s < n; s++) o = t[s], o.label = E(e.callback, [o.value, s, t], this)
            }
            afterTickToLabelConversion() {
                E(this.options.afterTickToLabelConversion, [this])
            }
            beforeCalculateLabelRotation() {
                E(this.options.beforeCalculateLabelRotation, [this])
            }
            calculateLabelRotation() {
                let t = this.options,
                    e = t.ticks,
                    s = Hn(this.ticks.length, t.ticks.maxTicksLimit),
                    n = e.minRotation || 0,
                    o = e.maxRotation,
                    a = n,
                    r, l, c;
                if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
                    this.labelRotation = n;
                    return
                }
                let h = this._getLabelSizes(),
                    d = h.widest.width,
                    u = h.highest.height,
                    f = $(this.chart.width - d, 0, this.maxWidth);
                r = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > r && (r = f / (s - (t.offset ? .5 : 1)), l = this.maxHeight - be(t.grid) - e.padding - $n(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), a = Ve(Math.min(Math.asin($((h.highest.height + 6) / r, -1, 1)), Math.asin($(l / c, -1, 1)) - Math.asin($(u / c, -1, 1)))), a = Math.max(n, Math.min(o, a))), this.labelRotation = a
            }
            afterCalculateLabelRotation() {
                E(this.options.afterCalculateLabelRotation, [this])
            }
            afterAutoSkip() {}
            beforeFit() {
                E(this.options.beforeFit, [this])
            }
            fit() {
                let t = {
                        width: 0,
                        height: 0
                    },
                    {
                        chart: e,
                        options: {
                            ticks: s,
                            title: n,
                            grid: o
                        }
                    } = this,
                    a = this._isVisible(),
                    r = this.isHorizontal();
                if (a) {
                    let l = $n(n, e.options.font);
                    if (r ? (t.width = this.maxWidth, t.height = be(o) + l) : (t.height = this.maxHeight, t.width = be(o) + l), s.display && this.ticks.length) {
                        let {
                            first: c,
                            last: h,
                            widest: d,
                            highest: u
                        } = this._getLabelSizes(), f = s.padding * 2, g = it(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
                        if (r) {
                            let b = s.mirror ? 0 : m * d.width + p * u.height;
                            t.height = Math.min(this.maxHeight, t.height + b + f)
                        } else {
                            let b = s.mirror ? 0 : p * d.width + m * u.height;
                            t.width = Math.min(this.maxWidth, t.width + b + f)
                        }
                        this._calculatePadding(c, h, m, p)
                    }
                }
                this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
            }
            _calculatePadding(t, e, s, n) {
                let {
                    ticks: {
                        align: o,
                        padding: a
                    },
                    position: r
                } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
                if (this.isHorizontal()) {
                    let h = this.getPixelForTick(0) - this.left,
                        d = this.right - this.getPixelForTick(this.ticks.length - 1),
                        u = 0,
                        f = 0;
                    l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + a) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0)
                } else {
                    let h = e.height / 2,
                        d = t.height / 2;
                    o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + a, this.paddingBottom = d + a
                }
            }
            _handleMargins() {
                this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
            }
            afterFit() {
                E(this.options.afterFit, [this])
            }
            isHorizontal() {
                let {
                    axis: t,
                    position: e
                } = this.options;
                return e === "top" || e === "bottom" || t === "x"
            }
            isFullSize() {
                return this.options.fullSize
            }
            _convertTicksToLabels(t) {
                this.beforeTickToLabelConversion(), this.generateTickLabels(t);
                let e, s;
                for (e = 0, s = t.length; e < s; e++) T(t[e].label) && (t.splice(e, 1), s--, e--);
                this.afterTickToLabelConversion()
            }
            _getLabelSizes() {
                let t = this._labelSizes;
                if (!t) {
                    let e = this.options.ticks.sampleSize,
                        s = this.ticks;
                    e < s.length && (s = jn(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit)
                }
                return t
            }
            _computeLabelSizes(t, e, s) {
                let {
                    ctx: n,
                    _longestTextCache: o
                } = this, a = [], r = [], l = Math.floor(e / Hn(e, s)), c = 0, h = 0, d, u, f, g, p, m, b, x, v, y, _;
                for (d = 0; d < e; d += l) {
                    if (g = t[d].label, p = this._resolveTickFontOptions(d), n.font = m = p.string, b = o[m] = o[m] || {
                            data: {},
                            gc: []
                        }, x = p.lineHeight, v = y = 0, !T(g) && !F(g)) v = ce(n, b.data, b.gc, v, g), y = x;
                    else if (F(g))
                        for (u = 0, f = g.length; u < f; ++u) _ = g[u], !T(_) && !F(_) && (v = ce(n, b.data, b.gc, v, _), y += x);
                    a.push(v), r.push(y), c = Math.max(v, c), h = Math.max(y, h)
                }
                gl(o, e);
                let M = a.indexOf(c),
                    k = r.indexOf(h),
                    w = S => ({
                        width: a[S] || 0,
                        height: r[S] || 0
                    });
                return {
                    first: w(0),
                    last: w(e - 1),
                    widest: w(M),
                    highest: w(k),
                    widths: a,
                    heights: r
                }
            }
            getLabelForValue(t) {
                return t
            }
            getPixelForValue(t, e) {
                return NaN
            }
            getValueForPixel(t) {}
            getPixelForTick(t) {
                let e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }
            getPixelForDecimal(t) {
                this._reversePixels && (t = 1 - t);
                let e = this._startPixel + t * this._length;
                return en(this._alignToPixels ? wt(this.chart, e, 0) : e)
            }
            getDecimalForPixel(t) {
                let e = (t - this._startPixel) / this._length;
                return this._reversePixels ? 1 - e : e
            }
            getBasePixel() {
                return this.getPixelForValue(this.getBaseValue())
            }
            getBaseValue() {
                let {
                    min: t,
                    max: e
                } = this;
                return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
            }
            getContext(t) {
                let e = this.ticks || [];
                if (t >= 0 && t < e.length) {
                    let s = e[t];
                    return s.$context || (s.$context = ml(this.getContext(), t, s))
                }
                return this.$context || (this.$context = pl(this.chart.getContext(), this))
            }
            _tickSize() {
                let t = this.options.ticks,
                    e = it(this.labelRotation),
                    s = Math.abs(Math.cos(e)),
                    n = Math.abs(Math.sin(e)),
                    o = this._getLabelSizes(),
                    a = t.autoSkipPadding || 0,
                    r = o ? o.widest.width + a : 0,
                    l = o ? o.highest.height + a : 0;
                return this.isHorizontal() ? l * s > r * n ? r / s : l / n : l * n < r * s ? l / s : r / n
            }
            _isVisible() {
                let t = this.options.display;
                return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0
            }
            _computeGridLineItems(t) {
                let e = this.axis,
                    s = this.chart,
                    n = this.options,
                    {
                        grid: o,
                        position: a,
                        border: r
                    } = n,
                    l = o.offset,
                    c = this.isHorizontal(),
                    d = this.ticks.length + (l ? 1 : 0),
                    u = be(o),
                    f = [],
                    g = r.setContext(this.getContext()),
                    p = g.display ? g.width : 0,
                    m = p / 2,
                    b = function(B) {
                        return wt(s, B, p)
                    },
                    x, v, y, _, M, k, w, S, D, C, A, Y;
                if (a === "top") x = b(this.bottom), k = this.bottom - u, S = x - m, C = b(t.top) + m, Y = t.bottom;
                else if (a === "bottom") x = b(this.top), C = t.top, Y = b(t.bottom) - m, k = x + m, S = this.top + u;
                else if (a === "left") x = b(this.right), M = this.right - u, w = x - m, D = b(t.left) + m, A = t.right;
                else if (a === "right") x = b(this.left), D = t.left, A = b(t.right) - m, M = x + m, w = this.left + u;
                else if (e === "x") {
                    if (a === "center") x = b((t.top + t.bottom) / 2 + .5);
                    else if (O(a)) {
                        let B = Object.keys(a)[0],
                            H = a[B];
                        x = b(this.chart.scales[B].getPixelForValue(H))
                    }
                    C = t.top, Y = t.bottom, k = x + m, S = k + u
                } else if (e === "y") {
                    if (a === "center") x = b((t.left + t.right) / 2);
                    else if (O(a)) {
                        let B = Object.keys(a)[0],
                            H = a[B];
                        x = b(this.chart.scales[B].getPixelForValue(H))
                    }
                    M = x - m, w = M - u, D = t.left, A = t.right
                }
                let tt = P(n.ticks.maxTicksLimit, d),
                    R = Math.max(1, Math.ceil(d / tt));
                for (v = 0; v < d; v += R) {
                    let B = this.getContext(v),
                        H = o.setContext(B),
                        st = r.setContext(B),
                        K = H.lineWidth,
                        Vt = H.color,
                        De = st.dash || [],
                        Wt = st.dashOffset,
                        se = H.tickWidth,
                        Ot = H.tickColor,
                        ne = H.tickBorderDash || [],
                        At = H.tickBorderDashOffset;
                    y = fl(this, v, l), y !== void 0 && (_ = wt(s, y, K), c ? M = w = D = A = _ : k = S = C = Y = _, f.push({
                        tx1: M,
                        ty1: k,
                        tx2: w,
                        ty2: S,
                        x1: D,
                        y1: C,
                        x2: A,
                        y2: Y,
                        width: K,
                        color: Vt,
                        borderDash: De,
                        borderDashOffset: Wt,
                        tickWidth: se,
                        tickColor: Ot,
                        tickBorderDash: ne,
                        tickBorderDashOffset: At
                    }))
                }
                return this._ticksLength = d, this._borderValue = x, f
            }
            _computeLabelItems(t) {
                let e = this.axis,
                    s = this.options,
                    {
                        position: n,
                        ticks: o
                    } = s,
                    a = this.isHorizontal(),
                    r = this.ticks,
                    {
                        align: l,
                        crossAlign: c,
                        padding: h,
                        mirror: d
                    } = o,
                    u = be(s.grid),
                    f = u + h,
                    g = d ? -h : f,
                    p = -it(this.labelRotation),
                    m = [],
                    b, x, v, y, _, M, k, w, S, D, C, A, Y = "middle";
                if (n === "top") M = this.bottom - g, k = this._getXAxisLabelAlignment();
                else if (n === "bottom") M = this.top + g, k = this._getXAxisLabelAlignment();
                else if (n === "left") {
                    let R = this._getYAxisLabelAlignment(u);
                    k = R.textAlign, _ = R.x
                } else if (n === "right") {
                    let R = this._getYAxisLabelAlignment(u);
                    k = R.textAlign, _ = R.x
                } else if (e === "x") {
                    if (n === "center") M = (t.top + t.bottom) / 2 + f;
                    else if (O(n)) {
                        let R = Object.keys(n)[0],
                            B = n[R];
                        M = this.chart.scales[R].getPixelForValue(B) + f
                    }
                    k = this._getXAxisLabelAlignment()
                } else if (e === "y") {
                    if (n === "center") _ = (t.left + t.right) / 2 - f;
                    else if (O(n)) {
                        let R = Object.keys(n)[0],
                            B = n[R];
                        _ = this.chart.scales[R].getPixelForValue(B)
                    }
                    k = this._getYAxisLabelAlignment(u).textAlign
                }
                e === "y" && (l === "start" ? Y = "top" : l === "end" && (Y = "bottom"));
                let tt = this._getLabelSizes();
                for (b = 0, x = r.length; b < x; ++b) {
                    v = r[b], y = v.label;
                    let R = o.setContext(this.getContext(b));
                    w = this.getPixelForTick(b) + o.labelOffset, S = this._resolveTickFontOptions(b), D = S.lineHeight, C = F(y) ? y.length : 1;
                    let B = C / 2,
                        H = R.color,
                        st = R.textStrokeColor,
                        K = R.textStrokeWidth,
                        Vt = k;
                    a ? (_ = w, k === "inner" && (b === x - 1 ? Vt = this.options.reverse ? "left" : "right" : b === 0 ? Vt = this.options.reverse ? "right" : "left" : Vt = "center"), n === "top" ? c === "near" || p !== 0 ? A = -C * D + D / 2 : c === "center" ? A = -tt.highest.height / 2 - B * D + D : A = -tt.highest.height + D / 2 : c === "near" || p !== 0 ? A = D / 2 : c === "center" ? A = tt.highest.height / 2 - B * D : A = tt.highest.height - C * D, d && (A *= -1), p !== 0 && !R.showLabelBackdrop && (_ += D / 2 * Math.sin(p))) : (M = w, A = (1 - C) * D / 2);
                    let De;
                    if (R.showLabelBackdrop) {
                        let Wt = X(R.backdropPadding),
                            se = tt.heights[b],
                            Ot = tt.widths[b],
                            ne = A - Wt.top,
                            At = 0 - Wt.left;
                        switch (Y) {
                            case "middle":
                                ne -= se / 2;
                                break;
                            case "bottom":
                                ne -= se;
                                break
                        }
                        switch (k) {
                            case "center":
                                At -= Ot / 2;
                                break;
                            case "right":
                                At -= Ot;
                                break;
                            case "inner":
                                b === x - 1 ? At -= Ot : b > 0 && (At -= Ot / 2);
                                break
                        }
                        De = {
                            left: At,
                            top: ne,
                            width: Ot + Wt.width,
                            height: se + Wt.height,
                            color: R.backdropColor
                        }
                    }
                    m.push({
                        label: y,
                        font: S,
                        textOffset: A,
                        options: {
                            rotation: p,
                            color: H,
                            strokeColor: st,
                            strokeWidth: K,
                            textAlign: Vt,
                            textBaseline: Y,
                            translation: [_, M],
                            backdrop: De
                        }
                    })
                }
                return m
            }
            _getXAxisLabelAlignment() {
                let {
                    position: t,
                    ticks: e
                } = this.options;
                if (-it(this.labelRotation)) return t === "top" ? "left" : "right";
                let n = "center";
                return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n
            }
            _getYAxisLabelAlignment(t) {
                let {
                    position: e,
                    ticks: {
                        crossAlign: s,
                        mirror: n,
                        padding: o
                    }
                } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width, c, h;
                return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
                    textAlign: c,
                    x: h
                }
            }
            _computeLabelArea() {
                if (this.options.ticks.mirror) return;
                let t = this.chart,
                    e = this.options.position;
                if (e === "left" || e === "right") return {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right
                };
                if (e === "top" || e === "bottom") return {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width
                }
            }
            drawBackground() {
                let {
                    ctx: t,
                    options: {
                        backgroundColor: e
                    },
                    left: s,
                    top: n,
                    width: o,
                    height: a
                } = this;
                e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, a), t.restore())
            }
            getLineWidthForValue(t) {
                let e = this.options.grid;
                if (!this._isVisible() || !e.display) return 0;
                let n = this.ticks.findIndex(o => o.value === t);
                return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
            }
            drawGrid(t) {
                let e = this.options.grid,
                    s = this.ctx,
                    n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)),
                    o, a, r = (l, c, h) => {
                        !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore())
                    };
                if (e.display)
                    for (o = 0, a = n.length; o < a; ++o) {
                        let l = n[o];
                        e.drawOnChartArea && r({
                            x: l.x1,
                            y: l.y1
                        }, {
                            x: l.x2,
                            y: l.y2
                        }, l), e.drawTicks && r({
                            x: l.tx1,
                            y: l.ty1
                        }, {
                            x: l.tx2,
                            y: l.ty2
                        }, {
                            color: l.tickColor,
                            width: l.tickWidth,
                            borderDash: l.tickBorderDash,
                            borderDashOffset: l.tickBorderDashOffset
                        })
                    }
            }
            drawBorder() {
                let {
                    chart: t,
                    ctx: e,
                    options: {
                        border: s,
                        grid: n
                    }
                } = this, o = s.setContext(this.getContext()), a = s.display ? o.width : 0;
                if (!a) return;
                let r = n.setContext(this.getContext(0)).lineWidth,
                    l = this._borderValue,
                    c, h, d, u;
                this.isHorizontal() ? (c = wt(t, this.left, a) - a / 2, h = wt(t, this.right, r) + r / 2, d = u = l) : (d = wt(t, this.top, a) - a / 2, u = wt(t, this.bottom, r) + r / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore()
            }
            drawLabels(t) {
                if (!this.options.ticks.display) return;
                let s = this.ctx,
                    n = this._computeLabelArea();
                n && ue(s, n);
                let o = this.getLabelItems(t);
                for (let a of o) {
                    let r = a.options,
                        l = a.font,
                        c = a.label,
                        h = a.textOffset;
                    St(s, c, 0, h, l, r)
                }
                n && fe(s)
            }
            drawTitle() {
                let {
                    ctx: t,
                    options: {
                        position: e,
                        title: s,
                        reverse: n
                    }
                } = this;
                if (!s.display) return;
                let o = j(s.font),
                    a = X(s.padding),
                    r = s.align,
                    l = o.lineHeight / 2;
                e === "bottom" || e === "center" || O(e) ? (l += a.bottom, F(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += a.top;
                let {
                    titleX: c,
                    titleY: h,
                    maxWidth: d,
                    rotation: u
                } = xl(this, l, e, r);
                St(t, s.text, 0, 0, o, {
                    color: s.color,
                    maxWidth: d,
                    rotation: u,
                    textAlign: bl(r, e, n),
                    textBaseline: "middle",
                    translation: [c, h]
                })
            }
            draw(t) {
                this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
            }
            _layers() {
                let t = this.options,
                    e = t.ticks && t.ticks.z || 0,
                    s = P(t.grid && t.grid.z, -1),
                    n = P(t.border && t.border.z, 0);
                return !this._isVisible() || this.draw !== i.prototype.draw ? [{
                    z: e,
                    draw: o => {
                        this.draw(o)
                    }
                }] : [{
                    z: s,
                    draw: o => {
                        this.drawBackground(), this.drawGrid(o), this.drawTitle()
                    }
                }, {
                    z: n,
                    draw: () => {
                        this.drawBorder()
                    }
                }, {
                    z: e,
                    draw: o => {
                        this.drawLabels(o)
                    }
                }]
            }
            getMatchingVisibleMetas(t) {
                let e = this.chart.getSortedVisibleDatasetMetas(),
                    s = this.axis + "AxisID",
                    n = [],
                    o, a;
                for (o = 0, a = e.length; o < a; ++o) {
                    let r = e[o];
                    r[s] === this.id && (!t || r.type === t) && n.push(r)
                }
                return n
            }
            _resolveTickFontOptions(t) {
                let e = this.options.ticks.setContext(this.getContext(t));
                return j(e.font)
            }
            _maxDigits() {
                let t = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / t
            }
        },
        Qt = class {
            constructor(t, e, s) {
                this.type = t, this.scope = e, this.override = s, this.items = Object.create(null)
            }
            isForType(t) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
            }
            register(t) {
                let e = Object.getPrototypeOf(t),
                    s;
                vl(e) && (s = this.register(e));
                let n = this.items,
                    o = t.id,
                    a = this.scope + "." + o;
                if (!o) throw new Error("class does not have id: " + t);
                return o in n || (n[o] = t, _l(t, a, s), this.override && W.override(t.id, t.overrides)), a
            }
            get(t) {
                return this.items[t]
            }
            unregister(t) {
                let e = this.items,
                    s = t.id,
                    n = this.scope;
                s in e && delete e[s], n && s in W[n] && (delete W[n][s], this.override && delete kt[s])
            }
        };

    function _l(i, t, e) {
        let s = jt(Object.create(null), [e ? W.get(e) : {}, W.get(t), i.defaults]);
        W.set(t, s), i.defaultRoutes && yl(t, i.defaultRoutes), i.descriptors && W.describe(t, i.descriptors)
    }

    function yl(i, t) {
        Object.keys(t).forEach(e => {
            let s = e.split("."),
                n = s.pop(),
                o = [i].concat(s).join("."),
                a = t[e].split("."),
                r = a.pop(),
                l = a.join(".");
            W.route(o, n, l, r)
        })
    }

    function vl(i) {
        return "id" in i && "defaults" in i
    }
    var gs = class {
            constructor() {
                this.controllers = new Qt(ut, "datasets", !0), this.elements = new Qt(ot, "elements"), this.plugins = new Qt(Object, "plugins"), this.scales = new Qt(Bt, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
            }
            add(...t) {
                this._each("register", t)
            }
            remove(...t) {
                this._each("unregister", t)
            }
            addControllers(...t) {
                this._each("register", t, this.controllers)
            }
            addElements(...t) {
                this._each("register", t, this.elements)
            }
            addPlugins(...t) {
                this._each("register", t, this.plugins)
            }
            addScales(...t) {
                this._each("register", t, this.scales)
            }
            getController(t) {
                return this._get(t, this.controllers, "controller")
            }
            getElement(t) {
                return this._get(t, this.elements, "element")
            }
            getPlugin(t) {
                return this._get(t, this.plugins, "plugin")
            }
            getScale(t) {
                return this._get(t, this.scales, "scale")
            }
            removeControllers(...t) {
                this._each("unregister", t, this.controllers)
            }
            removeElements(...t) {
                this._each("unregister", t, this.elements)
            }
            removePlugins(...t) {
                this._each("unregister", t, this.plugins)
            }
            removeScales(...t) {
                this._each("unregister", t, this.scales)
            }
            _each(t, e, s) {
                [...e].forEach(n => {
                    let o = s || this._getRegistryForType(n);
                    s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : L(n, a => {
                        let r = s || this._getRegistryForType(a);
                        this._exec(t, r, a)
                    })
                })
            }
            _exec(t, e, s) {
                let n = Be(t);
                E(s["before" + n], [], s), e[t](s), E(s["after" + n], [], s)
            }
            _getRegistryForType(t) {
                for (let e = 0; e < this._typedRegistries.length; e++) {
                    let s = this._typedRegistries[e];
                    if (s.isForType(t)) return s
                }
                return this.plugins
            }
            _get(t, e, s) {
                let n = e.get(t);
                if (n === void 0) throw new Error('"' + t + '" is not a registered ' + s + ".");
                return n
            }
        },
        dt = new gs,
        ps = class {
            constructor() {
                this._init = []
            }
            notify(t, e, s, n) {
                e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
                let o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
                    a = this._notify(o, t, e, s);
                return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a
            }
            _notify(t, e, s, n) {
                n = n || {};
                for (let o of t) {
                    let a = o.plugin,
                        r = a[s],
                        l = [e, n, o.options];
                    if (E(r, l, a) === !1 && n.cancelable) return !1
                }
                return !0
            }
            invalidate() {
                T(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
            }
            _descriptors(t) {
                if (this._cache) return this._cache;
                let e = this._cache = this._createDescriptors(t);
                return this._notifyStateChanges(t), e
            }
            _createDescriptors(t, e) {
                let s = t && t.config,
                    n = P(s.options && s.options.plugins, {}),
                    o = Ml(s);
                return n === !1 && !e ? [] : wl(t, o, n, e)
            }
            _notifyStateChanges(t) {
                let e = this._oldCache || [],
                    s = this._cache,
                    n = (o, a) => o.filter(r => !a.some(l => r.plugin.id === l.plugin.id));
                this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start")
            }
        };

    function Ml(i) {
        let t = {},
            e = [],
            s = Object.keys(dt.plugins.items);
        for (let o = 0; o < s.length; o++) e.push(dt.getPlugin(s[o]));
        let n = i.plugins || [];
        for (let o = 0; o < n.length; o++) {
            let a = n[o];
            e.indexOf(a) === -1 && (e.push(a), t[a.id] = !0)
        }
        return {
            plugins: e,
            localIds: t
        }
    }

    function kl(i, t) {
        return !t && i === !1 ? null : i === !0 ? {} : i
    }

    function wl(i, {
        plugins: t,
        localIds: e
    }, s, n) {
        let o = [],
            a = i.getContext();
        for (let r of t) {
            let l = r.id,
                c = kl(s[l], n);
            c !== null && o.push({
                plugin: r,
                options: Sl(i.config, {
                    plugin: r,
                    local: e[l]
                }, c, a)
            })
        }
        return o
    }

    function Sl(i, {
        plugin: t,
        local: e
    }, s, n) {
        let o = i.pluginScopeKeys(t),
            a = i.getOptionScopes(s, o);
        return e && t.defaults && a.push(t.defaults), i.createResolver(a, n, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        })
    }

    function ms(i, t) {
        let e = W.datasets[i] || {};
        return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
    }

    function Pl(i, t) {
        let e = i;
        return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e
    }

    function Dl(i, t) {
        return i === t ? "_index_" : "_value_"
    }

    function Yn(i) {
        if (i === "x" || i === "y" || i === "r") return i
    }

    function Cl(i) {
        if (i === "top" || i === "bottom") return "x";
        if (i === "left" || i === "right") return "y"
    }

    function bs(i, ...t) {
        if (Yn(i)) return i;
        for (let e of t) {
            let s = e.axis || Cl(e.position) || i.length > 1 && Yn(i[0].toLowerCase());
            if (s) return s
        }
        throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)
    }

    function Un(i, t, e) {
        if (e[t + "AxisID"] === i) return {
            axis: t
        }
    }

    function Ol(i, t) {
        if (t.data && t.data.datasets) {
            let e = t.data.datasets.filter(s => s.xAxisID === i || s.yAxisID === i);
            if (e.length) return Un(i, "x", e[0]) || Un(i, "y", e[0])
        }
        return {}
    }

    function Al(i, t) {
        let e = kt[i.type] || {
                scales: {}
            },
            s = t.scales || {},
            n = ms(i.type, t),
            o = Object.create(null);
        return Object.keys(s).forEach(a => {
            let r = s[a];
            if (!O(r)) return console.error(`Invalid scale configuration for scale: ${a}`);
            if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
            let l = bs(a, r, Ol(a, i), W.scales[r.type]),
                c = Dl(l, n),
                h = e.scales || {};
            o[a] = Yt(Object.create(null), [{
                axis: l
            }, r, h[l], h[c]])
        }), i.data.datasets.forEach(a => {
            let r = a.type || i.type,
                l = a.indexAxis || ms(r, t),
                h = (kt[r] || {}).scales || {};
            Object.keys(h).forEach(d => {
                let u = Pl(d, l),
                    f = a[u + "AxisID"] || u;
                o[f] = o[f] || Object.create(null), Yt(o[f], [{
                    axis: u
                }, s[f], h[d]])
            })
        }), Object.keys(o).forEach(a => {
            let r = o[a];
            Yt(r, [W.scales[r.type], W.scale])
        }), o
    }

    function Lo(i) {
        let t = i.options || (i.options = {});
        t.plugins = P(t.plugins, {}), t.scales = Al(i, t)
    }

    function Ro(i) {
        return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i
    }

    function Tl(i) {
        return i = i || {}, i.data = Ro(i.data), Lo(i), i
    }
    var Xn = new Map,
        Eo = new Set;

    function Ze(i, t) {
        let e = Xn.get(i);
        return e || (e = t(), Xn.set(i, e), Eo.add(e)), e
    }
    var xe = (i, t, e) => {
            let s = mt(t, e);
            s !== void 0 && i.add(s)
        },
        xs = class {
            constructor(t) {
                this._config = Tl(t), this._scopeCache = new Map, this._resolverCache = new Map
            }
            get platform() {
                return this._config.platform
            }
            get type() {
                return this._config.type
            }
            set type(t) {
                this._config.type = t
            }
            get data() {
                return this._config.data
            }
            set data(t) {
                this._config.data = Ro(t)
            }
            get options() {
                return this._config.options
            }
            set options(t) {
                this._config.options = t
            }
            get plugins() {
                return this._config.plugins
            }
            update() {
                let t = this._config;
                this.clearCache(), Lo(t)
            }
            clearCache() {
                this._scopeCache.clear(), this._resolverCache.clear()
            }
            datasetScopeKeys(t) {
                return Ze(t, () => [
                    [`datasets.${t}`, ""]
                ])
            }
            datasetAnimationScopeKeys(t, e) {
                return Ze(`${t}.transition.${e}`, () => [
                    [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                    [`datasets.${t}`, ""]
                ])
            }
            datasetElementScopeKeys(t, e) {
                return Ze(`${t}-${e}`, () => [
                    [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
                ])
            }
            pluginScopeKeys(t) {
                let e = t.id,
                    s = this.type;
                return Ze(`${s}-plugin-${e}`, () => [
                    [`plugins.${e}`, ...t.additionalOptionScopes || []]
                ])
            }
            _cachedScopes(t, e) {
                let s = this._scopeCache,
                    n = s.get(t);
                return (!n || e) && (n = new Map, s.set(t, n)), n
            }
            getOptionScopes(t, e, s) {
                let {
                    options: n,
                    type: o
                } = this, a = this._cachedScopes(t, s), r = a.get(e);
                if (r) return r;
                let l = new Set;
                e.forEach(h => {
                    t && (l.add(t), h.forEach(d => xe(l, t, d))), h.forEach(d => xe(l, n, d)), h.forEach(d => xe(l, kt[o] || {}, d)), h.forEach(d => xe(l, W, d)), h.forEach(d => xe(l, He, d))
                });
                let c = Array.from(l);
                return c.length === 0 && c.push(Object.create(null)), Eo.has(e) && a.set(e, c), c
            }
            chartOptionScopes() {
                let {
                    options: t,
                    type: e
                } = this;
                return [t, kt[e] || {}, W.datasets[e] || {}, {
                    type: e
                }, W, He]
            }
            resolveNamedOptions(t, e, s, n = [""]) {
                let o = {
                        $shared: !0
                    },
                    {
                        resolver: a,
                        subPrefixes: r
                    } = Kn(this._resolverCache, t, n),
                    l = a;
                if (Rl(a, e)) {
                    o.$shared = !1, s = gt(s) ? s() : s;
                    let c = this.createResolver(t, s, r);
                    l = Rt(a, s, c)
                }
                for (let c of e) o[c] = l[c];
                return o
            }
            createResolver(t, e, s = [""], n) {
                let {
                    resolver: o
                } = Kn(this._resolverCache, t, s);
                return O(e) ? Rt(o, e, void 0, n) : o
            }
        };

    function Kn(i, t, e) {
        let s = i.get(t);
        s || (s = new Map, i.set(t, s));
        let n = e.join(),
            o = s.get(n);
        return o || (o = {
            resolver: Ye(t, e),
            subPrefixes: e.filter(r => !r.toLowerCase().includes("hover"))
        }, s.set(n, o)), o
    }
    var Ll = i => O(i) && Object.getOwnPropertyNames(i).some(t => gt(i[t]));

    function Rl(i, t) {
        let {
            isScriptable: e,
            isIndexable: s
        } = Bi(i);
        for (let n of t) {
            let o = e(n),
                a = s(n),
                r = (a || o) && i[n];
            if (o && (gt(r) || Ll(r)) || a && F(r)) return !0
        }
        return !1
    }
    var El = "4.4.2",
        Fl = ["top", "bottom", "left", "right", "chartArea"];

    function qn(i, t) {
        return i === "top" || i === "bottom" || Fl.indexOf(i) === -1 && t === "x"
    }

    function Gn(i, t) {
        return function(e, s) {
            return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i]
        }
    }

    function Zn(i) {
        let t = i.chart,
            e = t.options.animation;
        t.notifyPlugins("afterRender"), E(e && e.onComplete, [i], t)
    }

    function Il(i) {
        let t = i.chart,
            e = t.options.animation;
        E(e && e.onProgress, [i], t)
    }

    function Fo(i) {
        return Ue() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i
    }
    var si = {},
        Jn = i => {
            let t = Fo(i);
            return Object.values(si).filter(e => e.canvas === t).pop()
        };

    function zl(i, t, e) {
        let s = Object.keys(i);
        for (let n of s) {
            let o = +n;
            if (o >= t) {
                let a = i[n];
                delete i[n], (e > 0 || o > t) && (i[o + e] = a)
            }
        }
    }

    function Bl(i, t, e, s) {
        return !e || i.type === "mouseout" ? null : s ? t : i
    }

    function Je(i, t, e) {
        return i.options.clip ? i[e] : t[e]
    }

    function Vl(i, t) {
        let {
            xScale: e,
            yScale: s
        } = i;
        return e && s ? {
            left: Je(e, t, "left"),
            right: Je(e, t, "right"),
            top: Je(s, t, "top"),
            bottom: Je(s, t, "bottom")
        } : t
    }
    var te = class {
        static defaults = W;
        static instances = si;
        static overrides = kt;
        static registry = dt;
        static version = El;
        static getChart = Jn;
        static register(...t) {
            dt.add(...t), Qn()
        }
        static unregister(...t) {
            dt.remove(...t), Qn()
        }
        constructor(t, e) {
            let s = this.config = new xs(e),
                n = Fo(t),
                o = Jn(n);
            if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
            let a = s.createResolver(s.chartOptionScopes(), this.getContext());
            this.platform = new(s.platform || ol(n)), this.platform.updateConfig(s);
            let r = this.platform.acquireContext(n, a.aspectRatio),
                l = r && r.canvas,
                c = l && l.height,
                h = l && l.width;
            if (this.id = qs(), this.ctx = r, this.canvas = l, this.width = h, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ps, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = rn(d => this.update(d), a.resizeDelay || 0), this._dataChanges = [], si[this.id] = this, !r || !l) {
                console.error("Failed to create chart: can't acquire context from the given item");
                return
            }
            xt.listen(this, "complete", Zn), xt.listen(this, "progress", Il), this._initialize(), this.attached && this.update()
        }
        get aspectRatio() {
            let {
                options: {
                    aspectRatio: t,
                    maintainAspectRatio: e
                },
                width: s,
                height: n,
                _aspectRatio: o
            } = this;
            return T(t) ? e && o ? o : n ? s / n : null : t
        }
        get data() {
            return this.config.data
        }
        set data(t) {
            this.config.data = t
        }
        get options() {
            return this._options
        }
        set options(t) {
            this.config.options = t
        }
        get registry() {
            return dt
        }
        _initialize() {
            return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Hi(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
        }
        clear() {
            return Fi(this.canvas, this.ctx), this
        }
        stop() {
            return xt.stop(this), this
        }
        resize(t, e) {
            xt.running(this) ? this._resizeBeforeDraw = {
                width: t,
                height: e
            } : this._resize(t, e)
        }
        _resize(t, e) {
            let s = this.options,
                n = this.canvas,
                o = s.maintainAspectRatio && this.aspectRatio,
                a = this.platform.getMaximumSize(n, t, e, o),
                r = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
                l = this.width ? "resize" : "attach";
            this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Hi(this, r, !0) && (this.notifyPlugins("resize", {
                size: a
            }), E(s.onResize, [this, a], this), this.attached && this._doResize(l) && this.render())
        }
        ensureScalesHaveIDs() {
            let e = this.options.scales || {};
            L(e, (s, n) => {
                s.id = n
            })
        }
        buildOrUpdateScales() {
            let t = this.options,
                e = t.scales,
                s = this.scales,
                n = Object.keys(s).reduce((a, r) => (a[r] = !1, a), {}),
                o = [];
            e && (o = o.concat(Object.keys(e).map(a => {
                let r = e[a],
                    l = bs(a, r),
                    c = l === "r",
                    h = l === "x";
                return {
                    options: r,
                    dposition: c ? "chartArea" : h ? "bottom" : "left",
                    dtype: c ? "radialLinear" : h ? "category" : "linear"
                }
            }))), L(o, a => {
                let r = a.options,
                    l = r.id,
                    c = bs(l, r),
                    h = P(r.type, a.dtype);
                (r.position === void 0 || qn(r.position, c) !== qn(a.dposition)) && (r.position = a.dposition), n[l] = !0;
                let d = null;
                if (l in s && s[l].type === h) d = s[l];
                else {
                    let u = dt.getScale(h);
                    d = new u({
                        id: l,
                        type: h,
                        ctx: this.ctx,
                        chart: this
                    }), s[d.id] = d
                }
                d.init(r, t)
            }), L(n, (a, r) => {
                a || delete s[r]
            }), L(s, a => {
                q.configure(this, a, a.options), q.addBox(this, a)
            })
        }
        _updateMetasets() {
            let t = this._metasets,
                e = this.data.datasets.length,
                s = t.length;
            if (t.sort((n, o) => n.index - o.index), s > e) {
                for (let n = e; n < s; ++n) this._destroyDatasetMeta(n);
                t.splice(e, s - e)
            }
            this._sortedMetasets = t.slice(0).sort(Gn("order", "index"))
        }
        _removeUnreferencedMetasets() {
            let {
                _metasets: t,
                data: {
                    datasets: e
                }
            } = this;
            t.length > e.length && delete this._stacks, t.forEach((s, n) => {
                e.filter(o => o === s._dataset).length === 0 && this._destroyDatasetMeta(n)
            })
        }
        buildOrUpdateControllers() {
            let t = [],
                e = this.data.datasets,
                s, n;
            for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
                let o = e[s],
                    a = this.getDatasetMeta(s),
                    r = o.type || this.config.type;
                if (a.type && a.type !== r && (this._destroyDatasetMeta(s), a = this.getDatasetMeta(s)), a.type = r, a.indexAxis = o.indexAxis || ms(r, this.options), a.order = o.order || 0, a.index = s, a.label = "" + o.label, a.visible = this.isDatasetVisible(s), a.controller) a.controller.updateIndex(s), a.controller.linkScales();
                else {
                    let l = dt.getController(r),
                        {
                            datasetElementType: c,
                            dataElementType: h
                        } = W.datasets[r];
                    Object.assign(l, {
                        dataElementType: dt.getElement(h),
                        datasetElementType: c && dt.getElement(c)
                    }), a.controller = new l(this, s), t.push(a.controller)
                }
            }
            return this._updateMetasets(), t
        }
        _resetElements() {
            L(this.data.datasets, (t, e) => {
                this.getDatasetMeta(e).controller.reset()
            }, this)
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset")
        }
        update(t) {
            let e = this.config;
            e.update();
            let s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
                n = this._animationsDisabled = !s.animation;
            if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
                    mode: t,
                    cancelable: !0
                }) === !1) return;
            let o = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let a = 0;
            for (let c = 0, h = this.data.datasets.length; c < h; c++) {
                let {
                    controller: d
                } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
                d.buildOrUpdateElements(u), a = Math.max(+d.getMaxOverflow(), a)
            }
            a = this._minPadding = s.layout.autoPadding ? a : 0, this._updateLayout(a), n || L(o, c => {
                c.reset()
            }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
                mode: t
            }), this._layers.sort(Gn("z", "_idx"));
            let {
                _active: r,
                _lastEvent: l
            } = this;
            l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render()
        }
        _updateScales() {
            L(this.scales, t => {
                q.removeBox(this, t)
            }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales()
        }
        _checkEventBindings() {
            let t = this.options,
                e = new Set(Object.keys(this._listeners)),
                s = new Set(t.events);
            (!Mi(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents())
        }
        _updateHiddenIndices() {
            let {
                _hiddenIndices: t
            } = this, e = this._getUniformDataChanges() || [];
            for (let {
                    method: s,
                    start: n,
                    count: o
                } of e) {
                let a = s === "_removeElements" ? -o : o;
                zl(t, n, a)
            }
        }
        _getUniformDataChanges() {
            let t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            let e = this.data.datasets.length,
                s = o => new Set(t.filter(a => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))),
                n = s(0);
            for (let o = 1; o < e; o++)
                if (!Mi(n, s(o))) return;
            return Array.from(n).map(o => o.split(",")).map(o => ({
                method: o[1],
                start: +o[2],
                count: +o[3]
            }))
        }
        _updateLayout(t) {
            if (this.notifyPlugins("beforeLayout", {
                    cancelable: !0
                }) === !1) return;
            q.update(this, this.width, this.height, t);
            let e = this.chartArea,
                s = e.width <= 0 || e.height <= 0;
            this._layers = [], L(this.boxes, n => {
                s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()))
            }, this), this._layers.forEach((n, o) => {
                n._idx = o
            }), this.notifyPlugins("afterLayout")
        }
        _updateDatasets(t) {
            if (this.notifyPlugins("beforeDatasetsUpdate", {
                    mode: t,
                    cancelable: !0
                }) !== !1) {
                for (let e = 0, s = this.data.datasets.length; e < s; ++e) this.getDatasetMeta(e).controller.configure();
                for (let e = 0, s = this.data.datasets.length; e < s; ++e) this._updateDataset(e, gt(t) ? t({
                    datasetIndex: e
                }) : t);
                this.notifyPlugins("afterDatasetsUpdate", {
                    mode: t
                })
            }
        }
        _updateDataset(t, e) {
            let s = this.getDatasetMeta(t),
                n = {
                    meta: s,
                    index: t,
                    mode: e,
                    cancelable: !0
                };
            this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
        }
        render() {
            this.notifyPlugins("beforeRender", {
                cancelable: !0
            }) !== !1 && (xt.has(this) ? this.attached && !xt.running(this) && xt.start(this) : (this.draw(), Zn({
                chart: this
            })))
        }
        draw() {
            let t;
            if (this._resizeBeforeDraw) {
                let {
                    width: s,
                    height: n
                } = this._resizeBeforeDraw;
                this._resize(s, n), this._resizeBeforeDraw = null
            }
            if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
                    cancelable: !0
                }) === !1) return;
            let e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw")
        }
        _getSortedDatasetMetas(t) {
            let e = this._sortedMetasets,
                s = [],
                n, o;
            for (n = 0, o = e.length; n < o; ++n) {
                let a = e[n];
                (!t || a.visible) && s.push(a)
            }
            return s
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0)
        }
        _drawDatasets() {
            if (this.notifyPlugins("beforeDatasetsDraw", {
                    cancelable: !0
                }) === !1) return;
            let t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw")
        }
        _drawDataset(t) {
            let e = this.ctx,
                s = t._clip,
                n = !s.disabled,
                o = Vl(t, this.chartArea),
                a = {
                    meta: t,
                    index: t.index,
                    cancelable: !0
                };
            this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (n && ue(e, {
                left: s.left === !1 ? 0 : o.left - s.left,
                right: s.right === !1 ? this.width : o.right + s.right,
                top: s.top === !1 ? 0 : o.top - s.top,
                bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
            }), t.controller.draw(), n && fe(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a))
        }
        isPointInArea(t) {
            return rt(t, this.chartArea, this._minPadding)
        }
        getElementsAtEventForMode(t, e, s, n) {
            let o = Wr.modes[e];
            return typeof o == "function" ? o(this, t, s, n) : []
        }
        getDatasetMeta(t) {
            let e = this.data.datasets[t],
                s = this._metasets,
                n = s.filter(o => o && o._dataset === e).pop();
            return n || (n = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e && e.order || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1
            }, s.push(n)), n
        }
        getContext() {
            return this.$context || (this.$context = bt(null, {
                chart: this,
                type: "chart"
            }))
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length
        }
        isDatasetVisible(t) {
            let e = this.data.datasets[t];
            if (!e) return !1;
            let s = this.getDatasetMeta(t);
            return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden
        }
        setDatasetVisibility(t, e) {
            let s = this.getDatasetMeta(t);
            s.hidden = !e
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t]
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t]
        }
        _updateVisibility(t, e, s) {
            let n = s ? "show" : "hide",
                o = this.getDatasetMeta(t),
                a = o.controller._resolveAnimations(void 0, n);
            Ut(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {
                visible: s
            }), this.update(r => r.datasetIndex === t ? n : void 0))
        }
        hide(t, e) {
            this._updateVisibility(t, e, !1)
        }
        show(t, e) {
            this._updateVisibility(t, e, !0)
        }
        _destroyDatasetMeta(t) {
            let e = this._metasets[t];
            e && e.controller && e.controller._destroy(), delete this._metasets[t]
        }
        _stop() {
            let t, e;
            for (this.stop(), xt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t)
        }
        destroy() {
            this.notifyPlugins("beforeDestroy");
            let {
                canvas: t,
                ctx: e
            } = this;
            this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Fi(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete si[this.id], this.notifyPlugins("afterDestroy")
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t)
        }
        bindEvents() {
            this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
        }
        bindUserEvents() {
            let t = this._listeners,
                e = this.platform,
                s = (o, a) => {
                    e.addEventListener(this, o, a), t[o] = a
                },
                n = (o, a, r) => {
                    o.offsetX = a, o.offsetY = r, this._eventHandler(o)
                };
            L(this.options.events, o => s(o, n))
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            let t = this._responsiveListeners,
                e = this.platform,
                s = (l, c) => {
                    e.addEventListener(this, l, c), t[l] = c
                },
                n = (l, c) => {
                    t[l] && (e.removeEventListener(this, l, c), delete t[l])
                },
                o = (l, c) => {
                    this.canvas && this.resize(l, c)
                },
                a, r = () => {
                    n("attach", r), this.attached = !0, this.resize(), s("resize", o), s("detach", a)
                };
            a = () => {
                this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", r)
            }, e.isAttached(this.canvas) ? r() : a()
        }
        unbindEvents() {
            L(this._listeners, (t, e) => {
                this.platform.removeEventListener(this, e, t)
            }), this._listeners = {}, L(this._responsiveListeners, (t, e) => {
                this.platform.removeEventListener(this, e, t)
            }), this._responsiveListeners = void 0
        }
        updateHoverStyle(t, e, s) {
            let n = s ? "set" : "remove",
                o, a, r, l;
            for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
                a = t[r];
                let c = a && this.getDatasetMeta(a.datasetIndex).controller;
                c && c[n + "HoverStyle"](a.element, a.datasetIndex, a.index)
            }
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t) {
            let e = this._active || [],
                s = t.map(({
                    datasetIndex: o,
                    index: a
                }) => {
                    let r = this.getDatasetMeta(o);
                    if (!r) throw new Error("No dataset found at index " + o);
                    return {
                        datasetIndex: o,
                        element: r.data[a],
                        index: a
                    }
                });
            !he(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e))
        }
        notifyPlugins(t, e, s) {
            return this._plugins.notify(this, t, e, s)
        }
        isPluginEnabled(t) {
            return this._plugins._cache.filter(e => e.plugin.id === t).length === 1
        }
        _updateHoverStyles(t, e, s) {
            let n = this.options.hover,
                o = (l, c) => l.filter(h => !c.some(d => h.datasetIndex === d.datasetIndex && h.index === d.index)),
                a = o(e, t),
                r = s ? t : o(t, e);
            a.length && this.updateHoverStyle(a, n.mode, !1), r.length && n.mode && this.updateHoverStyle(r, n.mode, !0)
        }
        _eventHandler(t, e) {
            let s = {
                    event: t,
                    replay: e,
                    cancelable: !0,
                    inChartArea: this.isPointInArea(t)
                },
                n = a => (a.options.events || this.options.events).includes(t.native.type);
            if (this.notifyPlugins("beforeEvent", s, n) === !1) return;
            let o = this._handleEvent(t, e, s.inChartArea);
            return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this
        }
        _handleEvent(t, e, s) {
            let {
                _active: n = [],
                options: o
            } = this, a = e, r = this._getActiveElements(t, n, s, a), l = Js(t), c = Bl(t, this._lastEvent, s, l);
            s && (this._lastEvent = null, E(o.onHover, [t, r, this], this), l && E(o.onClick, [t, r, this], this));
            let h = !he(r, n);
            return (h || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h
        }
        _getActiveElements(t, e, s, n) {
            if (t.type === "mouseout") return [];
            if (!s) return e;
            let o = this.options.hover;
            return this.getElementsAtEventForMode(t, o.mode, o, n)
        }
    };

    function Qn() {
        return L(te.instances, i => i._plugins.invalidate())
    }

    function Wl(i, t, e) {
        let {
            startAngle: s,
            pixelMargin: n,
            x: o,
            y: a,
            outerRadius: r,
            innerRadius: l
        } = t, c = n / r;
        i.beginPath(), i.arc(o, a, r, s - c, e + c), l > n ? (c = n / l, i.arc(o, a, l, e + c, s - c, !0)) : i.arc(o, a, n, e + N, s - N), i.closePath(), i.clip()
    }

    function Nl(i) {
        return $e(i, ["outerStart", "outerEnd", "innerStart", "innerEnd"])
    }

    function Hl(i, t, e, s) {
        let n = Nl(i.options.borderRadius),
            o = (e - t) / 2,
            a = Math.min(o, s * t / 2),
            r = l => {
                let c = (e - Math.min(o, l)) * s / 2;
                return $(l, 0, Math.min(o, c))
            };
        return {
            outerStart: r(n.outerStart),
            outerEnd: r(n.outerEnd),
            innerStart: $(n.innerStart, 0, a),
            innerEnd: $(n.innerEnd, 0, a)
        }
    }

    function Jt(i, t, e, s) {
        return {
            x: e + i * Math.cos(t),
            y: s + i * Math.sin(t)
        }
    }

    function li(i, t, e, s, n, o) {
        let {
            x: a,
            y: r,
            startAngle: l,
            pixelMargin: c,
            innerRadius: h
        } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0, f = 0, g = n - l;
        if (s) {
            let R = h > 0 ? h - s : 0,
                B = d > 0 ? d - s : 0,
                H = (R + B) / 2,
                st = H !== 0 ? g * H / (H + s) : g;
            f = (g - st) / 2
        }
        let p = Math.max(.001, g * d - e / I) / d,
            m = (g - p) / 2,
            b = l + m + f,
            x = n - m - f,
            {
                outerStart: v,
                outerEnd: y,
                innerStart: _,
                innerEnd: M
            } = Hl(t, u, d, x - b),
            k = d - v,
            w = d - y,
            S = b + v / k,
            D = x - y / w,
            C = u + _,
            A = u + M,
            Y = b + _ / C,
            tt = x - M / A;
        if (i.beginPath(), o) {
            let R = (S + D) / 2;
            if (i.arc(a, r, d, S, R), i.arc(a, r, d, R, D), y > 0) {
                let K = Jt(w, D, a, r);
                i.arc(K.x, K.y, y, D, x + N)
            }
            let B = Jt(A, x, a, r);
            if (i.lineTo(B.x, B.y), M > 0) {
                let K = Jt(A, tt, a, r);
                i.arc(K.x, K.y, M, x + N, tt + Math.PI)
            }
            let H = (x - M / u + (b + _ / u)) / 2;
            if (i.arc(a, r, u, x - M / u, H, !0), i.arc(a, r, u, H, b + _ / u, !0), _ > 0) {
                let K = Jt(C, Y, a, r);
                i.arc(K.x, K.y, _, Y + Math.PI, b - N)
            }
            let st = Jt(k, b, a, r);
            if (i.lineTo(st.x, st.y), v > 0) {
                let K = Jt(k, S, a, r);
                i.arc(K.x, K.y, v, b - N, S)
            }
        } else {
            i.moveTo(a, r);
            let R = Math.cos(S) * d + a,
                B = Math.sin(S) * d + r;
            i.lineTo(R, B);
            let H = Math.cos(D) * d + a,
                st = Math.sin(D) * d + r;
            i.lineTo(H, st)
        }
        i.closePath()
    }

    function jl(i, t, e, s, n) {
        let {
            fullCircles: o,
            startAngle: a,
            circumference: r
        } = t, l = t.endAngle;
        if (o) {
            li(i, t, e, s, l, n);
            for (let c = 0; c < o; ++c) i.fill();
            isNaN(r) || (l = a + (r % z || z))
        }
        return li(i, t, e, s, l, n), i.fill(), l
    }

    function $l(i, t, e, s, n) {
        let {
            fullCircles: o,
            startAngle: a,
            circumference: r,
            options: l
        } = t, {
            borderWidth: c,
            borderJoinStyle: h,
            borderDash: d,
            borderDashOffset: u
        } = l, f = l.borderAlign === "inner";
        if (!c) return;
        i.setLineDash(d || []), i.lineDashOffset = u, f ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
        let g = t.endAngle;
        if (o) {
            li(i, t, e, s, g, n);
            for (let p = 0; p < o; ++p) i.stroke();
            isNaN(r) || (g = a + (r % z || z))
        }
        f && Wl(i, t, g), o || (li(i, t, e, s, g, n), i.stroke())
    }
    var _s = class extends ot {
        static id = "arc";
        static defaults = {
            borderAlign: "center",
            borderColor: "#fff",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0
        };
        static defaultRoutes = {
            backgroundColor: "backgroundColor"
        };
        static descriptors = {
            _scriptable: !0,
            _indexable: t => t !== "borderDash"
        };
        circumference;
        endAngle;
        fullCircles;
        innerRadius;
        outerRadius;
        pixelMargin;
        startAngle;
        constructor(t) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
        }
        inRange(t, e, s) {
            let n = this.getProps(["x", "y"], s),
                {
                    angle: o,
                    distance: a
                } = Pi(n, {
                    x: t,
                    y: e
                }),
                {
                    startAngle: r,
                    endAngle: l,
                    innerRadius: c,
                    outerRadius: h,
                    circumference: d
                } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], s),
                u = (this.options.spacing + this.options.borderWidth) / 2,
                g = P(d, l - r) >= z || Kt(o, r, l),
                p = ct(a, c + u, h + u);
            return g && p
        }
        getCenterPoint(t) {
            let {
                x: e,
                y: s,
                startAngle: n,
                endAngle: o,
                innerRadius: a,
                outerRadius: r
            } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), {
                offset: l,
                spacing: c
            } = this.options, h = (n + o) / 2, d = (a + r + c + l) / 2;
            return {
                x: e + Math.cos(h) * d,
                y: s + Math.sin(h) * d
            }
        }
        tooltipPosition(t) {
            return this.getCenterPoint(t)
        }
        draw(t) {
            let {
                options: e,
                circumference: s
            } = this, n = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, a = e.circular;
            if (this.pixelMargin = e.borderAlign === "inner" ? .33 : 0, this.fullCircles = s > z ? Math.floor(s / z) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
            t.save();
            let r = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(r) * n, Math.sin(r) * n);
            let l = 1 - Math.sin(Math.min(I, s || 0)),
                c = n * l;
            t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, jl(t, this, c, o, a), $l(t, this, c, o, a), t.restore()
        }
    };

    function Io(i, t, e = t) {
        i.lineCap = P(e.borderCapStyle, t.borderCapStyle), i.setLineDash(P(e.borderDash, t.borderDash)), i.lineDashOffset = P(e.borderDashOffset, t.borderDashOffset), i.lineJoin = P(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = P(e.borderWidth, t.borderWidth), i.strokeStyle = P(e.borderColor, t.borderColor)
    }

    function Yl(i, t, e) {
        i.lineTo(e.x, e.y)
    }

    function Ul(i) {
        return i.stepped ? dn : i.tension || i.cubicInterpolationMode === "monotone" ? un : Yl
    }

    function zo(i, t, e = {}) {
        let s = i.length,
            {
                start: n = 0,
                end: o = s - 1
            } = e,
            {
                start: a,
                end: r
            } = t,
            l = Math.max(n, a),
            c = Math.min(o, r),
            h = n < a && o < a || n > r && o > r;
        return {
            count: s,
            start: l,
            loop: t.loop,
            ilen: c < l && !h ? s + c - l : c - l
        }
    }

    function Xl(i, t, e, s) {
        let {
            points: n,
            options: o
        } = t, {
            count: a,
            start: r,
            loop: l,
            ilen: c
        } = zo(n, e, s), h = Ul(o), {
            move: d = !0,
            reverse: u
        } = s || {}, f, g, p;
        for (f = 0; f <= c; ++f) g = n[(r + (u ? c - f : f)) % a], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
        return l && (g = n[(r + (u ? c : 0)) % a], h(i, p, g, u, o.stepped)), !!l
    }

    function Kl(i, t, e, s) {
        let n = t.points,
            {
                count: o,
                start: a,
                ilen: r
            } = zo(n, e, s),
            {
                move: l = !0,
                reverse: c
            } = s || {},
            h = 0,
            d = 0,
            u, f, g, p, m, b, x = y => (a + (c ? r - y : y)) % o,
            v = () => {
                p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b))
            };
        for (l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= r; ++u) {
            if (f = n[x(u)], f.skip) continue;
            let y = f.x,
                _ = f.y,
                M = y | 0;
            M === g ? (_ < p ? p = _ : _ > m && (m = _), h = (d * h + y) / ++d) : (v(), i.lineTo(y, _), g = M, d = 0, p = m = _), b = _
        }
        v()
    }

    function ys(i) {
        let t = i.options,
            e = t.borderDash && t.borderDash.length;
        return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Kl : Xl
    }

    function ql(i) {
        return i.stepped ? vn : i.tension || i.cubicInterpolationMode === "monotone" ? Mn : Mt
    }

    function Gl(i, t, e, s) {
        let n = t._path;
        n || (n = t._path = new Path2D, t.path(n, e, s) && n.closePath()), Io(i, t.options), i.stroke(n)
    }

    function Zl(i, t, e, s) {
        let {
            segments: n,
            options: o
        } = t, a = ys(t);
        for (let r of n) Io(i, o, r.style), i.beginPath(), a(i, t, r, {
            start: e,
            end: e + s - 1
        }) && i.closePath(), i.stroke()
    }
    var Jl = typeof Path2D == "function";

    function Ql(i, t, e, s) {
        Jl && !t.options.segment ? Gl(i, t, e, s) : Zl(i, t, e, s)
    }
    var ee = class extends ot {
        static id = "line";
        static defaults = {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0
        };
        static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor"
        };
        static descriptors = {
            _scriptable: !0,
            _indexable: t => t !== "borderDash" && t !== "fill"
        };
        constructor(t) {
            super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
        }
        updateControlPoints(t, e) {
            let s = this.options;
            if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
                let n = s.spanGaps ? this._loop : this._fullLoop;
                xn(this._points, s, t, n, e), this._pointsUpdated = !0
            }
        }
        set points(t) {
            this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
        }
        get points() {
            return this._points
        }
        get segments() {
            return this._segments || (this._segments = wn(this, this.options.segment))
        }
        first() {
            let t = this.segments,
                e = this.points;
            return t.length && e[t[0].start]
        }
        last() {
            let t = this.segments,
                e = this.points,
                s = t.length;
            return s && e[t[s - 1].end]
        }
        interpolate(t, e) {
            let s = this.options,
                n = t[e],
                o = this.points,
                a = Xi(this, {
                    property: e,
                    start: n,
                    end: n
                });
            if (!a.length) return;
            let r = [],
                l = ql(s),
                c, h;
            for (c = 0, h = a.length; c < h; ++c) {
                let {
                    start: d,
                    end: u
                } = a[c], f = o[d], g = o[u];
                if (f === g) {
                    r.push(f);
                    continue
                }
                let p = Math.abs((n - f[e]) / (g[e] - f[e])),
                    m = l(f, g, p, s.stepped);
                m[e] = t[e], r.push(m)
            }
            return r.length === 1 ? r[0] : r
        }
        pathSegment(t, e, s) {
            return ys(this)(t, this, e, s)
        }
        path(t, e, s) {
            let n = this.segments,
                o = ys(this),
                a = this._loop;
            e = e || 0, s = s || this.points.length - e;
            for (let r of n) a &= o(t, this, r, {
                start: e,
                end: e + s - 1
            });
            return !!a
        }
        draw(t, e, s, n) {
            let o = this.options || {};
            (this.points || []).length && o.borderWidth && (t.save(), Ql(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0)
        }
    };

    function to(i, t, e, s) {
        let n = i.options,
            {
                [e]: o
            } = i.getProps([e], s);
        return Math.abs(t - o) < n.radius + n.hitRadius
    }
    var vs = class extends ot {
        static id = "point";
        parsed;
        skip;
        stop;
        static defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: "circle",
            radius: 3,
            rotation: 0
        };
        static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor"
        };
        constructor(t) {
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
        }
        inRange(t, e, s) {
            let n = this.options,
                {
                    x: o,
                    y: a
                } = this.getProps(["x", "y"], s);
            return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(n.hitRadius + n.radius, 2)
        }
        inXRange(t, e) {
            return to(this, t, "x", e)
        }
        inYRange(t, e) {
            return to(this, t, "y", e)
        }
        getCenterPoint(t) {
            let {
                x: e,
                y: s
            } = this.getProps(["x", "y"], t);
            return {
                x: e,
                y: s
            }
        }
        size(t) {
            t = t || this.options || {};
            let e = t.radius || 0;
            e = Math.max(e, e && t.hoverRadius || 0);
            let s = e && t.borderWidth || 0;
            return (e + s) * 2
        }
        draw(t, e) {
            let s = this.options;
            this.skip || s.radius < .1 || !rt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, je(t, s, this.x, this.y))
        }
        getRange() {
            let t = this.options || {};
            return t.radius + t.hitRadius
        }
    };

    function Bo(i, t) {
        let {
            x: e,
            y: s,
            base: n,
            width: o,
            height: a
        } = i.getProps(["x", "y", "base", "width", "height"], t), r, l, c, h, d;
        return i.horizontal ? (d = a / 2, r = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, r = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
            left: r,
            top: c,
            right: l,
            bottom: h
        }
    }

    function Ct(i, t, e, s) {
        return i ? 0 : $(t, e, s)
    }

    function tc(i, t, e) {
        let s = i.options.borderWidth,
            n = i.borderSkipped,
            o = zi(s);
        return {
            t: Ct(n.top, o.top, 0, e),
            r: Ct(n.right, o.right, 0, t),
            b: Ct(n.bottom, o.bottom, 0, e),
            l: Ct(n.left, o.left, 0, t)
        }
    }

    function ec(i, t, e) {
        let {
            enableBorderRadius: s
        } = i.getProps(["enableBorderRadius"]), n = i.options.borderRadius, o = Pt(n), a = Math.min(t, e), r = i.borderSkipped, l = s || O(n);
        return {
            topLeft: Ct(!l || r.top || r.left, o.topLeft, 0, a),
            topRight: Ct(!l || r.top || r.right, o.topRight, 0, a),
            bottomLeft: Ct(!l || r.bottom || r.left, o.bottomLeft, 0, a),
            bottomRight: Ct(!l || r.bottom || r.right, o.bottomRight, 0, a)
        }
    }

    function ic(i) {
        let t = Bo(i),
            e = t.right - t.left,
            s = t.bottom - t.top,
            n = tc(i, e / 2, s / 2),
            o = ec(i, e / 2, s / 2);
        return {
            outer: {
                x: t.left,
                y: t.top,
                w: e,
                h: s,
                radius: o
            },
            inner: {
                x: t.left + n.l,
                y: t.top + n.t,
                w: e - n.l - n.r,
                h: s - n.t - n.b,
                radius: {
                    topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                    topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                    bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                    bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
                }
            }
        }
    }

    function ts(i, t, e, s) {
        let n = t === null,
            o = e === null,
            r = i && !(n && o) && Bo(i, s);
        return r && (n || ct(t, r.left, r.right)) && (o || ct(e, r.top, r.bottom))
    }

    function sc(i) {
        return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight
    }

    function nc(i, t) {
        i.rect(t.x, t.y, t.w, t.h)
    }

    function es(i, t, e = {}) {
        let s = i.x !== e.x ? -t : 0,
            n = i.y !== e.y ? -t : 0,
            o = (i.x + i.w !== e.x + e.w ? t : 0) - s,
            a = (i.y + i.h !== e.y + e.h ? t : 0) - n;
        return {
            x: i.x + s,
            y: i.y + n,
            w: i.w + o,
            h: i.h + a,
            radius: i.radius
        }
    }
    var Ms = class extends ot {
            static id = "bar";
            static defaults = {
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            };
            static defaultRoutes = {
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            constructor(t) {
                super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t)
            }
            draw(t) {
                let {
                    inflateAmount: e,
                    options: {
                        borderColor: s,
                        backgroundColor: n
                    }
                } = this, {
                    inner: o,
                    outer: a
                } = ic(this), r = sc(a.radius) ? Gt : nc;
                t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, es(a, e, o)), t.clip(), r(t, es(o, -e, a)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), r(t, es(o, e)), t.fillStyle = n, t.fill(), t.restore()
            }
            inRange(t, e, s) {
                return ts(this, t, e, s)
            }
            inXRange(t, e) {
                return ts(this, t, null, e)
            }
            inYRange(t, e) {
                return ts(this, null, t, e)
            }
            getCenterPoint(t) {
                let {
                    x: e,
                    y: s,
                    base: n,
                    horizontal: o
                } = this.getProps(["x", "y", "base", "horizontal"], t);
                return {
                    x: o ? (e + n) / 2 : e,
                    y: o ? s : (s + n) / 2
                }
            }
            getRange(t) {
                return t === "x" ? this.width / 2 : this.height / 2
            }
        },
        oc = Object.freeze({
            __proto__: null,
            ArcElement: _s,
            BarElement: Ms,
            LineElement: ee,
            PointElement: vs
        }),
        ks = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        eo = ks.map(i => i.replace("rgb(", "rgba(").replace(")", ", 0.5)"));

    function Vo(i) {
        return ks[i % ks.length]
    }

    function Wo(i) {
        return eo[i % eo.length]
    }

    function ac(i, t) {
        return i.borderColor = Vo(t), i.backgroundColor = Wo(t), ++t
    }

    function rc(i, t) {
        return i.backgroundColor = i.data.map(() => Vo(t++)), t
    }

    function lc(i, t) {
        return i.backgroundColor = i.data.map(() => Wo(t++)), t
    }

    function cc(i) {
        let t = 0;
        return (e, s) => {
            let n = i.getDatasetMeta(s).controller;
            n instanceof ve ? t = rc(e, t) : n instanceof oi ? t = lc(e, t) : n && (t = ac(e, t))
        }
    }

    function io(i) {
        let t;
        for (t in i)
            if (i[t].borderColor || i[t].backgroundColor) return !0;
        return !1
    }

    function hc(i) {
        return i && (i.borderColor || i.backgroundColor)
    }
    var dc = {
        id: "colors",
        defaults: {
            enabled: !0,
            forceOverride: !1
        },
        beforeLayout(i, t, e) {
            if (!e.enabled) return;
            let {
                data: {
                    datasets: s
                },
                options: n
            } = i.config, {
                elements: o
            } = n;
            if (!e.forceOverride && (io(s) || hc(n) || o && io(o))) return;
            let a = cc(i);
            s.forEach(a)
        }
    };

    function uc(i, t, e, s, n) {
        let o = n.samples || s;
        if (o >= e) return i.slice(t, t + e);
        let a = [],
            r = (e - 2) / (o - 2),
            l = 0,
            c = t + e - 1,
            h = t,
            d, u, f, g, p;
        for (a[l++] = i[h], d = 0; d < o - 2; d++) {
            let m = 0,
                b = 0,
                x, v = Math.floor((d + 1) * r) + 1 + t,
                y = Math.min(Math.floor((d + 2) * r) + 1, e) + t,
                _ = y - v;
            for (x = v; x < y; x++) m += i[x].x, b += i[x].y;
            m /= _, b /= _;
            let M = Math.floor(d * r) + 1 + t,
                k = Math.min(Math.floor((d + 1) * r) + 1, e) + t,
                {
                    x: w,
                    y: S
                } = i[h];
            for (f = g = -1, x = M; x < k; x++) g = .5 * Math.abs((w - m) * (i[x].y - S) - (w - i[x].x) * (b - S)), g > f && (f = g, u = i[x], p = x);
            a[l++] = u, h = p
        }
        return a[l++] = i[c], a
    }

    function fc(i, t, e, s) {
        let n = 0,
            o = 0,
            a, r, l, c, h, d, u, f, g, p, m = [],
            b = t + e - 1,
            x = i[t].x,
            y = i[b].x - x;
        for (a = t; a < t + e; ++a) {
            r = i[a], l = (r.x - x) / y * s, c = r.y;
            let _ = l | 0;
            if (_ === h) c < g ? (g = c, d = a) : c > p && (p = c, u = a), n = (o * n + r.x) / ++o;
            else {
                let M = a - 1;
                if (!T(d) && !T(u)) {
                    let k = Math.min(d, u),
                        w = Math.max(d, u);
                    k !== f && k !== M && m.push({ ...i[k],
                        x: n
                    }), w !== f && w !== M && m.push({ ...i[w],
                        x: n
                    })
                }
                a > 0 && M !== f && m.push(i[M]), m.push(r), h = _, o = 0, g = p = c, d = u = f = a
            }
        }
        return m
    }

    function No(i) {
        if (i._decimated) {
            let t = i._data;
            delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: t
            })
        }
    }

    function so(i) {
        i.data.datasets.forEach(t => {
            No(t)
        })
    }

    function gc(i, t) {
        let e = t.length,
            s = 0,
            n, {
                iScale: o
            } = i,
            {
                min: a,
                max: r,
                minDefined: l,
                maxDefined: c
            } = o.getUserBounds();
        return l && (s = $(at(t, o.axis, a).lo, 0, e - 1)), c ? n = $(at(t, o.axis, r).hi + 1, s, e) - s : n = e - s, {
            start: s,
            count: n
        }
    }
    var pc = {
        id: "decimation",
        defaults: {
            algorithm: "min-max",
            enabled: !1
        },
        beforeElementsUpdate: (i, t, e) => {
            if (!e.enabled) {
                so(i);
                return
            }
            let s = i.width;
            i.data.datasets.forEach((n, o) => {
                let {
                    _data: a,
                    indexAxis: r
                } = n, l = i.getDatasetMeta(o), c = a || n.data;
                if (Zt([r, i.options.indexAxis]) === "y" || !l.controller.supportsDecimation) return;
                let h = i.scales[l.xAxisID];
                if (h.type !== "linear" && h.type !== "time" || i.options.parsing) return;
                let {
                    start: d,
                    count: u
                } = gc(l, c), f = e.threshold || 4 * s;
                if (u <= f) {
                    No(n);
                    return
                }
                T(a) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this._decimated
                    },
                    set: function(p) {
                        this._data = p
                    }
                }));
                let g;
                switch (e.algorithm) {
                    case "lttb":
                        g = uc(c, d, u, s, e);
                        break;
                    case "min-max":
                        g = fc(c, d, u, s);
                        break;
                    default:
                        throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)
                }
                n._decimated = g
            })
        },
        destroy(i) {
            so(i)
        }
    };

    function mc(i, t, e) {
        let s = i.segments,
            n = i.points,
            o = t.points,
            a = [];
        for (let r of s) {
            let {
                start: l,
                end: c
            } = r;
            c = Ts(l, c, n);
            let h = ws(e, n[l], n[c], r.loop);
            if (!t.segments) {
                a.push({
                    source: r,
                    target: h,
                    start: n[l],
                    end: n[c]
                });
                continue
            }
            let d = Xi(t, h);
            for (let u of d) {
                let f = ws(e, o[u.start], o[u.end], u.loop),
                    g = Ui(r, n, f);
                for (let p of g) a.push({
                    source: p,
                    target: u,
                    start: {
                        [e]: no(h, f, "start", Math.max)
                    },
                    end: {
                        [e]: no(h, f, "end", Math.min)
                    }
                })
            }
        }
        return a
    }

    function ws(i, t, e, s) {
        if (s) return;
        let n = t[i],
            o = e[i];
        return i === "angle" && (n = G(n), o = G(o)), {
            property: i,
            start: n,
            end: o
        }
    }

    function bc(i, t) {
        let {
            x: e = null,
            y: s = null
        } = i || {}, n = t.points, o = [];
        return t.segments.forEach(({
            start: a,
            end: r
        }) => {
            r = Ts(a, r, n);
            let l = n[a],
                c = n[r];
            s !== null ? (o.push({
                x: l.x,
                y: s
            }), o.push({
                x: c.x,
                y: s
            })) : e !== null && (o.push({
                x: e,
                y: l.y
            }), o.push({
                x: e,
                y: c.y
            }))
        }), o
    }

    function Ts(i, t, e) {
        for (; t > i; t--) {
            let s = e[t];
            if (!isNaN(s.x) && !isNaN(s.y)) break
        }
        return t
    }

    function no(i, t, e, s) {
        return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0
    }

    function Ho(i, t) {
        let e = [],
            s = !1;
        return F(i) ? (s = !0, e = i) : e = bc(i, t), e.length ? new ee({
            points: e,
            options: {
                tension: 0
            },
            _loop: s,
            _fullLoop: s
        }) : null
    }

    function oo(i) {
        return i && i.fill !== !1
    }

    function xc(i, t, e) {
        let n = i[t].fill,
            o = [t],
            a;
        if (!e) return n;
        for (; n !== !1 && o.indexOf(n) === -1;) {
            if (!V(n)) return n;
            if (a = i[n], !a) return !1;
            if (a.visible) return n;
            o.push(n), n = a.fill
        }
        return !1
    }

    function _c(i, t, e) {
        let s = kc(i);
        if (O(s)) return isNaN(s.value) ? !1 : s;
        let n = parseFloat(s);
        return V(n) && Math.floor(n) === n ? yc(s[0], t, n, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s
    }

    function yc(i, t, e, s) {
        return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
    }

    function vc(i, t) {
        let e = null;
        return i === "start" ? e = t.bottom : i === "end" ? e = t.top : O(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e
    }

    function Mc(i, t, e) {
        let s;
        return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : O(i) ? s = i.value : s = t.getBaseValue(), s
    }

    function kc(i) {
        let t = i.options,
            e = t.fill,
            s = P(e && e.target, e);
        return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s
    }

    function wc(i) {
        let {
            scale: t,
            index: e,
            line: s
        } = i, n = [], o = s.segments, a = s.points, r = Sc(t, e);
        r.push(Ho({
            x: null,
            y: t.bottom
        }, s));
        for (let l = 0; l < o.length; l++) {
            let c = o[l];
            for (let h = c.start; h <= c.end; h++) Pc(n, a[h], r)
        }
        return new ee({
            points: n,
            options: {}
        })
    }

    function Sc(i, t) {
        let e = [],
            s = i.getMatchingVisibleMetas("line");
        for (let n = 0; n < s.length; n++) {
            let o = s[n];
            if (o.index === t) break;
            o.hidden || e.unshift(o.dataset)
        }
        return e
    }

    function Pc(i, t, e) {
        let s = [];
        for (let n = 0; n < e.length; n++) {
            let o = e[n],
                {
                    first: a,
                    last: r,
                    point: l
                } = Dc(o, t, "x");
            if (!(!l || a && r)) {
                if (a) s.unshift(l);
                else if (i.push(l), !r) break
            }
        }
        i.push(...s)
    }

    function Dc(i, t, e) {
        let s = i.interpolate(t, e);
        if (!s) return {};
        let n = s[e],
            o = i.segments,
            a = i.points,
            r = !1,
            l = !1;
        for (let c = 0; c < o.length; c++) {
            let h = o[c],
                d = a[h.start][e],
                u = a[h.end][e];
            if (ct(n, d, u)) {
                r = n === d, l = n === u;
                break
            }
        }
        return {
            first: r,
            last: l,
            point: s
        }
    }
    var ci = class {
        constructor(t) {
            this.x = t.x, this.y = t.y, this.radius = t.radius
        }
        pathSegment(t, e, s) {
            let {
                x: n,
                y: o,
                radius: a
            } = this;
            return e = e || {
                start: 0,
                end: z
            }, t.arc(n, o, a, e.end, e.start, !0), !s.bounds
        }
        interpolate(t) {
            let {
                x: e,
                y: s,
                radius: n
            } = this, o = t.angle;
            return {
                x: e + Math.cos(o) * n,
                y: s + Math.sin(o) * n,
                angle: o
            }
        }
    };

    function Cc(i) {
        let {
            chart: t,
            fill: e,
            line: s
        } = i;
        if (V(e)) return Oc(t, e);
        if (e === "stack") return wc(i);
        if (e === "shape") return !0;
        let n = Ac(i);
        return n instanceof ci ? n : Ho(n, s)
    }

    function Oc(i, t) {
        let e = i.getDatasetMeta(t);
        return e && i.isDatasetVisible(t) ? e.dataset : null
    }

    function Ac(i) {
        return (i.scale || {}).getPointPositionForValue ? Lc(i) : Tc(i)
    }

    function Tc(i) {
        let {
            scale: t = {},
            fill: e
        } = i, s = vc(e, t);
        if (V(s)) {
            let n = t.isHorizontal();
            return {
                x: n ? s : null,
                y: n ? null : s
            }
        }
        return null
    }

    function Lc(i) {
        let {
            scale: t,
            fill: e
        } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, a = Mc(e, t, o), r = [];
        if (s.grid.circular) {
            let l = t.getPointPositionForValue(0, o);
            return new ci({
                x: l.x,
                y: l.y,
                radius: t.getDistanceFromCenterForValue(a)
            })
        }
        for (let l = 0; l < n; ++l) r.push(t.getPointPositionForValue(l, a));
        return r
    }

    function is(i, t, e) {
        let s = Cc(t),
            {
                line: n,
                scale: o,
                axis: a
            } = t,
            r = n.options,
            l = r.fill,
            c = r.backgroundColor,
            {
                above: h = c,
                below: d = c
            } = l || {};
        s && n.points.length && (ue(i, e), Rc(i, {
            line: n,
            target: s,
            above: h,
            below: d,
            area: e,
            scale: o,
            axis: a
        }), fe(i))
    }

    function Rc(i, t) {
        let {
            line: e,
            target: s,
            above: n,
            below: o,
            area: a,
            scale: r
        } = t, l = e._loop ? "angle" : t.axis;
        i.save(), l === "x" && o !== n && (ao(i, s, a.top), ro(i, {
            line: e,
            target: s,
            color: n,
            scale: r,
            property: l
        }), i.restore(), i.save(), ao(i, s, a.bottom)), ro(i, {
            line: e,
            target: s,
            color: o,
            scale: r,
            property: l
        }), i.restore()
    }

    function ao(i, t, e) {
        let {
            segments: s,
            points: n
        } = t, o = !0, a = !1;
        i.beginPath();
        for (let r of s) {
            let {
                start: l,
                end: c
            } = r, h = n[l], d = n[Ts(l, c, n)];
            o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), a = !!t.pathSegment(i, r, {
                move: a
            }), a ? i.closePath() : i.lineTo(d.x, e)
        }
        i.lineTo(t.first().x, e), i.closePath(), i.clip()
    }

    function ro(i, t) {
        let {
            line: e,
            target: s,
            property: n,
            color: o,
            scale: a
        } = t, r = mc(e, s, n);
        for (let {
                source: l,
                target: c,
                start: h,
                end: d
            } of r) {
            let {
                style: {
                    backgroundColor: u = o
                } = {}
            } = l, f = s !== !0;
            i.save(), i.fillStyle = u, Ec(i, a, f && ws(n, h, d)), i.beginPath();
            let g = !!e.pathSegment(i, l),
                p;
            if (f) {
                g ? i.closePath() : lo(i, s, d, n);
                let m = !!s.pathSegment(i, c, {
                    move: g,
                    reverse: !0
                });
                p = g && m, p || lo(i, s, h, n)
            }
            i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore()
        }
    }

    function Ec(i, t, e) {
        let {
            top: s,
            bottom: n
        } = t.chart.chartArea, {
            property: o,
            start: a,
            end: r
        } = e || {};
        o === "x" && (i.beginPath(), i.rect(a, s, r - a, n - s), i.clip())
    }

    function lo(i, t, e, s) {
        let n = t.interpolate(e, s);
        n && i.lineTo(n.x, n.y)
    }
    var Fc = {
            id: "filler",
            afterDatasetsUpdate(i, t, e) {
                let s = (i.data.datasets || []).length,
                    n = [],
                    o, a, r, l;
                for (a = 0; a < s; ++a) o = i.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof ee && (l = {
                    visible: i.isDatasetVisible(a),
                    index: a,
                    fill: _c(r, a, s),
                    chart: i,
                    axis: o.controller.options.indexAxis,
                    scale: o.vScale,
                    line: r
                }), o.$filler = l, n.push(l);
                for (a = 0; a < s; ++a) l = n[a], !(!l || l.fill === !1) && (l.fill = xc(n, a, e.propagate))
            },
            beforeDraw(i, t, e) {
                let s = e.drawTime === "beforeDraw",
                    n = i.getSortedVisibleDatasetMetas(),
                    o = i.chartArea;
                for (let a = n.length - 1; a >= 0; --a) {
                    let r = n[a].$filler;
                    r && (r.line.updateControlPoints(o, r.axis), s && r.fill && is(i.ctx, r, o))
                }
            },
            beforeDatasetsDraw(i, t, e) {
                if (e.drawTime !== "beforeDatasetsDraw") return;
                let s = i.getSortedVisibleDatasetMetas();
                for (let n = s.length - 1; n >= 0; --n) {
                    let o = s[n].$filler;
                    oo(o) && is(i.ctx, o, i.chartArea)
                }
            },
            beforeDatasetDraw(i, t, e) {
                let s = t.meta.$filler;
                !oo(s) || e.drawTime !== "beforeDatasetDraw" || is(i.ctx, s, i.chartArea)
            },
            defaults: {
                propagate: !0,
                drawTime: "beforeDatasetDraw"
            }
        },
        co = (i, t) => {
            let {
                boxHeight: e = t,
                boxWidth: s = t
            } = i;
            return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
                boxWidth: s,
                boxHeight: e,
                itemHeight: Math.max(t, e)
            }
        },
        Ic = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index,
        hi = class extends ot {
            constructor(t) {
                super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
            }
            update(t, e, s) {
                this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit()
            }
            setDimensions() {
                this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
            }
            buildLabels() {
                let t = this.options.labels || {},
                    e = E(t.generateLabels, [this.chart], this) || [];
                t.filter && (e = e.filter(s => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e
            }
            fit() {
                let {
                    options: t,
                    ctx: e
                } = this;
                if (!t.display) {
                    this.width = this.height = 0;
                    return
                }
                let s = t.labels,
                    n = j(s.font),
                    o = n.size,
                    a = this._computeTitleHeight(),
                    {
                        boxWidth: r,
                        itemHeight: l
                    } = co(s, o),
                    c, h;
                e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(a, o, r, l) + 10) : (h = this.maxHeight, c = this._fitCols(a, n, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight)
            }
            _fitRows(t, e, s, n) {
                let {
                    ctx: o,
                    maxWidth: a,
                    options: {
                        labels: {
                            padding: r
                        }
                    }
                } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [0], h = n + r, d = t;
                o.textAlign = "left", o.textBaseline = "middle";
                let u = -1,
                    f = -h;
                return this.legendItems.forEach((g, p) => {
                    let m = s + e / 2 + o.measureText(g.text).width;
                    (p === 0 || c[c.length - 1] + m + 2 * r > a) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
                        left: 0,
                        top: f,
                        row: u,
                        width: m,
                        height: n
                    }, c[c.length - 1] += m + r
                }), d
            }
            _fitCols(t, e, s, n) {
                let {
                    ctx: o,
                    maxHeight: a,
                    options: {
                        labels: {
                            padding: r
                        }
                    }
                } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = a - t, d = r, u = 0, f = 0, g = 0, p = 0;
                return this.legendItems.forEach((m, b) => {
                    let {
                        itemWidth: x,
                        itemHeight: v
                    } = zc(s, e, o, m, n);
                    b > 0 && f + v + 2 * r > h && (d += u + r, c.push({
                        width: u,
                        height: f
                    }), g += u + r, p++, u = f = 0), l[b] = {
                        left: g,
                        top: f,
                        col: p,
                        width: x,
                        height: v
                    }, u = Math.max(u, x), f += v + r
                }), d += u, c.push({
                    width: u,
                    height: f
                }), d
            }
            adjustHitBoxes() {
                if (!this.options.display) return;
                let t = this._computeTitleHeight(),
                    {
                        legendHitBoxes: e,
                        options: {
                            align: s,
                            labels: {
                                padding: n
                            },
                            rtl: o
                        }
                    } = this,
                    a = Ft(o, this.left, this.width);
                if (this.isHorizontal()) {
                    let r = 0,
                        l = U(s, this.left + n, this.right - this.lineWidths[r]);
                    for (let c of e) r !== c.row && (r = c.row, l = U(s, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + t + n, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + n
                } else {
                    let r = 0,
                        l = U(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
                    for (let c of e) c.col !== r && (r = c.col, l = U(s, this.top + t + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + n
                }
            }
            isHorizontal() {
                return this.options.position === "top" || this.options.position === "bottom"
            }
            draw() {
                if (this.options.display) {
                    let t = this.ctx;
                    ue(t, this), this._draw(), fe(t)
                }
            }
            _draw() {
                let {
                    options: t,
                    columnSizes: e,
                    lineWidths: s,
                    ctx: n
                } = this, {
                    align: o,
                    labels: a
                } = t, r = W.color, l = Ft(t.rtl, this.left, this.width), c = j(a.font), {
                    padding: h
                } = a, d = c.size, u = d / 2, f;
                this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = .5, n.font = c.string;
                let {
                    boxWidth: g,
                    boxHeight: p,
                    itemHeight: m
                } = co(a, d), b = function(M, k, w) {
                    if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
                    n.save();
                    let S = P(w.lineWidth, 1);
                    if (n.fillStyle = P(w.fillStyle, r), n.lineCap = P(w.lineCap, "butt"), n.lineDashOffset = P(w.lineDashOffset, 0), n.lineJoin = P(w.lineJoin, "miter"), n.lineWidth = S, n.strokeStyle = P(w.strokeStyle, r), n.setLineDash(P(w.lineDash, [])), a.usePointStyle) {
                        let D = {
                                radius: p * Math.SQRT2 / 2,
                                pointStyle: w.pointStyle,
                                rotation: w.rotation,
                                borderWidth: S
                            },
                            C = l.xPlus(M, g / 2),
                            A = k + u;
                        Ii(n, D, C, A, a.pointStyleWidth && g)
                    } else {
                        let D = k + Math.max((d - p) / 2, 0),
                            C = l.leftForLtr(M, g),
                            A = Pt(w.borderRadius);
                        n.beginPath(), Object.values(A).some(Y => Y !== 0) ? Gt(n, {
                            x: C,
                            y: D,
                            w: g,
                            h: p,
                            radius: A
                        }) : n.rect(C, D, g, p), n.fill(), S !== 0 && n.stroke()
                    }
                    n.restore()
                }, x = function(M, k, w) {
                    St(n, w.text, M, k + m / 2, c, {
                        strikethrough: w.hidden,
                        textAlign: l.textAlign(w.textAlign)
                    })
                }, v = this.isHorizontal(), y = this._computeTitleHeight();
                v ? f = {
                    x: U(o, this.left + h, this.right - s[0]),
                    y: this.top + h + y,
                    line: 0
                } : f = {
                    x: this.left + h,
                    y: U(o, this.top + y + h, this.bottom - e[0].height),
                    line: 0
                }, $i(this.ctx, t.textDirection);
                let _ = m + h;
                this.legendItems.forEach((M, k) => {
                    n.strokeStyle = M.fontColor, n.fillStyle = M.fontColor;
                    let w = n.measureText(M.text).width,
                        S = l.textAlign(M.textAlign || (M.textAlign = a.textAlign)),
                        D = g + u + w,
                        C = f.x,
                        A = f.y;
                    l.setWidth(this.width), v ? k > 0 && C + D + h > this.right && (A = f.y += _, f.line++, C = f.x = U(o, this.left + h, this.right - s[f.line])) : k > 0 && A + _ > this.bottom && (C = f.x = C + e[f.line].width + h, f.line++, A = f.y = U(o, this.top + y + h, this.bottom - e[f.line].height));
                    let Y = l.x(C);
                    if (b(Y, A, M), C = ln(S, C + g + u, v ? C + D : this.right, t.rtl), x(l.x(C), A, M), v) f.x += D + h;
                    else if (typeof M.text != "string") {
                        let tt = c.lineHeight;
                        f.y += jo(M, tt) + h
                    } else f.y += _
                }), Yi(this.ctx, t.textDirection)
            }
            drawTitle() {
                let t = this.options,
                    e = t.title,
                    s = j(e.font),
                    n = X(e.padding);
                if (!e.display) return;
                let o = Ft(t.rtl, this.left, this.width),
                    a = this.ctx,
                    r = e.position,
                    l = s.size / 2,
                    c = n.top + l,
                    h, d = this.left,
                    u = this.width;
                if (this.isHorizontal()) u = Math.max(...this.lineWidths), h = this.top + c, d = U(t.align, d, this.right - u);
                else {
                    let g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
                    h = c + U(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight())
                }
                let f = U(r, d, d + u);
                a.textAlign = o.textAlign(Ne(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = s.string, St(a, e.text, f, h, s)
            }
            _computeTitleHeight() {
                let t = this.options.title,
                    e = j(t.font),
                    s = X(t.padding);
                return t.display ? e.lineHeight + s.height : 0
            }
            _getLegendItemAt(t, e) {
                let s, n, o;
                if (ct(t, this.left, this.right) && ct(e, this.top, this.bottom)) {
                    for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
                        if (n = o[s], ct(t, n.left, n.left + n.width) && ct(e, n.top, n.top + n.height)) return this.legendItems[s]
                }
                return null
            }
            handleEvent(t) {
                let e = this.options;
                if (!Wc(t.type, e)) return;
                let s = this._getLegendItemAt(t.x, t.y);
                if (t.type === "mousemove" || t.type === "mouseout") {
                    let n = this._hoveredItem,
                        o = Ic(n, s);
                    n && !o && E(e.onLeave, [t, n, this], this), this._hoveredItem = s, s && !o && E(e.onHover, [t, s, this], this)
                } else s && E(e.onClick, [t, s, this], this)
            }
        };

    function zc(i, t, e, s, n) {
        let o = Bc(s, i, t, e),
            a = Vc(n, s, t.lineHeight);
        return {
            itemWidth: o,
            itemHeight: a
        }
    }

    function Bc(i, t, e, s) {
        let n = i.text;
        return n && typeof n != "string" && (n = n.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + s.measureText(n).width
    }

    function Vc(i, t, e) {
        let s = i;
        return typeof t.text != "string" && (s = jo(t, e)), s
    }

    function jo(i, t) {
        let e = i.text ? i.text.length : 0;
        return t * e
    }

    function Wc(i, t) {
        return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"))
    }
    var Nc = {
            id: "legend",
            _element: hi,
            start(i, t, e) {
                let s = i.legend = new hi({
                    ctx: i.ctx,
                    options: e,
                    chart: i
                });
                q.configure(i, s, e), q.addBox(i, s)
            },
            stop(i) {
                q.removeBox(i, i.legend), delete i.legend
            },
            beforeUpdate(i, t, e) {
                let s = i.legend;
                q.configure(i, s, e), s.options = e
            },
            afterUpdate(i) {
                let t = i.legend;
                t.buildLabels(), t.adjustHitBoxes()
            },
            afterEvent(i, t) {
                t.replay || i.legend.handleEvent(t.event)
            },
            defaults: {
                display: !0,
                position: "top",
                align: "center",
                fullSize: !0,
                reverse: !1,
                weight: 1e3,
                onClick(i, t, e) {
                    let s = t.datasetIndex,
                        n = e.chart;
                    n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1)
                },
                onHover: null,
                onLeave: null,
                labels: {
                    color: i => i.chart.options.color,
                    boxWidth: 40,
                    padding: 10,
                    generateLabels(i) {
                        let t = i.data.datasets,
                            {
                                labels: {
                                    usePointStyle: e,
                                    pointStyle: s,
                                    textAlign: n,
                                    color: o,
                                    useBorderRadius: a,
                                    borderRadius: r
                                }
                            } = i.legend.options;
                        return i._getSortedDatasetMetas().map(l => {
                            let c = l.controller.getStyle(e ? 0 : void 0),
                                h = X(c.borderWidth);
                            return {
                                text: t[l.index].label,
                                fillStyle: c.backgroundColor,
                                fontColor: o,
                                hidden: !l.visible,
                                lineCap: c.borderCapStyle,
                                lineDash: c.borderDash,
                                lineDashOffset: c.borderDashOffset,
                                lineJoin: c.borderJoinStyle,
                                lineWidth: (h.width + h.height) / 4,
                                strokeStyle: c.borderColor,
                                pointStyle: s || c.pointStyle,
                                rotation: c.rotation,
                                textAlign: n || c.textAlign,
                                borderRadius: a && (r || c.borderRadius),
                                datasetIndex: l.index
                            }
                        }, this)
                    }
                },
                title: {
                    color: i => i.chart.options.color,
                    display: !1,
                    position: "center",
                    text: ""
                }
            },
            descriptors: {
                _scriptable: i => !i.startsWith("on"),
                labels: {
                    _scriptable: i => !["generateLabels", "filter", "sort"].includes(i)
                }
            }
        },
        ke = class extends ot {
            constructor(t) {
                super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
            }
            update(t, e) {
                let s = this.options;
                if (this.left = 0, this.top = 0, !s.display) {
                    this.width = this.height = this.right = this.bottom = 0;
                    return
                }
                this.width = this.right = t, this.height = this.bottom = e;
                let n = F(s.text) ? s.text.length : 1;
                this._padding = X(s.padding);
                let o = n * j(s.font).lineHeight + this._padding.height;
                this.isHorizontal() ? this.height = o : this.width = o
            }
            isHorizontal() {
                let t = this.options.position;
                return t === "top" || t === "bottom"
            }
            _drawArgs(t) {
                let {
                    top: e,
                    left: s,
                    bottom: n,
                    right: o,
                    options: a
                } = this, r = a.align, l = 0, c, h, d;
                return this.isHorizontal() ? (h = U(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h = s + t, d = U(r, n, e), l = I * -.5) : (h = o - t, d = U(r, e, n), l = I * .5), c = n - e), {
                    titleX: h,
                    titleY: d,
                    maxWidth: c,
                    rotation: l
                }
            }
            draw() {
                let t = this.ctx,
                    e = this.options;
                if (!e.display) return;
                let s = j(e.font),
                    o = s.lineHeight / 2 + this._padding.top,
                    {
                        titleX: a,
                        titleY: r,
                        maxWidth: l,
                        rotation: c
                    } = this._drawArgs(o);
                St(t, e.text, 0, 0, s, {
                    color: e.color,
                    maxWidth: l,
                    rotation: c,
                    textAlign: Ne(e.align),
                    textBaseline: "middle",
                    translation: [a, r]
                })
            }
        };

    function Hc(i, t) {
        let e = new ke({
            ctx: i.ctx,
            options: t,
            chart: i
        });
        q.configure(i, e, t), q.addBox(i, e), i.titleBlock = e
    }
    var jc = {
            id: "title",
            _element: ke,
            start(i, t, e) {
                Hc(i, e)
            },
            stop(i) {
                let t = i.titleBlock;
                q.removeBox(i, t), delete i.titleBlock
            },
            beforeUpdate(i, t, e) {
                let s = i.titleBlock;
                q.configure(i, s, e), s.options = e
            },
            defaults: {
                align: "center",
                display: !1,
                font: {
                    weight: "bold"
                },
                fullSize: !0,
                padding: 10,
                position: "top",
                text: "",
                weight: 2e3
            },
            defaultRoutes: {
                color: "color"
            },
            descriptors: {
                _scriptable: !0,
                _indexable: !1
            }
        },
        Qe = new WeakMap,
        $c = {
            id: "subtitle",
            start(i, t, e) {
                let s = new ke({
                    ctx: i.ctx,
                    options: e,
                    chart: i
                });
                q.configure(i, s, e), q.addBox(i, s), Qe.set(i, s)
            },
            stop(i) {
                q.removeBox(i, Qe.get(i)), Qe.delete(i)
            },
            beforeUpdate(i, t, e) {
                let s = Qe.get(i);
                q.configure(i, s, e), s.options = e
            },
            defaults: {
                align: "center",
                display: !1,
                font: {
                    weight: "normal"
                },
                fullSize: !0,
                padding: 0,
                position: "top",
                text: "",
                weight: 1500
            },
            defaultRoutes: {
                color: "color"
            },
            descriptors: {
                _scriptable: !0,
                _indexable: !1
            }
        },
        ye = {
            average(i) {
                if (!i.length) return !1;
                let t, e, s = new Set,
                    n = 0,
                    o = 0;
                for (t = 0, e = i.length; t < e; ++t) {
                    let r = i[t].element;
                    if (r && r.hasValue()) {
                        let l = r.tooltipPosition();
                        s.add(l.x), n += l.y, ++o
                    }
                }
                return {
                    x: [...s].reduce((r, l) => r + l) / s.size,
                    y: n / o
                }
            },
            nearest(i, t) {
                if (!i.length) return !1;
                let e = t.x,
                    s = t.y,
                    n = Number.POSITIVE_INFINITY,
                    o, a, r;
                for (o = 0, a = i.length; o < a; ++o) {
                    let l = i[o].element;
                    if (l && l.hasValue()) {
                        let c = l.getCenterPoint(),
                            h = Ie(t, c);
                        h < n && (n = h, r = l)
                    }
                }
                if (r) {
                    let l = r.tooltipPosition();
                    e = l.x, s = l.y
                }
                return {
                    x: e,
                    y: s
                }
            }
        };

    function ht(i, t) {
        return t && (F(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i
    }

    function _t(i) {
        return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i
    }

    function Yc(i, t) {
        let {
            element: e,
            datasetIndex: s,
            index: n
        } = t, o = i.getDatasetMeta(s).controller, {
            label: a,
            value: r
        } = o.getLabelAndValue(n);
        return {
            chart: i,
            label: a,
            parsed: o.getParsed(n),
            raw: i.data.datasets[s].data[n],
            formattedValue: r,
            dataset: o.getDataset(),
            dataIndex: n,
            datasetIndex: s,
            element: e
        }
    }

    function ho(i, t) {
        let e = i.chart.ctx,
            {
                body: s,
                footer: n,
                title: o
            } = i,
            {
                boxWidth: a,
                boxHeight: r
            } = t,
            l = j(t.bodyFont),
            c = j(t.titleFont),
            h = j(t.footerFont),
            d = o.length,
            u = n.length,
            f = s.length,
            g = X(t.padding),
            p = g.height,
            m = 0,
            b = s.reduce((y, _) => y + _.before.length + _.lines.length + _.after.length, 0);
        if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
            let y = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
            p += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing
        }
        u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
        let x = 0,
            v = function(y) {
                m = Math.max(m, e.measureText(y).width + x)
            };
        return e.save(), e.font = c.string, L(i.title, v), e.font = l.string, L(i.beforeBody.concat(i.afterBody), v), x = t.displayColors ? a + 2 + t.boxPadding : 0, L(s, y => {
            L(y.before, v), L(y.lines, v), L(y.after, v)
        }), x = 0, e.font = h.string, L(i.footer, v), e.restore(), m += g.width, {
            width: m,
            height: p
        }
    }

    function Uc(i, t) {
        let {
            y: e,
            height: s
        } = t;
        return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center"
    }

    function Xc(i, t, e, s) {
        let {
            x: n,
            width: o
        } = s, a = e.caretSize + e.caretPadding;
        if (i === "left" && n + o + a > t.width || i === "right" && n - o - a < 0) return !0
    }

    function Kc(i, t, e, s) {
        let {
            x: n,
            width: o
        } = e, {
            width: a,
            chartArea: {
                left: r,
                right: l
            }
        } = i, c = "center";
        return s === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= a - o / 2 && (c = "right"), Xc(c, i, t, e) && (c = "center"), c
    }

    function uo(i, t, e) {
        let s = e.yAlign || t.yAlign || Uc(i, e);
        return {
            xAlign: e.xAlign || t.xAlign || Kc(i, t, e, s),
            yAlign: s
        }
    }

    function qc(i, t) {
        let {
            x: e,
            width: s
        } = i;
        return t === "right" ? e -= s : t === "center" && (e -= s / 2), e
    }

    function Gc(i, t, e) {
        let {
            y: s,
            height: n
        } = i;
        return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s
    }

    function fo(i, t, e, s) {
        let {
            caretSize: n,
            caretPadding: o,
            cornerRadius: a
        } = i, {
            xAlign: r,
            yAlign: l
        } = e, c = n + o, {
            topLeft: h,
            topRight: d,
            bottomLeft: u,
            bottomRight: f
        } = Pt(a), g = qc(t, r), p = Gc(t, l, c);
        return l === "center" ? r === "left" ? g += c : r === "right" && (g -= c) : r === "left" ? g -= Math.max(h, u) + n : r === "right" && (g += Math.max(d, f) + n), {
            x: $(g, 0, s.width - t.width),
            y: $(p, 0, s.height - t.height)
        }
    }

    function ti(i, t, e) {
        let s = X(e.padding);
        return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left
    }

    function go(i) {
        return ht([], _t(i))
    }

    function Zc(i, t, e) {
        return bt(i, {
            tooltip: t,
            tooltipItems: e,
            type: "tooltip"
        })
    }

    function po(i, t) {
        let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
        return e ? i.override(e) : i
    }
    var $o = {
        beforeTitle: lt,
        title(i) {
            if (i.length > 0) {
                let t = i[0],
                    e = t.chart.data.labels,
                    s = e ? e.length : 0;
                if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
                if (t.label) return t.label;
                if (s > 0 && t.dataIndex < s) return e[t.dataIndex]
            }
            return ""
        },
        afterTitle: lt,
        beforeBody: lt,
        beforeLabel: lt,
        label(i) {
            if (this && this.options && this.options.mode === "dataset") return i.label + ": " + i.formattedValue || i.formattedValue;
            let t = i.dataset.label || "";
            t && (t += ": ");
            let e = i.formattedValue;
            return T(e) || (t += e), t
        },
        labelColor(i) {
            let e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
            return {
                borderColor: e.borderColor,
                backgroundColor: e.backgroundColor,
                borderWidth: e.borderWidth,
                borderDash: e.borderDash,
                borderDashOffset: e.borderDashOffset,
                borderRadius: 0
            }
        },
        labelTextColor() {
            return this.options.bodyColor
        },
        labelPointStyle(i) {
            let e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
            return {
                pointStyle: e.pointStyle,
                rotation: e.rotation
            }
        },
        afterLabel: lt,
        afterBody: lt,
        beforeFooter: lt,
        footer: lt,
        afterFooter: lt
    };

    function J(i, t, e, s) {
        let n = i[t].call(e, s);
        return typeof n > "u" ? $o[t].call(e, s) : n
    }
    var di = class extends ot {
            static positioners = ye;
            constructor(t) {
                super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
            }
            initialize(t) {
                this.options = t, this._cachedAnimations = void 0, this.$context = void 0
            }
            _resolveAnimations() {
                let t = this._cachedAnimations;
                if (t) return t;
                let e = this.chart,
                    s = this.options.setContext(this.getContext()),
                    n = s.enabled && e.options.animation && s.animations,
                    o = new ni(this.chart, n);
                return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o
            }
            getContext() {
                return this.$context || (this.$context = Zc(this.chart.getContext(), this, this._tooltipItems))
            }
            getTitle(t, e) {
                let {
                    callbacks: s
                } = e, n = J(s, "beforeTitle", this, t), o = J(s, "title", this, t), a = J(s, "afterTitle", this, t), r = [];
                return r = ht(r, _t(n)), r = ht(r, _t(o)), r = ht(r, _t(a)), r
            }
            getBeforeBody(t, e) {
                return go(J(e.callbacks, "beforeBody", this, t))
            }
            getBody(t, e) {
                let {
                    callbacks: s
                } = e, n = [];
                return L(t, o => {
                    let a = {
                            before: [],
                            lines: [],
                            after: []
                        },
                        r = po(s, o);
                    ht(a.before, _t(J(r, "beforeLabel", this, o))), ht(a.lines, J(r, "label", this, o)), ht(a.after, _t(J(r, "afterLabel", this, o))), n.push(a)
                }), n
            }
            getAfterBody(t, e) {
                return go(J(e.callbacks, "afterBody", this, t))
            }
            getFooter(t, e) {
                let {
                    callbacks: s
                } = e, n = J(s, "beforeFooter", this, t), o = J(s, "footer", this, t), a = J(s, "afterFooter", this, t), r = [];
                return r = ht(r, _t(n)), r = ht(r, _t(o)), r = ht(r, _t(a)), r
            }
            _createItems(t) {
                let e = this._active,
                    s = this.chart.data,
                    n = [],
                    o = [],
                    a = [],
                    r = [],
                    l, c;
                for (l = 0, c = e.length; l < c; ++l) r.push(Yc(this.chart, e[l]));
                return t.filter && (r = r.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (r = r.sort((h, d) => t.itemSort(h, d, s))), L(r, h => {
                    let d = po(t.callbacks, h);
                    n.push(J(d, "labelColor", this, h)), o.push(J(d, "labelPointStyle", this, h)), a.push(J(d, "labelTextColor", this, h))
                }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r
            }
            update(t, e) {
                let s = this.options.setContext(this.getContext()),
                    n = this._active,
                    o, a = [];
                if (!n.length) this.opacity !== 0 && (o = {
                    opacity: 0
                });
                else {
                    let r = ye[s.position].call(this, n, this._eventPosition);
                    a = this._createItems(s), this.title = this.getTitle(a, s), this.beforeBody = this.getBeforeBody(a, s), this.body = this.getBody(a, s), this.afterBody = this.getAfterBody(a, s), this.footer = this.getFooter(a, s);
                    let l = this._size = ho(this, s),
                        c = Object.assign({}, r, l),
                        h = uo(this.chart, s, c),
                        d = fo(s, c, h, this.chart);
                    this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
                        opacity: 1,
                        x: d.x,
                        y: d.y,
                        width: l.width,
                        height: l.height,
                        caretX: r.x,
                        caretY: r.y
                    }
                }
                this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
                    chart: this.chart,
                    tooltip: this,
                    replay: e
                })
            }
            drawCaret(t, e, s, n) {
                let o = this.getCaretPosition(t, s, n);
                e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3)
            }
            getCaretPosition(t, e, s) {
                let {
                    xAlign: n,
                    yAlign: o
                } = this, {
                    caretSize: a,
                    cornerRadius: r
                } = s, {
                    topLeft: l,
                    topRight: c,
                    bottomLeft: h,
                    bottomRight: d
                } = Pt(r), {
                    x: u,
                    y: f
                } = t, {
                    width: g,
                    height: p
                } = e, m, b, x, v, y, _;
                return o === "center" ? (y = f + p / 2, n === "left" ? (m = u, b = m - a, v = y + a, _ = y - a) : (m = u + g, b = m + a, v = y - a, _ = y + a), x = m) : (n === "left" ? b = u + Math.max(l, h) + a : n === "right" ? b = u + g - Math.max(c, d) - a : b = this.caretX, o === "top" ? (v = f, y = v - a, m = b - a, x = b + a) : (v = f + p, y = v + a, m = b + a, x = b - a), _ = v), {
                    x1: m,
                    x2: b,
                    x3: x,
                    y1: v,
                    y2: y,
                    y3: _
                }
            }
            drawTitle(t, e, s) {
                let n = this.title,
                    o = n.length,
                    a, r, l;
                if (o) {
                    let c = Ft(s.rtl, this.x, this.width);
                    for (t.x = ti(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", a = j(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a.string, l = 0; l < o; ++l) e.fillText(n[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += s.titleMarginBottom - r)
                }
            }
            _drawColorBox(t, e, s, n, o) {
                let a = this.labelColors[s],
                    r = this.labelPointStyles[s],
                    {
                        boxHeight: l,
                        boxWidth: c
                    } = o,
                    h = j(o.bodyFont),
                    d = ti(this, "left", o),
                    u = n.x(d),
                    f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
                    g = e.y + f;
                if (o.usePointStyle) {
                    let p = {
                            radius: Math.min(c, l) / 2,
                            pointStyle: r.pointStyle,
                            rotation: r.rotation,
                            borderWidth: 1
                        },
                        m = n.leftForLtr(u, c) + c / 2,
                        b = g + l / 2;
                    t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, je(t, p, m, b), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, je(t, p, m, b)
                } else {
                    t.lineWidth = O(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
                    let p = n.leftForLtr(u, c),
                        m = n.leftForLtr(n.xPlus(u, 1), c - 2),
                        b = Pt(a.borderRadius);
                    Object.values(b).some(x => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Gt(t, {
                        x: p,
                        y: g,
                        w: c,
                        h: l,
                        radius: b
                    }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), Gt(t, {
                        x: m,
                        y: g + 1,
                        w: c - 2,
                        h: l - 2,
                        radius: b
                    }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = a.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2))
                }
                t.fillStyle = this.labelTextColors[s]
            }
            drawBody(t, e, s) {
                let {
                    body: n
                } = this, {
                    bodySpacing: o,
                    bodyAlign: a,
                    displayColors: r,
                    boxHeight: l,
                    boxWidth: c,
                    boxPadding: h
                } = s, d = j(s.bodyFont), u = d.lineHeight, f = 0, g = Ft(s.rtl, this.x, this.width), p = function(w) {
                    e.fillText(w, g.x(t.x + f), t.y + u / 2), t.y += u + o
                }, m = g.textAlign(a), b, x, v, y, _, M, k;
                for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = ti(this, m, s), e.fillStyle = s.bodyColor, L(this.beforeBody, p), f = r && m !== "right" ? a === "center" ? c / 2 + h : c + 2 + h : 0, y = 0, M = n.length; y < M; ++y) {
                    for (b = n[y], x = this.labelTextColors[y], e.fillStyle = x, L(b.before, p), v = b.lines, r && v.length && (this._drawColorBox(e, t, y, g, s), u = Math.max(d.lineHeight, l)), _ = 0, k = v.length; _ < k; ++_) p(v[_]), u = d.lineHeight;
                    L(b.after, p)
                }
                f = 0, u = d.lineHeight, L(this.afterBody, p), t.y -= o
            }
            drawFooter(t, e, s) {
                let n = this.footer,
                    o = n.length,
                    a, r;
                if (o) {
                    let l = Ft(s.rtl, this.x, this.width);
                    for (t.x = ti(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", a = j(s.footerFont), e.fillStyle = s.footerColor, e.font = a.string, r = 0; r < o; ++r) e.fillText(n[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + s.footerSpacing
                }
            }
            drawBackground(t, e, s, n) {
                let {
                    xAlign: o,
                    yAlign: a
                } = this, {
                    x: r,
                    y: l
                } = t, {
                    width: c,
                    height: h
                } = s, {
                    topLeft: d,
                    topRight: u,
                    bottomLeft: f,
                    bottomRight: g
                } = Pt(n.cornerRadius);
                e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(r + d, l), a === "top" && this.drawCaret(t, e, s, n), e.lineTo(r + c - u, l), e.quadraticCurveTo(r + c, l, r + c, l + u), a === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(r + c, l + h - g), e.quadraticCurveTo(r + c, l + h, r + c - g, l + h), a === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(r + f, l + h), e.quadraticCurveTo(r, l + h, r, l + h - f), a === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(r, l + d), e.quadraticCurveTo(r, l, r + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke()
            }
            _updateAnimationTarget(t) {
                let e = this.chart,
                    s = this.$animations,
                    n = s && s.x,
                    o = s && s.y;
                if (n || o) {
                    let a = ye[t.position].call(this, this._active, this._eventPosition);
                    if (!a) return;
                    let r = this._size = ho(this, t),
                        l = Object.assign({}, a, this._size),
                        c = uo(e, t, l),
                        h = fo(t, l, c, e);
                    (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h))
                }
            }
            _willRender() {
                return !!this.opacity
            }
            draw(t) {
                let e = this.options.setContext(this.getContext()),
                    s = this.opacity;
                if (!s) return;
                this._updateAnimationTarget(e);
                let n = {
                        width: this.width,
                        height: this.height
                    },
                    o = {
                        x: this.x,
                        y: this.y
                    };
                s = Math.abs(s) < .001 ? 0 : s;
                let a = X(e.padding),
                    r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), $i(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Yi(t, e.textDirection), t.restore())
            }
            getActiveElements() {
                return this._active || []
            }
            setActiveElements(t, e) {
                let s = this._active,
                    n = t.map(({
                        datasetIndex: r,
                        index: l
                    }) => {
                        let c = this.chart.getDatasetMeta(r);
                        if (!c) throw new Error("Cannot find a dataset at index " + r);
                        return {
                            datasetIndex: r,
                            element: c.data[l],
                            index: l
                        }
                    }),
                    o = !he(s, n),
                    a = this._positionChanged(n, e);
                (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
            }
            handleEvent(t, e, s = !0) {
                if (e && this._ignoreReplayEvents) return !1;
                this._ignoreReplayEvents = !1;
                let n = this.options,
                    o = this._active || [],
                    a = this._getActiveElements(t, o, e, s),
                    r = this._positionChanged(a, t),
                    l = e || !he(a, o) || r;
                return l && (this._active = a, (n.enabled || n.external) && (this._eventPosition = {
                    x: t.x,
                    y: t.y
                }, this.update(!0, e))), l
            }
            _getActiveElements(t, e, s, n) {
                let o = this.options;
                if (t.type === "mouseout") return [];
                if (!n) return e.filter(r => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
                let a = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
                return o.reverse && a.reverse(), a
            }
            _positionChanged(t, e) {
                let {
                    caretX: s,
                    caretY: n,
                    options: o
                } = this, a = ye[o.position].call(this, t, e);
                return a !== !1 && (s !== a.x || n !== a.y)
            }
        },
        Jc = {
            id: "tooltip",
            _element: di,
            positioners: ye,
            afterInit(i, t, e) {
                e && (i.tooltip = new di({
                    chart: i,
                    options: e
                }))
            },
            beforeUpdate(i, t, e) {
                i.tooltip && i.tooltip.initialize(e)
            },
            reset(i, t, e) {
                i.tooltip && i.tooltip.initialize(e)
            },
            afterDraw(i) {
                let t = i.tooltip;
                if (t && t._willRender()) {
                    let e = {
                        tooltip: t
                    };
                    if (i.notifyPlugins("beforeTooltipDraw", { ...e,
                            cancelable: !0
                        }) === !1) return;
                    t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e)
                }
            },
            afterEvent(i, t) {
                if (i.tooltip) {
                    let e = t.replay;
                    i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0)
                }
            },
            defaults: {
                enabled: !0,
                external: null,
                position: "average",
                backgroundColor: "rgba(0,0,0,0.8)",
                titleColor: "#fff",
                titleFont: {
                    weight: "bold"
                },
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleAlign: "left",
                bodyColor: "#fff",
                bodySpacing: 2,
                bodyFont: {},
                bodyAlign: "left",
                footerColor: "#fff",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFont: {
                    weight: "bold"
                },
                footerAlign: "left",
                padding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                boxHeight: (i, t) => t.bodyFont.size,
                boxWidth: (i, t) => t.bodyFont.size,
                multiKeyBackground: "#fff",
                displayColors: !0,
                boxPadding: 0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                animation: {
                    duration: 400,
                    easing: "easeOutQuart"
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "width", "height", "caretX", "caretY"]
                    },
                    opacity: {
                        easing: "linear",
                        duration: 200
                    }
                },
                callbacks: $o
            },
            defaultRoutes: {
                bodyFont: "font",
                footerFont: "font",
                titleFont: "font"
            },
            descriptors: {
                _scriptable: i => i !== "filter" && i !== "itemSort" && i !== "external",
                _indexable: !1,
                callbacks: {
                    _scriptable: !1,
                    _indexable: !1
                },
                animation: {
                    _fallback: !1
                },
                animations: {
                    _fallback: "animation"
                }
            },
            additionalOptionScopes: ["interaction"]
        },
        Qc = Object.freeze({
            __proto__: null,
            Colors: dc,
            Decimation: pc,
            Filler: Fc,
            Legend: Nc,
            SubTitle: $c,
            Title: jc,
            Tooltip: Jc
        }),
        th = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
            index: e,
            label: t
        })) : isNaN(t) && (e = null), e);

    function eh(i, t, e, s) {
        let n = i.indexOf(t);
        if (n === -1) return th(i, t, e, s);
        let o = i.lastIndexOf(t);
        return n !== o ? e : n
    }
    var ih = (i, t) => i === null ? null : $(Math.round(i), 0, t);

    function mo(i) {
        let t = this.getLabels();
        return i >= 0 && i < t.length ? t[i] : i
    }
    var Ss = class extends Bt {
        static id = "category";
        static defaults = {
            ticks: {
                callback: mo
            }
        };
        constructor(t) {
            super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []
        }
        init(t) {
            let e = this._addedLabels;
            if (e.length) {
                let s = this.getLabels();
                for (let {
                        index: n,
                        label: o
                    } of e) s[n] === o && s.splice(n, 1);
                this._addedLabels = []
            }
            super.init(t)
        }
        parse(t, e) {
            if (T(t)) return null;
            let s = this.getLabels();
            return e = isFinite(e) && s[e] === t ? e : eh(s, t, P(e, t), this._addedLabels), ih(e, s.length - 1)
        }
        determineDataLimits() {
            let {
                minDefined: t,
                maxDefined: e
            } = this.getUserBounds(), {
                min: s,
                max: n
            } = this.getMinMax(!0);
            this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n
        }
        buildTicks() {
            let t = this.min,
                e = this.max,
                s = this.options.offset,
                n = [],
                o = this.getLabels();
            o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? .5 : 0);
            for (let a = t; a <= e; a++) n.push({
                value: a
            });
            return n
        }
        getLabelForValue(t) {
            return mo.call(this, t)
        }
        configure() {
            super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
        }
        getPixelForValue(t) {
            return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }
        getPixelForTick(t) {
            let e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getValueForPixel(t) {
            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
        }
        getBasePixel() {
            return this.bottom
        }
    };

    function sh(i, t) {
        let e = [],
            {
                bounds: n,
                step: o,
                min: a,
                max: r,
                precision: l,
                count: c,
                maxTicks: h,
                maxDigits: d,
                includeBounds: u
            } = i,
            f = o || 1,
            g = h - 1,
            {
                min: p,
                max: m
            } = t,
            b = !T(a),
            x = !T(r),
            v = !T(c),
            y = (m - p) / (d + 1),
            _ = ki((m - p) / g / f) * f,
            M, k, w, S;
        if (_ < 1e-14 && !b && !x) return [{
            value: p
        }, {
            value: m
        }];
        S = Math.ceil(m / _) - Math.floor(p / _), S > g && (_ = ki(S * _ / g / f) * f), T(l) || (M = Math.pow(10, l), _ = Math.ceil(_ * M) / M), n === "ticks" ? (k = Math.floor(p / _) * _, w = Math.ceil(m / _) * _) : (k = p, w = m), b && x && o && tn((r - a) / o, _ / 1e3) ? (S = Math.round(Math.min((r - a) / _, h)), _ = (r - a) / S, k = a, w = r) : v ? (k = b ? a : k, w = x ? r : w, S = c - 1, _ = (w - k) / S) : (S = (w - k) / _, Xt(S, Math.round(S), _ / 1e3) ? S = Math.round(S) : S = Math.ceil(S));
        let D = Math.max(Si(_), Si(k));
        M = Math.pow(10, T(l) ? D : l), k = Math.round(k * M) / M, w = Math.round(w * M) / M;
        let C = 0;
        for (b && (u && k !== a ? (e.push({
                value: a
            }), k < a && C++, Xt(Math.round((k + C * _) * M) / M, a, bo(a, y, i)) && C++) : k < a && C++); C < S; ++C) {
            let A = Math.round((k + C * _) * M) / M;
            if (x && A > r) break;
            e.push({
                value: A
            })
        }
        return x && u && w !== r ? e.length && Xt(e[e.length - 1].value, r, bo(r, y, i)) ? e[e.length - 1].value = r : e.push({
            value: r
        }) : (!x || w === r) && e.push({
            value: w
        }), e
    }

    function bo(i, t, {
        horizontal: e,
        minRotation: s
    }) {
        let n = it(s),
            o = (e ? Math.sin(n) : Math.cos(n)) || .001,
            a = .75 * t * ("" + i).length;
        return Math.min(t / o, a)
    }
    var ie = class extends Bt {
            constructor(t) {
                super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
            }
            parse(t, e) {
                return T(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t
            }
            handleTickRangeOptions() {
                let {
                    beginAtZero: t
                } = this.options, {
                    minDefined: e,
                    maxDefined: s
                } = this.getUserBounds(), {
                    min: n,
                    max: o
                } = this, a = l => n = e ? n : l, r = l => o = s ? o : l;
                if (t) {
                    let l = nt(n),
                        c = nt(o);
                    l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0)
                }
                if (n === o) {
                    let l = o === 0 ? 1 : Math.abs(o * .05);
                    r(o + l), t || a(n - l)
                }
                this.min = n, this.max = o
            }
            getTickLimit() {
                let t = this.options.ticks,
                    {
                        maxTicksLimit: e,
                        stepSize: s
                    } = t,
                    n;
                return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n
            }
            computeTickLimit() {
                return Number.POSITIVE_INFINITY
            }
            buildTicks() {
                let t = this.options,
                    e = t.ticks,
                    s = this.getTickLimit();
                s = Math.max(2, s);
                let n = {
                        maxTicks: s,
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: e.includeBounds !== !1
                    },
                    o = this._range || this,
                    a = sh(n, o);
                return t.bounds === "ticks" && wi(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a
            }
            configure() {
                let t = this.ticks,
                    e = this.min,
                    s = this.max;
                if (super.configure(), this.options.offset && t.length) {
                    let n = (s - e) / Math.max(t.length - 1, 1) / 2;
                    e -= n, s += n
                }
                this._startValue = e, this._endValue = s, this._valueRange = s - e
            }
            getLabelForValue(t) {
                return qt(t, this.chart.options.locale, this.options.ticks.format)
            }
        },
        Ps = class extends ie {
            static id = "linear";
            static defaults = {
                ticks: {
                    callback: de.formatters.numeric
                }
            };
            determineDataLimits() {
                let {
                    min: t,
                    max: e
                } = this.getMinMax(!0);
                this.min = V(t) ? t : 0, this.max = V(e) ? e : 1, this.handleTickRangeOptions()
            }
            computeTickLimit() {
                let t = this.isHorizontal(),
                    e = t ? this.width : this.height,
                    s = it(this.options.ticks.minRotation),
                    n = (t ? Math.sin(s) : Math.cos(s)) || .001,
                    o = this._resolveTickFontOptions(0);
                return Math.ceil(e / Math.min(40, o.lineHeight / n))
            }
            getPixelForValue(t) {
                return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }
            getValueForPixel(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange
            }
        },
        we = i => Math.floor(pt(i)),
        zt = (i, t) => Math.pow(10, we(i) + t);

    function xo(i) {
        return i / Math.pow(10, we(i)) === 1
    }

    function _o(i, t, e) {
        let s = Math.pow(10, e),
            n = Math.floor(i / s);
        return Math.ceil(t / s) - n
    }

    function nh(i, t) {
        let e = t - i,
            s = we(e);
        for (; _o(i, t, s) > 10;) s++;
        for (; _o(i, t, s) < 10;) s--;
        return Math.min(s, we(i))
    }

    function oh(i, {
        min: t,
        max: e
    }) {
        t = Z(i.min, t);
        let s = [],
            n = we(t),
            o = nh(t, e),
            a = o < 0 ? Math.pow(10, Math.abs(o)) : 1,
            r = Math.pow(10, o),
            l = n > o ? Math.pow(10, n) : 0,
            c = Math.round((t - l) * a) / a,
            h = Math.floor((t - l) / r / 10) * r * 10,
            d = Math.floor((c - h) / Math.pow(10, o)),
            u = Z(i.min, Math.round((l + h + d * Math.pow(10, o)) * a) / a);
        for (; u < e;) s.push({
            value: u,
            major: xo(u),
            significand: d
        }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, a = o >= 0 ? 1 : a), u = Math.round((l + h + d * Math.pow(10, o)) * a) / a;
        let f = Z(i.max, u);
        return s.push({
            value: f,
            major: xo(f),
            significand: d
        }), s
    }
    var Ds = class extends Bt {
        static id = "logarithmic";
        static defaults = {
            ticks: {
                callback: de.formatters.logarithmic,
                major: {
                    enabled: !0
                }
            }
        };
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
        }
        parse(t, e) {
            let s = ie.prototype.parse.apply(this, [t, e]);
            if (s === 0) {
                this._zero = !0;
                return
            }
            return V(s) && s > 0 ? s : null
        }
        determineDataLimits() {
            let {
                min: t,
                max: e
            } = this.getMinMax(!0);
            this.min = V(t) ? Math.max(0, t) : null, this.max = V(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !V(this._userMin) && (this.min = t === zt(this.min, 0) ? zt(this.min, -1) : zt(this.min, 0)), this.handleTickRangeOptions()
        }
        handleTickRangeOptions() {
            let {
                minDefined: t,
                maxDefined: e
            } = this.getUserBounds(), s = this.min, n = this.max, o = r => s = t ? s : r, a = r => n = e ? n : r;
            s === n && (s <= 0 ? (o(1), a(10)) : (o(zt(s, -1)), a(zt(n, 1)))), s <= 0 && o(zt(n, -1)), n <= 0 && a(zt(s, 1)), this.min = s, this.max = n
        }
        buildTicks() {
            let t = this.options,
                e = {
                    min: this._userMin,
                    max: this._userMax
                },
                s = oh(e, this);
            return t.bounds === "ticks" && wi(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
        }
        getLabelForValue(t) {
            return t === void 0 ? "0" : qt(t, this.chart.options.locale, this.options.ticks.format)
        }
        configure() {
            let t = this.min;
            super.configure(), this._startValue = pt(t), this._valueRange = pt(this.max) - pt(t)
        }
        getPixelForValue(t) {
            return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (pt(t) - this._startValue) / this._valueRange)
        }
        getValueForPixel(t) {
            let e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange)
        }
    };

    function Cs(i) {
        let t = i.ticks;
        if (t.display && i.display) {
            let e = X(t.backdropPadding);
            return P(t.font && t.font.size, W.font.size) + e.height
        }
        return 0
    }

    function ah(i, t, e) {
        return e = F(e) ? e : [e], {
            w: hn(i, t.string, e),
            h: e.length * t.lineHeight
        }
    }

    function yo(i, t, e, s, n) {
        return i === s || i === n ? {
            start: t - e / 2,
            end: t + e / 2
        } : i < s || i > n ? {
            start: t - e,
            end: t
        } : {
            start: t,
            end: t + e
        }
    }

    function rh(i) {
        let t = {
                l: i.left + i._padding.left,
                r: i.right - i._padding.right,
                t: i.top + i._padding.top,
                b: i.bottom - i._padding.bottom
            },
            e = Object.assign({}, t),
            s = [],
            n = [],
            o = i._pointLabels.length,
            a = i.options.pointLabels,
            r = a.centerPointLabels ? I / o : 0;
        for (let l = 0; l < o; l++) {
            let c = a.setContext(i.getPointLabelContext(l));
            n[l] = c.padding;
            let h = i.getPointPosition(l, i.drawingArea + n[l], r),
                d = j(c.font),
                u = ah(i.ctx, d, i._pointLabels[l]);
            s[l] = u;
            let f = G(i.getIndexAngle(l) + r),
                g = Math.round(Ve(f)),
                p = yo(g, h.x, u.w, 0, 180),
                m = yo(g, h.y, u.h, 90, 270);
            lh(e, t, f, p, m)
        }
        i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = dh(i, s, n)
    }

    function lh(i, t, e, s, n) {
        let o = Math.abs(Math.sin(e)),
            a = Math.abs(Math.cos(e)),
            r = 0,
            l = 0;
        s.start < t.l ? (r = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + r)), n.start < t.t ? (l = (t.t - n.start) / a, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / a, i.b = Math.max(i.b, t.b + l))
    }

    function ch(i, t, e) {
        let s = i.drawingArea,
            {
                extra: n,
                additionalAngle: o,
                padding: a,
                size: r
            } = e,
            l = i.getPointPosition(t, s + n + a, o),
            c = Math.round(Ve(G(l.angle + N))),
            h = gh(l.y, r.h, c),
            d = uh(c),
            u = fh(l.x, r.w, d);
        return {
            visible: !0,
            x: l.x,
            y: h,
            textAlign: d,
            left: u,
            top: h,
            right: u + r.w,
            bottom: h + r.h
        }
    }

    function hh(i, t) {
        if (!t) return !0;
        let {
            left: e,
            top: s,
            right: n,
            bottom: o
        } = i;
        return !(rt({
            x: e,
            y: s
        }, t) || rt({
            x: e,
            y: o
        }, t) || rt({
            x: n,
            y: s
        }, t) || rt({
            x: n,
            y: o
        }, t))
    }

    function dh(i, t, e) {
        let s = [],
            n = i._pointLabels.length,
            o = i.options,
            {
                centerPointLabels: a,
                display: r
            } = o.pointLabels,
            l = {
                extra: Cs(o) / 2,
                additionalAngle: a ? I / n : 0
            },
            c;
        for (let h = 0; h < n; h++) {
            l.padding = e[h], l.size = t[h];
            let d = ch(i, h, l);
            s.push(d), r === "auto" && (d.visible = hh(d, c), d.visible && (c = d))
        }
        return s
    }

    function uh(i) {
        return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right"
    }

    function fh(i, t, e) {
        return e === "right" ? i -= t : e === "center" && (i -= t / 2), i
    }

    function gh(i, t, e) {
        return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i
    }

    function ph(i, t, e) {
        let {
            left: s,
            top: n,
            right: o,
            bottom: a
        } = e, {
            backdropColor: r
        } = t;
        if (!T(r)) {
            let l = Pt(t.borderRadius),
                c = X(t.backdropPadding);
            i.fillStyle = r;
            let h = s - c.left,
                d = n - c.top,
                u = o - s + c.width,
                f = a - n + c.height;
            Object.values(l).some(g => g !== 0) ? (i.beginPath(), Gt(i, {
                x: h,
                y: d,
                w: u,
                h: f,
                radius: l
            }), i.fill()) : i.fillRect(h, d, u, f)
        }
    }

    function mh(i, t) {
        let {
            ctx: e,
            options: {
                pointLabels: s
            }
        } = i;
        for (let n = t - 1; n >= 0; n--) {
            let o = i._pointLabelItems[n];
            if (!o.visible) continue;
            let a = s.setContext(i.getPointLabelContext(n));
            ph(e, a, o);
            let r = j(a.font),
                {
                    x: l,
                    y: c,
                    textAlign: h
                } = o;
            St(e, i._pointLabels[n], l, c + r.lineHeight / 2, r, {
                color: a.color,
                textAlign: h,
                textBaseline: "middle"
            })
        }
    }

    function Yo(i, t, e, s) {
        let {
            ctx: n
        } = i;
        if (e) n.arc(i.xCenter, i.yCenter, t, 0, z);
        else {
            let o = i.getPointPosition(0, t);
            n.moveTo(o.x, o.y);
            for (let a = 1; a < s; a++) o = i.getPointPosition(a, t), n.lineTo(o.x, o.y)
        }
    }

    function bh(i, t, e, s, n) {
        let o = i.ctx,
            a = t.circular,
            {
                color: r,
                lineWidth: l
            } = t;
        !a && !s || !r || !l || e < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Yo(i, e, a, s), o.closePath(), o.stroke(), o.restore())
    }

    function xh(i, t, e) {
        return bt(i, {
            label: e,
            index: t,
            type: "pointLabel"
        })
    }
    var Os = class extends ie {
            static id = "radialLinear";
            static defaults = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                grid: {
                    circular: !1
                },
                startAngle: 0,
                ticks: {
                    showLabelBackdrop: !0,
                    callback: de.formatters.numeric
                },
                pointLabels: {
                    backdropColor: void 0,
                    backdropPadding: 2,
                    display: !0,
                    font: {
                        size: 10
                    },
                    callback(t) {
                        return t
                    },
                    padding: 5,
                    centerPointLabels: !1
                }
            };
            static defaultRoutes = {
                "angleLines.color": "borderColor",
                "pointLabels.color": "color",
                "ticks.color": "color"
            };
            static descriptors = {
                angleLines: {
                    _fallback: "grid"
                }
            };
            constructor(t) {
                super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
            }
            setDimensions() {
                let t = this._padding = X(Cs(this.options) / 2),
                    e = this.width = this.maxWidth - t.width,
                    s = this.height = this.maxHeight - t.height;
                this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2)
            }
            determineDataLimits() {
                let {
                    min: t,
                    max: e
                } = this.getMinMax(!1);
                this.min = V(t) && !isNaN(t) ? t : 0, this.max = V(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
            }
            computeTickLimit() {
                return Math.ceil(this.drawingArea / Cs(this.options))
            }
            generateTickLabels(t) {
                ie.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
                    let n = E(this.options.pointLabels.callback, [e, s], this);
                    return n || n === 0 ? n : ""
                }).filter((e, s) => this.chart.getDataVisibility(s))
            }
            fit() {
                let t = this.options;
                t.display && t.pointLabels.display ? rh(this) : this.setCenterPoint(0, 0, 0, 0)
            }
            setCenterPoint(t, e, s, n) {
                this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n))
            }
            getIndexAngle(t) {
                let e = z / (this._pointLabels.length || 1),
                    s = this.options.startAngle || 0;
                return G(t * e + it(s))
            }
            getDistanceFromCenterForValue(t) {
                if (T(t)) return NaN;
                let e = this.drawingArea / (this.max - this.min);
                return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
            }
            getValueForDistanceFromCenter(t) {
                if (T(t)) return NaN;
                let e = t / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - e : this.min + e
            }
            getPointLabelContext(t) {
                let e = this._pointLabels || [];
                if (t >= 0 && t < e.length) {
                    let s = e[t];
                    return xh(this.getContext(), t, s)
                }
            }
            getPointPosition(t, e, s = 0) {
                let n = this.getIndexAngle(t) - N + s;
                return {
                    x: Math.cos(n) * e + this.xCenter,
                    y: Math.sin(n) * e + this.yCenter,
                    angle: n
                }
            }
            getPointPositionForValue(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            }
            getBasePosition(t) {
                return this.getPointPositionForValue(t || 0, this.getBaseValue())
            }
            getPointLabelPosition(t) {
                let {
                    left: e,
                    top: s,
                    right: n,
                    bottom: o
                } = this._pointLabelItems[t];
                return {
                    left: e,
                    top: s,
                    right: n,
                    bottom: o
                }
            }
            drawBackground() {
                let {
                    backgroundColor: t,
                    grid: {
                        circular: e
                    }
                } = this.options;
                if (t) {
                    let s = this.ctx;
                    s.save(), s.beginPath(), Yo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore()
                }
            }
            drawGrid() {
                let t = this.ctx,
                    e = this.options,
                    {
                        angleLines: s,
                        grid: n,
                        border: o
                    } = e,
                    a = this._pointLabels.length,
                    r, l, c;
                if (e.pointLabels.display && mh(this, a), n.display && this.ticks.forEach((h, d) => {
                        if (d !== 0 || d === 0 && this.min < 0) {
                            l = this.getDistanceFromCenterForValue(h.value);
                            let u = this.getContext(d),
                                f = n.setContext(u),
                                g = o.setContext(u);
                            bh(this, f, l, a, g)
                        }
                    }), s.display) {
                    for (t.save(), r = a - 1; r >= 0; r--) {
                        let h = s.setContext(this.getPointLabelContext(r)),
                            {
                                color: d,
                                lineWidth: u
                            } = h;
                        !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(r, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke())
                    }
                    t.restore()
                }
            }
            drawBorder() {}
            drawLabels() {
                let t = this.ctx,
                    e = this.options,
                    s = e.ticks;
                if (!s.display) return;
                let n = this.getIndexAngle(0),
                    o, a;
                t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l) => {
                    if (l === 0 && this.min >= 0 && !e.reverse) return;
                    let c = s.setContext(this.getContext(l)),
                        h = j(c.font);
                    if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                        t.font = h.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
                        let d = X(c.backdropPadding);
                        t.fillRect(-a / 2 - d.left, -o - h.size / 2 - d.top, a + d.width, h.size + d.height)
                    }
                    St(t, r.label, 0, -o, h, {
                        color: c.color,
                        strokeColor: c.textStrokeColor,
                        strokeWidth: c.textStrokeWidth
                    })
                }), t.restore()
            }
            drawTitle() {}
        },
        ui = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        Q = Object.keys(ui);

    function vo(i, t) {
        return i - t
    }

    function Mo(i, t) {
        if (T(t)) return null;
        let e = i._adapter,
            {
                parser: s,
                round: n,
                isoWeekday: o
            } = i._parseOpts,
            a = t;
        return typeof s == "function" && (a = s(a)), V(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (Et(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a)
    }

    function ko(i, t, e, s) {
        let n = Q.length;
        for (let o = Q.indexOf(i); o < n - 1; ++o) {
            let a = ui[Q[o]],
                r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
            if (a.common && Math.ceil((e - t) / (r * a.size)) <= s) return Q[o]
        }
        return Q[n - 1]
    }

    function _h(i, t, e, s, n) {
        for (let o = Q.length - 1; o >= Q.indexOf(e); o--) {
            let a = Q[o];
            if (ui[a].common && i._adapter.diff(n, s, a) >= t - 1) return a
        }
        return Q[e ? Q.indexOf(e) : 0]
    }

    function yh(i) {
        for (let t = Q.indexOf(i) + 1, e = Q.length; t < e; ++t)
            if (ui[Q[t]].common) return Q[t]
    }

    function wo(i, t, e) {
        if (!e) i[t] = !0;
        else if (e.length) {
            let {
                lo: s,
                hi: n
            } = We(e, t), o = e[s] >= t ? e[s] : e[n];
            i[o] = !0
        }
    }

    function vh(i, t, e, s) {
        let n = i._adapter,
            o = +n.startOf(t[0].value, s),
            a = t[t.length - 1].value,
            r, l;
        for (r = o; r <= a; r = +n.add(r, 1, s)) l = e[r], l >= 0 && (t[l].major = !0);
        return t
    }

    function So(i, t, e) {
        let s = [],
            n = {},
            o = t.length,
            a, r;
        for (a = 0; a < o; ++a) r = t[a], n[r] = a, s.push({
            value: r,
            major: !1
        });
        return o === 0 || !e ? s : vh(i, s, n, e)
    }
    var Se = class extends Bt {
        static id = "time";
        static defaults = {
            bounds: "data",
            adapters: {},
            time: {
                parser: !1,
                unit: !1,
                round: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {}
            },
            ticks: {
                source: "auto",
                callback: !1,
                major: {
                    enabled: !1
                }
            }
        };
        constructor(t) {
            super(t), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
        }
        init(t, e = {}) {
            let s = t.time || (t.time = {}),
                n = this._adapter = new Fr._date(t.adapters.date);
            n.init(e), Yt(s.displayFormats, n.formats()), this._parseOpts = {
                parser: s.parser,
                round: s.round,
                isoWeekday: s.isoWeekday
            }, super.init(t), this._normalized = e.normalized
        }
        parse(t, e) {
            return t === void 0 ? null : Mo(this, t)
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            }
        }
        determineDataLimits() {
            let t = this.options,
                e = this._adapter,
                s = t.time.unit || "day",
                {
                    min: n,
                    max: o,
                    minDefined: a,
                    maxDefined: r
                } = this.getUserBounds();

            function l(c) {
                !a && !isNaN(c.min) && (n = Math.min(n, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max))
            }(!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = V(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = V(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o)
        }
        _getLabelBounds() {
            let t = this.getLabelTimestamps(),
                e = Number.POSITIVE_INFINITY,
                s = Number.NEGATIVE_INFINITY;
            return t.length && (e = t[0], s = t[t.length - 1]), {
                min: e,
                max: s
            }
        }
        buildTicks() {
            let t = this.options,
                e = t.time,
                s = t.ticks,
                n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
            t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
            let o = this.min,
                a = this.max,
                r = nn(n, o, a);
            return this._unit = e.unit || (s.autoSkip ? ko(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : _h(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : yh(this._unit), this.initOffsets(n), t.reverse && r.reverse(), So(this, r, this._majorUnit)
        }
        afterAutoSkip() {
            this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
        }
        initOffsets(t = []) {
            let e = 0,
                s = 0,
                n, o;
            this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
            let a = t.length < 3 ? .5 : .25;
            e = $(e, 0, a), s = $(s, 0, a), this._offsets = {
                start: e,
                end: s,
                factor: 1 / (e + 1 + s)
            }
        }
        _generate() {
            let t = this._adapter,
                e = this.min,
                s = this.max,
                n = this.options,
                o = n.time,
                a = o.unit || ko(o.minUnit, e, s, this._getLabelCapacity(e)),
                r = P(n.ticks.stepSize, 1),
                l = a === "week" ? o.isoWeekday : !1,
                c = Et(l) || l === !0,
                h = {},
                d = e,
                u, f;
            if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 1e5 * r) throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
            let g = n.ticks.source === "data" && this.getDataTimestamps();
            for (u = d, f = 0; u < s; u = +t.add(u, r, a), f++) wo(h, u, g);
            return (u === s || n.bounds === "ticks" || f === 1) && wo(h, u, g), Object.keys(h).sort(vo).map(p => +p)
        }
        getLabelForValue(t) {
            let e = this._adapter,
                s = this.options.time;
            return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime)
        }
        format(t, e) {
            let n = this.options.time.displayFormats,
                o = this._unit,
                a = e || n[o];
            return this._adapter.format(t, a)
        }
        _tickFormatFunction(t, e, s, n) {
            let o = this.options,
                a = o.ticks.callback;
            if (a) return E(a, [t, e, s], this);
            let r = o.time.displayFormats,
                l = this._unit,
                c = this._majorUnit,
                h = l && r[l],
                d = c && r[c],
                u = s[e],
                f = c && d && u && u.major;
            return this._adapter.format(t, n || (f ? d : h))
        }
        generateTickLabels(t) {
            let e, s, n;
            for (e = 0, s = t.length; e < s; ++e) n = t[e], n.label = this._tickFormatFunction(n.value, e, t)
        }
        getDecimalForValue(t) {
            return t === null ? NaN : (t - this.min) / (this.max - this.min)
        }
        getPixelForValue(t) {
            let e = this._offsets,
                s = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + s) * e.factor)
        }
        getValueForPixel(t) {
            let e = this._offsets,
                s = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + s * (this.max - this.min)
        }
        _getLabelSize(t) {
            let e = this.options.ticks,
                s = this.ctx.measureText(t).width,
                n = it(this.isHorizontal() ? e.maxRotation : e.minRotation),
                o = Math.cos(n),
                a = Math.sin(n),
                r = this._resolveTickFontOptions(0).size;
            return {
                w: s * o + r * a,
                h: s * a + r * o
            }
        }
        _getLabelCapacity(t) {
            let e = this.options.time,
                s = e.displayFormats,
                n = s[e.unit] || s.millisecond,
                o = this._tickFormatFunction(t, 0, So(this, [t], this._majorUnit), n),
                a = this._getLabelSize(o),
                r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
            return r > 0 ? r : 1
        }
        getDataTimestamps() {
            let t = this._cache.data || [],
                e, s;
            if (t.length) return t;
            let n = this.getMatchingVisibleMetas();
            if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
            for (e = 0, s = n.length; e < s; ++e) t = t.concat(n[e].controller.getAllParsedValues(this));
            return this._cache.data = this.normalize(t)
        }
        getLabelTimestamps() {
            let t = this._cache.labels || [],
                e, s;
            if (t.length) return t;
            let n = this.getLabels();
            for (e = 0, s = n.length; e < s; ++e) t.push(Mo(this, n[e]));
            return this._cache.labels = this._normalized ? t : this.normalize(t)
        }
        normalize(t) {
            return Ci(t.sort(vo))
        }
    };

    function ei(i, t, e) {
        let s = 0,
            n = i.length - 1,
            o, a, r, l;
        e ? (t >= i[s].pos && t <= i[n].pos && ({
            lo: s,
            hi: n
        } = at(i, "pos", t)), {
            pos: o,
            time: r
        } = i[s], {
            pos: a,
            time: l
        } = i[n]) : (t >= i[s].time && t <= i[n].time && ({
            lo: s,
            hi: n
        } = at(i, "time", t)), {
            time: o,
            pos: r
        } = i[s], {
            time: a,
            pos: l
        } = i[n]);
        let c = a - o;
        return c ? r + (l - r) * (t - o) / c : r
    }
    var As = class extends Se {
            static id = "timeseries";
            static defaults = Se.defaults;
            constructor(t) {
                super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
            }
            initOffsets() {
                let t = this._getTimestampsForTable(),
                    e = this._table = this.buildLookupTable(t);
                this._minPos = ei(e, this.min), this._tableRange = ei(e, this.max) - this._minPos, super.initOffsets(t)
            }
            buildLookupTable(t) {
                let {
                    min: e,
                    max: s
                } = this, n = [], o = [], a, r, l, c, h;
                for (a = 0, r = t.length; a < r; ++a) c = t[a], c >= e && c <= s && n.push(c);
                if (n.length < 2) return [{
                    time: e,
                    pos: 0
                }, {
                    time: s,
                    pos: 1
                }];
                for (a = 0, r = n.length; a < r; ++a) h = n[a + 1], l = n[a - 1], c = n[a], Math.round((h + l) / 2) !== c && o.push({
                    time: c,
                    pos: a / (r - 1)
                });
                return o
            }
            _generate() {
                let t = this.min,
                    e = this.max,
                    s = super.getDataTimestamps();
                return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o)
            }
            _getTimestampsForTable() {
                let t = this._cache.all || [];
                if (t.length) return t;
                let e = this.getDataTimestamps(),
                    s = this.getLabelTimestamps();
                return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t
            }
            getDecimalForValue(t) {
                return (ei(this._table, t) - this._minPos) / this._tableRange
            }
            getValueForPixel(t) {
                let e = this._offsets,
                    s = this.getDecimalForPixel(t) / e.factor - e.end;
                return ei(this._table, s * this._tableRange + this._minPos, !0)
            }
        },
        Mh = Object.freeze({
            __proto__: null,
            CategoryScale: Ss,
            LinearScale: Ps,
            LogarithmicScale: Ds,
            RadialLinearScale: Os,
            TimeScale: Se,
            TimeSeriesScale: As
        }),
        Uo = [Er, oc, Qc, Mh];
    te.register(...Uo);
    var Xo = te;
    window.Chart = Xo;
})();
/*! Bundled license information:

@kurkle/color/dist/color.esm.js:
  (*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.segment.js:
  (*!
   * Chart.js v4.4.2
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chart.js:
  (*!
   * Chart.js v4.4.2
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   *)
*/