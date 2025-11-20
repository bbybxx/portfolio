import { useState, useEffect, useRef } from 'react';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      targetRef.current = totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animate = () => {
      // Only update if target changed significantly
      const newValue = currentRef.current + (targetRef.current - currentRef.current) * 0.2;
      
      if (Math.abs(newValue - lastUpdateRef.current) > 0.1) {
        currentRef.current = newValue;
        setProgress(newValue);
        lastUpdateRef.current = newValue;
      } else if (Math.abs(targetRef.current - currentRef.current) > 0.5) {
        currentRef.current = newValue;
        setProgress(newValue);
        lastUpdateRef.current = newValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div className={styles.scrollProgress} style={{ width: `${progress}%` }} />;
};

export default ScrollProgress;
