import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import styles from './ScrollSection.module.css';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollSection = ({ children, className = '', delay = 0 }: ScrollSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
