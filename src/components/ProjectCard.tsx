import styles from './ProjectCard.module.css';
import type { Project, Language, Translations } from '../types/index';

interface ProjectCardProps {
  project: Project;
  language: Language;
  translations: Translations;
}

const ProjectCard = ({ project, language, translations }: ProjectCardProps) => {
  const title = language === 'ru' ? project.titleRu : project.titleEn;
  const description = language === 'ru' ? project.descriptionRu : project.descriptionEn;

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
        {translations.projects.liveDemo}
        <span className={styles.arrow}>→</span>
      </a>
    </article>
  );
};

export default ProjectCard;
