import { useEffect, useRef, useState } from 'react';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = '',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        startTyping();
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      startTyping();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, speed, delay]);

  const startTyping = () => {
    if (indexRef.current < text.length) {
      timerRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text[indexRef.current]);
        indexRef.current += 1;
        startTyping();
      }, speed);
    }
  };

  return (
    <span className={`${styles.typewriter} ${className}`}>
      {displayedText}
      <span className={styles.cursor} />
    </span>
  );
}
