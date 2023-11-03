export const ChartData = {
    type: "line",
    data: {
      datasets: [
        {
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          color:"#36495d",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 0,
      fill: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default ChartData;