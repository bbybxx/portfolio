import styles from './Header.module.css';
import type { Language, Translations } from '../types/index';

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
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>{translations.header.name}</h1>
          <p>{translations.header.specialization}</p>
        </div>

        <nav className={styles.nav}>
          <button className={styles.contactBtn} onClick={onContactClick}>
            {translations.header.contactBtn}
          </button>

          <div className={styles.languageToggle}>
            <button
              className={`${styles.langBtn} ${language === 'ru' ? styles.active : ''}`}
              onClick={() => onLanguageChange('ru')}
            >
              РУ
            </button>
            <span className={styles.separator}>|</span>
            <button
              className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
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
