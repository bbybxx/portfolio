import { useEffect } from 'react';
import styles from './Spotlight.module.css';

export default function Spotlight() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      root.style.setProperty('--spot-x', `${x}px`);
      root.style.setProperty('--spot-y', `${y}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div className={styles.spotlight} />;
}
