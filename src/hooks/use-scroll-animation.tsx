import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Handle staggered animations for children
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const elements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .flip-in-y, .stagger-parent'
    );
    
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}