const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const dropdown = document.querySelector(".dropdown");
const dropdownTrigger = dropdown ? dropdown.querySelector(":scope > a") : null;

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    });
}

if (dropdown && dropdownTrigger) {
    dropdownTrigger.addEventListener("click", function (event) {
        event.preventDefault();
        const isOpen = dropdown.classList.toggle("open");
        dropdownTrigger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("open");
            dropdownTrigger.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdown.classList.remove("open");
            dropdownTrigger.setAttribute("aria-expanded", "false");
        }
    });
}

