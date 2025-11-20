import { useState } from 'react';
import styles from './Contact.module.css';
import type { Translations } from '../types/index';

interface ContactProps {
  translations: Translations;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = ({ translations }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // No copy actions: contact info and social icons are links only

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.name.trim()) {
      setError('Please enter your name');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError(translations.contact.emailError);
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter a message');
      setLoading(false);
      return;
    }

    // Telegram API integration
    const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      // Fallback: just show success message without sending
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
      setLoading(false);
      return;
    }

    try {
      const message = `
📨 <b>New Contact Form Submission</b>
👤 <b>Name:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
💬 <b>Message:</b> ${formData.message}
      `.trim();

      await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{translations.contact.title}</h2>
        <div className={styles.contactBar}>
          <div className={styles.contactLeft}>
            <a href="mailto:tervladimir1599@gmail.com" className={styles.contactLink} aria-label="Email"> 
              <span className={styles.iconBadge} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 8.5L12 13l9-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className={styles.contactPrimary}>tervladimir1599@gmail.com</span>
            </a>
            <a href="tel:+996223008085" className={styles.contactLink} aria-label="Phone">
              <span className={styles.iconBadge} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12 1.1.38 2.16.77 3.18a2 2 0 0 1-.45 2.11L8.91 10.9a13.61 13.61 0 0 0 6 6l1.9-1.9a2 2 0 0 1 2.11-.45c1.02.39 2.08.65 3.18.77A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className={styles.contactPrimary}>+996 223 008 085</span>
            </a>
          </div>
          <div className={styles.contactRight}>
            <a href="https://t.me/bbybrxx" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={`${styles.iconBtn} ${styles.telegram}`} title="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://wa.me/79198494768" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${styles.iconBtn} ${styles.whatsapp}`} title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={`${styles.iconBtn} ${styles.discord}`} aria-label="Discord" title="Discord">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              placeholder={translations.contact.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              disabled={loading}
            />
          </div>

          <div className={styles.field}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              disabled={loading}
            />
          </div>

          <div className={styles.field}>
            <textarea
              name="message"
              placeholder={translations.contact.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={5}
              disabled={loading}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}
          {submitted && <p className={styles.success}>{translations.contact.success}</p>}

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? '...' : translations.contact.sendBtn}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
