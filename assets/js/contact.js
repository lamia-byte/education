document.addEventListener("DOMContentLoaded", () => {

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    /* 
       HEADER STICKY
    
     */

    window.addEventListener("scroll", () => {

        const navbar = document.querySelector(".navbar");

        if (navbar) {
            navbar.classList.toggle("sticky", window.scrollY > 50);
        }

    }, { passive: true });


    /* 
       SCROLL-IN ANIMATION
     
     */

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


    /* 
       CONTACT FORM
      
     */

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


    /* 
       BACK TO TOP BUTTON
      
     */

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