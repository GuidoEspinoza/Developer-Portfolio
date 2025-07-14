'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  life: number;
}

const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detectar si está sobre elemento clickeable
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'BUTTON' || 
                         target.tagName === 'A' ||
                         !!target.closest('button') ||
                         !!target.closest('a') ||
                         target.classList.contains('cursor-pointer');
      setIsHovering(isClickable);

      // Crear partículas en movimiento
      if (Math.random() < 0.3) {
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          opacity: 1,
          scale: Math.random() * 0.5 + 0.5,
          life: 1
        };

        setParticles(prev => [...prev, newParticle]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Animación de partículas
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            life: particle.life - 0.02,
            opacity: particle.opacity - 0.02,
            scale: particle.scale * 0.98
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        className="cyber-cursor-main"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Cursor interior */}
        <div className="w-2 h-2 bg-cyber-cyan rounded-full shadow-[0_0_10px_rgba(0,255,255,1)]" />
        
        {/* Anillo exterior */}
        <div 
          className={`absolute inset-0 w-8 h-8 border border-cyber-cyan rounded-full -translate-x-3 -translate-y-3 transition-all duration-200 ${
            isHovering ? 'border-cyber-magenta shadow-[0_0_15px_rgba(255,0,255,0.8)]' : 'shadow-[0_0_8px_rgba(0,255,255,0.5)]'
          }`}
          style={{
            animation: isClicking ? 'cyber-pulse 0.3s ease-out' : 'none'
          }}
        />

        {/* Líneas de escaneo */}
        <div className="absolute inset-0 w-8 h-8 -translate-x-3 -translate-y-3">
          <div className="absolute top-0 left-1/2 w-[1px] h-2 bg-cyber-cyan transform -translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-1/2 w-[1px] h-2 bg-cyber-cyan transform -translate-x-1/2 animate-pulse" />
          <div className="absolute left-0 top-1/2 w-2 h-[1px] bg-cyber-cyan transform -translate-y-1/2 animate-pulse" />
          <div className="absolute right-0 top-1/2 w-2 h-[1px] bg-cyber-cyan transform -translate-y-1/2 animate-pulse" />
        </div>
      </div>

      {/* Partículas del cursor */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="cyber-cursor-particle"
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            pointerEvents: 'none',
            zIndex: 9998,
            transform: `translate(-50%, -50%) scale(${particle.scale})`,
            opacity: particle.opacity
          }}
        >
          <div className="w-1 h-1 bg-cyber-cyan rounded-full shadow-[0_0_4px_rgba(0,255,255,1)]" />
        </div>
      ))}

      <style jsx>{`
        @keyframes cyber-pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 8px rgba(0,255,255,0.5);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(0,255,255,1), 0 0 30px rgba(255,0,255,0.5);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 8px rgba(0,255,255,0.5);
          }
        }
      `}</style>
    </>
  );
};

export default CyberCursor;
