/**
 * This script handles the theme toggle functionality for the website.
 * It toggles between light and dark themes based on user interaction
 * and system preferences.
 */

document.addEventListener("astro:page-load", () => {
  const themeToggleButton = document.getElementById("theme-toggle-btn"); // Get the theme toggle button element
  const lightModeIcon = document.getElementById("light-icon"); // Get the light mode icon element
  const darkModeIcon = document.getElementById("dark-icon"); // Get the dark mode icon element

  /**
   * Apply the specified theme by updating the document's class and
   * managing the visibility of the icons.
   *
   * @param {string} theme - The theme to apply ('light' or 'dark').
   */
  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Add the dark theme class to the root element
      localStorage.setItem("theme", "dark"); // Store the theme preference in localStorage
      lightModeIcon.classList.remove("hidden"); // Show the light mode icon
      darkModeIcon.classList.add("hidden"); // Hide the dark mode icon
    } else {
      document.documentElement.classList.remove("dark"); // Remove the dark theme class from the root element
      localStorage.setItem("theme", "light"); // Store the theme preference in localStorage
      darkModeIcon.classList.remove("hidden"); // Show the dark mode icon
      lightModeIcon.classList.add("hidden"); // Hide the light mode icon
    }
  };

  // Retrieve the stored theme or use the system's theme preference
  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const themeToApply = storedTheme || (systemPrefersDark ? "dark" : "light");

  // Apply the theme on page load
  applyTheme(themeToApply);

  // Add an event listener to toggle the theme when the button is clicked
  themeToggleButton.addEventListener("click", () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const newTheme = isCurrentlyDark ? "light" : "dark";
    applyTheme(newTheme);
  });
});
