/* ==================== IMAGING VIEWER ==================== */

const imgData = {
  xray: {
    title: 'Chest X-Ray PA — Ahmed Farooq · 22 Apr 2026 · DR Machine 1',
    note: 'Impression: Mild perihilar haziness bilateral. No pneumothorax. Cardiomegaly borderline. Reported by: Dr. Naila Chaudhry, Radiologist.',
    bg: '#1a2236', grid: '#2a3a52', fg: '#c8d8f0',
    draw(ctx, W, H) {
      ctx.strokeStyle = this.fg; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.ellipse(W/2, H/2+10, 105, 85, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2-65, H/2-10, 58, 68, 0.2, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2+65, H/2-10, 58, 68, -0.2, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(W/2, H/2-85); ctx.lineTo(W/2, H/2-30); ctx.stroke();
      for (let i = -4; i <= 4; i++) {
        ctx.beginPath(); ctx.moveTo(W/2-12, H/2-70+i*12); ctx.lineTo(W/2+12, H/2-70+i*12); ctx.stroke();
      }
      ctx.globalAlpha = 0.18; ctx.fillStyle = '#c8d8f0';
      ctx.beginPath(); ctx.ellipse(W/2, H/2+5, 50, 42, 0, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
    }
  },
  mri: {
    title: 'MRI Brain (T2 Axial) — Ahmed Farooq · Queued · 1.5T Scanner',
    note: 'Study not yet acquired. Scanner under maintenance — available post-maintenance at 14:00. Provisional scheduling confirmed.',
    bg: '#1a1a2e', grid: '#2a2a42', fg: '#b0c4de',
    draw(ctx, W, H) {
      ctx.strokeStyle = this.fg; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.ellipse(W/2, H/2, 92, 78, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2, H/2, 62, 52, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2, H/2-12, 32, 30, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2-22, H/2+8, 14, 12, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2+22, H/2+8, 14, 12, 0, 0, Math.PI*2); ctx.stroke();
      ctx.globalAlpha = 0.2; ctx.fillStyle = '#ff8888';
      ctx.beginPath(); ctx.ellipse(W/2+22, H/2+5, 12, 10, 0.4, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = '#ff6b6b'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(W/2+10, H/2-5); ctx.lineTo(W/2+40, H/2-30); ctx.stroke();
      ctx.fillStyle = '#ff6b6b'; ctx.font = '9px monospace';
      ctx.fillText('Suspicious area', W/2+42, H/2-28);
    }
  },
  ct: {
    title: 'CT Abdomen (Axial) — Nadia Pervez · 22 Apr 2026 · CT 64-slice',
    note: 'Impression: No free fluid. Liver, spleen, kidneys within normal limits. Small mesenteric lymph nodes noted. Reported by: Dr. Faizan Mirza, Radiologist.',
    bg: '#1e1c1a', grid: '#2e2c28', fg: '#d4c8a0',
    draw(ctx, W, H) {
      ctx.strokeStyle = this.fg; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.ellipse(W/2, H/2, 115, 82, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2-32, H/2-5, 30, 24, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2+32, H/2-5, 30, 24, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2-65, H/2-8, 20, 22, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2+65, H/2-8, 20, 22, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2, H/2+20, 16, 12, 0, 0, Math.PI*2); ctx.stroke();
      ctx.fillStyle = this.fg; ctx.globalAlpha = 0.08;
      ctx.beginPath(); ctx.ellipse(W/2-32, H/2-5, 30, 24, 0, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
    }
  },
  eco: {
    title: 'Echocardiogram 2D — Bilal Siddiqui · 22 Apr 2026 · Echo Lab',
    note: 'EF: 38% (Reduced). Anterior wall hypokinesia. LAD territory ischaemia suggested. Urgent cardiology review. Reported by: Dr. Asim Baig, Cardiologist.',
    bg: '#0d2818', grid: '#1a3a28', fg: '#7ecfa0',
    draw(ctx, W, H) {
      ctx.strokeStyle = this.fg; ctx.lineWidth = 1.2;
      for (let i = 0; i < 7; i++) {
        const r = 28 + i*22;
        ctx.beginPath(); ctx.arc(W/5, H-15, r, -Math.PI*0.75, -Math.PI*0.05); ctx.stroke();
      }
      ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 1.5;
      ctx.beginPath(); let pv = H/2+10;
      for (let x = W/5; x < W-20; x += 2) {
        const offset = x - W/5;
        const y = pv + (Math.random()-0.48)*6 + (offset>180&&offset<230?-22:offset>230&&offset<255?30:0);
        if (x === W/5) ctx.moveTo(x, y); else ctx.lineTo(x, Math.max(10, Math.min(H-10, y)));
        pv = y;
      }
      ctx.stroke();
      ctx.fillStyle = '#4ade80'; ctx.font = '9px monospace';
      ctx.fillText('EF: 38%', W-70, 20);
      ctx.fillStyle = '#ff6b6b';
      ctx.fillText('Hypokinesia', W-80, 35);
    }
  },
  bone: {
    title: 'Whole Body Bone Scan (Tc-99m) — Hina Bashir · 21 Apr 2026',
    note: 'Increased uptake right femur and L3 vertebra. Bony metastases cannot be excluded. Correlate with MRI. Reported by: Dr. Sara Raza, Nuclear Medicine.',
    bg: '#1e1a2e', grid: '#2e2a42', fg: '#b8a8e0',
    draw(ctx, W, H) {
      ctx.strokeStyle = this.fg; ctx.lineWidth = 1.5;
      const cx = W/2;
      ctx.beginPath(); ctx.ellipse(cx, 48, 28, 38, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, 86); ctx.lineTo(cx, H-55); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, 108); ctx.lineTo(cx-58, 158); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, 108); ctx.lineTo(cx+58, 158); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(cx-58, 178, 16, 22, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(cx+58, 178, 16, 22, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx-58, 200); ctx.lineTo(cx-50, H-10); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx+58, 200); ctx.lineTo(cx+50, H-10); ctx.stroke();
      ctx.fillStyle = '#ff6b6b'; ctx.globalAlpha = 0.7;
      ctx.beginPath(); ctx.arc(cx+58, 172, 9, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx, H-58, 8, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ff6b6b'; ctx.font = '9px monospace';
      ctx.fillText('Hot spot', cx+70, 172);
      ctx.fillText('L3 uptake', cx+12, H-55);
    }
  },
  us: {
    title: 'Ultrasound Abdomen — Fareeha Yousaf · 22 Apr 2026 · USG Unit 2',
    note: 'Liver mildly echogenic. Gallbladder: 2 calculi, largest 8mm. CBD 4mm. Both kidneys normal. No free fluid. Reported by: Dr. Jawad Butt, Radiologist.',
    bg: '#0a1a2a', grid: '#1a2a3a', fg: '#8ab4d4',
    draw(ctx, W, H) {
      ctx.strokeStyle = this.fg; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.ellipse(W/2, H/2, 125, 68, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2-12, H/2-12, 38, 30, 0.2, 0, Math.PI*2); ctx.stroke();
      ctx.fillStyle = this.fg; ctx.globalAlpha = 0.1;
      ctx.beginPath(); ctx.ellipse(W/2-12, H/2-12, 38, 30, 0.2, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.ellipse(W/2+58, H/2+8, 21, 18, 0, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(W/2-58, H/2+8, 21, 18, 0, 0, Math.PI*2); ctx.stroke();
      ctx.fillStyle = '#ffffff'; ctx.globalAlpha = 0.8;
      ctx.beginPath(); ctx.arc(W/2-18, H/2-8, 4, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(W/2-10, H/2-14, 3, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = this.fg; ctx.font = '9px monospace';
      ctx.fillText('Calculi', W/2-12, H/2+18);
    }
  }
};

function drawImg(key) {
  const d = imgData[key];
  const c = document.getElementById('imgCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const W = c.width, H = c.height;

  ctx.fillStyle = d.bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = d.grid; ctx.lineWidth = 0.5;
  for (let x = 0; x < W; x += 36) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y < H; y += 36) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  d.draw(ctx, W, H);

  ctx.fillStyle = d.fg; ctx.globalAlpha = 0.55; ctx.font = '10px monospace';
  ctx.fillText(d.title.split('—')[0].trim(), 8, 16);
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#e24b4a'; ctx.font = '9px monospace';
  ctx.fillText('MedLab · BHW-2026 · CONFIDENTIAL', W-200, H-6);

  document.getElementById('imgInfo').textContent = d.note;
}

function setImg(key, btn) {
  document.querySelectorAll('.img-sel').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  drawImg(key);
}

window.drawImg = drawImg;
window.setImg = setImg;
