var yValues = [7,8,8,9,9,9,10,11,14,14,15, 19];
var yValues2 = [8,8,9,9,9,10,11,14,14,15, 17];
var xValues =  [
          '17 июня 00:46',
          '17 июня 01:53',
          '17 июня 07:22',
          '17 июня 16:27',
          '17 июня 21:06',
          '18 июня 06:20',
          '18 июня 11:24',
          '18 июня 17:19',
          '18 июня 20:10',
          '18 июня 23:13',
          '19 июня 00:24',
          '19 июня 06:33',
          '19 июня 13:57',
          '19 июня 20:42',
          '17 июня 00:46',
          '17 июня 01:53',
          '17 июня 07:22',
          '17 июня 16:27',
          '17 июня 21:06',
          '18 июня 06:20',
          '18 июня 11:24',
          '18 июня 17:19',
          '18 июня 20:10',
          '18 июня 23:13',
          '19 июня 00:24',
          '19 июня 06:33',
          '19 июня 13:57',
          '19 июня 20:42',
        ];
new Chart("myChart", {
  type: "line",
    backgroundColor: 'rgba(251, 85, 85, 0.4)',
  data: {
    labels: xValues,
    datasets: [{
      label: 'something',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues,

    },
        {
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues2
    }
    ]
  },
  options: {
    legend: {display: true},
    scales: {
      yAxes: [{ticks: {min: 6, max:20}, gridLines: {
                display: true
              }}],
      xAxes: [{ticks: {min: 6, max:20}, gridLines: {
                display: false
              }}],


    }
  }
});
