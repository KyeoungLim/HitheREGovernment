// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Agriculture", "Construction", "Manufacturing", "Fishery", "Service"],
    datasets: [{
      label: "Minimum Salary",
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Red
        'rgba(54, 162, 235, 0.5)', // Blue
        'rgba(255, 206, 86, 0.5)', // Yellow
        'rgba(75, 192, 192, 0.5)', // Green
        'rgba(33, 28, 106, 0.5)' // Purple
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', // Red
        'rgba(54, 162, 235, 1)', // Blue
        'rgba(255, 206, 86, 1)', // Yellow
        'rgba(75, 192, 192, 1)', // Green
        'rgba(33, 28, 106, 1)' // Purple
      ],
      borderWidth: 1,
      data: [1810238, 1807341, 1831869, 1833621, 1200000],
    },
    {
      label: "Average Salary",
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', // Red
        'rgba(54, 162, 235, 0.5)', // Blue
        'rgba(255, 206, 86, 0.5)', // Yellow
        'rgba(75, 192, 192, 0.5)', // Green
        'rgba(33, 28, 106, 0.5)' // Purple
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', // Red
        'rgba(54, 162, 235, 1)', // Blue
        'rgba(255, 206, 86, 1)', // Yellow
        'rgba(75, 192, 192, 1)', // Green
        'rgba(33, 28, 106, 1)' // Purple
      ],
      borderWidth: 1,
      data: [1874491, 2041839, 2123833, 2226216, 1935797],
    }]
  },

  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 2500000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
