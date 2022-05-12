var ai1 = [7,8,8,9,9,9,10,11,14,14,15, 1];
var ai2 = [8,8,9,9,9,10,11, 14,14,15, 2];
var ai3 = [8,8,9,9,9,10,11, 14,14,15, 3];
var ai4 = [8,8,9,9,9,10,11, 14,14,15, 4];
var ai5 = [8,8,9,9,9,10,11, 14,14,15, 5];
var ai6 = [8,8,9,9,9,10,11, 14,14,15, 6];
var ai7 = [8,8,9,9,9,10,11, 14,14,15, 7];
var ai8 = [8,8,9,9,9,10,11, 14,14,15, 8];
var ai9 = [8,8,9,9,9,10,11, 14,14,15, 9];
var ai10 = [8,8,9,9,9,10,11, 14,14,15, 17];
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

var myChart = new Chart("myChart", {
  type: "line",
    backgroundColor: 'rgba(251, 85, 85, 0.4)',
  data: {
    labels: xValues,
    datasets: [{
      label: 'ai1',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 0, 0)",
      borderColor: "rgb(255,0,0)",
      data: ai1,

    },
        {
      label: 'ai2',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 156, 0)",
      borderColor: "rgb(255, 156, 0)",
      data: ai2
    },
        {
      label:'ai3',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 255, 0)",
      borderColor: "rgb(255, 255, 0)",
      data: ai3
    },
        {
      label: 'ai4',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(215, 179, 104)",
      borderColor: "rgb(215, 179, 104)",
      data: ai4
    },           {
      label: 'ai5',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(156, 117, 154)",
      borderColor: "rgb(156, 117, 154)",
      data: ai5
    },           {
      label: 'ai6',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(0, 105, 65)",
      borderColor: "rgb(0, 105, 65)",
      data: ai6
    },           {
      label: 'ai7',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(119, 118, 231)",
      borderColor: "rgb(119, 118, 231)",
      data: ai7
    },           {
      label: 'ai8',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(178, 118, 231)",
      borderColor: "rgb(178, 118, 231)",
      data: ai8
    },           {
      label: 'ai9',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(167, 184, 136)",
      borderColor: "rgb(167, 184, 136)",
      data: ai9
    },           {
      label: 'ai10',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(0,0,255)",
      borderColor: "rgb(0,0,255)",
      data: ai10
    },]
  },
  options: {
    legend: {display: true},
    scales: {
      yAxes: [{ticks: {min: 0, max:50}, gridLines: {
                display: true
              }}],
      xAxes: [{ticks: {min: 6, max:600}, gridLines: {
                display: false
              }}],


    }
  }
});

function updatechart(chart, labels, ai1, ai2, ai3, ai4, ai5, ai6, ai7, ai8, ai9, ai10) {
    chart.data.labels = labels
    chart.data.datasets = [{
      label: 'ai1',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 0, 0)",
      borderColor: "rgb(255,0,0)",
      data: ai1,

    },
        {
      label: 'ai2',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 156, 0)",
      borderColor: "rgb(255, 156, 0)",
      data: ai2
    },
        {
      label:'ai3',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 255, 0)",
      borderColor: "rgb(255, 255, 0)",
      data: ai3
    },
        {
      label: 'ai4',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(215, 179, 104)",
      borderColor: "rgb(215, 179, 104)",
      data: ai4
    },           {
      label: 'ai5',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(156, 117, 154)",
      borderColor: "rgb(156, 117, 154)",
      data: ai5
    },           {
      label: 'ai6',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(0, 105, 65)",
      borderColor: "rgb(0, 105, 65)",
      data: ai6
    },           {
      label: 'ai7',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(119, 118, 231)",
      borderColor: "rgb(119, 118, 231)",
      data: ai7
    },           {
      label: 'ai8',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(178, 118, 231)",
      borderColor: "rgb(178, 118, 231)",
      data: ai8
    },           {
      label: 'ai9',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(167, 184, 136)",
      borderColor: "rgb(167, 184, 136)",
      data: ai9
    },           {
      label: 'ai10',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(0,0,255)",
      borderColor: "rgb(0,0,255)",
      data: ai10
    },];
    chart.update();
}


function getStatus(taskID) {
  $.ajax({
    url: `chart/`,
    method: 'GET'
  })
                        .done((res) => {
                            // alert(res.ai2);
                            // alert(ai2);
updatechart(myChart, res.values, res.ai1, res.ai2, res.ai3, res.ai4, res.ai5, res.ai6, res.ai7, res.ai8, res.ai9, res.ai10);
setTimeout(function() {
getStatus(res.task_id);
}, 30000);
})
  .fail((err) => {
    console.log(err)
  });
}
getStatus(1)
