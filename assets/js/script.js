// We'll update the script to toggle the overlay and make sure clicking the overlay also closes the menu.

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("menu-overlay");

// Function to toggle menu
const toggleMenu = () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
  overlay.classList.toggle("active");

  // Prevent body scrolling when menu is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
};

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu); // Close if user clicks outside

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
    overlay.classList.remove("active");
    document.body.style.overflow = "initial";
  });
});

// Back to top
// Show button on scroll
window.onscroll = function () {
  let btn = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Smooth scroll to top
document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

//=============================================================================================
// Hero scrol effects
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  // Remove active class from current items
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // Update index
  currentSlide = (index + slides.length) % slides.length;

  // Add active class to new items
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Auto Play
function nextSlide() {
  showSlide(currentSlide + 1);
}

let slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds

// Optional: Allow dots to change slides
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    clearInterval(slideInterval); // Stop auto-play on manual click
    showSlide(idx);
    slideInterval = setInterval(nextSlide, 5000); // Restart auto-play
  });
});

// Scroll down
const scrollIndicator = document.querySelector(".scroll-indicator");

scrollIndicator.addEventListener("click", () => {
  // Scrolls exactly to the bottom of the hero section
  window.scrollTo({
    top: document.querySelector(".hero").offsetHeight,
    behavior: "smooth",
  });
});

// Homepage card 
// Simple interaction logic
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', (e) => {
    const cardTitle = e.target.closest('.card').querySelector('h3').innerText;
    console.log(`Navigating to detailed view for: ${cardTitle}`);
    // Add logic here to expand card or navigate to a new page
  });
});
//Mission cards

// Simple Fade-in on Scroll
const observerOptions = {
  threshold: 0.1,
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply to Mission Cards and CTA
document.querySelectorAll(".mission-card, .cta-banner").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  fadeInObserver.observe(el);
});