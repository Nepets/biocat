/* chart.js chart examples */

// chart colors
var colors = ['#198754','#e03848'];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 80, 
  legend: {position:'bottom', padding:0, labels: {pointStyle:'square', usePointStyle:true}}
};

// donut 1
var chDonutData1 = {
    labels: ['Completed', 'Incomplete'],
    datasets: [
      {
        backgroundColor: colors.slice(0,2),
        borderWidth: 0,
        data: [74, 23, ]
      }
    ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
      type: 'pie',
      data: chDonutData1,
      options: donutOptions
  });
}