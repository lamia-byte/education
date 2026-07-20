document.addEventListener("DOMContentLoaded", () => {

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    /* ======================================
       HEADER STICKY
       ------------------------------------
       Fix: the header is injected into #header
       asynchronously by main.js, so .navbar may
       not exist yet at DOMContentLoaded. Querying
       it fresh on every scroll means the sticky
       effect keeps working no matter when the
       header finishes loading.
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
       Fix: the previous script watched
       ".contact-info, .map-frame, .faq-box" —
       none of which exist on this page (the info
       panel is actually ".info-contact", and
       there's no map or FAQ section here). It also
       toggled ".show"/".hidden", which have no
       matching CSS. There was also a second,
       separate reveal script at the bottom of the
       file doing the same job differently — that
       duplicate has been removed. This is now the
       one reveal system, using the site's actual
       ".reveal" / ".active" convention and the
       real class names on this page.
    ====================================== */

    const animatedElements = document.querySelectorAll(
        ".page-header-content, .info-contact, .contact"
    );

    animatedElements.forEach((el, index) => {

        el.classList.add("reveal");

        if (!prefersReducedMotion) {
            el.style.transitionDelay = `${index * 0.1}s`;
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

        }, { threshold: 0.12 });

        animatedElements.forEach(el => revealObserver.observe(el));

    }


    /* ======================================
       CONTACT FORM
       ------------------------------------
       Fix: validation used to add an ".error"
       class to <input>/<textarea> elements, but
       the CSS targets ".input-group.error" (the
       wrapper), so invalid fields never actually
       looked different. Fix: success/error text
       now toggles the ".success"/".error" classes
       already defined in contact.css instead of
       setting inline styles (which also hardcoded
       colors that didn't match the site palette).
       Fix: messages are in English, matching the
       rest of the page.
    ====================================== */

    const form = document.getElementById("contactForm");
    const message = document.querySelector(".form-message");

    if (form && message) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const fields = form.querySelectorAll(".input-group");
            let valid = true;

            fields.forEach(field => {

                const control = field.querySelector("input, textarea");

                if (!control) return;

                if (!control.value.trim()) {
                    valid = false;
                    field.classList.add("error");
                } else {
                    field.classList.remove("error");
                }

            });

            message.classList.remove("success", "error");

            if (!valid) {
                message.textContent = "Please fill in all fields.";
                message.classList.add("error");
                return;
            }

            message.textContent = "Message sent successfully ✔";
            message.classList.add("success");

            form.reset();
            fields.forEach(field => field.classList.remove("error", "focus"));

            setTimeout(() => {
                message.textContent = "";
                message.classList.remove("success", "error");
            }, 4000);

        });

    }


    /* INPUT FOCUS EFFECT */

    document.querySelectorAll(".input-group input, .input-group textarea")
        .forEach(input => {

            input.addEventListener("focus", () => {
                input.closest(".input-group")?.classList.add("focus");
                input.closest(".input-group")?.classList.remove("error");
            });

            input.addEventListener("blur", () => {
                if (!input.value) {
                    input.closest(".input-group")?.classList.remove("focus");
                }
            });

        });


    /* ======================================
       FOOTER SOCIAL LINKS HOVER
       ------------------------------------
       Fix: mouseenter/mouseleave don't bubble,
       so attaching them directly to
       ".social-links a" only worked if the footer
       already existed at DOMContentLoaded. Since
       the footer is injected asynchronously, this
       used delegated "mouseover"/"mouseout"
       listeners on document instead — these do
       bubble, so they work regardless of when the
       footer loads.
    ====================================== */

    document.addEventListener("mouseover", (e) => {

        const link = e.target.closest(".social-links a");
        if (link) link.style.transform = "scale(1.1)";

    });

    document.addEventListener("mouseout", (e) => {

        const link = e.target.closest(".social-links a");
        if (link) link.style.transform = "scale(1)";

    });


    /* ======================================
       BACK TO TOP BUTTON
       ------------------------------------
       Fix: renamed from ".scroll-top" (unstyled,
       no matching CSS anywhere) to ".back-to-top"
       to match the class already styled in
       contact.css and used across the rest of the
       site. Guarded against creating a duplicate
       button if this script ever runs twice.
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