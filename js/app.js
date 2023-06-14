const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const clousMenuBtn = document.querySelector(".clous-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
clousMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach((menuLinks) => {
  menuLinks.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });
});
