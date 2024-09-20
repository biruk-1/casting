(() => {
    var o = dom = (() => {
        let a = e => typeof e == "string" && e.trim().slice(0, 1) !== "<" ? document.querySelectorAll(e) : typeof e == "string" && e.trim().slice(0, 1) === "<" ? [h(e)] : typeof e == "object" && e instanceof NodeList ? e : typeof e == "object" && e instanceof HTMLElement ? [e] : typeof e == "object" && e instanceof SVGElement ? [e] : e,
            h = e => new DOMParser().parseFromString(e, "text/html").body.childNodes[0],
            c = (e, r, l) => {
                e[r] = l
            },
            y = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                let r = Math.random() * 16 | 0;
                return (e == "x" ? r : r & 3 | 8).toString(16)
            }),
            n = e => {
                let r = e.composedPath && e.composedPath() || e.path,
                    l = e.target;
                if (r != null) return r.indexOf(window) < 0 ? r.concat(window) : r;
                if (l === window) return [window];

                function t(u, f) {
                    f = f || [];
                    let p = u.parentNode;
                    return p ? t(p, f.concat(p)) : f
                }
                return [l].concat(t(l), window)
            },
            i = e => {
                c(e, "on", (r, l, t) => (e.forEach(u => {
                    u.addEventListener(r, f => {
                        let p = y();
                        typeof l == "string" ? n(f).every(s => s.matches && s.matches(l) ? (s[p] = t, s[p](s), delete s[p], !1) : !0) : (u[p] = l, u[p](f), delete u[p])
                    }, !1)
                }), e)), c(e, "css", (r, l) => l === void 0 && typeof r != "object" ? getComputedStyle(e[0])[r] : (e.forEach(t => {
                    if (typeof r == "object")
                        for (let [u, f] of Object.entries(r)) t.style[u] = f;
                    else t.style[r] = l
                }), i(e), e)), c(e, "slideUp", (r = 300, l = () => {}) => (e.forEach(t => {
                    t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = r + "ms", t.style.height = t.offsetHeight + "px", t.offsetHeight, t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, window.setTimeout(() => {
                        t.style.display = "none", t.style.removeProperty("height"), t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property");
                        let u = y();
                        t[u] = l, t[u](t), delete t[u]
                    }, r)
                }), i(e), e)), c(e, "slideDown", (r = 300, l = () => {}) => (e.forEach(t => {
                    t.style.removeProperty("display");
                    let u = window.getComputedStyle(t).display;
                    u === "none" && (u = "block"), t.style.display = u;
                    let f = t.offsetHeight;
                    t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, t.offsetHeight, t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = r + "ms", t.style.height = f + "px", t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), window.setTimeout(() => {
                        t.style.removeProperty("height"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property");
                        let p = y();
                        t[p] = l, t[p](t), delete t[p]
                    }, r)
                }), i(e), e)), c(e, "fadeOut", (r = 300, l = () => {}) => (e.forEach(t => {
                    t.style.opacity = 1, t.style.transitionProperty = "opacity", t.style.transitionDuration = r + "ms", t.style.opacity = 0, window.setTimeout(() => {
                        t.style.display = "none", t.style.removeProperty("transition-property"), t.style.removeProperty("transition-duration"), t.style.removeProperty("opacity");
                        let u = y();
                        t[u] = l, t[u](t), delete t[u]
                    }, r)
                }), i(e), e)), c(e, "fadeIn", (r = 300, l = () => {}) => (e.forEach(t => {
                    let u = window.getComputedStyle(t).display;
                    u === "none" && (u = "block"), t.style.display = u, t.style.opacity = 0, t.style.transitionProperty = "opacity", t.style.transitionDuration = r + "ms", window.setTimeout(() => {
                        t.style.opacity = 1, window.setTimeout(() => {
                            t.style.removeProperty("transition-property"), t.style.removeProperty("transition-duration"), t.style.removeProperty("opacity")
                        }, r);
                        let f = y();
                        t[f] = l, t[f](t), delete t[f]
                    }, r)
                }), i(e), e)), c(e, "hide", () => (e.forEach(r => {
                    r.style.display = "none"
                }), i(e), e)), c(e, "show", () => (e.forEach(r => {
                    r.style.display === "none" && (r.style.display = "block")
                }), i(e), e)), c(e, "clone", () => {
                    let r = [];
                    return e.forEach(l => {
                        r.push(l.cloneNode(!0))
                    }), i(r), r
                }), c(e, "each", r => (e.forEach((l, t) => {
                    let u = y();
                    l[u] = r, l[u](t, l), delete l[u]
                }), i(e), e)), c(e, "find", r => {
                    let l = [];
                    return e.forEach(t => {
                        let u = t.querySelectorAll(r);
                        u.length && u.forEach(f => {
                            l.push(f)
                        })
                    }), i(l), l
                }), c(e, "hasClass", r => {
                    let l = !1;
                    return e.forEach(t => {
                        t.classList.contains(r) && (l = !0)
                    }), l
                }), c(e, "removeClass", r => (r.length && r.split(" ").forEach(l => {
                    e.forEach(t => {
                        t.classList.remove(l)
                    })
                }), i(e), e)), c(e, "addClass", r => (r.length && r.split(" ").forEach(l => {
                    e.forEach(t => {
                        t.classList.add(l)
                    })
                }), i(e), e)), c(e, "is", r => typeof r == "string" ? (e[0].matches || e[0].matchesSelector || e[0].msMatchesSelector || e[0].mozMatchesSelector || e[0].webkitMatchesSelector || e[0].oMatchesSelector).call(e[0], r) : e[0] === r), c(e, "attr", (r, l) => {
                    if (l === void 0 && typeof r != "object")
                        if (e[0] !== void 0) {
                            let t = e[0].getAttribute(r);
                            return t === null ? void 0 : t
                        } else return;
                    return e.forEach(t => {
                        if (typeof r == "object")
                            for (let [u, f] of Object.entries(r)) t.setAttribute(u, f);
                        else t.setAttribute(r, l)
                    }), i(e), e
                }), c(e, "removeAttr", r => (e.forEach(l => {
                    l.removeAttribute(r)
                }), i(e), e)), c(e, "data", (r, l) => {
                    if (l === void 0) {
                        let t = e[0].getAttribute(`data-${r}`);
                        return t === null ? void 0 : t
                    }
                    return e.forEach(t => {
                        t.setAttribute(`data-${r}`, l)
                    }), i(e), e
                }), c(e, "width", r => r === void 0 ? e === window ? parseInt(window.innerWidth) : typeof e[0] < "u" ? parseInt(getComputedStyle(e[0]).width) : null : (e === window ? window.resizeTo(r, window.innerHeight) : e.forEach(l => {
                    l.style.width = r
                }), i(e), e)), c(e, "height", r => r === void 0 ? e === window ? parseInt(window.innerHeight) : typeof e[0] < "u" ? parseInt(getComputedStyle(e[0]).height) : null : (e === window ? window.resizeTo(window.innerWidth, r) : e.forEach(l => {
                    l.style.height = r
                }), i(e), e)), c(e, "css", (r, l) => l === void 0 && typeof r != "object" ? getComputedStyle(e[0])[r] : (e.forEach(t => {
                    if (typeof r == "object")
                        for (let [u, f] of Object.entries(r)) t.style[u] = f;
                    else t.style[r] = l
                }), i(e), e)), c(e, "replaceWith", r => {
                    let l = [],
                        t = a(r);
                    return e.forEach((u, f) => {
                        t.forEach(p => {
                            let s = p;
                            f > 0 && (s = p.cloneNode(!0)), u.parentNode.insertBefore(s, u.nextSibling), l.push(s)
                        }), u.remove()
                    }), i(l), l
                }), c(e, "insertAfter", r => {
                    let l = [],
                        t = a(r);
                    return e.forEach(u => {
                        t.forEach((f, p) => {
                            let s = u;
                            p > 0 && (s = u.cloneNode(!0)), f.parentNode.insertBefore(s, f.nextSibling), l.push(s)
                        })
                    }), i(l), l
                }), c(e, "appendTo", r => {
                    let l = [],
                        t = a(r);
                    return e.forEach(u => {
                        t.forEach((f, p) => {
                            let s = u;
                            p > 0 && (s = u.cloneNode(!0)), f.appendChild(s), l.push(s)
                        })
                    }), i(l), l
                }), c(e, "append", r => {
                    let l = a(r);
                    return e.forEach((t, u) => {
                        l.forEach(f => {
                            let p = f;
                            u > 0 && (p = f.cloneNode(!0)), t.appendChild(p)
                        })
                    }), i(e), e
                }), c(e, "remove", () => (e.forEach(r => {
                    r.parentNode !== null && r.parentNode.removeChild(r)
                }), i(e), e)), c(e, "first", () => {
                    let r = e[0] !== void 0 ? [e[0]] : [];
                    return i(r), r
                }), c(e, "last", () => {
                    let r = e[e.length - 1] !== void 0 ? [e[e.length - 1]] : [];
                    return i(r), r
                }), c(e, "val", r => {
                    if (r === void 0)
                        if (e[0] instanceof HTMLSelectElement && e[0].multiple) {
                            let l = [];
                            for (let t of e[0].selectedOptions) l.push(t.value);
                            return l
                        } else return e[0].value;
                    return e.forEach(l => {
                        if (l instanceof HTMLSelectElement) {
                            l.value = "", typeof r != "object" && (r = [r]);
                            for (let t of r) {
                                let u = Array.from(l).find(f => f.value == t);
                                u !== void 0 && (u.selected = !0)
                            }
                        } else l.value = r
                    }), i(e), e
                }), c(e, "html", r => r === void 0 ? e[0].innerHTML : (e.forEach(l => {
                    l.innerHTML = r
                }), i(e), e)), c(e, "text", r => r === void 0 ? e[0].textContent : (e.forEach(l => {
                    l.textContent = r
                }), i(e), e)), c(e, "filter", r => {
                    let l = [];
                    return e.forEach((t, u) => {
                        let f = y();
                        t[f] = r;
                        let p = t[f](u, t);
                        delete t[f], p && l.push(t)
                    }), i(l), l
                }), c(e, "closest", r => {
                    let l = [];
                    return e.forEach(t => {
                        let u = t.closest(r);
                        u !== null && !l.filter(f => f === u).length && l.push(u)
                    }), i(l), l
                }), c(e, "children", r => {
                    let l = [];
                    return e.forEach(t => {
                        for (let u of t.children)
                            if (r === void 0) l.push(u);
                            else
                                for (let f of t.querySelectorAll(r)) f === u && l.push(f)
                    }), i(l), l
                }), c(e, "parent", () => {
                    let r = [];
                    return e.forEach(l => {
                        let t = l.parentNode;
                        t !== null && !r.filter(u => u === t).length && r.push(t)
                    }), i(r), r
                }), c(e, "prev", () => {
                    let r = [];
                    return e.forEach(l => {
                        l.previousElementSibling !== null && r.push(l.previousElementSibling)
                    }), i(r), r
                }), c(e, "next", () => {
                    let r = [];
                    return e.forEach(l => {
                        l.nextElementSibling !== null && r.push(l.nextElementSibling)
                    }), i(r), r
                }), c(e, "off", () => {
                    let r = [];
                    return e.forEach(l => {
                        let t = l.cloneNode(!0);
                        l.parentNode.replaceChild(t, l), r.push(t)
                    }), i(r), r
                })
            };
        return window.dom = e => {
            let r = a(e);
            return i(r), r
        }
    })();
    window.$ = o;
})();