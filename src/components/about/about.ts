import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAbout() {
  const aboutSection = document.getElementById("about");
  if (!aboutSection) return;

  // Clear existing triggers to prevent duplicates on page navigation
  ScrollTrigger.getAll().forEach(t => {
    if (t.trigger === aboutSection) t.kill();
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: "top 80%",
      once: true,
    }
  });

  // Ensure elements start in their hidden state to prevent "flash"
  gsap.set([".about-title", ".about-badge", ".about-subtitle", ".about-paragraph", ".about-social-link"], {
    opacity: 0,
    y: 50
  });

  // 1. The Title Reveal
  tl.to(".about-title", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.out",
  })

  // 2. The Image Zoom (Targeting the actual image tag)
  .from(".about-image", {
    scale: 1.4,
    filter: "blur(10px)",
    duration: 1.5,
    ease: "power2.out",
  }, "-=1") 

  // 3. Content Stagger
  .to([".about-badge", ".about-subtitle", ".about-paragraph"], {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.8")

  // 4. Social Grid Reveal
  .to(".about-social-link", {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.4");

  setupAboutHovers();
}

function setupAboutHovers() {
  const socialLinks = document.querySelectorAll(".about-social-link");
  
  socialLinks.forEach((link) => {
    // Select the arrow/svg inside the link
    const arrow = link.querySelector("svg");
    
    // Safety check: skip if the arrow doesn't exist in this link
    if (!arrow) return;

    link.addEventListener("mouseenter", () => {
      gsap.to(arrow, { 
        x: 4, 
        y: -4, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(arrow, { 
        x: 0, 
        y: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    });
  });
}