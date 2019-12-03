// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart4 = am4core.create("chartdiv-4", am4plugins_forceDirected.ForceDirectedTree);

var networkSeries = chart4.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

networkSeries.data = [{
  name: 'Science Fiction',
  children: [{
    name: 'Action', value: 57
  }, {
    name: 'Adventure', value: 55
  }, {
    name: 'Drama', value: 38
  }, {
    name: 'Thriller', value: 37
  }, {
    name: 'Mystery', value: 17
  }, {
    name: 'Fantasy', value: 17
  }]
}, {
  name: 'Thriller',
  children: [{
    name: 'Action', value: 79
  }, {
    name: 'Crime', value: 98
  }, {
    name: 'Drama', value: 116
  }, {
    name: 'Mystery', value: 84
  }, {
    name: 'Horror', value: 74
  }, {
    name: 'Science Fiction', value: 71
  }]
}, {
  name: 'Drama',
  children: [{
    name: 'Comedy', value: 124
  }, {
    name: 'Crime', value: 105
  }, {
    name: 'Romance', value: 312
  }, {
    name: 'Thriller', value: 229
  }, {
    name: 'Mystery', value: 79
  }, {
    name: 'Action', value: 70
  }, {
    name: 'Science Fiction', value: 43
  }]
}, {
  name: 'Animation',
  children: [{
    name: 'Adventure', value: 33
  }, {
    name: 'Comedy', value: 64
  }, {
    name: 'Family', value: 106
  }, {
    name: 'Fantasy', value: 16
  }, {
    name: 'Science Fiction', value: 14
  }]
}, {
  name: 'Action',
  children: [{
    name: 'Adventure', value: 263
  }, {
    name: 'Comedy', value: 194
  }, {
    name: 'Crime', value: 201
  }, {
    name: 'Drama', value: 211
  }, {
    name: 'Science Fiction', value: 154
  }, {
    name: 'Thriller', value: 361
  }]
}, {
  name: 'Adventure',
  children: [{
    name: 'Action', value: 135
  }, {
    name: 'Animation', value: 45
  }, {
    name: 'Comedy', value: 91
  }, {
    name: 'Drama', value: 79
  }, {
    name: 'Fantasy', value: 104
  }, {
    name: 'Science Fiction', value: 76
  }, {
    name: 'Thriller', value: 69
  }]
}, {
  name: 'Comedy',
  children: [{
    name: 'Crime', value: 107
  }, {
    name: 'Drama', value: 372
  }, {
    name: 'Family', value: 105
  }, {
    name: 'Fantasy', value: 100
  }, {
    name: 'Music', value: 70
  }, {
    name: 'Romance', value: 338
  }, {
    name: 'Science Fiction', value: 59
  }, {
    name: 'Thriller', value: 59
  }]
}, {
  name: 'Fantasy',
  children: [{
    name: 'Comedy', value: 44
  }, {
    name: 'Family', value: 37
  }, {
    name: 'Science Fiction', value: 42
  }, {
    name: 'Romance', value: 19
  }, {
    name: 'Adventure', value: 43
  }]
}, {
  name: 'Romance',
  children: [{
    name: 'Comedy', value: 252
  }, {
    name: 'Crime', value: 211
  }, {
    name: 'Drama', value: 259
  }]
}, {
  name: 'Crime',
  children: [{
    name: 'Drama', value: 134
  }, {
    name: 'Thriller', value: 115
  }, {
    name: 'Mystery', value: 42
  }, {
    name: 'Action', value: 22
  }, {
    name: 'Comedy', value: 18
  }]
}];

networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";
networkSeries.links.template.distance = 1;
networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;
networkSeries.nodes.template.outerCircle.scale = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 13;
networkSeries.nodes.template.label.hideOversized = true;
networkSeries.nodes.template.label.truncate = true;
networkSeries.minRadius = am4core.percent(3);
networkSeries.manyBodyStrength = -6;
networkSeries.links.template.strokeOpacity = 0;