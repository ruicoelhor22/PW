document.addEventListener("DOMContentLoaded", function() {
    // Get current page URL
    var currentUrl = window.location.href;
  
    // Get all navigation buttons
    var navLinks = document.getElementsByTagName("a");
  
    // Loop through each navigation button
    for (var i = 0; i < navLinks.length; i++) {
      var navLink = navLinks[i];
  
      // Compare href attribute of navigation button with current page URL
      if (navLink.href === currentUrl) {
        // Add 'active' class to highlight the active navigation button
        navLink.classList.add("active");
      }
    }
  });
  