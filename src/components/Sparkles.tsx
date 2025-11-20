import { useEffect, useState } from 'react';
import styles from './Sparkles.module.css';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const createSparkle = () => {
      const sparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
      };
      setSparkles(prev => [...prev, sparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
      }, (sparkle.delay + sparkle.duration) * 1000);
    };

    // Create sparkles periodically
    const interval = setInterval(createSparkle, 2000);

    // Create initial sparkles
    for (let i = 0; i < 5; i++) {
      setTimeout(createSparkle, Math.random() * 2000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sparkles}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className={styles.sparkle}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;