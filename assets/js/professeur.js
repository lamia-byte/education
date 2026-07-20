/*
  PROFESSEUR.JS
  Behaviour specific to professeur.html and professeur-detail.html:
  - back to top button that appears on scroll
  - fade-in animation on scroll (.reveal -> .active)

  Dark mode itself is handled sitewide by main.js (navbar button),
  so this file does not touch it.
*/

document.addEventListener("DOMContentLoaded", function () {

    /* back to top */

    var backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        var toggleBackToTop = function () {

            if (window.scrollY > 400) {
                backToTop.classList.add("active");
            } else {
                backToTop.classList.remove("active");
            }

        };

        window.addEventListener("scroll", toggleBackToTop);
        toggleBackToTop();

        backToTop.addEventListener("click", function (e) {

            e.preventDefault();

            window.scrollTo({ top: 0, behavior: "smooth" });

        });

    }


    /* fade-in on scroll */

    var revealEls = document.querySelectorAll(".reveal");

    if (revealEls.length) {

        if ("IntersectionObserver" in window) {

            var observer = new IntersectionObserver(function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

            revealEls.forEach(function (el) {
                observer.observe(el);
            });

        } else {

            /* no IntersectionObserver support: just show everything */

            revealEls.forEach(function (el) {
                el.classList.add("active");
            });

        }

    }

});