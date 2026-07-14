import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.12,
        ...options,
      }
    );

    const elements = element.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    if (element.classList.contains('reveal')) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}

export default useScrollReveal;
