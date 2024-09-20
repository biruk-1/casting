(() => {
    (function() {
        "use strict";
        let t = {
                slideBy: "page",
                mouseDrag: !0,
                autoplay: !0,
                controls: !1,
                nav: !1,
                speed: 500
            },
            s = {
                slideBy: "page",
                mouseDrag: !0,
                autoplay: !1,
                controls: !0,
                nav: !1,
                speed: 500
            },
            i = {
                slideBy: "page",
                mouseDrag: !0,
                autoplay: !1,
                controls: !0,
                items: 1,
                nav: !1,
                speed: 500,
                responsive: {
                    600: {
                        items: 3
                    },
                    480: {
                        items: 2
                    }
                }
            },
            n = {
                slideBy: "page",
                mouseDrag: !0,
                autoplay: !1,
                controls: !0,
                items: 1,
                nav: !0,
                speed: 500,
                responsive: {
                    600: {
                        items: 3
                    },
                    480: {
                        items: 2
                    }
                }
            },
            o = {
                mouseDrag: !0,
                autoplay: !1,
                controls: !0,
                center: !0,
                items: 1,
                nav: !1,
                speed: 500,
                responsive: {
                    600: {
                        items: 2
                    }
                }
            },
            a = {
                mode: "gallery",
                slideBy: "page",
                mouseDrag: !0,
                autoplay: !0,
                controls: !0,
                nav: !0,
                speed: 500
            },
            r = {
                autoplay: !1,
                controls: !1,
                items: 1,
                responsive: {
                    640: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1320: {
                        items: 5
                    }
                }
            };
        $(".tiny-slider").length && $(".tiny-slider").each(function() {
            let e = $(this).data("config");
            this.tns = tns({
                container: this,
                ...e === void 0 || e === "" ? t : {},
                ...e === "single-item" ? s : {},
                ...e === "multiple-items" ? i : {},
                ...e === "responsive" ? n : {},
                ...e === "center-mode" ? o : {},
                ...e === "fade" ? a : {},
                ...e === "performance-insight-slider-config" ? r : {}
            })
        }), $(".tiny-slider-navigator").length && $(".tiny-slider-navigator").each(function() {
            $(this).on("click", function() {
                $(this).data("target") == "prev" ? $("#" + $(this).data("carousel"))[0].tns.goTo("prev") : $("#" + $(this).data("carousel"))[0].tns.goTo("next")
            })
        })
    })();
})();