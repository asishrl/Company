=// Smooth scroll for internal links
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
// ===== CURSOR GLOW EFFECT =====
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// ===== 3D TILT EFFECT =====
document.querySelectorAll('.glass').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      rotateY(${x * 10}deg)
      rotateX(${-y * 10}deg)
      translateY(-6px)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  });
});

// ===== MAGNETIC NAV LINKS =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    link.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translate(0,0)";
  });
});
// ===== SCI-FI SCANNER LINE =====
const scanner = document.createElement("div");
scanner.className = "scanner";
document.body.appendChild(scanner);

// ===== FAKE AI DATA TERMINAL TEXT EFFECT =====
document.querySelectorAll("p, li").forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.dataset.text = el.innerText;
    let i = 0;
    const scramble = setInterval(() => {
      el.innerText = el.dataset.text
        .split("")
        .map((char, idx) =>
          idx < i ? char : "█▓▒░"[Math.floor(Math.random() * 4)]
        )
        .join("");
      i++;
      if (i > el.dataset.text.length) clearInterval(scramble);
    }, 20);
  });
});