(() => {
    (function() {
        "use strict";
        let t = $(".report-donut-chart-3");
        t.length && t.each(function() {
            let e = $(this)[0].getContext("2d"),
                a = [35, 65],
                o = new Chart(e, {
                    type: "doughnut",
                    data: {
                        labels: ["31 - 50 Years old", ">= 50 Years old", "17 - 30 Years old"],
                        datasets: [{
                            data: a,
                            backgroundColor: [getColor("danger", .6), getColor("theme.2", .6)],
                            hoverBackgroundColor: [getColor("danger", .6), getColor("theme.2", .6)],
                            borderWidth: 1,
                            borderColor: [getColor("danger", .6), getColor("theme.2", .6)]
                        }]
                    },
                    options: {
                        maintainAspectRatio: !1,
                        plugins: {
                            legend: {
                                display: !1
                            }
                        },
                        cutout: "89%",
                        rotation: -90,
                        circumference: 180
                    }
                });
            helper.watchCssVariables("html", ["color-danger", "color-theme-2"], r => {
                o.data.datasets[0].borderColor[0] = getColor("danger", .6), o.data.datasets[0].hoverBackgroundColor[0] = getColor("danger", .6), o.data.datasets[0].backgroundColor[0] = getColor("danger", .6), o.data.datasets[0].borderColor[1] = getColor("theme.2", .6), o.data.datasets[0].hoverBackgroundColor[1] = getColor("theme.2", .6), o.data.datasets[0].backgroundColor[1] = getColor("theme.2", .6), o.update()
            })
        })
    })();
})();