const cards = document.querySelectorAll(
  ".pratos_container .pratos"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.3
  }
);

cards.forEach(card => {
  observer.observe(card);
});