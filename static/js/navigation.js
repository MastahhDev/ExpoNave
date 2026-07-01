document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".next-arrow").forEach(arrow => {

        arrow.addEventListener("click", () => {

            const current = arrow.closest(".slide");
            const next = current?.nextElementSibling;

            if (next && next.classList.contains("slide")) {
                next.scrollIntoView({ behavior: "smooth" });
            }

        });

    });

});