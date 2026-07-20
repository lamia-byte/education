/*
  Courses page: FAQ accordion, filter row scrolling, category + search
  filtering, and newsletter submit confirmation
*/

function initFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
}

function initFilterScroll() {
  const filter = document.getElementById("courseFilter");
  const prev = document.getElementById("filterPrev");
  const next = document.getElementById("filterNext");
  if (!filter || !prev || !next) return;

  prev.addEventListener("click", () => {
    filter.scrollBy({ left: -250, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    filter.scrollBy({ left: 250, behavior: "smooth" });
  });
}

function initCourseFilterAndSearch() {
  const filterButtons = document.querySelectorAll(".filter-chip");
  const searchInput = document.getElementById("courseSearchInput");
  const searchBtn = document.getElementById("courseSearchBtn");
  const noResults = document.getElementById("noCoursesFound");
  const courseCards = document.querySelectorAll(".course-card");
  const courseSections = document.querySelectorAll(".courses-section");

  if (!courseCards.length) return;

  let activeCategory = "all";

  function applyFilters() {
    const searchTerm = (searchInput ? searchInput.value : "").trim().toLowerCase();
    let visibleCount = 0;

    courseCards.forEach((card) => {
      const category = card.dataset.category || "";
      const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const instructor = card.querySelector(".instructor h4")?.textContent.toLowerCase() || "";

      const matchesCategory = activeCategory === "all" || category === activeCategory;
      const matchesSearch = !searchTerm || title.includes(searchTerm) || instructor.includes(searchTerm);
      const isVisible = matchesCategory && matchesSearch;

      card.classList.toggle("is-hidden", !isVisible);
      if (isVisible) visibleCount += 1;
    });

    // hide an entire section if none of its cards are visible anymore
    courseSections.forEach((section) => {
      const cardsInSection = section.querySelectorAll(".course-card");
      const hasVisibleCard = Array.from(cardsInSection).some((card) => !card.classList.contains("is-hidden"));
      section.classList.toggle("is-empty", cardsInSection.length > 0 && !hasVisibleCard);
    });

    if (noResults) {
      noResults.classList.toggle("visible", visibleCount === 0);
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", applyFilters);
  }
}

function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  const successMsg = document.getElementById("newsletterSuccess");
  if (!form) return;

  // no backend wired up yet: just stop the page from reloading
  // and confirm the subscription on screen
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (successMsg) {
      successMsg.classList.add("visible");
    }

    form.reset();
  });
}

function init() {
  initFaqAccordion();
  initFilterScroll();
  initCourseFilterAndSearch();
  initNewsletterForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}