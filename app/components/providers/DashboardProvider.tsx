'use client';

import React from 'react';
import CyberDashboard from '../ui/CyberDashboard';
import useCyberDashboard from '../../hooks/useCyberDashboard';

interface DashboardProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const {
    isVisible,
    isFullscreen,
    toggleDashboard,
    toggleFullscreen,
    closeDashboard
  } = useCyberDashboard();

  return (
    <>
      {children}
      
      {/* Dashboard Toggle Button - Solo visible cuando el dashboard está cerrado */}
      {!isVisible && (
        <button
          onClick={toggleDashboard}
          className="fixed top-4 right-4 z-[9999] bg-cyber-surface border border-cyber-cyan p-2 rounded-lg hover:bg-cyber-cyan/10 transition-all duration-300 group"
          style={{ backdropFilter: 'blur(10px)' }}
          title="Open Cyber Dashboard (Ctrl+Shift+D)"
        >
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 border border-cyber-cyan rounded group-hover:border-cyber-magenta transition-colors duration-300">
              <div className="absolute top-1 left-1 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyber-cyan rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </button>
      )}

      {/* Cyber Dashboard */}
      <CyberDashboard
        isVisible={isVisible}
        isFullscreen={isFullscreen}
        onClose={closeDashboard}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Help Overlay - mostrar controles */}
      {isVisible && !isFullscreen && (
        <div className="fixed bottom-4 right-4 z-[9997] bg-black/80 border border-cyber-cyan/50 rounded p-3 backdrop-blur-sm">
          <div className="text-cyber-cyan text-xs font-mono space-y-1">
            <div><kbd className="bg-cyber-surface px-1 rounded">Ctrl+Shift+D</kbd> Toggle Dashboard</div>
            <div><kbd className="bg-cyber-surface px-1 rounded">F11</kbd> Fullscreen</div>
            <div><kbd className="bg-cyber-surface px-1 rounded">Esc</kbd> Close</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardProvider;
