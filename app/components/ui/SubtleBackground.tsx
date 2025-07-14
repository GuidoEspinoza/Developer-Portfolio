'use client';

import React, { useEffect, useRef } from 'react';

interface SubtleBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  variant?: 'particles' | 'grid' | 'waves' | 'neural';
  interactive?: boolean;
}

const SubtleBackground: React.FC<SubtleBackgroundProps> = ({
  intensity = 'low',
  className = '',
  variant = 'particles',
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

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

    // Mouse tracking para efectos interactivos
    const handleMouseMove = (e: MouseEvent) => {
      if (interactive) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Configuraciones por intensidad
    const config = {
      low: { particleCount: 40, opacity: 0.15, speed: 0.3 },
      medium: { particleCount: 60, opacity: 0.25, speed: 0.5 },
      high: { particleCount: 80, opacity: 0.35, speed: 0.8 }
    };

    const { particleCount, opacity, speed } = config[intensity];

    if (variant === 'particles') {
      // Partículas flotantes sutiles
      const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
        maxOpacity: number;
        fadeDirection: number;
      }> = [];

      // Inicializar partículas
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * speed * 0.5,
          speedY: (Math.random() - 0.5) * speed * 0.3,
          opacity: 0,
          maxOpacity: Math.random() * opacity,
          fadeDirection: 1
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
          // Atracción hacia el cursor (efecto sutil)
          if (interactive) {
            const dx = mouseRef.current.x - particle.x;
            const dy = mouseRef.current.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
              const force = (200 - distance) / 200 * 0.01;
              particle.speedX += (dx / distance) * force;
              particle.speedY += (dy / distance) * force;
            }
          }

          // Actualizar posición
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Fricción para suavizar el movimiento
          particle.speedX *= 0.99;
          particle.speedY *= 0.99;

          // Efecto de respiración sutil
          particle.opacity += particle.fadeDirection * 0.008;
          if (particle.opacity >= particle.maxOpacity || particle.opacity <= 0) {
            particle.fadeDirection *= -1;
          }

          // Mantener en pantalla con wrap-around
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Dibujar partícula con glow sutil
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          gradient.addColorStop(0, `rgba(0, 255, 255, ${particle.opacity})`);
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Núcleo de la partícula
          ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity * 2})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();
    } else if (variant === 'grid') {
      // Grid cyberpunk sutil
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const gridSize = 100;
        const time = Date.now() * 0.001;
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.lineWidth = 1;
        
        // Líneas verticales
        for (let x = 0; x <= canvas.width; x += gridSize) {
          const offsetY = Math.sin(time + x * 0.01) * 10;
          ctx.beginPath();
          ctx.moveTo(x, offsetY);
          ctx.lineTo(x, canvas.height + offsetY);
          ctx.stroke();
        }
        
        // Líneas horizontales
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const offsetX = Math.cos(time + y * 0.01) * 10;
          ctx.beginPath();
          ctx.moveTo(offsetX, y);
          ctx.lineTo(canvas.width + offsetX, y);
          ctx.stroke();
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
    } else if (variant === 'neural') {
      // Red neural sutil
      const nodes: Array<{
        x: number;
        y: number;
        radius: number;
        connections: number[];
      }> = [];

      // Crear nodos
      for (let i = 0; i < particleCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 2,
          connections: []
        });
      }

      // Establecer conexiones
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + 
              Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 200 && node.connections.length < 3) {
              node.connections.push(j);
            }
          }
        });
      });

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar conexiones
        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.lineWidth = 1;
        
        nodes.forEach((node, i) => {
          node.connections.forEach(connectionIndex => {
            const connectedNode = nodes[connectionIndex];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          });
        });
        
        // Dibujar nodos
        ctx.fillStyle = `rgba(0, 255, 255, ${opacity * 2})`;
        nodes.forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [intensity, variant, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default SubtleBackground;
