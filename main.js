// GSAP basic fade-in + scroll animations
gsap.registerPlugin(ScrollTrigger);

// Hero fade-in
gsap.from(".hero", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out"
});

// Homepage gallery items
gsap.utils.toArray(".gallery .project").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: i * 0.03,
    ease: "power2.out"
  });
});

// Case study sections
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power2.out"
  });
});

// Full-width images
gsap.utils.toArray(".full-image img").forEach((img) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 90%",
    },
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: "power2.out"
  });
});
