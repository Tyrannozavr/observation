$(function () {
 var householdPrices = [
 {x:'2001',y:0.164},
 {x:'2002',y:0.173},
 {x:'2003',y:0.184},
 {x:'2004',y:0.167},
 {x:'2005',y:0.177},
 {x:'2006',y:0.189},
 {x:'2007',y:0.180},
 {x:'2008',y:0.183},
 {x:'2009',y:0.188},
 {x:'2010',y:0.160},
 {x:'2011',y:0.176},
 {x:'2012',y:0.178}
 ]; var something = [
 {x:'2001',y:0.344},
 {x:'2002',y:0.453},
 {x:'2003',y:0.344},
 {x:'2004',y:0.657},
 {x:'2005',y:0.177},

 ];
 var industryPrices = [
 {x:'2001',y:0.103},
 {x:'2002',y:0.105},
 {x:'2003',y:0.112},
 {x:'2004',y:0.111},
 {x:'2005',y:0.102},
 {x:'2006',y:0.099},
 {x:'2007',y:0.110},
 {x:'2008',y:0.113},
 {x:'2009',y:0.117},
 {x:'2010',y:0.119},
 ];
 $("#chart").shieldChart({
 theme: "light",
 exportOptions: {
 image: false,
 print: false
 },
 primaryHeader: {
 text: "Цены на электроэнергию"
 },
 chartLegend: {
 align: 'right',
 verticalAlign: 'top',
 renderDirection: 'vertical'
 },
 seriesSettings: {
 line: {
 enablePointSelection: true,
 pointMark: {
 activeSettings: {
 pointSelectedState: {
 drawWidth: 4,
 drawRadius: 4
 }
 }
 }
 }
 },
 axisY: {
 title: {
 text: "Цена (EUR per kWh)"
 }
 },
 dataSeries: [{
 seriesType: 'line',
 collectionAlias: "Бытовая",
 data: householdPrices
 }, {
 seriesType: 'line',
 collectionAlias: "Индустрия",
 data: industryPrices
 }, {
 seriesType: 'line',
 collectionAlias: "Индустрия",
 data: something
 }]
 });
 });