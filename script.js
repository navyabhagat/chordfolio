// script.js
document.querySelectorAll('.interest').forEach((div) => {
    div.addEventListener('click', () => {
      div.classList.toggle('selected');
    });
  });