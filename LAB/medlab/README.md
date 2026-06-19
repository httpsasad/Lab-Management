# MedLab — Laboratory Information System Dashboard

A fully professional Medical Lab Dashboard with:

- Overview with live stats, charts, equipment status
- Patient management with MRN, vitals, test orders
- Sample Collection 8-step workflow
- Test Results: CBC, LFTs, Urine, Blood Culture with reference ranges
- Imaging Viewer: X-Ray, MRI Brain, CT, Echo, Bone Scan, Ultrasound
- Lab Reports with pathologist comments
- Critical Alerts system

## How to Run

Simply open `index.html` in any modern web browser.
No server or installation required.

## File Structure

```
medlab/
├── index.html          ← Main dashboard
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── main.js         ← Navigation & init
│   ├── charts.js       ← Chart.js charts
│   └── imaging.js      ← Canvas imaging viewer
└── README.md
```

## Technologies Used

- HTML5, CSS3, Vanilla JavaScript
- Chart.js 4.4.1 (via CDN)
- HTML5 Canvas (for imaging viewer)

## Developed by

MedLab LIS · BHW-2026
