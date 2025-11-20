import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 'farm-rpg-calculator',
    titleRu: 'Farm RPG Calculator',
    titleEn: 'Farm RPG Calculator',
    descriptionRu: 'PWA приложение для расчёта экономики в Farm RPG. Более 500 активных пользователей. Встроенная интеграция с API для синхронизации данных игры.',
    descriptionEn: 'PWA application for Farm RPG economy calculations. 500+ active users. Integrated API synchronization with game data.',
    technologies: ['React', 'Vite', 'PWA', 'API', 'TypeScript', 'Vercel'],
    demoUrl: 'https://farm-pink-gamma.vercel.app',
  },
  {
    id: 'logistixservice',
    titleRu: 'LogistixService',
    titleEn: 'LogistixService',
    descriptionRu: 'Профессиональный сайт логистической компании с каталогом услуг и системой обратной связи. Оптимизирован для повышения видимости в поисковых системах.',
    descriptionEn: 'Professional logistics company website with service catalog and feedback system. Optimized for search engine visibility.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    demoUrl: 'https://logistixservice.ru',
  },
  {
    id: 'ivintrade',
    titleRu: 'IvinTrade',
    titleEn: 'IvinTrade',
    descriptionRu: 'FinTech платформа для криптовалютных платежей и обмена. Надёжное решение для управления цифровыми активами с интегрированной системой безопасности.',
    descriptionEn: 'FinTech platform for cryptocurrency payments and exchange. Secure solution for digital asset management with integrated security system.',
    technologies: ['Crypto', 'Payment Processing', 'Security', 'FinTech'],
    demoUrl: 'https://ivintrade.kg',
  },
];
