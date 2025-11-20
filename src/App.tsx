import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
const ParticleBackground = React.lazy(() => import('./components/ParticleBackground'));
const BackgroundEffects = React.lazy(() => import('./components/BackgroundEffects'));
import Hero from './components/Hero';
const Projects = React.lazy(() => import('./components/Projects'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
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

  const [showDecor, setShowDecor] = useState(false);
  useEffect(() => {
    // Defer heavy decorative pieces until after the initial paint / idle period
    const onIdle = () => setShowDecor(true);
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(onIdle, { timeout: 1000 });
    } else {
      const t = setTimeout(onIdle, 800);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="app">
      {showDecor && (
        <Suspense fallback={null}>
          <BackgroundEffects />
        </Suspense>
      )}
      <Header
        language={language}
        translations={translations}
        onLanguageChange={handleLanguageChange}
        onContactClick={handleContactClick}
      />
      <main>
        <Hero translations={translations} />
        {showDecor && (
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        )}
        <Suspense fallback={null}>
          <About translations={translations} />
        </Suspense>
        <Suspense fallback={null}>
          <Projects language={language} translations={translations} />
        </Suspense>
        <Suspense fallback={null}>
          <Contact translations={translations} />
        </Suspense>
      </main>
      <Suspense fallback={null}> <Footer language={language} /> </Suspense>
    </div>
  );
};

export default App;
