/**
 * It takes the values from the input fields, converts them to numbers, and then plots them on a pie
 * chart.
 */
function chartPlot()
{
  var xValues = ["Ιδιοκτήτης", "Ενοικιαστής"];
  var yValues = [
    parseFloat(document.getElementById('owner_cost').value),
    parseFloat(document.getElementById('tenant_cost').value)
  ];
  var barColors = [
    "#b91d47",
    "#00aba9"
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: false,
        text: "Oil Cost distribution"
      }
    }
  });
}