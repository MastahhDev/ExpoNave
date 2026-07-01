document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".sidebar-dot");


    // Navegación por click
    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            const number = dot.dataset.slide;
            const target = document.getElementById(`slide-${number}`);

            if (!target) {
                console.warn(`sidebar.js: no existe slide-${number}`);
                return;
            }

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

    // Observador de diapositivas
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const number = entry.target.id.replace("slide-", "");

            // Actualiza puntos
            dots.forEach(dot => dot.classList.remove("active"));

            const activeDot = document.querySelector(
                `.sidebar-dot[data-slide="${number}"]`
            );

            if (activeDot) {
                activeDot.classList.add("active");
            }

            // Actualiza contador
            document.querySelectorAll(".slide-page span:first-child")
            .forEach(span=>{

                span.textContent=number;

            });

        });

    }, {
        threshold: 0.5
    });

    slides.forEach(slide => observer.observe(slide));

});