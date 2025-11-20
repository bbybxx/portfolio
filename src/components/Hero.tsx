import styles from './Hero.module.css';
import type { Translations } from '../types/index';
import { useEffect, useState } from 'react';

interface HeroProps {
  translations: Translations;
}

const Hero = ({ translations }: HeroProps) => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const [displayWords, setDisplayWords] = useState<string[]>(() => translations.hero.title.split(' '));
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const newWords = translations.hero.title.split(' ');
    if (newWords.join(' ') === displayWords.join(' ')) return;
    // Add a short fade-out and fade-in to smooth switch
    setIsSwitching(true);
    const t = setTimeout(() => {
      setDisplayWords(newWords);
      // small delay so new words can animate in
      setTimeout(() => setIsSwitching(false), 40);
    }, 160);
    return () => clearTimeout(t);
  }, [translations.hero.title]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isSwitching ? styles.fading : ''}`} data-text={translations.hero.title} aria-live="polite">
          {displayWords.map((word, i) => (
            <span
              key={`${word}-${i}-${translations.hero.title.substring(0, 5)}`}
              className={styles.word}
              style={{
                '--word-index': i,
                '--delay': `${i * 0.08}s`
              } as React.CSSProperties}
            >
              {word}
            </span>
          ))}
        </h2>
        <div className={styles.sparkles} aria-hidden>
          <span className={styles.sparkle}></span>
          <span className={styles.sparkle}></span>
          <span className={styles.sparkle}></span>
          <span className={styles.sparkle}></span>
          <span className={styles.sparkle}></span>
          <span className={styles.sparkle}></span>
        </div>
        <p className={styles.subtitle}>{translations.hero.subtitle}</p>
        <button className={styles.cta} onClick={scrollToProjects}>
          <span className={styles.ctaText}>Explore My Work</span>
          <span className={styles.ctaArrow}>→</span>
        </button>
      </div>

      {/* Decorative blur elements */}
      <div className={styles.blurTop}></div>
      <div className={styles.blurBottom}></div>
    </section>
  );
};

export default Hero;
