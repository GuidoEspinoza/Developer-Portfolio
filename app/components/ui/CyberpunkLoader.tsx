import React from 'react';

interface CyberpunkLoaderProps {
  variant?: 'bars' | 'circle' | 'matrix' | 'pulse' | 'scan';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'magenta' | 'green' | 'orange';
  speed?: 'slow' | 'normal' | 'fast';
  text?: string;
  className?: string;
}

const CyberpunkLoader: React.FC<CyberpunkLoaderProps> = ({
  variant = 'bars',
  size = 'md',
  color = 'cyan',
  speed = 'normal',
  text,
  className = ""
}) => {
  // Size configurations
  const sizeConfig = {
    sm: { container: 'w-8 h-8', text: 'text-xs', bar: 'h-4' },
    md: { container: 'w-12 h-12', text: 'text-sm', bar: 'h-6' },
    lg: { container: 'w-16 h-16', text: 'text-base', bar: 'h-8' },
    xl: { container: 'w-24 h-24', text: 'text-lg', bar: 'h-12' }
  };

  // Color configurations
  const colorConfig = {
    cyan: { 
      primary: 'border-cyber-cyan bg-cyber-cyan',
      glow: 'shadow-[0_0_10px_rgba(0,255,255,0.5)]',
      text: 'text-cyber-cyan'
    },
    magenta: { 
      primary: 'border-cyber-magenta bg-cyber-magenta',
      glow: 'shadow-[0_0_10px_rgba(255,0,255,0.5)]',
      text: 'text-cyber-magenta'
    },
    green: { 
      primary: 'border-cyber-green bg-cyber-green',
      glow: 'shadow-[0_0_10px_rgba(57,255,20,0.5)]',
      text: 'text-cyber-green'
    },
    orange: { 
      primary: 'border-cyber-orange bg-cyber-orange',
      glow: 'shadow-[0_0_10px_rgba(255,149,0,0.5)]',
      text: 'text-cyber-orange'
    }
  };

  // Speed configurations
  const speedConfig = {
    slow: 'duration-1000',
    normal: 'duration-700',
    fast: 'duration-500'
  };

  const { container, text: textSize, bar } = sizeConfig[size];
  const { primary, glow, text: textColor } = colorConfig[color];
  const animationSpeed = speedConfig[speed];

  const renderLoader = () => {
    switch (variant) {
      case 'bars':
        return (
          <div className={`flex space-x-1 ${container}`}>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`${bar} w-1 ${primary} ${glow} animate-pulse`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: animationSpeed.replace('duration-', '') + 'ms'
                }}
              />
            ))}
          </div>
        );

      case 'circle':
        return (
          <div className={`${container} relative`}>
            <div className={`w-full h-full border-2 border-transparent border-t-cyber-${color} rounded-full animate-spin ${glow}`}
                 style={{ animationDuration: animationSpeed.replace('duration-', '') + 'ms' }} />
            <div className="absolute inset-2 border border-cyber-cyan/30 rounded-full" />
          </div>
        );

      case 'matrix':
        return (
          <div className={`${container} relative`}>
            <div className="grid grid-cols-3 gap-1 w-full h-full">
              {Array.from({ length: 9 }, (_, index) => (
                <div
                  key={index}
                  className={`${primary} ${glow} animate-pulse`}
                  style={{
                    animationDelay: `${(index % 3) * 0.1}s`,
                    animationDuration: animationSpeed.replace('duration-', '') + 'ms'
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 'pulse':
        return (
          <div className={`${container} relative`}>
            <div className={`w-full h-full ${primary} rounded-full animate-ping ${glow}`}
                 style={{ animationDuration: animationSpeed.replace('duration-', '') + 'ms' }} />
            <div className={`absolute inset-2 ${primary} rounded-full opacity-75`} />
          </div>
        );

      case 'scan':
        return (
          <div className={`${container} relative overflow-hidden bg-black/50 border border-cyber-cyan/30`}>
            <div 
              className={`absolute w-full h-1 ${primary} ${glow} animate-bounce`}
              style={{ animationDuration: animationSpeed.replace('duration-', '') + 'ms' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent animate-pulse" />
          </div>
        );

      default:
        return renderLoader();
    }
  };

  return (
    <div className={`flex flex-col items-center space-y-3 ${className}`}>
      {renderLoader()}
      
      {text && (
        <div className={`${textColor} ${textSize} font-mono text-center animate-pulse`}>
          {text}
          <span className="animate-ping">...</span>
        </div>
      )}

      {/* Data flow effect */}
      <div className="flex space-x-1 opacity-60">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className={`w-1 h-1 ${primary} rounded-full animate-pulse`}
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CyberpunkLoader;
