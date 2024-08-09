/**
 * This script manages the functionality of the mobile menu.
 * It handles the opening and closing of the menu and ensures that
 * the menu is hidden when an item is clicked.
 */

document.addEventListener("astro:page-load", () => {
  const menuToggle = document.getElementById("menu-toggle"); // Get the hamburger menu button element
  const menuClose = document.getElementById("menu-close"); // Get the menu close button element
  const mobileMenu = document.getElementById("mobile-menu"); // Get the mobile menu element

  /**
   * Opens the mobile menu by removing the 'hidden' class.
   */
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden"); // Show the mobile menu
  });

  /**
   * Closes the mobile menu by adding the 'hidden' class.
   */
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Hide the mobile menu
  });

  // Get all the navigation items within the mobile menu
  const mobileNavItems = mobileMenu.querySelectorAll("a");

  /**
   * Close the mobile menu when any navigation item is clicked.
   */
  mobileNavItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      mobileMenu.classList.add("hidden"); // Hide the mobile menu
    });
  });
});
