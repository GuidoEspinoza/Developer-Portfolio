'use client';

import React, { useState, useEffect } from 'react';

interface TerminalLine {
  id: string;
  content: string;
  type: 'command' | 'output' | 'error' | 'success';
  delay?: number;
}

interface TerminalWindowProps {
  title?: string;
  lines: TerminalLine[];
  autoType?: boolean;
  typeSpeed?: number;
  className?: string;
  height?: string;
  showControls?: boolean;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal",
  lines,
  autoType = true,
  typeSpeed = 50,
  className = "",
  height = "400px",
  showControls = true
}) => {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(autoType);

  useEffect(() => {
    if (!autoType) {
      setDisplayedLines(lines);
      return;
    }

    if (currentLineIndex >= lines.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = lines[currentLineIndex];
    const timeout = setTimeout(() => {
      if (currentCharIndex === 0) {
        // Start new line
        setDisplayedLines(prev => [...prev, { ...currentLine, content: '' }]);
      }

      if (currentCharIndex < currentLine.content.length) {
        // Continue typing current line
        setDisplayedLines(prev => 
          prev.map((line, index) => 
            index === prev.length - 1 
              ? { ...line, content: currentLine.content.slice(0, currentCharIndex + 1) }
              : line
          )
        );
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Line complete, move to next
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
        
        // Add delay before next line if specified
        if (currentLine.delay) {
          setTimeout(() => {}, currentLine.delay);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentCharIndex, lines, autoType, typeSpeed]);

  const getLineTypeClass = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-cyber-cyan';
      case 'output':
        return 'text-white';
      case 'error':
        return 'text-red-400';
      case 'success':
        return 'text-cyber-green';
      default:
        return 'text-white';
    }
  };

  const getPrompt = (type: string) => {
    switch (type) {
      case 'command':
        return <span className="text-cyber-green">user@cyberpunk:</span>;
      case 'error':
        return <span className="text-red-400">[ERROR]</span>;
      case 'success':
        return <span className="text-cyber-green">[SUCCESS]</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`cyber-border bg-cyber-surface ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-cyber-cyan/30">
        <div className="flex items-center space-x-3">
          {showControls && (
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          )}
          <span className="text-sm text-cyber-cyan font-mono">{title}</span>
        </div>
        <div className="text-xs text-gray-400 font-mono">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        className="p-4 font-mono text-sm overflow-y-auto cyber-scrollbar"
        style={{ height }}
      >
        {displayedLines.map((line, index) => (
          <div key={line.id} className="flex items-start space-x-2 mb-1">
            {getPrompt(line.type)}
            <span className={getLineTypeClass(line.type)}>
              {line.content}
              {isTyping && index === displayedLines.length - 1 && (
                <span className="animate-pulse text-cyber-cyan">_</span>
              )}
            </span>
          </div>
        ))}
        
        {/* Cursor for empty terminal */}
        {displayedLines.length === 0 && autoType && (
          <div className="flex items-center space-x-2">
            <span className="text-cyber-green">user@cyberpunk:</span>
            <span className="animate-pulse text-cyber-cyan">_</span>
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 border-t border-cyber-cyan/30 text-xs text-gray-400 font-mono">
        <span className="text-cyber-cyan">Status:</span> 
        <span className={isTyping ? "text-cyber-green" : "text-gray-400"}>
          {isTyping ? " Active" : " Ready"}
        </span>
      </div>
    </div>
  );
};

export default TerminalWindow;
