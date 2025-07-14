'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AdvancedParticlesProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  mouseInteraction?: boolean;
  type?: 'data-stream' | 'neural-network' | 'cyber-rain';
}

const AdvancedParticles: React.FC<AdvancedParticlesProps> = ({
  intensity = 'medium',
  className = '',
  mouseInteraction = true,
  type = 'data-stream'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración responsiva
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuraciones por intensidad
    const config = {
      low: { count: 20, speed: 0.5, opacity: 0.4 },
      medium: { count: 35, speed: 0.8, opacity: 0.6 },
      high: { count: 50, speed: 1.2, opacity: 0.8 }
    };

    const { count, speed, opacity } = config[intensity];

    // Tracking del mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseInteraction) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    if (type === 'data-stream') {
      // Data streams cyberpunk
      const dataStreams: Array<{
        x: number;
        y: number;
        speed: number;
        chars: string[];
        opacity: number;
        width: number;
      }> = [];

      // Inicializar data streams
      for (let i = 0; i < count; i++) {
        const chars = [];
        const charCount = Math.floor(Math.random() * 10) + 5;
        for (let j = 0; j < charCount; j++) {
          chars.push(Math.random() > 0.5 ? '1' : '0');
        }

        dataStreams.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - 200,
          speed: (Math.random() * speed + 0.5),
          chars,
          opacity: Math.random() * opacity + 0.2,
          width: Math.random() * 2 + 1
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dataStreams.forEach((stream, index) => {
          // Efecto de atracción al mouse
          if (mouseInteraction) {
            const dx = mouseRef.current.x - stream.x;
            const dy = mouseRef.current.y - stream.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              const force = (150 - distance) / 150 * 0.02;
              stream.x += (dx / distance) * force;
            }
          }

          // Actualizar posición
          stream.y += stream.speed;

          // Reset cuando sale de pantalla
          if (stream.y > canvas.height + 100) {
            stream.y = -100;
            stream.x = Math.random() * canvas.width;
          }

          // Dibujar caracteres
          ctx.font = `${10 + stream.width}px monospace`;
          stream.chars.forEach((char, charIndex) => {
            const charY = stream.y + (charIndex * 15);
            if (charY > 0 && charY < canvas.height) {
              const charOpacity = stream.opacity * (1 - charIndex / stream.chars.length);
              ctx.fillStyle = `rgba(0, 255, 255, ${charOpacity})`;
              ctx.fillText(char, stream.x, charY);
              
              // Glow effect
              ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
              ctx.shadowBlur = 5;
              ctx.fillText(char, stream.x, charY);
              ctx.shadowBlur = 0;
            }
          });
        });

        if (isActive) {
          animationIdRef.current = requestAnimationFrame(animate);
        }
      };

      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [intensity, mouseInteraction, type, isActive]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-[2] ${className}`}
        style={{ 
          background: 'transparent',
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
};

export default AdvancedParticles;
