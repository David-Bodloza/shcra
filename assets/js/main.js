document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const closeSidebarBtn = document.getElementById("close-sidebar");
  const mobileNavSidebar = document.getElementById("mobile-nav-sidebar");
  const mobileNavOverlay = document.getElementById("mobile-nav-overlay");

  // Function to open the sidebar
  const openSidebar = () => {
    mobileNavSidebar.classList.add("active");
    mobileNavOverlay.classList.add("active");
    hamburgerMenu.classList.add("active"); // For hamburger to X animation
    // Optional: Disable scrolling on body when sidebar is open
    document.body.style.overflow = "hidden";
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    mobileNavSidebar.classList.remove("active");
    mobileNavOverlay.classList.remove("active");
    hamburgerMenu.classList.remove("active"); // Revert hamburger icon
    // Optional: Re-enable scrolling on body
    document.body.style.overflow = "";
  };

  // Event Listeners
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", openSidebar);
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", closeSidebar);
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener("click", closeSidebar); // Close sidebar when clicking outside
  }

  // Optional: Close sidebar when a link is clicked inside it
  const mobileNavLinks = mobileNavSidebar.querySelectorAll("a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
});

// Back to top
// --- Scroll to Top Button Logic ---
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Show button after scrolling down 300px
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top on click
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  });
}
