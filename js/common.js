/* =========================================
   ELCO STUDIO — COMMON SCRIPT
   Reveal on scroll, smooth scroll,
   mobile nav drawer, active link
   ========================================= */

(function () {
  'use strict';

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---- Smooth scroll for same-page anchors only ---- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close drawer if open
          const drawer = document.querySelector('.nav-drawer');
          if (drawer) drawer.classList.remove('open');
        }
      }
    });
  });

  /* ---- Mobile nav drawer ---- */
  const burger = document.querySelector('.nav-burger');
  const drawer = document.querySelector('.nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  /* ---- Active link highlighting based on pathname ---- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .nav-drawer a').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (
      href === path ||
      (path === '' && href === 'index.html') ||
      (path === 'index.html' && href === 'index.html')
    ) {
      a.classList.add('active');
    }
  });

  /* ---- Nav shadow on scroll ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        nav.style.background = 'rgba(10,10,10,0.92)';
        nav.style.boxShadow = '0 6px 24px -10px rgba(0,0,0,0.3)';
      } else {
        nav.style.background = 'rgba(14,14,14,0.85)';
        nav.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
