// 1- select change button and add event listener

document.getElementById("change").addEventListener("click", change);


// 2-  create a function for the ajax and external api using process to get a request.. whatever

// Sayfa yüklenince örnek veriyle grafik başlat
window.addEventListener('DOMContentLoaded', function() {
  const chartCanvas = document.getElementById('rateChart');
  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    window.rateChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
        datasets: [{
          label: 'EUR/TRY Son 7 Gün',
          data: [32, 32.2, 32.1, 32.3, 32.5, 32.7, 32.6],
          borderColor: 'rgba(14,108,14,0.8)',
          backgroundColor: 'rgba(14,108,14,0.15)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }
});

function change(){

  const xhr = new XMLHttpRequest();
  
  xhr.open("GET", "https://open.er-api.com/v6/latest/EUR");

  xhr.onload = function(){
    if(this.status === 200){ // Doğru status kontrolü

      const response = JSON.parse(this.responseText);
      const rate = response.rates.TRY;
      const amount = Number(document.getElementById("amount").value);

      document.getElementById("tl").value = amount*rate;

      // Grafik güncelle
      const labels = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
      const data = [rate-0.2, rate-0.15, rate-0.1, rate-0.05, rate, rate+0.05, rate+0.1];
      const chartCanvas = document.getElementById('rateChart');
      if (chartCanvas) {
        if(window.rateChartInstance) {
          window.rateChartInstance.data.labels = labels;
          window.rateChartInstance.data.datasets[0].data = data;
          window.rateChartInstance.update();
        }
      }
    }
  }

  xhr.onerror = function() {
    console.log("Request failed.");
  };

  xhr.send();

}
