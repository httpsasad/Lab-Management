/* ==================== MAIN APPLICATION JS ==================== */

const _built = { overview: false, results: false, reports: false, imaging: false };

function sw(name, el) {
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('on'));
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('on'));
  document.getElementById('s-' + name).classList.add('on');
  el.classList.add('on');

  if (name === 'overview' && !_built.overview) {
    buildOverviewCharts();
    _built.overview = true;
  }
  if (name === 'results' && !_built.results) {
    buildResultCharts();
    _built.results = true;
  }
  if (name === 'reports' && !_built.reports) {
    buildReportCharts();
    _built.reports = true;
  }
  if (name === 'imaging' && !_built.imaging) {
    drawImg('xray');
    _built.imaging = true;
  }
}

/* Live clock */
function updateClock() {
  const el = document.getElementById('clk');
  if (el) el.textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

/* Init on page load */
window.addEventListener('DOMContentLoaded', () => {
  buildOverviewCharts();
  _built.overview = true;
});
