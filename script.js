// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Floating Particles
const particles = document.createElement("div");
particles.style.position = "fixed";
particles.style.inset = 0;
particles.style.pointerEvents = "none";
document.body.appendChild(particles);

for (let i = 0; i < 60; i++) {
  const dot = document.createElement("span");
  dot.style.position = "absolute";
  dot.style.width = "2px";
  dot.style.height = "2px";
  dot.style.background = "rgba(88,166,255,0.5)";
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.top = Math.random() * 100 + "vh";
  dot.style.boxShadow = "0 0 10px rgba(88,166,255,0.8)";
  dot.style.animation = `float ${6 + Math.random()*8}s linear infinite`;
  particles.appendChild(dot);
}

// Extra animation keyframes
const style = document.createElement("style");
style.textContent = `
@keyframes float {
  from { transform: translateY(0); opacity: 0.2; }
  to { transform: translateY(-100vh); opacity: 0.8; }
}`;
document.head.appendChild(style);