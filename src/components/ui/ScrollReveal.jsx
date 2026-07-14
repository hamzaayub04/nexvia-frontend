import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll('.reveal:not(.visible)');
    revealElements.forEach((child) => observer.observe(child));
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}