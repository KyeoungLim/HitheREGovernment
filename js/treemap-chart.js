anychart.onDocumentReady(function() {
//위 근거는 서울 열린 데이터광장 - 서울시 외국인 근로자(국적별)통계를 참고함
  // create data
  var data = [
    {name: "World", children: [
          {name: "Northeast Asia", children: [
              {name: "China", value: 665},
              {name: "Korean-Chinese", value: 1400},
              {name: "Taiwan", value: 69},
              {name: "Japan", value: 172},
              {name: "Mongolia", value: 36}
            ]},
            {name: "Southeast Asia", children: [
              {name: "Vietnam", value: 262},
              {name: "Philippines", value: 257},
              {name: "Thailand", value: 194},
              {name: "Malaysia", value: 41}
            ]},
            {name: "Southwest Asia", children: [
              {name: "Sri Lanka", value: 46},
              {name: "Pakistan", value: 54},
              {name: "Bangladesh", value: 89},
              {name: "Nepal", value: 140}
            ]},
            {name: "Central Asia", children: [
              {name: "Uzbekistan", value: 119},
              {name: "Kazakhstan", value: 66},
              {name: "Kyrgyzstan", value: 15}
            ]},
            {name: "Africa", children: [
              {name: "Africa", value: 178}
            ]}
          ]}
        ];

  // create a data tree
  var treeData = anychart.data.tree(data, "as-tree");

   // create a treemap chart visualizing the data tree
  var chart = anychart.treeMap(treeData);

  // set the depth of hints
  chart.hintDepth(1);
  // set the opacity of hints
  chart.hintOpacity(0.7);

  // configure the visual settings of the chart
  chart.hovered().fill("silver", 0.2);
  chart.selected().fill("silver", 0.6);
  chart.selected().hatchFill("backward-diagonal", "silver", 2, 20);
  chart.normal().stroke("silver");
  chart.hovered().stroke("gray", 2);
  chart.selected().stroke("gray", 2);

  // create and configure a custom color scale
  var customColorScale = anychart.scales.linearColor();
  customColorScale.colors(["Yellow", "MediumPurple"]);
  // apply the custom color scale to the treemap chart
  chart.colorScale(customColorScale);
  // add the color range
  chart.colorRange().enabled(true);
  chart.colorRange().length("100%");



  // enable HTML in the chart tooltips
  chart.tooltip().useHtml(true);
  // configure the chart tooltips
  chart.tooltip().format(
    "Internet audience: {%value} million users<br><i>(As of January 2019.)</i>"
  );

  // enable HTML in the chart labels
  chart.labels().useHtml(true);
  // configure the chart labels
  chart.labels().format(
    "<span style='font-weight:bold'>{%name}</span><br>{%value}"
  );

  // set the container id
  chart.container("container");

  // draw the chart
  chart.draw();

});