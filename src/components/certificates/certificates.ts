import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCertificates() {
  const certSection = document.getElementById("certificates");
  if (!certSection) return;

  // Cleanup to prevent duplicate triggers on page-load
  ScrollTrigger.getAll().forEach(t => {
    if (t.trigger === certSection || (t.trigger as HTMLElement)?.classList?.contains('cert-item')) {
      t.kill();
    }
  });

  // 1. Reveal Header
  gsap.from(".cert-title", {
    scrollTrigger: {
      trigger: ".cert-title",
      start: "top 90%",
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out"
  });

  // 2. Reveal each certificate item
  const certItems = document.querySelectorAll(".cert-item");
  certItems.forEach((item) => {
    const elements = item.querySelectorAll(".cert-element");
    gsap.set(elements, { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: item,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 1,
          ease: "power3.out",
          clearProps: "all"
        });
      }
    });
  });

  setupCertHovers();
}

function setupCertHovers() {
  const issuerLinks = document.querySelectorAll(".cert-issuer-link");

  issuerLinks.forEach((link) => {
    const arrow = link.querySelector(".cert-arrow");
    if (!arrow) return;

    link.addEventListener("mouseenter", () => {
      gsap.to(arrow, { x: 3, y: -3, duration: 0.3, ease: "power2.out" });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}
