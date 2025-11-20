import type { Translations, Language } from '../types/index';

const translations: Record<Language, Translations> = {
  ru: {
    header: {
      name: 'Владимир',
      specialization: 'Full-Stack Developer',
      contactBtn: 'Свяжитесь со мной',
    },
    hero: {
      title: 'Я создаю современные веб-решения',
      subtitle: 'React | TypeScript | Vite | Vercel',
    },
    projects: {
      title: 'Мои проекты',
      liveDemo: 'Посмотреть',
    },
    about: {
      title: 'Обо мне',
      description: 'Разработчик с опытом создания масштабируемых веб-приложений. Специализируюсь на построении быстрых, отзывчивых интерфейсов с использованием современного стека технологий. Увлекаюсь оптимизацией производительности и пользовательским опытом.',
      skillsTitle: 'Навыки',
    },
    contact: {
      title: 'Контакты',
      namePlaceholder: 'Ваше имя',
      messagePlaceholder: 'Ваше сообщение',
      sendBtn: 'Отправить',
      success: 'Сообщение отправлено!',
      emailError: 'Пожалуйста, введите корректный email',
    },
  },
  en: {
    header: {
      name: 'Vladimir',
      specialization: 'Full-Stack Developer',
      contactBtn: 'Contact Me',
    },
    hero: {
      title: 'I build modern web solutions',
      subtitle: 'React | TypeScript | Vite | Vercel',
    },
    projects: {
      title: 'My Projects',
      liveDemo: 'View Demo',
    },
    about: {
      title: 'About Me',
      description: 'Developer with experience building scalable web applications. I specialize in creating fast, responsive interfaces using modern technology stack. Passionate about performance optimization and user experience.',
      skillsTitle: 'Skills',
    },
    contact: {
      title: 'Get In Touch',
      namePlaceholder: 'Your name',
      messagePlaceholder: 'Your message',
      sendBtn: 'Send Message',
      success: 'Message sent successfully!',
      emailError: 'Please enter a valid email',
    },
  },
};

export const getTranslation = (lang: Language): Translations => translations[lang];
