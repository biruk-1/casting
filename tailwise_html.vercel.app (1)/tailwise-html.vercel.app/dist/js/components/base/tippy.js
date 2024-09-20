(() => {
    (function() {
        "use strict";
        $(".tooltip").each(function() {
            let t = {
                content: $(this).attr("title")
            };
            $(this).data("trigger") !== void 0 && (t.trigger = $(this).data("trigger")), $(this).data("placement") !== void 0 && (t.placement = $(this).data("placement")), $(this).data("theme") !== void 0 && (t.theme = $(this).data("theme")), $(this).data("tooltip-content") !== void 0 && (t.content = $($(this).data("tooltip-content"))[0]), $(this).removeAttr("title"), tippy(this, {
                arrow: roundArrow,
                animation: "shift-away",
                ...t
            })
        })
    })();
})();