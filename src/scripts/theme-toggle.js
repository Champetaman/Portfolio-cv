const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const renderTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    button.querySelector('[data-theme-icon="light"]')?.classList.toggle("hidden", isDark);
    button.querySelector('[data-theme-icon="dark"]')?.classList.toggle("hidden", !isDark);
  });
};

const initializeTheme = () => {
  renderTheme(getPreferredTheme());
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    if (button.dataset.themeReady === "true") return;
    button.dataset.themeReady = "true";
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      renderTheme(nextTheme);
    });
  });
};

document.addEventListener("DOMContentLoaded", initializeTheme);
document.addEventListener("astro:after-swap", initializeTheme);
