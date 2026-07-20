document.addEventListener("DOMContentLoaded", () => {

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ======================================
       HEADER STICKY
       ------------------------------------
       The header is injected into #header
       asynchronously by main.js, so .navbar may
       not exist yet at DOMContentLoaded. Querying
       it fresh on every scroll (instead of once,
       up front) means the sticky effect keeps
       working no matter when the header finishes
       loading.
    ====================================== */

    window.addEventListener("scroll", () => {

        const navbar = document.querySelector(".navbar");

        if (navbar) {
            navbar.classList.toggle("sticky", window.scrollY > 50);
        }

    }, { passive: true });


    /* ======================================
       SCROLL-IN ANIMATION
       ------------------------------------
       Site convention is ".reveal" (start state)
       + ".active" (revealed state). A small
       staggered delay is added for elements that
       share a parent (mission cards, team cards,
       key numbers, timeline items) for a nicer
       cascading effect.
    ====================================== */

    const animatedGroups = [
        ".propos",
        ".chiffre",
        ".chiffre-item",
        ".mission",
        ".mission-item",
        ".equipe .section-intro",
        ".membre-item",
        ".timeline-item"
    ];

    const animatedElements = document.querySelectorAll(animatedGroups.join(","));

    animatedElements.forEach((el, index) => {

        el.classList.add("reveal");

        if (!prefersReducedMotion) {
            el.style.transitionDelay = `${(index % 6) * 0.08}s`;
        }

    });

    if (prefersReducedMotion) {

        animatedElements.forEach(el => el.classList.add("active"));

    } else {

        const revealObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    revealObserver.unobserve(entry.target);
                }

            });

        }, { threshold: 0.15 });

        animatedElements.forEach(el => revealObserver.observe(el));

    }


    /* ======================================
       ANIMATED COUNTERS
    ====================================== */

    const counters = document.querySelectorAll(".chiffre-item h3");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const originalText = counter.textContent.trim();
            const target = parseInt(originalText.replace(/\D/g, ""), 10);
            const hasPlus = originalText.includes("+");

            counterObserver.unobserve(counter);

            if (Number.isNaN(target)) return;

            if (prefersReducedMotion) {
                counter.textContent = target + (hasPlus ? "+" : "");
                return;
            }

            let current = 0;
            const increment = target / 60;

            function animateCounter() {

                if (current < target) {

                    current += increment;

                    counter.textContent =
                        Math.min(Math.ceil(current), target) + (hasPlus ? "+" : "");

                    requestAnimationFrame(animateCounter);

                } else {

                    counter.textContent = target + (hasPlus ? "+" : "");

                }

            }

            animateCounter();

        });

    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));


    /* ======================================
       TEAM CARD TILT EFFECT
       ------------------------------------
       Only enabled on devices that actually have
       a mouse/hover (skips touch devices). The
       transition is near-instant while the cursor
       moves (so the tilt tracks the pointer
       precisely) and only eased on mouseleave (so
       the reset snaps back smoothly).
    ====================================== */

    const supportsHover = window.matchMedia("(hover: hover)").matches;

    if (supportsHover && !prefersReducedMotion) {

        const cards = document.querySelectorAll(".membre-item");

        cards.forEach(card => {

            card.addEventListener("mousemove", (e) => {

                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateY = (x / rect.width - 0.5) * 6;
                const rotateX = (0.5 - y / rect.height) * 6;

                card.style.transition = "transform .05s linear";

                card.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

            });

            card.addEventListener("mouseleave", () => {

                card.style.transition = "transform .4s ease";

                card.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

            });

        });

    }


    /* ======================================
       BACK TO TOP BUTTON
       ------------------------------------
       Class ".back-to-top" matches the styling
       already defined in propos.css. Guarded
       against creating a duplicate button if this
       script ever runs twice.
    ====================================== */

    let scrollBtn = document.querySelector(".back-to-top");

    if (!scrollBtn) {

        scrollBtn = document.createElement("button");
        scrollBtn.type = "button";
        scrollBtn.className = "back-to-top";
        scrollBtn.setAttribute("aria-label", "Back to top");
        scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';

        document.body.appendChild(scrollBtn);

    }

    window.addEventListener("scroll", () => {

        scrollBtn.classList.toggle("active", window.scrollY > 400);

    }, { passive: true });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });

    });

});