import styles from './Header.module.css';
import langStyles from './LanguageToggle.module.css';
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
