function toggleNav() {
  const outergrid = document.querySelector(".outer-grid");
  outergrid.classList.toggle("outer-grid-expanded");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}

const animatedItems = document.querySelectorAll('.animate, .animation, .animate2');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.15
});

animatedItems.forEach(item => observer.observe(item));

