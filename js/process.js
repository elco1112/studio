/* =========================================
   ELCO STUDIO — PROCESS PAGE SCRIPT
   Timeline scroll progress + FAQ accordion
   ========================================= */

(function () {
  'use strict';

  /* ---- Timeline node activation + progress line ---- */
  const timeline = document.querySelector('.timeline');
  const nodes = document.querySelectorAll('.tl-node');

  if (timeline && nodes.length) {
    const updateTimeline = () => {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress of scroll through timeline
      const total = rect.height;
      const scrolled = Math.min(
        Math.max(vh / 2 - rect.top, 0),
        total
      );
      const pct = Math.min((scrolled / total) * 100, 100);
      timeline.style.setProperty('--progress', pct + '%');

      // activate nodes whose center has passed mid-viewport
      nodes.forEach((n) => {
        const nr = n.getBoundingClientRect();
        if (nr.top + nr.height / 2 < vh * 0.6) {
          n.classList.add('active');
        } else {
          n.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline);
    updateTimeline();
  }

  /* ---- FAQ accordion ---- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // optional: close others
      faqItems.forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();
