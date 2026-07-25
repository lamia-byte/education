/*
  Header/footer injection + site interactions
  (mobile menu, Blog submenu, active link, dark mode)
*/

const headerHtml = `
  <header>
    <div class="top-header">
      <div class="contact-info">
        <span><i class="fas fa-map-marker-alt"></i> 123 Example Street, City</span>
        <span><i class="fas fa-phone"></i> +123 456 7890</span>
        <span><i class="fas fa-envelope"></i> contact@edusphere.com</span>
      </div>
      <div class="social-media">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      </div>
    </div>

    <nav class="navbar">
      <div class="logo">
        <h1>EduSphere</h1>
        <p>TRAINING CENTER</p>
      </div>

      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="professeur.html">Instructors</a></li>
        <li><a href="cours.html">Courses</a></li>
        <li><a href="event.html">Events</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li class="dropdown">
          <a href="#">
            Blog
            <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="blogs.html">Blog</a></li>
            <li><a href="blog-detail.html">Blog Details</a></li>
            <li><a href="professeur-detail.html">Teacher Profile</a></li>
            <li><a href="event-detail.html">Event Page</a></li>
              <li><a href="detail-cour.html">Cour Page</a></li>

            <li><a href="faq.html">FAQ</a></li>
            <li><a href="404.html">404 Page</a></li>
            <li><a href="503.html">503 Page</a></li>
            <li><a href="maintenance.html">Maintenance</a></li>
            <li><a href="coming-soon.html">Coming Soon</a></li>
          </ul>
        </li>
        <li><a href="contact.html">Contact</a></li>
        <li class="mobile-login-link"><a href="login.html">Student Portal</a></li>
      </ul>

      <button class="theme-toggle" id="themeToggle" aria-label="Toggle Theme">
        <i class="fas fa-moon"></i>
      </button>

      <a class="login-btn" href="login.html">Student Portal</a>

      <button class="menu-toggle" type="button" aria-label="Open menu">
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
          <h2>E</h2>
          <div>
            <h3>EDUSPHERE</h3>
            <span>Training Center</span>
          </div>
        </div>
        <p>
          Your trusted partner for professional and personal development.
          Programs tailored to every level, across every field, to help you
          reach your full potential.
        </p>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <div class="footer-section">
        <h3>About</h3>
        <ul>
          <li><a href="propos.html">Who We Are</a></li>
          <li><a href="propos.html">Our Mission</a></li>
          <li><a href="professeur.html">Our Team</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Courses</h3>
        <ul>
          <li><a href="business.html">Business</a></li>
          <li><a href="technology.html">Technology</a></li>
          <li><a href="design.html">Design</a></li>
          <li><a href="personal-development.html">Personal Development</a></li>
          <li><a href="cours.html">All Courses</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="evenement.html">Events</a></li>
          <li><a href="galerie.html">Gallery</a></li>
          <li><a href="inscription.html">Enrollment</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <p><i class="fas fa-location-dot"></i> 123 Example Street, City</p>
        <p><i class="fas fa-phone"></i> +123 456 7890</p>
        <p><i class="fas fa-envelope"></i> contact@edusphere.com</p>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 EduSphere Training Center. All rights reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Legal Notice</a>
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
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // close the menu as soon as a link is clicked, otherwise it stays open
  // after navigating to another page on mobile
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

function initDropdown() {
  // the Blog submenu opens on hover on desktop (see CSS),
  // but there's no hover on touch devices so we handle the click here
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