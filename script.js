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
document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("✨ Futuristic visuals init: start");

    /* ---------- Scanner Line ---------- */
    const scanner = document.createElement("div");
    scanner.className = "scanner";
    document.body.appendChild(scanner);

    /* ---------- DNA Container + Strands ---------- */
    const dna = document.createElement("div");
    dna.className = "dna-container";
    document.body.appendChild(dna);

    const strandCount = 24;
    for (let i = 0; i < strandCount; i++) {
      const s = document.createElement("div");
      s.className = "dna-strand";
      // distribute across viewport with slight offset
      s.style.left = `${(i / strandCount) * 100 + (Math.random() * 2 - 1)}%`;
      s.style.height = `${80 + Math.random() * 40}vh`;
      s.style.opacity = 0.25 + Math.random() * 0.2;
      s.style.animationDelay = `${(Math.random() * 3).toFixed(2)}s`;
      dna.appendChild(s);
    }
    console.log("✨ DNA strands created:", strandCount);

    /* ---------- Brain Hologram ---------- */
    const brain = document.createElement("div");
    brain.className = "brain-hologram";
    document.body.appendChild(brain);
    console.log("✨ Brain hologram created");

    /* ---------- Particles (floating dots) ---------- */
    const partWrap = document.createElement("div");
    partWrap.className = "particles-fixed";
    document.body.appendChild(partWrap);

    const particleCount = 60;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "particle-dot";
      // place randomly inside viewport
      p.style.left = `${Math.random() * 100}vw`;
      p.style.top = `${Math.random() * 100}vh`;
      p.dataset.vx = (Math.random() * 0.4 - 0.2).toString();
      p.dataset.vy = (Math.random() * 0.4 - 0.2).toString();
      p.style.transform = `translate(0, 0)`;
      partWrap.appendChild(p);
      particles.push(p);
    }
    console.log("✨ Particles created:", particleCount);

    // animate particles gently
    function animateParticles() {
      for (const p of particles) {
        const vx = parseFloat(p.dataset.vx) || 0;
        const vy = parseFloat(p.dataset.vy) || 0;
        // apply small transform
        const curLeft = parseFloat(p.style.left) || 0;
        const curTop = parseFloat(p.style.top) || 0;
        // convert vw/vh to px motion by small offsets
        const nx = (curLeft + vx * 0.05);
        const ny = (curTop + vy * 0.05);
        // keep in range 0-100
        p.style.left = `${(nx + 100) % 100}vw`;
        p.style.top = `${(ny + 100) % 100}vh`;
        // subtle scale/pulse
        p.style.opacity = 0.6 + Math.abs(Math.sin(Date.now() / 1200 + vx * 10)) * 0.4;
      }
      requestAnimationFrame(animateParticles);
    }
    requestAnimationFrame(animateParticles);

    /* ---------- Cursor Glow ---------- */
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
      // hide if not moving rapidly
      glow.style.opacity = 1;
    });

    // optional: fade cursor glow when idle
    let idleTimer = null;
    window.addEventListener("mousemove", () => {
      clearTimeout(idleTimer);
      glow.style.opacity = "1";
      idleTimer = setTimeout(() => glow.style.opacity = "0.25", 1200);
    });

    console.log("✨ Cursor glow active");

    /* ---------- Safety: log final message ---------- */
    console.log("✨ Futuristic visuals init: done");

  } catch (err) {
    console.error("Visual init error:", err);
  }
});
