/* =========================================
   ELCO STUDIO — ABOUT PAGE SCRIPT
   Parallax on big bracket visual
   ========================================= */

(function () {
  'use strict';

  const bracket = document.querySelector('.naming-visual .big-bracket');
  if (!bracket) return;

  const onMove = (e) => {
    const rect = bracket.parentElement.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    bracket.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  };
  const reset = () => {
    bracket.style.transform = 'translate(0, 0)';
  };
  const parent = bracket.parentElement;
  parent.addEventListener('mousemove', onMove);
  parent.addEventListener('mouseleave', reset);
  bracket.style.transition = 'transform .2s var(--ease)';
})();
