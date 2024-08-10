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

document.addEventListener("DOMContentLoaded", () => {
  // Get elements for both large and small screen theme toggle buttons
  const themeToggleButton = document.getElementById("theme-toggle-btn");
  const themeToggleButtonSm = document.getElementById("theme-toggle-btn-sm");

  // Get elements for light and dark mode icons for both screen sizes
  const lightModeIcon = document.getElementById("light-icon");
  const darkModeIcon = document.getElementById("dark-icon");

  const lightModeIconSm = document.getElementById("light-icon-sm");
  const darkModeIconSm = document.getElementById("dark-icon-sm");

  /**
   * Applies the given theme by updating the DOM and storing the preference in `localStorage`.
   * @param {string} theme - The theme to apply ('light' or 'dark').
   */
  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");

      // Update icons for large screens
      lightModeIcon.classList.add("hidden");
      darkModeIcon.classList.remove("hidden");

      // Update icons for small screens
      lightModeIconSm.classList.add("hidden");
      darkModeIconSm.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");

      // Update icons for large screens
      darkModeIcon.classList.add("hidden");
      lightModeIcon.classList.remove("hidden");

      // Update icons for small screens
      darkModeIconSm.classList.add("hidden");
      lightModeIconSm.classList.remove("hidden");
    }
  };

  /**
   * Determines which theme to apply on initial page load.
   * - If a theme is stored in `localStorage`, use it.
   * - Otherwise, use the system's current theme preference.
   */
  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const themeToApply = storedTheme || (systemPrefersDark ? "dark" : "light");

  // Apply the determined theme on page load
  applyTheme(themeToApply);

  // Add event listeners to toggle buttons to switch themes
  themeToggleButton.addEventListener("click", () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const newTheme = isCurrentlyDark ? "light" : "dark";
    applyTheme(newTheme);
  });

  themeToggleButtonSm.addEventListener("click", () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const newTheme = isCurrentlyDark ? "light" : "dark";
    applyTheme(newTheme);
  });
});
