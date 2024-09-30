/**
 * Handles theme toggling between light and dark modes.
 *
 * This script supports two toggle buttons:
 * - One for large screens (`theme-toggle-btn`).
 * - One for small screens (`theme-toggle-btn-sm`).
 *
 * The theme is applied based on the user's last preference (stored in `localStorage`)
 * or the system's current theme preference.
 */

// Function to apply the theme based on the stored or system preference
const applyTheme = (theme) => {
  const lightModeIcon = document.getElementById("light-icon");
  const darkModeIcon = document.getElementById("dark-icon");
  const lightModeIconSm = document.getElementById("light-icon-sm");
  const darkModeIconSm = document.getElementById("dark-icon-sm");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");

    // Update icons for large screens
    if (lightModeIcon && darkModeIcon) {
      lightModeIcon.classList.add("hidden");
      darkModeIcon.classList.remove("hidden");
    }

    // Update icons for small screens
    if (lightModeIconSm && darkModeIconSm) {
      lightModeIconSm.classList.add("hidden");
      darkModeIconSm.classList.remove("hidden");
    }
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");

    // Update icons for large screens
    if (darkModeIcon && lightModeIcon) {
      darkModeIcon.classList.add("hidden");
      lightModeIcon.classList.remove("hidden");
    }

    // Update icons for small screens
    if (darkModeIconSm && lightModeIconSm) {
      darkModeIconSm.classList.add("hidden");
      lightModeIconSm.classList.remove("hidden");
    }
  }
};

// Function to initialize the theme toggle buttons
const initializeThemeToggler = () => {
  const themeToggleButton = document.getElementById("theme-toggle-btn");
  const themeToggleButtonSm = document.getElementById("theme-toggle-btn-sm");

  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const themeToApply = storedTheme || (systemPrefersDark ? "dark" : "light");

  // Apply the theme on page load or transition
  applyTheme(themeToApply);

  // Add event listeners to toggle buttons
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const isCurrentlyDark =
        document.documentElement.classList.contains("dark");
      const newTheme = isCurrentlyDark ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  if (themeToggleButtonSm) {
    themeToggleButtonSm.addEventListener("click", () => {
      const isCurrentlyDark =
        document.documentElement.classList.contains("dark");
      const newTheme = isCurrentlyDark ? "light" : "dark";
      applyTheme(newTheme);
    });
  }
};

// Initialize the theme toggler when the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeThemeToggler);

// Reinitialize theme toggler after every Astro page transition
document.addEventListener("astro:after-swap", initializeThemeToggler);
