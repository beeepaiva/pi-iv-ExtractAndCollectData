am4core.ready(function() {
	
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

var chart3 = am4core.create("chartdiv-3", am4charts.XYChart);

var valueAxisX = chart3.xAxes.push(new am4charts.ValueAxis());
valueAxisX.renderer.ticks.template.disabled = true;
valueAxisX.renderer.axisFills.template.disabled = true;

var valueAxisY = chart3.yAxes.push(new am4charts.ValueAxis());
valueAxisY.renderer.ticks.template.disabled = true;
valueAxisY.renderer.axisFills.template.disabled = true;

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
        "x": 754,
        "y": 121861389,
        "value": 26024103
    },
    {
        "title": " Adventure",
        "color": "#86a965",
        "x": 339,
        "y": 210961128,
        "value": 36498200
    },
    {
        "title": " Animation",
        "color": "#de4c4f",
        "x": 123,
        "y": 241765610,
        "value": 33030810
    },
    {
        "title": "Comedy",
        "color": "#8aabb0",
        "x": 1042,
        "y": 51780741,
        "value": 13480057
    },
    {
        "title": "Crime",
        "color": "#a7a737",
        "x": 195,
        "y": 48328882,
        "value": 18878908
    },
    {
        "title": " Documentary",
        "color": "#8aabb0",
        "x": 82,
        "y": 8752088,
        "value": 3164785
    },
    {
        "title": " Drama",
        "color": "#eea638",
        "x": 1207,
        "y": 45362600,
        "value": 14582229
    },
    {
        "title": "Fantasy",
        "color": "#86a965",
        "x": 117,
        "y": 147559233,
        "value": 31031954
    },
    {
        "title": "Horror",
        "color": "#eea638",
        "x": 300,
        "y": 44484316,
        "value": 17811995
    },
    {
        "title": "Music",
        "color": "#8aabb0",
        "x": 34,
        "y": 31703532,
        "value": 9905262
    },
    {
        "title": "Mystery",
        "color": "#de4c4f",
        "x": 41,
        "y": 69288469,
        "value": 23151586
    },
    {
        "title": "Romance",
        "color": "#a7a737",
        "x": 106,
        "y": 65750610,
        "value": 16608281
    },
    {
        "title": "Science Fiction",
        "color": "#de4c4f",
        "x": 96,
        "y": 168522356,
        "value": 36766967
    },
    {
        "title": "Thriller",
        "color": "#eea638",
        "x": 195,
        "y": 60483031,
        "value": 20872553
    },
    {
        "title": "War",
        "color": "#86a965",
        "x": 24,
        "y": 647170060,
        "value": 18388751
    },
    {
        "title": "Western",
        "color": "#de4c4f",
        "x": 27,
        "y": 49570331,
        "value": 21329844
    }
];
	
});