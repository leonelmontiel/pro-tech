const btn_menu = document.querySelector(".btn__menu");
const nav_menu = document.querySelector(".menu");

btn_menu.addEventListener("click", () => {
  nav_menu.classList.toggle("menu__visible");

  if (nav_menu.classList.contains("menu__visible")) {
    btn_menu.setAttribute("aria-label", "Cerrar menú");
  } else {
    btn_menu.setAttribute("aria-label", "Abrir menú");
  }
});