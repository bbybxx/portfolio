import { useEffect, useRef } from 'react';
import styles from './AnimatedSection.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          element.style.animationDelay = `${delay}ms`;
          element.classList.add(styles.animated);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`${styles.section} ${className}`}>
      {children}
    </div>
  );
}
