import styles from './Footer.module.css';
import type { Language } from '../types/index';

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  const year = new Date().getFullYear();
  const copyrightText = language === 'ru' ? 'Все права защищены' : 'All rights reserved';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {year} Vladimir. {copyrightText}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
