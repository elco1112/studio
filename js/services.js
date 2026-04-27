/* =========================================
   ELCO STUDIO — SERVICES PAGE SCRIPT
   Sticky service-nav active state highlighting
   based on currently visible service section
   ========================================= */

(function () {
  'use strict';

  const navLinks = document.querySelectorAll('.svc-nav-strip a');
  const sections = document.querySelectorAll('.svc-detail[id]');
  if (!navLinks.length || !sections.length) return;

  const setActive = (id) => {
    navLinks.forEach((a) => {
      const href = a.getAttribute('href');
      if (href === '#' + id) a.classList.add('active');
      else a.classList.remove('active');
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      // pick the section with greatest intersection ratio
      let best = null;
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
      });
      if (best) setActive(best.target.id);
    },
    { rootMargin: '-160px 0px -50% 0px', threshold: [0.1, 0.3, 0.5] }
  );
  sections.forEach((s) => io.observe(s));
})();
