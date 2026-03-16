/* -------------------------------------------------------
   REGISTER PLUGINS
------------------------------------------------------- */
gsap.registerPlugin(ScrollTrigger);


/* -------------------------------------------------------
   HERO FADE + SLIDE
------------------------------------------------------- */
gsap.to(".hero-inner", {
  opacity: 0,
  y: -40,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});


/* -------------------------------------------------------
   HORIZONTAL SCROLL GALLERY (DESKTOP)
------------------------------------------------------- */

const track = document.querySelector(".h-scroll-track");

if (track) {

  const trackWidth = track.scrollWidth;
  const viewportWidth = window.innerWidth;

  /* MAIN HORIZONTAL SCROLL ANIMATION */
  const horizontalScroll = gsap.to(track, {
    id: "horizontal",   // IMPORTANT: gives ScrollTrigger an ID
    x: () => -(trackWidth - viewportWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-gallery",
      start: "top top",
      end: () => "+=" + (trackWidth - viewportWidth),
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  });

  /* FOCUS SCALE + OPACITY */
  document.querySelectorAll(".project").forEach((proj) => {
    gsap.to(proj, {
      scale: 1.15,
      opacity: 1,
      scrollTrigger: {
        trigger: proj,
        containerAnimation: horizontalScroll,  // CORRECT LINK
        start: "center center",
        end: "center center",
        toggleActions: "play reverse play reverse"
      }
    });
  });
}


/* -------------------------------------------------------
   MOBILE FALLBACK — VERTICAL PARALLAX
------------------------------------------------------- */

if (window.innerWidth < 900) {
  document.querySelectorAll(".project img").forEach((img) => {
    gsap.to(img, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}


/* -------------------------------------------------------
   CASE STUDY PAGE ANIMATIONS
------------------------------------------------------- */

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
