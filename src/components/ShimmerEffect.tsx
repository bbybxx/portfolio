import styles from './ShimmerEffect.module.css';

interface ShimmerEffectProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

export default function ShimmerEffect({
  width = '100%',
  height = '20px',
  borderRadius = '8px',
  className = '',
}: ShimmerEffectProps) {
  return (
    <div
      className={`${styles.shimmer} ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
}
