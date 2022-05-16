var ai1 = [];
var ai2 = [];
var ai3 = [];
var ai4 = [];
var ai5 = [];
var ai6 = [];
var ai7 = [];
var ai8 = [];
var ai9 = [];
var ai10 = [];
var xValues =  [];
var myChart = new Chart("myChart", {
  type: "line",

  data: {
    labels: xValues,
    pointHoverBackgroundColor: 'red',
    datasets: [
      {
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
      yAxes: [{ticks: {min: 0, max:60}, gridLines: {
                display: true
              }}],
      xAxes: [{ticks: {min: 0, max:600}, gridLines: {
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
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },
        {
      label: 'ai2',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 156, 0)",
      borderColor: "rgb(255, 156, 0)",
      data: ai2,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },
        {
      label:'ai3',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(255, 255, 0)",
      borderColor: "rgb(255, 255, 0)",
      data: ai3,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },
        {
      label: 'ai4',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(215, 179, 104)",
      borderColor: "rgb(215, 179, 104)",
      data: ai4,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',    },           {
      label: 'ai5',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(156, 117, 154)",
      borderColor: "rgb(156, 117, 154)",
      data: ai5,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },           {
      label: 'ai6',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(0, 105, 65)",
      borderColor: "rgb(0, 105, 65)",
      data: ai6,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },           {
      label: 'ai7',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(119, 118, 231)",
      borderColor: "rgb(119, 118, 231)",
      data: ai7,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },           {
      label: 'ai8',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(178, 118, 231)",
      borderColor: "rgb(178, 118, 231)",
      data: ai8,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },           {
      label: 'ai9',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(167, 184, 136)",
      borderColor: "rgb(167, 184, 136)",
      data: ai9,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },           {
      label: 'ai10',
      fill: false,
      lineTension: 0,
      backgroundColor: "rgb(0,0,255)",
      borderColor: "rgb(0,0,255)",
      data: ai10,
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
    },];
    chart.update();
}


function ajax_chart() {
    $.ajax({
    url: `/chart/`,
    method: 'GET'
  }).done((res) => {
updatechart(myChart, res.values, res.ai1, res.ai2, res.ai3, res.ai4, res.ai5, res.ai6, res.ai7, res.ai8, res.ai9, res.ai10);})
      .fail((err) => {
    console.log(err)
  });
};

function getStatus1() {
    ajax_chart();
setTimeout(function() {
getStatus1();
}, 60000);}
getStatus1()
