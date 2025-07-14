'use client';

import React, { useState, useEffect } from 'react';

interface ProgressHackProps {
  value: number; // 0-100
  label?: string;
  variant?: 'default' | 'skill' | 'download' | 'hack' | 'scan';
  color?: 'cyan' | 'magenta' | 'green' | 'orange' | 'red';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showPercentage?: boolean;
  showGlow?: boolean;
  direction?: 'horizontal' | 'vertical' | 'circular';
  hackingEffect?: boolean;
  className?: string;
}

const ProgressHack: React.FC<ProgressHackProps> = ({
  value,
  label,
  variant = 'default',
  color = 'cyan',
  size = 'md',
  animated = true,
  showPercentage = true,
  showGlow = true,
  direction = 'horizontal',
  hackingEffect = false,
  className = ""
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isHacking, setIsHacking] = useState(false);

  // Animate progress value
  useEffect(() => {
    if (!animated) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, animated]);

  // Hacking effect
  useEffect(() => {
    if (!hackingEffect) return;

    const hackingInterval = setInterval(() => {
      setIsHacking(true);
      setTimeout(() => setIsHacking(false), 200);
    }, 3000);

    return () => clearInterval(hackingInterval);
  }, [hackingEffect]);

  // Size configurations
  const sizeConfig = {
    sm: { height: 'h-2', text: 'text-xs', circle: 'w-16 h-16' },
    md: { height: 'h-3', text: 'text-sm', circle: 'w-24 h-24' },
    lg: { height: 'h-4', text: 'text-base', circle: 'w-32 h-32' }
  };

  // Color configurations
  const colorConfig = {
    cyan: { 
      bg: 'bg-cyber-cyan', 
      border: 'border-cyber-cyan',
      text: 'text-cyber-cyan',
      glow: 'shadow-[0_0_10px_rgba(0,255,255,0.5)]'
    },
    magenta: { 
      bg: 'bg-cyber-magenta', 
      border: 'border-cyber-magenta',
      text: 'text-cyber-magenta',
      glow: 'shadow-[0_0_10px_rgba(255,0,255,0.5)]'
    },
    green: { 
      bg: 'bg-cyber-green', 
      border: 'border-cyber-green',
      text: 'text-cyber-green',
      glow: 'shadow-[0_0_10px_rgba(57,255,20,0.5)]'
    },
    orange: { 
      bg: 'bg-cyber-orange', 
      border: 'border-cyber-orange',
      text: 'text-cyber-orange',
      glow: 'shadow-[0_0_10px_rgba(255,149,0,0.5)]'
    },
    red: { 
      bg: 'bg-red-500', 
      border: 'border-red-500',
      text: 'text-red-500',
      glow: 'shadow-[0_0_10px_rgba(255,0,0,0.5)]'
    }
  };

  const { height, text, circle } = sizeConfig[size];
  const { bg, border, text: textColor, glow } = colorConfig[color];

  const getVariantPrefix = () => {
    switch (variant) {
      case 'skill':
        return '⚡ SKILL_LEVEL';
      case 'download':
        return '📥 DOWNLOADING';
      case 'hack':
        return '💻 HACKING';
      case 'scan':
        return '🔍 SCANNING';
      default:
        return 'PROGRESS';
    }
  };

  const renderHorizontalProgress = () => (
    <div className={`w-full ${className}`}>
      {/* Label */}
      {label && (
        <div className={`flex justify-between items-center mb-2 ${text} font-mono`}>
          <span className={textColor}>
            {getVariantPrefix()}: {label}
            {isHacking && <span className="animate-pulse"> [ACCESSING...]</span>}
          </span>
          {showPercentage && (
            <span className={`${textColor} font-bold`}>
              {displayValue}%
            </span>
          )}
        </div>
      )}

      {/* Progress Container */}
      <div className={`relative w-full ${height} bg-black/50 border ${border} cyber-border ${showGlow ? glow : ''}`}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        {/* Progress Bar */}
        <div 
          className={`${height} ${bg} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${displayValue}%` }}
        >
          {/* Glow effect */}
          {showGlow && (
            <div className={`absolute inset-0 ${bg} opacity-50 blur-sm animate-pulse`} />
          )}
          
          {/* Moving highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          
          {/* Data stream effect */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="absolute w-1 h-full bg-white/50 animate-pulse"
                style={{
                  left: `${20 + index * 30}%`,
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Glitch effect */}
        {isHacking && (
          <div className="absolute inset-0 bg-red-500/20 animate-pulse" />
        )}
      </div>

      {/* Status indicators */}
      <div className={`flex justify-between items-center mt-1 ${text} font-mono text-gray-400`}>
        <span>STATUS: {displayValue === 100 ? 'COMPLETE' : 'IN_PROGRESS'}</span>
        <span className="flex space-x-1">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className={`w-1 h-1 ${bg} rounded-full animate-pulse`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </span>
      </div>
    </div>
  );

  const renderCircularProgress = () => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (displayValue / 100) * circumference;

    return (
      <div className={`relative ${circle} ${className}`}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-700"
          />
          
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`${textColor} transition-all duration-1000 ease-out ${showGlow ? glow : ''}`}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          {showPercentage && (
            <span className={`${textColor} text-xl font-bold font-mono`}>
              {displayValue}%
            </span>
          )}
          {label && (
            <span className={`${textColor} text-xs font-mono text-center`}>
              {label}
            </span>
          )}
        </div>
      </div>
    );
  };

  if (direction === 'circular') {
    return renderCircularProgress();
  }

  return renderHorizontalProgress();
};

export default ProgressHack;
