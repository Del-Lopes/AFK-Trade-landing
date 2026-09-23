import { useState } from "react";

type Particle = {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const createParticles = (count: number, minSize: number, maxSize: number, speed: number): Particle[] =>
  Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * maxSize + minSize,
    duration: Math.random() * speed + 2,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.2,
  }));

export const SparklesCore = ({
  id,
  className,
  background,
  minSize = 0.5,
  maxSize = 2,
  particleDensity = 50,
  speed = 4,
  particleColor = "#FFFFFF",
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  speed?: number;
  particleColor?: string;
}) => {
  // Gerado uma única vez para as partículas não mudarem de lugar a cada render.
  const [particles] = useState(() => createParticles(particleDensity, minSize, maxSize, speed));

  return (
    <div className={className} id={id} style={{ background }}>
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: particleColor,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};
