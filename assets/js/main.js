/*
  Injection du header/footer + interactions du site
  (menu mobile, sous-menu Blog, lien actif, dark mode)
*/

const headerHtml = `
  <header>
    <div class="top-header">
      <div class="contact-info">
        <span><i class="fas fa-map-marker-alt"></i> 123 Rue Exemple, Ville</span>
        <span><i class="fas fa-phone"></i> +123 456 7890</span>
        <span><i class="fas fa-envelope"></i> contact@aokaslang.com</span>
      </div>
      <div class="social-media">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      </div>
    </div>

    <nav class="navbar">
      <div class="logo">
        <h1>School</h1>
        <p>LANGUAGE SCHOOL</p>
      </div>

      <ul class="nav-links">
        <li><a href="../view/home.html">Home</a></li>
        <li><a href="../view/about.html">About Us</a></li>
        <li><a href="../view/professeur.html">Professeurs</a></li>
        <li><a href="../view/cours.html">Cours</a></li>
        <li><a href="../view/event.html">Events</a></li>
        <li><a href="../view/gallery.html">Gallery</a></li>
        <li class="dropdown">
          <a href="#">
            Blog
            <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="../view/blogs.html">Blog</a></li>
            <li><a href="../view/blog-detail.html">Blog Details</a></li>
            <li><a href="../view/faq.html">FAQ</a></li>
            <li><a href="../view/404.html">404 Page</a></li>
            <li><a href="../view/503.html">503 Page</a></li>
            <li><a href="../view/maintenance.html">Maintenance</a></li>
             <li><a href="../view/coming-son.html">Coming soon</a></li>
          </ul>
        </li>
        <li><a href="../view/contact.html">Contact</a></li>
        <li class="mobile-login-link"><a href="../view/login.html">Espace eleve</a></li>
      </ul>

      <button class="theme-toggle" id="themeToggle" aria-label="Toggle Theme">
        <i class="fas fa-moon"></i>
      </button>

      <a class="login-btn" href="../view/login.html">Espace eleve</a>

      <button class="menu-toggle" type="button" aria-label="Ouvrir le menu">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
  </header>
`;

const footerHtml = `
  <footer class="footer">
    <div class="footer-content">

      <div class="footer-section footer-about">
        <div class="footer-logo">
          <h2>A</h2>
          <div>
            <h3>AOKAS</h3>
            <span>Language School</span>
          </div>
        </div>
        <p>
          Votre partenaire de confiance pour l'apprentissage des langues.
          Des programmes adaptes a tous les niveaux pour ouvrir les portes du monde.
        </p>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <div class="footer-section">
        <h3>A propos</h3>
        <ul>
          <li><a href="../view/propos.html">Qui sommes-nous</a></li>
          <li><a href="../view/propos.html">Notre mission</a></li>
          <li><a href="../view/professeur.html">Notre equipe</a></li>
          <li><a href="../view/contact.html">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Cours</h3>
        <ul>
          <li><a href="../view/anglais.html">Anglais</a></li>
          <li><a href="../view/francais.html">Francais</a></li>
          <li><a href="../view/espagnol.html">Espagnol</a></li>
          <li><a href="../view/allemand.html">Allemand</a></li>
          <li><a href="../view/cours.html">Tous les cours</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Ressources</h3>
        <ul>
          <li><a href="../view/evenement.html">Evenements</a></li>
          <li><a href="../view/galerie.html">Galerie</a></li>
          <li><a href="../view/inscription.html">Inscription</a></li>
          <li><a href="../view/faq.html">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <p><i class="fas fa-location-dot"></i> 123 Rue Exemple, Ville</p>
        <p><i class="fas fa-phone"></i> +123 456 7890</p>
        <p><i class="fas fa-envelope"></i> contact@aokaslang.com</p>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Aokas Language School. Tous droits reserves.</p>
      <div class="footer-links">
        <a href="#">Politique de confidentialite</a>
        <a href="#">Conditions d'utilisation</a>
        <a href="#">Mentions legales</a>
      </div>
    </div>
  </footer>
`;

function injectLayout() {
  const headerEl = document.getElementById("header");
  if (headerEl) headerEl.innerHTML = headerHtml;

  const footerEl = document.getElementById("footer");
  if (footerEl) footerEl.innerHTML = footerHtml;
}

function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  // on referme le menu des qu'on clique un lien, sinon il reste ouvert
  // apres avoir change de page sur mobile
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}

function initDropdown() {
  // le sous-menu Blog s'ouvre au survol sur desktop (voir CSS),
  // mais il n'y a pas de survol au tactile donc il faut gerer le clic ici
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;

  const trigger = dropdown.querySelector("a");
  if (!trigger) return;

  trigger.addEventListener("click", (event) => {
    if (window.innerWidth <= 992) {
      event.preventDefault();
      dropdown.classList.toggle("active");
    }
  });
}

function highlightActiveNavLink() {
  const navItems = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop() || "home.html";

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (!href) return;
    const hrefPage = href.split("/").pop();
    item.classList.toggle("active-link", hrefPage === currentPage);
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  function setTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    if (themeToggle) {
      themeToggle.innerHTML =
        theme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      // navigation privee ou storage bloque, on ne casse pas le site pour autant
    }
  }

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("theme");
  } catch (err) {
    savedTheme = null;
  }

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      setTheme(isDark ? "light" : "dark");
    });
  }
}

function init() {
  injectLayout();
  initMobileMenu();
  initDropdown();
  highlightActiveNavLink();
  initThemeToggle();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}