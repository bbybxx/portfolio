import styles from './GlitchText.module.css';

interface GlitchTextProps {
  children: string;
}

export default function GlitchText({ children }: GlitchTextProps) {
  return (
    <span className={styles.glitch} data-text={children}>
      {children}
    </span>
  );
}
