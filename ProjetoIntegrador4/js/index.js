am4core.useTheme(am4themes_animated);
//am4core.useTheme(am4themes_kelly);

let chart = am4core.create("chartdiv-1", am4plugins_wordCloud.WordCloud);
let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

console.log(chart.series);
series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 100;
series.minWordLength = 2;
series.maxFontSize = am4core.percent(30);

series.data=[
{
"tag":"Action",
"weight":1155
},
{
"tag":"Adventure",
"weight":790
},
{
"tag":"Fantasy",
"weight":424
},
{
"tag":"ScienceFiction",
"weight":535
},
{
"tag":"Crime",
"weight":696
},
{
"tag":"Drama",
"weight":2297
},
{
"tag":"Thriller",
"weight":1274
},
{
"tag":"Animation",
"weight":234
},
{
"tag":"Family",
"weight":513
},
{
"tag":"Western",
"weight":82
},
{
"tag":"Comedy",
"weight":1722
},
{
"tag":"Romance",
"weight":894
},
{
"tag":"Horror",
"weight":519
},
{
"tag":"Mystery",
"weight":348
},
{
"tag":"History",
"weight":197
},
{
"tag":"War",
"weight":144
},
{
"tag":"Music",
"weight":185
},
{
"tag":"Documentary",
"weight":110
},
{
"tag":"Foreign",
"weight":34
},
{
"tag":"TVMovie",
"weight":8
}
];

series.dataFields.word="tag";
series.dataFields.value="weight";
series.heatRules.push({
"target":series.labels.template,
"property":"fill",
"min":am4core.color("#00bfd8"),
"max":am4core.color("#0c5460"),
"dataField":"value"
});
series.labels.template.tooltipText="{tag}:\n[bold]{weight}[/]";

series.events.on("arrangestarted", function(ev) {
  ev.target.baseSprite.preloader.show(0);
});

series.events.on("arrangeprogress", function(ev) {
  ev.target.baseSprite.preloader.progress = ev.progress;
});

