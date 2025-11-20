import { useEffect, useRef } from 'react';
import styles from './ParticleBackground.module.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    // Create particles
    const particleCount = Math.min(50, Math.max(30, Math.floor(window.innerWidth / 30)));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      // Clear with minimal redraw
      ctx.fillStyle = 'rgba(17, 24, 39, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
        gradient.addColorStop(0, `rgba(96, 165, 250, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw solid core
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections to all nearby particles (not just alternating)
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distSq = dx * dx + dy * dy;
          const distLimit = 15000; // ~122px

          if (distSq < distLimit) {
            const dist = Math.sqrt(distSq);
            const opacity = Math.max(0, 0.1 * (1 - dist / 122));
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
