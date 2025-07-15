import React from 'react';
import { ButtonHTMLAttributes } from 'react';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
  as?: 'button' | 'a';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  variant = 'primary',
  size = 'md',
  glow = true,
  children,
  href,
  target,
  as = 'button',
  className = '',
  ...props
}) => {
  // Color variants for cyberpunk theme
  const variants = {
    primary: {
      gradient: 'from-cyber-cyan to-cyber-magenta',
      hover: 'hover:from-cyber-magenta hover:to-cyber-cyan',
      glow: glow ? 'glow-cyan hover:glow-magenta' : ''
    },
    secondary: {
      gradient: 'from-cyber-magenta to-cyber-blue',
      hover: 'hover:from-cyber-blue hover:to-cyber-magenta',
      glow: glow ? 'glow-magenta hover:glow-cyan' : ''
    },
    success: {
      gradient: 'from-cyber-green to-cyber-cyan',
      hover: 'hover:from-cyber-cyan hover:to-cyber-green',
      glow: glow ? 'glow-green hover:glow-cyan' : ''
    },
    warning: {
      gradient: 'from-cyber-orange to-cyber-magenta',
      hover: 'hover:from-cyber-magenta hover:to-cyber-orange',
      glow: glow ? 'glow-magenta hover:glow-cyan' : ''
    }
  };

  // Size variants
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const variantClasses = variants[variant];
  const sizeClasses = sizes[size];

  // For gradient border effect
  const borderClasses = `
    p-[1px]
    rounded-full
    bg-gradient-to-r
    ${variantClasses.gradient}
    ${variantClasses.hover}
    ${variantClasses.glow}
    transition-all
    duration-300
    ${className || ''}
  `.trim().replace(/\s+/g, ' ');

  const innerClasses = `
    w-full
    h-full
    flex
    items-center
    justify-center
    gap-2
    bg-black
    rounded-full
    ${sizeClasses}
    font-medium
    uppercase
    tracking-wider
    text-white
    transition-all
    duration-200
    ease-out
  `.trim().replace(/\s+/g, ' ');

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        className={borderClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <div className={innerClasses}>
          {children}
        </div>
      </a>
    );
  }

  return (
    <div className={borderClasses}>
      <button
        className={innerClasses}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default NeonButton;
