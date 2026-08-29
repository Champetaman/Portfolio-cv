const initializeMobileMenu = () => {
  document.querySelectorAll("[data-mobile-menu]").forEach((menu) => {
    if (menu.dataset.menuReady === "true") return;
    menu.dataset.menuReady = "true";

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => menu.removeAttribute("open"));
    });

    const summary = menu.querySelector("summary");
    menu.addEventListener("toggle", () => {
      summary?.setAttribute("aria-label", menu.open ? "Close navigation" : "Open navigation");
    });

    menu.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      menu.removeAttribute("open");
      summary?.focus();
    });
  });
};

document.addEventListener("DOMContentLoaded", initializeMobileMenu);
document.addEventListener("astro:after-swap", initializeMobileMenu);
