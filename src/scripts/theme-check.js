// Detect system theme and update classes accordingly
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function updateTheme() {
  const root = document.documentElement;
  if (prefersDarkScheme.matches) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

// Listen for changes in system theme
prefersDarkScheme.addEventListener("change", updateTheme);

// Initial theme check
updateTheme();
