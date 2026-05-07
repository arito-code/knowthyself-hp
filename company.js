const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");

if (menuButton && globalNav) {
  menuButton.addEventListener("click", () => {
    globalNav.classList.toggle("open");
  });
}