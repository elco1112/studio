/* =========================================
   ELCO STUDIO — CLIENTS PAGE SCRIPT
   Subtle hover interactions on positioning chart
   ========================================= */

(function () {
  'use strict';

  /* ---- Position chart: connect line between Elco and hovered competitor ---- */
  const chart = document.querySelector('.position-chart');
  const us = document.querySelector('.plot-point.us');
  const points = document.querySelectorAll('.plot-point:not(.us)');

  if (chart && us && points.length) {
    // create an SVG overlay for connecting line
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('style', 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;');
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('stroke', '#2ECC71');
    line.setAttribute('stroke-width', '1.5');
    line.setAttribute('stroke-dasharray', '4 4');
    line.setAttribute('opacity', '0');
    line.style.transition = 'opacity .25s ease';
    svg.appendChild(line);
    chart.appendChild(svg);

    const getCenter = (el) => {
      const r = el.getBoundingClientRect();
      const cr = chart.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - cr.left,
        y: r.top + r.height / 2 - cr.top,
      };
    };

    points.forEach((p) => {
      p.addEventListener('mouseenter', () => {
        const a = getCenter(us);
        const b = getCenter(p);
        line.setAttribute('x1', a.x);
        line.setAttribute('y1', a.y);
        line.setAttribute('x2', b.x);
        line.setAttribute('y2', b.y);
        line.setAttribute('opacity', '0.6');
      });
      p.addEventListener('mouseleave', () => {
        line.setAttribute('opacity', '0');
      });
    });
  }

  /* ---- Match finder cards: click → scroll to matching segment ---- */
  document.querySelectorAll('.match-card[data-target]').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-target');
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
