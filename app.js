const btnToggle = document.querySelector("#toggle");
const nav = document.querySelector("#nav");

btnToggle.addEventListener("click", () => nav.classList.toggle("active"));
