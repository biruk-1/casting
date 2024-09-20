(() => {
    (function() {
        "use strict";

        function d() {
            $(".dropdown-menu").each(async function() {
                if ($(this).attr("id") !== void 0 && $('[data-dropdown-replacer="' + $(this).attr("id") + '"]').length && $(this).data("dropdown-programmatically") === void 0) {
                    let e = $(this).attr("id"),
                        t = $('[data-dropdown-replacer="' + e + '"]').parent().find("[data-tw-toggle='dropdown']");
                    $(this).removeClass("show");
                    let n = new Event("hide.tw.dropdown");
                    $(t).parent()[0].dispatchEvent(n), await setTimeout(() => {
                        $('[data-dropdown-replacer="' + e + '"]').replaceWith(this), $(this).removeAttr("style"), $(this).removeAttr("data-popper-placement"), $(t).attr("aria-expanded", !1);
                        let a = new Event("hidden.tw.dropdown");
                        $(t).parent()[0].dispatchEvent(a)
                    }, 200)
                } else $(this).attr("id") !== void 0 && !$('[data-dropdown-replacer="' + $(this).attr("id") + '"]').length && $(this).hasClass("show") && $(this).data("dropdown-programmatically") === void 0 ? $(this).remove() : $(this).data("dropdown-programmatically") == "initiate" ? $(this).attr("data-dropdown-programmatically", "showed") : $(this).data("dropdown-programmatically") == "showed" && ($(this).removeAttr("data-dropdown-programmatically"), d())
            })
        }

        function p(e) {
            return e.filter((t, n) => n.offsetParent !== null)
        }
        async function r(e) {
            let t = $(e).find(".dropdown-menu").first(),
                n = p($(e).find("[data-tw-toggle='dropdown']")),
                a = $(e).data("tw-placement") ? $(e).data("tw-placement") : "bottom-end",
                o = "_" + Math.random().toString(36).substr(2, 9);
            if (d(), $(t).length) {
                $(n).attr("aria-expanded", !0), $(e).css("position") == "static" && $(e).css("position", "relative"), $(t).show(), $(t).css("width", $(t).css("width")), $('<div data-dropdown-replacer="' + o + '"></div>').insertAfter(t), $(t).attr("id", o).appendTo("body"), $(".modal.show").each(function() {
                    $(this).find('[data-dropdown-replacer="' + o + '"]') && $(t).css("z-index", $(this).css("z-index"))
                }), Popper.createPopper(n[0], t[0], {
                    placement: a
                }), $(t).addClass("show");
                let i = new Event("show.tw.dropdown");
                $(e)[0].dispatchEvent(i), await setTimeout(() => {
                    let c = new Event("shown.tw.dropdown");
                    $(e)[0].dispatchEvent(c)
                }, 200)
            }
        }

        function w(e) {
            let t = $(e).find(".dropdown-menu").first();
            $(t).length ? s(e) : d()
        }

        function s(e) {
            if ($(e).find(".dropdown-menu").length) $(e).find(".dropdown-menu").attr("data-dropdown-programmatically", "initiate");
            else {
                let t = $("[data-dropdown-replacer]").data("dropdown-replacer");
                $("#" + t).attr("data-dropdown-programmatically", "initiate")
            }
            r(e)
        }

        function l(e) {
            let t = $(e).closest(".dropdown");
            return {
                show() {
                    s(t)
                },
                hide() {
                    d()
                },
                toggle() {
                    w(t)
                }
            }
        }
        $("body").on("click", function(e) {
                let t = $(e.target).closest(".dropdown"),
                    n = $(t).find("[data-tw-toggle='dropdown']"),
                    a = $(t).find(".dropdown-menu").first(),
                    o = $(e.target).closest(".dropdown-menu").first(),
                    i = $(e.target).data("tw-dismiss");
                !$(t).length && !$(o).length || $(n).length && !$(a).length || i == "dropdown" ? d() : $(o).length || r(t)
            }), document.addEventListener("keydown", function(e) {
                e.code == "Escape" && d()
            }),
            function() {
                $("[data-tw-toggle='dropdown']").each(function() {
                    this.__dropdown = l(this)
                }), window.tailwind === void 0 && (window.tailwind = {}), window.tailwind.Dropdown = {
                    getInstance(t) {
                        return t.__dropdown
                    },
                    getOrCreateInstance(t) {
                        return t.__dropdown === void 0 ? l(t) : t.__dropdown
                    }
                }
            }()
    })();
})();