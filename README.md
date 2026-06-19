# 🧪 MedLab — Laboratory Information System (LIS) Dashboard

A complete, single-page **Medical Laboratory Information System dashboard** built entirely with vanilla HTML, CSS, and JavaScript. It simulates a real hospital lab's daily workflow — from sample collection to test results, imaging, reports, and critical alerts — all in a clean, dark-themed UI with live charts.

No backend, no database, no build tools — just open `index.html` and the whole lab is in front of you.

---

## 📑 Table of Contents

- [Features](#-features)
- [Pages / Modules](#-pages--modules)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [How It Works](#️-how-it-works)
- [Customization](#-customization)
- [Roadmap Ideas](#-roadmap-ideas)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🟢 **Live system status bar** — "System Online" badge, real-time clock, Lab ID
- 🧭 **7-tab navigation** — Overview, Patients, Sample Collection, Test Results, Imaging, Reports, Alerts
- 📊 **Interactive Chart.js visualizations** — bar, doughnut, and line charts, lazily built only when a tab is first opened (for performance)
- 🩻 **Custom Canvas-based imaging viewer** — renders synthetic X-Ray, MRI, CT, Echo, Bone Scan & Ultrasound images entirely in JS (no image files needed)
- 🚨 **Color-coded critical alert system** — Critical / Warning / Info / Resolved, with patient-specific clinical alerts
- 📋 **Realistic clinical data** — reference ranges, abnormal flags (High/Low/Critical), turnaround times, equipment status
- 📱 Clean, responsive, dark dashboard UI

---

## 🧭 Pages / Modules

### 1. Overview
- 4 key metric cards: Today's Samples, Pending Results, Critical Alerts, Imaging Queue
- **Tests by Department** bar chart & **Sample Status Distribution** doughnut chart
- **Turnaround Time** progress bars per department (Haematology, Biochemistry, Microbiology, Serology, Histopathology)
- **Weekly Sample Trend** line chart
- **Equipment Status** list (Online / Maintenance / Offline) for analysers, scanners, PCR machine

### 2. Patients
- Patient header card with avatar, MRN, demographics, ward, and admitting doctor
- **Active Test Orders** table with live status (Resulted / Processing / Incubating / Queued)
- **Patient Summary** — chief complaint, diagnosis, allergies, vitals (BP, Temp, Pulse, SpO2)
- **Recent Patients** table across multiple MRNs and statuses

### 3. Sample Collection
- 4 metric cards: Collected Today, Pending Collection, Rejected Samples, Barcode Printed
- **8-step guided collection workflow** (Order verified → Barcode → ID confirmation → Venepuncture → Transport → Lab receipt → Analysis → Authorisation) with per-step timestamps and status (done / active / pending)
- **Sample Types breakdown** (EDTA, SST, Urine, Swab, CSF, Biopsy) with daily counts
- **Rejection Reasons** log (haemolysed, mislabelled, insufficient volume)

### 4. Test Results
- **CBC panel** with reference ranges and High/Low/Critical flags
- **Liver Function Tests (LFTs)** panel
- **WBC Count Trend** line chart
- **Urine Routine** examination results
- **Blood Culture** incubation status

### 5. Imaging (X-Ray / MRI / CT)
- 4 metric cards: X-Ray, MRI, CT, Ultrasound counts for the day
- Interactive **study selector** — switch between Chest X-Ray, MRI Brain, CT Abdomen, Echo (2D), Bone Scan, and Ultrasound Abdomen
- Each modality is **procedurally drawn on an HTML5 `<canvas>`** with a distinct visual style
- **Imaging Queue** table with priority (Urgent/High/Routine) and scan status

### 6. Reports
- 3 metric cards: Reports Generated, Awaiting Authorisation, Dispatched to Clinician
- Full **lab report layout**: patient/specimen details, critical values flagged, pathologist's comment
- Report actions: Authorise, Print PDF, Send to Clinician (UI only)
- **Monthly Report Summary** bar chart + **Top Tests This Month** ranking

### 7. Alerts
- 4 metric cards: Critical, Warnings, Info, Resolved Today
- Color-coded **Active Alerts** feed — critical lab values (e.g. CSF glucose, hyperkalaemia, troponin), equipment failures, sample rejections, and resolved/info notices, each with a timestamp

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Structure   | HTML5                                |
| Styling     | CSS3 (custom, dark theme)            |
| Logic       | Vanilla JavaScript (ES6, no framework) |
| Charts      | [Chart.js 4.4.1](https://www.chartjs.org/) (via CDN) |
| Imaging     | HTML5 `<canvas>` (procedural 2D drawing) |

No npm, no bundler, no dependencies to install.

---

## 🚀 Getting Started

### Option 1 — Just open it
Download or clone the repo, then double-click `index.html` (or open it in your browser).

### Option 2 — Clone via Git
```bash
git clone https://github.com/<your-username>/medlab.git
cd medlab
```
Open `index.html` directly, or serve it locally for best results:

```bash
# Python 3
python -m http.server 8000

# Node (with npx)
npx serve .
```
Then visit `http://localhost:8000`.

> ℹ️ Requires an internet connection on first load, since Chart.js is loaded from a CDN (`cdnjs.cloudflare.com`).

---

## 📁 Project Structure

```
medlab/
├── index.html          # Main dashboard — all 7 sections/tabs
├── css/
│   └── style.css       # Dark theme, cards, tables, charts, badges, alerts
├── js/
│   ├── main.js          # Tab switching (sw()), live clock, lazy chart init
│   ├── charts.js         # Chart.js setup: dept/status/trend/wbc/month charts
│   └── imaging.js        # Canvas drawing logic for each imaging modality
└── README.md
```

---

## ⚙️ How It Works

- **Navigation:** `sw(name, el)` in `main.js` toggles `.sec` (section) and `.nb` (nav button) classes to show/hide tabs — a simple SPA-style tab system, no routing library needed.
- **Lazy chart building:** Charts for Overview, Results, Reports, and Imaging are only built the *first time* their tab is opened (tracked via the `_built` flag object), keeping initial load fast.
- **Live clock:** Updates every second via `setInterval`, shown as a pill badge in the top bar.
- **Imaging viewer:** `setImg(type, el)` switches the selected modality button and calls `drawImg(type)`, which procedurally renders that scan type directly onto a `<canvas id="imgCanvas">` — no actual medical images are used or required.
- **Static demo data:** All patient names, MRNs, lab values, and alerts are hardcoded sample data for demonstration purposes — not connected to any real database or API.

---

## 🎨 Customization

- **Theme colors:** edit CSS variables / classes in `css/style.css` (status colors like `.dot-g` (green/online), `.dot-a` (amber/warning), `.dot-r` (red/critical) are reused across Overview, Alerts, and Collection).
- **Add a new tab:** add a `<button class="nb" onclick="sw('yourtab', this)">` in the nav, a matching `<div class="sec" id="s-yourtab">`, and (optionally) a build function in `charts.js` hooked into `sw()` in `main.js`.
- **Replace demo data:** all patient/test/alert data lives directly in `index.html` — swap it for real or mock API data as needed.

---

## 🗺️ Roadmap Ideas

This project is a front-end demo/UI shell. Potential next steps if extending it:
- [ ] Connect to a real backend/API for live patient & test data
- [ ] Add authentication & role-based access (lab tech, pathologist, clinician)
- [ ] Persist data with a database instead of hardcoded HTML
- [ ] Make tables sortable/filterable/searchable
- [ ] Export real PDF reports (e.g. via `jsPDF`)
- [ ] Responsive/mobile-first layout pass

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

No license has been specified yet for this project. Add a `LICENSE` file (e.g. MIT) if you intend for others to freely reuse this code.

---

## 👤 Developed By

**MedLab LIS** · BHW-2026
