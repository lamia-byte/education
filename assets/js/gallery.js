/*
  Page Galerie : filtre par categorie + lightbox au clic sur une image
*/

function initGalleryFilter() {
  const filterButtons = document.querySelectorAll(".blog-filter .filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  if (!filterButtons.length || !items.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      items.forEach((item) => {
        const matches = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  if (!lightbox || !lightboxImage || !closeBtn) return;

  function openLightbox(card) {
    const img = card.querySelector("img");
    const title = card.querySelector(".overlay-title");
    if (!img) return;

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = title ? title.textContent.trim() : "";

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // bloque le scroll de la page derriere la modale
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => openLightbox(card));
  });

  closeBtn.addEventListener("click", closeLightbox);

  // clic sur le fond sombre = fermer
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  // touche Echap = fermer
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

function init() {
  initGalleryFilter();
  initLightbox();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}