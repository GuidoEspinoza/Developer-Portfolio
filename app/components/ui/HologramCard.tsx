import React, { ReactNode } from 'react';

interface HologramCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  hover?: boolean;
  glow?: boolean;
}

const HologramCard: React.FC<HologramCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  glow = true
}) => {
  // Color variants for different card types
  const variants = {
    default: {
      border: 'border-cyber-cyan',
      glow: 'glow-cyan',
      hoverGlow: 'hover:glow-magenta',
      gradient: 'from-transparent via-cyber-cyan/5 to-transparent'
    },
    primary: {
      border: 'border-cyber-magenta',
      glow: 'glow-magenta',
      hoverGlow: 'hover:glow-cyan',
      gradient: 'from-transparent via-cyber-magenta/5 to-transparent'
    },
    success: {
      border: 'border-cyber-green',
      glow: 'glow-green',
      hoverGlow: 'hover:glow-cyan',
      gradient: 'from-transparent via-cyber-green/5 to-transparent'
    },
    warning: {
      border: 'border-cyber-orange',
      glow: 'glow-orange',
      hoverGlow: 'hover:glow-magenta',
      gradient: 'from-transparent via-cyber-orange/5 to-transparent'
    }
  };

  const variantClasses = variants[variant];

  const cardClasses = `
    relative
    bg-cyber-surface
    border
    ${variantClasses.border}
    rounded-lg
    backdrop-blur-sm
    ${glow ? variantClasses.glow : ''}
    ${hover ? variantClasses.hoverGlow : ''}
    ${hover ? 'hover:scale-[1.02]' : ''}
    transition-all
    duration-300
    ease-out
    cyber-transition
    scan-lines
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClasses}>
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px]">
        <div className={`h-full bg-gradient-to-r ${variantClasses.gradient}`} />
      </div>
      
      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]">
        <div className={`h-full bg-gradient-to-r ${variantClasses.gradient}`} />
      </div>

      {/* Left border gradient */}
      <div className="absolute top-0 left-0 bottom-0 w-[1px]">
        <div className={`w-full bg-gradient-to-b ${variantClasses.gradient}`} />
      </div>

      {/* Right border gradient */}
      <div className="absolute top-0 right-0 bottom-0 w-[1px]">
        <div className={`w-full bg-gradient-to-b ${variantClasses.gradient}`} />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4">
        <div className={`w-full h-[2px] bg-gradient-to-r ${variantClasses.gradient}`} />
        <div className={`w-[2px] h-full bg-gradient-to-b ${variantClasses.gradient}`} />
      </div>
      
      <div className="absolute top-0 right-0 w-4 h-4">
        <div className={`w-full h-[2px] bg-gradient-to-l ${variantClasses.gradient}`} />
        <div className={`absolute right-0 w-[2px] h-full bg-gradient-to-b ${variantClasses.gradient}`} />
      </div>
      
      <div className="absolute bottom-0 left-0 w-4 h-4">
        <div className={`absolute bottom-0 w-full h-[2px] bg-gradient-to-r ${variantClasses.gradient}`} />
        <div className={`w-[2px] h-full bg-gradient-to-t ${variantClasses.gradient}`} />
      </div>
      
      <div className="absolute bottom-0 right-0 w-4 h-4">
        <div className={`absolute bottom-0 w-full h-[2px] bg-gradient-to-l ${variantClasses.gradient}`} />
        <div className={`absolute right-0 w-[2px] h-full bg-gradient-to-t ${variantClasses.gradient}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Hologram effect overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none rounded-lg"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 255, 0.1) 2px,
              rgba(0, 255, 255, 0.1) 4px
            )
          `
        }}
      />
    </div>
  );
};

export default HologramCard;
