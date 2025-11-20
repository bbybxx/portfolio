import styles from './Header.module.css';
import langStyles from './LanguageToggle.module.css';
import type { Language, Translations } from '../types/index';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
  language: Language;
  translations: Translations;
  onLanguageChange: (lang: Language) => void;
  onContactClick: () => void;
}

const Header = ({
  language,
  translations,
  onLanguageChange,
  onContactClick,
}: HeaderProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY;
        // small threshold
        if (Math.abs(delta) > 8) {
          if (delta > 0 && currentY > 80) {
            setIsHidden(true);
          } else if (delta < 0) {
            setIsHidden(false);
          }
          lastY = currentY;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // pointer tilt (micro interaction)
  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return; // avoid tilting on touch
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = headerEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        headerEl.style.setProperty('--tilt-x', `${dy * 6}deg`);
        headerEl.style.setProperty('--tilt-y', `${dx * -6}deg`);
        // move gradient position for extra reaction
        const gx = Math.min(100, Math.max(0, (e.clientX - rect.left) / rect.width * 100));
        const gy = Math.min(100, Math.max(0, (e.clientY - rect.top) / rect.height * 100));
        headerEl.style.setProperty('--g-x', `${gx}%`);
        headerEl.style.setProperty('--g-y', `${gy}%`);
      });
    };
    const resetTilt = () => {
      if (headerEl) {
        headerEl.style.setProperty('--tilt-x', `0deg`);
        headerEl.style.setProperty('--tilt-y', `0deg`);
        headerEl.style.setProperty('--g-x', `50%`);
        headerEl.style.setProperty('--g-y', `50%`);
      }
    };

    headerEl.addEventListener('pointermove', handlePointerMove as any);
    headerEl.addEventListener('pointerleave', resetTilt);
    return () => {
      headerEl.removeEventListener('pointermove', handlePointerMove);
      headerEl.removeEventListener('pointerleave', resetTilt);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  return (
    <header ref={headerRef} className={`${styles.header} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoRow}>
            <span className={styles.accent} aria-hidden></span>
            <h1>{translations.header.name}</h1>
          </div>
          <p>{translations.header.specialization}</p>
        </div>

        <nav className={styles.nav}>
          <button className={styles.contactBtn} onClick={onContactClick}>
            {translations.header.contactBtn}
          </button>

          <div className={langStyles.languageToggle}>
            <button
              className={`${langStyles.langBtn} ${language === 'ru' ? langStyles.active : ''}`}
              onClick={() => onLanguageChange('ru')}
            >
              РУ
            </button>
            <span className={langStyles.separator}>|</span>
            <button
              className={`${langStyles.langBtn} ${language === 'en' ? langStyles.active : ''}`}
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
