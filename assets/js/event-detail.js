/*
  Event detail page interactions:
  scroll-reveal animations + newsletter form feedback
*/

function initScrollReveal() {
  const selectors = [
    ".lecturer-card",
    ".sidebar-cta",
    ".event-details-list",
    ".other-events-grid .event-item"
  ];

  const elements = document.querySelectorAll(selectors.join(","));
  if (!elements.length) return;

  elements.forEach((el) => el.classList.add("fade-in-up"));

  // stagger the "other events" cards slightly so they don't all pop in
  // at the exact same time
  document.querySelectorAll(".other-events-grid .event-item").forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.08}s`;
  });

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

function initNewsletterForm() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;

  const button = form.querySelector("button");
  const input = form.querySelector("input[type='email']");
  if (!button || !input) return;

  const originalLabel = button.textContent;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!input.value.trim()) return;

    button.textContent = "Subscribed!";
    button.classList.add("sent");
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalLabel;
      button.classList.remove("sent");
      button.disabled = false;
      form.reset();
    }, 2500);
  });
}

function init() {
  initScrollReveal();
  initNewsletterForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}