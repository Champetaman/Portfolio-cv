(function () {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = localStorage.getItem("theme");

  function applyTheme(theme) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }

  if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  prefersDarkScheme.addEventListener("change", (e) => {
    if (!currentTheme) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
})();
