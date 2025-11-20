import styles from './Header.module.css';
import langStyles from './LanguageToggle.module.css';
import type { Language, Translations } from '../types/index';
// Header is static — no hooks required

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
  // No mobile toggle: header is always static with a left contact and right language selector.
  return (
    <header
      className={styles.header}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <button
            className={`${styles.contactBtn} ${language === 'ru' ? styles.contactBtnRU : ''}`}
            onClick={onContactClick}
          >
            {translations.header.contactBtn}
          </button>
          <div className={styles.logo}>
            <div className={styles.logoRow}>
              <span className={styles.accent} aria-hidden></span>
              <h1>{translations.header.name}</h1>
            </div>
            <p>{translations.header.specialization}</p>
          </div>
        </div>

        <div className={styles.right}>
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
        </div>
        {/* No mobile toggle button — layout adapts without extra controls */}
      </div>
    </header>
  );
};

export default Header;
