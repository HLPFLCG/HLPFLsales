// Random Logo Spawn Animation Component
import { useState, useEffect } from 'react';

interface LogoInstance {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  delay: number;
  duration: number;
}

export const RandomLogoSpawn = () => {
  const [logos, setLogos] = useState<LogoInstance[]>([]);
  const [hasSpawned, setHasSpawned] = useState(false);

  useEffect(() => {
    if (hasSpawned) return;

    // Generate random logo instances on mount
    const generateLogos = () => {
      const count = Math.floor(Math.random() * 4) + 3; // 3-6 logos
      const newLogos: LogoInstance[] = [];

      for (let i = 0; i < count; i++) {
        newLogos.push({
          id: i,
          x: Math.random() * 80 + 10, // 10-90% from left
          y: Math.random() * 60 + 20, // 20-80% from top
          scale: Math.random() * 0.5 + 0.5, // 0.5-1.0 scale
          rotation: Math.random() * 30 - 15, // -15 to 15 degrees
          delay: Math.random() * 0.5, // 0-0.5s delay
          duration: Math.random() * 1 + 1.5, // 1.5-2.5s duration
        });
      }

      setLogos(newLogos);
      setHasSpawned(true);

      // Clear logos after animation completes
      const maxDuration = Math.max(...newLogos.map(l => l.delay + l.duration));
      setTimeout(() => {
        setLogos([]);
      }, (maxDuration + 0.5) * 1000);
    };

    // Small delay before spawning
    const timer = setTimeout(generateLogos, 300);
    return () => clearTimeout(timer);
  }, [hasSpawned]);

  if (logos.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="absolute animate-logo-spawn"
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            transform: `scale(${logo.scale}) rotate(${logo.rotation}deg)`,
            animationDelay: `${logo.delay}s`,
            animationDuration: `${logo.duration}s`,
          }}
        >
          {/* HLPFL Logo */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-hlpfl-dark/90 backdrop-blur-sm rounded-2xl border-2 border-hlpfl-gold shadow-2xl shadow-hlpfl-gold/30 flex items-center justify-center">
            <span className="text-hlpfl-gold font-bold text-3xl sm:text-4xl">H</span>
          </div>
        </div>
      ))}

      {/* CSS Animation */}
      <style>{`
        @keyframes logoSpawn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-20deg);
          }
          20% {
            opacity: 1;
            transform: scale(1.1) rotate(5deg);
          }
          40% {
            transform: scale(0.95) rotate(-3deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.02) rotate(1deg);
          }
          80% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) rotate(10deg) translateY(-20px);
          }
        }

        .animate-logo-spawn {
          animation-name: logoSpawn;
          animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};
