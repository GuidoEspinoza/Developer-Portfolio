'use client';

import { useState, useEffect } from 'react';

export const useCyberDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ctrl + Shift + D para toggle dashboard
      if (event.ctrlKey && event.shiftKey && event.code === 'KeyD') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
      
      // F11 para fullscreen del dashboard
      if (event.code === 'F11' && isVisible) {
        event.preventDefault();
        setIsFullscreen(prev => !prev);
      }

      // Escape para cerrar
      if (event.code === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, isFullscreen]);

  const toggleDashboard = () => setIsVisible(prev => !prev);
  const toggleFullscreen = () => setIsFullscreen(prev => !prev);
  const closeDashboard = () => {
    setIsVisible(false);
    setIsFullscreen(false);
  };

  return {
    isVisible,
    isFullscreen,
    toggleDashboard,
    toggleFullscreen,
    closeDashboard
  };
};

export default useCyberDashboard;
