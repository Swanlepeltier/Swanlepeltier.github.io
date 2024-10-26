document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".skill-bar .fill");

    function fillSkillBars() {
        skillBars.forEach(bar => {
            const level = bar.getAttribute("data-level");
            bar.style.width = level + "%";
        });
    }

    function checkScroll() {
        const skillsSection = document.getElementById("skills");
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            fillSkillBars();
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
});
