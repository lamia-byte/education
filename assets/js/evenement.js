document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const eventCards = document.querySelectorAll(".event-card");
    const detailButtons = document.querySelectorAll(".event-btn");
    const faqItems = document.querySelectorAll(".faq-item");

    const modal = document.createElement("div");
    modal.className = "event-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Details de l'evenement");
    modal.innerHTML = `
        <div class="modal-box">
            <button class="modal-close" type="button" aria-label="Fermer">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 class="modal-title"></h2>
            <p class="modal-description"></p>
            <div class="event-meta modal-meta"></div>
            <a class="cta-btn" href="contact.html">S'inscrire</a>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitle = modal.querySelector(".modal-title");
    const modalDescription = modal.querySelector(".modal-description");
    const modalMeta = modal.querySelector(".modal-meta");
    const modalClose = modal.querySelector(".modal-close");

    const closeModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    };

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            eventCards.forEach((card) => {
                const shouldShow = selectedFilter === "all" || card.dataset.category === selectedFilter;
                card.classList.toggle("is-hidden", !shouldShow);
            });
        });
    });

    detailButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".event-card");
            if (!card) return;

            const title = card.querySelector("h2");
            const description = card.querySelector("p");
            const meta = card.querySelector(".event-meta");

            modalTitle.textContent = title ? title.textContent : button.dataset.title;
            modalDescription.textContent = description ? description.textContent : "";
            modalMeta.innerHTML = meta ? meta.innerHTML : "";
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
            modalClose.focus();
        });
    });

    modalClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        if (!question) return;

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach((faq) => faq.classList.remove("active"));

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        eventCards.forEach((card) => {
            card.classList.add("reveal");
            observer.observe(card);
        });
    } else {
        eventCards.forEach((card) => card.classList.add("show"));
    }
});
