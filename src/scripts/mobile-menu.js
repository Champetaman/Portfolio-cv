document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (menuClose && mobileMenu) {
    menuClose.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }

  const mobileNavItems = mobileMenu.querySelectorAll("a");

  mobileNavItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});
