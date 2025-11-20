import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import type { Language, Translations } from '../types/index';

interface ProjectsProps {
  language: Language;
  translations: Translations;
}

const Projects = ({ language, translations }: ProjectsProps) => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{translations.projects.title}</h2>
          <p className={styles.subtitle}>Showcase of my featured work</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
              translations={translations}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
