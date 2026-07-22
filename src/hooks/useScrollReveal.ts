import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.14 },
    );

    const items = document.querySelectorAll('[data-reveal]');
    items.forEach((item) => {
      item.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);
}
