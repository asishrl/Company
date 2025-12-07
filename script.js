// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
/* ===== 3D MOUSE TILT EFFECT ===== */

document.querySelectorAll('.tilt-container').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
  });
});

/* 3D FLOATING SCROLL EFFECT */

window.addEventListener("scroll", () => {
  document.querySelectorAll('.tilt-3d').forEach(el => {
    let offset = window.scrollY * 0.05;
    el.style.transform = `translateZ(${offset}px)`;
  });
});
