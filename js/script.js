//////////////////////////////////////////////////////
//make the mobile nav work

const button = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

button.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
