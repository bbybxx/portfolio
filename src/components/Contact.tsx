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
        <h2 className={styles.title}>{translations.contact.title}</h2>

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
