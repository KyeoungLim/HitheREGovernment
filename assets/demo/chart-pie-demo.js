// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Complaints", "Job Information", "Language", "Life Information", "Labor Law Information"],
    datasets: [{
      data: [47.1, 24.8, 14.6, 9, 4.5],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', "#9966FF"],
    }],
  },
});
