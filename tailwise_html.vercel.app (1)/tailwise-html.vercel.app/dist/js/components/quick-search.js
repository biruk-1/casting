(() => {
    var t = document.querySelector("#quick-search"),
        o = tailwind.Modal.getOrCreateInstance(t);
    document.onkeydown = function(e) {
        (e.ctrlKey || e.metaKey) && e.key === "k" && o.show()
    };
    $(t).on("shown.tw.modal", function() {
        $(t).find("input").first()[0].focus()
    });
    $(t).find("input").first().on("input", function(e) {
        $(".global-search__keyword").first().html(`"${e.target.value}"`), e.target.value.length > 3 ? $(".global-search").first().removeClass("global-search--show-result") : $(".global-search").first().addClass("global-search--show-result")
    });
})();