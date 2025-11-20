import { useState } from 'react';
import Header from './components/Header';
import ParticleBackground from './components/ParticleBackground';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getTranslation } from './i18n/translations';
import type { Language } from './types/index';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState<Language>('ru');
  const translations = getTranslation(language);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <BackgroundEffects />
      <Header
        language={language}
        translations={translations}
        onLanguageChange={handleLanguageChange}
        onContactClick={handleContactClick}
      />
      <main>
        <ParticleBackground />
        <Hero translations={translations} />
        <About translations={translations} />
        <Projects language={language} translations={translations} />
        <Contact translations={translations} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;
