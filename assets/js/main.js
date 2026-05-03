// Mobile Navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll Reveal Animation (Simple version without external libraries)
document.addEventListener('DOMContentLoaded', () => {
  const elementsToFadeIn = document.querySelectorAll('.fade-in');
  
  // Initially add fade-in class to elements that don't have it yet but should be animated
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
  });
  
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('fade-in')) {
          // CSS handles the animation
        } else {
          // JS handled transition
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elementsToFadeIn.forEach(element => {
    observer.observe(element);
  });
  
  cards.forEach(element => observer.observe(element));
  timelineItems.forEach(element => observer.observe(element));
});
