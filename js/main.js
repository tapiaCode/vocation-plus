/**
 * Main JavaScript for Vocation+
 * Handles global navigation, mobile menu, and GSAP animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      // Very basic mobile menu toggle for now
      // In a real implementation, we'd use a proper full-screen modal or slide-out menu
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'rgba(255,255,255,0.95)';
        navLinks.style.backdropFilter = 'blur(10px)';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
      }
    });
  }

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
