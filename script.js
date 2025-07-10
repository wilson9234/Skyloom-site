// Scroll animations
ScrollReveal().reveal('.glass', {
  delay: 100,
  duration: 800,
  distance: '40px',
  origin: 'bottom',
  interval: 150,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.section-title', {
  delay: 50,
  distance: '20px',
  origin: 'top',
  duration: 600
});

// Button hover grow effect
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

// Optional: Navbar shrink on scroll
const nav = document.querySelector('.navbar');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.padding = '0.5rem 0';
    } else {
      nav.style.padding = '1rem 0';
    }
  });
}
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});
