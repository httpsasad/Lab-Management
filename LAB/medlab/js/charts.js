/* ==================== ALL CHART.JS CHARTS ==================== */

function buildOverviewCharts() {
  new Chart(document.getElementById('deptChart'), {
    type: 'bar',
    data: {
      labels: ['Haem','Biochem','Micro','Serology','Histopath','Radiology'],
      datasets: [{
        data: [52,44,18,14,7,22],
        backgroundColor: ['#378add','#1d9e75','#e24b4a','#7f77dd','#ba7517','#185fa5'],
        borderRadius: 4, borderSkipped: false
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { ticks: { font:{size:9} } }, x: { ticks: { font:{size:9} } } }
    }
  });

  new Chart(document.getElementById('statusChart'), {
    type: 'doughnut',
    data: {
      labels: ['Resulted','Processing','Pending','Critical','Rejected'],
      datasets: [{
        data: [89, 37, 14, 5, 4],
        backgroundColor: ['#1d9e75','#378add','#ba7517','#e24b4a','#7f77dd'],
        borderWidth: 2, borderColor: '#fff'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position:'right', labels:{ font:{size:9}, boxWidth:12 } } }
    }
  });

  new Chart(document.getElementById('trendChart'), {
    type: 'line',
    data: {
      labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets: [{
        label: 'Samples',
        data: [132,145,158,129,167,98,148],
        borderColor: '#378add', borderWidth: 2,
        pointRadius: 3, pointBackgroundColor: '#378add',
        fill: false, tension: 0.3
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { ticks: { font:{size:9} } }, x: { ticks: { font:{size:9} } } }
    }
  });
}

function buildResultCharts() {
  new Chart(document.getElementById('wbcChart'), {
    type: 'line',
    data: {
      labels: ['18 Apr','19 Apr','20 Apr','21 Apr','22 Apr'],
      datasets: [
        {
          label: 'WBC ×10³',
          data: [9.1,10.4,12.0,13.1,14.2],
          borderColor: '#e24b4a', borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: '#e24b4a',
          fill: false, tension: 0.3
        },
        {
          label: 'Normal upper limit',
          data: [11,11,11,11,11],
          borderColor: '#1d9e75', borderWidth: 1.5,
          borderDash: [5,3], pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels:{ font:{size:9}, boxWidth:12 } } },
      scales: { y: { min:7, ticks:{ font:{size:9} } }, x: { ticks:{ font:{size:9} } } }
    }
  });
}

function buildReportCharts() {
  new Chart(document.getElementById('monthChart'), {
    type: 'bar',
    data: {
      labels: ['January','February','March','April'],
      datasets: [
        { label: 'Haematology', data:[1820,1940,2010,1842], backgroundColor:'#378add', borderRadius:3 },
        { label: 'Biochemistry', data:[1540,1680,1720,1598], backgroundColor:'#1d9e75', borderRadius:3 },
        { label: 'Radiology',   data:[680, 710, 760, 720],  backgroundColor:'#7f77dd', borderRadius:3 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels:{ font:{size:9}, boxWidth:12 } } },
      scales: { x:{ ticks:{ font:{size:9} } }, y:{ ticks:{ font:{size:9} } } }
    }
  });
}

window.buildOverviewCharts = buildOverviewCharts;
window.buildResultCharts   = buildResultCharts;
window.buildReportCharts   = buildReportCharts;
