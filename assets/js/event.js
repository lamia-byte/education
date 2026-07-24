/*
  Events page interactions:
  category filter + scroll-reveal animations
*/

function initEventFilter() {
  const filterButtons = document.querySelectorAll(".filter-controls button");
  const eventCards = document.querySelectorAll(".event-card");
  const noResults = document.getElementById("noEventResults");

  if (!filterButtons.length || !eventCards.length) return;

  function applyEventFilter(filter) {
    let visible = 0;

    eventCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(" ");
      const match = filter === "all" || categories.includes(filter);

      card.style.display = match ? "" : "none";

      if (match) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? "block" : "none";
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      applyEventFilter(btn.dataset.filter);
    });
  });
}

function initScrollReveal() {
  const selectors = [
    ".events-grid .event-card",
    ".stats-grid .stat-box",
    ".program-grid .program-card"
  ];

  const elements = document.querySelectorAll(selectors.join(","));
  if (!elements.length) return;

  elements.forEach((el) => el.classList.add("fade-in-up"));

  // small stagger inside each grid so cards don't all pop in together
  ["events-grid", "stats-grid", "program-grid"].forEach((gridClass) => {
    const grid = document.querySelector(`.${gridClass}`);
    if (!grid) return;

    Array.from(grid.children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.08}s`;
    });
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

function init() {
  initEventFilter();
  initScrollReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}