/* =========================================
   ELCO STUDIO — HOME PAGE SCRIPT
   Code card typing effect (subtle)
   ========================================= */

(function () {
  'use strict';

  // Blinking cursor at the end of last code line
  const lastLine = document.querySelector('.code-card .line:last-child');
  if (!lastLine) return;

  const cursor = document.createElement('span');
  cursor.textContent = '▍';
  cursor.style.cssText = `
    display: inline-block;
    margin-left: 4px;
    color: var(--point);
    animation: blink 1s steps(1) infinite;
  `;
  lastLine.appendChild(cursor);

  // inject keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      0%, 50% { opacity: 1; }
      50.01%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
})();
