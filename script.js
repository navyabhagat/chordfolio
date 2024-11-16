// script.js
document.querySelectorAll('.interest').forEach((div) => {
    div.addEventListener('click', () => {
      div.classList.toggle('selected');
    });
  });

  // JavaScript to add the "show" class after the page loads
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 100); // Staggered animation for a better effect
  });
});