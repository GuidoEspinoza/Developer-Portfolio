import React from 'react';

interface ScanlineOverlayProps {
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'normal' | 'fast';
  color?: 'cyan' | 'magenta' | 'green' | 'white';
  opacity?: number;
  direction?: 'horizontal' | 'vertical' | 'both';
  className?: string;
  children?: React.ReactNode;
}

const ScanlineOverlay: React.FC<ScanlineOverlayProps> = ({
  density = 'medium',
  speed = 'normal',
  color = 'cyan',
  opacity = 0.3,
  direction = 'horizontal',
  className = "",
  children
}) => {
  // Density configurations (line spacing)
  const densityConfig = {
    low: 8,    // Every 8px
    medium: 4, // Every 4px
    high: 2    // Every 2px
  };

  // Speed configurations
  const speedConfig = {
    slow: '4s',
    normal: '2s',
    fast: '1s'
  };

  // Color configurations
  const colorConfig = {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    green: '#39ff14',
    white: '#ffffff'
  };

  const lineSpacing = densityConfig[density];
  const animationDuration = speedConfig[speed];
  const lineColor = colorConfig[color];

  // Generate CSS for scanlines
  const generateScanlineCSS = () => {
    const scanlineGradient = direction === 'horizontal' 
      ? `repeating-linear-gradient(
          0deg,
          transparent,
          transparent ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing}px
        )`
      : direction === 'vertical'
      ? `repeating-linear-gradient(
          90deg,
          transparent,
          transparent ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing}px
        )`
      : `repeating-linear-gradient(
          0deg,
          transparent,
          transparent ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing}px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing - 1}px,
          ${lineColor} ${lineSpacing}px
        )`;

    return {
      background: scanlineGradient,
      opacity: opacity
    };
  };

  return (
    <div className={`relative ${className}`}>
      {children}
      
      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={generateScanlineCSS()}
      />

      {/* Moving scan line effect */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <div 
          className="absolute w-full opacity-60"
          style={{
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${lineColor}, transparent)`,
            boxShadow: `0 0 10px ${lineColor}`,
            animation: `scanline-move ${animationDuration} linear infinite`
          }}
        />
      </div>

      {/* Glitch effect lines */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="absolute w-full bg-white/20"
            style={{
              height: '1px',
              top: `${20 + index * 30}%`,
              animation: `glitch-line ${animationDuration} linear infinite`,
              animationDelay: `${index * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Add keyframes to document head */}
      <style jsx>{`
        @keyframes scanline-move {
          0% {
            top: -2px;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes glitch-line {
          0%, 90%, 100% {
            opacity: 0;
            transform: scaleX(0);
          }
          95% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes crt-flicker {
          0%, 100% {
            opacity: 1;
          }
          98% {
            opacity: 1;
          }
          99% {
            opacity: 0.98;
          }
        }
      `}</style>

      {/* CRT flicker effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          background: 'radial-gradient(ellipse, transparent 60%, rgba(0,0,0,0.1) 100%)',
          animation: 'crt-flicker 0.15s linear infinite'
        }}
      />
    </div>
  );
};

export default ScanlineOverlay;
