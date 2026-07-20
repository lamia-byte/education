   const filterButtons = document.querySelectorAll(".filter-controls button");
        const eventCards = document.querySelectorAll(".event-card");
        const noResults = document.getElementById("noEventResults");

        function applyEventFilter(filter){

            let visible = 0;

            eventCards.forEach(card => {

                const categories = (card.dataset.category || "").split(" ");
                const match = filter === "all" || categories.includes(filter);

                card.style.display = match ? "" : "none";

                if(match) visible++;

            });

            noResults.style.display = visible === 0 ? "block" : "none";

        }

        filterButtons.forEach(btn => {

            btn.addEventListener("click", () => {

                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                applyEventFilter(btn.dataset.filter);

            });

        });