/*
  Homepage interactions: hero background slider + FAQ accordion
*/

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000);
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // accordion behaviour: close every item, then reopen the clicked
      // one only if it wasn't already open
      faqItems.forEach((other) => other.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

function init() {
  initHeroSlider();
  initFaqAccordion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}