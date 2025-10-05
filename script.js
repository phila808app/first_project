// Select hamburger and nav links
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle menu on click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
