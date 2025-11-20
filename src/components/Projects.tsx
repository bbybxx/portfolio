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
        <h2 className={styles.title}>{translations.projects.title}</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
              translations={translations}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
