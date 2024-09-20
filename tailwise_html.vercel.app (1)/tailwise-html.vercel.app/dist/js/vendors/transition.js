(() => {
    (function() {
        "use strict";

        function e(t) {
            let a = $(t).clone().html(""),
                s = $($("<div></div>").append(a)).find($(a).data("selector")).length;
            $(t).data("state") === void 0 && ($(t).data("state", s ? "leave" : "enter"), s ? $(t).show() : $(t).hide()), s && $(t).data("state") === "leave" ? ($(t).data("state", "enter"), $(t).show(), $(t).addClass($(t).data("enter-from")), setTimeout(() => {
                $(t).addClass($(t).data("enter")), $(t).addClass($(t).data("enter-to")), $(t).removeClass($(t).data("enter-from")), setTimeout(() => {
                    $(t).removeClass($(t).data("enter"))
                }, parseFloat($(t).css("transition-duration")) * 1e3)
            })) : !s && $(t).data("state") === "enter" && ($(t).data("state", "leave"), $(t).addClass($(t).data("leave-from")), setTimeout(() => {
                $(t).addClass($(t).data("leave")), $(t).addClass($(t).data("leave-to")), $(t).removeClass($(t).data("leave-from")), setTimeout(() => {
                    $(t).removeClass($(t).data("leave")), $(t).attr("class", ($(t).attr("class") !== void 0 ? $(t).attr("class") : "").split(" ").filter(d => d.search("mt-") === -1).join(" ")), setTimeout(() => {
                        $(t).hide()
                    }, 100)
                }, parseFloat($(t).css("transition-duration")) * 1e3)
            }))
        }
        let r = new MutationObserver(t => {
            t.forEach(async function(a) {
                a.type === "attributes" && e(a.target)
            })
        });
        $("[data-transition]").each(function() {
            r.observe(this, {
                attributes: !0
            }), e(this)
        })
    })();
})();