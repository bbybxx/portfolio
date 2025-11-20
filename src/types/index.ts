export type Language = 'ru' | 'en';

export interface Project {
  id: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  technologies: string[];
  demoUrl: string;
}

export interface Translations {
  header: {
    name: string;
    specialization: string;
    contactBtn: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    liveDemo: string;
  };
  about: {
    title: string;
    description: string;
    skillsTitle: string;
  };
  contact: {
    title: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    sendBtn: string;
    success: string;
    emailError: string;
  };
}
