// Update current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile nav when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Scroll Reveal Animations using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select all elements to animate
const animatableElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
animatableElements.forEach(el => observer.observe(el));

// Dynamic Gallery Injection for Swiper
const galleryWrapper = document.getElementById('gallery-wrapper');

if (galleryWrapper) {
  // Lightbox event delegation
  galleryWrapper.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      openLightbox(e.target.src);
    }
  });

  // Initialize Swiper Carousel
  const swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }
  });
}

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('show');
}

function closeLightbox() {
  lightbox.classList.remove('show');
  setTimeout(() => {
    lightboxImg.src = '';
  }, 300);
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });
}

// Copy Account Number Function
window.copyAccount = function(accNumber, btnElement) {
  navigator.clipboard.writeText(accNumber).then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    if (btnElement) {
      const originalIcon = btnElement.innerHTML;
      btnElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
      setTimeout(() => {
        btnElement.innerHTML = originalIcon;
      }, 3000);
    }

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
    alert('Failed to copy account number. Please copy it manually.');
  });
};

// Scroll to Top Logic & Sticky CTA Logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const stickyCta = document.querySelector('.sticky-cta');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    if (scrollToTopBtn) scrollToTopBtn.classList.add('show');
    if (stickyCta) stickyCta.classList.add('show');
  } else {
    if (scrollToTopBtn) scrollToTopBtn.classList.remove('show');
    if (stickyCta) stickyCta.classList.remove('show');
  }
});

if (scrollToTopBtn) {

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('show')) {
    closeLightbox();
  }
});
