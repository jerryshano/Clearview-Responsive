//////////////////////////////////////////////////////
//make the mobile nav work

const button = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

button.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////
