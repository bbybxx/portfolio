import { useEffect, useState } from 'react';
import styles from './LoadingOverlay.module.css';

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loading overlay for 0.8s for wow effect
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <p className={styles.text}>Loading Experience...</p>
      </div>
    </div>
  );
}
