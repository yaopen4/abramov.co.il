// Main JavaScript for Abramov Gefen Ltd website
// Handles navigation, form submission, animations, and language switching

// Language detection and switching
function getCurrentLanguage() {
  const path = window.location.pathname;
  return path.startsWith('/he/') || path === '/he' ? 'he' : 'en';
}

function switchLanguage(targetLang) {
  const currentHash = window.location.hash;
  const currentLang = getCurrentLanguage();
  
  if (currentLang === targetLang) {
    return; // Already on the target language
  }
  
  let newUrl;
  if (targetLang === 'he') {
    newUrl = '/he/' + currentHash;
  } else {
    // Remove /he/ prefix for English
    newUrl = '/' + currentHash;
  }
  
  window.location.href = newUrl;
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Language switcher handling
  const languageSwitchers = document.querySelectorAll('.language-switcher');
  languageSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetLang = href.startsWith('/he/') || href === '/he' ? 'he' : 'en';
      const currentHash = window.location.hash;
      
      // Preserve hash when switching languages
      let newUrl = href;
      if (currentHash) {
        newUrl = href + currentHash;
      }
      
      window.location.href = newUrl;
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    // Skip language switcher links
    if (link.classList.contains('language-switcher')) {
      return;
    }
    
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed header with better alignment
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Mobile menu toggle - removed as hamburger menu is no longer needed

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.querySelector('.success-message');
  const errorMessage = document.querySelector('.error-message');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Hide previous messages
      if (successMessage) successMessage.style.display = 'none';
      if (errorMessage) errorMessage.style.display = 'none';

      const formData = new FormData(this);
      
      try {
        // For Netlify Forms, the form action and netlify attribute handle submission
        // For other platforms, you would need to configure the endpoint here
        const response = await fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          if (successMessage) {
            successMessage.style.display = 'block';
            this.reset();
          }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        if (errorMessage) {
          errorMessage.style.display = 'block';
        }
      }
    });
  }

  // Fade in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements with fade-in animation
  const animatedElements = document.querySelectorAll('.service-card, .potential-card1, .hero-heading, .hero-details, .hero-button');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar--top-section');
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
});

