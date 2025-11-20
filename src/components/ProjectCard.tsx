import { useState } from 'react';
import styles from './ProjectCard.module.css';
import type { Project, Language, Translations } from '../types/index';

interface ProjectCardProps {
  project: Project;
  language: Language;
  translations: Translations;
  index: number;
}

const ProjectCard = ({ project, language, translations, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const title = language === 'ru' ? project.titleRu : project.titleEn;
  const description = language === 'ru' ? project.descriptionRu : project.descriptionEn;

  return (
    <article
      className={styles.card}
      style={{ '--card-index': index } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardBg}></div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((tech, i) => (
            <span
              key={tech}
              className={styles.tech}
              style={{ '--tech-index': i } as React.CSSProperties}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${isHovered ? styles.buttonHovered : ''}`}
      >
        <span className={styles.buttonText}>{translations.projects.liveDemo}</span>
        <span className={styles.arrow}>→</span>
      </a>
    </article>
  );
};

export default ProjectCard;
