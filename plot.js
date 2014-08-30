var Plot = function() {
    _.bindAll(this, 'updateChart', 'plotChart');
};

Plot.prototype.plotChart = function() {
  var data = {
    labels: [1, 2, 3, 3, 4, 5, 6],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
  this.counter = 6;
  var ctx = $("#chart").get(0).getContext("2d");
  this.chart = new Chart(ctx).Line(data);
  window.setTimeout(this.updateChart, 1000);
};

Plot.prototype.updateChart = function() {
  this.counter = this.counter + 1;
  this.chart.addData([_.random(10,100), _.random(10,100)], this.counter);
  if(this.counter > 10) {
    this.chart.removeData();
  }
  window.setTimeout(this.updateChart, 1000);
};

var plot = new Plot();
plot.plotChart();
