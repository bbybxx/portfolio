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
        <h2 className={styles.title}>{translations.hero.title}</h2>
        <p className={styles.subtitle}>{translations.hero.subtitle}</p>
        <button className={styles.cta} onClick={scrollToProjects}>
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
