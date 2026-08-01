/**
 * Main JavaScript for Vocation+
 * Handles global navigation, mobile menu, and GSAP animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.className = 'ph-bold ph-x';
        } else {
          icon.className = 'ph-bold ph-list';
        }
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'ph-bold ph-list';
      }
    });
  }

  // Accordion Item Toggle (For Guía del Bachiller)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');
      
      // Close all accordions in same group if desired, or allow multi-open
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // Initialize GSAP Animations
  if (typeof gsap !== 'undefined') {
    // Fade in elements with class .gsap-fade-in
    gsap.utils.toArray('.gsap-fade-in').forEach(element => {
      gsap.fromTo(element, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Staggered reveal for cards (e.g. .gsap-stagger-container > .gsap-stagger-item)
    gsap.utils.toArray('.gsap-stagger-container').forEach(container => {
      const items = container.querySelectorAll('.gsap-stagger-item');
      if (items.length > 0) {
        gsap.fromTo(items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: container,
              start: "top 80%"
            }
          }
        );
      }
    });
  }
});
