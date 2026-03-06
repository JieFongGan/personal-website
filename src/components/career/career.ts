import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCareer() {
  const careerSection = document.getElementById("career");
  if (!careerSection) return;

  // Cleanup to prevent duplicate triggers on page-load
  ScrollTrigger.getAll().forEach(t => {
    if (t.trigger === careerSection || (t.trigger as HTMLElement)?.classList?.contains('career-item')) {
      t.kill();
    }
  });

  // 1. Reveal Header
  gsap.from(".career-title", {
    scrollTrigger: {
      trigger: ".career-title",
      start: "top 90%",
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out"
  });

  // 2. Reveal List Items sequentially
  const careerItems = document.querySelectorAll(".career-item");
  
  careerItems.forEach((item) => {
    // Target all animatable children inside the item
    const elements = item.querySelectorAll(".career-element, .career-skill");
    
    // Set initial state
    gsap.set(elements, { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: item,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.08, // Tight stagger for a snappy feel
          duration: 1,
          ease: "power3.out",
          clearProps: "all" // Cleans up styles after animation
        });
      }
    });
  });

  setupCareerHovers();
}

function setupCareerHovers() {
  const orgLinks = document.querySelectorAll(".career-org-link");
  
  orgLinks.forEach((link) => {
    const arrow = link.querySelector(".org-arrow");
    if (!arrow) return;

    link.addEventListener("mouseenter", () => {
      gsap.to(arrow, { x: 3, y: -3, duration: 0.3, ease: "power2.out" });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}