import gsap from "gsap";

export function initHero() {
  const marqueeTrack = document.getElementById("marquee-track");
  const glowCursor = document.getElementById("glow-cursor");

  // A curated list with a mix of languages and styles
  const greetings = [
    { text: "Hello", font: "font-black" },
    { text: "Selamat Datang", font: "font-light italic" },
    { text: "你好", font: "font-bold" },
    { text: "Welcome", font: "font-medium" },
    { text: "Apa Khabar", font: "font-black" },
    { text: "欢迎", font: "font-light" }
  ];

  if (marqueeTrack) {
    // Creating a more "designed" look for each item
    const content = greetings.map(g => `
      <span class="flex items-center mx-12">
        <span class="${g.font} tracking-[0.3em]">${g.text}</span>
        <span class="ml-12 w-1.5 h-1.5 rounded-full bg-primary-content/30"></span>
      </span>
    `).join("");
    
    // Triple the content for a seamless loop
    marqueeTrack.innerHTML = content + content + content;

    // Smoother, slower scroll for a more "luxurious" feel
    gsap.to(marqueeTrack, {
      xPercent: -33.33,
      ease: "none",
      duration: 30, // Slower is often better for readability
      repeat: -1,
    });
  }

  // --- Animation & Mouse Follow (Kept from previous) ---
  const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 2 } });
  gsap.set([".hero-name-part", "#hero-role", "#hero-cta", "#marquee-track"], { opacity: 0, y: 30 });

  tl.to(".hero-name-part", { opacity: 1, y: 0, stagger: 0.15 }, 0.4)
    .to("#hero-role", { opacity: 1, y: 0 }, 0.7)
    .to("#hero-cta", { opacity: 1, y: 0, stagger: 0.1 }, 1.0)
    .to("#marquee-track", { opacity: 1, y: 0 }, 1.2);

  if (glowCursor) {
    window.addEventListener("mousemove", (e) => {
      gsap.to(glowCursor, { x: e.clientX, y: e.clientY, duration: 1.5, ease: "power3.out" });
    });
  }
}