am4core.ready(function() {

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

var chart3 = am4core.create("chartdiv-3", am4charts.XYChart);

var valueAxisX = chart3.xAxes.push(new am4charts.ValueAxis());
valueAxisX.renderer.ticks.template.disabled = true;
valueAxisX.renderer.axisFills.template.disabled = true;
valueAxisX.title.text = "Quantidade de filmes";

var valueAxisY = chart3.yAxes.push(new am4charts.ValueAxis());
valueAxisY.renderer.ticks.template.disabled = true;
valueAxisY.renderer.axisFills.template.disabled = true;
valueAxisY.title.text = "Revenue";

var series = chart3.series.push(new am4charts.LineSeries());
series.dataFields.valueX = "x";
series.dataFields.valueY = "y";
series.dataFields.value = "value";
series.strokeOpacity = 0;
series.sequencedInterpolation = true;
series.tooltip.pointerOrientation = "vertical";

var bullet = series.bullets.push(new am4core.Circle());
bullet.fill = am4core.color("#ff0000");
bullet.propertyFields.fill = "color";
bullet.strokeOpacity = 0;
bullet.strokeWidth = 2;
bullet.fillOpacity = 0.5;
bullet.stroke = am4core.color("#ffffff");
bullet.hiddenState.properties.opacity = 0;
bullet.tooltipText = "[bold]{title}:[/]\nPopularity: {value.value}\nReleases: {valueX.value}\nRevenue: {valueY.value}";

var outline = chart3.plotContainer.createChild(am4core.Circle);
outline.fillOpacity = 0;
outline.strokeOpacity = 0.8;
outline.stroke = am4core.color("#ff0000");
outline.strokeWidth = 2;
outline.hide(0);

var blurFilter = new am4core.BlurFilter();
outline.filters.push(blurFilter);

bullet.events.on("over", function(event) {
    var target = event.target;
    chart3.cursor.triggerMove({ x: target.pixelX, y: target.pixelY }, "hard");
    chart3.cursor.lineX.y = target.pixelY;
    chart3.cursor.lineY.x = target.pixelX - chart3.plotContainer.pixelWidth;
    valueAxisX.tooltip.disabled = false;
    valueAxisY.tooltip.disabled = false;

    outline.radius = target.pixelRadius + 2;
    outline.x = target.pixelX;
    outline.y = target.pixelY;
    outline.show();
})

bullet.events.on("out", function(event) {
    chart3.cursor.triggerMove(event.pointer.point, "none");
    chart3.cursor.lineX.y = 0;
    chart3.cursor.lineY.x = 0;
    valueAxisX.tooltip.disabled = true;
    valueAxisY.tooltip.disabled = true;
    outline.hide();
})

var hoverState = bullet.states.create("hover");
hoverState.properties.fillOpacity = 1;
hoverState.properties.strokeOpacity = 1;

series.heatRules.push({ target: bullet, min: 2, max: 60, property: "radius" });

bullet.adapter.add("tooltipY", function (tooltipY, target) {
    return -target.radius;
})

chart3.cursor = new am4charts.XYCursor();
chart3.cursor.behavior = "zoomXY";
chart3.cursor.snapToSeries = series;

chart3.scrollbarX = new am4core.Scrollbar();
chart3.scrollbarY = new am4core.Scrollbar();

chart3.data = [
    {
        "title": "Action",
        "color": "#eea638",
        "x": 1154,
        "y": 162959914515,
        "value": 32276289069
    },
    {
        "title": " Adventure",
        "color": "#86a965",
        "x": 790,
        "y": 157031983358,
        "value": 28667604631
    },
    {
        "title": " Animation",
        "color": "#de4c4f",
        "x": 234,
        "y": 49488237087,
        "value": 7870247300
    },
    {
        "title": "Comedy",
        "color": "#d8854f",
        "x": 1722,
        "y": 119364264901,
        "value": 26692824789
    },
    {
        "title": "Crime",
        "color": "#a7a737",
        "x": 696,
        "y": 44688835745,
        "value": 14064789172
    },
    {
        "title": " Documentary",
        "color": "#8aabb0",
        "x": 110,
        "y": 743332469,
        "value": 250717753
    },
    {
        "title": " Drama",
        "color": "#de4c4f",
        "x": 2297,
        "y": 118317437953,
        "value": 36859741393
    },
    {
        "title": "Fantasy",
        "color": "#ff7884",
        "x": 424,
        "y": 74494630106,
        "value": 13375486240
    },
    {
        "title": "Horror",
        "color": "#7d7d7d",
        "x": 519,
        "y": 22023819222,
        "value": 8366419356
    },
    {
        "title": "Music",
        "color": "#eea638",
        "x": 185,
        "y": 6206203278,
        "value": 1744556751
    },
    {
        "title": "Mystery",
        "color": "#8aabb0",
        "x": 348,
        "y": 25377056277,
        "value": 7293275979
    },
    {
        "title": "Romance",
        "color": "#de4c4f",
        "x": 892,
        "y": 50156087583,
        "value": 12604806202
    },
    {
        "title": "Science Fiction",
        "color": "#8354a3",
        "x": 534,
        "y": 80172644840,
        "value": 17296018287
    },
    {
        "title": "Thriller",
        "color": "#7d7d7d",
        "x": 1273,
        "y": 102140658580,
        "value": 28225445989
    },
    {
        "title": "War",
        "color": "#de4c4f",
        "x": 144,
        "y": 10557123733,
        "value": 2496238732
    },
    {
        "title": "Western",
        "color": "#d8854f",
        "x": 82,
        "y": 3431515251,
        "value": 1058251936
    }
];
	
});