// Smooth scroll for internal anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Highlight active section in future if you add nav tracking
// const observer = new IntersectionObserver(...);

// Future idea: glossary tooltips or hover info box triggers
// You could add data-term="Unigram model" to a span, and show info box on hover

// Example (disabled until structure is ready):
// document.querySelectorAll('[data-term]').forEach(el => {
//   el.addEventListener('mouseenter', () => {
//     // Show glossary info
//   });
// });
