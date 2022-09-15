function chartPlot()
{
  var xValues = ["Ιδιοκτήτης", "Ενοικιαστής"];
  var yValues = [
    parseFloat(document.getElementById('tenant_cost').value),
    parseFloat(document.getElementById('owner_cost').value),
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