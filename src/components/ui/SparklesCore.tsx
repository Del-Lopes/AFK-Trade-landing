
import { useEffect, useState } from "react";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  speed = 4,
  particleColor,
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
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <div className={className} id={id} style={{ background }}>
      {init && (
        <div className="w-full h-full relative">
          {/* Using a simple CSS-based implementation instead of tsparticles for lightweight sparkles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(particleDensity || 50)].map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * (maxSize || 2) + (minSize || 0.5)}px`,
                  height: `${Math.random() * (maxSize || 2) + (minSize || 0.5)}px`,
                  backgroundColor: particleColor || "#FFFFFF",
                  animationDuration: `${Math.random() * speed + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
