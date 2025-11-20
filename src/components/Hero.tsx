import styles from './Hero.module.css';
import type { Translations } from '../types/index';

interface HeroProps {
  translations: Translations;
}

const Hero = ({ translations }: HeroProps) => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {translations.hero.title.split(' ').map((word, i) => (
            <span 
              key={i} 
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
