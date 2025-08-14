const root = document.documentElement;
// theme toggle (dark /light)
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    const currentPrimary = getComputedStyle(root).getPropertyValue("--primary-color").trim();
    const currentSecondary = getComputedStyle(root).getPropertyValue("--secondary-color").trim();

    root.style.setProperty("--primary-color", currentPrimary === "white" ? "black" : "white");
    root.style.setProperty("--secondary-color", currentSecondary === "black" ? "white" : "black");

    themeToggle.textContent = currentPrimary === "white" ? "☀️" : "🌙";
});

// color customize button
const customizeBtn = document.getElementById("customize-btn");
const colorMenu = document.getElementById("color-menu");


customizeBtn.addEventListener("click", () => {
    colorMenu.classList.toggle("show");
});

document.querySelectorAll(".color-option").forEach(option => {
    option.addEventListener("click", () => {
        const selectedColor = option.getAttribute("data-color");
        root.style.setProperty("--primary-color", selectedColor);
    });
});
// side list navbar
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});