// $(function () {
//  var householdPrices = [
//  {x:'2002',y:0.173},
//  {x:'2003',y:0.184},
//  {x:'2004',y:0.167},
//  {x:'2005',y:0.177},
//  {x:'2006',y:0.189},
//  {x:'2007',y:0.180},
//  {x:'2008',y:0.183},
//  {x:'2009',y:0.188},
//  {x:'2010',y:0.160},
//  {x:'2011',y:0.176},
//  {x:'2012',y:0.178}
//  ];
//
//  var something = [
//  {x:'20.41',y:0.344},
//  {x:'20.42',y:0.453},
//  {x:'20.43',y:0.344},
//  {x:'20.44',y:0.657},
//  {x:'20.45',y:0.177},
//
//  ];
//  var industryPrices = [
//  {x:'2001',y:0.103},
//  {x:'2002',y:0.105},
//  {x:'2003',y:0.112},
//  {x:'2004',y:0.111},
//  {x:'2005',y:0.102},
//  {x:'2006',y:0.099},
//  {x:'2007',y:0.110},
//  {x:'2008',y:0.113},
//  {x:'2009',y:0.117},
//  {x:'2010',y:0.119},
//  ];
//  $("#chart").shieldChart({
//  theme: "light",
//  exportOptions: {
//  image: false,
//  print: false
//  },
//  primaryHeader: {
//  text: "Цены на электроэнергию"
//  },
//  chartLegend: {
//  align: 'right',
//  verticalAlign: 'top',
//  renderDirection: 'vertical'
//  },
//  seriesSettings: {
//  line: {
//  enablePointSelection: true,
//  pointMark: {
//  activeSettings: {
//  pointSelectedState: {
//  drawWidth: 4,
//  drawRadius: 4
//  }
//  }
//  }
//  }
//  },
//  axisY: {
//  title: {
//  text: "Цена (EUR per kWh)"
//  }
//  },
//  dataSeries: [
//      {
//  seriesType: 'line',
//  collectionAlias: "Бытовая",
//  data: householdPrices
//  },
//   {
//  seriesType: 'line',
//  collectionAlias: "Индустрия",
//  data: industryPrices
//  },
//  //  {
//  // seriesType: 'line',
//  // collectionAlias: "Индустрия",
//  // data: something
//  // }
//  ]
//  });
//  });
 $(function () {
 $("#chart").shieldChart({
 theme: "light",
 seriesSettings: {
 line: {
 dataPointText: {
 enabled: true
 }
 }
 },
 chartLegend: {
 align: 'center',
 borderRadius: 2,
 borderWidth: 2,
 verticalAlign: 'top'
 },
 exportOptions: {
 image: true,
 print: true
 },
 axisX: {
 categoricalValues: [
          '17.06 00:46:12',
          '17.05 01:53:14',
          '17.06 07:22:14',
          '17.06 16:27:14',
          '17.06 21:06:14',
          '18.06 06:20:14',
          '18.06 11:24:14',
          '18.06 17:19:14',
          '18.06 20:10:14',
          '18.06 23:13:14',
          '19.06 00:24:14',
          '11.11 06:33:14',
          '17.06 00:46:12',
          '17.05 01:53:14',
          '17.06 07:22:14',
          '17.06 16:27:14',
          '17.06 21:06:14',
          '18.06 06:20:14',
          '18.06 11:24:14',
          '18.06 17:19:14',
          '18.06 20:10:14',
          '18.06 23:13:14',
          '19.06 00:24:14',
          '22.22 06:33:14',
        ]


 },
 axisY: {
 title: {
 text: "Цена (€ за kWh)"
 }
 },
 primaryHeader: {
 text: "Цены на электроэнергию"
 },
 dataSeries: [{
 seriesType: 'line',
 collectionAlias: 'Домохозяйство',
 data: [0.164, 0.173, 0.184, 0.114, 0.273, 0.384, 0.464, 0.123, 0.112, 0.124, 0.1, 0.17]
 }, {
 seriesType: 'line',
 collectionAlias: 'Индустрия',
 data: [0.342, 0.127, 0.321, 0.567, 0.324, 0.543, 0.342, 0.435, 0.564, 0.342, 0.234, 0.564]
 }]
 });
 });