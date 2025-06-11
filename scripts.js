// Fade-in animasyonları için örnek
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card, .project-card, .timeline li').forEach(el => observer.observe(el));


// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.skill-card, .project-card, .timeline li');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.3
  });

  fadeElements.forEach(el => observer.observe(el));
});
