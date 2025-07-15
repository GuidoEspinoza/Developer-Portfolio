'use client';

import React, { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  intensity = 'medium',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (cyberpunk style)
    const chars = '0101010ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    const charArray = chars.split('');

    // Configuration based on intensity
    const config = {
      low: { columns: 40, speed: 0.02, opacity: 0.1 },
      medium: { columns: 60, speed: 0.03, opacity: 0.15 },
      high: { columns: 80, speed: 0.04, opacity: 0.2 }
    };

    const { columns, speed, opacity } = config[intensity];
    const fontSize = canvas.width / columns;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    let animationId: number;

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = `rgba(0, 0, 0, ${1 - opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = '#00ffff'; // Cyber cyan
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'center';

      // Draw matrix rain
      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize + fontSize / 2;
        const y = drops[i];

        // Add glow effect for some characters
        if (Math.random() > 0.9) {
          ctx.shadowColor = '#00ffff';
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }

        // Vary color intensity
        const alpha = Math.random() * 0.8 + 0.2;
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        
        ctx.fillText(char, x, y);

        // Reset drop if it goes off screen or randomly
        if (y > canvas.height || Math.random() > 0.99) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += fontSize * speed * 60; // 60fps base
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`}
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)'
      }}
    />
  );
};

export default MatrixBackground;
