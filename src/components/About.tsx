import styles from './About.module.css';
import type { Translations } from '../types/index';

interface AboutProps {
  translations: Translations;
}

const skills = ['React', 'TypeScript', 'Vite', 'Vercel', 'PWA', 'API Integration', 'Responsive Design', 'Performance Optimization'];

const About = ({ translations }: AboutProps) => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{translations.about.title}</h2>

          <p className={styles.description}>{translations.about.description}</p>

          <div className={styles.skills}>
            <h3 className={styles.skillsTitle}>{translations.about.skillsTitle}</h3>
            <div className={styles.skillsList}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
