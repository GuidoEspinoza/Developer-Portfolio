'use client';

import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  trigger?: 'hover' | 'auto' | 'focus';
  interval?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  intensity = 'medium',
  trigger = 'hover',
  interval = 3000
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  // Glitch characters for cyberpunk effect
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  const cyberChars = '01';

  // Generate glitched version of text
  const generateGlitch = () => {
    if (!isGlitching) return text;
    
    return text
      .split('')
      .map((char, index) => {
        const shouldGlitch = Math.random() < getGlitchProbability();
        if (shouldGlitch && char !== ' ') {
          return Math.random() > 0.5 
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : cyberChars[Math.floor(Math.random() * cyberChars.length)];
        }
        return char;
      })
      .join('');
  };

  // Get glitch probability based on intensity
  const getGlitchProbability = () => {
    switch (intensity) {
      case 'low': return 0.1;
      case 'medium': return 0.2;
      case 'high': return 0.3;
      default: return 0.2;
    }
  };

  // Handle auto glitch effect
  useEffect(() => {
    if (trigger === 'auto') {
      const autoGlitch = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, interval);

      return () => clearInterval(autoGlitch);
    }
  }, [trigger, interval]);

  // Update glitch text when glitching state changes
  useEffect(() => {
    if (isGlitching) {
      const glitchInterval = setInterval(() => {
        setGlitchText(generateGlitch());
      }, 50);

      const stopGlitch = setTimeout(() => {
        setIsGlitching(false);
        setGlitchText(text);
      }, 200);

      return () => {
        clearInterval(glitchInterval);
        clearTimeout(stopGlitch);
      };
    } else {
      setGlitchText(text);
    }
  }, [isGlitching, text]);

  // Event handlers for trigger types
  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsGlitching(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsGlitching(false);
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus') {
      setIsGlitching(true);
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus') {
      setIsGlitching(false);
    }
  };

  // CSS classes for glitch effect
  const glitchClasses = `
    relative
    inline-block
    ${isGlitching ? 'animate-pulse' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span
      className={glitchClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        textShadow: isGlitching
          ? `
            0 0 5px var(--cyber-cyan),
            2px 0 0 var(--cyber-magenta),
            -2px 0 0 var(--cyber-green)
          `
          : 'none',
        filter: isGlitching ? 'blur(0.5px)' : 'none',
        transform: isGlitching ? 'skew(-1deg)' : 'none',
        transition: 'all 0.1s ease-out'
      }}
    >
      {glitchText}
      
      {/* Glitch overlay effects */}
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-cyber-cyan opacity-70"
            style={{
              transform: 'translate(-1px, -1px)',
              clipPath: 'inset(0 0 50% 0)'
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 text-cyber-magenta opacity-70"
            style={{
              transform: 'translate(1px, 1px)',
              clipPath: 'inset(50% 0 0 0)'
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
