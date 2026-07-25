
    /* Reading progress bar */
    const progressBar = document.getElementById("readingProgress");
    const article = document.querySelector(".article-content");

    function updateProgress() {
        const rect = article.getBoundingClientRect();
        const total = article.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const percent = total > 0 ? (scrolled / total) * 100 : 0;
        progressBar.style.width = percent + "%";
    }

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress();

    /* Table of contents: smooth scroll + active link on scroll */
    const tocLinks = document.querySelectorAll(".toc-list a");
    const headings = Array.from(tocLinks).map(link =>
        document.querySelector(link.getAttribute("href"))
    ).filter(Boolean);

    function updateTocActive() {
        let currentId = "";
        headings.forEach(h => {
            if (h.getBoundingClientRect().top <= 140) {
                currentId = h.id;
            }
        });
        tocLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
        });
    }

    window.addEventListener("scroll", updateTocActive);
    updateTocActive();

    /* Comment reply toggle */
    document.querySelectorAll(".reply-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
        });
    });
